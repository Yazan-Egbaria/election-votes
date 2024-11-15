const ImgContainer = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-[50%] rounded-br rounded-tr object-cover"
    />
  );
};

export default ImgContainer;
