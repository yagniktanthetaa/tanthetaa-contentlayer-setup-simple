import React from "react";
import { getContent } from "@/app/components/ui/common/hooks";
import { notFound } from "next/navigation";
import {
  NFTClients,
  NFTHead,
  NFTOffers,
  NFTPartners,
} from "@/app/components/ui/NFTs";
import EducationalLearning from "@/app/components/ui/common/EducationalLearning";
import ColorFullTitle from "@/app/components/ui/common/ColorFullTitle";
import DevelopmentCard from "@/app/components/ui/common/DevelopmentCard";
import ServicesBaseItem from "@/app/components/ui/common/ServicesBaseItem";
import DevelopmentFractures from "@/app/components/ui/common/DevelopmentFractures";
import SpotlightedImage from "@/app/components/ui/common/SpotlightedImage";
import DevelopmentItem from "@/app/components/ui/common/DevelopmentItem";
import FactoryServices from "@/app/components/ui/common/FactoryServices";
import PowerBiServices from "@/app/components/ui/common/PowerBiServices";
import Faqs from "@/app/components/ui/common/Faqs";
import ProjectsPartnership from "@/app/components/ui/common/ProjectsPartnership";
import PreviousOrNext from "@/app/components/ui/common/PreviousOrNext";
import { Blogs } from "@/app/components/ui/common/Blogs";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }) => {
  const content = await getContent(`nfts/${params.nft}`);
  return {
    ...content.data.metadata,
  };
};

const NFTs = async ({ params }) => {
  const content = await getContent(`nfts/${params.nft}`);
  const NFTsContent = content?.data;
  if (!content) return notFound();
  return (
    <>
      {/* 1st Component Start */}
      <NFTHead
        path={`nfts/nft-development-services`}
        content={NFTsContent?.header}
      />
      {/* 1st Component End */}

      {/* 2nd Component Start */}
      <div className="relative pointer-events-none">
        <div className="bg-shade-left" />
      </div>
      <ColorFullTitle content={NFTsContent?.section1} />
      {/* 2nd Component End */}

      {/* 3rd Component Start */}
      <ColorFullTitle content={NFTsContent?.section2} />
      <DevelopmentCard
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section2?.services}
      />
      <div className="relative pointer-events-none">
        <div className="bg-shade-right" />
      </div>
      {/* 3rd Component End */}

      {/* 4th Component Start */}
      <ColorFullTitle content={NFTsContent?.section3} />
      <ServicesBaseItem
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section3?.services}
      />
      <div className="relative pointer-events-none">
        <div className="bg-shade-center" />
      </div>
      {/* 4th Component End */}

      {/* 5th Component Start */}
      <NFTOffers content={NFTsContent?.section4} />
      {/* 5th Component End */}

      {/* 6th Component Start */}
      <ColorFullTitle content={NFTsContent?.section5} />
      <div className="relative pointer-events-none">
        <div className="bg-shade-center" />
      </div>
      <DevelopmentFractures
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section5}
      />
      {/* 6th Component End */}

      {/* 7th Component Start */}
      <div className="relative pointer-events-none">
        <div className="bg-shade-left" />
      </div>
      <ColorFullTitle content={NFTsContent?.section6} />
      <PowerBiServices
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section6?.services}
      />
      {/* 7th Component End */}

      {/* 8th Component Start */}
      <ColorFullTitle content={NFTsContent?.section7} />
      <NFTPartners
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section7?.services}
      />
      <div className="relative pointer-events-none">
        <div className="bg-shade-right" />
      </div>
      {/* 8th Component End */}

      {/* 9th Component Start */}
      <NFTClients
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section8}
      />
      {/* 9th Component End */}

      {/* 10th Component Start */}
      <ColorFullTitle content={NFTsContent?.section9} />
      <SpotlightedImage
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section9?.services}
      />
      {/* 10th Component End */}

      {/* 11th Component Start */}
      <ColorFullTitle content={NFTsContent?.section10} />
      <DevelopmentItem content={NFTsContent?.section10?.services} />
      <div className="relative pointer-events-none">
        <div className="bg-shade-center" />
      </div>
      {/* 11th Component End */}

      {/* 12th Component Start */}
      <ColorFullTitle content={NFTsContent?.section11} />
      <div className="relative pointer-events-none">
        <div className="bg-shade-left" />
      </div>
      <EducationalLearning
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section11?.services}
      />
      {/* 12th Component End */}

      {/* 13th Component Start */}
      <FactoryServices
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section12}
      />
      {/* 13th Component End */}

      {/* 14th Component Start */}
      <ColorFullTitle content={NFTsContent?.section13} />
      <Faqs content={NFTsContent?.section13?.services} />
      <div className="relative pointer-events-none">
        <div className="bg-shade-right" />
      </div>
      {/* 14th Component End */}

      {/* 15th Component Start */}
      <ColorFullTitle content={NFTsContent?.section14} />
      <Blogs
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section14?.services}
      />
      {/* 15th Component End */}

      {/* 16th Component Start */}
      <PreviousOrNext
        path={`nfts/nft-development-services`}
        content={NFTsContent?.section15?.services}
      />
      {/* 16th Component End */}

      {/* 17th Component Start */}
      <ProjectsPartnership />
      {/* 17th Component End */}
    </>
  );
};

export default NFTs;
