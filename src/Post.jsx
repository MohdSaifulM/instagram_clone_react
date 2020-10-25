import React, { Component } from 'react'
import Comments from './Comments'
import Icon from './Icon'
import ProfilePicture from './momentum_spec.png'

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.post.map((el, index) => (
                    <div key={index} className="username text-left card">
                        <div className="card-body">
                            <img src={ProfilePicture} class="profile__picture img-circle pr-2" />
                            {el.username}
                        </div>
                        <div>
                            {<img src={el.url} className="col-12 p-0" />}
                            <Icon className="card-body" />

                            <div className=" card-body d-flex">
                                <div className="pr-3 font-weight-bold">{el.username}</div>
                                <div>{el.caption}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            {el.comments === undefined ? "" : <div><Comments comments={el.comments} post={this.props.post}/></div>}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Post
