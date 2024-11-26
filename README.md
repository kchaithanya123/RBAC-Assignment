# RBAC-Assignment
"A backend project implementing secure authentication, authorization, and role-based access control (RBAC) using modern security practices. Includes features like user registration, role assignment, and access control for API endpoints."
# RBAC-Assignment

## Overview
This project demonstrates an **Authentication** and **Role-Based Access Control (RBAC)** system for backend applications.

## Features
- Secure user authentication using JWT.
- Role-based access control for Admin, User, and Moderator roles.
- Protected endpoints based on user roles.

## Tech Stack
- Backend: Node.js (Express.js)
- Database: MongoDB
- Authentication: JSON Web Token (JWT)

## How to Use
1. Clone this repository to your local machine.
2. Install dependencies and set up the environment variables.
3. Run the application using `npm start`.

## API Documentation
| Method | Endpoint         | Description                | Access  |
|--------|------------------|----------------------------|---------|
| POST   | /auth/register   | User registration          | Public  |
| POST   | /auth/login      | User login                 | Public  |
| GET    | /admin/dashboard | Admin-only dashboard       | Admin   |
| GET    | /user/profile    | View user profile          | User    |


