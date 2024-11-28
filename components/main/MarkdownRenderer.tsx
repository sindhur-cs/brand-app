import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import type { Components } from 'react-markdown';

interface MarkdownProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content, className = '' }) => {
  const components: Components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          customStyle={{ maxWidth: '100%', overflow: 'auto' }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className} break-words`} {...props}>
          {children}
        </code>
      );
    },
    p: ({ children, ...props }) => (
      <p className="whitespace-pre-wrap break-words" {...props}>
        {children}
      </p>
    ),
    h1: ({ children, ...props }) => (
      <h1 className="break-words" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="break-words" {...props}>
        {children}
      </h2>
    ),
    img: ({ src, alt, ...props }) => (
      <img 
        src={src} 
        alt={alt || ''} 
        className="max-w-full h-auto" 
        {...props}
      />
    ),
    pre: ({ children, ...props }) => (
      <pre className="max-w-full overflow-x-auto" {...props}>
        {children}
      </pre>
    ),
    table: ({ children, ...props }) => (
      <div className="max-w-full overflow-x-auto">
        <table className="w-full" {...props}>
          {children}
        </table>
      </div>
    )
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <ReactMarkdown
        className={`prose dark:prose-invert max-w-none break-words ${className}`}
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;