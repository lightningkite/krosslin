package com.lightningkite.krosslin.test

import at.favre.lib.crypto.bcrypt.BCrypt

private val bcrypt = BCrypt.withDefaults()
private const val hashedPrefix = "hashed:"

fun String.secureHash(): String {
    return if (this.startsWith(hashedPrefix)) this
    else hashedPrefix + bcrypt.hashToString(12, this.toCharArray())
}

fun String.checkAgainstSecureHash(hash: String): Boolean {
    val verify = BCrypt.verifyer().verify(this.toCharArray(), hash.removePrefix(hashedPrefix).toCharArray())
    return verify.verified
}