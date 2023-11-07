'use client'
import { ReactElement } from "react";
//@ts-ignore
import { Highlight, themes } from "prism-react-renderer"

interface CodeProps {
  code: string;
  filename: string;
  language: string;
  highlightedLines: number[];
}

export default function CodeBlock({code, filename, language, highlightedLines}: CodeProps): ReactElement {
  const checkLine = (index: number) => {
    if (highlightedLines !== undefined) {
      if (highlightedLines.includes(index)) {
        return true
      } else {
        return false
      }
    } else return null
  } 
  
  return (
    <div>
      <div className="flex justify-between ">
        <p className='opacity-70'>
          {filename}
        </p>
        <p>
          language: <span className="opacity-70">{language}</span>
        </p>
      </div>
    <Highlight
      // based on the current theme, change the code-theme
      theme={themes.vsDark} 
      code={code} // the code in the form it came in from Sanity.
      language={language}
      >
        {({ 
        className, style, 
        tokens, getLineProps, 
        getTokenProps }: any
        ) => (
          <pre 
          className={`${className} !bg-transparent px-2`} 
          style={style}>
          {tokens.map((line: any, i: number) => {
            const lineProps = getLineProps({ line, key: i })
            if (checkLine(i + 1)) {   
              // set the background-color of the highlighted lines. 
              // Use any CSS classnames you like.
              lineProps.className = `${lineProps.className}
              bg-[#fef3c8] dark:bg-[#27261c]`
            }
            return (
              <div key={i}>
              {line.map((token: any, key: any) => (
                <span key={key }{...getTokenProps({ token })} />
                ))}
              </div>
            )
          })}
          </pre>
        )}
    </Highlight>
    </div>
    )
}