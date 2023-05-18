/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./Footer.css";
import moment from "moment/moment";
import Link from "next/link";
import { cx } from "class-variance-authority";
import { TanThetaa, FooterLogo, LocationMap, Phone } from "@/public/Img/Footer";
import Image from "next/image";

import {
  aboutFooterData,
  blockchainFooterData,
  servicesFooterData,
  industriesFooterData,
  gamesFooterData,
  portfolioFooterData,
  blogsFooterData,
  technologiesFooterData,
} from "./FooterData";
import ContactMail from "./ContactMail";

import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { CiMail } from "react-icons/ci";

export const dynamic = "force-dynamic";

const Footer = () => {
  let year = new Date();
  let CurrentYear = moment(year).format("YYYY");

  const footerMainTitleStyle =
    "md:mb-5 mb-2 text-sm md:text-lg leading-3 md:leading-5 lg:leading-7 capitalize font-bold font-mono text-[#7B3FE4]";

  const footerSubTitleStyle =
    "font-medium text-xs xl:text-sm md:leading-4 xl:leading-5 capitalize font-inter";

  return (
    <section className="mx-auto bg-[#F6F3FB] px-4 md:px-24 lg:px-24 xl:px-0">
      <div className="grid place-items-center py-[30px] md:py-[50px] lg:py-[70px] px-5">
        <Image src={TanThetaa} alt="TanThetaa" />
      </div>

      <div className="container mx-auto border-b px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-8 gap-5 md:gap-4 xl:gap-7 md:pla pb-[30px] gradient-border-bottom px-3 hoverColor">
          {/* About */}
          <div className="about">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={aboutFooterData?.href}
              >
                {aboutFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {aboutFooterData?.services?.map((about) => (
                <li key={about?.id}>
                  <Link href={about?.href}>{about?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blockchain */}
          <div className="Blockchain">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={blockchainFooterData?.href}
              >
                {blockchainFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {blockchainFooterData?.services?.map((blockchain) => (
                <li key={blockchain?.id}>
                  <Link href={blockchain?.href}>{blockchain?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div className="games">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={gamesFooterData?.href}
              >
                {gamesFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {gamesFooterData?.services?.map((game) => (
                <li key={game?.id}>
                  <Link href={game?.href}>{game?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="services">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={servicesFooterData?.href}
              >
                {servicesFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {servicesFooterData?.services?.map((service) => (
                <li key={service?.id}>
                  <Link href={service?.href}>{service?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* technologies */}
          <div className="technologies">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={technologiesFooterData?.href}
              >
                {technologiesFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {technologiesFooterData?.services?.map((technologies) => (
                <li key={technologies?.id}>
                  <Link href={technologies?.href}>{technologies?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="industries">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={industriesFooterData?.href}
              >
                {industriesFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {industriesFooterData?.services?.map((industrie) => (
                <li key={industrie?.id}>
                  <Link href={industrie?.href}>{industrie?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="portfolio">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={portfolioFooterData?.href}
              >
                {portfolioFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {portfolioFooterData?.services?.map((portfolio) => (
                <li key={portfolio?.id}>
                  <Link href={portfolio?.href}>{portfolio?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs */}
          <div className="Blogs">
            <ul>
              <Link
                className={cx(footerMainTitleStyle)}
                href={blogsFooterData?.href}
              >
                {blogsFooterData?.title}
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              {blogsFooterData?.services?.map((blog) => (
                <li key={blog?.id}>
                  <Link href={blog?.href}>{blog?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* address section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5 md:gap-4 xl:gap-7 md:pb-[30px] mt-[33px] gradient-border-bottom px-3 hoverColor">
          {/* Logo with description */}
          <div className="about">
            <ul className={cx(footerMainTitleStyle)}>
              <Link href="/">
                <Image src={FooterLogo} alt="Footer Logo" />
              </Link>
            </ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li>
                {`"We help organizations streamline their efforts by providing
                customer-specific technical solutions."`}
              </li>
            </ul>
            <ul className="flex flex-wrap md:flex-nowrap mt-5">
              <a
                href="https://twitter.com/Tanthetaaa"
                target="_blank"
                className="pr-4"
              >
                <FaTwitter className="hover:!text-[#1da1f2]" />
              </a>
              <a
                href="https://www.linkedin.com/company/tan-%CE%B8?trk=ppro_cprof"
                target="_blank"
                className="pr-4"
              >
                <FaLinkedin className="hover:!text-[#1da1f2]" />
              </a>
              <a
                href="mailto:solve@tanthetaa.com"
                target="_blank"
                className="pr-4"
              >
                <CiMail className="hover:!text-[#DB4437]" />
              </a>

              <a
                href="https://wa.me/+916354953278"
                target="_blank"
                className="pr-4"
              >
                <FaWhatsapp className="hover:!text-[#4aaa4d]" />
              </a>
              <a
                href="https://instagram.com/tanthetaa_software"
                target="_blank"
                className="pr-4"
              >
                <FaInstagram className="hover:!text-[#d325a1]" />
              </a>
              <a
                href="https://facebook.com/Tan Thetaa"
                target="_blank"
                className="pr-4 "
              >
                <FaFacebook className="hover:!text-[#d325a1]" />
              </a>
            </ul>
          </div>

          {/* India Location */}
          <div className="India md:mt-0 mt-5">
            <ul className={cx(footerMainTitleStyle)}>India</ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li>
                <a
                  href="https://www.google.com/maps/place/Tan+%CE%B8+Software+Studio+%7C+Blockchain+%26+Web3+Development+Company/@21.233506,72.8636088,15z/data=!4m5!3m4!1s0x0:0xd9d97463b06424f3!8m2!3d21.233506!4d72.8636088"
                  target="_blank"
                  className="flex items-start mt-3"
                >
                  <Image src={LocationMap} alt="LocationMap" className="pr-2" />
                  <span>
                    4080, Silver business point VIP Circle Utran Surat, Gujarat
                    394105
                  </span>
                </a>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <Image src={Phone} alt="Phone" className="pr-2" />
                  <p className="my-2">+91 63549 53278</p>
                </Link>
              </li>
              <li>
                <ContactMail />
              </li>
            </ul>
          </div>
          {/* USA Location */}
          <div className="India">
            <ul className={cx(footerMainTitleStyle)}>United States</ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li className="">
                <Link href="/" className="flex items-start mt-3">
                  <Image src={LocationMap} alt="LocationMap" className="pr-2" />
                  <p className="">
                    316 8th Avenue, New York, NY 10012, United States
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <ContactMail />
              </li>
            </ul>
          </div>
          {/* Canada Location */}
          <div className="India">
            <ul className={cx(footerMainTitleStyle)}>Canada</ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li>
                <Link href="/" className="flex items-start mt-3">
                  <Image src={LocationMap} alt="mail" className="pr-2" />
                  <span>40 A, 100 Main St E, Hamilton, Ontario L8N 3W7</span>
                </Link>
              </li>
              <li>
                <ContactMail />
              </li>
            </ul>
          </div>
          {/* Portugal Location */}
          <div className="India">
            <ul className={cx(footerMainTitleStyle)}>Finland</ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li>
                <Link href="/" className="flex items-start mt-3">
                  <Image src={LocationMap} alt="LocationMap" className="pr-2" />
                  <span>Kuohukuja 1 F 149, 20540 Turku, Finland</span>
                </Link>
              </li>
              <li>
                <ContactMail />
              </li>
            </ul>
          </div>
          {/* UK Location */}
          <div className="India">
            <ul className={cx(footerMainTitleStyle)}>United Kingdom</ul>
            <ul className={cx(footerSubTitleStyle)}>
              <li>
                <Link href="/" className="flex items-star mt-3">
                  <Image src={LocationMap} alt="LocationMap" className="pr-2" />
                  <span>28 S. Green Lake Court Fleming Island, FL 32003</span>
                </Link>
              </li>

              <li>
                <ContactMail />
              </li>
            </ul>
          </div>
        </div>

        {/* copyright section */}
        <div className="flex flex-wrap justify-center md:justify-between items-center font-medium text-xs md:leading-4 xl:leading-5 ">
          <div className="flex order-2 md:order-1 my-4">
            <Link href="/" className="text-[#585858]">
              <span>{CurrentYear}</span>
              <span className="">, All Rights Reserved © </span>
              <span className="text-[#7B3FE4]">Tan θ Software Studio™ </span>
            </Link>
            <div className="font-bold ml-2 text-[#585858]">DMCA Protected</div>
          </div>
          <ul className="flex justify-end order-1 md:order-2 my-4 hoverColor">
            <Link href="/" className="text-[#585858]">
              Terms & Condition
            </Link>
            <Link href="/" className="mx-5 md:mx-7 lg:mx-[42px] text-[#585858]">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[#585858]">
              Cookie Policy
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
