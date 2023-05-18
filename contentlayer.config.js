import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `**/*.json`,
  fields: {
    data: {
      type: "json",
      content: "Guiding json index",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Guide],
});
