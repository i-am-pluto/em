# Project Setup - MERN Stack (React + Node.js)

This project consists of two main parts:
1. **Frontend**: A React application.
2. **Backend**: A Node.js application with MongoDB (MERN stack).

## Requirements

Before starting, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (MongoDB Atlas or a local MongoDB instance)
  
## Getting Started

To run this project locally, you will need to set up both the frontend and the backend.

### 1. Backend Setup (Node.js)

The backend is a Node.js application that uses MongoDB for data storage. You'll need to install the dependencies and start the server.

#### Steps:

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following environment variables:

    ```bash
    touch .env
    ```

    Add this to `.env`:

    ```env
    PORT=5000
    MONGO_URI=mongo-uri
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

    The backend server should now be running on [http://localhost:5000](http://localhost:5000).

### 2. Frontend Setup (React)

The frontend is a React application. You will need to install the dependencies and start the development server.

#### Steps:

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend server:**

    ```bash
    npm start
    ```

    The frontend server should now be running on [http://localhost:3000](http://localhost:3000).

### 3. Access the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

The frontend will communicate with the backend through the `/api` endpoints exposed by the Node.js server.

---

## Common Commands

### Backend (Node.js)

- **Install dependencies**: `npm install`
- **Start the server**: `npm start`
- **Run in development mode**: `npm run dev`

### Frontend (React)

- **Install dependencies**: `npm install`
- **Start the development server**: `npm start`
- **Build for production**: `npm run build`

---

## Project Structure

### Frontend Directory

```
frontend/
  ├── public/
  ├── src/
  ├── .env
  ├── package.json
  └── README.md
```

### Backend Directory

```
backend/
  ├── models/
  ├── routes/
  ├── config/
  ├── .env
  ├── package.json
  ├── server.js
  └── README.md
```

---

## Notes

- Ensure your MongoDB connection string in the `.env` file is correct and accessible.
- The backend runs on port `5000` by default, while the frontend runs on port `3000`.
