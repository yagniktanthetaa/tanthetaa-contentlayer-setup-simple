import React from "react";

export const dynamic = "force-dynamic";

const CompanyBranding = () => {
  return (
    <>
      <div className="bg-[#E3F5FF] py-16">
        <div>
          <div className="grid px-4 lg:grid-cols-2 gap-4 place-items-center">
            <div>
              <img src="/guiltless-white.png" alt="" />
            </div>
            <div className="max-w-2xl ">
              <div className="relative ">
                <h3 className="font-semibold xl:text-[60px] opacity-10 ">
                  Company branding
                </h3>
                <span className="font-bold text-[#410EAD] font-mono text-lg xl:absolute inset-y-11">
                  Authenticity and Ownership Proof
                </span>
              </div>

              <p className="my-4 text-[#59587B] font-inter text-base leading-4">
                Adidas is a world-renowned brand. But by limiting itself to a
                website in many countries, it was not living up to its potential
                in terms of user acquisition. For a brand that is majorly driven
                by millennials, Adidas was keeping them deprived of having a
                convenient, hassle-free shopping experience on mobile.
                <br />
                <br />
                With mobile devices becoming the first point of purchase for
                users, being absent from creating a smartphone presence is
                something that businesses cannot afford. The same rule applied
                to Adidas too.
                <br />
                <br />
                It was time to expand the web-centric brand to mobile through a
                dedicated application.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3>Our Process</h3>
          <div className="flex  w-full justify-center items-center flex-wrap gap-4">
            <div className="max-w-[280px]">
              <div className="relative">
                <span className="font-semibold xl:text-[60px] opacity-10 ">
                  1
                </span>
                <h3 className="text-[#FB5A5A] font-mono font-bold absolute inset-y-12">
                  Conceptualization
                </h3>
              </div>
              <p className="my-1 text-center text-[#59587B] font-inter text-base leading-4">
                Customer data analysis Competitor analysis
              </p>
            </div>
            <div className="max-w-[280px]">
              <div className="relative">
                <span className="font-semibold xl:text-[60px] opacity-10 ">
                  1
                </span>
                <h3 className="text-[#FB5A5A] font-mono font-bold absolute inset-y-12">
                  Conceptualization
                </h3>
              </div>
              <p className="my-1 text-center text-[#59587B] font-inter text-base leading-4">
                Customer data analysis Competitor analysis
              </p>
            </div>
            <div className="max-w-[280px]">
              <div className="relative">
                <span className="font-semibold xl:text-[60px] opacity-10 ">
                  1
                </span>
                <h3 className="text-[#FB5A5A] font-mono font-bold absolute inset-y-12">
                  Conceptualization
                </h3>
              </div>
              <p className="my-1 text-center text-[#59587B] font-inter text-base leading-4">
                Customer data analysis Competitor analysis
              </p>
            </div>
            <div className="max-w-[280px]">
              <div className="relative">
                <span className="font-semibold xl:text-[60px] opacity-10 ">
                  1
                </span>
                <h3 className="text-[#FB5A5A] font-mono font-bold absolute inset-y-12">
                  Conceptualization
                </h3>
              </div>
              <p className="my-1 text-center text-[#59587B] font-inter text-base leading-4">
                Customer data analysis Competitor analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyBranding;
