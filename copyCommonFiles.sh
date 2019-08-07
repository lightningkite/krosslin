#!/usr/bin/env bash

copy_for_subproject () {
    cp "./versions.properties" "./$1/versions.properties"
}

copy_for_subproject "konvenience"
copy_for_subproject "kommon"
copy_for_subproject "lokalize"
copy_for_subproject "recktangle"
copy_for_subproject "reacktive"
copy_for_subproject "mirror-kotlin/mirror-plugin"
copy_for_subproject "mirror-kotlin/mirror-runtime"
copy_for_subproject "mirror-kotlin/mirror-server"
copy_for_subproject "koolui"
copy_for_subproject "koolui/koolui"
copy_for_subproject "koolui/koolui-test"
copy_for_subproject "mirror-archive/mirror-archive-api"
copy_for_subproject "mirror-archive/mirror-archive-nitrite"
copy_for_subproject "mirror-archive/mirror-archive-postgres"
copy_for_subproject "mirror-archive/mirror-archive-influxdb"
copy_for_subproject "mirror-archive/mirror-archive-redis"
copy_for_subproject "mirror-form"
copy_for_subproject "kabinet/kabinet-api"
copy_for_subproject "kabinet/kabinet-s3"