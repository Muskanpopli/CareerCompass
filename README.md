# CareerCompass

CareerCompass is a full-featured job portal web application that connects job seekers with recruiters. The platform provides secure authentication, efficient job posting/searching, and a clean user experience for both candidates and recruiters.

## 🔗 Live Demo

[Live Site](https://jobportal-fas2.onrender.com/)  

---

## 🚀 Features

### 👤 Dual-Persona Authentication
- Secure login and signup for both **Job Seekers** and **Recruiters**
- Role-based access control using JWT

### 📢 Job Posting (Recruiters)
- Post new job openings
- Manage and delete existing listings
- Upload company details and job descriptions

### 🔍 Job Search (Candidates)
- Search jobs using filters like role, location, type, and salary
- View job details and apply easily

### 🧰 Admin Controls (Optional)
- Manage user accounts and job listings
- Monitor platform usage

---

## 🛠 Tech Stack

| Frontend     | Backend        | Database    | Others             |
|--------------|----------------|-------------|--------------------|
| ReactJS      | NodeJS         | MongoDB     | Redux Toolkit      |
| Tailwind CSS | ExpressJS      | Mongoose    | Multer (file upload) |
| React Router | JWT Auth       |             |                    |

---

## 🚀 Installation & Run Locally

### ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) and npm  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB  
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Muskanpopli/CareerCompass.git
cd CareerCompass
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `/server` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm start
```

