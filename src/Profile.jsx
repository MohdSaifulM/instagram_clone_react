import React from 'react'
import ProfilePicture from './momentum_spec.png'

function Card(props) {
    // console.log(props)
    return (
        <div className="">
            <div className="mx-2 float-left">
                <img src={ProfilePicture} class="profile__picture img-circle" />
            </div>
            <div>
                <div className="font-weight-bold">{props.profile.username}</div>
                <div>{props.profile.location}</div>
            </div>
        </div>
    )
}

export default Card
