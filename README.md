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

### User Routes

1. **User Signup**: Route to create users for the first time.
   - Route: `http://localhost:3000/user/signup`
   - Method: `POST`
   - Request Body:
     ```json
     {
         "userName": "username",
         "email": "example@gmail.com",
         "password": "example@321"
     }
     ```
   - Response:
     ```json
     {
         "message": "User created successfully",
         "_id": "6666f4bc062cdea070fdf0af"
     }
     ```

2. **User Login**: Route to login users.
   - Route: `http://localhost:3000/user/login`
   - Method: `POST`
   - Request Body:
     ```json
     {
         "email": "example@gmail.com",
         "password": "example@321"
     }
     ```
   - Response:
     ```json
     {
         "msg": "Login successful"
     }
     ```

### Favourite Routes

3. **Add to Favourites**: Route to add a paper to favourites.
   - Route: `http://localhost:3000/favourite/:id`
   - Method: `GET`
   - Requires Authentication: Yes
   - Response:
     ```json
     {
         "message": "Added to favourites successfully",
         "paperId": "1234567890"
     }
     ```

### Trash Routes

4. **Send to Trash**: Route to move a paper to trash.
   - Route: `http://localhost:3000/sendTrash/:id`
   - Method: `GET`
   - Requires Authentication: Yes
   - Response:
     ```json
     {
         "message": "Paper moved to trash successfully",
         "paperId": "1234567890"
     }
     ```

5. **Fetch All Trash**: Route to fetch all trashed papers.
   - Route: `http://localhost:3000/trash/:userId`
   - Method: `GET`
   - Requires Authentication: Yes
   - Response:
     ```json
     {
         "message": "Fetched all trashed papers",
         "trashedPapers": [
             {
                 "id": "1234567890",
                 "title": "Sample Paper"
             },
             
         ]
     }
     ```

### Folder Routes

6. **Add Folder**: Route to add a new folder.
   - Route: `http://localhost:3000/folders/addF`
   - Method: `PUT`
   - Requires Authentication: Yes
   - Request Body:
     ```json
     {
         "folderName": "New Folder"
     }
     ```
   - Response:
     ```json
     {
         "message": "Folder added successfully",
         "folderId": "abcdef123456"
     }
     ```

7. **Get All Folders**: Route to get all folders.
   - Route: `http://localhost:3000/folders/getF`
   - Method: `GET`
   - Requires Authentication: Yes
   - Response:
     ```json
     {
         "message": "Fetched all folders",
         "folders": [
             {
                 "id": "abcdef123456",
                 "name": "New Folder"
             },
             ...
         ]
     }
     ```

## 🍪 Cookie-based Authentication
In PaperSmith, we prioritize security and user experience. That's why we use HTTP-only cookies for authentication. When you log in, the server will set a secure HTTP-only cookie with your JWT token. This means you don't have to manually include the JWT token in the headers of your requests. The browser will automatically include the cookie in every request to the server. This makes your requests cleaner and your authentication process more secure.

We hope you enjoy using PaperSmith! 🎉

---

🚧 **A Note from the Developer:**
Thank you for exploring **PaperSmith**, our AI-powered question paper generator! 🎓📝 This project is currently under active development. We're constantly working on enhancing features, fixing bugs, and improving the overall user experience. Your feedback and support are invaluable as we strive to make PaperSmith even better. Stay tuned for updates, and thank you for being part of our journey! 🌟