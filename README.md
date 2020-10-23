# Instagram clone part 2

Continue on with yesterday's Instagram clone by adding a new feature:

Allow users to add new instagram post to the page
- Suggested form inputs:
    - Username (e.g. `guru-schnecke`)
    - Image source (e.g. `https://i.kym-cdn.com/photos/images/facebook/000/945/547/d04.jpg`)
    - Caption (e.g `i love css`)

Suggested ways to get started:
1. First create a state object in the main component, store the posts json object in the state.
2. Create the input forms and relevant functions for user to modify/add to the state object. 

## Further (Optional)
1. Allow user to "like" a post
2. Allow user to add comments to individual posts

## Further further (optional optional)
For additional practice with react, convert the expense tracker app into a react application.

## To submit the homework
- fork and clone the repo
- add your codes and submit a pull request


### If you need the original json object
```
{
    "profile": {
      "username": "sei25sg",
      "profile_pic": "",
      "location": "singapore"
    },
    "posts": [
      {
        "username": "guru-schnecke",
        "url": "https://78.media.tumblr.com/2aec6b42b93a290de8929372faa8b395/tumblr_p222b7Pnwq1wfa5swo3_400.jpg",
        "caption": "this is a test caption",
        "comments": [
          {
            "username": "siusinglai",
            "comment": "Your early today wa? 9:45am"
          },
          {
            "username": "tristancalleja",
            "comment": "he got a new alarm clock"
          }
        ]
      },
      {
        "username": "guru-schnecke",
        "url": "https://www.ricemedia.co/wp-content/uploads/2018/04/RICE-MEDIA-MASSAGE-UNCLE-TOH-JOB.jpg",
        "caption": "this is a different caption"
      },
      {
        "username": "siusinglai",
        "url": "http://www.freegreatpicture.com/files/44/14416-chengdu-impression.jpg",
        "caption": "this is a test caption",
        "comments": [
          {
            "username": "siusinglai",
            "comment": "Flexing Man"
          },
          {
            "username": "tristancalleja",
            "comment": "sweet sweet sweet"
          }
        ]
      },
      {
        "username": "tristancalleja",
        "url": "https://i.kym-cdn.com/photos/images/facebook/000/945/547/d04.jpg",
        "caption": "derpy dog!"
      },
      {
        "username": "tristancalleja",
        "url": "https://cdn77.sadanduseless.com/wp-content/uploads/2014/03/dd1.jpg",
        "caption": "derpy dog!"
      },
      {
        "username": "siusinglai",
        "url": "https://cdn77.sadanduseless.com/wp-content/uploads/2014/03/dd1.jpg",
        "caption": "derpy dog!",
        "comments": [
          {
            "username": "siusinglai",
            "comment": "sweet sweet F45!"
          },
          {
            "username": "tristancalleja",
            "comment": "why you flexing mehn!"
          }
        ]
      },
      {
        "username": "teren",
        "url": "https://cdn.lynda.com/course/439683/439683-637286184374750281-16x9.jpg",
        "caption": "I love CSS!",
        "comments": [
          {
            "username": "deb_potato",
            "comment": "Can you teach me CSS?"
          },
          {
            "username": "Shawn",
            "comment": "......."
          },
          {
            "username": "Daveli",
            "comment": "I came in like a wrecking ball"
          },
          {
            "username": "Tyrone",
            "comment": "What did you wreck?"
          },
          {
            "username": "Nero",
            "comment": "What is CSS?"
          },
          {
            "username": "Ken",
            "comment": "Bootstrap ah?"
          },
          {
            "username": "Jonas",
            "comment": "lets just go home"
          }
        ]
      }
    ]
  }
  ```
