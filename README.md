# Krosslin

A collection of libraries for Kotlin cross-addAsTarget development by [Lightning Kite](https://lightningkite.com)

This is the master repository for editing all of the libraries at once, keeping them in harmony and testing their synergy.

If you want to see an example of all of these working together, take a look at the test app in [koolui](https://github.com/lightningkite/koolui).

More documentation coming soon.

## Repositories

- Kommon - A set of common functionality needed in most projects.
- Kommunicate - HTTP client and web sockets for all platforms.
- Mirror-Kotlin - Artifical reflection and serialization for Kotlin common.
- Reacktive - Tools for reactive programming across platforms.
- Lokalize - Locale information and time across platforms.
- Recktangle - Geometry tools across platforms.
- Kommmunicate-Mirror - A couple of convenience functions for combining Kommunicate's HTTP client with Mirror's serialization.  Also contains a set of tools for doing fully typed RPC.
- Mirror Archive - Serialize and deserialize to databases with ease.
    - Nitrite - For Android/Desktop embedded storage
    - Postgres - For your usual backend storing needs
    
## Upcoming Repositories

- Mirror Archive - Serialize and deserialize to databases with ease.
    - InfluxDB - For storing things in a log
    - Redis - For your backend caching needs
- Skedule - A task queue system using Mirror Archive for making scalable servers
- Autoform - Using KoolUI and Mirror together to automatically generate forms
- Kabinet - An abstraction for file systems.
    - JVM - Simply uses the actual file system of the JVM.
    - Virtual - A virtual file system.
    - S3 - Uses Amazon's S3 for backend purposes.
- Statistick - A full system for measuring and tracking statistics about an application.
    - Server - Server status information, external request information, exception recording, and logging.
    - Client - Exception reporting and analytics
    
## Upcoming Notes

iOS support still needs to be done.  It's going to be single threaded for some things because of how Kotlin Native works, which kinda sucks, but hey, that's what we have.

## TODO

- Tests
    - Field protected DB
    - Hashed field
    - Just a normal function for Rekwest Server
- Reacktive ConcurrentObservableProperty
- Native-ify serialization using Stately
    
- Remote Databases in Rekwest
- Template
- Release
- Mini-Twitter
- InfluxDB for datalog
- Skedule
- Autoform
- Redis for caching
- Kabinet
- Statistick
- iOS
- Circular JSON Serializer and format
