package com.lightningkite.krosslin.test

import com.lightningkite.koolui.color.*
import com.lightningkite.koolui.views.*
import com.lightningkite.koolui.builders.*
import com.lightningkite.koolui.views.root.contentRoot
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window


class Factory(
        colorSet: ColorSet = theme.main
) : MyViewFactory<HTMLElement>, ViewFactory<HTMLElement> by HtmlViewFactory(theme, colorSet) {
    override fun withColorSet(colorSet: ColorSet): ViewFactory<HTMLElement> = Factory(colorSet)
}

fun main(args: Array<String>) {
    window.onload = {
        document.body!!.appendChild(
                Factory().contentRoot(MainVG<HTMLElement>())
        )
    }
}
