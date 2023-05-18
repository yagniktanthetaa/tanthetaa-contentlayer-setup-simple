// import React, { useState } from 'react'
// // import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { servicesMainItemMobile, discover, design, engineer, scale } from "../Header/HeaderData/Mobile/servicesData"
// import MobileDropdownMainItm from './HeaderData/Mobile/MobileDropdownMainItm';
// import MobileDropdownSubItm from './HeaderData/Mobile/MobileDropdownSubItm';

// const MobileView = () => {
//   const [subShow, setsubShow] = useState();
//   const [isOpen, setIsOpen] = useState(-1);
//   const [Service, setService] = useState(false);

//   function closeNav(id) {
//     setService(true);
//     setshow(!show);
//     // setshowData(id);
//     setService(true);
//     setsubShow(id);
//     document.getElementById("mySidenav").style.width = "0";
//   }

//   const subDropdown = (id) => {
//     setService(true);
//     setsubShow(id);
//   };

//   const openAccorrdion = (id) => {
//     setIsOpen(isOpen === id ? -1 : id);
//   };

//   return (
//     <>
//       <div className="flex items-center pl-2 justify-start">

//         <a
//           href="/"
//           type="button"
//           id="app-btn"
//           className="dropdown-btn px-3 py-2"
//           onClick={() => {
//             closeNav();
//           }}
//         >
//           Services
//         </a>

//         <div
//           className={`${isOpen === 3 ? "open" : "close"} accordion-bg`}
//           onClick={() => openAccorrdion(3)}
//           id="open"
//         >
//           <div className="d-flex align-items-center justify-content-between ">
//             <img
//               src={"/assets/menuarrow.svg"}
//               alt="menuarrow"
//               className="faq-arrow"
//             />
//           </div>
//         </div>
//       </div>
//       {isOpen === 3 && (
//         <>
//           <div className=" px-3">
//             {
//               servicesMainItemMobile?.map((e, ind) => (
//                 <>
//                   <MobileDropdownMainItm
//                     e={e}
//                     ind={ind}
//                     subDropdown={subDropdown}
//                   />
//                 </>
//               ))
//             }
//             {isOpen === 3 && subShow === 4 && (
//               <>
//                 {
//                   discover?.map((e, ind) => (
//                     <MobileDropdownSubItm
//                       e={e}
//                       ind={ind}
//                       closeNav={closeNav}
//                     />
//                   ))
//                 }
//               </>
//             )}
//             {Service && subShow === 5 && (
//               <>
//                 {design?.map((e, ind) => (
//                   <MobileDropdownSubItm
//                     e={e}
//                     ind={ind}
//                     closeNav={closeNav}
//                   />
//                 ))}
//               </>
//             )}
//             {Service && subShow === 6 && (
//               <>
//                 {engineer?.map((e, ind) => (
//                   <MobileDropdownSubItm
//                     e={e}
//                     ind={ind}
//                     closeNav={closeNav}
//                   />
//                 ))}
//               </>
//             )}
//             {Service && subShow === 7 && (
//               <>
//                 {scale?.map((e, ind) => (
//                   <MobileDropdownSubItm
//                     e={e}
//                     ind={ind}
//                     closeNav={closeNav}
//                   />
//                 ))}
//               </>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   )
// }

// export default MobileView
