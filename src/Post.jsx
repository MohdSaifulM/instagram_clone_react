import React, { Component } from 'react'
import Comments from './Comments'
import Icon from './Icon'
import ProfilePicture from './momentum_spec.png'

class Post extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        temp: {},
        post: this.props.post,
    }

    changeHandler = (e) => {
        let newTemp = {...this.state.temp}
        newTemp = { ...newTemp, [e.target.name]: e.target.value }; 
        this.setState({temp: newTemp});
    }

    clickHandler = (i) => {
        let userArr = this.state.post[i].comments;
        // console.log(userArr);
        !this.state.temp === undefined && userArr.push(this.state.temp);
        console.log(userArr)
    }



    render() {
        console.log(this.state.post)
        return (
            <div>
                {this.state.post.map((el, index) => (
                    <div key={index} className="username text-left card">
                        <div className="card-body">
                            <img src={ProfilePicture} class="profile__picture img-circle pr-2" />
                            {el.username}
                        </div>
                        <div>
                            {<img src={el.url} className="col-12 p-0" />}
                            <Icon className="card-body" />
                            <div className="comment">
                                <input className="my-2 mx-2" placeholder="Username" name="username" onChange={this.changeHandler} />
                                <input className="my-2" placeholder="Comment" name="comment" onChange={this.changeHandler}/>
                                <button className="m-2 btn btn-outline-dark" onClick={this.clickHandler(index)} >Post</button>
                            </div>
                            <div className=" card-body d-flex">
                                <div className="pr-3 font-weight-bold">{el.username}</div>
                                <div>{el.caption}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            {el.comments === undefined ? <div></div> : <div><Comments comments={el.comments} /></div>}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Post
