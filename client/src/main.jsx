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

import ParentCompo from "./Pages/Feedback/Feedback.jsx";
import ParentComponent from "./Pages/About.jsx";
// import ContactApp from "./Pages/Contact/Contact.jsx";
import NewFeedb from "./Pages/NewFeedback/NewFeedback.jsx";

import Home from"./Pages/Home.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    
     
       <Route path="/" element={<App />}>
      {/* <Route path='/contacts' element={<Contact/>} /> */}
      <Route path="/gallery" element={<GalleryP />} />
      <Route path="/About" element={<ParentComponent />} />
      <Route path="/feedback" element={<ParentCompo />} />
      {/* <Route path="/contact" element={<ContactApp />} /> */}
      <Route path="/newFeed" element={<NewFeedb />} />
      <Route path="/Home" element={<Home />} />

    </Route>


  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
