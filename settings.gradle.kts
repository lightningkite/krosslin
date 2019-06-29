pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
        google()
        jcenter()
        mavenLocal()
        maven("https://dl.bintray.com/lightningkite/com.lightningkite.krosslin")
        maven("https://dl.bintray.com/kotlin/kotlin-eap")
    }
    resolutionStrategy {
        eachPlugin {
            if (requested.id.namespace == "com.android") {
                useModule("com.android.tools.build:gradle:${requested.version}")
            }
            if (requested.id.id == "kotlinx-serialization") {
                useModule("org.jetbrains.kotlin:kotlin-serialization:${requested.version}")
            }
        }
    }
}

enableFeaturePreview("GRADLE_METADATA")

rootProject.name = "krosslin"

include("konvenience")

include("kommon")

include("lokalize")

include("recktangle")

include("reacktive")

include("mirror-plugin")
project(":mirror-plugin").projectDir = file("mirror-kotlin/mirror-plugin")
include("mirror-runtime")
project(":mirror-runtime").projectDir = file("mirror-kotlin/mirror-runtime")
include("mirror-server")
project(":mirror-server").projectDir = file("mirror-kotlin/mirror-server")
include("mirror-ktor")
project(":mirror-ktor").projectDir = file("mirror-kotlin/mirror-ktor")

include("koolui")
project(":koolui").projectDir = file("koolui/koolui")
include("koolui-test")
project(":koolui-test").projectDir = file("koolui/koolui-test")

include("mirror-form")
include("test")

include("mirror-archive-api")
project(":mirror-archive-api").projectDir = file("mirror-archive/mirror-archive-api")
include("mirror-archive-postgres")
project(":mirror-archive-postgres").projectDir = file("mirror-archive/mirror-archive-postgres")
include("mirror-archive-redis")
project(":mirror-archive-redis").projectDir = file("mirror-archive/mirror-archive-redis")
//include("mirror-archive-influxdb")
//project(":mirror-archive-influxdb").projectDir = file("mirror-archive/mirror-archive-influxdb")
include("mirror-archive-server")
project(":mirror-archive-server").projectDir = file("mirror-archive/mirror-archive-server")

//enableFeaturePreview('GRADLE_METADATA')
