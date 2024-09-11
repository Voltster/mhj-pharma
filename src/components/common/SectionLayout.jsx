import { motion as m } from "framer-motion";
const SectionLayout = ({
  title,
  description,
  src,
  alt,
  className,
  display,
  subheading,
  id,
}) => {
  const formatedDescription = description
    .split("<br />")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <section
      className={`flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-16  ${className}`}
      id={id}
    >
      <m.div
        className="w-full xl:w-1/2"
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="uppercase text-2xl xl:text-4xl mb-2 font-semibold text-[#B51915] text-center ">
          {title}
        </h2>
        <p className="text-base text-center text-[#B51915]  mb-4">
          {subheading}
        </p>
        <span className="text-justify text-gray-800">
          {formatedDescription}
        </span>
      </m.div>
      <m.div
        className="xl:w-1/2 mx-auto rounded-lg mb-4 xl:mb-0"
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [-150, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto rounded-lg"
        />
      </m.div>
    </section>
  );
};

export default SectionLayout;
