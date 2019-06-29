package com.lightningkite.krosslin.test

import com.lightningkite.krosslin.test.models.User
import com.lightningkite.mirror.archive.database.get
import com.lightningkite.mirror.archive.model.Uuid

fun User.token(): User.Token = User.Token(this.id.toString())
suspend fun User.Token.user(): User? = userDb.get(Uuid.fromUUIDString(string))