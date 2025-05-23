---
permalink: /about/
title: "About"
layout: default
---

<div class="about-page">
  <div class="about-header">
    <h1 class="page-title">About Me</h1>
    <p class="page-subtitle">Get to know me better</p>
  </div>

  <div class="about-content">
    <section class="intro-section">
      <p>
        Hello! I'm Youngmin Ju, a passionate data scientist and economist with expertise in 
        statistical analysis, machine learning, and economic modeling. I enjoy turning complex 
        data into actionable insights and meaningful solutions.
      </p>
    </section>

    <section class="background-section">
      <h2>Background</h2>
      <p>
        With a strong foundation in both economics and data science, I bring a unique perspective 
        to data analysis projects. My experience spans across various domains including financial 
        analysis, predictive modeling, and statistical research.
      </p>
    </section>

    <section class="skills-section">
      <h2>Skills & Expertise</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Data Science</h3>
          <ul>
            <li>Machine Learning</li>
            <li>Statistical Analysis</li>
            <li>Data Visualization</li>
            <li>Predictive Modeling</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Economics</h3>
          <ul>
            <li>Econometrics</li>
            <li>Financial Analysis</li>
            <li>Market Research</li>
            <li>Economic Modeling</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2>Let's Connect</h2>
      <p>
        I'm always interested in discussing new opportunities, collaborating on interesting 
        projects, or simply connecting with fellow data enthusiasts. Feel free to reach out!
      </p>
    </section>
  </div>
</div>

<style>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary) 0%, hsl(var(--primary) / 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  font-weight: 500;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.about-content section {
  background: var(--surface);
  padding: 40px;
  border-radius: calc(var(--radius) * 2);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.about-content section:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.about-content h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.skill-category {
  background: linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.1) 100%);
  padding: 25px;
  border-radius: var(--radius);
  border: 1px solid hsl(var(--primary) / 0.2);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px hsl(var(--primary) / 0.15);
  border-color: var(--color-primary);
}

.skill-category h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--color-primary);
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  padding: 8px 0;
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  padding-left: 20px;
}

.skill-category li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.contact-section {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, hsl(var(--primary) / 0.8) 100%);
  color: white;
  border: none;
}

.contact-section h2 {
  color: white;
}

.contact-section p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .about-page {
    padding: 30px 15px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .about-content section {
    padding: 30px 25px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .about-content section {
    padding: 25px 20px;
  }

  .about-content h2 {
    font-size: 1.5rem;
  }
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-content section {
  animation: fadeInUp 0.6s ease-out;
}

.about-content section:nth-child(2) {
  animation-delay: 0.1s;
}

.about-content section:nth-child(3) {
  animation-delay: 0.2s;
}

.about-content section:nth-child(4) {
  animation-delay: 0.3s;
}
</style>