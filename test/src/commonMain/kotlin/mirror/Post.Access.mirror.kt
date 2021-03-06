//Generated by Lightning Kite's Mirror plugin
//AUTOMATICALLY GENERATED AND WILL BE OVERRIDDEN IF THIS MESSAGE IS PRESENT
package com.lightningkite.krosslin.test.models

import com.lightningkite.lokalize.time.TimeStamp
import com.lightningkite.lokalize.time.now
import com.lightningkite.mirror.archive.database.Database
import com.lightningkite.mirror.archive.model.HasUuid
import com.lightningkite.mirror.archive.model.Reference
import com.lightningkite.mirror.archive.model.Uuid
import com.lightningkite.mirror.form.info.FormHidden
import com.lightningkite.mirror.form.info.FormNeedsNoContext
import com.lightningkite.mirror.info.*
import kotlin.reflect.KClass
import kotlinx.serialization.*
import mirror.kotlin.*
import com.lightningkite.mirror.archive.database.DatabaseRequestMirror

object PostAccessMirror : MirrorClass<Post.Access>() {
    override val empty: Post.Access get() = Post.Access(
        token = null
    )
    @Suppress("UNCHECKED_CAST")
    override val kClass: KClass<Post.Access> get() = Post.Access::class as KClass<Post.Access>
    override val modifiers: Array<Modifier> get() = arrayOf(Modifier.Data)
    override val packageName: String get() = "com.lightningkite.krosslin.test.models"
    override val localName: String get() = "Post.Access"
    override val implements: Array<MirrorClass<*>> get() = arrayOf(DatabaseRequestMirror(PostMirror))
    override val owningClass: KClass<*>? get() = Post::class
    
    val fieldToken: Field<Post.Access,User.Token?> = Field(
        owner = this,
        index = 0,
        name = "token",
        type = UserTokenMirror.nullable,
        optional = true,
        get = { it.token },
        annotations = listOf<Annotation>()
    )
    
    override val fields: Array<Field<Post.Access, *>> = arrayOf(fieldToken)
    
    override fun deserialize(decoder: Decoder): Post.Access {
        var tokenSet = false
        var fieldToken: User.Token? = null
        val decoderStructure = decoder.beginStructure(this)
        loop@ while (true) {
            when (decoderStructure.decodeElementIndex(this)) {
                CompositeDecoder.READ_ALL -> {
                    fieldToken = decoderStructure.decodeSerializableElement(this, 0, UserTokenMirror.nullable)
                    tokenSet = true
                    break@loop
                }
                CompositeDecoder.READ_DONE -> break@loop
                0 -> {
                    fieldToken = decoderStructure.decodeSerializableElement(this, 0, UserTokenMirror.nullable)
                    tokenSet = true
                }
                else -> {}
            }
        }
        decoderStructure.endStructure(this)
        if(!tokenSet) {
            fieldToken = null
        }
        return Post.Access(
            token = fieldToken as User.Token?
        )
    }
    
    override fun serialize(encoder: Encoder, obj: Post.Access) {
        val encoderStructure = encoder.beginStructure(this)
        encoderStructure.encodeSerializableElement(this, 0, UserTokenMirror.nullable, obj.token)
        encoderStructure.endStructure(this)
    }
}
