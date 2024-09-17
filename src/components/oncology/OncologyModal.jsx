

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import modalBg from "../../assets/modalBg1.jpg";

const OncologyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const redirectToOncology = () => {
    navigate("/oncology");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex md:flex-row flex-col items-center justify-center p-4 bg-pink-50 bg-opacity-10 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white/90 backdrop-blur-md rounded-lg shadow-xl md:w-[50%] overflow-hidden bg-cover bg-no-repeat h-[50vh] border flex items-center justify-center"
              style={{ backgroundImage: `url(${modalBg})` }}
            >
              <div className="absolute top-0 right-0 pt-4 pr-4 ">
                <button
                  onClick={closeModal}
                  className="text-pink-200 hover:text-pink-500 focus:outline-none"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-semibold text-gray-950 mb-4"
                >
                  Discover Our Oncology Solutions
                </motion.h2>
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-900 mb-6 w-[80%]"
                >
                  Explore our cutting-edge oncology treatments and research.
                  We're committed to advancing cancer care and improving patient
                  outcomes.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2"
                >
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-pink-200 text-pink-800 rounded hover:bg-pink-400 transition-colors duration-200 border border-pink-500 hover:text-white"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={redirectToOncology}
                    className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800 transition-colors duration-200"
                  >
                    Explore Oncology Division
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default OncologyModal;
