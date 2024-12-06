import React from 'react'
import { instagramIcon, linkedinIcon, twitterIcon, whatsappIcon } from '../assets/icons/index'
const ContactPage = () => {
    return (
        <section id='contact'>
            <div className="p-6 bg-slate-100  text-gray-800 rounded-lg shadow-lg flex flex-col gap-y-2">
                <span className="text-2xl font-bold mb-2 text-fuchsia-600">Get in Touch</span>
                <span className="text-md text-gray-700 mb-4">
                    Do you have a new project or job for me? Or just want to have a chat, feel free to connect.
                </span>
                <div className="space-x-3 text-indigo-600">
                    <img src={instagramIcon} alt="Instagram" className="inline-block w-8 h-8 hover:text-indigo-800 transition-colors duration-300" />
                    <img src={linkedinIcon} alt="LinkedIn" className="inline-block w-8 h-8 hover:text-indigo-800 transition-colors duration-300" />
                    <img src={twitterIcon} alt="Twitter" className="inline-block w-8 h-8 hover:text-indigo-800 transition-colors duration-300" />
                    <img src={whatsappIcon} alt="WhatsApp" className="inline-block w-8 h-8 hover:text-indigo-800 transition-colors duration-300" />
                </div>
            </div>
        </section>


    )
}

export default ContactPage