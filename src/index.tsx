import { createRoot } from 'react-dom/client'

import { App } from './App'

const appElement = document.getElementById('root')

if (appElement === null) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(appElement)

root.render(<App />)
