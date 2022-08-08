import React from 'react'
import ReactDOM from 'react-dom'
import Card from './component/Card'
import Collapse from './component/Collapse'



const root = ReactDOM.createRoot(document.getElementById("root"))


const App = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="card-group w-100">
                    <div className='col'>
                        <Collapse itemId="1">
                            <Card cartTitle="Hello" />
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse itemId="2">
                            <Card cartTitle="Hello" />
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse itemId="3">
                            <Card  />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}


root.render(
    <App />
);