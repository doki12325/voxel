# Startup Directory Web App

Welcome to the Startup Directory Web App, a full-stack project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This web application aims to showcase various startups, providing users with an interactive platform to explore and filter startup data. The dataset utilized for this project is available in a .csv file format and contains valuable attributes for each startup, including Company Name, City, Starting Year, Founders, Industry, No. of Employees, and Funding Amount.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [License](#license)

## Features

- **Startup Data Display**: Showcase a list of startups with detailed information.
- **Interactive Filtering**: Allow users to filter startups based on various attributes.
- **Responsive Design**: Ensure a seamless experience across different devices.
- **Submitting a Startup**: Allows a user to submit details on a startup.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [ReactJS](https://react.dev/)
- [ExpressJS](https://expressjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/doki12325/voxel.git
   ```

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Install dependencies for the server:

   ```bash
   npm install
   ```
   
4. Create a `.env` file in the server directory and set the following environment variables:

   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   PAGE_SIZE = 40
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. navigate to the root directory:

   ```bash
   cd..
   ```

7. Navigate to the voxelfront directory:

   ```bash
   cd voxelfront
   ```

8. Install dependencies for the client:

   ```bash
   npm install
   ```
   
9. Start the development server:

   ```bash
   npm run dev
   ```

10. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the app in action.

## Project Structure

```
voxel/
|-- voxelfront
|   |-- public
|   |-- src
|   |   |-- components
|   |   |-- App.js
|   |   |-- FilterContext.jsx
|   |-- .gitignore
|   |-- package.json
|-- server
|   |-- controllers
|   |-- routes
|   |-- config
|   |-- server.js
|   |-- .env
|   |-- .gitignore
|   |-- package.json
|-- README.md
```

## Technologies Used

- **Frontend**:
  - React.js
  - react-icons

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose ODM)

## License

This project is licensed under the [MIT License](LICENSE).
