import React, { Component } from 'react'
import Profile from './Profile'
import Post from './Post'
import './App.css';

class App extends Component {
  state = {
    temp: {
    },
    profile: {
      username: "sei25sg",
      profile_pic: "",
      location: "singapore"
    },
    posts: [
      {
        username: "guru-schnecke",
        url: "https://78.media.tumblr.com/2aec6b42b93a290de8929372faa8b395/tumblr_p222b7Pnwq1wfa5swo3_400.jpg",
        caption: "this is a test caption",
        comments: [
          {
            username: "siusinglai",
            comment: "Your early today wa? 9:45am"
          },
          {
            username: "tristancalleja",
            comment: "he got a new alarm clock"
          }
        ]
      },
      {
        username: "guru-schnecke",
        url: "https://www.ricemedia.co/wp-content/uploads/2018/04/RICE-MEDIA-MASSAGE-UNCLE-TOH-JOB.jpg",
        caption: "this is a different caption",
        comments: [
          {
            username: "",
            comment: ""
          }
        ]
      },
      {
        username: "siusinglai",
        url: "http://www.freegreatpicture.com/files/44/14416-chengdu-impression.jpg",
        caption: "this is a test caption",
        comments: [
          {
            username: "siusinglai",
            comment: "Flexing Man"
          },
          {
            username: "tristancalleja",
            comment: "sweet sweet sweet"
          }
        ]
      },
      {
        username: "tristancalleja",
        url: "https://i.kym-cdn.com/photos/images/facebook/000/945/547/d04.jpg",
        caption: "derpy dog!",
        comments: [
          {
            username: "",
            comment: ""
          }
        ]
      },
      {
        username: "tristancalleja",
        url: "https://via.placeholder.com/150",
        caption: "derpy dog!",
        comments: [
          {
            username: "",
            comment: ""
          }
        ]
      },
      {
        username: "siusinglai",
        url: "https://via.placeholder.com/150",
        caption: "derpy dog!",
        comments: [
          {
            username: "siusinglai",
            comment: "sweet sweet F45!"
          },
          {
            username: "tristancalleja",
            comment: "why you flexing mehn!"
          }
        ]
      },
      {
        username: "teren",
        url: "https://cdn.lynda.com/course/439683/439683-637286184374750281-16x9.jpg",
        caption: "I love CSS!",
        comments: [
          {
            username: "deb_potato",
            comment: "Can you teach me CSS?"
          },
          {
            username: "Shawn",
            comment: "......."
          },
          {
            username: "Daveli",
            comment: "I came in like a wrecking ball"
          },
          {
            username: "Tyrone",
            comment: "What did you wreck?"
          },
          {
            username: "Nero",
            comment: "What is CSS?"
          },
          {
            username: "Ken",
            comment: "Bootstrap ah?"
          },
          {
            username: "Jonas",
            comment: "lets just go home"
          }
        ]
      }
    ]
  }

  changeHandler = (e) => {
    let newTemp = { ...this.state.temp };
    newTemp = { ...newTemp, [e.target.name]: e.target.value, comments: [{username: "", comment: ""}] };
    this.setState({
      temp: newTemp
    });
  }

  clickHandler = () => {
    let postArr = this.state.posts;
    postArr.unshift(this.state.temp);
    this.setState({ posts: postArr });
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <div className="row card banner sticky-top">
          <img src="https://fontmeme.com/images/instagram-new-logo.png" className="ig__image mx-5 my-2" />
        </div>
        <div className="row mx-auto mt-3">
          <div className="col-4">
            <Post post={this.state.posts} />
          </div>
          <div className="col-3 text-left">
            <Profile profile={this.state.profile} />
            <div className="py-2">
              <input className="my-2" placeholder="Username" name="username" onChange={this.changeHandler} />
              <input className="my-2" placeholder="URL" name="url" onChange={this.changeHandler} />
              <input className="my-2" placeholder="Caption" name="caption" onChange={this.changeHandler} />
              <button className="m-2 btn btn-outline-dark" onClick={this.clickHandler}>Post</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;



