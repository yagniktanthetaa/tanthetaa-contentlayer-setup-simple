/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const DropDownItem = ({
  dropDownMainItem,
  dropDownSubItem,
  ShowTab,
  setShowTab,
  sethideShow,
  companyData1,
  companyData2,
}) => {
  const TabOpen = (id) => {
    setShowTab(id);
  };

  return (
    <>
      <ul className="dropdownMenu">
        <div className="grid grid-cols-12 ">
          <div className="col-span-2 BgTab">
            <div className="pt-2">
              {dropDownMainItem?.map((item) => (
                <>
                  <div key={item?.id} className="py-4 pl-12">
                    <div
                      className={
                        ShowTab === item?.id
                          ? "btnConnect rounded-l-md font-bold text-lg px-1 md:px-5 py-2.5 ease-in-out duration-700"
                          : "tabHover  rounded-l-md font-bold text-lg px-1 md:px-5 py-2.5 ease-in-out duration-700"
                      }
                      onClick={() => {
                        TabOpen(item?.id);
                      }}
                      id="defaultOpen"
                    >
                      {item?.title}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          {ShowTab === 1 ? (
            <>
              <div className="col-span-2 py-4 subMenusList pl-12">
                {companyData1?.map((item) => (
                  <>
                    <div
                      key={item?.id}
                      className="flex justify-start items-center my-8"
                    >
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="w-10 px-2"
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
                  </>
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
                    <>
                      <div className="flex justify-start py-2 items-center ">
                        <a
                          href={item?.href}
                          className="ProductSub flex items-center px-4 lg:px-12"
                          onClick={() => {
                            sethideShow(false);
                          }}
                        >
                          {item?.image}
                          <span className="px-1 subMenuTitle hover:text-[darkmagenta] !font-inter text-sm">
                            {item?.title}
                          </span>
                        </a>
                      </div>
                    </>
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
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Proof of Concept (PoC)
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    System Audit
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Software Maintenance
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Minimum Viable Product (MVP)
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Product Discovery
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    IT Consulting
                  </a>
                </div>
              </div>
              <div className="col-span-3 py-4 subMenusList GradientBorder">
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Digital Marketing Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Consulting Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Server Support
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    DevOps
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    UX/UI design
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    QA and testing
                  </a>
                </div>
              </div>
              <div className="col-span-4 py-4 subMenusList GradientBorder">
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    R&D services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Software support and maintenance
                  </a>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {ShowTab === 3 ? (
            <>
              <div className="col-span-3 py-4 subMenusList pl-12">
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    GA3 to GA4 Migration
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Advanced GA & GTM Set-up Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    SEO Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Local SEO Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Ecommerce SEO Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    PPC Marketing
                  </a>
                </div>
              </div>
              <div className="col-span-3 py-4 subMenusList GradientBorder">
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Amazon Marketing Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Social Media Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Display Media Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Influencer Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Branding & Identity Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Mobile Marketing
                  </a>
                </div>
              </div>
              <div className="col-span-3 py-4 subMenusList GradientBorder">
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Content Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Lead Generation Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Email Marketing
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Remarketing Services
                  </a>
                </div>
                <div className="flex justify-start items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Online Reputation Management (ORM)
                  </a>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {ShowTab === 4 ? (
            <>
              <div className="col-span-2 py-4 subMenusList pl-12">
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  />
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    New York
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Paris
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Beijing
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Mexico City
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    São Paulo
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Hong Kong
                  </a>
                </div>
              </div>
              <div className="col-span-2 py-4 subMenusList GradientBorder">
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Vienna
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Dubai
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Dubai
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Toronto
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Osaka
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    London
                  </a>
                </div>
              </div>
              <div className="col-span-2 py-4 subMenusList GradientBorder">
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Guangzhou
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Lisbon
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Hangzhou
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Tokyo
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Amsterdam
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Sydney
                  </a>
                </div>
              </div>
              <div className="col-span-2 py-4 subMenusList GradientBorder">
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  />
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Dhaka
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  />
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Barcelona
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  />
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Istanbul
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Madrid
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Cape Town
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Seoul
                  </a>
                </div>
              </div>
              <div className="col-span-2 py-4 subMenusList GradientBorder">
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/scoping-session"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Chicago
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/business-analysis"
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Los Angeles
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <img
                    src={"/assets/Header/About/Our-company.svg"}
                    alt="Company"
                    className="w-10 px-2"
                  ></img>
                  <a
                    href="/product-design "
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                      sethideShow(false);
                    }}
                  >
                    Rio de Janeiro
                  </a>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </ul>
    </>
  );
};

export default DropDownItem;
