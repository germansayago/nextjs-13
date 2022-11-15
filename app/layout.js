import '../styles/globals.css'
import Navigation from './components/Navigation'
import { font } from './font.js'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first page</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
