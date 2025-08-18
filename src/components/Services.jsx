import "../styles/Services.css";
import { MdOutlineSms } from "react-icons/md";

import bulk_sms_image from '../assets/images/bulk_sms_image.png'
import custom_software_image from '../assets/images/custom_software_image.png'
import ussd_image from '../assets/images/ussd_image.png'

const services = [
    // { title: "Bulk SMS & Voice", description: "Reach thousands in seconds.", icon: <MdOutlineSms size={200} color="blue" /> },
    { title: "Bulk SMS & Voice", description: "Reach thousands in seconds.", icon: bulk_sms_image },
    { title: "Custom Software", description: "Tailored web & mobile apps.", icon: custom_software_image },
    { title: "USSD Services", description: "Quick-access mobile solutions.", icon: ussd_image },
];

const Services = () => {
    return (
        <>
            <section className="services">
                <h2 className="services-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <div className=""><img src={service.icon} alt="" /></div>
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
