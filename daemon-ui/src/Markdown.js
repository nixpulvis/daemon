import React from "react";
import './Markdown.scss'

export default function Markdown({ text, _d }) {
  let html = _d.markdown_to_html(text);

  return <div className="markdown"
              dangerouslySetInnerHTML={{__html:html}}></div>;
}
