import { motion as m } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.div
      className={`w-full flex flex-col-reverse lg:flex-row items-center text-white sm:h-[30rem] ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <m.div
        className="w-full md:w-1/2 h-full overflow-hidden"
        variants={itemVariants}
      >
        <m.img
          src={image}
          alt={title}
          className={`w-[100%] h-[100%] ${
            paraColor === "invert" ? "" : "object-contain"
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </m.div>
      <m.div
        className={`bg-[#941616] p-4 md:w-1/2 h-full flex justify-center items-center flex-col ${customClass}`}
        variants={itemVariants}
      >
        <div className={`xl:w-[80%]`}>
          <m.h2
            className={`text-4xl font-semibold mb-4 ${titleColor}`}
            variants={itemVariants}
          >
            {title}
          </m.h2>
          <m.div
            className={`${
              paraColor === "invert"
                ? "text-gray-800 font-normal"
                : "text-gray-100 "
            } font-light text-justify`}
            variants={itemVariants}
          >
            {formattedDescription}
          </m.div>
        </div>
      </m.div>
    </m.div>
  );
};

export default SectionCard;
