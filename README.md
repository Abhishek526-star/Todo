# Todo App

## Overview
A lightweight Todo App to manage daily tasks with an interactive and user-friendly interface. Users can seamlessly add, edit, delete, and track task completion.
## Live (https://todo-ten-lovat-25.vercel.app/)
![image](https://github.com/user-attachments/assets/29c9eebb-8143-4c5e-a861-6c52e8076419)


## 🌟Features
- **Add Tasks:** Quickly add new tasks with just a few clicks.
- **Edit Tasks:** Update task details directly in the task list.
- **Delete Tasks:** Remove unnecessary tasks easily.
- **Mark as Completed:** Click to mark tasks as done and track your progress visually.


## Technologies Used
- **Frontend:** React with Tailwind CSS for interactive and responsive design.

##  🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhishek526-star/todo-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd todo-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
5. **Configure Tailwind CSS in `tailwind.config.js`:**
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
6. **Add Tailwind to your CSS file (e.g., `src/index.css`):**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
7. **Start the app:**
   ```bash
   npm start
   ```

   Open the app at `http://localhost:3000` and start organizing your tasks interactively.






