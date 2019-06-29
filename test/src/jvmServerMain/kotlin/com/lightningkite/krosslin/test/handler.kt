package com.lightningkite.krosslin.test

import com.lightningkite.kommon.exception.ForbiddenException
import com.lightningkite.krosslin.test.models.User
import com.lightningkite.krosslin.test.models.UserMirror
import com.lightningkite.mirror.archive.database.databases
import com.lightningkite.mirror.archive.model.equal
import com.lightningkite.mirror.request.LocalRequestHandler


val requestHandler = LocalRequestHandler().apply {
    this.databases(databaseHandler)

    invocation(User.GetToken::class) {
        val user = userDb.get(
                condition = UserMirror.fieldEmail equal email,
                count = 1
        ).firstOrNull() ?: throw NoSuchElementException("No user with email ${email} was found.")
        if (password.checkAgainstSecureHash(user.password)) {
            user.token()
        } else {
            throw ForbiddenException("Password incorrect.")
        }
    }

    invocation(User.ResetPassword::class) {

    }

}