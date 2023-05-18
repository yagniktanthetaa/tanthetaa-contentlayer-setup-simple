const MDXComponents = {
  a: (props) => {
    return (
      <a
        className="relative inline-block font-semibold transition-all duration-300 ease-in-out border-b-2 border-transparent cursor-pointer text-regal-purple-light hover:border-regal-purple-light"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  p: (props) => {
    return <>{props.children}</>;
    // return <p className="" {...props} />;
  },
  em: (props) => {
    return <em className="italic" {...props} />;
  },
  strong: (props) => {
    return <strong className="font-bold" {...props} />;
  },
  del: (props) => {
    return <del className="line-through" {...props} />;
  },
};

export default MDXComponents;
