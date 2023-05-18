"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io";
import useEncryption from "@/app/EncryptDecrypt/EncryptDecrypt";
import axiosInstanceAuthFormData from "@/app/apiInstances/axiosInstanceAuthFormData";
const Popop = ({ openPopup }) => {
  const { encryptData, decryptData } = useEncryption();
  const bgFill = "bg-[#E8F0FE]";
  const box =
    "text-sm rounded-lg shadow-[0_4px_4px_rgba(65,14,173,0.25)] mb-10";
  const [openSuccess, setOpenSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [isNDA, setIsNDA] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    skype_id: "",
    contact_details: "",
    project_description: "",
  });

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

  const setDefaultValue = () => {
    setContactInfo({
      name: "",
      email: "",
      skype_id: "",
      contact_details: "",
      project_description: "",
    });
    setPhone("");
    setBudgetRange("");
    setIsNDA(false);
    setUploadedFiles([]);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", contactInfo.name);
    formData.append("email", contactInfo.email);
    formData.append("skypeId", contactInfo.skype_id);
    formData.append("contact", phone);
    formData.append("budgetRange", budgetRange);
    formData.append("description", contactInfo.project_description);
    formData.append("ndaCopy", isNDA);
    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append("file", uploadedFiles[i]);
    }

    await axiosInstanceAuthFormData
      .post("contactUs", formData)
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        if (myData?.status) {
          toast.success(myData?.message);
          setDefaultValue();
        } else {
          toast.error(myData?.message);
        }
      })
      .catch((err) => {
        console.log("err--->", err);
      });
    setOpenSuccess(true);
  };

  return (
    <>
      {!openSuccess && (
        <div
          className="z-[999] fixed"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="container mx-auto mt-16 px-4 md:px-24 lg:px-28 xl:px-36">
                <div class="py-14 lg:px-32 px-5 rounded-[38px] shadow-[0_4px_4px_rgba(65,14,173,0.25)] bg-white  relative">
                  <div className="text-xl lg:text-2xl xl:text-3xl pb-14">
                    <span className="font-bold text-[#410EAD] ">
                      Consult our Tech Advisors
                    </span>
                  </div>
                  <div class="flex flex-wrap lg:flex-nowrap justify-between items-center">
                    <input
                      className={`${
                        contactInfo.name ? bgFill : null
                      } ${box} py-5 px-8 w-[100%] lg:w-[50%] mx-5`}
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={contactInfo.name}
                      onChange={onChangeInput}
                    />
                    <input
                      className={`${
                        contactInfo.email ? bgFill : null
                      } ${box} py-5 px-8 w-[100%] lg:w-[50%] mx-5`}
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={contactInfo.email}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div class="flex flex-wrap lg:flex-nowrap justify-between items-center ">
                    <input
                      className={`${
                        contactInfo.skype_id ? bgFill : null
                      } ${box} py-5 px-8 w-[100%] lg:w-[50%] mx-5`}
                      type="text"
                      placeholder="Social ID"
                      name="skype_id"
                      value={contactInfo.skype_id}
                      onChange={onChangeInput}
                    />
                    <div className="w-[100%] lg:w-[50%] mx-5 text-gray-400 text-xs">
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        placeholder="Contact detail"
                        onChange={(phone) => setPhone(phone)}
                        className={`${phone ? bgFill : null} ${box}`}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-wrap lg:flex-nowrap justify-center items-center">
                    <select
                      className={`${
                        budgetRange ? bgFill : null
                      } ${box} py-5 px-8 w-[100%] mx-5 outline-none text-gray-400 pr-10 `}
                      style={{
                        border: 0,
                        borderRight: "32px solid transparent",
                      }}
                      onChange={(e) => {
                        setBudgetRange(e.target.value);
                      }}
                    >
                      <option value="" selected>
                        Select a budget range
                      </option>
                      <option value="Less than $10K">Less than $10K</option>
                      <option value="Between $10K to $ 50K">
                        Between $10K to $ 50K
                      </option>
                      <option value="Between $50K to $ 100K">
                        Between $50K to $ 100K
                      </option>
                      <option value="More than $ 100K">More than $ 100K</option>
                    </select>
                  </div>

                  <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                    <textarea
                      className={`${
                        contactInfo.project_description ? bgFill : null
                      } ${box} py-5 px-8 w-[100%] mx-5 outline-none`}
                      type="text"
                      rows="4"
                      placeholder="Project description"
                      name="project_description"
                      value={contactInfo.project_description}
                      onChange={onChangeInput}
                    />
                  </div>

                  <div className="flex flex-wrap lg:flex-nowrap justify-between items-center form-group mb-8">
                    <label className="text-[#A1A6B6] text-base mx-5 mb-4 lg:mb-0">
                      Attach file (less than 10MB)
                    </label>
                    <div className="cursor-pointer mx-5">
                      <input
                        className={`${
                          uploadedFiles.length > 0 ? bgFill : null
                        } upload-file text-[#A1A6B6] rounded-lg shadow-[0_4px_4px_rgba(65,14,173,0.25)] pr-2 w-[99%] md:w-[100%]`}
                        name="file"
                        type="file"
                        multiple
                        onChange={handleFileEvent}
                      />
                      {uploadedFiles.map((file, i) => (
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

                  <div className="flex justify-start items-center form-group form-check mb-10">
                    <input
                      className="h-5 w-5 accent-green-500 rounded mx-5 cursor-pointer"
                      type="checkbox"
                      checked={isNDA}
                      onClick={(e) => setIsNDA(!isNDA)}
                    />
                    <label className="text-[#A1A6B6] text-base">
                      Send me a copy of NDA
                    </label>
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      className="py-3 px-8 rounded-lg bg-[#410EAD] hover:bg-[#360b92] text-white font-medium"
                      onClick={(e) => {
                        handelSubmit();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text-[#A1A6B6] text-sm text-center mt-10">
                    Your idea is 100% protected by our Non Disclosure Agreement.
                  </div>
                  <i
                    className="fa-solid fa-xmark fa-2x cursor-pointer absolute top-5 right-7 hover:text-[#410EAD]"
                    onClick={() => {
                      openPopup();
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popop;
