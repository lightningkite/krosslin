package com.lightningkite.krosslin.test

import com.lightningkite.kommon.collection.*
import com.lightningkite.reacktive.list.WrapperObservableList

class MainVG<VIEW>() : MyViewGenerator<VIEW> {
    override val title: String = "KotlinX UI Test"

    val stack = WrapperObservableList<MyViewGenerator<VIEW>>()

    init {
        //Startup
        registerEverything()
        stack.push(SelectorVG(stack))
    }

    override fun generate(dependency: MyViewFactory<VIEW>): VIEW = with(dependency) {
        window(
                dependency = dependency,
                stack = stack,
                tabs = listOf()
        )
    }
}
