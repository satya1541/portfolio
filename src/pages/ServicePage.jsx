import React from 'react'
import { backendServicesIcon, dataBaseServiceIcon, cloudServicesIcon } from '../assets/icons/index'
const ServicePage = () => {
    return (
        <section id='services'>
            <div className='text-black p-6 bg-slate-100 pt-16'>
                <span className="text-3xl font-bold text-fuchsia-600">Services</span>
                <div className='py-4 flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6'>
                    <div className="border-2 border-fuchsia-500 rounded-lg shadow-lg p-4 bg-gray-50 hover:bg-fuchsia-100 transition-colors duration-300 w-[60%] flex flex-col items-center">
                        <img src={backendServicesIcon} alt="" className="h-16 w-16" />
                        <span className="text-black font-semibold block mt-2">Backend Services</span>
                    </div>
                    <div className="border-2 border-fuchsia-500 rounded-lg shadow-lg p-4 bg-gray-50 hover:bg-fuchsia-100 transition-colors duration-300 w-[60%] flex flex-col items-center">
                        <img src={dataBaseServiceIcon} alt="" className="h-16 w-16" />
                        <span className="text-black font-semibold block mt-2">Database Services</span>
                    </div>
                    <div className="border-2 border-fuchsia-500 rounded-lg shadow-lg p-4 bg-gray-50 hover:bg-fuchsia-100 transition-colors duration-300 w-[60%] flex flex-col items-center">
                        <img src={cloudServicesIcon} alt="" className="h-16 w-16" />
                        <span className="text-black font-semibold block mt-2">Cloud Services</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServicePage