package com.lightningkite.krosslin.test

import com.lightningkite.krosslin.test.models.Post
import com.lightningkite.krosslin.test.models.PostMirror
import com.lightningkite.krosslin.test.models.User
import com.lightningkite.krosslin.test.models.UserMirror
import com.lightningkite.mirror.archive.database.RamDatabase
import com.lightningkite.mirror.archive.model.Reference
import com.lightningkite.mirror.archive.model.Uuid
import com.lightningkite.mirror.archive.postgres.PostgresDatabase
import com.lightningkite.mirror.archive.property.RamSuspendProperty
import com.lightningkite.mirror.archive.redis.RedisBinarySuspendProperty
import com.lightningkite.mirror.archive.redis.RedisStringSuspendProperty
import com.lightningkite.mirror.archive.server.ConfiguredDatabaseProvider
import com.lightningkite.mirror.archive.server.ConfiguredSuspendPropertyProvider

val storage = ConfiguredDatabaseProvider(RamDatabase, PostgresDatabase)
val postDb by lazy { storage.get(PostMirror, Post(author = Reference(Uuid(0L, 0L)))) }
val userDb by lazy { storage.get(UserMirror, User()) }

val cache = ConfiguredSuspendPropertyProvider(RamSuspendProperty, RedisStringSuspendProperty, RedisBinarySuspendProperty)