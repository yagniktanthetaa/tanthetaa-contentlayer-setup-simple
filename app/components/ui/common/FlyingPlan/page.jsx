import React from "react";
import "./FlyingPlane.css";
import { Fan, Box, Plain } from "@/public/Img/FlyingPlane";
import Image from "next/image";

export const dynamic = "force-dynamic";

const FlyingPlane = () => {
  return (
    <>
      <div className="main hidden lg:block">
        <div className="cover_whole_plain">
          <div className="whole_plain">
            <div className="fan">
              <Image src={Fan} alt="Airplane Fan" />
            </div>
            <div className="plain">
              <Image src={Plain} alt="Airplane" />
            </div>
            <div className="box">
              <Image src={Box} alt="Airplane Box" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyingPlane;
