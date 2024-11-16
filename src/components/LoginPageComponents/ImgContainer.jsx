const ImgContainer = ({ src, alt }) => {
  return (
    <img
      id="imgContainer"
      src={src}
      alt={alt}
      className="h-1/2 w-full rounded-t object-cover md:h-full md:w-1/2 md:rounded-br md:rounded-tl-none md:rounded-tr"
    />
  );
};

export default ImgContainer;
