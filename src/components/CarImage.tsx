import React from "react";
import { motion } from "framer-motion";
import { Car } from "@/lib/types";

interface CarImageProps {
    car: Car;
}

const CarImage: React.FC<CarImageProps> = ({ car }) => {
    const variants = {
      initial: { x: '30%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 }
    };
  
    return (
      <div className="flex justify-center image-container w-1/2 h-[200px] md:h-[300px] md:w-[450px] mx-auto">
          <motion.img
            key={car.id}
            src={`/fleet/${car.image}`}
            alt={car.name}
            className='w-full h-50 md:h-auto relative md:top-28 md:right-24'
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
      </div>
    );
  };
  

  export default CarImage