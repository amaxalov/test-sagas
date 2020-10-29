/* eslint-disable react/no-danger */
import React from 'react'

interface HtmlProps {
  body: string
  style: string
  scripts: Array<string>
  initialState: {
    initialText: string
  }
}

const Html: React.FC<HtmlProps> = ({ body, initialState, scripts, style }: HtmlProps) => (
  <html>
    <head>
      <meta charSet='UTF-8' />
      <link href='main.css' rel='stylesheet' type='text/css' />
      <div dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{ __html: body }} />

      {initialState && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`,
          }}
        />
      )}
      {scripts.map((item) => (
        <script key={item} src={item} />
      ))}
    </body>
  </html>
)

export default Html
