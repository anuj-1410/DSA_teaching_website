import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import App from './App';
import Courses from './components/Courses';
import Aim from './pages/Aim.jsx';
import Pretest from './pages/Pretest.jsx';
import Concept from './pages/Concept.jsx';
import Learning from './pages/Learning.jsx';
import Demo from './pages/Demo.jsx';
import Quiz from './pages/Quiz.jsx';
import Posttest from './pages/Posttest.jsx';
import Sidebar from './components/Sidebar.jsx';

let allRoutes = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/courses', element: <Courses /> },
    { path: '/course/:topic', element: <Sidebar />, children: [
      { path: 'aim', element: <Aim /> },
      { path: 'pretest', element: <Pretest /> },
      { path: 'concept', element: <Concept /> },
      { path: 'learning', element: <Learning /> },
      { path: 'demo', element: <Demo /> },
      { path: 'quiz', element: <Quiz /> },
      { path: 'posttest', element: <Posttest /> },
    ]},
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
