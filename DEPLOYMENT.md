
## Deployment
_A link to a deployed version of your application if available_

[Link to Heroku](https://comp3120-group-x.herokuapp.com/)


## How to run the application
_Information on how to run and build the project, eg. if someone were to take over development_

Paijolizmal has been designed for easy installion if you want to run the app **locally** 


  ### `npm run dev`

 
**Runs the back-end server** for connection to the database for signing up and 
other user functions such as note creation, time and income tracking.  

### `npm start`

  

**Runs the Front-End**, in another terminal

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `npm test`

  

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

 
Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Continuous Integration

_Information about any use of Continuous Integration you have implemented._

We intergrated Heroku pipeline to maintain our builds, so that whenever someone pushes to the master branch on our repository, then the build process begins on Heroku automatically.

It also checks for errors in the build in terms of JS warnings or errors and will not complete a new build unless it compiles cleanly.

