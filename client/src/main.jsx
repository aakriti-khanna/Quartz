import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import GalleryP from "./Pages/Gallery/GalleryP.jsx"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ParentCompo from "./Pages/Contact/Contact.jsx";
import ParentComponent from "./Pages/About/About.jsx";
// import ContactApp from "./Pages/Contact/Contact.jsx";
import NewFeedb from "./Pages/NewFeedback/NewFeedback.jsx";

import Home from"./Pages/Home.jsx"
import Quartz from "./Pages/MyProducts/Quartz/Quartz.jsx";
import Silica from "./Pages/MyProducts/SilicaSand/Silica.jsx";
import Mining from "./Pages/Operations/Mining/Mining.jsx";
import Quality from "./Pages/Operations/Quality/Quality.jsx";
import  Processing from "./Pages/Operations/Processing/Processing.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    
     
       <Route path="/" element={<App/>}>
      {/* <Route path='/contacts' element={<Contact/>} /> */}
      <Route path="/gallery" element={<GalleryP />} />
      <Route path="/About" element={<ParentComponent />} />
      <Route path="/contact" element={<ParentCompo />} />
      {/* <Route path="/contact" element={<ContactApp />} /> */}
      <Route path="/newFeed" element={<NewFeedb />} />
      <Route path="/" element={<Home />} />
      <Route path="/Silicasand" element={<Silica />} />
      <Route path="/Quartz" element={<Quartz />} />
      <Route path="/Mining" element={<Mining />} />
      <Route path="/Processing" element={<Processing />} />
      <Route path="/Quality" element={<Quality />} />

    </Route>


  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
