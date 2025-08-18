import "../styles/Services.css";

const services = [
    { title: "Bulk SMS & Voice", description: "Reach thousands in seconds." },
    { title: "Custom Software", description: "Tailored web & mobile apps." },
    { title: "USSD Services", description: "Quick-access mobile solutions." },
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
