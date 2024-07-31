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
      className={`flex flex-col lg:flex-row items-center text-white h-[30rem] ${className}`}
    >
      <div className="w-1/2 h-full overflow-hidden">
        <img src={image} alt={title} className="w-[100%] h-[100%]" />
      </div>
      <div
        className={`bg-[#941616] w-1/2 h-full flex justify-center items-center flex-col ${customClass}`}
      >
        <div className={`w-[80%]`}>
          <h2 className={`text-4xl font-bold mb-4 ${titleColor}`}>{title}</h2>
          <p className={`${paraColor}`}>{formattedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
