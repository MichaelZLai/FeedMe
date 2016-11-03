# README


# FeedMe - GA WDI-12 Project 3 By Group 8: Michael Lai, Mark Sweet, Mike Rubin

FeedMe is a full-stack web application project featuring a Ruby on Rails Back-end with an Angular Front-end.  The requirements were to architect, design, and collaboratively build as a group project, an app with two major components:

* An API of your own design, built using Rails, which serves JSON.
* Front-end Angular code that updates the UI, and makes requests to the API using AJAX.

The FeedMe application enables users to quickly find nearby, food restaurants.  Restaurants are presented to the user along with a location map showing the restaurant proximity to the user.  The user can indicate yes to their acceptance to this selection or select no and to be shown alternate selections.  Additionally a popup message box with address and phone information is available by clicking on the icon in the map.

The back-end application provides a proxy-API to Yelp to feed the front-end for the restaurant information.  Mapbox is used on the Front-end to provide mapping information.



### User Stories

* As a user, location information in the form of city or zip-code is entered to allow for a nearby restaurant.
* As a user, a restaurant with map information will be presented to the user.
* As a user, the restaurant location will be indicated by a unique picture icon of the restaurant.
* As a user, the user will be given a choice to select the current restaurant or select to receive alternate choices.
* as a user, a link to yelp information will be available for a restaurant review and details.


### Technologies Used

* Postgresql relational database
* Ruby on Rails - Back-end
* Angular.js - Front-end
* HTML was used only for structuring content.
* CSS was used for applying all visual styles.
* JQuery
* Yelp Search API
* Mapbox API


### Installing

The FeedMe application is located on the gitHub repository.

To install, clone a copy from github repository the username is MichaelZLai the repository is named FeedMe.git

```
git clone git@github.com:MichaelZLai/FeedMe.git

```

## Back-end Installation.

All of the Ruby Back-end code is located in the Yelp folder.
To run the server locally, create the database with the following Rails Commands.

cd <YELP> folder
rails db:create
rails db:migrate
rails s

## Front-end Installation.
cd <FEEDME> folder
hs

To begin the application go to the following URL:
http://localhost:8080/#/feedme


## Deployment.
  Both the back-end and front-end have been fully deployed.  Each individual contributor has their own deployment site. The following are the deployment locations and URL's fore each contributor:



|Contributor  | Front-end Repo | Front-end Host URL | Back-end Repo | Back-end Host URL |
| ----------- | :------------- | :---------- | :------------ | :----------------- |  
|**Michael Lai**| https://github.com/MichaelZLai/FeedMe-FE | https://michaelzlai.github.io/FeedMe-FE/#/feedme |  https://github.com/MichaelZLai/FeedMe-BE|  https://feedme-be.herokuapp.com/
|**Mark Sweet**|  https://github.com/marks828/project3_angular | https://marks828.github.io/#/feedme |  https://github.com/marks828/project3 | https://feedmerails.herokuapp.com/
|**Mike Rubin**| https://github.com/merubin/feedmefe |https://merubin.github.io/feedmefe/#/feedme  |  https://github.com/merubin/yelp |  https://yelp-backend-rails.herokuapp.com/








### Ruby and Database Notes
* Ruby version - 5.0



## Approach Taken

[1] A review of the student suggestions for projects was reviewed by the project team.  Two candidate projects were reviewed, an Uber and a Restaurant picker.

[2] Michael Lai was chosen to be the team's project manager. A new Slack Channel #feedme_project was created to track project status and keep import project documents.

[3] A initial design of the front-end user interface was discussed and how each of the API's would be used.

[4] It was decided that the back-end would communicate with Yelp as a proxy-api to our front-end.  The front-end would use MapBox's API directly with the array of businesses since the back-end had no need.

[5] Initial work on the Mapbox interface was done by Mark Sweet.  Michael Lai did the initial Yelp Interface API investigation. Mike Rubin did work on the front-end switching to Next restaurant views.  During the coding, several different decisions were made as to which api set of the Mapbox interface.  Initial work with Mapbox began with the leaflet subset API set. Later the decision to use the newer Mapbox api set. As the project progressed, Mark initially worked on deployment which was turned over to Mike.  Michael continued working on CSS and looked at adding additional functionality.  Mike completed project documentation and deployment instructions.  

[6]As a group, morning scrum status meetings were conducted to report on development, roadblocks, and status.  At noon a progress meeting was held to continue to refine the team's direction.  At the end of each day a review of day's status and progress.


## Future Features
* UI Enhancements
- Pre-loader - an message or GIF image showing Loading during search of Yelp API
- Directions - the Mapbox functionality will be expanded to include directions from the current location to the restaurant.
- Confirmation Page - After a Yes selection, a page or message will be sent back to the user to enjoy their meal.
- Marker Improvements - Ratings, and pictures will be added to marker popup. The phone number will be properly formatted.
- Revolving Background - A background image based on restaurant cuisine will be displayed
- CSS Enhancements - Media Query CSS will be added to enhance viewing on smart phone.



## Authors
* **Michael Lai** - *Initial work* -
* **Mark Sweet** - *Initial work* -
* **Mike Rubin** - *Initial work* - [Rubin IT Solutions](http://mike-rubin.com)


## License

This project is licensed under the MIT License.

## Acknowledgments

* We would like you to our teachers, Jesse Shawl, Nick Olds, and Adrain Maseda, who after only eight weeks of classes have given me the knowledge to enable this Ruby on Rails Back-end with an Angular Front-end full stack application to be produced.

* We want to thank those students of WDI-12 for their project suggestions and inspiration and good words to make our program a success.
