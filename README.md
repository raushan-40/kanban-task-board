Kanban Task Board
A lightweight, modern, and responsive Kanban task management application. Built from the ground up as a production-ready internship project, this application showcases component-based architecture, unidirectional data flow, derived state rendering, and robust drag-and-drop mechanics.
Project Description
The Kanban Task Board is a self-contained productivity tool designed to help team members structure, track, and complete tasks. The project prioritizes performance, visual clarity, and clean React engineering. By leveraging modern CSS and robust primitives, it manages states, updates storage, and filters information locally on the client device.
Features
Contextual Drag and Drop: Move task cards dynamically between stages using pointer sensors configured with movement threshold buffers. Powered by @dnd-kit/core [1].
Dynamic Task Creation: Create new tasks with custom names, optional detailed descriptions, and urgency priority levels.
Visual Priority Indicators: Color-coded left border accents quickly distinguish task urgency (High 
→
→
 Red, Medium 
→
→
 Yellow, Low 
→
→
 Green).
Inline Title Editing: Edit any task's title inline by clicking the text. The system enforces that only one card is editable at a time.
Global Real-Time Search: Instant, case-insensitive search across task titles and descriptions. Calculations are computed dynamically during render cycles using derived data optimization.
LocalStorage Persistence: Local storage read/writes keep task states intact through browser refreshes without causing flashing layout shifts.
Fully Responsive & Accessible: Built with mobile-first media queries and keyboard-focus outlines (:focus-visible) for inclusive usability.
Technologies Used
React: Functional components and hooks (useState, useEffect)
Vite: Modern front-end build tool and lightning-fast development server
@dnd-kit/core: Performance-oriented drag-and-drop primitives [1]
Modern CSS: Custom properties (CSS variables), Flexbox grid layouts, and custom viewport breakpoints
Folder Structure
The project maintains a flat, beginner-friendly, and modular directory tree [2]:
code
Text
src/
├── components/          # Kanban-specific component directory
│   ├── Board.jsx        # Grid layout wrapper; handles drag context events
│   ├── Column.jsx       # Droppable container grouping status-filtered cards
│   ├── TaskCard.jsx     # Draggable task card with inline edit and delete actions
│   └── TaskForm.jsx     # Controlled form input component for new tasks
├── App.jsx              # Main orchestrator (stores state and orchestrates callbacks)
├── index.css            # Global design tokens, resets, classes, and media queries
└── main.jsx             # Entry point; mounts the React tree and loads global styles
Installation Steps
Ensure you have Node.js installed on your machine.
Clone the Repository:
code
Bash
git clone https://github.com/your-username/kanban-task-board.git
Navigate into the Project Folder:
code
Bash
cd kanban-task-board
Install Dependencies:
code
Bash
npm install
Running Locally
To launch the development server with Hot Module Replacement (HMR):
code
Bash
npm run dev
The application will launch in your browser. Typically, it runs on http://localhost:5173/ (or the port specified in your terminal output).
Build Command
To compile the application code into highly optimized static assets ready for production:
code
Bash
npm run build
This generates a dist/ folder containing the minified HTML, compiled CSS, and lightweight JS chunks. You can preview this build locally using:
code
Bash
npm run preview
Deployment
Since Vite builds highly optimized static files, this project can be hosted quickly and securely on standard static providers.
Deploying to Netlify / Vercel
Push your code to a Git provider (GitHub, GitLab, or Bitbucket).
Connect your repository to Netlify or Vercel.
Use the following build settings:
Build Command: npm run build
Publish Directory: dist
Click Deploy.
Future Improvements
While the core MVP is complete and production-ready, several features could expand the product's scope in future sprints:
Vertical Sorting: Enable users to rearrange the vertical index order of cards inside a single column, rather than appending new drops to the bottom.
Category Tags: Add a tagging system so users can group tasks by department (e.g., Frontend, Design, Documentation).
Dark Mode Toggle: Expand the global custom properties inside index.css to support a cohesive dark theme.
Backend Sync: Connect the callback handlers in App.jsx to a REST or GraphQL API (e.g., Express/MongoDB) to sync task changes to a persistent cloud database instead of localStorage.