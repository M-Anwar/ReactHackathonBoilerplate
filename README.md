# React Hackathon Boilerplate

The following repo is a **highly opinionated** boilerplate for creating React front-end applications. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), with redux, redux-saga and react-router added.

The overall structure of the boilerplate was inspired over the course of multiple hackathons. While other boilerplates exist, I found that they introduced friction to the workflow I had become accustomed to. As a result, the structure here is a reflection of the common pieces that most of my projects shared. I don't guarantee that it will work for everyone or scale to large projects, but it has been a great way to quickly get started on an idea. 

## Project Structure
- public
    - index.html
    - favicon.ico
   - manifest.json
- src
    - css
        - *Additional stylesheets required by your components*
    - components
        - *Sharable/Pure components that don't need to manage complex external state or are pure components that can be reused elsewhere*
    - containers   
        - *The major components/views of your application. They can react to redux state*
    - reducers
        - *The reducers for the app. The reducers are duck-structured with actions/selectors/types defined within the same file*
    - sagas
        - *All sagas required by your app*
    - index.js
    - serviceWorker.js
- package.json
- README.md   
- .gitignore

Both Yarn and NPM can be used, we prefer NPM.
### Startup Guide
1. `git clone https://github.com/M-Anwar/ReactHackathonBoilerplate.git` - Clone the repo (or use ssh link)
2. `cd ReactHackathonBoilerplate` - Go into the project folder 
3. `npm install` - Install required node modules
4. `npm start` - Start the webpack development server
*5. `npm build` - When ready to build your application to the /build folder*

By default all server calls are proxied to `localhost:5000` as defined in the `package.json`. To change the proxy modify the config: `"proxy": "http://localhost:<PORT>"`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
