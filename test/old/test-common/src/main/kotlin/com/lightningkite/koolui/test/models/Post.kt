package com.lightningkite.koolui.test.models

import com.lightningkite.lokalize.time.TimeStamp
import com.lightningkite.lokalize.time.now
import com.lightningkite.mirror.archive.model.Id
import com.lightningkite.mirror.form.DefaultSort
import com.lightningkite.mirror.form.Hidden
import com.lightningkite.mirror.form.Importance

data class Post(
        @Hidden val id: Id = Id.randomUUID4(),
        @Importance(.8f) val title: String = "Title",
        @Importance(.6f) val body: String = "This is the post's body.  It's pretty long, and it needs to be truncated.  This is the post's body.  It's pretty long, and it needs to be truncated.  This is the post's body.  It's pretty long, and it needs to be truncated.  ",
        @DefaultSort val timeStamp: TimeStamp = TimeStamp.now(),
        @Importance(.2f) val format: String = "Some Format"
)