---
title: About
permalink: /about/
layout: single
author_profile: false
classes: wide
---

<style>
/* Reset and modern styling */
.page__content {
  width: 100% !important;
  padding: 0 !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.page {
  width: 100% !important;
  max-width: none !important;
}

.masthead__inner-wrap, .page__inner-wrap {
  max-width: 1200px !important;
  margin: 0 auto !important;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  line-height: 1.7;
}

.about-header {
  text-align: center;
  margin-bottom: 80px;
}

.about-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1a202c;
  letter-spacing: -0.02em;
}

.about-intro {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
  align-items: flex-start;
}

.profile-section {
  flex: 0 0 320px;
  text-align: center;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.social-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}

.content-section {
  flex: 1;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1a202c;
  letter-spacing: -0.01em;
}

.content-text {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 80px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 80px;
}

.skill-card {
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skill-card h3 {
  color: #1a202c;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 600;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-list li {
  padding: 6px 0;
  color: #4a5568;
  font-size: 0.95rem;
  position: relative;
  padding-left: 20px;
}

.skill-list li::before {
  content: '•';
  color: #667eea;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.education-section,
.experience-section {
  margin-bottom: 80px;
}

.timeline-item {
  background: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 25px;
  border-left: 4px solid;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.timeline-item.education-1 { border-left-color: #667eea; }
.timeline-item.education-2 { border-left-color: #48bb78; }
.timeline-item.education-3 { border-left-color: #ed8936; }

.timeline-item.experience-1 { border-left-color: #38b2ac; }
.timeline-item.experience-2 { border-left-color: #48bb78; }
.timeline-item.experience-3 { border-left-color: #ed8936; }
.timeline-item.experience-4 { border-left-color: #e53e3e; }

.item-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
}

.item-organization {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.item-description {
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

.item-details {
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.item-details li {
  padding: 4px 0;
  color: #4a5568;
  position: relative;
  padding-left: 20px;
  line-height: 1.6;
}

.item-details li::before {
  content: '→';
  color: #667eea;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.publications-section {
  margin-bottom: 80px;
}

.publication-item {
  background: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.publication-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.publication-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 10px;
  line-height: 1.4;
}

.publication-venue {
  color: #667eea;
  font-style: italic;
  margin-bottom: 15px;
  font-size: 0.95rem;
  font-weight: 500;
}

.publication-description {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1rem;
}

.publication-btn {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.publication-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}

/* Mobile responsiveness */
@media (max-width: 968px) {
  .about-intro {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  
  .profile-section {
    flex: none;
    align-self: center;
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .about-container {
    padding: 40px 15px;
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

.timeline-item,
.skill-card,
.publication-item {
  animation: fadeInUp 0.6s ease-out;
}
</style>

<div class="about-container">
    <div class="about-header">
        <h1 class="about-title">About Me</h1>
    </div>
    
    <div class="about-intro">
        <div class="profile-section">
            <img src="/assets/projects/About_resize.png" alt="Youngmin Ju" class="profile-image">
            <div class="social-buttons">
                <a href="https://github.com/youngminju-phd" target="_blank" rel="noopener noreferrer" class="social-btn">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/youngminju/" target="_blank" rel="noopener noreferrer" class="social-btn">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">Professional Background</h2>
            <p class="content-text">I'm Youngmin Ju, a seasoned Data Scientist and Economist with extensive experience in developing and optimizing data-driven solutions, focusing on experimentation and causal inference. As the founder of a research-driven organization, I've successfully led cross-functional projects, delivering business impact through data strategy and technical execution.</p>
            <p class="content-text">My expertise lies in enhancing decision-making processes, statistical analysis, and A/B testing, with demonstrated success in improving CRM performance and data processing efficiency. Throughout my career, I've worked with organizations across various industries, helping them leverage data to make informed decisions and drive business growth.</p>
            <p class="content-text">My approach combines rigorous statistical analysis with creative problem-solving, always keeping the end goal in mind: delivering insights that create value and drive positive change.</p>
        </div>
    </div>

    <section class="section">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <h3>Programming & Tools</h3>
                <ul class="skill-list">
                    <li>Python (NumPy, pandas, Scikit-Learn)</li>
                    <li>R and STATA for statistical analysis</li>
                    <li>SQL for database querying</li>
                    <li>Git for version control</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3>Machine Learning</h3>
                <ul class="skill-list">
                    <li>Classification & Regression</li>
                    <li>Deep Learning (TensorFlow, PyTorch)</li>
                    <li>Clustering & Dimensionality Reduction</li>
                    <li>Time Series Analysis</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3>Data Analysis</h3>
                <ul class="skill-list">
                    <li>Exploratory Data Analysis</li>
                    <li>Feature Engineering</li>
                    <li>Large-Scale ETL</li>
                    <li>Data Visualization (matplotlib, seaborn, plotly)</li>
                </ul>
            </div>
            <div class="skill-card">
                <h3>Causal Inference</h3>
                <ul class="skill-list">
                    <li>Experimental Design & A/B Testing</li>
                    <li>Regression Discontinuity</li>
                    <li>Difference in Differences</li>
                    <li>Instrumental Variables</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="education-section">
        <h2 class="section-title">Education</h2>
        <div class="timeline-item education-1">
            <h3 class="item-title">Ph.D. in Economics</h3>
            <p class="item-organization">University of Southern California, 2021</p>
            <p class="item-description">Dissertation: "Essays on Causal Inference (Affirmative Action in Korea - Regression Discontinuity with Multiple Assignment Variables)"</p>
        </div>
        <div class="timeline-item education-2">
            <h3 class="item-title">M.A. in Economics</h3>
            <p class="item-organization">Korea University, 2010</p>
            <p class="item-description">Honors: Brain Korea 21 scholarship</p>
        </div>
        <div class="timeline-item education-3">
            <h3 class="item-title">B.S. in Mathematical Sciences</h3>
            <p class="item-organization">Korea Advanced Institute of Science and Technology (KAIST), 2008</p>
            <p class="item-description">Honors: Mathematical Science Department scholarship | National Science and Technology scholarship</p>
        </div>
    </section>

    <section class="experience-section">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline-item experience-1">
            <h3 class="item-title">Founder / Data Scientist</h3>
            <p class="item-organization">Decode Data Inc. (Oct. 2021 - Present)</p>
            <ul class="item-details">
                <li>Founded and led a nonprofit research initiative focused on data science applications in economics and business decision-making</li>
                <li>Directed all stages of project development, from ideation to deployment, combining domain expertise with technical execution</li>
                <li>Oversaw stakeholder engagement, data strategy, and infrastructure planning, establishing a scalable foundation for future data-driven research</li>
            </ul>
        </div>
        <div class="timeline-item experience-2">
            <h3 class="item-title">Data Scientist</h3>
            <p class="item-organization">Datacrunch Global (Oct. 2022 - Mar. 2024)</p>
            <ul class="item-details">
                <li>Led the design and deployment of Business Decision Solutions (BDS) for E-commerce company by integrating order, procurement, settlement, and inventory data, which enables a 30% reduction in decision-making time</li>
                <li>Designed and implemented machine learning models for demand forecasting, optimizing procurement decisions and reducing excess inventory costs by 15-20%</li>
                <li>Led the project to automate data cleansing processes, reducing manual report generation time by 80%</li>
            </ul>
        </div>
        <div class="timeline-item experience-3">
            <h3 class="item-title">Assistant Professor (First Lieutenant)</h3>
            <p class="item-organization">Korea Army Academy at Yeongcheon (Jun. 2010 - May. 2013)</p>
            <ul class="item-details">
                <li>Led cadets in the Economics department, achieving #1 ranking for 2 consecutive years</li>
                <li>Developed robust Panel Data economic models for two government research projects</li>
            </ul>
        </div>
        <div class="timeline-item experience-4">
            <h3 class="item-title">Economics Researcher</h3>
            <p class="item-organization">Korea University – Client: Hyundai MOBIS (Oct. 2009 - Mar. 2010)</p>
            <ul class="item-details">
                <li>Applied causal inference techniques (Difference-in-Differences, Before-After) to assess the economic impact of Hyundai Mobis' alleged anti-competitive behavior</li>
                <li>Proved that penalties imposed on relayers had no statistically significant negative effect on sales, resulting in a $120 million reduction in fine</li>
            </ul>
        </div>
    </section>

    <section class="publications-section">
        <h2 class="section-title">Publications</h2>
        
        <div class="publication-item">
            <h3 class="publication-title">Control Function Approach for Partly Ordered Endogenous Treatments: Military Rank Premium in Wage</h3>
            <p class="publication-venue">Oxford Bulletin of Economics and Statistics, June 2017</p>
            <p class="publication-description">Developed a novel statistical methodology to analyze the effects of military ranks on post-service wages, addressing endogeneity in rank assignment through an innovative control function approach.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">A Study on Scale of Defense Expenditure for Security Menace: A Panel Regression Analysis Approach</h3>
            <p class="publication-venue">Journal of Korea Army Academy at Yeong-cheon, 2013</p>
            <p class="publication-description">Led a government research project to design robust economic models for estimating optimal national defense R&D expenditure and efficient management, contributing to a larger project with a total value exceeding $40,000.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">Affirmative Action in Korea - Regression Discontinuity with Multiple Assignment Variables</h3>
            <p class="publication-venue">Dissertation Research, 2021</p>
            <p class="publication-description">Developed an identification method for fuzzy regression discontinuity design with multiple assignment variables to analyze affirmative action effects in Korea. Found that while the overall policy showed no significant effect, company size-based implementation increased female employment rates by 5 percentage points.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">Store Item Demand Forecasting Project</h3>
            <p class="publication-venue">Technical Report, 2021</p>
            <p class="publication-description">Implemented a Recurrent Neural Network with Long Short-Term Memory (LSTM) using Keras/TensorFlow to predict 3-month item sales across different stores, supporting business planning and cash flow management. The LSTM model reduced error rates to 86% of traditional ARIMA forecasting methods.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">Customer Churn Prediction Project</h3>
            <p class="publication-venue">Technical Report, 2020</p>
            <p class="publication-description">Built a multi-classification model using XGBoost to identify customers likely to churn and determine the most influential features. The XGBoost model achieved an AUC of 93.3%, outperforming other algorithms including GBM (90.89%), Random Forest (87.76%), and Decision Trees (83%).</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">Online Retail Customer Segmentation Analysis</h3>
            <p class="publication-venue">Technical Report, 2020</p>
            <p class="publication-description">Segmented and cleaned business performance metrics including monthly revenue, activation rate, retention rate, and churn rate. Applied Lifetime Value (LTV) methods to improve multi-classification model accuracy from 76.5% to 84%.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">A Study on the Estimation of Optimal Defense R&D Expenditure and Efficient Management</h3>
            <p class="publication-venue">Korea Army Academy at Yeongcheon, 2012</p>
            <p class="publication-description">Conducted comprehensive research on defense R&D expenditure optimization and management efficiency, providing evidence-based recommendations for resource allocation in national defense.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">The Study on Scale of Defense Expenditure</h3>
            <p class="publication-venue">Korea Army Academy at Yeongcheon, 2011</p>
            <p class="publication-description">Analyzed defense expenditure patterns and requirements, developing models to determine appropriate funding levels based on security threats and national priorities.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
        
        <div class="publication-item">
            <h3 class="publication-title">Economic Effects of Alleged Anti-Competitive Behavior of Top Automobile Parts Company</h3>
            <p class="publication-venue">Research Report for Hyundai MOBIS, 2010</p>
            <p class="publication-description">Designed causal inference models to investigate economic effects of alleged anti-competitive behaviors on retail agencies, mediating companies, repair shops, and consumers. The research provided economic evidence that helped reduce the imposed fine from $150 million to $30 million.</p>
            <a href="#" class="publication-btn">View Publication</a>
        </div>
    </section>
</div>