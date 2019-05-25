use wasm_bindgen::prelude::*;
use comrak::{self, ComrakOptions};

#[wasm_bindgen]
pub fn markdown_to_html(text: String) -> String {
    comrak::markdown_to_html(&text, &ComrakOptions::default())
}
