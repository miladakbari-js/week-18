# Contact List App 📇

This is a modern contact list web application built using React. It allows users to manage a list of contacts with full **CRUD** functionality.

---

## Features

- Add new contacts with form validation
- Edit and update contact information
- Delete single contacts with confirmation modal
- Reusable form component using `react-hook-form` and `yup`
- Search contacts by name, email, or job title
- Responsive and clean UI using CSS Modules
- State management using Context API and useReducer
- Data persistence using `json-server`

---

## Tech Stack

- React 18+
- React Hook Form
- Yup (for validation)
- Context API
- useReducer
- json-server (mock REST API)
- CSS Modules
- React Icons
- Vite

---

## How to Run Locally:

    git clone https://github.com/miladakbari-js/week-18

## Install dependencies:

    npm install

## Start the mock API server:

    npx json-server --watch db.json --port 3001

## Start the development server:

    npm run dev

## 📁 Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   ├── constants/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── .env
├── README.md
└── package.json

```
