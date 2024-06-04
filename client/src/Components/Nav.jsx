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


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mainlogo1.png";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOperationDropdownOpen, setIsOperationDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isOperationDropdownOpen) {
      setIsOperationDropdownOpen(false);
    }
  };

  const toggleOperationDropdown = () => {
    setIsOperationDropdownOpen(!isOperationDropdownOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsOperationDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`border-gray-200 dark:border-gray-700 h-20 ${isMobile ? "bg-blue-800" : "bg-slate-800"} dark:bg-gray-900`}>
      <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="w-32 h-20" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-grey-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-800-300 dark:bg-slate-300 md:dark:bg-slate-300 dark:border-slate-400 mb-5">
            <li>
              <Link to="/Home" className="block py-2 px-3 text-white bg-slate-800 rounded md:bg-transparent md:text-slate-300 md:p-0 dark:text-white md:dark:text-slate-100 text-xl mt-3" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">About Us</Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Contact</Link>
            </li>
            <li className="relative" onMouseLeave={closeDropdowns}>
              <button
                onClick={toggleDropdown}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
              >
                My Product
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      to="/Silicasand"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      role="menuitem"
                    >
                      Silica Sand
                    </Link>
                    <Link
                      to="/Quartz"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      role="menuitem"
                    >
                      Quartz
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseLeave={closeDropdowns}>
              <button
                onClick={toggleOperationDropdown}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3"
              >
                Operation
              </button>
              {isOperationDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      to="/Mining"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      role="menuitem"
                    >
                     Mining
                    </Link>
                    <Link
                      to="/Processing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      role="menuitem"
                    >
                     Processing
                    </Link>
                    <Link
                      to="/Quality"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      role="menuitem"
                    >
                     Quality
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/newFeed" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl mt-3">Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
