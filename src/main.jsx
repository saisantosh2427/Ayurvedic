
import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    title: "Panchakarma Therapy",
    text: "Personalized detox and rejuvenation programs guided by Ayurvedic physicians.",
  },
  {
    title: "Pain & Spine Care",
    text: "Ayurvedic treatment plans for back pain, joint stiffness, arthritis, and mobility issues.",
  },
  {
    title: "Digestive Wellness",
    text: "Lifestyle, diet, and herbal support for acidity, digestion, bloating, and gut health.",
  },
  {
    title: "Skin & Hair Care",
    text: "Natural care programs for skin health, hair fall, dandruff, and long-term wellness.",
  },
];

const process = [
  "Patient enquiry",
  "Doctor consultation",
  "Personalized treatment plan",
  "Therapy schedule",
  "Follow-up care",
];

const wireframes = [
  "Home Page",
  "Appointment Booking",
  "Doctor Consultation",
  "Treatment Services",
  "Patient Follow-up",
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">
          <div className="logo-mark">
            <Leaf size={24} />
          </div>
          <div>
            <strong>Vijaywada Ayurvedic Hospital</strong>
            <span>Traditional healing. Modern patient experience.</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">UX Flow</a>
          <a href="#wireframes">Wireframes</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="eyebrow">
            <Sparkles size={16} /> Business Portfolio + UX Case Study
          </p>
          <h1>Ayurvedic hospital website concept focused on trust, care, and easy appointment booking.</h1>
          <p>
            A modern portfolio page for Vijaywada Ayurvedic Hospital showcasing
            treatments, patient journey, appointment flow, wireframes, and a clean
            healthcare design system.
          </p>

          <div className="actions">
            <a className="primary" href="#wireframes">
              View Project <ArrowRight size={18} />
            </a>
            <a className="secondary" href="#contact">Book Consultation</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="visual-top">
            <span></span><span></span><span></span>
          </div>

          <div className="hospital-card">
            <div className="card-header">
              <div className="icon-circle">
                <HeartPulse />
              </div>
              <div>
                <strong>Patient Wellness Dashboard</strong>
                <p>Today’s appointments and therapy schedule</p>
              </div>
            </div>

            <div className="search-box">Search treatment, doctor, or therapy</div>

            <div className="therapy-grid">
              <div>Panchakarma</div>
              <div>Joint Pain</div>
              <div>Digestive Care</div>
              <div>Skin Care</div>
            </div>

            <div className="appointment">
              <strong>Next Consultation</strong>
              <span>Dr. Ananya Rao • 10:30 AM • Ayurveda Specialist</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section overview">
        <div>
          <p className="section-label">Project Overview</p>
          <h2>Designed for a healthcare business that needs credibility and simple patient access.</h2>
        </div>

        <div className="overview-grid">
          <Info title="Business" text="Ayurvedic Hospital" />
          <Info title="Platform" text="Responsive Web" />
          <Info title="Design Tool" text="Figma" />
          <Info title="Frontend" text="React.js" />
        </div>
      </section>

      <section className="section problem">
        <div className="two-col">
          <div>
            <p className="section-label">Problem Statement</p>
            <h2>Patients need clear treatment information before calling or booking an appointment.</h2>
          </div>
          <p>
            Many healthcare websites are difficult to navigate, especially for patients
            looking for treatment details, doctor availability, therapy process, and
            contact information. This design simplifies the experience by placing
            services, trust signals, appointment booking, and patient journey in one
            clear flow.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <p className="section-label">Services</p>
        <h2>Key treatment areas presented as clean service cards.</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div whileHover={{ y: -8 }} className="service-card" key={service.title}>
              <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section green" id="process">
        <div className="two-col">
          <div>
            <p className="section-label light">Patient Journey</p>
            <h2>Simple UX flow from enquiry to treatment follow-up.</h2>
          </div>

          <div className="timeline">
            {process.map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="wireframes">
        <p className="section-label">Wireframing Project</p>
        <h2>Low-fidelity screen concepts for the hospital website.</h2>

        <div className="wireframe-grid">
          {wireframes.map((screen) => (
            <motion.div whileHover={{ y: -8 }} className="wire-card" key={screen}>
              <div className="wire-header">
                <span></span><span></span><span></span>
              </div>
              <div className="wire-body">
                <div className="wire-line large"></div>
                <div className="wire-line"></div>
                <div className="wire-line short"></div>
                <div className="wire-block"></div>
                <div className="wire-row">
                  <div></div><div></div>
                </div>
              </div>
              <h3>{screen}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section ai">
        <div className="two-col">
          <div>
            <p className="section-label">AI + UX Workflow</p>
            <h2>AI-assisted research and content planning for faster design decisions.</h2>
          </div>
          <ul>
            <li><CheckCircle2 /> Generated treatment page content structure and patient FAQs.</li>
            <li><CheckCircle2 /> Compared healthcare website patterns for better navigation.</li>
            <li><CheckCircle2 /> Created alternate appointment booking flows before wireframing.</li>
            <li><CheckCircle2 /> Improved UX copy for trust, clarity, and accessibility.</li>
          </ul>
        </div>
      </section>

      <section className="section trust">
        <p className="section-label">Design System</p>
        <h2>Original branding and healthcare-friendly interface components.</h2>

        <div className="trust-grid">
          <Trust icon={<Leaf />} title="Ayurveda Identity" text="Earthy green palette, soft surfaces, and wellness-focused visuals." />
          <Trust icon={<ShieldCheck />} title="Trust Signals" text="Doctor profiles, treatment details, safety notes, and patient-friendly content." />
          <Trust icon={<CalendarDays />} title="Booking Flow" text="Clear CTA, date selection, consultation type, and confirmation state." />
          <Trust icon={<Stethoscope />} title="Clinical Clarity" text="Readable typography, service categories, FAQs, and mobile-first layout." />
        </div>
      </section>

      <footer id="contact">
        <div>
          <h2>Vijaywada Ayurvedic Hospital</h2>
          <p>Responsive website concept for services, appointment booking, and patient education.</p>
        </div>

        <div className="footer-actions">
          <a href="tel:+910000000000"><Phone size={18} /> Call Hospital</a>
          <a href="https://maps.google.com" target="_blank"><MapPin size={18} /> View Location</a>
          <a href="mailto:info@vijaywadaayurvedic.com"><MessageCircle size={18} /> Email</a>
        </div>
      </footer>
    </main>
  );
}

function Info({ title, text }) {
  return (
    <div className="info-card">
      <span>{title}</span>
      <strong>{text}</strong>
    </div>
  );
}

function Trust({ icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="trust-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
