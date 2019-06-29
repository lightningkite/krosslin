//Generated by Lightning Kite's Mirror plugin
//AUTOMATICALLY GENERATED AND WILL BE OVERRIDDEN IF THIS MESSAGE IS PRESENT
package com.lightningkite.mirror.archive.model

import com.lightningkite.mirror.info.*
import kotlin.reflect.KClass

@Suppress("RemoveExplicitTypeArguments", "UNCHECKED_CAST", "USELESS_CAST")
object IdClassInfo: ClassInfo<Id> {

    override val kClass: KClass<Id> = Id::class
    override val modifiers: List<ClassInfo.Modifier> = listOf(ClassInfo.Modifier.Data)
    override val companion: Any? get() = Id

    override val implements: List<Type<*>> = listOf(Type<kotlin.Comparable<com.lightningkite.mirror.archive.model.Id>>(kotlin.Comparable::class, listOf(TypeProjection(Type<com.lightningkite.mirror.archive.model.Id>(com.lightningkite.mirror.archive.model.Id::class, listOf(), false), TypeProjection.Variance.INVARIANT)), false))

    override val packageName: String = "com.lightningkite.mirror.archive.model"
    override val owner: KClass<*>? = null
    override val ownerName: String? = null

    override val name: String = "Id"
    override val annotations: List<AnnotationInfo> = listOf()
    override val enumValues: List<Id>? = null

    val fieldMostSignificantBits = FieldInfo<Id, kotlin.Long>(this, "mostSignificantBits", Type<kotlin.Long>(kotlin.Long::class, listOf(), false), false, { it.mostSignificantBits as kotlin.Long }, listOf())
    val fieldLeastSignificantBits = FieldInfo<Id, kotlin.Long>(this, "leastSignificantBits", Type<kotlin.Long>(kotlin.Long::class, listOf(), false), false, { it.leastSignificantBits as kotlin.Long}, listOf())

    override val fields: List<FieldInfo<Id, *>> = listOf(fieldMostSignificantBits, fieldLeastSignificantBits)

    override fun construct(map: Map<String, Any?>): Id {
        //Gather variables
        val mostSignificantBits: kotlin.Long = map["mostSignificantBits"] as kotlin.Long
        val leastSignificantBits:kotlin.Long = map["leastSignificantBits"] as kotlin.Long
        //Handle the optionals

        //Finally do the call
        return Id(
                mostSignificantBits = mostSignificantBits,
            leastSignificantBits = leastSignificantBits
        )
    }

}
