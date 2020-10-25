import React, { Component } from 'react'



export default class Icon extends Component {

    state = {
        like: false,
    }

    likeClickHandler = () => {
        this.setState({ like: !this.state.like });
    }

    commentClickHandler = () => {
        
    }


    render() {

        let liked = !this.state.like ? "far fa-heart pt-3 px-2" : "fas fa-heart pt-3 px-2 liked";
        let likePara = this.state.like ? '1 like' : '';

        return (
            <div className="d-flex justify-content-between">
                <div>
                    <i className={liked} onClick={this.likeClickHandler}></i>
                    <i className="far fa-comment pt-3 px-2" onClick={this.commentClickHandler}></i>
                    <i className="far fa-paper-plane pt-3 px-2"></i>
                    <p className="px-2">{likePara}</p>
                </div>
                <div>
                    <i className="far fa-bookmark pt-3 px-2"></i>
                </div>
            </div>
        )
    }
}

