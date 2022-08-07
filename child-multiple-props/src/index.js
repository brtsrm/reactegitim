import React from 'react'
import ReactDom from 'react-dom'
import Card from './component/Card'
import Collapse from './component/Collapse'


const root = ReactDom.createRoot(document.getElementById("root"))

const App = () => {
    return (
        <div>
            <div class="card-group">
                <Collapse href="A">
                    <Card cardTitle='A' cardImage='https://dummyimage.com/640x360/aaa/000' cardText='Ben A' lastUpdate='Last updated 1 mins ago' />
                </Collapse>
                <Collapse href="B">
                    <Card cardTitle='B' cardImage='https://dummyimage.com/640x360/bbb/000' cardText='Ben B' lastUpdate='Last updated 2 mins ago' />
                </Collapse>
                <Collapse href="C">
                    <Card cardTitle='C' cardImage='https://dummyimage.com/640x360/ccc/000' cardText='Ben C' lastUpdate='Last updated 3 mins ago' />
                </Collapse>
                <Collapse href="D">
                    <Card cardTitle='D' cardImage='https://dummyimage.com/640x360/ddd/000' cardText='Ben D' lastUpdate='Last updated 4 mins ago' />
                </Collapse>
                <Collapse>
                    <Card cardTitle='E' cardImage='https://dummyimage.com/640x360/eee/000' cardText='Ben E' lastUpdate='Last updated 5 mins ago' />
                </Collapse>
                <Collapse>
                    <Card cardTitle='F' cardImage='https://dummyimage.com/640x360/fff/000' cardText='Ben F' lastUpdate='Last updated 6 mins ago' />
                </Collapse>
            </div>
        </div>
    )

}

root.render(
    <App />
)