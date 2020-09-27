
# FEEDBACK LOOP

## Description

_Duration: Weekend_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

- I built an app that took had 8 seperate components to collect user feedback and submit it to a database of 'feedback'.
- Each component had its own question and allowed the user to either enter a numeric value or leave a comment. 
- on Next click, user is taken to next page
- on Back click, user is taken to previous page
- The data was then grabbed in each component and sent to the reduxState and made accessible through reducers.
- User could then review all their feedback on a review page before submitting.
- Admin table created to view all feedback currently in database.

## Problem Solving
- Had to figure out how to capture data both locally with React and then send to the Redux state to make the information globally available for all components.
- utilized axios GET, POST, DELETE routes to gather data, add data and delete data based on user inputs.
- created DB and use postgresql to work with database


To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shots
- [Feelings](public/images/feedback.png)
- [Understanding](public/images/understanding.png)
- [Support](public/images/support.png)
- [Comments](public/images/comment.png)
- [Review](public/images/review.png)
- [Thank You](public/images/thankYou.png)
- [Admin Table](public/images/adminTable.png)

### Prerequisites

- axios
- pg
- react
- react-redux
- material-ui

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.


1. Create a database named `prime_feedback`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. There is a prompt on each page, answer accordingly
2. hit next to navigate to the next page 
3. hit back to naviage to the previous page
4. submit feedback 
5. hitting the `review again` button from the Thank you page navigates you back to the first page
6. go to `localhost:3000/#/admin` to see all user inputs


## Built With

- React
- Redux
- Material UI
- postgresql
- Postico



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. And of course my awesome cohort Tarjan!!! Couldn't do this without the constant support of my piers.

## Support
If you have suggestions or issues, please email me at cooper.doten@gmail.com
