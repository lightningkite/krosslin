package com.lightningkite.krosslin.test

import io.ktor.server.cio.CIO
import io.ktor.server.engine.ApplicationEngineEnvironment
import io.ktor.server.engine.applicationEngineEnvironment
import io.ktor.server.engine.commandLineEnvironment
import io.ktor.server.engine.embeddedServer

lateinit var environment: ApplicationEngineEnvironment
fun main(args: Array<String>) {
    environment = commandLineEnvironment(args)

    embeddedServer(
            factory = CIO,
            environment = environment
    ).start(true)
}