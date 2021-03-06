//Generated by Lightning Kite's Mirror plugin
//AUTOMATICALLY GENERATED AND WILL BE OVERRIDDEN IF THIS MESSAGE IS PRESENT
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
import com.lightningkite.mirror.info.*
import kotlin.reflect.KClass
import kotlinx.serialization.*
import mirror.kotlin.*

object UserRoleMirror : MirrorEnum<User.Role>() {
    @Suppress("UNCHECKED_CAST")
    override val kClass: KClass<User.Role> get() = User.Role::class as KClass<User.Role>
    override val modifiers: Array<Modifier> get() = arrayOf()
    override val packageName: String get() = "com.lightningkite.krosslin.test.models"
    override val localName: String get() = "User.Role"
    override val enumValues: Array<User.Role> get() = arrayOf(User.Role.Citizen,User.Role.Admin)
    override val owningClass: KClass<*>? get() = User::class
}
