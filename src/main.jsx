import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About";
import Exprience from "./components/Exprience";
import Contect from "./components/Contect";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Exprience />} />
      <Route path="/contact" element={<Contect />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
