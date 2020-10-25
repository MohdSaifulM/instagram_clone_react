import React, { Component } from 'react'

class Comments extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        temp: {},
        comments: this.props.comments,
        
    }

    changeHandler = (e) => {
        let newTemp = {...this.state.temp}
        newTemp = { ...newTemp, [e.target.name]: e.target.value }; 
        this.setState({temp: newTemp});
    }

    clickHandler = () => {
        let userArr = this.props.comments;
        userArr.push(this.state.temp);
        this.setState({comments: userArr});
        
    }

    render() {
        console.log(this.props.comments)
        return (
            <div>
                {this.state.comments.map((el, index) => (
                    <div className="comments d-flex " key={index}>
                        <div className="font-weight-bold pr-2">
                            {el.username}
                        </div>
                        <div>
                            {el.comment}
                        </div>
                    </div>
                ))}
                <div className="comment row">
                    <input className="my-2 mx-2 col-3" placeholder="Username" name="username" onChange={this.changeHandler} />
                    <input className="my-2" placeholder="Comment" name="comment" onChange={this.changeHandler} />
                    <button className="m-2 btn btn-outline-dark" onClick={this.clickHandler} >Post</button>
                </div>
            </div>
        )
    }
}

export default Comments