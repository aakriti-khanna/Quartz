// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/mainlogo1.png";

// const Nav = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isOperationDropdownOpen, setIsOperationDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleOperationDropdown = () => {
//     setIsOperationDropdownOpen(!isOperationDropdownOpen);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-slate-800 border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-20">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} alt="Logo" className="w-32 h-20" />
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//           </svg>
//         </button>
//         <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-grey-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-800-300 dark:bg-slate-300 md:dark:bg-slate-300 dark:border-slate-400 mb-5">
//             <li>
//               <Link to="/Home" className="block py-2 px-3 text-white bg-slate-800 rounded md:bg-transparent md:text-slate-300 md:p-0 dark:text-white md:dark:text-slate-100 text-xl mt-3" aria-current="page">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">About Us</Link>
//             </li>
//             <li>
//               <Link to="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Gallery</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Contact</Link>
//             </li>
//             <li className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
//               >
//                 My Product
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                     <Link
//                       to="/Silicasand"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Silica Sand
//                     </Link>
//                     <Link
//                       to="/Quartz"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Quartz
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li className="relative">
//               <button
//                 onClick={toggleOperationDropdown}
//                 className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
//               >
//                 Operation
//               </button>
//               {isOperationDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                     <Link
//                       to="/Mining"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Mining
//                     </Link>
//                     <Link
//                       to="/Processing"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Processing
//                     </Link>


//                     <Link
//                       to="/Quality"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Quality
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li>
//               <Link to="/newFeed" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Feedback</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/mainlogo1.png";

// const Nav = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isOperationDropdownOpen, setIsOperationDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     if (isOperationDropdownOpen) {
//       setIsOperationDropdownOpen(false);
//     }
//   };

//   const toggleOperationDropdown = () => {
//     setIsOperationDropdownOpen(!isOperationDropdownOpen);
//     if (isDropdownOpen) {
//       setIsDropdownOpen(false);
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeDropdowns = () => {
//     setIsDropdownOpen(false);
//     setIsOperationDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 650);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className={`border-gray-200 dark:border-gray-700 h-20 ${isMobile ? "bg-blue-800" : "bg-slate-800"} dark:bg-gray-900`}>
//       <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} alt="Logo" className="w-32 h-20" />
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//           </svg>
//         </button>
//         <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-grey-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-800-300 dark:bg-slate-300 md:dark:bg-slate-300 dark:border-slate-400 mb-5">
//             <li>
//               <Link to="/Home" className="block py-2 px-3 text-white bg-slate-800 rounded md:bg-transparent md:text-slate-300 md:p-0 dark:text-white md:dark:text-slate-100 text-xl mt-3" aria-current="page">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">About Us</Link>
//             </li>
//             <li>
//               <Link to="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Gallery</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Contact</Link>
//             </li>
//             <li className="relative" onMouseLeave={closeDropdowns}>
//               <button
//                 onClick={toggleDropdown}
//                 className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
//               >
//                 My Product
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                     <Link
//                       to="/Silicasand"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Silica Sand
//                     </Link>
//                     <Link
//                       to="/Quartz"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Quartz
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li className="relative" onMouseLeave={closeDropdowns}>
//               <button
//                 onClick={toggleOperationDropdown}
//                 className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
//               >
//                 Operation
//               </button>
//               {isOperationDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                     <Link
//                       to="/Mining"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Mining
//                     </Link>
//                     <Link
//                       to="/Processing"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Processing
//                     </Link>
//                     <Link
//                       to="/Quality"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                      Quality
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li>
//               <Link to="/newFeed" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Feedback</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Company' },
//     { id: 3, text: 'Resources' },
//     { id: 4, text: 'About' },
//     { id: 5, text: 'Contact' },
//   ];

//   return (
//     <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       {/* Logo */}
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './Nav.css';

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [productMenuOpen, setProductMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProductMenu = () => {
//     setProductMenuOpen(!productMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="logo">Logo</div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
//         <li><a href="#">HOME</a></li>
//         <li><a href="#">Contact Us</a></li>
//         <li>
//           <a href="#">My Operation</a>
//           <ul>
//             <li><a href="#">Category 1</a></li>
//             <li><a href="#">Category 2</a></li>
//             <li><a href="#">Category 3</a></li>
//           </ul>
//         </li>
//         <li onClick={toggleProductMenu} className="dropdown">
//           <a href="#">My Product</a>
//           <ul className={`dropdown-menu ${productMenuOpen ? 'show' : ''}`}>
//             <li><a href="#">Product 1</a></li>
//             <li><a href="#">Product 2</a></li>
//             <li><a href="#">Product 3</a></li>
//           </ul>
//         </li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Feedback</a></li>
//       </ul>
//     </div>
//   );
// }

// export default Nav;



// import React, { useState } from 'react';
// import './Nav.css';
// import logo from "../assets/mainlogo1.png";

// const Nav = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     console.log("hello");
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header>
//       <nav>
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//         </div>
//         <span className='text-white'>
//             <h1 className='text-xl'> Silica Floor Industries</h1>
             
//               <h4 className='text-sm'>A Steps Towards Quality</h4>
//             </span>
       
//         <ul className={`nav-links ${isNavOpen ? 'nav-active' : ''} z-10 text-lg`} >
//           <li><a href="./">Home</a></li>
//           <li><a href="./About">About</a></li>

//           <li className="dropdown">
//             <a href="#">Products</a>
//             <div className="dropdown-content">
//               <a href="/Silicasand">Silica </a>
//               <a href="./Quartz">Quartz</a>
            
//             </div>
//           </li>
//           <li className="dropdown">
//             <a href="#">Operations</a>
//             <div className="dropdown-content">
//               <a href="./Mining">Mining</a>
//               <a href="./Processing">Processing</a>
//               <a href="./Quality">Quality Check</a>
//             </div>
//           </li>
//           <li><a href="./Gallery">Gallery</a></li>
//           <li><a href="./Contact">Contact</a></li>
        
//           <li><a href="./NewFeed">Feedback</a></li>
        

//         </ul>
//         <div className="hamburger" onClick={toggleNav}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;
import React, { useState } from 'react';
import './Nav.css';
import logo from "../assets/mainlogo1.png";
import { FaHome, FaInfoCircle, FaBox, FaCog, FaImages,  FaComments  } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("hello");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <span className='text-white navDescription'>
          <h1 className='text-xl'> Silica Floor Industries</h1>
          <h4 className='text-sm'>A Step Towards Quality</h4>
        </span>

        <ul className={`nav-links ${isNavOpen ? 'nav-active' : ''}  text-lg`}>
          <li><a href="./"><FaHome /><span>Home</span></a></li>
          <li><a href="./About"><FaInfoCircle /><span>About</span></a></li>
          <li className="dropdown">
            <a href="#"><FaBox /><span>Products</span></a>
            <div className="dropdown-content">
              <a href="/Silicasand">Silica</a>
              <a href="./Quartz">Quartz</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#"><FaCog /><span>Operations</span></a>
            <div className="dropdown-content">
              <a href="./Mining">Mining</a>
              <a href="./Processing">Processing</a>
              <a href="./Quality">Quality Check</a>
            </div>
          </li>
          <li><a href="./Gallery"><FaImages /><span>Gallery</span></a></li>
          <li><a href="./Contact"><BsFillTelephoneFill /><span>Contact</span></a></li>
          <li><a href="./NewFeed"><FaComments /><span>Feedback</span></a></li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
