Product Catalog (Frontend + Backend)

Backend: Node.js + Express + MongoDB (Mongoose)
Frontend: React (plain, created to work with react-scripts)

Steps:
1. Start MongoDB locally (or provide MONGO_URI in backend/.env).
2. Backend:
   cd backend
   npm install
   npm run dev
3. Frontend:
   cd frontend
   npm install
   REACT_APP_API=http://localhost:5000/api npm start
