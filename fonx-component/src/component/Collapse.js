import React from 'react'


class Collapse extends React.Component {

    constructor() {

        super();
        this.state = {
            showContent: false,

        }


        /* 1. Yöntem **** 
        this.showMore = () =>  {
            this.setState({
                showContent: true
            })
        } */
        /* 2. Yöntem ****
            this.showMore = this.showMore.bind(this)
        */

    }

    /*  2. Yöntem ****
        showMore(){
            this.setState({
                showContent : true
            })
        } 
    */


    /* 3. Yöntem **** */
    showMore = () => {
        this.setState({
            showContent: !this.state.showContent,
        })
    }


    render() {

        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Göster
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show" id={"contendId" + this.props.itemId}>
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div>
        )
    }
}


export default Collapse