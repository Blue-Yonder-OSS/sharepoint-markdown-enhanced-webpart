import * as React from "react";
import { useEffect } from "react";
import mermaid from "mermaid";

export interface MermaidProps {
  text: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ text }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      securityLevel: "loose",
      theme: "default",
      logLevel: 5,
    });
  });

  useEffect(() => {
    if (ref.current && text !== "") {
      mermaid.mermaidAPI.render("preview", text, (result: string) => {
        ref.current.innerHTML = result;
      });
    }
  }, [text]);

  return (
    <>
      <div key="preview" ref={ref} />
      <details>
        <summary>Diagram source</summary>
        <pre>{text}</pre>
      </details>
    </>
  );
};
