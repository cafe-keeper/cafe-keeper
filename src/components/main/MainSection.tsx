import React, { useEffect } from "react";
import axios from "axios";
import { CoffeeBeanIcon } from "@phosphor-icons/react";
import bannerImage from "../../assets/images/banner-image-1.png";

const Main: React.FC = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
        const response = await axios.get(`${apiUrl}/`);
        console.log("Server response:", response.data);
        console.log("Connection successful! Status:", response.status);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Connection error:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
      }
    };

    testConnection();
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content">
          {/* <h2>Smart Controls. Seamless Operations.</h2> */}
          <h2>Smart Controls. Seamless Operations.</h2>
          {/* <p>Store Recipes, Manage Opening and Closing Checklists, and more.</p> */}
          <a href="#" className="cta-button">
            Find Out More
          </a>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">
          Business Solutions for Growing Companies
        </h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Recipes & Menu</h3>
            <p>
              Simplify menu and recipe management—store recipes, track
              ingredients, and share updates with your team to keep every cup
              and dish consistent and high-quality.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              {" "}
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Equipment & Maintenance</h3>
            <p>
              Manage and maintain all your equipment with ease—track purchases,
              maintenance, images, and ownership history, all in one organized
              platform.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              {" "}
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Team Messaging</h3>
            <p>
              A simple team chat for scheduling and updates—send messages,
              request shift coverage, and get notifications in real time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Shift & Staff Management</h3>
            <p>
              Manage staff details and track shift activities, notes, and
              instructions—all in one easy-to-use system.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Vendor & Supply Management</h3>
            <p>
              Track vendors, orders, and supplies all in one place to keep your
              operations running smoothly.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <CoffeeBeanIcon size={32} />
            </div>
            <h3>Barista and Roaster Training</h3>
            <p>
              Train your baristas and roasters with interactive lessons and
              quizzes, reinforcing key skills and company standards while
              tracking staff progress.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h4>+32%</h4>
            <p>Operational Efficiency</p>
          </div>
          <div className="stat-item">
            <h4>99.9%</h4>
            <p>Staff Training Completion</p>
          </div>
          <div className="stat-item">
            <h4>2+</h4>
            <p>Advanced Training Programs</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Fresh Coffee Available</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Optimize Your Operation?</h2>
        <p>
          Designed for busy cafés, this app streamlines daily operations by
          organizing shift tasks, recipe management, staff training, and
          inventory tracking, helping teams run efficiently and consistently.
        </p>
        <a href="#" className="cta-button">
          Schedule Consultation
        </a>
      </section>
    </>
  );
};

export default Main;
