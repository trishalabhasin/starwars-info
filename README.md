# Star Wars Movies React project

This project is created with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.co).<br>
This project displays the list of starwars movies along with all the data associated with it. You can select each movie to get more information about it.


### Note

This app is hosted on heroku and can be found at: [here](https://starwar-trish.herokuapp.com/)

### Logic for search bar on the movies page

1. Add an event listener to the react search bar.
2. In the event listener I filter the list for the movies I am rendering.
3. Event listener like 'onchange'.

### Logic for character cards

1. The data about the characters is retreived in an array 'characters[]'. 
2. Send the data of the character as a property to the character component created.



## Getting Started

Clone this repo :


Navigate to the root folder and install all dependencies :

- `yarn` or preferably `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Scripts

In the project directory, you can run:

### `npm start` 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Folder Details

1. `components` : Folder to put all the components that are not shared 
2. `shared/assets` : Folder to put assets like fonts, icons and images
3. `shared/components`: Folder to put all shared Components
4. `shared/constants` : Folder to put all of the constant like `api url`, `action types` and all others constant data that remains the same
5. `shared/helpers` : Folder to put the function like Consume API and formating data or others that help retreive clean data
6. `shared/hooks` : Folder to put all of the custom hooks/logic for component
7. `styles` : Folder to put the Styled Components that can be reused

