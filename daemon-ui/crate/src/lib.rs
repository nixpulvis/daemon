use wasm_bindgen::prelude::*;
use daemon_core::Event;

// #[wasm_bindgen]
// pub fn run() -> Result<String, JsValue> {
//     #[cfg(feature = "console_error_panic_hook")]
//     console_error_panic_hook::set_once();

//     let window = web_sys::window().expect("should have a Window");
//     let document = window.document().expect("should have a Document");

//     let text = Event.name();

//     let p: web_sys::Node = document.create_element("p")?.into();
//     p.set_text_content(Some(&text));

//     let body = document.body().expect("should have a body");
//     body.append_child(&p)?;

//     Ok(text)
// }

#[wasm_bindgen]
pub fn get_event() -> Result<String, JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    Ok(Event::new("WTF".into()).to_string())
}
