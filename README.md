# Snack API

## Overview 


A country API tha† allows you to add, remove, view all snacks, view one specific snack, find the most highly voted snack, and update a snack!

## Getting Started

### Prerequisites 

- __Node.js__

- __npm__

- A cloud-based DBM hosting platform (e.g. [Supabase](https://supabase.com/), [Neon](https://neon.com/), etc...)

### Installation requirements
1. Clone the repo by running:  `git clone your_github_url`

2. `cd` into the __server__ folder

3. Install all the dependencies by running `npm install` on your terminal
    - This project uses:

        - __Express__

        - __Cors__

        - __dotenv__

        - __nodemon__

        - __pg__

4. Setup your database

    - Create a database on [Supabase](https://supabase.com/) or other cloud-based database management systems platform

    - Retrieve the database URL and copy it

    - Create a `.env` file in the root directory with the following:
        - `DB_URL=<your_database_url>`

    - Replace `<your_database_url>` with the database URL you just copied from Supabase

    - Run `npm run setup-db` to setup the database

5. Setup your port

    - Add a `PORT` key assigned to the port of your choice in the `.env` file. 

        - `PORT=<port_of_your_choice>` 

        - Preferably __Port 3000__

6. Run the server

    - Run `npm run dev` to run the server in __development mode__

    - Run `npm run start` to run the server in __production mode__



## Database Schema

This database was created with __Postgres__

`snacks` - table name

```sql
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(30) UNIQUE NOT NULL,
    description VARCHAR(500),
    healthy BOOLEAN DEFAULT FALSE,
    vegetarian BOOLEAN DEFAULT FALSE,
    votes INT DEFAULT 0,
    PRIMARY KEY (id)
```

### Base URL
`https://localhost:<port>/snacks` (or your deployed URL)

### API Endpoints


GET /snacks         retrieves all snacks
GET /snacks/:top    retrieves highest voted snack
GET /snacks/:id     retrieves a single snack
POST /snacks        creates a new snack
UPDATE /snacks/:id  updates the vote count on a snack
DELETE /snacks/:id  deletes a snack

## Get all countries

### Example Request 

__To retrieve all snacks__, you can use the `GET` quest:

`GET/snacks`

`curl -X GET http://localhost:<port>/snacks`

__To retrieve a single snack__, you can use the `GET` quest:

`GET/snack/<id>`

__To add a snack__, you can use the `POST` quest and add a JSON object as a body specifying key-value pairs:

`POST/snack/` (e.g.)
    ```
    {
        "name": "test_snack",
        "description": "Multicolored button-shaped candies",
        "healthy": false,
        "vegetarian": true,
        "votes": 5
    }
    ```

__To delete a snack__, you can use the `DELETE`:

`DELETE/snack/<id>`

__To update a snack__, you can use the `PATCH`:

`PATCH/snack/<id>`






### Example Response

A successful response will return a JSON array of countries objects, similar to the following:

```   
[
   
  {
    "id": 8,
    "name": "Banana milkshake",
    "description": "May contain real bananas",
    "healthy": false,
    "vegetarian": true,
    "votes": 0
  },
  {
    "id": 3,
    "name": "Chocolate cake",
    "description": "Rich and delicious",
    "healthy": false,
    "vegetarian": false,
    "votes": 5
  },
  {
    "id": 6,
    "name": "Grapes",
    "description": "Decadent if peeled",
    "healthy": true,
    "vegetarian": true,
    "votes": 0
  },
  {
    "id": 13,
    "name": "Jammy dodgers",
    "description": "An eternal disappointment",
    "healthy": false,
    "vegetarian": true,
    "votes": 0
  },
    ]
```

## Build and Run Docker Container

1. Build Image
`docker build -t api `

2. Run Container
`docker run -d -p 3000:3000 --name snacks-container snacks-api`

3. Test API
`http://localhost:3000/snacks`

## Remaining Bugs:
No remaining bugs



## Future Features

- Feature 1: API to get top 10 snacks and it would help users also find out other highly ranked snacks, especially if there's a close second runner. 

