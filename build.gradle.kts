buildscript {
    repositories {
        jcenter()
        google()
    }

    dependencies {
        classpath("com.android.tools.build:gradle:3.3.1")
    }
}


tasks.create("printJdkVersion"){
    doLast {
        println(org.gradle.internal.jvm.Jvm.current())
    }
}
