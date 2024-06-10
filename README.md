
# 🚀 Welcome to PaperSmith! 🎉

## 📚 Project Overview
PaperSmith is a revolutionary application that uses the power of Artificial Intelligence 🧠 to generate question papers 📄. Have a 250-page book or document in PDF format? No problem! Upload your document, specify the type of paper you want, and watch as our AI generates the paper for you! 🎉

This project is built on the robust MERN stack 🌐 and uses Language Models (LLMs) for the AI to generate the papers. Depending on feasibility, it can utilize either LLAMA 3 or Google's Gemini API.

## 🚀 Getting Started

### 📋 Prerequisites
Before you begin, make sure you have the following 💻:
- Node.js installed on your local machine
- MongoDB connection string
- JWT secret key

### 💾 Installation
1. Clone the repository using the following command:
   ```bash
   git clone https://github.com/Skizzy-create/PaperSmith.git
   ```
   or 
   ```bash
   gh repo clone Skizzy-create/PaperSmith
   ```
2. Create a `.env` file in the root directory of the project. Add your MongoDB connection string and JWT secret key to this file.

### 🏃‍♂️ Running the Application
1. Start the server by running the following command in the terminal:
   ```bash
   cd Backend
   nodemon server.js
   ```
2. Navigate to the Frontend directory and start the React app:
   ```bash
   cd Frontend
   npm run start
   ```

## 🌐 API Routes

1. **User Signup**: Route to create users for the first time.
   - Route: `http://localhost:3000/user/signup`
   - Request Body:
     ```json
     {
         "userName": "username",
         "email": "example@gmail.com",
         "password": "example@321"
     }
     ```
     Return Body:
     ```json
     {
         "message": "User created successfully",
         "_id": "6666f4bc062cdea070fdf0af",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjZmNGJjMDYyY2RlYTA3MGZkZjBhZiIsImVtYWlsIjoiZXhhbXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3MTgwMjMzNTZ9.QiIcomdH8VhY6rlKuynBLmSM-KcHNMfPIVMBx7zy-Rg"
      }
     ```
   

2. **User Login**: Route to login users.
   - Route: `http://localhost:3000/user/login`
   - Request Body:
     ```json
     {
         "email": "example@gmail.com",
         "password": "example@321"
     }
     ```
      Return Body:
     ```json
     {
         "msg": "Login successful",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjZlZjYzMDAwZWQxODUxNzcxYTRhMSIsImVtYWlsIjoiYXNsaWFrYXJ0aWtAZ21haWwuY29tIiwiaWF0IjoxNzE4MDIyMjAwfQ.uV-mMioZmowRRUxQt2ZxHxP508A047AKFsX3jPKXL2U"
      }
     ```

We hope you enjoy using PaperSmith! 🎉

---
🚧 **A Note from the Developer:**
Thank you for exploring **PaperSmith**, our AI-powered question paper generator! 🎓📝 This project is currently under active development. We're constantly working on enhancing features, fixing bugs, and improving the overall user experience. Your feedback and support are invaluable as we strive to make PaperSmith even better. Stay tuned for updates, and thank you for being part of our journey! 🌟
