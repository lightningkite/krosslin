package com.lightningkite.krosslin.test

import io.ktor.client.HttpClient
import io.ktor.client.call.call
import io.ktor.client.request.forms.MultiPartFormDataContent
import io.ktor.client.request.forms.formData
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.content.PartData

object Email {

    var iAm = "mailgun@.com"
    val defaultUrl = "https://api.mailgun.net/v3/.com"
    val authHeader = "api:".toByteArray(Charsets.UTF_8)

    suspend fun send(
            to: Sequence<String>,
            subject: String,
            body: String
    ) {
//        HttpClient().post<String>("$defaultUrl/messages") {
//            this.header("Authorization", )
//        }
//        HttpClient().call("$defaultUrl/messages") {
//            this.body = MultiPartFormDataContent(formData {
//                append("")
//            })
//        }
//        Request.Builder()
//                .url("")
//                .header("Authorization", authHeader)
//                .post(MultipartBody.Builder()
//                        .setType(MultipartBody.FORM)
//                        .addFormDataPart("from", "Exit Arcade Server <$iAm>")
//                        .addFormDataPart("to", to)
//                        .addFormDataPart("subject", subject)
//                        .addFormDataPart("html", body)
//                        .also {
//                            for (attachment in attachments) {
//                                it.addFormDataPart(
//                                        "attachment",
//                                        attachment.name,
//                                        RequestBody.create(
//                                                MediaType.parse(attachment.contentType),
//                                                attachment.inputStream.use { it.readBytes() }
//                                        )
//                                )
//                            }
//                        }
//                        .build())
//                .lambdaUnit()
//                .then { result ->
//                    if (!result.isSuccessful()) {
//                        println("Failed to send email to $to")
//                        println(result)
//                    }
//                }
//                .invokeOn(Async)
    }
}