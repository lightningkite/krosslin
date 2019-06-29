package com.lightningkite.krosslin.test

import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.krosslin.test.models.Post
import com.lightningkite.mirror.archive.model.Reference
import com.lightningkite.mirror.archive.model.Uuid
import com.lightningkite.mirror.form.DisplayRequest
import com.lightningkite.mirror.form.GeneralRequest
import com.lightningkite.mirror.info.ListMirror
import com.lightningkite.reacktive.property.ConstantObservableProperty

class TestViewsVG<VIEW>(
        val stack: MutableObservableList<MyViewGenerator<VIEW>>
) : MyViewGenerator<VIEW> {
    override val title: String = "KotlinX UI Test"

    val things = listOf(
            32,
            "Hello world!",
            Post(author = Reference(Uuid.randomUUID4()), title = "Hello!", body = "This is the body of the post"),
            false
    )

    override fun generate(dependency: MyViewFactory<VIEW>): VIEW = with(dependency) {
        DisplayRequest<List<Any?>>(
                general = GeneralRequest(),
                type = ListMirror.minimal,
                observable = ConstantObservableProperty(things)
        ).getVG<MyViewFactory<VIEW>, VIEW>().generate(dependency)
    }
}
