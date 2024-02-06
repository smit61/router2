import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './home';
import About from './about';
import Project from './project';
import Team from './team';
import News from './news';
import Contact from './contact';




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {path:'/',
  element:<App/>},
    {path:'home',
  element:<Home/>},
  {
    path:'about',
    element:<About/>
  },
  {
    path:'project',
    element:<Project/>
  },
  {
    path:'team',
    element:<Team/>
  },
  {
    path:'news',
    element:<News/>
  },
  {
    path:'contact',
    element:<Contact/>
  }
  ]
)
root.render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
