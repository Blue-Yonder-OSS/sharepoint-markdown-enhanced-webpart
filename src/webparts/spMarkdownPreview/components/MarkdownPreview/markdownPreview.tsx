import * as React from "react";
import ReactMarkdown from "react-markdown";
import { PluggableList } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import CodeBlock from "../../plugins/SyntaxHighlight";
// import remarkGemoji from 'remark-gemoji';
const remarkPlugins:PluggableList=[gfm];
const rehypePlugins:PluggableList= [rehypeSlug,[rehypeAutolinkHeadings,{
      behaviour: "append",
      properties:{class:'anchor'},
      content: {
        type: "element",
        tagName: "i",
        properties: {
          className: ["octicon-link"],
        },
        children: [],
      },
    },
  ],
]




const MarkdownMemo = ({ markdown }: any):JSX.Element => {
    const ReactMarkdownMemo = React.useMemo(() => {
      
      const ComponentConstructor = ():JSX.Element => (
        <ReactMarkdown
          className="markdown-body"
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
          components={{ code: CodeBlock }}
        >
          {markdown}
        </ReactMarkdown>
        
      );
      return ComponentConstructor;
    }, [markdown]);
    return <ReactMarkdownMemo />;
  };

const MarkdownComponent = React.memo(MarkdownMemo);

export { MarkdownComponent };