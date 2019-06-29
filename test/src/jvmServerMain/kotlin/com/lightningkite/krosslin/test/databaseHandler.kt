package com.lightningkite.krosslin.test

import com.lightningkite.krosslin.test.models.Post
import com.lightningkite.krosslin.test.models.PostMirror
import com.lightningkite.krosslin.test.models.User
import com.lightningkite.krosslin.test.models.UserMirror
import com.lightningkite.mirror.archive.database.LocalDatabaseHandler
import com.lightningkite.mirror.archive.database.SecurityRules
import com.lightningkite.mirror.archive.database.secure
import com.lightningkite.mirror.archive.model.*


val databaseHandler = LocalDatabaseHandler().apply {
    invocation(User.Access::class) {
        val user = token?.user()
        userDb
                .secure(
                        rules = SecurityRules<User>(
                                type = UserMirror,
                                maskObject = User(),
                                limitUpdate = if (user?.role == User.Role.Admin) Condition.Always else UserMirror.fieldId.equal(user?.id
                                        ?: Uuid(0L, 0L))
                        ).apply {
                            UserMirror.fieldPassword.apply {
                                tweaks("Hashes your password") { it.secureHash() }
                                read(UserMirror.fieldId.equal(user?.id ?: Uuid(0L, 0L)))
                            }
                            UserMirror.fieldRole.apply {
                                tweaks("Ignores role elevation") {
                                    val existing = user?.role ?: User.Role.Citizen
                                    if (existing > it) existing else it
                                }
                            }
                        }
                )
    }
    invocation(Post.Access::class) {
        val user = token?.user()
        postDb
                .secure(
                        rules = SecurityRules<Post>(
                                type = PostMirror,
                                maskObject = Post(author = Reference(Uuid(0,0))),
                                limitUpdate = if (user?.role == User.Role.Admin) Condition.Always else PostMirror.fieldAuthor.equal(Reference<User>(user?.id
                                        ?: Uuid(0L, 0L)))
                        ).apply {
                            PostMirror.fieldPosted.ignores()
                            PostMirror.fieldAuthor.tweaks("Forces it to be written by the user") { user!!.reference() }
                        }
                )
    }
}