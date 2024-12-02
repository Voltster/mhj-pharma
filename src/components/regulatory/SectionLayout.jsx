import { motion as m } from "framer-motion";
const SectionLayout = ({
  title,
  description,
  src,
  alt,
  className,
  subheading,
  heading,
  id,
  customClass,
}) => {
  const formatedDescription = description
    .split("<br />")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <section id={id} className={`mt-10 w-11/12 mx-auto ${customClass}`}>
      <h2 className="text-2xl xl:text-4xl font-semibold text-[#B51915] text-center mb-12">
        {heading}
      </h2>
      <div
        className={`w-full flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-14 px-4 ${className}`}
      >
        <m.div
          className="w-full lg:w-1/2 "
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl font-semibold mx-auto text-[#B51915]  mb-2 ">
            {title}
          </h3>
          <p className="text-base text-center text-[#B51915]  mb-4">
            {subheading}
          </p>
          <span className="text-justify text-gray-800">
            {formatedDescription}
          </span>
        </m.div>
        <m.div
          className="lg:w-1/2 rounded-lg mb-4 xl:mb-0"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={src} alt={alt} loading="lazy" className=" rounded-md" />
        </m.div>
      </div>
    </section>
  );
};

export default SectionLayout;
