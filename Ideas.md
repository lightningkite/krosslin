# Ideas

- Upload bigger files to store in a database along with a request
    - Option: in request, multipart with name overrides empty byte array
    - Option: in request, multipart with name overrides special holder type 'file', which ends up as just a file reference in temp, maxing out at x size 
        - File reference directly?
        - URL: `temp://file.gif` - this might work really really well, but it's not explicit
- Bring back Kommunicate with iOS websockets
- Part of database interface: `status()`, which returns the status of the DB with information like usage, capacity, etc
- Observe over a network through web sockets
- Stackview on larger screens shows multiple
- KoolUI OpenGL view

Let's step back to actual use of databases.

Goals:
- Store a collection of objects
- Store quick, temporary settings - pairs, I suppose, requires PK to be changeable
- Transfer graphs of objects
- Semi-Partial queries

Database
- Put
- Query
- Delete
- Modify



Top layer margin - 16 - half each step down when using frame()