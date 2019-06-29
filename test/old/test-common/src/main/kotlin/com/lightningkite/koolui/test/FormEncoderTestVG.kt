package com.lightningkite.koolui.test

import com.lightningkite.kommunicate.mirror.RemoteRequestHandler
import com.lightningkite.koolui.builders.vertical
import com.lightningkite.koolui.concepts.Animation
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.mirror.archive.database.SuspendMapRegistry
import com.lightningkite.mirror.form.FormEncoder
import com.lightningkite.mirror.form.ViewContext
import com.lightningkite.mirror.form.ViewSize
import com.lightningkite.mirror.info.Type
import com.lightningkite.mirror.serialization.json.JsonSerializer
import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.reacktive.list.WrapperObservableList
import com.lightningkite.reacktive.property.CombineObservableProperty2
import com.lightningkite.reacktive.property.StandardObservableProperty
import com.lightningkite.reacktive.property.transform

class FormEncoderTestVG<VIEW>(val stack: MutableObservableList<ViewGenerator<ViewFactory<VIEW>, VIEW>>) : ViewGenerator<ViewFactory<VIEW>, VIEW> {
    override val title: String = "Form Encoder Test"

    data class InfoToRender(val name: String, val type: Type<*>, val value: Any?)
    val selected = StandardObservableProperty(ViewEncoderTestVG.options.first())
    val sizeObs = StandardObservableProperty(ViewSize.Full)
    val repository = HashMap<String, Any?>()

    override fun generate(dependency: ViewFactory<VIEW>): VIEW = with(dependency) {

        val encoder = FormEncoder(
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
                    options = WrapperObservableList(ViewEncoderTestVG.options.toMutableList()),
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
            var previous = selected.value
            +scrollVertical(swap((CombineObservableProperty2(selected, sizeObs){ a, b -> a to b }).transform {
                if(previous != it.first) {
                    repository.clear()
                    previous = it.first
                }

                val builder = FormEncoder.Builder(dependency, stack, startContext = ViewContext(size = it.second), dataRepository = repository)
                val otherRef = builder
                encoder.encode(otherRef as FormEncoder.Builder<Any?>, it.first.value, it.first.type as Type<Any?>)
                val view = builder.view!!

                view to Animation.Fade
            }))
        }
    }
}
