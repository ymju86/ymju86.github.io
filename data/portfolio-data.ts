export const portfolioProjects = [
  {
    id: 1,
    title: "Business Decision Solutions for E-commerce",
    slug: "business-decision-solutions",
    description:
      "Integrated data platform for e-commerce decision-making, reducing decision time by 30% through advanced analytics.",
    fullDescription:
      "Designed and deployed a comprehensive Business Decision Solutions (BDS) platform for a major e-commerce company. The solution integrated multiple data sources including order data, procurement information, settlement records, and inventory management systems into a unified analytics platform.",
    methodology:
      "Led a cross-functional team to develop an end-to-end data pipeline that collected, processed, and analyzed data from disparate sources. Implemented ETL processes to standardize data formats and ensure data quality. Designed interactive dashboards and reporting tools that provided real-time insights to decision-makers across the organization.",
    results:
      "The implementation of the BDS platform resulted in a 30% reduction in decision-making time across procurement, inventory management, and marketing departments. The solution enabled data-driven decision making at scale, improving operational efficiency and reducing costs.",
    conclusion:
      "This project demonstrated the power of integrated data systems in transforming business operations. By providing a single source of truth for business data, the organization was able to make faster, more informed decisions that directly impacted the bottom line.",
    image: "/images/ds6.png",
    tags: ["Data Integration", "Business Intelligence", "ETL", "Dashboard Development", "Python", "SQL"],
    category: "Data Engineering",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/ds3.png",
        caption: "Integrated Data Dashboard",
      },
      {
        image: "/images/ds1.png",
        caption: "Decision Time Reduction Analysis",
      },
    ],
  },
  {
    id: 2,
    title: "Demand Forecasting for Inventory Optimization",
    slug: "demand-forecasting",
    description: "Machine learning models for accurate demand prediction, reducing excess inventory costs by 15-20%.",
    fullDescription:
      "Developed and implemented advanced machine learning models to forecast product demand for an e-commerce platform. The forecasting system was designed to optimize procurement decisions and inventory management, significantly reducing costs associated with excess inventory while maintaining appropriate stock levels.",
    methodology:
      "Utilized historical sales data, seasonal patterns, promotional events, and external factors to build predictive models. Implemented a combination of time series analysis techniques (ARIMA, SARIMA) and machine learning approaches (XGBoost, LSTM networks) to capture both linear and non-linear patterns in the data. Created an ensemble model that combined the strengths of multiple approaches for optimal prediction accuracy.",
    results:
      "The forecasting models achieved a 25% improvement in prediction accuracy compared to previous methods. This enhanced accuracy translated directly to business value, reducing excess inventory costs by 15-20% while maintaining service levels and customer satisfaction.",
    conclusion:
      "The project demonstrated the significant business impact of advanced forecasting techniques in inventory management. By accurately predicting future demand, the company was able to optimize its procurement strategy, reducing costs while ensuring product availability.",
    image: "/images/ds1.png",
    tags: ["Machine Learning", "Time Series Analysis", "Forecasting", "Python", "TensorFlow", "Inventory Optimization"],
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/ds2.png",
        caption: "Forecast vs Actual Demand",
      },
      {
        image: "/images/stat1.jpeg",
        caption: "Inventory Cost Reduction Analysis",
      },
    ],
  },
  {
    id: 3,
    title: "Automated Data Cleansing Pipeline",
    slug: "data-cleansing-automation",
    description: "Automated data processing system that reduced manual report generation time by 80%.",
    fullDescription:
      "Designed and implemented an automated data cleansing and processing pipeline to replace manual data preparation processes. The system was built to handle large volumes of structured and semi-structured data from multiple sources, applying consistent cleaning rules and transformations to prepare data for analysis and reporting.",
    methodology:
      "Developed a robust ETL pipeline using Python and SQL that could identify and handle common data quality issues including missing values, outliers, duplicates, and inconsistent formats. Implemented data validation checks at each stage of the pipeline to ensure data integrity. Created a scheduling system to automate the execution of the pipeline on a regular basis.",
    results:
      "The automated pipeline reduced manual report generation time by 80%, freeing up significant analyst resources for higher-value tasks. The system also improved data quality and consistency by applying standardized cleansing rules across all datasets.",
    conclusion:
      "This project highlighted the importance of automation in data processing workflows. By eliminating manual data preparation steps, the organization was able to significantly improve efficiency while also enhancing data quality and consistency.",
    image: "/images/ds4.png",
    tags: ["Data Engineering", "ETL", "Automation", "Python", "SQL", "Data Quality"],
    category: "Data Engineering",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/ds2.png",
        caption: "Data Pipeline Architecture",
      },
      {
        image: "/images/ds3.png",
        caption: "Time Savings Analysis",
      },
    ],
  },
  {
    id: 4,
    title: "Causal Impact Analysis of Anti-Competitive Behavior",
    slug: "causal-impact-analysis",
    description: "Econometric analysis that saved $120 million in fines through rigorous causal inference.",
    fullDescription:
      "Conducted a comprehensive causal impact analysis to assess the economic effects of alleged anti-competitive behavior by a major automotive parts supplier. The analysis was used in a legal context to evaluate whether penalties imposed on relayers had a statistically significant negative effect on sales.",
    methodology:
      "Applied advanced causal inference techniques including Difference-in-Differences (DiD) and Before-After analysis to isolate the causal impact of the penalties. Controlled for confounding factors and conducted extensive robustness checks to ensure the validity of the findings. Implemented statistical tests to evaluate the significance of the observed effects.",
    results:
      "The analysis conclusively demonstrated that the penalties imposed on relayers had no statistically significant negative effect on sales. These findings were instrumental in reducing the fine imposed on the company by $120 million.",
    conclusion:
      "This project demonstrated the power of rigorous causal inference in legal and regulatory contexts. By applying advanced econometric techniques, we were able to distinguish correlation from causation and provide evidence that significantly impacted the legal outcome.",
    image: "/images/ds2.png",
    tags: ["Causal Inference", "Econometrics", "Difference-in-Differences", "Statistical Analysis", "R", "STATA"],
    category: "Causal Inference",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/stat1.jpeg",
        caption: "Difference-in-Differences Analysis",
      },
      {
        image: "/images/ds1.png",
        caption: "Statistical Significance Testing",
      },
    ],
  },
  {
    id: 5,
    title: "Military Rank Premium Analysis",
    slug: "military-rank-premium",
    description:
      "Statistical methodology to analyze the effects of military ranks on wages, published in Oxford Bulletin of Economics and Statistics.",
    fullDescription:
      "Developed a novel statistical methodology to analyze the effects of military ranks on post-service wages, accounting for endogeneity in rank assignment. This research addressed a significant methodological challenge in labor economics and provided insights into the economic returns to military service.",
    methodology:
      "Created a Control Function Approach for partly ordered endogenous treatments, extending existing econometric methods to handle the unique structure of military rank data. Collected and analyzed comprehensive data on military service and subsequent civilian employment outcomes. Applied the methodology to estimate the causal effect of military rank on civilian wages.",
    results:
      "The analysis revealed significant wage premiums associated with higher military ranks, even after controlling for selection effects and other confounding factors. The methodology successfully corrected for endogeneity bias that had affected previous estimates in the literature.",
    conclusion:
      "This research contributed to both the methodological literature on causal inference and the substantive understanding of military service's economic impacts. The paper was published in the Oxford Bulletin of Economics and Statistics, a leading journal in the field.",
    image: "/images/ds3.png",
    tags: ["Econometrics", "Causal Inference", "Control Function", "Labor Economics", "STATA", "R"],
    category: "Research",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/ds5.png",
        caption: "Wage Premium by Military Rank",
      },
      {
        image: "/images/stat1.jpeg",
        caption: "Endogeneity Correction Impact",
      },
    ],
  },
  {
    id: 6,
    title: "Regression Discontinuity Analysis of Affirmative Action",
    slug: "regression-discontinuity-affirmative-action",
    description:
      "Doctoral research applying advanced causal inference techniques to evaluate affirmative action policies in Korea.",
    fullDescription:
      "Conducted doctoral research on the effects of affirmative action policies in Korea, developing and applying a regression discontinuity design with multiple assignment variables. This methodological innovation allowed for more precise estimation of policy impacts in complex institutional settings.",
    methodology:
      "Extended the traditional regression discontinuity design to accommodate multiple assignment variables, addressing a significant methodological gap in the literature. Collected and analyzed comprehensive data on educational outcomes before and after the implementation of affirmative action policies. Implemented robust statistical tests to validate the assumptions of the regression discontinuity approach.",
    results:
      "The analysis provided nuanced insights into the effects of affirmative action policies, identifying both intended and unintended consequences. The methodological contribution of handling multiple assignment variables enhanced the precision and reliability of the estimates.",
    conclusion:
      "This research made significant contributions to both the methodological literature on causal inference and the substantive understanding of affirmative action policies. The dissertation was recognized for its innovative approach to a complex policy evaluation challenge.",
    image: "/images/ds5.png",
    tags: ["Regression Discontinuity", "Causal Inference", "Policy Evaluation", "Econometrics", "R", "STATA"],
    category: "Research",
    demoUrl: "#",
    githubUrl: "#",
    visualizations: [
      {
        image: "/images/ds3.png",
        caption: "Regression Discontinuity Visualization",
      },
      {
        image: "/images/ds6.png",
        caption: "Policy Impact Analysis",
      },
    ],
  },
]
