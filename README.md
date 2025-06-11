# EMS - Employee Management System.

A simple web-based Employee Management System (EMS) to manage employee records efficiently.

🔗 **Live Demo**: [Click Here](https://ems-project-eight.vercel.app/)
## 🚀 Features-Login <img width="960" alt="Screenshot 2025-06-03 231547" src="https://github.com/user-attachments/assets/3ed82857-e6ae-4dbe-8ad9-322c83d11ea0" />
## 🚀 Features-Admin Page <img width="960" alt="Screenshot 2025-06-03 232616" src="https://github.com/user-attachments/assets/c13b1860-0772-4d39-811c-94b8520bda11" />
## 🚀 Features-Employee Page<img width="960" alt="Screenshot 2025-06-03 232509" src="https://github.com/user-attachments/assets/6059f4f1-1dd3-442e-a9f6-bcc556ae4c8e" />


## 🚀 Features
- Add, view, update employee details.
- Responsive UI for better user experience.
- Built with React.js and styled using modern CSS.

## 🛠 Tech Stack
- React.js
- CSS / Tailwind (if used)
- Vercel (for deployment)

## 🚀 Folder Structure.
```
EMS-PROJECT
├─ components - Shortcut.lnk         # Shortcut to components folder (Windows link file)
├─ eslint.config.js                 # ESLint configuration file for linting rules
├─ index.html                       # Main HTML file for the project
├─ package-lock.json                # Auto-generated lock file for npm dependencies
├─ package.json                     # Project metadata and dependencies list
├─ public                           # Public assets folder (static files)
│  └─ vite.svg                      # Vite logo or image used in the app
├─ README.md                        # Project documentation file
├─ src                              # Source code folder (React components and logic)
│  ├─ App.css                       # Global CSS styles for the app
│  ├─ App.jsx                       # Root React component
│  ├─ assets                        # Static assets like images
│  │  └─ react.svg                  # React logo image
│  ├─ components                    # Reusable React components
│  │  ├─ Auth                       # Authentication related components
│  │  │  └─ Login.jsx               # Login component
│  │  ├─ DashBoard                  # Dashboard components
│  │  │  ├─ AdminDashBoard.jsx      # Admin dashboard UI
│  │  │  └─ EmployeeDashBoard.jsx   # Employee dashboard UI
│  │  ├─ others                     # Other UI components
│  │  │  ├─ AllTask.jsx             # Component to show all tasks
│  │  │  ├─ CreateTask.jsx          # Component to create new task
│  │  │  ├─ Header.jsx              # Header UI component
│  │  │  └─ TaskListNumber.jsx      # Task list numbering component
│  │  └─ TaskList                   # Components related to task lists
│  │     ├─ AcceptTask.jsx          # Component for accepting a task
│  │     ├─ CompleteTask.jsx        # Component for completed tasks
│  │     ├─ FailedTask.jsx          # Component for failed tasks
│  │     ├─ NewTask.jsx             # Component for new tasks
│  │     └─ TaskList.jsx            # Main task list component
│  ├─ context                       # React context for global state
│  │  └─ AuthProvider.jsx           # Auth context provider component
│  ├─ index.css                     # Global CSS styles
│  ├─ main.jsx                      # Main React entry point
│  ├─ pages                         # Route-based page components (e.g., Home, About)
│  └─ utils                         # Utility/helper functions
│     └─ localStorage.jsx           # Helper for localStorage operations
└─ vite.config.js                   # Vite bundler configuration file

```

## 📦 How to Run Locally.
```bash
git clone https://github.com/your-username/ems-project.git
cd ems-project
npm install
npm start
