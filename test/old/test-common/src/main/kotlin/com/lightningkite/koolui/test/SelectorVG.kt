package com.lightningkite.koolui.test

import com.lightningkite.kommon.collection.push
import com.lightningkite.koolui.concepts.Importance
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.reacktive.list.MutableObservableList
import com.lightningkite.reacktive.list.observableListOf
import com.lightningkite.reacktive.property.transform

class SelectorVG<VIEW>(
        val stack: MutableObservableList<ViewGenerator<ViewFactory<VIEW>, VIEW>>
) : ViewGenerator<ViewFactory<VIEW>, VIEW> {
    override val title: String = "KotlinX UI Test"

    val tests = observableListOf<Pair<String, (MutableObservableList<ViewGenerator<ViewFactory<VIEW>, VIEW>>)->ViewGenerator<ViewFactory<VIEW>, VIEW>>>(
            "View Encoder Test" to { stack -> ViewEncoderTestVG<VIEW>(stack) },
            "Form Encoder Test" to { stack -> FormEncoderTestVG<VIEW>(stack) },
            "Space Test" to { _ -> SpaceTestVG<VIEW>() },
            "Original Test" to { _ -> OriginalTestVG<VIEW>() },
            "Alpha" to { _ -> AlphaTestVG<VIEW>() },
            "Horizontal" to { _ -> HorizontalVG<VIEW>() },
            "Vertical" to { _ -> VerticalTestVG<VIEW>() },
            "Pages" to { _ -> PagesVG<VIEW>() },
            "Frame" to { _ -> FrameVG<VIEW>() },
            "Http Call Test" to { _ -> HttpCallTestVG<VIEW>() },
            "Controls" to { _ -> ControlsVG<VIEW>() },
            "Notifications" to { _ -> NotificationTestVG<VIEW>() },
            "Icons" to { _ -> IconsTestVG<VIEW>() },
            "URL Displayable Test" to { _ -> UrlImageTestVG<VIEW>() },
            "Dialog" to { _ -> DialogTestVG<VIEW>() }
    )

    override fun generate(dependency: ViewFactory<VIEW>): VIEW = with(dependency) {
        list(data = tests, makeView = { itemObs ->
            button(
                    label = itemObs.transform { item -> item.first },
                    importance = Importance.Low,
                    onClick = {
                        stack.push(itemObs.value.second.invoke(stack))
                    }
            )
        }).margin(8f)
    }
}
