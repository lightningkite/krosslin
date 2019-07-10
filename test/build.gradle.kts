import com.lightningkite.konvenience.gradle.*
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformType
import java.util.*

plugins {
    id("com.android.application") //version "3.3.1"
    kotlin("multiplatform")
//    kotlin("dce-js") version "1.3.21"
//    id("org.jetbrains.kotlin.frontend") version "0.0.45"
    `maven-publish`
}

buildscript {
    val versions = java.util.Properties().apply {
        load(project.file("versions.properties").inputStream())
    }
    repositories {
        mavenLocal()
        maven("https://dl.bintray.com/lightningkite/com.lightningkite.krosslin")
        maven("https://dl.bintray.com/kotlin/kotlin-eap")
    }
    dependencies {
        classpath("com.lightningkite:konvenience:+")
        classpath("com.lightningkite:mirror-plugin:${versions.getProperty("mirror")}")
    }
}
apply(plugin = "com.lightningkite.konvenience")
apply(plugin = "com.lightningkite.mirror")
apply(plugin = "kotlin-dce-js")


repositories {
    mavenLocal()
    google()
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/lightningkite/com.lightningkite.krosslin")
    maven("https://kotlin.bintray.com/kotlinx")
}

val versions = Properties().apply {
    load(project.file("versions.properties").inputStream())
}

group = "com.lightningkite"
version = "0.0.1"

val jvmServer = KTarget.jvmVirtual.copy(name = "jvmServer")

kotlin {
    val tryTargets = KTarget.run {
        setOf(
                android,
                javafx,
                jvmVirtual,
                jvmServer,
                js,
                iosArm64,
                iosX64
        )
    }
    sources(tryTargets = tryTargets) {
        main {
            dependency(standardLibrary)
            dependency(coroutines(versions.getProperty("kotlinx_coroutines")).type(KDependencyType.Api))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "kommon", versions.getProperty("kommon"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "lokalize", versions.getProperty("lokalize"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "reacktive", versions.getProperty("reacktive"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "recktangle", versions.getProperty("recktangle"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-runtime", versions.getProperty("mirror"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-ktor", versions.getProperty("mirror"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-archive-api", versions.getProperty("mirror"), groupings = KTargetPredicates.binary))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "koolui", versions.getProperty("koolui"), groupings = KTargetPredicates.ui))
            dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-form", versions.getProperty("koolui"), groupings = KTargetPredicates.ui))
        }
        test {
            dependency(testing)
            dependency(testingAnnotations)
        }

        jvmServer.sources {
            main {
                dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-server", versions.getProperty("mirror")))
                dependency(projectOrMavenDashPlatform("com.lightningkite", "mirror-archive-server", versions.getProperty("mirror")))
                apiSet(projectOrMavenDashPlatform("com.lightningkite", "mirror-archive-postgres", versions.getProperty("mirror")))
                apiSet(projectOrMavenDashPlatform("com.lightningkite", "mirror-archive-redis", versions.getProperty("mirror")))

                apiSingle(maven("at.favre.lib", "bcrypt", "0.8.0"))
                apiSingle(maven("io.ktor", "ktor-server-netty", versions.getProperty("ktor")))
                apiSingle(maven("io.ktor", "ktor-server-cio", versions.getProperty("ktor")))
                apiSingle(maven("io.ktor", "ktor-auth-jwt", versions.getProperty("ktor")))
                apiSingle(maven("io.ktor", "ktor-server-test-host", versions.getProperty("ktor")))
            }
        }

        KTarget.android.sources {
            main {
                apiSingle(maven("com.android.support", "multidex", "1.0.3"))
            }
        }
    }
}

android {
    project.ext.set("android.useAndroidX", true)
    project.ext.set("android.enableJetifier", true)

    compileSdkVersion(28)

    defaultConfig {
        minSdkVersion(16)
        targetSdkVersion(28)

        applicationId = "com.lightningkite.krosslin.test"

        versionCode = 1
        versionName = "1.0"
        multiDexEnabled = true

    }

//    lintOptions {
//        tasks.lint.enabled = false
//    }

//    compileOptions {
//        targetCompatibility("8")
//        sourceCompatibility("8")
//    }

    packagingOptions {
        exclude("META-INF/**.kotlin_module")
    }

    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
            proguardFile(getDefaultProguardFile("proguard-android-optimize.txt"))
            proguardFile("proguard-rules.pro")
        }
    }
}

javaApp(forTarget = jvmServer, mainClassName = "com.lightningkite.krosslin.test.MainKt")
javaApp(forTarget = KTarget.javafx, mainClassName = "com.lightningkite.krosslin.test.MainKt")
jsApp(forTarget = KTarget.js)
