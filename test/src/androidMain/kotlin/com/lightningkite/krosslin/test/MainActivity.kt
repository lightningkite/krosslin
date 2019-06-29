package com.lightningkite.krosslin.test

import android.os.Bundle
import android.view.View
import com.lightningkite.koolui.ApplicationAccess
import com.lightningkite.koolui.android.AndroidMaterialViewFactory
import com.lightningkite.koolui.android.access.AccessibleActivity
import com.lightningkite.koolui.builders.contentRoot
import com.lightningkite.koolui.color.ColorSet
import com.lightningkite.koolui.color.Theme
import com.lightningkite.koolui.views.ViewFactory

class MainActivity : AccessibleActivity() {

    companion object {
        val main = MainVG<View>()
    }

    class Factory(
            val activity: AccessibleActivity,
            colorSet: ColorSet = theme.main
    ) : MyViewFactory<View>, ViewFactory<View> by AndroidMaterialViewFactory(activity, theme, colorSet) {
        override fun withColorSet(colorSet: ColorSet): ViewFactory<View> = Factory(activity, colorSet)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        ApplicationAccess.init(this, R.drawable.ic_notifications)

        setContentView(Factory(this).contentRoot(main))
    }


}
