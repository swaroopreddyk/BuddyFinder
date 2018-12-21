# BuddyFinder

Live version: https://buddy-finder-85591.herokuapp.com/


Author: Swaroop Kondreddy

Feel free to use some or all of this code if you're trying to complete a similar project.

### Overview
This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Technology Used

[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Heroku](https://heroku.com/)

[Materialize](https://materializecss.com/)

### App Structure and File Overview

- data
    - friends.js
        - array of objects storing the app's data

- public
    - home.html
        - landing page to enter the survey
    - survey.html
        - webpage for users to interact with the app
        - utilization of jQuery for click handlers, user input and data validation
        - AJAX call for adding user input to friends array

- routing
    - apiRoutes.js
        - app.get responds to client request by pulling list of friends from friends.js and displaying the array of objects in /api/friends
        - app.post responds to client request by posting new user entries in /api/friends and including them in the array of objects
            - declare name, image and difference variables
            - for loop that runs through the friends array 
                - nested for loop that runs through responses
                    - math.abs function that subtracts friends scores from responses
                - if statement that records friend match if lowest difference in score is returned (highest similarity)
    
    - htmlRoutes.js
        - app.get to pull homepage
        - app.get to pull survey page

- server.js
    - Configuration of server and application