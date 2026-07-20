# Task API

A simple RESTful Task API built with **Node.js**, **Express.js**, and **Swagger UI**. The API supports full CRUD (Create, Read, Update, Delete) operations using an in-memory array.

## Features

- Create, read, update and delete tasks
- Input validation
- Proper HTTP status codes
- Swagger UI documentation

## Technologies

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI

## Installation

Clone the repository, install the dependencies, and start the server:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/task-api.git
cd task-api
npm install
node index.js
```

The server runs at:

- **API:** http://localhost:3000
- **Swagger UI:** http://localhost:3000/docs

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example

```bash
curl -i -X POST http://localhost:3000/tasks ^
-H "Content-Type: application/json" ^
-d "{\"title\":\"Buy milk\"}"
```

Example response:

```http
HTTP/1.1 201 Created

{
  "id": 4,
  "title": "Buy milk",
  "done": false
}
```

## Swagger UI

A screenshot of the Swagger UI is shown below.


## Author

**Vukheta Success Ngobeni**
