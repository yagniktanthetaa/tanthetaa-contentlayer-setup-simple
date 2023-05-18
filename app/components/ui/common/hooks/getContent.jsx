import { allGuides } from "@/.contentlayer/generated";

export const getContent = async (slug) => {
  const content = allGuides?.find((guide) => guide?.slug === slug);
  return content;
};

export const getSimpleContent = async (slug) => {
  const content = allGuides?.find((guide) => guide?.slug === slug);
  return content;
};
