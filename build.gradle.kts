buildscript {
    repositories {
        jcenter()
        google()
    }

    dependencies {
        classpath("com.android.tools.build:gradle:3.3.1")
    }
}

plugins {
    kotlin("multiplatform") version "1.3.41" apply false
    id("kotlinx-serialization") version "1.3.41" apply false
//    id("com.android.library") version "3.3.1" apply false
}


tasks.create("printJdkVersion"){
    doLast {
        println(org.gradle.internal.jvm.Jvm.current())
    }
}
