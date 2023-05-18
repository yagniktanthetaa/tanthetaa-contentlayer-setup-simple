import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "./MdxComponents";

const Markdown = ({ text }) => {
  if (text !== undefined) {
    return <MDXRemote source={text} components={MDXComponents} />;
  }
};

export default Markdown;
