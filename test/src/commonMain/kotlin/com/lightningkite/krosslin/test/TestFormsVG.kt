package com.lightningkite.krosslin.test

import com.lightningkite.kommon.collection.*
import com.lightningkite.koolui.builders.launchInfoDialog
import com.lightningkite.koolui.concepts.Importance
import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.mirror.form.FormRequest
import com.lightningkite.mirror.form.FormState
import com.lightningkite.mirror.form.GeneralRequest
import com.lightningkite.mirror.form.ViewSize
import com.lightningkite.mirror.form.form.FormViewGenerator
import com.lightningkite.mirror.info.MirrorRegistry
import com.lightningkite.mirror.info.MirrorType
import com.lightningkite.reacktive.list.asObservableList
import com.lightningkite.reacktive.property.StandardObservableProperty
import com.lightningkite.reacktive.property.transform

class TestFormsVG<VIEW>(
        val stack: MutableObservableList<MyViewGenerator<VIEW>>
) : MyViewGenerator<VIEW> {
    override val title: String = "KotlinX UI Test"

    val options = MirrorRegistry.index.value.byClass.values.asSequence().flatMap { sequenceOf(it, it.nullable) }.toList().asObservableList()

    override fun generate(dependency: MyViewFactory<VIEW>): VIEW = with(dependency) {
        list(options){ obs ->
            button(label = obs.transform { it.base.localName + if(it.isNullable) " (Optional)" else "" }, importance = Importance.Low){
                @Suppress("UNCHECKED_CAST") val request = FormRequest<Any?>(
                        general = GeneralRequest(stack = stack),
                        type = obs.value as MirrorType<Any?>,
                        observable = StandardObservableProperty<FormState<Any?>>(FormState.empty()).also { it += { println("New value is: ${it}")} }
                )
                stack.pushFrom(this@TestFormsVG, FormViewGenerator(request.getVG(), request.observable){
                    launchInfoDialog("Result", it.toString())
                })
            }.altClickable {
                @Suppress("UNCHECKED_CAST") val request = FormRequest<Any?>(
                        general = GeneralRequest(stack = stack),
                        type = obs.value as MirrorType<Any?>,
                        observable = StandardObservableProperty<FormState<Any?>>(FormState.empty()).also { it += { println("New value is: ${it}")} },
                        scale = ViewSize.Summary
                )
                stack.pushFrom(this@TestFormsVG, FormViewGenerator(request.getVG(), request.observable){
                    launchInfoDialog("Result", it.toString())
                })
            }
        }
    }
}
