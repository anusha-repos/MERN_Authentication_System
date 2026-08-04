# 🔐 MERN Authentication System

A secure and responsive **MERN Stack Authentication System** built using **MongoDB, Express.js, React.js, and Node.js**. This application provides complete user authentication with JWT, protected routes, and password encryption.

---

## 🚀 Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Password Hashing using bcrypt
- ✅ Protected Routes
- ✅ User Logout
- ✅ Secure Cookie Authentication
- ✅ Form Validation
- ✅ Responsive User Interface
- ✅ MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- cookie-parser
- cors

---

## 📂 Project Structure

```
MERN_Authentication_System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/anusha-repos/MERN_Authentication_System.git
```

```bash
cd MERN_Authentication_System
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

The application will run at:

```
Frontend : http://localhost:5173
Backend  : http://localhost:5000
```

---

## 🔒 Authentication Flow

1. User registers with name, email, and password.
2. Password is encrypted using bcrypt.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. JWT is stored securely.
6. Protected routes verify the token before allowing access.
7. User can securely logout.

---

## 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
    login.png
    register.png
    dashboard.png
```

```markdown
![Login](screenshots/login.png)

![Register](screenshots/register.png)

![Dashboard](screenshots/dashboard.png)
```

---

## 📚 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |
| GET | /profile | Get User Profile |
| POST | /logout | Logout User |

---

## 🔐 Security Features

- Password Hashing
- JWT Authentication
- Protected Routes
- Secure Cookies
- Environment Variables
- MongoDB Validation
- Error Handling

---

## 🎯 Future Improvements

- Email Verification
- Forgot Password
- Reset Password
- Google Authentication
- GitHub Authentication
- User Profile Update
- Profile Picture Upload
- Dark Mode

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 👩‍💻 Author

**Anusha**


If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.
