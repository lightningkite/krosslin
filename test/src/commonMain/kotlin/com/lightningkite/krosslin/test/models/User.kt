package com.lightningkite.krosslin.test.models

import com.lightningkite.kommon.string.Email
import com.lightningkite.lokalize.time.TimeStamp
import com.lightningkite.mirror.archive.database.Database
import com.lightningkite.mirror.archive.model.HasUuid
import com.lightningkite.mirror.archive.model.Uuid
import com.lightningkite.mirror.form.info.FormEditOnly
import com.lightningkite.mirror.form.info.FormHidden
import com.lightningkite.mirror.form.info.FormNeedsNoContext
import com.lightningkite.mirror.info.ThrowsTypes
import com.lightningkite.mirror.request.Request


data class User(
        @FormHidden override var id: Uuid = Uuid.randomUUID4(),
        @FormNeedsNoContext var email: Email = Email(""),
        @FormEditOnly var password: String = "",
        var role: User.Role = User.Role.Citizen,
        @FormEditOnly var rejectTokensBefore: TimeStamp = TimeStamp(0)
) : HasUuid {


    //region Helper Data

    data class Token(val string: String)
    
    enum class Role {
        Citizen,
        Admin
    }

    //endregion

    //region Server Functions

    data class Access(val token: User.Token? = null): Database.Request<User>

    @ThrowsTypes(arrayOf("NoSuchElementException", "ForbiddenException"))
    data class GetToken(val email: Email, val password: String) : Request<User.Token>

    data class ResetPassword(val email: Email) : Request<Unit>

    //endregion
}
