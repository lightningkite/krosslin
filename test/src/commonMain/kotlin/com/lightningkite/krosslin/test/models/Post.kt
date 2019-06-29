package com.lightningkite.krosslin.test.models

import com.lightningkite.lokalize.time.TimeStamp
import com.lightningkite.lokalize.time.now
import com.lightningkite.mirror.archive.database.Database
import com.lightningkite.mirror.archive.model.HasUuid
import com.lightningkite.mirror.archive.model.Reference
import com.lightningkite.mirror.archive.model.Uuid
import com.lightningkite.mirror.form.info.FormHidden
import com.lightningkite.mirror.form.info.FormNeedsNoContext

data class Post(
        @FormHidden override val id: Uuid = Uuid.randomUUID4(),
        @FormNeedsNoContext var title: String = "",
        var author: Reference<User>,
        var posted: TimeStamp = TimeStamp.now(),
        var body: String = ""
) : HasUuid {


    //region Server Functions

    data class Access(val token: User.Token? = null): Database.Request<Post>

    //endregion
}
