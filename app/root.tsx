import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

import type { MetaFunction, LinksFunction } from 'remix'
import styles from './styles/app.css'
import highlightStyles from 'highlight.js/styles/a11y-dark.css'
import favicon from './favicon.png'

export const meta: MetaFunction = () => {
  return { title: 'Magically create forms + actions in Remix · Remix Forms' }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: favicon,
      type: 'image/png',
    },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: highlightStyles },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-r from-gray-900 to-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8">
          <Outlet />
        </div>
        <div className="bg-gradient-to-r from-black to-gray-800 text-center text-white p-4">
          Built with ❤️💪🏼 by{' '}
          <a
            className="underline"
            href="https://seasoned.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seasoned
          </a>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
