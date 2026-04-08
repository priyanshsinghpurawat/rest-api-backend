# REST API Backend

A production-ready REST API built with Node.js, Express, and MongoDB. Features JWT authentication, comprehensive error handling, and best practices.

## 🚀 Features

- ✅ User authentication with JWT
- ✅ MongoDB database integration
- ✅ Request validation & error handling
- ✅ CORS & security headers
- ✅ Environment configuration
- ✅ API documentation
- ✅ Docker support

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/priyanshsinghpurawat/rest-api-backend.git
cd rest-api-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your MongoDB URI and JWT secret to .env
```

## 🏃 Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get post by ID
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

## 🔐 Authentication

All protected endpoints require JWT token in header:
```
Authorization: Bearer <your_jwt_token>
```

## 📁 Project Structure

```
.
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── postController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── posts.js
│   └── app.js
├── .env.example
├── server.js
├── package.json
└── README.md
```

## 🐳 Docker

```bash
# Build image
docker build -t rest-api-backend .

# Run container
docker run -p 5000:5000 --env-file .env rest-api-backend
```

## 🧪 Testing

```bash
npm test
```

## 📝 Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/api-db
JWT_SECRET=your_secret_key_here
NODE_ENV=development
PORT=5000
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Priyanshu Singh Purawatr - Full Stack Developer

---

⭐ If you find this useful, please give it a star!
