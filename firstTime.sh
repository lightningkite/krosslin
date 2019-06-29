#!/usr/bin/env bash

./gradlew --configure-on-demand ":konvenience:publishToMavenLocal"
./gradlew --configure-on-demand ":kommon:publishToMavenLocal"
./gradlew --configure-on-demand ":recktangle:publishToMavenLocal"
./gradlew --configure-on-demand ":reacktive:publishToMavenLocal"
./gradlew --configure-on-demand ":lokalize:publishToMavenLocal"
./gradlew --configure-on-demand ":mirror-plugin:publishToMavenLocal"
./gradlew --configure-on-demand ":mirror-runtime:publishToMavenLocal"
./gradlew --configure-on-demand ":koolui:publishToMavenLocal"

#
#cd kommon
#../gradlew publishToMavenLocal
#cd ..
#
#cd recktangle
#../gradlew publishToMavenLocal
#cd ..
#
#cd reacktive
#../gradlew publishToMavenLocal
#cd ..
#
#cd lokalize
#../gradlew publishToMavenLocal
#cd ..
#
#cd mirror-kotlin
#../gradlew --configure-on-demand "mirror-plugin:publishToMavenLocal"
#../gradlew publishToMavenLocal
#cd ..

#cd mirror-archive
#../gradlew publishToMavenLocal
#cd ..
#
#cd kommunicate-mirror
#../gradlew publishToMavenLocal
#cd ..
#
#cd koolui
#../gradlew publishToMavenLocal
#cd ..
#
#cd mirror-form
#../gradlew publishToMavenLocal
#cd ..
