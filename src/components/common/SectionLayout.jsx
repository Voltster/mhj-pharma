import React from "react";

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
      className={`flex flex-row justify-center items-center gap-x-16 my-20  ${className}`}
    >
      {/* left */}
      <div className="w-1/2">
        <h2 className="uppercase text-4xl mb-2 font-semibold">{title}</h2>
        <p className="text-justify">{formatedDescription}</p>
      </div>
      {/* right */}
      <div className="w-1/2 rounded-lg">
        <img src={src} alt={alt} />
      </div>
    </section>
  );
};

export default SectionLayout;
