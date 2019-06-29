package com.lightningkite.krosslin.test

import com.lightningkite.kommon.atomic.AtomicReference
import com.lightningkite.koolui.color.Color
import com.lightningkite.koolui.color.Theme
import com.lightningkite.koolui.views.ViewFactory
import com.lightningkite.koolui.views.ViewGenerator
import com.lightningkite.krosslin.test.models.registerKrosslinTest
import com.lightningkite.mirror.archive.model.registerArchive
import com.lightningkite.mirror.ktor.HttpClientRequestHandler
import com.lightningkite.mirror.request.Request
import com.lightningkite.mirror.request.registerKotlin
import com.lightningkite.mirror.request.registerRequests
import io.ktor.client.HttpClient
import kotlinx.serialization.json.Json

val theme: Theme = Theme.light(Color.purple)
interface MyViewFactory<VIEW> : ViewFactory<VIEW> {}
typealias MyViewGenerator<VIEW> = ViewGenerator<MyViewFactory<VIEW>, VIEW>

fun registerEverything(){
    registerKrosslinTest()
    registerArchive()
    registerKotlin()
    registerRequests()
}

val rpcRequestSerializer = Json.nonstrict
val atomicRequestHandler = AtomicReference<Request.Handler>(HttpClientRequestHandler(
        client = HttpClient(),
        url = "http://localhost:8080/rpc",
        serializer = rpcRequestSerializer
))
suspend fun <T> Request<T>.invoke() = atomicRequestHandler.value.invoke(this)