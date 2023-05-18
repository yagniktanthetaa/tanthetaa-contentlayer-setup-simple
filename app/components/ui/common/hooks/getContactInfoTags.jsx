export const getContactInfoTags = async () => {
	try {
		let contactInfoTags = {};

		const budgetRangeTagsReq = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/budget-range-tags?pagination[pageSize]=1000`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
				},
			}
		);
		const budgetRangeTagsRes = await budgetRangeTagsReq.json();
		contactInfoTags["budgetRange"] = budgetRangeTagsRes.data;

		const contactNumberTagsReq = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-number-tags?pagination[pageSize]=1000&populate=*`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
				},
			}
		);
		const contactNumberTagsRes = await contactNumberTagsReq.json();
		contactInfoTags["contactNumber"] = contactNumberTagsRes.data.sort((a, b) =>
			a.attributes.countryName > b.attributes.countryName ? 1 : -1
		);

		const socialTagsReq = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/social-tags?pagination[pageSize]=1000&populate=*`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}`,
				},
			}
		);
		const socialTagsRes = await socialTagsReq.json();
		contactInfoTags["social"] = socialTagsRes.data;

		return contactInfoTags;
	} catch (err) {
		console.log(err);
	}
};
