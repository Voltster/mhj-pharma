const SectionCard = ({
  image,
  title,
  description,
  className,
  customClass,
  titleColor,
  paraColor,
}) => {
  const formattedDescription = description
    .split("<br />")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <div
      className={`w-full  flex flex-col-reverse lg:flex-row items-center text-white xl:h-[30rem] ${className}`}
    >
      <div className="w-full xl:w-1/2 h-full overflow-hidden">
        <img src={image} alt={title} className="w-[100%] h-[100%]" />
      </div>
      <div
        className={`bg-[#941616] p-4 xl:w-1/2 h-full flex justify-center items-center flex-col ${customClass}`}
      >
        <div className={`xl:w-[80%]`}>
          <h2 className={`text-4xl font-semibold mb-4 ${titleColor}`}>
            {title}
          </h2>
          <p
            className={`  ${
              paraColor == "invert"
                ? "text-gray-800 font-normal"
                : "text-gray-100 "
            } font-light`}
          >
            {formattedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
