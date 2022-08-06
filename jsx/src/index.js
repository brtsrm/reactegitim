import React from 'react'
import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))


const names = ["Php", "Laravel", "Go", "React"]



function App() {
    return (
        <div>
            {names.map(name => <h1>{name}</h1>)}
            <button  style={{ padding: '10px', backgroundColor: '#a0a', color: '#fff', borderRadius: '5px' }}>Merhaba</button>
        </div>
    );
}

root.render(
    <App />
)