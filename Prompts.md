# AI Prompts Used During Development

This document contains the AI prompts used during the development of the **Kanban Task Board** project. The project was built incrementally to simulate a professional software development workflow.

---

# Prompt 1 – Project Setup

```
Act as a Senior React Software Engineer.

I am building this project for my company internship.

Do NOT generate the entire project at once.

Your responsibility is to mentor me like a senior engineer.

Rules:

• Explain every architectural decision.
• Build the project incrementally.
• Never skip planning.
• Never write unnecessary code.
• Use professional React practices.
• Follow component-based architecture.
• Use functional components only.
• Use React Hooks.
• Use useState only unless I explicitly ask otherwise.
• Do not use Redux.
• Use Vite.
• Make the project production ready.
• Every step should correspond to one Git commit.

At every stage provide:

1. Goal
2. Architecture
3. Files to create
4. Code
5. Explanation
6. Git Commit Message

Wait for my approval before moving to the next step.
```

---

# Prompt 2 – Project Architecture

```
Design the complete architecture of this Kanban Task Board.

Requirements:

• React + Vite
• Component based
• Beginner friendly
• Professional folder structure
• Reusable components

Explain:

- Folder structure
- Component hierarchy
- Data flow
- State flow

Do not write code.
```

---

# Prompt 3 – Component Structure

```
Generate only the project structure.

Create:

src/
components/
Board.jsx
Column.jsx
TaskCard.jsx
TaskForm.jsx

App.jsx
main.jsx

Create only placeholder components.

Do not implement functionality.
```

---

# Prompt 4 – Basic Kanban Layout

```
Implement only the basic Kanban board layout.

Requirements:

- Three columns:
  - To Do
  - In Progress
  - Done

Do not use useState.

Do not implement any functionality.

Only build the UI layout.
```

---

# Prompt 5 – State Management

```
Implement only the React state management.

Requirements:

- Use useState
- Keep all state inside App.jsx
- Create sample tasks
- Pass data using Props

Do not implement:

- Add Task
- Delete
- Move
- Edit
- Search
- Priority
- localStorage
- Drag & Drop
```

---

# Prompt 6 – Add Task

```
Implement only the Add Task feature.

Requirements:

- Input field
- Add button
- Ignore empty input
- Unique ID
- Add task to To Do column

Do not implement any other feature.
```

---

# Prompt 7 – Delete Task

```
Implement only the Delete Task feature.

Requirements:

- Delete selected task
- Use immutable state updates
- Pass callback functions using Props

Do not implement any additional feature.
```

---

# Prompt 8 – Move Task

```
Implement only the Move Task feature.

Requirements:

Support:

- To Do → In Progress
- In Progress → Done
- Done → In Progress

Use immutable state updates.

Do not implement Drag & Drop.
```

---

# Prompt 9 – Inline Editing

```
Implement only Inline Editing.

Requirements:

- Click to edit
- Save changes
- Cancel editing

Only one task should be editable at a time.

Do not implement any other feature.
```

---

# Prompt 10 – Priority System

```
Implement only the Priority System.

Requirements:

- High
- Medium
- Low

Display:

High → Red

Medium → Yellow

Low → Green

Do not implement localStorage.
```

---

# Prompt 11 – Local Storage

```
Implement only localStorage persistence.

Requirements:

- Load tasks from localStorage
- Save automatically using useEffect

Do not implement Search or Drag & Drop.
```

---

# Prompt 12 – Global Search

```
Implement only the Global Search feature.

Requirements:

- Case-insensitive search
- Real-time filtering
- Search across all columns
- Do not modify original state

Do not implement Drag & Drop.
```

---

# Prompt 13 – Drag and Drop

```
Implement Drag & Drop using @dnd-kit.

Requirements:

- Drag tasks between columns
- Preserve all existing functionality
- Update task status after dropping

Do not redesign the UI.
```

---

# Prompt 14 – UI Improvements

```
Improve only the user interface.

Requirements:

- Responsive
- Modern
- Accessible
- Better spacing
- Better typography
- Better buttons
- Better inputs

Do not change functionality.
```

---

# Prompt 15 – Code Refactoring

```
Review the project.

Improve:

- Readability
- Naming
- Remove duplicate code
- Remove unused imports
- Keep beginner friendly

Do not change functionality.
```

---

# Prompt 16 – README Documentation

```
Generate a professional README.md.

Include:

- Overview
- Features
- Technologies
- Folder Structure
- Installation
- Usage
- Deployment
- Future Improvements
```

---

# Prompt 17 – QA Review

```
Act as a Senior React Reviewer.

Review:

- React best practices
- Props
- Hooks
- State management
- Accessibility
- Responsive Design
- Performance
- Folder structure

Suggest improvements only.
```

---

# Development Workflow

The project was developed incrementally using the following workflow:

1. Generate a small feature using AI.
2. Review the generated code.
3. Implement and test the feature.
4. Commit the changes using Git.
5. Push changes to GitHub.
6. Repeat for the next feature.

This workflow was followed to maintain a clean Git history and simulate a professional software development process.
