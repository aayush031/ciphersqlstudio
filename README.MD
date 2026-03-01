# CipherSQLStudio

CipherSQLStudio is a browser-based SQL learning platform where students can practice SQL queries against pre-configured assignments with real-time execution and intelligent hints powered by an LLM.

---

## 🚀 Project Overview

CipherSQLStudio allows users to:

- View SQL assignments
- Write and execute SQL queries
- See real-time query results
- Get intelligent hints (not full solutions)
- Practice SQL safely inside a sandbox environment

---

## 🏗 Architecture

Frontend → React (Vite)  
Backend → Node.js + Express  
Sandbox Database → PostgreSQL  
Persistence Database → MongoDB Atlas  
LLM Integration → Gemini API  

---

## 🧠 How It Works

1. User selects an assignment.
2. User writes SQL query in Monaco Editor.
3. Frontend sends query to backend.
4. Backend:
   - Validates query (SELECT only)
   - Executes query in PostgreSQL
   - Returns results
5. If user clicks "Get Hint":
   - Backend sends structured prompt to Gemini
   - Gemini returns a hint (not solution)

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- SCSS (Mobile-first)
- Monaco Editor
- Axios

### Backend
- Node.js
- Express.js
- PostgreSQL (SQL sandbox)
- MongoDB Atlas (attempt storage)
- Mongoose
- Gemini LLM API

---

## 🔐 Security Features

- Only SELECT queries allowed
- Forbidden keywords blocked:
  - DROP
  - DELETE
  - UPDATE
  - ALTER
  - TRUNCATE
  - INSERT
- Query validation before execution

---

## 📂 Project Structure

ciphersqlstudio/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── server.js
│ └── .env

ciphersqlstudio/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── server.js
│ └── .env


---

## ⚙️ Environment Variables

Create `.env` in backend:

## ▶️ How To Run

### Backend


cd backend
npm install
npm run dev

---


### Frontend

cd frontend
npm install
npm run dev


---

## ✅ Completed Features

- Assignment listing (dynamic from PostgreSQL)
- SQL query execution engine
- Query result display
- Query validation layer
- LLM Hint integration (Gemini)
- MongoDB Atlas connection
- Full-stack integration
- Mobile-first SCSS design

---

## 🚧 Remaining Work

- Save user query attempts in MongoDB
- Login/Signup system
- Assignment-specific table restriction
- Data-flow diagram (hand-drawn)
- Improved UI polish
- Attempt history tracking
- Deployment (Vercel + Render)

---

## 📈 Future Improvements

- Role-based access control
- Leaderboard system
- Timed challenges
- Query performance analysis
- AI feedback scoring
- Docker deployment

---

## 👨‍💻 Author

Aayush Arunam
