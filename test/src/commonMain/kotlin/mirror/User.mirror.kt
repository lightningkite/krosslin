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
import com.lightningkite.mirror.form.info.FormNeedsNoContextMirror
import com.lightningkite.mirror.archive.model.UuidMirror
import com.lightningkite.kommon.string.EmailMirror
import com.lightningkite.mirror.form.info.FormEditOnlyMirror
import com.lightningkite.mirror.archive.model.HasUuidMirror
import com.lightningkite.lokalize.time.TimeStampMirror
import com.lightningkite.mirror.form.info.FormHiddenMirror

object UserMirror : MirrorClass<User>() {
    override val empty: User get() = User(
        id = Uuid.randomUUID4(),
        email = Email(""),
        password = "",
        role = User.Role.Citizen,
        rejectTokensBefore = TimeStamp(0)
    )
    @Suppress("UNCHECKED_CAST")
    override val kClass: KClass<User> get() = User::class as KClass<User>
    override val modifiers: Array<Modifier> get() = arrayOf(Modifier.Data)
    override val packageName: String get() = "com.lightningkite.krosslin.test.models"
    override val localName: String get() = "User"
    override val implements: Array<MirrorClass<*>> get() = arrayOf(HasUuidMirror)
    
    val fieldId: Field<User,Uuid> = Field(
        owner = this,
        index = 0,
        name = "id",
        type = UuidMirror,
        optional = true,
        get = { it.id },
        set = { it, value -> it.id = value },
        annotations = listOf<Annotation>(FormHiddenMirror())
    )
    
    val fieldEmail: Field<User,Email> = Field(
        owner = this,
        index = 1,
        name = "email",
        type = EmailMirror,
        optional = true,
        get = { it.email },
        set = { it, value -> it.email = value },
        annotations = listOf<Annotation>(FormNeedsNoContextMirror())
    )
    
    val fieldPassword: Field<User,String> = Field(
        owner = this,
        index = 2,
        name = "password",
        type = StringMirror,
        optional = true,
        get = { it.password },
        set = { it, value -> it.password = value },
        annotations = listOf<Annotation>(FormEditOnlyMirror())
    )
    
    val fieldRole: Field<User,User.Role> = Field(
        owner = this,
        index = 3,
        name = "role",
        type = UserRoleMirror,
        optional = true,
        get = { it.role },
        set = { it, value -> it.role = value },
        annotations = listOf<Annotation>()
    )
    
    val fieldRejectTokensBefore: Field<User,TimeStamp> = Field(
        owner = this,
        index = 4,
        name = "rejectTokensBefore",
        type = TimeStampMirror,
        optional = true,
        get = { it.rejectTokensBefore },
        set = { it, value -> it.rejectTokensBefore = value },
        annotations = listOf<Annotation>(FormEditOnlyMirror())
    )
    
    override val fields: Array<Field<User, *>> = arrayOf(fieldId, fieldEmail, fieldPassword, fieldRole, fieldRejectTokensBefore)
    
    override fun deserialize(decoder: Decoder): User {
        var idSet = false
        var fieldId: Uuid? = null
        var emailSet = false
        var fieldEmail: Email? = null
        var passwordSet = false
        var fieldPassword: String? = null
        var roleSet = false
        var fieldRole: User.Role? = null
        var rejectTokensBeforeSet = false
        var fieldRejectTokensBefore: TimeStamp? = null
        val decoderStructure = decoder.beginStructure(this)
        loop@ while (true) {
            when (decoderStructure.decodeElementIndex(this)) {
                CompositeDecoder.READ_ALL -> {
                    fieldId = decoderStructure.decodeSerializableElement(this, 0, UuidMirror)
                    idSet = true
                    fieldEmail = decoderStructure.decodeSerializableElement(this, 1, EmailMirror)
                    emailSet = true
                    fieldPassword = decoderStructure.decodeStringElement(this, 2)
                    passwordSet = true
                    fieldRole = decoderStructure.decodeSerializableElement(this, 3, UserRoleMirror)
                    roleSet = true
                    fieldRejectTokensBefore = decoderStructure.decodeSerializableElement(this, 4, TimeStampMirror)
                    rejectTokensBeforeSet = true
                    break@loop
                }
                CompositeDecoder.READ_DONE -> break@loop
                0 -> {
                    fieldId = decoderStructure.decodeSerializableElement(this, 0, UuidMirror)
                    idSet = true
                }
                1 -> {
                    fieldEmail = decoderStructure.decodeSerializableElement(this, 1, EmailMirror)
                    emailSet = true
                }
                2 -> {
                    fieldPassword = decoderStructure.decodeStringElement(this, 2)
                    passwordSet = true
                }
                3 -> {
                    fieldRole = decoderStructure.decodeSerializableElement(this, 3, UserRoleMirror)
                    roleSet = true
                }
                4 -> {
                    fieldRejectTokensBefore = decoderStructure.decodeSerializableElement(this, 4, TimeStampMirror)
                    rejectTokensBeforeSet = true
                }
                else -> {}
            }
        }
        decoderStructure.endStructure(this)
        if(!idSet) {
            fieldId = Uuid.randomUUID4()
        }
        if(!emailSet) {
            fieldEmail = Email("")
        }
        if(!passwordSet) {
            fieldPassword = ""
        }
        if(!roleSet) {
            fieldRole = User.Role.Citizen
        }
        if(!rejectTokensBeforeSet) {
            fieldRejectTokensBefore = TimeStamp(0)
        }
        return User(
            id = fieldId as Uuid,
            email = fieldEmail as Email,
            password = fieldPassword as String,
            role = fieldRole as User.Role,
            rejectTokensBefore = fieldRejectTokensBefore as TimeStamp
        )
    }
    
    override fun serialize(encoder: Encoder, obj: User) {
        val encoderStructure = encoder.beginStructure(this)
        encoderStructure.encodeSerializableElement(this, 0, UuidMirror, obj.id)
        encoderStructure.encodeSerializableElement(this, 1, EmailMirror, obj.email)
        encoderStructure.encodeStringElement(this, 2, obj.password)
        encoderStructure.encodeSerializableElement(this, 3, UserRoleMirror, obj.role)
        encoderStructure.encodeSerializableElement(this, 4, TimeStampMirror, obj.rejectTokensBefore)
        encoderStructure.endStructure(this)
    }
}
