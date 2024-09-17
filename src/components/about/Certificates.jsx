import React from 'react'
import certificate1 from "../../assets/certificates1.png"
import certificate2 from "../../assets/certificates2.png"
import certificate3 from "../../assets/certificates3.png"
import certificate4 from "../../assets/certificates4.png"
import certificate5 from "../../assets/certificates5.png"
import certificate6 from "../../assets/certificates6.png"

const Certificates = () => {
    return (
        <div className='w-10/12 mx-auto  pb-20'>
            <h2 className="uppercase text-2xl md:text-4xl mb-8 font-semibold text-[#B51915] text-center ">
                Our Certificates
            </h2>
            <div className='  mx-auto w-full  gap-y-6'>
                <div className='flex justify-center items-center gap-x-6 mb-6'>
                    <img src={certificate1} alt="certificate" className='w-[30%]' />
                    <img src={certificate2} alt="certificate" className='w-[30%]' />
                    <img src={certificate3} alt="certificate" className='w-[30%]' />
                </div>
                <div className='flex justify-center items-center gap-x-6'>
                    <img src={certificate4} alt="certificate" className='w-[30%]' />
                    <img src={certificate5} alt="certificate" className='w-[30%]' />
                </div>

            </div>
        </div>
    )
}

export default Certificates
