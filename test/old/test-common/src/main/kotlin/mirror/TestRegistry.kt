package com.lightningkite.koolui.test.models

import com.lightningkite.kommon.native.SharedImmutable
import com.lightningkite.mirror.info.*
import kotlin.reflect.KClass

@SharedImmutable
val TestRegistry = ClassInfoRegistry(
    com.lightningkite.mirror.archive.model.IdClassInfo,
        com.lightningkite.lokalize.time.TimeStampClassInfo,
    com.lightningkite.koolui.test.models.PostClassInfo
)
