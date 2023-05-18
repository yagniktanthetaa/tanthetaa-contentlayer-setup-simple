"use client";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { toast } from "react-toastify";
import axiosInstanceAuthFormData from "@/app/apiInstances/axiosInstanceAuthFormData";
import useEncryption from "@/app/EncryptDecrypt/EncryptDecrypt";
import { ListItemIcon, Select } from "@material-ui/core";
import { MenuItem } from "@material-tailwind/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

export const dynamic = "force-dynamic";

const ContactForm = () => {
	const [budgetRangeTags, setBudgetRangeTags] = useState([]);
	const [contactNumberTags, setContactNumberTags] = useState([]);

	const { encryptData, decryptData } = useEncryption();

	const BootstrapInput = withStyles((theme) => ({
		root: {
			"label + &": {
				marginTop: theme.spacing(3),
			},
		},
		input: {},
	}))(InputBase);

	const bgFill = "bg-[#E8F0FE]";
	const box = "text-sm rounded-lg shadow-contactShadow";

	const [phone, setPhone] = useState("");
	console.log("🚀 ~ ContactForm ~ phone:", phone);
	const [isNDA, setIsNDA] = useState(false);
	const [error, setError] = useState({ status: false, type: "", message: "" });

	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		social_icon: "whatsapp",
		social_id: "",
		contact_details: "",
		budget_range: "",
		project_description: "",
	});
	// console.log("------- contactInfo", contactInfo);

	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

		if (uploadedFiles?.length >= 0) {
			setError({
				...error,
				status: false,
				type: "",
				message: "",
			});
		}
		setUploadedFiles(uploaded);
	};

	const setDefaultValue = () => {
		setContactInfo({
			name: "",
			email: "",
			social_icon: "whatsapp",
			social_id: "",
			contact_details: "",
			budget_range: "",
			project_description: "",
		});
		setPhone("");
		setIsNDA(false);
		setUploadedFiles([]);
	};

	const onChangePhone = (phone) => {
		if (phone !== "") {
			setError({
				...error,
				status: false,
				type: "",
				message: "",
			});
		}
		setPhone(phone);
	};

	const onChangeInput = (e) => {
		const value = e.target.value.replace(/^\s+|\s+$/gm, "");
		const name = e.target.name;

		if (name === "name") {
			if (value.length > 0) {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
			}
		}
		if (name === "email") {
			if (!emailRegex.test(value)) {
				setError({
					...error,
					status: true,
					type: "email",
					message: "Please enter valid email",
				});
				setContactInfo({
					...contactInfo,
					[name]: value,
				});
			} else {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
				setContactInfo({
					...contactInfo,
					[name]: value,
				});
			}
		}
		if (name === "social_icon") {
			if (value.length > 0) {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
			}
		}
		if (name === "social_id") {
			if (value.length > 0) {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
			}
		}
		if (name === "budget_range") {
			if (value.length > 0) {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
			}
		}
		if (name === "project_description") {
			if (value.length > 0) {
				setError({
					...error,
					status: false,
					type: "",
					message: "",
				});
			}
		}
		setContactInfo({
			...contactInfo,
			[name]: value,
		});
	};

	const handelSubmit = async (e) => {
		if (contactInfo?.name === "") {
			setError({
				...error,
				status: true,
				type: "name",
				message: "Please enter name",
			});
		} else if (!emailRegex.test(contactInfo?.email)) {
			setError({
				...error,
				status: true,
				type: "email",
				message: "Enter enter valid email",
			});
		} else if (contactInfo?.social_icon === "") {
			setError({
				...error,
				status: true,
				type: "social_icon",
				message: "Please select social icon",
			});
		} else if (contactInfo?.social_id === "") {
			setError({
				...error,
				status: true,
				type: "social_id",
				message: "Please enter social id",
			});
		} else if (phone === "") {
			setError({
				...error,
				status: true,
				type: "phone",
				message: "Please enter contact detail",
			});
		} else if (contactInfo?.budget_range === "") {
			setError({
				...error,
				status: true,
				type: "budget_range",
				message: "Please select budget Range",
			});
		} else if (contactInfo?.project_description === "") {
			setError({
				...error,
				status: true,
				type: "project_description",
				message: "Please enter project description",
			});
		} else if (uploadedFiles?.length === 0) {
			setError({
				...error,
				status: true,
				type: "uploadedFiles",
				message: "Please upload atleast one file",
			});
		} else {
			const formData = new FormData();
			formData.append("name", contactInfo?.name);
			formData.append("email", contactInfo?.email);
			formData.append("social_icon", contactInfo?.social_icon);
			formData.append("social_id", contactInfo?.social_id);
			formData.append("contact", phone);
			formData.append("budgetRange", contactInfo?.budget_range);
			formData.append("description", contactInfo?.project_description);
			formData.append("ndaCopy", isNDA);
			for (let i = 0; i < uploadedFiles?.length; i++) {
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
		}
	};

	useEffect(() => {
		const getBudgetRangeTags = async () => {
			try {
				const req = await fetch(
					`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/budget-range-tags?pagination[pageSize]=1000`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
							Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
						},
					}
				);
				const res = await req.json();
				setBudgetRangeTags(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		const getContactNumberTags = async () => {
			try {
				const req = await fetch(
					`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-number-tags?pagination[pageSize]=1000&populate=*`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
							Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
						},
					}
				);
				const res = await req.json();
				console.log("🚀 ~ getContactNumberTags ~ res:", res.data);
				setContactNumberTags(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		getBudgetRangeTags();
		getContactNumberTags();
	}, []);

	return (
		<div className="container px-4 mx-auto mt-16 md:px-24 lg:px-28 xl:px-48">
			<div class="py-14 lg:px-32 px-5 rounded-[38px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white border-t-[38px] border-t-[#410EAD]">
				<div class="flex flex-wrap lg:flex-nowrap justify-between items-center">
					<div className="flex flex-col w-[100%] lg:w-[50%] mx-5 mb-10">
						<input
							className={`${contactInfo?.name ? bgFill : null} ${box}  py-5 px-8`}
							type="text"
							placeholder="Name"
							name="name"
							value={contactInfo.name}
							onChange={onChangeInput}
						/>
						{error?.status && error?.type === "name" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
					<div className="flex flex-col w-[100%] lg:w-[50%] mx-5 mb-10">
						<input
							className={`${contactInfo?.email ? bgFill : null} ${box} py-5 px-8`}
							type="email"
							placeholder="Email address"
							name="email"
							value={contactInfo.email}
							onChange={onChangeInput}
						/>
						{error?.status && error?.type === "email" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
				</div>

				{/* Social ID */}
				<div class="flex flex-wrap lg:flex-nowrap justify-between items-center">
					<div className="flex flex-col w-[100%] lg:w-[50%] mx-5 mb-10">
						<div className={`flex flex-row ${box} w-full`}>
							{/* Select Social Id In Progress */}
							<input
								className={`${contactInfo?.social_id ? bgFill : null} w-full py-5 px-4 rounded-lg`}
								type="text"
								placeholder="Social ID"
								name="social_id"
								value={contactInfo?.social_id}
								onChange={onChangeInput}
							/>
						</div>

						{error?.status && error?.type === "social_icon" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}

						{error?.status && error?.type === "social_id" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
					<div className="flex flex-col w-[100%] lg:w-[50%] mx-5 mb-10">
						<div className="text-xs text-gray-400">
							<PhoneInput
								// country={"us"}
								value={phone}
								placeholder="Contact detail"
								onChange={(phone) => onChangePhone(phone)}
								className={`${phone ? bgFill : null} ${box}`}
							/>
						</div>
						{error?.status && error?.type === "phone" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
				</div>

				<div className="relative flex flex-wrap items-center justify-center lg:flex-nowrap">
					<div className="flex flex-col w-[100%] mx-5 mb-10">
						<select
							className={`${
								contactInfo?.budget_range ? bgFill : null
							} ${box} py-5 px-8 outline-none text-gray-400 pr-10 `}
							style={{
								border: 0,
								borderRight: "32px solid transparent",
							}}
							name="budget_range"
							onChange={onChangeInput}
						>
							<option value="" selected>
								Select a budget range
							</option>
							<option value="Less than $10K">Less than $10K</option>
							<option value="Between $10K to $ 50K">Between $10K to $ 50K</option>
							<option value="Between $50K to $ 100K">Between $50K to $ 100K</option>
							<option value="More than $ 100K">More than $ 100K</option>
						</select>
						{error?.status && error?.type === "budget_range" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-center lg:flex-nowrap">
					<div className="flex flex-col w-[100%] mx-5 mb-10">
						<textarea
							className={`${
								contactInfo?.project_description ? bgFill : null
							} ${box} py-5 px-8 outline-none`}
							type="text"
							rows="4"
							placeholder="Project description"
							name="project_description"
							value={contactInfo.project_description}
							onChange={onChangeInput}
						/>
						{error?.status && error?.type === "project_description" && (
							<p className="m-2 text-xs text-red-600">{error?.message}</p>
						)}
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-between mb-8 lg:flex-nowrap form-group">
					<label className="text-[#A1A6B6] text-base mx-5 mb-4 lg:mb-0">Attach file (less than 10MB)</label>
					<div className="mx-5 cursor-pointer">
						<input
							className={`${
								uploadedFiles?.length > 0 ? bgFill : null
							} upload-file text-[#A1A6B6] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] pr-2 w-[99%] md:w-[100%]`}
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
						{error?.status && error?.type === "uploadedFiles" && (
							<div className={`normal text-sm  mt-1`}>
								<span className="mx-1 mt-1 text-xs error">{error?.message}</span>
							</div>
						)}
					</div>
				</div>

				<div className="flex items-center justify-start mb-10 form-group form-check">
					<input
						className="w-5 h-5 mx-5 rounded cursor-pointer accent-green-500"
						type="checkbox"
						checked={isNDA}
						onClick={(e) => setIsNDA(!isNDA)}
					/>
					<label className="text-[#A1A6B6] text-base">Send me a copy of NDA</label>
				</div>

				<div className="flex items-center justify-center">
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
			</div>
		</div>
	);
};

export default ContactForm;
