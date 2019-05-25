# Daemon UI

The HTML frontend for the Daemon project.

```sh
rustup toolchain install nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
yaourt -S wasm-pack-git  # TODO: For now from https://gist.github.com/nixpulvis/68b4b7e4ff42db9ce7f2aa5b365e4ca1
sudo pacman -S npm
npm install
```

```sh
# Build Rust.
cargo build
cargo test

# Build wasm JS `pkg`.
wasm-pack build

# Build output JS `dist`.
npm run build

# Start the npm development server.
npm start
```
