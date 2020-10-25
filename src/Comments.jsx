import React, { Component } from 'react'

class Comments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.comments.map((el, index) => (
                    <div className="comments d-flex " key={index}>
                        <div className="font-weight-bold pr-2">
                            {el.username}
                        </div>
                        <div>
                            {el.comment}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Comments