import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Mermaid,MermaidProps} from './Mermaid'

const CodeBlock=({node, inline, className, children, ...props}:any):JSX.Element=> {
  const match = /language-(\w+)/.exec(className || '');
  let renderer:JSX.Element = <code className={className} {...props}>{children}</code>;
   if(!inline && match){
    if(className==='language-mermaid'){
      const mermaidProps: MermaidProps = {
        text: String(children).replace(/\n$/, '')
      };
      renderer = <Mermaid {...mermaidProps} />
    }else{
      renderer = <SyntaxHighlighter
      style={prism}
      language={match[1]}
      wrapLongLines
      customStyle={{
        padding: 0,
        borderRadius: 0,
        background: "transparent",
        margin:0
      }}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
    }
   }
  return renderer;
}

export default CodeBlock;