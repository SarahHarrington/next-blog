'use client'
import { ReactElement, useEffect } from "react";
//@ts-ignore
import { Highlight, themes } from "prism-react-renderer"
import { useTheme } from 'next-themes'
//nightOwl nightOwlLight

interface CodeProps {
  code: string;
  filename: string;
  language: string;
  highlightedLines: number[];
}

export default function CodeBlock({code, filename, language, highlightedLines}: CodeProps): ReactElement {
  const { theme, setTheme } = useTheme()
  
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
      <div className="grid grid-cols-2 m-0 items-end">
          <p className="grid opacity-70 self-end p-0 m-0 font-firaCode text-sm">
            {filename ? filename : ''}
          </p>
        <p className="m-0 text-end text-sm">
          language: <span className="opacity-70 h-0 font-firaCode">{language}</span>
        </p>
      </div>
      <Highlight
        // based on the current theme, change the code-theme
        theme={theme === 'dark' ? themes.nightOwl : themes.nightOwlLight} 
        code={code} // the code in the form it came in from Sanity.
        language={language}
        >
          {({ 
          className, style, 
          tokens, getLineProps, 
          getTokenProps }: any
          ) => (
            <>
              <pre 
                className={`${className} !bg-transparent px-2 font-firaCode m-0.5 text-sm border-2 border-black-russian-950 dark:border-black-russian-900`} 
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
            </>
          )}
      </Highlight>
    </div>
    )
}