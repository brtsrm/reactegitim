import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card'
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <div className="card-group">
                <Card cardTitle='a' cardText='a'/>
                <Card cardTitle='b' cardText='b'/>
                <Card cardTitle='c' cardText='c'/>
                <Card cardTitle='d' cardText='d'/>
                <Card cardTitle='e' cardText='e'/>
                <Card cardTitle='f' cardText='f'/>
                <Card cardTitle='g' cardText='g'/>
            </div>
        </div>
    )
}

root.render(
    <App />
)