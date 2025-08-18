import "../styles/Services.css";
import { MdOutlineSms } from "react-icons/md";
import websiteImage from "../assets/images/website.webp";
// import mobileApp from "../assets/images/mobile_app.webp";
// import cloudSolutions from "../assets/images/cloud_solutions.webp";
// import ai from "../assets/images/ai.webp";

const services = [
    { title: "Bulk SMS & Voice", description: "Reach thousands in seconds.", icon: <MdOutlineSms size={200} /> },
    { title: "Custom Software", description: "Tailored web & mobile apps.", icon: null },
    { title: "USSD Services", description: "Quick-access mobile solutions.", icon: null },
];

console.log("HELLO WORLD");


const Services = () => {
    return (
        <>
            <section className="services">
                <h2 className="services-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <div className="">{service.icon}</div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-text">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
