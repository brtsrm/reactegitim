import React from 'react'


class Collapse extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" type="button" data-toggle="collapse" data-target={"#contendId" + this.props.itemId} aria-expanded="false"
                    aria-controls="contentId">
                    Göster
                </button>
                <div className="collapse show" id={"contendId" + this.props.itemId}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Collapse