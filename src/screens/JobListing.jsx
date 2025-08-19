import React from "react";
import "../styles/JobListing.css"; // Link to styles
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-Time",
    salary: "$80k - $100k",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataForge",
    location: "New York, USA",
    type: "Contract",
    salary: "$60/hr",
    posted: "5 days ago",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "CreativeWorks",
    location: "Berlin, Germany",
    type: "Full-Time",
    salary: "$90k - $110k",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "London, UK",
    type: "Full-Time",
    salary: "$70k - $90k",
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudBridge",
    location: "Toronto, Canada",
    type: "Full-Time",
    salary: "$95k - $120k",
    posted: "1 day ago",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "AppVantage",
    location: "Remote",
    type: "Part-Time",
    salary: "$40/hr",
    posted: "6 days ago",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "InsightLab",
    location: "San Francisco, USA",
    type: "Full-Time",
    salary: "$110k - $140k",
    posted: "4 days ago",
  },
  {
    id: 8,
    title: "QA Engineer",
    company: "TestMasters",
    location: "Amsterdam, Netherlands",
    type: "Full-Time",
    salary: "$65k - $85k",
    posted: "1 week ago",
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    location: "Remote",
    type: "Full-Time",
    salary: "$100k - $125k",
    posted: "2 weeks ago",
  },
  {
    id: 10,
    title: "Systems Administrator",
    company: "NetCore Solutions",
    location: "Sydney, Australia",
    type: "Full-Time",
    salary: "$75k - $95k",
    posted: "5 days ago",
  },
  {
    id: 11,
    title: "AI Engineer",
    company: "NeuralNet",
    location: "Remote",
    type: "Full-Time",
    salary: "$120k - $150k",
    posted: "3 days ago",
  },
  {
    id: 12,
    title: "Cloud Architect",
    company: "SkyTech",
    location: "Dubai, UAE",
    type: "Contract",
    salary: "$80/hr",
    posted: "1 week ago",
  },
  {
    id: 13,
    title: "IT Support Specialist",
    company: "HelpDeskPro",
    location: "Accra, Ghana",
    type: "Full-Time",
    salary: "$35k - $50k",
    posted: "2 days ago",
  }
];

export default function JobListing() {
  return (
    <>
        <Navbar/>
        <div className="job-page">
      <section className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>
            <p className="location">📍 {job.location}</p>
            <div className="tags">
              <span>{job.type}</span>
              <span>{job.salary}</span>
            </div>
            <div className="footer">
              <span>{job.posted}</span>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
}
