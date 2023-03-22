/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Libraries */
import React from 'react'
import { createRoot } from 'react-dom/client'

/* Components */
import Page from './Page'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <Page />
    </React.StrictMode>
)
