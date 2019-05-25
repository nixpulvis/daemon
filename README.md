# Daemon

Life, in order.

## Main Objects
### Task
### Event
...

## Primitives
### Text
### Number
### Money
### Date/Time
...


## Crates / Packages

### `daemon` (_pending_)
- Background daemon aptly named `daemon` to allow fast, possibly cached access
- System monitoring?

### `daemon-core`
- Main Objects & Primitives
- Serde
- Domain logic

### `daemon-server`
- HTTP Server
    - Static sites
    - Dynamic content
    - Authentication
    - DB? Text files (seriously)

### `daemon-cli`
- fast entry and view
- `git` and `psql` inspired
- could interact directly with `daemon-core` or through `daemon`.

### `daemon-ui`
- `wasm` (using `wasm-pack` and `webpack`)
- Makes HTTP requests to `daemon-server`
- Renders Main Objects & Primitives in HTML/CSS
- Provides client libraries in JS/TS for `daemon(-server)`
