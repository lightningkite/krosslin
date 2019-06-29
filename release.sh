#!/usr/bin/env bash

cd kommon
../gradlew build
../gradlew publish
cd ..

cd recktangle
../gradlew build
../gradlew publish
cd ..

cd reacktive
../gradlew build
../gradlew publish
cd ..

cd lokalize
../gradlew build
../gradlew publish
cd ..

cd mirror-kotlin
../gradlew --configure-on-demand "mirror-plugin:publishToMavenLocal"
../gradlew build
../gradlew publish
cd ..

#cd kommunicate
#../gradlew build
#../gradlew publishToMavenLocal
#cd ..
#
#cd mirror-archive
#../gradlew build
#../gradlew publishToMavenLocal
#cd ..
#
#cd kommunicate-mirror
#../gradlew build
#../gradlew publishToMavenLocal
#cd ..
#
#cd koolui
#../gradlew build
#../gradlew publishToMavenLocal
#cd ..
#
#cd mirror-form
#../gradlew build
#../gradlew publishToMavenLocal
#cd ..
