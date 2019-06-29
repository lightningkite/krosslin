package com.lightningkite.krosslin.test

import com.lightningkite.kommon.exception.stackTraceString
import com.lightningkite.mirror.archive.database.RamDatabase
import com.lightningkite.mirror.archive.postgres.PostgresDatabase
import com.lightningkite.mirror.archive.property.RamSuspendProperty
import com.lightningkite.mirror.archive.redis.RedisBinarySuspendProperty
import com.lightningkite.mirror.archive.redis.RedisStringSuspendProperty
import com.lightningkite.mirror.archive.server.*
import com.lightningkite.mirror.expose
import com.lightningkite.mirror.register
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.ContentNegotiation
import io.ktor.features.StatusPages
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.routing


fun Application.main() {
    registerEverything()
    storage.configure(environment.config)
    cache.configure(environment.config)

    install(ContentNegotiation) {
        register(rpcRequestSerializer)
    }
    install(StatusPages) {
        status(HttpStatusCode.NotFound) {
            call.respond("Nothing here")
        }
        exception<Exception> {
            call.respond("Throwing error:\n ${it.stackTraceString()}")
        }
    }
    routing {
        println("Setting up server function")
        get("hello") {
            call.respondText("HYPE", ContentType.Text.Plain, HttpStatusCode.Accepted)
        }
        expose(requestHandler, "request", false)
    }
}
