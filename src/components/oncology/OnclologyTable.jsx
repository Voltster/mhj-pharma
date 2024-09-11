import React from "react";
import { motion, useInView } from "framer-motion";

const CountingNumber = ({ target, duration = 2 }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const YourComponent = ({ tableData, color }) => {
  return (
    <motion.div
      className="w-full sm:w-8/12 max-xl:w-9/12 mx-auto rounded-sm shadow-md relative bg-white grid grid-cols-2 xl:flex xl:items-center xl:justify-center xl:h-40 mt-10 xl:mt-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {tableData.map((e, i) => (
        <motion.span
          key={i}
          className={`flex justify-center items-center flex-col w-[100%] xl:w-60 sm:h-28 border-gray-400 border-r border-b xl:border-b-0 p-6 sm:p-0 ${
            (i === 3 && "border-none ") ||
            (i === 2 && "border-b-0") ||
            (i === 1 && "border-r-0 md:border-r")
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <p
            className={`text-2xl sm:text-4xl font-semibold ${
              color === "red" ? "text-[#B41916]" : "text-[#e91e63]"
            }`}
          >
            <CountingNumber target={parseInt(e.number)} />+
          </p>
          <h4 className="text-[#363636] font-medium text-sm sm:text-base">
            {e.title}
          </h4>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default YourComponent;
