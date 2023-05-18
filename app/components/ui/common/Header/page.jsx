/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./header.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import MenuItem from "./MenuItem";

// ===================== //
// About Array Data
// ===================== //
import {
  aboutMainItem,
  companyData1,
  companyData2,
  projectCosting1,
  projectCosting2,
  projectCosting3,
  dedicatedResources1,
  dedicatedResources2,
  dedicatedResources3,
  cityWeWorkIn1,
  cityWeWorkIn2,
  cityWeWorkIn3,
} from "./HeaderData/aboutData";
import { aboutMainItemMobile } from "./HeaderData/Mobile/aboutData";

// ===================== //
// Blockchain Array Data
// ===================== //
import {
  blockchainMainItem,
  NFT1,
  NFT2,
  NFT3,
  marketing1,
  marketing2,
  marketing3,
  metaverse1,
  metaverse2,
  metaverse3,
  web3_1,
  web3_2,
  web3_3,
  defi1,
  defi2,
  defi3,
  ico1,
  sto1,
  ido1,
  crypto1,
  crypto2,
  crypto3,
  blockchain1,
  blockchain2,
  blockchain3,
} from "./HeaderData/blockchainData";
import { blockchainMainItemMobile } from "./HeaderData/Mobile/blockchainData";

// ===================== //
// Games Array Data
// ===================== //
import {
  gameMainItem,
  gameDevelopment1,
  gameDevelopment2,
  gameDevelopment3,
  gameArt1,
  gameArt2,
  gameArt3,
  animation1,
  animation2,
  animation3,
  outstaffing1,
  outstaffing2,
  outstaffing3,
} from "./HeaderData/gameData";
import { gamesMainItemMobile } from "./HeaderData/Mobile/gamesData";

// ===================== //
// Services Array Data
// ===================== //
import {
  servicesMainItem,
  discover1,
  discover2,
  design1,
  design2,
  engineer1,
  engineer2,
  engineer3,
  scale1,
  scale2,
} from "./HeaderData/servicesData";

import { servicesMainItemMobile } from "./HeaderData/Mobile/servicesData";

// ===================== //
// Technologies Array Data
// ===================== //
import {
  technologiesMainItem,
  biAnalytics1,
  biAnalytics2,
  biAnalytics3,
  cloud1,
  cloud2,
  cloud3,
  mobile1,
  mobile2,
  mobile3,
  frontend1,
  frontend2,
  frontend3,
  backend1,
  backend2,
  backend3,
  trendingTech1,
  trendingTech2,
  trendingTech3,
  ai1,
  ai2,
  ai3,
} from "./HeaderData/technologiesData";
import { technologiesMainItemMobile } from "./HeaderData/Mobile/technologiesData";

// ===================== //
// Industries Array Data
// ===================== //
import {
  industriesMainItem,
  education1,
  education2,
  education3,
  bankingFinance1,
  bankingFinance2,
  bankingFinance3,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  gaming1,
  gaming2,
  gaming3,
  foodRestaurant1,
  foodRestaurant2,
  foodRestaurant3,
  texiBooking1,
  texiBooking2,
  texiBooking3,
  dating1,
  dating2,
  dating3,
  travelTransport1,
  travelTransport2,
  travelTransport3,
  eventsTickets1,
  eventsTickets2,
  eventsTickets3,
  socialNetworking1,
  socialNetworking2,
  socialNetworking3,
  onDemand1,
  onDemand2,
  onDemand3,
  healthcareFitness1,
  healthcareFitness2,
  healthcareFitness3,
} from "./HeaderData/industriesData";
import { industriesMainItemMobile } from "./HeaderData/Mobile/industriesData";

import DropDownMainItem from "./DropDownMainItem";
import DropDownSubRow3 from "./DropDownSubRow3";
// import MobileView from "./MobileView";
import MobileDropdownMainItm from "./HeaderData/Mobile/MobileDropdownMainItm";
import MobileDropdownSubItm from "./HeaderData/Mobile/MobileDropdownSubItm";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [ShowTab, setShowTab] = useState(1);
  const [hideShow, sethideShow] = useState(false);
  const [navBgClr, setNavBgClr] = useState(false);
  const [ArrowShow, setArrowShow] = useState("");

  const TabOpen = (x) => {
    setShowTab(x);
  };

  const HideShow = (e, id) => {
    e.preventDefault();
    sethideShow(true, id);
    setNavBgClr(true, id);
    setArrowShow(id);
  };

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  // initial scroll positon on page load
  const [scrollPosition, getScrollPositon] = useState(
    typeof window !== "undefined" && document.documentElement.scrollTop
  );
  // hook and event handlers to keep track of and update scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      getScrollPositon(document.documentElement.scrollTop);
    });
  }, []);

  // Nav-Scroll
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 30
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  // Over Nav-Scroll
  // const divStyle = {
  //   filter: blur("5px")
  // };

  const navBgStyle = navBgClr
    ? `bg-[#410ead] text-[#cdcdcd]`
    : null
  // : "bg-[#410ead] text-[#cdcdcd]";

  // path location
  const currentPage = usePathname();
  const navTextColor =
    currentPage.split("/")[1] === "games"
      || currentPage.split("/")[1] === "nfts"
      || currentPage.split("/")[1] === "defi"
      || currentPage.split("/")[1] === "metaverse"
      || currentPage.split("/")[1] === "blockchain"
      || currentPage.split("/")[1] === "contact-us-to-develop-software-for-your-business"
      || currentPage.split("/")[1] === "blogs"
      ? `${scrollPosition < 30
        ? "text-white"
        : `${navBgStyle && scrollPosition < 30 ? ` ${navBgStyle}` : null}`
      }`
      : null;

  // over path location

  const [showNavColor, setShowNavColor] = useState(false)

  // Mobile View
  const [subShow, setsubShow] = useState();
  const [isOpen, setIsOpen] = useState(-1);
  const [Service, setService] = useState(false);

  function closeNav(id) {
    setService(true);
    // setshow(!show);
    // setshowData(id);
    setService(true);
    setsubShow(id);
    document.getElementById("mySidenav").style.width = "0";
  }

  const subDropdown = (id) => {
    setService(true);
    setsubShow(id);
  };

  const openAccorrdion = (id) => {
    setIsOpen(isOpen === id ? -1 : id);
  };



  return (
    <>
      {
        <div className={`fixed top-0 left-0 right-0 z-[99999] header-section`}>
          {/* ===================DESKTOP MENU=============== */}
          <div className={` ${showNavColor && navBgStyle}  ${navTextColor}`}>
            <div className={`container mx-auto MainMenu xl:px-0 lg:px-10`}>
              {/* --------------------LOGO-------------------- */}
              <Link href="/" className="flex items-center">
                {
                  navTextColor
                    ? <img src={`${scrollPosition < 30
                      ? "/Mainlogo.svg" : showNavColor
                        ? "/Mainlogo.svg" : "/MainLogo-dark.svg"} `}
                      alt="Tanthetaa-logo" className="xl:w-auto w-auto lg:w-20 cursor-pointer" />
                    : <img src={showNavColor ? "/Mainlogo.svg" : "/MainLogo-dark.svg"}
                      alt="Tanthetaa-logo" className="xl:w-auto w-auto lg:w-20 cursor-pointer" />
                }
              </Link>
              <div
                className="Menu"
                onMouseEnter={() => {
                  // navBgStyle && setShowNavColor(true);
                  setShowNavColor(true);
                }}
                onMouseLeave={() => {
                  setShowNavColor(false);
                }}
              >
                {/* --------------------1.About-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={1}
                    navTextColor={navTextColor}
                    title={"About"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  // navBgClr={navBgClr}
                  />
                  {hideShow && (
                    <ul className="dropdownMenu lg:top-[45px] xl:top-[61px] rounded-b-[50px]">
                      <div className="grid grid-cols-12 ">
                        <div className="lg:col-span-3 xl:col-span-2 BgTab">
                          <div className="pt-2">
                            {aboutMainItem?.map((item) => (
                              <div key={item.id}>
                                <DropDownMainItem
                                  item={item}
                                  ShowTab={ShowTab}
                                  TabOpen={TabOpen}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {ShowTab === 1 ? (
                          <>
                            <div className="lg:col-span-3 xl:col-span-2 py-4 subMenusList pl-12">
                              {companyData1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              <div className="flex justify-start items-center mb-2.5 my-8">
                                <img
                                  src={companyData2?.image}
                                  alt="Company"
                                  className="w-10 px-2"
                                />
                                <a
                                  href={companyData2?.href}
                                  className="px-3 subMenuTitle !font-mono"
                                  onClick={() => {
                                    sethideShow(false);
                                  }}
                                >
                                  {companyData2?.title}
                                </a>
                              </div>
                              <div className="">
                                {companyData2?.service?.map((item) => (
                                  <div className="flex justify-start py-2 items-center " key={item.id}>
                                    <a
                                      href={item?.href}
                                      className="ProductSub flex items-center px-4 lg:px-12"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.image}
                                      <span className="px-1 subMenuTitle !font-mono hover:text-[darkmagenta]  text-sm">
                                        {item?.title}
                                      </span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 2 ? (
                          <>
                            <div className="col-span-3 py-4 subMenusList pl-12">
                              {projectCosting1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              {projectCosting2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-4 py-4 subMenusList GradientBorder">
                              {projectCosting3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 3 ? (
                          <>
                            <div className="col-span-3 py-4 subMenusList pl-12">
                              {dedicatedResources1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              {dedicatedResources2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              {dedicatedResources3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 4 ? (
                          <>
                            <div className="col-span-3 py-4 subMenusList pl-12">
                              {cityWeWorkIn1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              {cityWeWorkIn2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="col-span-3 py-4 subMenusList GradientBorder">
                              {cityWeWorkIn3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </ul>
                  )}
                </span>
                {/* --------------------1.end--------------------  */}

                {/* --------------------2.Blockchain-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={5}
                    navTextColor={navTextColor}
                    title={"Blockchain"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  />
                  {hideShow && (
                    <ul className="dropdownMenu lg:top-[45px] xl:top-[61px]">
                      <div className="grid grid-cols-12">
                        <div className="col-span-2 BgTab">
                          <div className="pt-2">
                            {blockchainMainItem?.map((item) => (
                              <>
                                <DropDownMainItem
                                  item={item}
                                  ShowTab={ShowTab}
                                  TabOpen={TabOpen}
                                />
                              </>
                            ))}
                          </div>
                        </div>
                        {ShowTab === 1 ? (
                          <div className="grid col-span-10 grid-cols-3 overflow-y-scroll lg:h-[85vh] 2xl:h-[70vh]">
                            <div className="py-4 subMenusList pl-12">
                              {NFT1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {NFT2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {NFT3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 2 ? (
                          <>
                            <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                              <div className="py-4 subMenusList pl-12">
                                {marketing1?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {marketing2?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {marketing3?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 3 ? (
                          <>
                            <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                              <div className="py-4 subMenusList pl-12">
                                {metaverse1?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {metaverse2?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {metaverse3?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 4 ? (
                          <>
                            <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                              <div className="py-4 subMenusList pl-12">
                                {web3_1?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {web3_2?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {web3_3?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 5 ? (
                          <>
                            <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                              <div className="py-4 subMenusList pl-12">
                                {defi1?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {defi2?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                              <div className="py-4 subMenusList pl-12 GradientBorder">
                                {defi3?.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="flex justify-start items-center my-8"
                                  >
                                    <img
                                      src={item?.image}
                                      alt="Company"
                                      className="w-10 px-2"
                                    //className="px-2 w-10"
                                    />
                                    <a
                                      href={item?.href}
                                      className="px-3 subMenuTitle !font-mono"
                                      onClick={() => {
                                        sethideShow(false);
                                      }}
                                    >
                                      {item?.title}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 6 ? (
                          <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                            <div className="py-4 subMenusList pl-12">
                              {ico1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {sto1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {ido1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 7 ? (
                          <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                            <div className="py-4 subMenusList pl-12">
                              {crypto1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {crypto2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {crypto3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {ShowTab === 8 ? (
                          <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                            <div className="py-4 subMenusList pl-12">
                              {blockchain1?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {blockchain2?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="py-4 subMenusList pl-12 GradientBorder">
                              {blockchain3?.map((item) => (
                                <div key={item.id}>
                                  <DropDownSubRow3
                                    TabOpen={TabOpen}
                                    item={item}
                                    setShowNavColor={setShowNavColor}
                                    sethideShow={sethideShow}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </ul>
                  )}
                </span>
                {/* --------------------2.end-------------------- */}

                {/* --------------------3.Games-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={3}
                    navTextColor={navTextColor}
                    title={"Games"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  />
                  {/* {hideShow && (
                  <ul className="dropdownMenu lg:top-[45px] xl:top-[61px]">
                    <div className="grid grid-cols-12 ">
                      <div className="col-span-2 BgTab">
                        <div className="pt-2 ">
                          {gameMainItem?.map((item) => (
                            <div key={item.id}>
                              <DropDownMainItem
                                item={item}
                                ShowTab={ShowTab}
                                TabOpen={TabOpen}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {ShowTab === 1 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {gameDevelopment1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {gameDevelopment2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {gameDevelopment3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 2 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {gameArt1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {gameArt2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {gameArt3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 3 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {animation1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {animation2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {animation3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 4 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {outstaffing1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {outstaffing2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {outstaffing3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </ul>
                )} */}
                </span>
                {/* --------------------3.end-------------------- */}

                {/* --------------------4.Services-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={2}
                    navTextColor={navTextColor}
                    title={"Services"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  />

                  {/* {hideShow && (
                  <ul className="dropdownMenu lg:top-[45px] xl:top-[61px]">
                    <div className="grid grid-cols-12 ">
                      <div className="col-span-2 BgTab">
                        <div className="pt-2 ">
                          {servicesMainItem?.map((item) => (
                            <div key={item.id}>
                              <DropDownMainItem
                                item={item}
                                ShowTab={ShowTab}
                                TabOpen={TabOpen}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {ShowTab === 1 ? (
                        <>
                          <div className="col-span-5 py-4 subMenusList pl-12">
                            {discover1?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                            ))}
                          </div>
                          <div className="col-span-5 py-4 subMenusList GradientBorder">
                            {discover2?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                                <div className="flex items-center px-14 py-1.5">
                                  <a
                                    href="/"
                                    className="text-[#7B3FE4] mr-2 !text-sm"
                                  >
                                    {item?.link}
                                  </a>
                                </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 2 ? (
                        <>
                          <div className="col-span-5 py-4 subMenusList pl-12">
                            {design1?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                            ))}
                          </div>
                          <div className="col-span-5 py-4 subMenusList GradientBorder">
                            {design2?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                                <div className="flex items-center px-14 py-1.5">
                                  <a
                                    href="/"
                                    className="text-[#7B3FE4] mr-2 !text-sm"
                                  >
                                    {item?.link}
                                  </a>
                                </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 3 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {engineer1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {engineer2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-4 py-4 subMenusList GradientBorder">
                            {engineer3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 4 ? (
                        <>
                          <div className="col-span-5 py-4 subMenusList pl-12">
                            {scale1?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                            ))}
                          </div>
                          <div className="col-span-5 py-4 subMenusList GradientBorder">
                            {scale2?.map((item) => (
                                <div
                                  key={item?.id}
                                  className="flex justify-start items-center mt-8"
                                >
                                  <img
                                    src={item?.image}
                                    alt="Company"
                                    className="w-10 px-2"
                                  //className="px-2 w-10"
                                  />
                                  <a
                                    href={item?.href}
                                    className="px-3 subMenuTitle !font-mono"
                                    onClick={() => {
                                      sethideShow(false);
                                    }}
                                  >
                                    {item?.title}
                                  </a>
                                </div>
                                <div>
                                  <p className="px-14 py-1.5 sumTitlePre">
                                    {item?.description}
                                  </p>
                                </div>
                                <div className="flex items-center px-14 py-1.5">
                                  <a
                                    href="/"
                                    className="text-[#7B3FE4] mr-2 !text-sm"
                                  >
                                    {item?.link}
                                  </a>
                                </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </ul>
                )} */}
                </span>
                {/* --------------------4.end-------------------- */}

                {/* --------------------5.Technologies-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={4}
                    navTextColor={navTextColor}
                    title={"Technologies"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  />
                  {/* {hideShow && (
                  <ul className="dropdownMenu lg:top-[45px] xl:top-[61px]">
                    <div className="grid grid-cols-12 ">
                      <div className="col-span-2 BgTab">
                        <div className="pt-2 ">
                          {technologiesMainItem?.map((item) => (
                            <div key={item.id}>
                              <DropDownMainItem
                                item={item}
                                ShowTab={ShowTab}
                                TabOpen={TabOpen}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {ShowTab === 1 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {biAnalytics1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {biAnalytics2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {biAnalytics3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 2 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {cloud1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {cloud2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {cloud3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 3 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {mobile1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {mobile2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {mobile3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 4 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {frontend1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {frontend2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {frontend3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 5 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {backend1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {backend2?.map((item) => (
                              <>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {backend3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 6 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {trendingTech1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {trendingTech2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {trendingTech3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 7 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {ai1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {ai2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList GradientBorder">
                            {ai3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </ul>
                )} */}
                </span>
                {/* --------------------5.end-------------------- */}

                {/* --------------------6.Industries-------------------- */}
                <span className="dropsub">
                  <MenuItem
                    id={6}
                    navTextColor={navTextColor}
                    title={"Industries"}
                    address="/"
                    hideShow={hideShow}
                    HideShow={HideShow}
                    ArrowShow={ArrowShow}
                    Icon1={BiChevronUp}
                    Icon2={BiChevronDown}
                  />
                  {/* {hideShow && (
                  <ul className="dropdownMenu lg:top-[45px] xl:top-[61px]">
                    <div className="grid grid-cols-12">
                      <div className="col-span-2 BgTab overflow-y-scroll h-[70vh]">
                        <div className="pt-2">
                          {industriesMainItem?.map((item) => (
                            <div key={item.id}>
                              <DropDownMainItem
                                item={item}
                                ShowTab={ShowTab}
                                TabOpen={TabOpen}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {ShowTab === 1 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {education1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {education2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {education3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 2 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {bankingFinance1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {bankingFinance2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {bankingFinance3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 3 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {ecommerce1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {ecommerce2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {ecommerce3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 4 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {gaming1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {gaming2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {gaming3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 5 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {foodRestaurant1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {foodRestaurant2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {foodRestaurant3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 6 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {texiBooking1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {texiBooking2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {texiBooking3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 7 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {dating1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {dating2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {dating3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 8 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {travelTransport1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {travelTransport2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {travelTransport3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 9 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {eventsTickets1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {eventsTickets2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {eventsTickets3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 10 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {socialNetworking1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {socialNetworking2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {socialNetworking3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 11 ? (
                        <>
                          <div className="col-span-3 py-4 subMenusList pl-12">
                            {onDemand1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {onDemand2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="col-span-3 py-4 subMenusList pl-12 GradientBorder">
                            {onDemand3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {ShowTab === 12 ? (
                        <div className="grid col-span-10 grid-cols-3 overflow-y-scroll h-[70vh]">
                          <div className="py-4 subMenusList pl-12">
                            {healthcareFitness1?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {healthcareFitness2?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="py-4 subMenusList pl-12 GradientBorder">
                            {healthcareFitness3?.map((item) => (
                              <div key={item.id}>
                                <DropDownSubRow3
                                  TabOpen={TabOpen}
                                  item={item}
                                  setShowNavColor={setShowNavColor}
                                  sethideShow={sethideShow}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </ul>
                )} */}
                </span>
                {/* --------------------6.end-------------------- */}

                {/* --------------------7.Portfolio-------------------- */}
                <div className="">
                  <span>
                    <a
                      href="/portfolio?page=1"
                      className={`menuTitle flex MenuList !font-mono ${navTextColor}`}
                    >
                      Portfolio
                    </a>
                  </span>
                </div>
                {/* --------------------7.end-------------------- */}

                {/* --------------------8.Blogs-------------------- */}
                <div className="">
                  <span>
                    <a
                      href="/blogs?page=1"
                      className={`menuTitle flex MenuList !font-mono ${navTextColor}`}
                    >
                      Blogs
                    </a>
                  </span>
                </div>
                {/* --------------------8.end-------------------- */}

                {/* --------------------9.Contact-------------------- */}
                <div className="pl-0 lg:pl-5 xl:pl-10">
                  <span>
                    <Link
                      href="/contact-us-to-develop-software-for-your-business"
                      className={`btnContect rounded-md px-1.5 xl:px-4 lg:px-3 py-1 ease-in-out duration-700 font-mono xl:text-base text-sm hover:!text-[#410ead]`}
                    >
                      Contact
                    </Link>
                  </span>
                </div>
                {/* --------------------9.end-------------------- */}
              </div>
            </div>
          </div>
          {/*      ***  ---  ***  DESKTOP END  ***  ---   ***      */}

          {/* 💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫 */}

          {/* ===================MOBILE MENU================== */}
          <div className="mobileView">
            <div className="flex justify-between mx-10 py-3">
              <Link href="/" className="flex items-center">
                {navTextColor
                  ? <img src={
                    `${scrollPosition < 30 ? "/Mainlogo.svg" : "/MainLogo-dark.svg"}`
                  }
                    alt="Tanthetaa-logo" className="xl:w-auto w-auto lg:w-20 cursor-pointer" />
                  : <img src={"/MainLogo-dark.svg"}
                    alt="Tanthetaa-logo" className="xl:w-auto w-auto lg:w-20 cursor-pointer" />}
              </Link>
              <img
                className="w-8"
                src={"/assets/MobileBtn.svg"}
                alt="MobileBtn"
                onClick={() => {
                  openNav();
                }}
              />
            </div>
            <div id="mySidenav" className="sidenav">
              <div
                className="closebtn"
                onClick={() => {
                  closeNav();
                }}
              >
                &times;
              </div>
              {/* --------------------1.About-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  About
                </a>

                <div
                  className={`${isOpen === 1 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(1)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 1 && (
                <div className="px-3">
                  {aboutMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.companyData?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.projectCosting?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.dedicatedResources?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.cityWeWorkIn?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* --------------------About End-------------------- */}

              {/* --------------------2.Blockchain-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Blockchain
                </a>

                <div
                  className={`${isOpen === 2 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(2)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 2 && (
                <div className=" px-3">
                  {blockchainMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.nfts?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.marketing?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.metaverse?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.web3?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 5 && (
                        <>
                          {e.defi?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 6 && (
                        <>
                          {e.icoStoIdo?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 7 && (
                        <>
                          {e.crypto?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 8 && (
                        <>
                          {e.blockchain?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* -----------------Blockchain end----------------- */}

              {/* --------------------3.Games-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Games
                </a>

                <div
                  className={`${isOpen === 3 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(3)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 3 && (
                <div className="px-3">
                  {gamesMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.gameDevelopment?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.gameArt?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.animation?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.outstaffing?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* --------------------Game end-------------------- */}

              {/* --------------------4.Service-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Services
                </a>

                <div
                  className={`${isOpen === 4 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(4)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 4 && (
                <div className=" px-3">
                  {servicesMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.discover?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.design?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.engineer?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.scale?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* --------------------Service end-------------------- */}

              {/* --------------------5.Technologies-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Technologies
                </a>

                <div
                  className={`${isOpen === 5 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(5)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 5 && (
                <div className=" px-3">
                  {technologiesMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.biAnalytics?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.cloud?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.mobile?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.frontend?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 5 && (
                        <>
                          {e.backend?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 6 && (
                        <>
                          {e.trendingTech?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 7 && (
                        <>
                          {e.ai?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* -----------------6.Technologies end----------------- */}

              {/* --------------------Industries-------------------- */}
              <div className="flex items-center pl-2 justify-start">
                <a
                  href="/"
                  type="button"
                  id="app-btn"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Industries
                </a>

                <div
                  className={`${isOpen === 6 ? "open" : "close"} accordion-bg`}
                  onClick={() => openAccorrdion(6)}
                  id="open"
                >
                  <div className="d-flex align-items-center justify-content-between ">
                    <img
                      src={"/assets/menuarrow.svg"}
                      alt="menuarrow"
                      className="faq-arrow"
                    />
                  </div>
                </div>
              </div>
              {isOpen === 6 && (
                <div className=" px-3">
                  {industriesMainItemMobile?.map((e, ind) => (
                    <div key={e.id}>
                      <MobileDropdownMainItm
                        e={e}
                        ind={ind}
                        subDropdown={subDropdown}
                      />
                      {Service && subShow === 1 && (
                        <>
                          {e.education?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 2 && (
                        <>
                          {e.bankingFinance?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 3 && (
                        <>
                          {e.ecommerce?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 4 && (
                        <>
                          {e.gaming?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 5 && (
                        <>
                          {e.foodRestaurant?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 6 && (
                        <>
                          {e.texiBooking?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 7 && (
                        <>
                          {e.dating?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 8 && (
                        <>
                          {e.travelTransport?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 9 && (
                        <>
                          {e.eventsTickets?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 10 && (
                        <>
                          {e.socialNetworking?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 11 && (
                        <>
                          {e.onDemand?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                      {Service && subShow === 12 && (
                        <>
                          {e.healthcareFitness?.map((e, ind) => (
                            <div key={e.id}>
                              <MobileDropdownSubItm
                                e={e}
                                ind={ind}
                                closeNav={closeNav}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* -----------------7.Industries end----------------- */}

              {/* -----------------Portfolio----------------- */}
              <div className=" flex pl-2 justify-start">
                <Link
                  href="/"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Portfolio
                </Link>
              </div>
              {/* -----------------8.Portfolio end----------------- */}

              {/* -----------------9.Blog----------------- */}
              <div className=" flex  pl-2 justify-start">
                <Link
                  href="/"
                  className="dropdown-btn px-3 py-2"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Blogs
                </Link>
              </div>
              {/* -----------------Blog end----------------- */}

              {/* -----------------10.Contact----------------- */}
              <div className="flex pl-2 justify-start mt-5">
                <Link
                  href="/"
                  className="btnContact rounded-3xl text-xl px-7 py-1 ease-in-out duration-700 font-mono"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Contact
                </Link>
              </div>
              {/* -----------------Contact end----------------- */}
            </div>
          </div>
          {/*        ***  ---  ***  MOBILE END  ***  ---   ***        */}
        </div>
      }
    </>
  );
};

export default Header;
