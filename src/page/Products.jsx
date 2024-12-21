import React from 'react'
import { Link } from 'react-router-dom'
import SectionLayout from '../components/common/SectionLayout'
import { motion as m } from "framer-motion"
import { FaCheck } from "react-icons/fa6";

const Products = () => {
    const bg = "https://img.freepik.com/premium-photo/petri-dishes-flasks-test-tubes-light-background-laboratory-banner-empty-space-advertising_722504-5662.jpg?w=826"
    return (
        <div className="min-h-screen relative w-full mx-auto pt-1 mb-20" >
            <div
                className="bg-gradient-to-r from-gray-800 via-[#941616] to-gray-800 w-full h-[40vh] mt-20  bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url("${bg}")`,
                }}
            >
                <h3 className="text-6xl text-[#941616]  font-medium">Products</h3>
                <p>Empowering Global Health Through Innovation</p>
            </div>
            <h3 className='text-3xl text-[#B51915] mb-2 font-medium text-center mt-10 w-8/12 mx-auto'>Global Reach, Local Impact</h3>
            <p className='text-x text-center   md:w-8/12 mx-auto'>With a strong presence in India and international markets, our products are trusted by healthcare professionals globally. Through custom pharmaceutical services, we develop tailored solutions to meet the specific needs of patients, healthcare providers, and partners worldwide.
            </p>
            {/* <div className=' md:w-6/12 mx-auto flex  justify-around my-8 text-xl  text-blue-700 rounded-md border  border-gray-100 p-4 bg-gray-50 '>
                <ul className='list-decimal flex flex-col gap-2 ' >
                    <li>
                        <Link to={"/products/general/injectables"}>Injectables</Link>
                    </li>
                    <li><span>Oral Solids</span>
                        <ul className='ml-6 list-disc '>
                            <li><Link to={"/products/general/oral-solids/tablets"}>tablets</Link></li>
                            <li><Link to={"/products/general/oral-solids/capsules"}>Capsules</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/products/general/oral-liquids"}>Oral Liquids</Link></li>
                    <li><Link to={"/products/general/infusions"}>Infusions</Link></li>
                    <li><Link to={"/products/general/nutraceutical"}>Nutraceutical</Link></li>
                </ul>
                <ul className='list-decimal flex flex-col gap-2'>
                    <li><Link to={"/products/oncology/injectables"}>Injectables</Link></li>
                    <li><span>Oral Solid</span>
                        <ul className='list-disc ml-6'>
                            <li><Link to={"/oncology/oral-solid/tablets"}>Tablets</Link></li>
                            <li><Link to={"/oncology/oral-solid/capsules"}>Capsules</Link></li>
                        </ul>
                    </li>
                </ul>
            </div> */}
            <div className="md:w-6/12 mx-auto my-8 text-xl text-blue-700 rounded-md border border-gray-100 p-4 bg-gray-50">
            <table className="w-full border border-gray-200 text-left">
                <thead>
                <tr>
                    <th className="border border-gray-200 px-4 py-2 bg-gray-100 text-[#0e0e0e]">Category</th>
                    <th className="border border-gray-200 px-4 py-2 bg-gray-100 text-[#0e0e0e]">Subcategory</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">General</td>
                    <td className="border border-gray-200 px-4 py-2">
                    <ul className="list-disc ml-4">
                        <li>
                        <Link to="/products/general/injectables" className='hover:underline'>Injectables</Link>
                        </li>
                        <li>
                        Oral Solids
                        <ul className="list-disc ml-4">
                            <li>
                            <Link to="/products/general/oral-solids/tablets" className='hover:underline'>Tablets</Link>
                            </li>
                            <li>
                            <Link to="/products/general/oral-solids/capsules" className='hover:underline'>Capsules</Link>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link to="/products/general/oral-liquids" className='hover:underline'>Oral Liquids</Link>
                        </li>
                        <li>
                        <Link to="/products/general/infusions" className='hover:underline'>Infusions</Link>
                        </li>
                        <li>
                        <Link to="/products/general/nutraceutical" className='hover:underline'>Nutraceutical</Link>
                        </li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-200 px-4 py-2">Oncology</td>
                    <td className="border border-gray-200 px-4 py-2">
                    <ul className="list-disc ml-4">
                        <li>
                        <Link to="/products/oncology/injectables" className='hover:underline'>Injectables</Link>
                        </li>
                        <li>
                        Oral Solid
                        <ul className="list-disc ml-4">
                            <li>
                            <Link to="/oncology/oral-solid/tablets" className='hover:underline'>Tablets</Link>
                            </li>
                            <li>
                            <Link to="/oncology/oral-solid/capsules" className='hover:underline'>Capsules</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>  
            </div>

            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-14 py-10">
                <m.div
                    className="md:w-1/2  text-justify"
                    initial={{ x: [0], opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h3 className="text-2xl md:text-3xl text-[#B51915] font-medium">
                        Our Commitment to the Future
                    </h3>
                    <p className="my-2">
                        At MHJ Pharma Concepts, we believe in pushing boundaries to shape the future of healthcare. Through:
                    </p>
                    <ul>
                        <li className="">
                            <strong>Relentless Innovation: </strong>
                            Developing solutions to address unmet medical needs.
                        </li>
                        <li className="">
                            <strong>Uncompromising Quality: </strong>
                            Adhering to the highest industry standards.
                        </li>
                        <li className="">
                            <strong>Global Accessibility: </strong>
                            Ensuring affordable, life-changing treatments reach those who need them most.
                        </li>
                        <li>Together, we are creating a healthier, more self-reliant world.
                        </li>
                    </ul>
                </m.div>
                <div className="md:w-1/2">
                    <m.img
                        src={"https://img.freepik.com/premium-photo/flat-lay-medical-composition_23-2148124774.jpg?w=826"}
                        className="w-[100%] mx-auto rounded-md"
                        loading="lazy"
                        initial={{ x: [0], opacity: 0 }}
                        whileInView={{ x: [150, 0], opacity: 1 }}
                        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                </div>
            </div>
            <h3 className='w-11/12 md:w-7/12 mx-auto text-2xl text-[#B51915] font-medium'>Explore Our Products. Trust Our Quality. Partner with Innovation.</h3>
            <p className='w-11/12 md:w-7/12 mx-auto text-center'> Join hands with MHJ Pharma Concepts and experience pharmaceutical excellence that transforms healthcare.</p>
        </div>
    )
}

export default Products