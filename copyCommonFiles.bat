@echo off
echo %cd%
if exist ".\versions.properties" echo ".\versions.properties exists"
if exist ".\gradle\pom.gradle" echo ".\gradle\pom.gradle exists"
if exist ".\gradle\publish.gradle" echo ".\gradle\publish.gradle exists"

CALL :Subcopy "konvenience"
CALL :Subcopy "kommon"
CALL :Subcopy "lokalize"
CALL :Subcopy "recktangle"
CALL :Subcopy "reacktive"
CALL :Subcopy "mirror-kotlin\mirror-plugin"
CALL :Subcopy "mirror-kotlin\mirror-runtime"
CALL :Subcopy "mirror-kotlin\mirror-server"
CALL :Subcopy "mirror-kotlin\mirror-ktor"
CALL :Subcopy "koolui"
CALL :Subcopy "koolui/koolui"
CALL :Subcopy "koolui/koolui-test"
CALL :Subcopy "koolui/koolui-test-common"
CALL :Subcopy "koolui/koolui-test-android"
CALL :Subcopy "koolui/koolui-test-javafx"
CALL :Subcopy "koolui/koolui-test-common-indirect"
CALL :Subcopy "koolui/koolui-test-js"
CALL :Subcopy "kommunicate"
CALL :Subcopy "kommunicate-mirror"
CALL :Subcopy "mirror-archive\mirror-archive-api"
CALL :Subcopy "mirror-archive\mirror-archive-nitrite"
CALL :Subcopy "mirror-archive\mirror-archive-postgres"
CALL :Subcopy "mirror-archive\mirror-archive-influxdb"
CALL :Subcopy "mirror-archive\mirror-archive-redis"
CALL :Subcopy "mirror-form"
CALL :Subcopy "test"
EXIT /B %ERRORLEVEL%

:Subcopy
echo For %~1%
copy /y ".\versions.properties" ".\%~1%\versions.properties"
copy /y ".\gradle\pom.gradle" ".\%~1%\gradle\pom.gradle"
copy /y ".\gradle\publish.gradle" ".\%~1%\gradle\publish.gradle"
EXIT /B 0
