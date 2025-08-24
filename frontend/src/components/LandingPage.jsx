import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState("visualize");

  const features = [
    {
      id: "visualize",
      title: "Interactive Family Trees",
      description:
        "Create stunning, interactive family trees with drag-and-drop functionality. Visualize complex relationships with our intuitive interface that makes genealogy accessible to everyone.",
      icon: "🌳",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "crud",
      title: "Complete Family Management",
      description:
        "Add, edit, and organize family members with ease. Update relationships, add photos, birth dates, and keep your family tree current with our comprehensive management tools.",
      icon: "✏️",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: "relationships",
      title: "Advanced Relationship Mapping",
      description:
        "Handle complex family structures including marriages, divorces, step-families, and adoptions. Our sophisticated system supports all types of modern family relationships.",
      icon: "💕",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: "grid",
      title: "Professional Grid Alignment",
      description:
        "Organize your family tree with precision using our grid lock feature. Perfect for presentations, documentation, and creating professional family history displays.",
      icon: "🔒",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      id: "collaborate",
      title: "Family Collaboration",
      description:
        "Work together with family members to build your tree. Share insights, add photos, and preserve family history collaboratively. Perfect for family reunions and genealogy projects.",
      icon: "👥",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: "secure",
      title: "Enterprise-Grade Security",
      description:
        "Your family data is protected with Google OAuth authentication and secure cloud storage. Your privacy is our priority with bank-level security standards.",
      icon: "🔐",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section - Full Width */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover Your Family Story with
              <span className="brand-highlight"> ClanCrest</span>
            </h1>
            <p className="hero-subtitle">
              The most powerful and intuitive family tree platform. Create,
              visualize, and preserve your family legacy with professional-grade
              tools that make genealogy accessible to everyone.
            </p>
            <div className="hero-actions">
              <button
                className="cta-button primary"
                onClick={() => navigate("/dashboard")}
              >
                Start Building Free
              </button>
              <button
                className="cta-button secondary"
                onClick={() =>
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Simplified */}
      <section id="demo" className="demo-section">
        <div className="container">
          <div className="demo-header">
            <h2 className="section-title">Experience the Power</h2>
            <p className="section-subtitle">
              Explore our interactive demo family trees. See how easy it is to
              manage complex family relationships and create beautiful
              visualizations.
            </p>
          </div>

          <div className="demo-tree-container">
            <div className="placeholder-demo">
              <div className="demo-tree-preview">
                <div className="tree-node">👨</div>
                <div className="tree-node">👩</div>
                <div className="tree-node">👶</div>
                <div className="tree-node">👶</div>
              </div>
              <p>Interactive family tree visualization will be displayed here</p>
            </div>
          </div>

          <div className="demo-controls">
            <div className="demo-info">
              <div className="info-item">
                <span className="info-icon">👨</span>
                <span>Male Family Members</span>
              </div>
              <div className="info-item">
                <span className="info-icon">👩</span>
                <span>Female Family Members</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💕</span>
                <span>Marriage Connections</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🔗</span>
                <span>Blood Relationships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">
            Everything You Need to Build Your Family Tree
          </h2>
          <p className="section-subtitle">
            Professional-grade tools designed for families, genealogists, and
            anyone passionate about preserving their family history
          </p>

          <div className="features-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${
                  activeFeature === feature.id ? "active" : ""
                }`}
                onClick={() => setActiveFeature(feature.id)}
                style={{ "--feature-color": feature.color }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <h2 className="section-title">Trusted by Families Worldwide</h2>
          <p className="section-subtitle">
            Join thousands of families who are discovering and preserving their
            family history
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Family Trees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Family Members Added</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Reliability</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Discover Your Family Story?</h2>
          <p className="cta-subtitle">
            Start building your family tree today. It's free to begin, and you
            can create as many family trees as you need.
          </p>
          <div className="cta-actions">
            <button
              className="cta-button primary large"
              onClick={() => navigate("/dashboard")}
            >
              Start Your Family Tree
            </button>
            <p className="cta-note">
              Free to start • No credit card required • Unlimited family trees
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>ClanCrest</h3>
              <p>
                Connecting families through technology. Preserving legacies for
                future generations.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#demo">Demo</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#api">API</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#help">Help Center</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#terms">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <li>
                    <a href="#press">Press</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 ClanCrest. All rights reserved. Made with ❤️ for
              families everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
