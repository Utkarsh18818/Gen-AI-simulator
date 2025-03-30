# Gen-AI-simulator
Gen AI Analytics tool – a solution that democratizes data insights across business units
Overview

This project is a lightweight backend service that simulates a simplified version of a Gen AI Analytics data query system. It enables users to interact with a mock database using natural language queries and retrieve AI-powered responses.

Features

REST API Endpoints:

/query: Accepts natural language queries and returns pseudo-SQL queries.

/explain: Provides an explanation of the translated query.

/validate: Checks if the query is feasible.

/token: Generates a JWT token for authentication.

Mock Database using in-memory storage.

JWT Authentication for securing API endpoints.

Error Handling for invalid queries and authentication issues.

Tech Stack

Backend: Node.js (Express.js)

Authentication: JWT (JSON Web Token)

Database: In-memory mock data

Installation & Setup

Prerequisites

Install Node.js and npm.

Steps

Clone the repository:

git clone https://github.com/yourusername/gen-ai-query-api.git
cd gen-ai-query-api

Install dependencies:

npm install

Run the server:

node server.js

The server will start on http://localhost:3000

API Usage

1. Get Authentication Token

Endpoint: GET /token

Response:

{
  "token": "your_generated_jwt_token"
}

2. Query Data

Endpoint: POST /query

Request Headers:

{
  "Authorization": "Bearer your_generated_jwt_token",
  "Content-Type": "application/json"
}

Request Body:

{
  "query": "What is the total sales?"
}

Response:

{
  "result": "SELECT SUM(amount) FROM orders"
}

3. Explain Query

Endpoint: POST /explain

Request Body:

{
  "query": "What is the total sales?"
}

Response:

{
  "explanation": "Calculates total sales from orders table"
}

4. Validate Query

Endpoint: POST /validate

Response:

{
  "valid": true
}

Deployment

Deploy on Render

Push your code to GitHub:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/gen-ai-query-api.git
git push -u origin main

Create an account on Render

Click "New Web Service" and connect your GitHub repository

Set Build Command: npm install

Set Start Command: node server.js

Click Deploy and get your live API URL

Deploy on Railway

Sign up on Railway

Click "New Project" → Deploy from GitHub

Configure build & start commands (npm install, node server.js)

Deploy and get the live API URL

Deploy on Heroku

Install Heroku CLI

Login via CLI:

heroku login

Create a new Heroku app:

heroku create your-app-name

Add a Procfile in your project:

web: node server.js

Deploy:

git add .
git commit -m "Deploy to Heroku"
git push heroku main

Get your Live API URL:

heroku open

Testing with Postman or Curl

Postman: Import the API endpoints and test requests.

Curl Example:

curl -X GET https://your-api.onrender.com/token

License

This project is open-source and free to use.

Author

[Your Name] - Backend Engineering Intern Challenge

