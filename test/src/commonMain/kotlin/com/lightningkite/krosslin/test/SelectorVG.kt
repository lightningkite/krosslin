package com.lightningkite.krosslin.test

import com.lightningkite.kommon.collection.*
import com.lightningkite.kommon.string.Email
import com.lightningkite.reacktive.list.observableListOf
import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.koolui.concepts.Importance
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.krosslin.test.models.Post
import com.lightningkite.krosslin.test.models.PostMirror
import com.lightningkite.krosslin.test.models.User
import com.lightningkite.krosslin.test.models.UserMirror
import com.lightningkite.mirror.archive.database.DatabaseMap
import com.lightningkite.mirror.archive.database.RamDatabase
import com.lightningkite.mirror.archive.model.ConditionMirror
import com.lightningkite.mirror.archive.model.Reference
import com.lightningkite.mirror.form.FormRequest
import com.lightningkite.mirror.form.FormState
import com.lightningkite.mirror.form.GeneralRequest
import com.lightningkite.mirror.form.form.ConditionFormVG
import com.lightningkite.mirror.form.other.DatabaseVG
import com.lightningkite.mirror.info.ListMirror
import com.lightningkite.mirror.info.StringMirror
import com.lightningkite.reacktive.property.StandardObservableProperty
import com.lightningkite.reacktive.property.transform

class SelectorVG<VIEW>(
        val stack: MutableObservableList<MyViewGenerator<VIEW>>
) : MyViewGenerator<VIEW> {
    override val title: String = "KotlinX UI Test"

    val userAdmin = User(email = Email("joseph@lightningkite.com"), password = "test", role = User.Role.Admin)
    val userCitizen = User(email = Email("citizen@gmail.com"), password = "test", role = User.Role.Citizen)
    val userDb = RamDatabase<User>(UserMirror, backingData = mutableListOf(userAdmin, userCitizen))
    val postDb = RamDatabase<Post>(PostMirror, backingData = mutableListOf(
            Post(title = "Test Post", author = Reference(userAdmin.id), body = "Hello, this is my test post.  It could be much much longer, but it's not.  I'm bored now.")
    ))
    val general = GeneralRequest(
            databases = DatabaseMap(
                    UserMirror to userDb,
                    PostMirror to postDb
            )
    )

    val tests = observableListOf(
            "Form" to { TestFormsVG(stack) },
            "View" to { TestViewsVG(stack) },
            "ListTest" to {
                FormRequest<List<String>>(
                        general = general.copy(stack = stack as MutableObservableList<ViewGenerator<ViewFactory<Any?>, Any?>>),
                        type = ListMirror(StringMirror),
                        observable = StandardObservableProperty(FormState.success(listOf("First", "Second", "Third")))
                ).getVG<MyViewFactory<VIEW>, VIEW>()
            },
            "PostDB" to { DatabaseVG(stack = stack, type = PostMirror, database = postDb, generalRequest = general.copy(stack = stack)) },
            "UserDB" to { DatabaseVG(stack = stack, type = UserMirror, database = userDb, generalRequest = general.copy(stack = stack)) },
            "Post Filter" to { ConditionFormVG<Post, MyViewFactory<VIEW>, VIEW>(ConditionMirror(PostMirror), FormRequest(general.copy(stack = stack), ConditionMirror(PostMirror))) }
    )

    override fun generate(dependency: MyViewFactory<VIEW>): VIEW = with(dependency) {
        list(data = tests, makeView = { itemObs ->
            button(
                    label = itemObs.transform { item -> item.first },
                    importance = Importance.Low,
                    onClick = {
                        stack.push(itemObs.value.second.invoke())
                    }
            )
        }).margin(8f)
    }
}
