import React from 'react'
import { tabletData } from "../../utils/OncologyData";

const OncoTables = () => {
    return (
        <section className="min-h-screen relative w-full mx-auto bg-pink-50">

            <div className="pt-20 pb-20 mt-10  h-screen  relative tableBg">
                <h2 className="text-4xl text-center  font-bold mb-8 text-[#E91E63] uppercase">
                    Tablets
                </h2>
                <div className="relative overflow-x-auto border  sm:rounded-lg overflow-y-scroll h-[80%] w-[53vw] mx-auto bg-transparent border-none">
                    <table className="w-full mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  h-[80%] productBg ">
                        <thead className="text-xs text-[#E91E63] uppercase bg-[#F8BBD0] ">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-full text-nowrap">
                                    S. no.
                                </th>
                                <th scope="col" className="px-6 py-3 text-nowrap">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 text-nowrap">
                                    Strengths
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {tabletData.map((e, i) => (
                                <tr className="odd:bg-white  even:bg-pink-100 border-b  border-pink-300" key={i}>
                                    <td className="px-6  text-gray-800">{i + 1}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap"
                                    >
                                        {e.productName}
                                    </th>
                                    <th
                                        scope="row"
                                        className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap"
                                    >
                                        {e.strength}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}

export default OncoTables
