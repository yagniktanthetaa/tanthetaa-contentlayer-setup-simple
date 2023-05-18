"use client";

import React, { useState } from "react";
import { cx } from "class-variance-authority";
import Image from "next/image";
import { DownIcon } from "./DownIcon";
import { useEffect } from "react";
import Button from "@/app/components/ui/common/Button/page";

export const dynamic = "force-dynamic";

const ContactForm = ({ contactInfoTags }) => {
  // current tags
  const [currTags, setCurrTags] = useState({
    budgetRange: {
      id: 0,
      attributes: {
        budgetName: "Select a Budget Range",
      },
    },
    // contactNumber: contactInfoTags.contactNumber[0], // first
    contactNumber: contactInfoTags.contactNumber[98], // india
    social: contactInfoTags.social[0],
  });

  // current tags changer
  const changeCurrTags = async (key, value) => {
    setCurrTags({
      ...currTags,
      [key]: value,
    });
  };

  // contact info
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    projectDescription: "",
    socialInfo: {
      socialTag: contactInfoTags.social[0].id,
      socialUsername: "",
    },
    contactInfo: {
      contactNumberTag: contactInfoTags.contactNumber[0].id,
      contactNumber: "",
    },
    budgetRangeInfo: {
      budgetRangeTag: contactInfoTags.budgetRange[0].id,
    },
    mediaFiles: [],
    sendNda: true,
  });

  // contact info changer
  const changeContactInfo = async (key, value) => {
    setContactInfo({
      ...contactInfo,
      [key]: value,
    });
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    const uploaded = [...uploadedFiles];
    chosenFiles.some((file) => {
      // Check if the file already exists
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
      }
    });

    setUploadedFiles(uploaded);
  };

  const [submitStatus, setSubmitStatus] = useState("PENDING");

  const LOADER = () => {
    return (
      <div
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-gray-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loader
        </span>
      </div>
    );
  };

  const uploadFiles = async () => {
    try {
      let mediaFilesList = [];

      await Promise.allSettled(
        uploadedFiles.map(async (uploadedFile, index) => {
          // creating form data
          let formData = new FormData();
          formData.append("files", uploadedFile);

          // uploading file
          const uploadingFile = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
              },
              body: formData,
            }
          );
          const uploadingFileData = await uploadingFile.json();
          mediaFilesList.push(uploadingFileData[0].id);
        })
      );

      return mediaFilesList;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const submitContactInfo = async () => {
    try {
      let mediaFilesList = await uploadFiles();

      // submitting form
      const submittingForm = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              ...contactInfo,
              mediaFiles: mediaFilesList,
            },
          }),
        }
      );
      const submittingFormData = await submittingForm.json();

      if (submittingFormData.data === null) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // border border-gray-400 focus-within:border-regal-purple-light focus:border-regal-purple-light
  const BASE_INPUT = cx(
    "text-[#A1A6B6] bg-white placeholder:text-[#A1A6B6] font-inter font-normal rounded-lg focus:outline-none py-3 px-4 shadow-contactShadow"
  );

  useEffect(() => {
    const checkSubmitStatus = async () => {
      if (submitStatus === "ERROR") {
        setTimeout(() => {
          setSubmitStatus("PENDING");
        }, 5000);
      } else if (submitStatus === "SUCCESS") {
        setContactInfo({
          name: "",
          email: "",
          projectDescription: "",
          socialInfo: {
            socialTag: contactInfoTags.social[0].id,
            socialUsername: "",
          },
          contactInfo: {
            contactNumberTag: contactInfoTags.contactNumber[0].id,
            contactNumber: "",
          },
          budgetRangeInfo: {
            budgetRangeTag: contactInfoTags.budgetRange[0].id,
          },
          mediaFiles: [],
          sendNda: true,
        });
        setTimeout(() => {
          setSubmitStatus("PENDING");
        }, 5000);
      }
    };

    checkSubmitStatus();
  }, [submitStatus]);

  return (
    <>
      <div className="container relative px-4 mx-auto mt-16 md:px-24 lg:px-28 xl:px-48">
        <div class="py-14 lg:px-32 px-5 rounded-[38px] shadow-contactInnerShadow bg-white border-t-[38px] border-t-[#410EAD]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* NAME */}
            <input
              placeholder="Name"
              className={cx(BASE_INPUT)}
              type="text"
              id="name"
              name="name"
              value={contactInfo.name}
              onChange={(e) => changeContactInfo("name", e.target.value)}
            />
            {/* NAME */}

            {/* EMAIL */}
            <input
              placeholder="Email"
              className={cx(BASE_INPUT)}
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={(e) => changeContactInfo("email", e.target.value)}
            />
            {/* EMAIL */}

            {/* SOCIAL INFO */}
            <div className={cx(BASE_INPUT, "flex flex-row w-full")}>
              <div className="relative flex flex-col items-center w-12 cursor-pointer place-content-center group ">
                <div className="flex flex-row items-center w-full space-x-1 place-content-center">
                  <div
                    className="relative w-5 h-5"
                    key={
                      currTags.social.attributes.socialLogo.data.attributes.name
                    }
                  >
                    <Image
                      fill
                      key={
                        currTags.social.attributes.socialLogo.data.attributes
                          .name
                      }
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${currTags.social.attributes.socialLogo.data.attributes.url}`}
                      alt={
                        currTags.social.attributes.socialLogo.data.attributes
                          .alternativeText
                      }
                      className="object-cover"
                    />
                  </div>
                  <DownIcon classes="w-5 h-5 fill-black p-[0.1rem]" />
                </div>

                <div className="absolute top-0 left-0 grid grid-cols-1 pt-6 opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10">
                  <div className="grid grid-cols-1 py-1 bg-white rounded-lg shadow-lg">
                    {contactInfoTags.social.map((currSocial, i) => {
                      return (
                        <div key={i} className="w-full p-2 hover:bg-slate-300">
                          <div
                            className="relative w-5 h-5 cursor-pointer"
                            onClick={() => {
                              changeCurrTags("social", currSocial);
                              changeContactInfo("socialInfo", {
                                ...contactInfo.socialInfo,
                                socialTag: currSocial.id,
                              });
                            }}
                          >
                            <Image
                              fill
                              key={
                                currSocial.attributes.socialLogo.data.attributes
                                  .name
                              }
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${currSocial.attributes.socialLogo.data.attributes.url}`}
                              alt={
                                currSocial.attributes.socialLogo.data.attributes
                                  .alternativeText
                              }
                              className="object-cover"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <input
                placeholder="Username"
                className={cx(
                  "bg-white text-black focus:outline-none col-span-5 ml-3 w-full"
                )}
                type="text"
                id="socialUsername"
                name="socialUsername"
                value={contactInfo.socialInfo.socialUsername}
                onChange={(e) =>
                  changeContactInfo("socialInfo", {
                    ...contactInfo.socialInfo,
                    socialUsername: e.target.value,
                  })
                }
              />
            </div>
            {/* SOCIAL INFO */}

            {/* CONTACT NUMBER INFO */}
            <div className={cx(BASE_INPUT, "flex flex-row w-full")}>
              <div className="relative flex flex-col items-center w-12 cursor-pointer place-content-center group ">
                <div className="flex flex-row items-center w-full space-x-1 place-content-center">
                  <div
                    className="relative w-5 h-5"
                    key={
                      currTags.contactNumber.attributes.countryLogo.data
                        .attributes.name
                    }
                  >
                    <Image
                      fill
                      key={
                        currTags.contactNumber.attributes.countryLogo.data
                          .attributes.name
                      }
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${currTags.contactNumber.attributes.countryLogo.data.attributes.url}`}
                      alt={
                        currTags.contactNumber.attributes.countryLogo.data
                          .attributes.alternativeText
                      }
                      className="object-cover"
                    />
                  </div>
                  <DownIcon classes="w-5 h-5 fill-black p-[0.1rem]" />
                </div>

                <div className="absolute top-0 left-0 grid grid-cols-1 pt-6 opacity-0 w-96 -z-10 group-hover:opacity-100 group-hover:z-10">
                  <div className="grid grid-cols-1 py-1 overflow-y-scroll bg-white rounded-lg shadow-lg max-h-52">
                    {contactInfoTags.contactNumber.map((currContact) => {
                      return (
                        <div
                          key={
                            currContact.attributes.countryLogo.data.attributes
                              .name
                          }
                          className="flex flex-row items-center p-2 space-x-2 hover:bg-slate-300"
                          onClick={() => {
                            changeCurrTags("contactNumber", currContact);
                            changeContactInfo("contactInfo", {
                              ...contactInfo.contactInfo,
                              contactNumberTag: currContact.id,
                            });
                          }}
                        >
                          <div className="relative w-5 h-5 cursor-pointer min-w-5">
                            <Image
                              fill
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${currContact.attributes.countryLogo.data.attributes.url}`}
                              alt={
                                currContact.attributes.countryLogo.data
                                  .attributes.alternativeText
                              }
                              className="object-cover"
                            />
                          </div>

                          <div className="truncate">{`${currContact.attributes.countryName} +${currContact.attributes.countryCode}`}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <input
                placeholder="Contact Number"
                className={cx(
                  "bg-white text-black  focus:outline-none col-span-5 ml-3 w-full"
                )}
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={contactInfo.contactInfo.contactNumber}
                onChange={(e) =>
                  changeContactInfo("contactInfo", {
                    ...contactInfo.contactInfo,
                    contactNumber: e.target.value.toString(),
                  })
                }
              />
            </div>
            {/* CONTACT NUMBER INFO */}

            {/* BUDGET RANGE INFO */}
            <div
              className={cx(BASE_INPUT, "md:col-span-2 flex flex-col w-full")}
            >
              <div className="relative flex flex-col items-center cursor-pointer place-content-center group ">
                <div className="flex flex-row items-center w-full space-x-1 place-content-center">
                  <div
                    className="w-full h-5 grow"
                    key={currTags.budgetRange.attributes.budgetName}
                  >
                    {currTags.budgetRange.attributes.budgetName}
                  </div>
                  <DownIcon classes="w-5 h-5 fill-black p-[0.1rem]" />
                </div>

                <div className="absolute mt-3 top-0 left-0 grid w-full grid-cols-1 pt-6 opacity-0 -z-10 group-hover:opacity-100 group-hover:z-10">
                  <div className="grid grid-cols-1 p-2 overflow-y-scroll bg-white rounded-lg shadow-lg max-h-52">
                    {contactInfoTags.budgetRange.map((currBudget) => {
                      return (
                        <div
                          key={currBudget.attributes.budgetName}
                          className="flex flex-row items-center justify-center p-2 space-x-2 rounded-lg hover:bg-slate-300"
                          onClick={() => {
                            changeCurrTags("budgetRange", currBudget);
                            changeContactInfo("budgetRangeInfo", {
                              ...contactInfo.budgetRangeInfo,
                              budgetRangeTag: currBudget.id,
                            });
                          }}
                        >
                          <div className="relative w-full h-5 cursor-pointer">
                            {currBudget.attributes.budgetName}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* BUDGET RANGE INFO */}

            {/* PROJECT DESCRIPTION */}
            <textarea
              placeholder="Project Description"
              className={cx(BASE_INPUT, "md:col-span-2")}
              type="text"
              rows="4"
              id="projectDescription"
              name="projectDescription"
              value={contactInfo.projectDescription}
              onChange={(e) =>
                changeContactInfo("projectDescription", e.target.value)
              }
            />
            {/* PROJECT DESCRIPTION */}

            {/* UPLOAD MEDIA FILES */}
            <div className="flex flex-row items-center justify-between mb-8 md:col-span-2 lg:flex-nowrap form-group">
              <label className="text-[#A1A6B6] text-base mb-4 lg:mb-0">
                Attach file (less than 10MB)
              </label>
              <div className="cursor-pointer">
                <input
                  className={`${
                    uploadedFiles?.length > 0 ? null : null
                  } upload-file text-[#A1A6B6] rounded-lg shadow-contactShadow pr-2 w-[99%] md:w-[100%]`}
                  name="file"
                  type="file"
                  multiple
                  onChange={handleFileEvent}
                />
                {uploadedFiles?.length > 0 &&
                  uploadedFiles?.map((file, i) => (
                    <div key={i} className={`normal text-sm  mt-1`}>
                      {file.name}
                      {file?.size > 10000000 ? (
                        <span className={`error text-sm  mt-1 mx-1`}>
                          ( File size is greater than maximum limit )
                        </span>
                      ) : null}
                    </div>
                  ))}
              </div>
            </div>
            {/* UPLOAD MEDIA FILES */}

            {/* SEND NDA */}
            <div className="flex items-center justify-start mb-10 form-group form-check">
              <input
                className="w-5 h-5 mr-5 rounded cursor-pointer accent-green-500"
                type="checkbox"
                checked={contactInfo.sendNda}
                onChange={() => {
                  changeContactInfo("sendNda", !contactInfo.sendNda);
                }}
              />
              <label className="text-[#A1A6B6] text-base">
                Send me a copy of NDA
              </label>
            </div>
            {/* SEND NDA */}

            {/* SUBMIT BUTTON */}
            <div className="flex flex-col items-center w-full -mt-5 md:col-span-2 place-content-center">
              <Button
                className={cx("btn-primary-purple")}
                onClick={async () => {
                  setSubmitStatus("SUBMITTING");
                  const isSubmitted = await submitContactInfo();
                  if (isSubmitted === false) {
                    setSubmitStatus("ERROR");
                  } else {
                    setSubmitStatus("SUCCESS");
                  }
                }}
              >
                {submitStatus === "SUBMITTING" ? (
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loader
                    </span>
                  </div>
                ) : (
                  "Submit Now"
                )}
              </Button>
            </div>
            {/* SUBMIT BUTTON */}

            {submitStatus === "ERROR" ? (
              <div className="w-full text-center text-red-500 md:col-span-2">
                Please enter valid details.
              </div>
            ) : (
              <></>
            )}

            {submitStatus === "SUCCESS" ? (
              <div className="w-full text-center text-green-500 md:col-span-2">
                Your response has been submitted.
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="text-[#A1A6B6] text-sm text-center mt-10">
            Your idea is 100% protected by our Non Disclosure Agreement.
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
