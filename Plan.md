# Plan

- Clean up Android UI
- Clean up iOS UI
- Clean up JS UI
- Remove SVG capability from multiplatform
- Create asset converter
    - Use Batik to convert SVGs to PNGs on needed platforms
- Floater
- Standalone Kotlin File Runner (`.skt`)
    - Run (Graal?) `skt script.skt`
        - Just run Main, passing in arguments
        - `-i` - Runs an interactive console with the definitions in the file
        - `-r` - Inserts the given statement/expression in quotes as `main()`, single quotes are translated to double quotes
    - Edit (IntelliJ, refresh dependencies how?) `skt -edit script.skt`
    - Context Menu