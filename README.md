# 📝 MERN Todo App

A simple full-stack **MERN Todo Application** built to learn CRUD operations and understand how a **Monorepo** works.

This project focuses on the fundamentals of building a modern full-stack application using MongoDB, Express.js, React, and Node.js while keeping both the frontend and backend inside a single repository.

---

## 📖 About

This project was created for learning purposes.

It demonstrates how to:

- Create a Todo
- Read all Todos
- Update a Todo
- Delete a Todo
- Build REST APIs
- Connect React with Express
- Store data in MongoDB
- Validate forms
- Organize a Monorepo project

---

## 🚀 Features

- ✅ Create Todo
- ✅ View Todo List
- ✅ Update Todo
- ✅ Delete Todo
- ✅ Form Validation
- ✅ REST API
- ✅ Responsive UI
- ✅ MongoDB Database

---

# 🏗️ Project Structure

```
mern-todo-app/
│
├── client/              # React + Vite Frontend
│
├── server/              # Express Backend
│
├── README.md
│
└── package.json
```

This project follows a **Monorepo** architecture where both the frontend and backend are managed inside a single Git repository.

---

# 📚 What is a Monorepo?

A **Monorepo (Monolithic Repository)** is a project structure where multiple applications or packages live inside one repository.

Instead of maintaining separate repositories for the frontend and backend, both are stored together.

Example:

```
mern-todo-app
│
├── client
└── server
```

### Advantages

- Easier project management
- Single Git repository
- Shared configurations
- Easier development
- Better collaboration

---

# ⚙️ Tech Stack

## Frontend

- React
- Vite
- React Hook Form
- Zod
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 📦 Packages Used

### Frontend

- react
- vite
- react-hook-form
- zod
- axios

### Backend

- express
- mongoose
- cors
- dotenv
- nodemon

---

# 🛠 CRUD Operations

This project demonstrates all basic CRUD operations.

## Create

Add a new todo.

```
POST /api/todos
```

---

## Read

Fetch all todos.

```
GET /api/todos
```

---

## Update

Update an existing todo.

```
PUT /api/todos/:id
```

---

## Delete

Delete a todo.

```
DELETE /api/todos/:id
```

---

# 📂 Folder Structure

```
client/
│
├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   ├── schemas
│   └── App.jsx
│
└── package.json
```

```
server/
│
├── controllers
├── models
├── routes
├── middleware
├── config
├── app.js
├── server.js
└── package.json
```

---

# 🗄 Database

MongoDB is used as the database.

Mongoose is used as the ODM (Object Data Modeling) library to interact with MongoDB.

Example Todo Document

```json
{
  "_id": "...",
  "title": "Learn MERN",
  "completed": false,
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

# ✅ Form Validation

The frontend uses:

- React Hook Form
- Zod

Validation includes:

- Required fields
- Minimum character length
- Input validation

---

# 🌐 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create todo |
| PUT | /api/todos/:id | Update todo |
| DELETE | /api/todos/:id | Delete todo |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## Run Backend

```bash
npm run dev
```

---

## Run Frontend

```bash
npm run dev
```

---

# 📚 Learning Outcomes

By building this project, you will learn:

- Monorepo Architecture
- MERN Stack Development
- MongoDB
- Mongoose
- Express.js
- REST API Development
- React Fundamentals
- Vite
- React Hook Form
- Zod Validation
- CRUD Operations
- Client–Server Communication
- API Integration
- Folder Structure Best Practices

---

# 🎯 Future Improvements

- Authentication
- JWT
- Search Todos
- Pagination
- Dark Mode
- Filter Todos
- Categories
- Due Dates
- Drag & Drop
- Docker Support

---

# 👨‍💻 Author

**Shankar Dutta**

Full Stack Developer

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
