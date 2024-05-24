![image](https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/7c81eaf3-6b00-4e86-af9f-b3522e2cd945)

# Final Evaluation - Module 3
This project is the final evaluation of Module 3 from Adalab. It consists of a web application developed with in React, which allows users to search and view characters from the Rick and Morty series.
## Application Overview
The application focuses on providing an intuitive interface for searching Rick and Morty characters. Users can filter characters by name, status (alive, dead, unknown), planet of origin, and species. Detailed information about each character, including their image, name, species, and status, is displayed upon selection. The application is fully responsive, designed in mobile-first, and adaptable to all screen sizes.
## Main Features
- **Character Search**: Allows users to search for characters by name.
- **Status Filter**: Users can filter results based on the character's status (alive, dead, unknown).
- **Planet of Origin Filter**: Users can filter characters based on their planet of origin.
- **Species Filter**: Users can filter characters by species.
- **Detailed View**: Displays detailed information about a selected character.
## Installation and Usage
### Prerequisites
Ensure you have the following software installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)
### Installation Steps
**Clone the Repository**:
   ```bash
   git clone https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo.git
   ```
**Install Dependencies**:
   Navigate to the project directory and run the following command:
   ```bash
   npm install
   ```
**Start the Development Server**:
   Once the dependencies are installed, start the server with:
   ```bash
   npm run dev
   ```
**Open the Application**:
   Open your browser and navigate to `http://localhost:5173` to see the application in action.
## Tools Used
- **HTML5**: Used for structuring the content of the application.
- **SCSS**: Used for designing the user interface.
- **JavaScript (ES6)**: Used for the logic and interactivity of the application.
- **React**: JavaScript library used to build the user interface declaratively and efficiently.
- **React Router**: Used for handling navigation between different views of the application.
- **Fetch API**: Used to make HTTP requests to the [Rick and Morty API](https://rickandmortyapi.com/api/character)
- **Sass**: CSS preprocessor used to write more maintainable and modular styles.
- **Webpack**: Used to compile and bundle JavaScript modules.
## Project Structure
The project structure is as follows:
```
/public
  |-- index.html
/src
  |-- components
      |-- CharacterCard.js
      |-- CharacterDetail.js
      |-- CharacterList.js
      |-- Filters.js
  |-- services
      |-- api.js
  |-- styles
      |-- App.scss
      |-- CharacterCard.scss
      |-- CharacterDetail.scss
      |-- Filters.scss
      |-- CharacterList.scss
  |-- App.js
  |-- index.js
```
## Application Workflow
- **Fetching Data**: Data is fetched from the Rick and Morty API using the Fetch API.
- **Rendering Characters**: The character data is rendered in a list format.
- **Filtering**: Users can filter characters based on name, status, planet of origin, and species. If there are no matches, an error message will appear. The reset button allows users to reset the filters to their original state and start to search from scratch.
- **Character Details**: Clicking on a character displays detailed information about them. When the route does not match any characters, an error message is displayed that allows the user to navigate back to the home page. When navigating back to the search page, the search inputs are maintained so the user can continue browsing with the parameters they had already entered.
## Application Screens
**Main screen**
<img width="1440" alt="Screenshot 2024-05-24 at 09 21 25" src="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/f852eb5d-3285-49d5-b3bf-63596f6b7346">

**Search results & no results screens**
<img width="1440" alt="Screenshot 2024-05-24 at 09 21 49" src="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/27516f56-cf7d-40c0-9f6b-ef7af48106ab">
<img width="1440" alt="Screenshot 2024-05-24 at 09 22 44" src="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/599293c1-f1fa-4356-9633-f038ea7e34f9">

**Character detail & character not found**
<img width="1440" alt="Screenshot 2024-05-24 at 09 22 14" src="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/63c97dac-291a-4b81-9d0c-b27a26e010ca">
<img width="1440" alt="Screenshot 2024-05-24 at 09 22 31" src="https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/61fa336d-5624-469b-9b3d-03bb638ec321">

## Thank you and enjoy my app! [Wubba Dubba Lub Lub](https://github.com/Adalab/modulo-3-evaluacion-final-ellisoalgo/assets/161454802/7c81eaf3-6b00-4e86-af9f-b3522e2cd945)

