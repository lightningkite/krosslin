package com.lightningkite.koolui.test

import com.lightningkite.kommunicate.mirror.RemoteRequestHandler
import com.lightningkite.koolui.builders.vertical
import com.lightningkite.koolui.concepts.Animation
import com.lightningkite.koolui.test.models.Post
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.mirror.archive.database.SuspendMapRegistry
import com.lightningkite.mirror.form.ViewContext
import com.lightningkite.mirror.form.ViewEncoder
import com.lightningkite.mirror.form.ViewSize
import com.lightningkite.mirror.info.Type
import com.lightningkite.mirror.info.list
import com.lightningkite.mirror.info.stringMap
import com.lightningkite.mirror.info.type
import com.lightningkite.mirror.serialization.json.JsonSerializer
import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.reacktive.list.WrapperObservableList
import com.lightningkite.reacktive.property.CombineObservableProperty2
import com.lightningkite.reacktive.property.StandardObservableProperty
import com.lightningkite.reacktive.property.transform

class ViewEncoderTestVG<VIEW>(val stack: MutableObservableList<ViewGenerator<ViewFactory<VIEW>, VIEW>>) : ViewGenerator<ViewFactory<VIEW>, VIEW> {
    override val title: String = "View Encoder Test"

    data class InfoToRender(val name: String, val type: Type<*>, val value: Any?)
    companion object {
        val options = listOf(
                InfoToRender(
                        name = "Int",
                        type = Int::class.type,
                        value = 42
                ),
                InfoToRender(
                        name = "List of Ints",
                        type = Int::class.type.list,
                        value = listOf(1,2,3,4)
                ),
                InfoToRender(
                        name = "String to Ints",
                        type = Int::class.type.stringMap,
                        value = mapOf("asdf" to 1, "fdsa" to 2)
                ),
                InfoToRender(
                        name = "String",
                        type = String::class.type,
                        value = "Hello world!"
                ),
                InfoToRender(
                        name = "List of Strings",
                        type = String::class.type.list,
                        value = listOf("First", "Second", "Third")
                ),
                InfoToRender(
                        name = "String to String",
                        type = String::class.type.stringMap,
                        value = mapOf("first" to "1", "second" to "2")
                ),
                InfoToRender(
                        name = "Post",
                        type = Post::class.type,
                        value = Post()
                ),
                InfoToRender(
                        name = "List of Posts",
                        type = Post::class.type.list,
                        value = listOf(
                                Post(),
                                Post(title = "Second"),
                                Post(title = "Third")
                        )
                ),
                InfoToRender(
                        name = "Map of Posts",
                        type = Post::class.type.stringMap,
                        value = mapOf(
                                "a" to Post(),
                                "b" to Post(title = "Second"),
                                "c" to Post(title = "Third")
                        )
                )
        )
    }
    val selected = StandardObservableProperty(options.first())
    val sizeObs = StandardObservableProperty(ViewSize.Full)

    override fun generate(dependency: ViewFactory<VIEW>): VIEW = with(dependency) {

        val encoder = ViewEncoder(
                registry = MainRegistry,
                suspendMaps = SuspendMapRegistry(
                        maps = HashMap(),
                        relations = HashMap()
                ),
                requestHandler = RemoteRequestHandler(
                        onEndpoint = "http://localhost:8080/rpc",
                        headers = mapOf(),
                        serializer = JsonSerializer(MainRegistry)
                )
        )

        vertical {
            -picker(
                    options = WrapperObservableList(options.toMutableList()),
                    selected = selected,
                    makeView = {
                        text(text = it.transform { it.name })
                    }
            )
            -picker(
                    options = WrapperObservableList(ViewSize.values().toMutableList()),
                    selected = sizeObs,
                    makeView = {
                        text(text = it.transform { it.name })
                    }
            )
            +scrollVertical(swap((CombineObservableProperty2(selected, sizeObs){ a, b -> a to b }).transform {

                val builder = ViewEncoder.Builder(dependency, stack, startContext = ViewContext(size = it.second))
                val otherRef = builder
                encoder.encode(otherRef as ViewEncoder.Builder<Any?>, it.first.value, it.first.type as Type<Any?>)
                val view = builder.view!!

                view to Animation.Fade
            }))
        }
    }
}
