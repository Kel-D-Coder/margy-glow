import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa6'
import logo from '../img/margy_glow.jpg'

export const HomePage = () => {
    const message = "Hello, I want to pay for the ________  course";
    const encodedMessage = encodeURIComponent(message);
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <img src={logo} alt='margy_glow' className="text-2xl font-bold text-pink-500 rounded-full" />
            </div>
            {/* Logo and Header */}
            <div className="text-center">
                <h1 className="mt-4 text-xl font-bold text-pink-600">Gloss on worries gone 💕</h1>
                <p className="text-pink-500">Welcome to Margy Glow 💗</p>
            </div>
    
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
                <a href={`https://wa.me/+2348055431383?text=${encodedMessage}`} className="text-pink-600 text-xl">
                    <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/lov_keeler/" className="text-pink-600 text-xl">
                    <FaInstagram />
                </a>
                <a href="mailto:margyglow1112@gmail.com" className="text-pink-600 text-xl">
                    <FaEnvelope />
                </a>
                <a href="https://www.tiktok.com/@lov_keeler" className="text-pink-600 text-xl">
                    <FaTiktok />
                </a>
            </div>
    
            {/* Links */}
            <div className="mt-8 w-full max-w-md">
                {[
                    { text: "Body scrub making course (BSM) - 50k 🎀", link: "/bsm-course" },
                    { text: "Black soap making course (BSM) - 70k 🛍️ 💕", link: "/bsm-course-2" },
                    { text: "Body butter making course (BBM) - 80k ", link: "/bbm-course" },
                    { text: "General courses + free brightening body oil recipee + free costing and marketing course - 200k", link: "/gct-course" },
                ].map((item, index) => (
                    <a
                    key={index}
                    href={item.link}
                    className="block bg-white text-pink-600 font-semibold text-center py-3 px-4 rounded-lg shadow-lg mb-4 hover:bg-pink-50"
                    >
                    {item.text}
                    </a>
                ))}
            </div>
        </div>
    )
}