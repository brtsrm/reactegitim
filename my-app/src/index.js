import React from 'react'
import ReactDOM from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById("root"))

function hello() {
    return "Merhaba"
}

class App2 extends React.Component {
    render() {
        return hello()
    }
}

root.render(
    <App2 />
)