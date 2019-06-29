const path = require('path');

module.exports = {
    resolve: {
        alias: {
/*konvenience alias start*/
'kommon': path.resolve(__dirname, 'src/kommon.js'),
'koolui': path.resolve(__dirname, 'src/koolui.js'),
'kotlin': path.resolve(__dirname, 'src/kotlin.js'),
'kotlinx-atomicfu': path.resolve(__dirname, 'src/kotlinx-atomicfu.js'),
'kotlinx-coroutines-core': path.resolve(__dirname, 'src/kotlinx-coroutines-core.js'),
'kotlinx-coroutines-io': path.resolve(__dirname, 'src/kotlinx-coroutines-io.js'),
'kotlinx-io': path.resolve(__dirname, 'src/kotlinx-io.js'),
'kotlinx-serialization-runtime-js': path.resolve(__dirname, 'src/kotlinx-serialization-runtime-js.js'),
'ktor-client-core': path.resolve(__dirname, 'src/ktor-client-core.js'),
'ktor-client-js': path.resolve(__dirname, 'src/ktor-client-js.js'),
'ktor-http': path.resolve(__dirname, 'src/ktor-http.js'),
'ktor-utils': path.resolve(__dirname, 'src/ktor-utils.js'),
'lokalize': path.resolve(__dirname, 'src/lokalize.js'),
'mirror-archive-api': path.resolve(__dirname, 'src/mirror-archive-api.js'),
'mirror-form': path.resolve(__dirname, 'src/mirror-form.js'),
'mirror-ktor': path.resolve(__dirname, 'src/mirror-ktor.js'),
'mirror-runtime': path.resolve(__dirname, 'src/mirror-runtime.js'),
'reacktive': path.resolve(__dirname, 'src/reacktive.js'),
'recktangle': path.resolve(__dirname, 'src/recktangle.js'),
'test': path.resolve(__dirname, 'src/test.js'),
/*konvenience alias end*/


        }
    }
};