import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa6";
import logo from "../img/margy_glow.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const message = "Hello, I paid for ________ course";
    const encodedMessage = encodeURIComponent(message);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <img src={logo} alt="margy_glow" className="text-2xl font-bold text-pink-500 rounded-full" />
            </div>
            {/* Logo and Header */}
            <div className="text-center">
                <h1 className="mt-4 text-xl font-bold text-pink-600">Welcome to Margy Glow 💕</h1>
                <p className="text-pink-500">Your skin is our priority 💗</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
                <a href={`https://wa.me/+2348055431383?text=${encodedMessage}`} className="text-pink-600 text-xl">
                    <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/margy.glow?igsh=MTVuYmlieWk5cXh6ZA%3D%3D&utm_source=qr" className="text-pink-600 text-xl">
                    <FaInstagram />
                </a>
                <a href="mailto:margyglow1112@gmail.com" className="text-pink-600 text-xl">
                    <FaEnvelope />
                </a>
                <a href="https://www.tiktok.com/@lov_keeler" className="text-pink-600 text-xl">
                    <FaTiktok />
                </a>
            </div>

            {/* Links
            <div className="mt-8 w-full max-w-md">
                {[
                    { text: `Body scrub making course (BSM) - ${span}50k 🎀`, link: "/bsm-course" },
                    { text: "Black soap making course (BSM) - 70k 🛍️ 💕", link: "/bsm-course-2" },
                    { text: "Body butter making course (BBM) - 80k", link: "/bbm-course" },
                    {
                        text: "General courses + free brightening body oil recipe + free costing and marketing course - 200k",
                        link: "/gct-course",
                    },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="block bg-white text-pink-600 font-semibold text-center py-3 px-4 rounded-lg shadow-lg mb-4 hover:bg-pink-50"
                    >
                        {item.text}
                    </Link>
                ))}
            </div> */}

            {/* Links */}
            <div className="mt-8 w-full max-w-md">
                {[
                    {
                        text: "Body scrub making course (BSM)",
                        originalPrice: "70k",
                        discountedPrice: "50k",
                        link: "/bsm-course",
                    },
                    {
                        text: "Black soap making course (BSM)",
                        originalPrice: "90k",
                        discountedPrice: "70k",
                        link: "/bsm-course-2",
                    },
                    {
                        text: "Body butter making course (BBM)",
                        originalPrice: "100k",
                        discountedPrice: "80k",
                        link: "/bbm-course",
                    },
                    {
                        text: "General courses + free brightening body oil recipe + free costing and marketing course",
                        originalPrice: "250k",
                        discountedPrice: "200k",
                        link: "/gct-course",
                    },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="block bg-white text-pink-600 font-semibold text-center py-3 px-4 rounded-lg shadow-lg mb-4 hover:bg-pink-50"
                    >
                        {item.text} -{" "}
                        <span className="line-through text-gray-500">{item.originalPrice}</span>{" "}
                        <span className="text-pink-600">{item.discountedPrice}</span>
                    </Link>
                ))}
                <p className="text-center text-pink-500">Note: Early birds discount is valid till 28th of February. Registration is limited to five(5) people per course </p>
            </div>


            {/* Payment Info Button */}
            <div className="mt-8">
                <button
                    onClick={handleOpenModal}
                    className="bg-pink-600 text-white font-semibold text-center py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700"
                >
                    Payment Info
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Payment Information</h2>
                        <p>Kindly make payment only to:</p>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                            <p className="font-semibold">
                                Account Number: <span className="text-pink-600">2198211680</span>
                            </p>
                            <p className="font-semibold">
                                Bank: <span className="text-pink-600">UBA</span>
                            </p>
                            <p className="font-semibold">
                                Account Name: <span className="text-pink-600">Okeke Margareth Chinyere</span>
                            </p>
                        </div>
                        <p className="mt-4">Send a screenshot of payment to WhatsApp or Instagram by tapping the Whatsapp or Instagram icon at the top of your screen, to be added to the group.</p>
                        <p className="mt-4 font-bold">Dates:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                Single Courses: <span className="text-pink-600">26th - 31st March, 2025</span>
                            </li>
                            <li>
                                General Courses: <span className="text-pink-600">26th March - 8th April, 2025</span>
                            </li>
                        </ul>
                        <button
                            onClick={handleCloseModal}
                            className="mt-6 bg-pink-600 text-white font-semibold text-center py-2 px-4 rounded-lg hover:bg-pink-700 w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};