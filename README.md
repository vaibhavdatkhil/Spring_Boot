````md id="7jlwms"
# Marvellous Portal 🚀

Marvellous Portal is a full stack web application built using React, Spring Boot, JWT Authentication, and MongoDB. The project provides secure authentication, modern frontend UI, and REST API integration for user management and portal services.

---

## ✨ Features

- JWT Authentication & Authorization
- Secure Login & Registration
- Spring Security Integration
- MongoDB Database Connectivity
- React Frontend with Routing
- Responsive Modern UI
- REST API Architecture
- Password Encryption using BCrypt

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios

### Backend
- Spring Boot
- Spring Security
- JWT
- Maven

### Database
- MongoDB

---

## 📂 Project Structure

```bash
marvellousportal
 ┣ marvellous-frontend
 ┣ src
 ┣ pom.xml
 ┗ application.properties
```

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone <your-repository-url>
```

---

### Backend Setup

Configure MongoDB in:

```properties
application.properties
```

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/marvellousportal
```

Run Spring Boot application:

```bash
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

### Frontend Setup

Go to frontend folder:

```bash
cd marvellous-frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## 🔐 Authentication APIs

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## 👨‍💻 Author

Vaibhav Datkhil
