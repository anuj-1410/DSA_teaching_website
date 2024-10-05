import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import App from './App';
import Courses from './components/Courses';
import SidebarBinaryTree from './Algorithms/BinaryTree/SidebarBinaryTree.jsx';
import SidebarHashing from './Algorithms/Hashing/SidebarHashing.jsx';
import SidebarLinkedList from './Algorithms/LinkedList/SidebarLinkedList.jsx';
import SidebarSorting from './Algorithms/Sorting/SidebarSorting.jsx';
import SidebarStack from './Algorithms/Stack/SidebarStack.jsx';

let allRoutes = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/courses', element: <Courses /> },
    { path: '/courses/binaryTree', element: <SidebarBinaryTree />},
    { path: '/courses/hashing', element: <SidebarHashing />},
    { path: '/courses/linkedList', element: <SidebarLinkedList />},
    { path: '/courses/sorting', element: <SidebarSorting />},
    { path: '/courses/stack', element: <SidebarStack />},
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
