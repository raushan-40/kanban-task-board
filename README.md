# 📋 Kanban Task Board

A modern, responsive, and user-friendly **Kanban Task Board** built with **React** and **Vite**. This project was developed as part of an internship assignment to demonstrate React fundamentals, component-based architecture, state management, and modern frontend development practices.

---

## 🚀 Project Overview

The Kanban Task Board helps users organize and manage tasks across three workflow stages:

- 📝 To Do
- 🚧 In Progress
- ✅ Done

Users can create, edit, delete, search, prioritize, and move tasks using an intuitive drag-and-drop interface. The application also stores tasks in **localStorage**, ensuring that data persists even after refreshing the browser.

---

## ✨ Features

- ✅ Add new tasks
- ✏️ Inline task editing
- 🗑️ Delete tasks
- 🔄 Move tasks between columns
- 🎯 Drag & Drop using **@dnd-kit**
- 🚩 Priority levels (High, Medium, Low)
- 🎨 Color-coded priority indicators
- 🔍 Real-time search functionality
- 💾 Data persistence using **localStorage**
- 📱 Fully responsive design
- ♻️ Reusable React components
- ⚡ Fast development with **Vite**

---

## 🛠️ Technologies Used

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**
- **@dnd-kit**
- **localStorage**
- **Git & GitHub**

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Board.jsx
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
│
├── App.jsx
├── main.jsx
├── index.css
└── assets/
```

### Component Description

| Component | Description |
|-----------|-------------|
| **App.jsx** | Manages application state and business logic |
| **Board.jsx** | Displays all Kanban columns |
| **Column.jsx** | Displays tasks based on their status |
| **TaskCard.jsx** | Represents an individual task |
| **TaskForm.jsx** | Handles task creation |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/raushan-40/kanban-task-board.git
```

### 2. Navigate to the Project Directory

```bash
cd kanban-task-board
```

### 3. Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Deployment

This project can be deployed on:

- Vercel
- Netlify

### Build Configuration

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

---

## 📚 React Concepts Demonstrated

- Functional Components
- React Hooks (`useState`, `useEffect`)
- Component-Based Architecture
- Props
- State Lifting
- Conditional Rendering
- Controlled Components
- Event Handling
- Immutable State Updates
- Local Storage Integration

---

## 📈 Future Improvements

Potential enhancements include:

- 🌙 Dark Mode
- 👥 User Authentication
- 🏷️ Task Categories & Labels
- 📅 Due Dates & Reminders
- 📌 Task Sorting Within Columns
- ☁️ Cloud Database Integration
- 👨‍💻 Team Collaboration
- 📊 Activity History
- 🔔 Notifications

---

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Building React applications using functional components
- Managing application state with React Hooks
- Creating reusable UI components
- Implementing drag-and-drop functionality
- Persisting data using localStorage
- Designing responsive user interfaces
- Organizing scalable React project structures
- Using Git and GitHub for version control

---

## 👨‍💻 Author

**Raushan Kumar**

- GitHub: https://github.com/raushan-40

---

## 📄 License

This project was developed as part of an internship assignment for educational and learning purposes.
