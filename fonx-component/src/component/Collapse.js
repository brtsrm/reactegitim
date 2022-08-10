import React from 'react'


class Collapse extends React.Component {

    state = { showContent: false, }

    // unmoutabble
    // in moutable

    showMore = () => {
        this.setState({
            showContent: !this.state.showContent,
        })
    }


    componentDidMount() {
        console.log("Yaşam başlatıldı")
    }

    componentDidUpdate() {
        console.log("Component Güncesllenmesi yapıldı")
    }

    render() {

        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>

                    {/* {this.props.children.props.cartTitle} */}
                    {React.Children.map(this.props.children, children => children.props.cartTitle)}
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