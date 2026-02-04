# WTWR (What to Wear?) – Back End

## Project Description

The **WTWR (What to Wear?) Back End** is the server-side application for the _What to Wear?_ project.  
It provides a RESTful API that allows users to create and manage clothing items, retrieve user information, and perform actions such as liking or unliking items.

This project is part of a full-stack application where the front end displays weather-based clothing recommendations, while the back end handles data storage, retrieval, and authorization.

---

## Objectives

Over the last two sprints, you built the front end of WTWR. The goal of this back-end project is to:

- Set up a Node.js + Express server.
- Connect the server to a MongoDB database.
- Implement routes and controllers for users and clothing items.
- Handle errors gracefully and consistently.
- Add user authorization (temporary solution first).
- Deploy the application with testing and CI/CD support.

---

## Functionality

- **Users**

  - `GET /users` — get all users.
  - `GET /users/:userId` — get a specific user by ID.
  - `POST /users` — create a new user.

- **Clothing Items**

  - `GET /items` — get all clothing items.
  - `POST /items` — create a new item.
  - `DELETE /items/:itemId` — delete an item by ID.
  - `PUT /items/:itemId/likes` — like an item.
  - `DELETE /items/:itemId/likes` — unlike an item.

- **Error Handling**
  - `400` — invalid request data or ID format.
  - `404` — user/item not found or invalid route.
  - `500` — server error with generic message.

---

## Technologies & Techniques Used

- **Node.js** – backend runtime environment.
- **Express.js** – server framework for building REST APIs.
- **MongoDB** – NoSQL database for storing users and items.
- **Mongoose** – ODM for schema validation and database interaction.
- **Validator.js** – URL validation in schemas.
- **ESLint (Airbnb config)** – maintain consistent code style.
- **Prettier** – formatting integration with ESLint.
- **Nodemon** – development hot reload.
- **GitHub Actions** – CI/CD for automated tests.
- **Postman** – API testing suite.

### Clone WTWR

- **Backend**: https://github.com/pazongyang/se_project_express
  cd se_project_express
- **Frontend repositary** : https://github.com/pazongyang/se_project_react
  cd se_project_react

## Intro to WTWR

Check out [What WTWR is about](https://drive.google.com/file/d/1Zmohf7ce2-8xHX_H-ZBW5sXkCrCmIiH5/view?usp=sharing)

## Domain Names

- **Frontend**: https://wtwr-demo.mine.bz/
- **Backend**: https://api.wtwr-demo.mine.bz/
