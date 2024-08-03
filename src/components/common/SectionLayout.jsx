const SectionLayout = ({
  title,
  description,
  src,
  alt,
  className,
  display,
}) => {
  const formatedDescription = description
    .split("<br />")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <section
      className={`flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-16 my-20  ${className}`}
    >
      {/* left */}
      <div className="w-full xl:w-1/2">
        <h2 className="uppercase text-xl xl:text-4xl mb-2 font-semibold text-gray-900">{title}</h2>
        <p className="text-justify text-gray-800">{formatedDescription}</p>
      </div>
      {/* right */}
      <div className="xl:w-1/2 rounded-lg mb-4 xl:mb-0">
        <img src={src} alt={alt}  />
      </div>
    </section>
  );
};

export default SectionLayout;
