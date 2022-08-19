import React from 'react'
import * as ReactDomClient from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import App from './components/App'

const root = ReactDomClient.createRoot(document.getElementById("root"))

root.render(
    <App/>
)
