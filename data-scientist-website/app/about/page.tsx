import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-6">
              <Image src="/images/about.jpeg" alt="Youngmin Ju - Data Scientist" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <div className="flex justify-center gap-4 mt-2">
                <Button asChild variant="ghost" size="icon">
                  <a href="https://github.com/youngminju-phd" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://linkedin.com/in/youngminju" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
            <p className="mb-4">
              I'm Youngmin Ju, a seasoned Data Scientist and Economist with extensive experience in developing and
              optimizing data-driven solutions, focusing on experimentation and causal inference. As the founder of a
              research-driven organization, I've successfully led cross-functional projects, delivering business impact
              through data strategy and technical execution.
            </p>
            <p className="mb-4">
              My expertise lies in enhancing decision-making processes, statistical analysis, and A/B testing, with
              demonstrated success in improving CRM performance and data processing efficiency. Throughout my career,
              I've worked with organizations across various industries, helping them leverage data to make informed
              decisions and drive business growth.
            </p>
            <p>
              My approach combines rigorous statistical analysis with creative problem-solving, always keeping the end
              goal in mind: delivering insights that create value and drive positive change.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Programming & Tools</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Python (NumPy, pandas, Scikit-Learn)</li>
                  <li>R and STATA for statistical analysis</li>
                  <li>SQL for database querying</li>
                  <li>Git for version control</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Classification & Regression</li>
                  <li>Deep Learning (TensorFlow, PyTorch)</li>
                  <li>Clustering & Dimensionality Reduction</li>
                  <li>Time Series Analysis</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Data Analysis</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Exploratory Data Analysis</li>
                  <li>Feature Engineering</li>
                  <li>Large-Scale ETL</li>
                  <li>Data Visualization (matplotlib, seaborn, plotly)</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Causal Inference</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Experimental Design & A/B Testing</li>
                  <li>Regression Discontinuity</li>
                  <li>Difference in Differences</li>
                  <li>Instrumental Variables</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Ph.D. in Economics</h3>
                <p className="text-muted-foreground">University of Southern California, 2021</p>
                <p className="mt-2">
                  Dissertation: "Essays on Causal Inference (Affirmative Action in Korea - Regression Discontinuity with
                  Multiple Assignment Variables)"
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">M.A. in Economics</h3>
                <p className="text-muted-foreground">Korea University, 2010</p>
                <p className="mt-2">Honors: Brain Korea 21 scholarship</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">B.S. in Mathematical Sciences</h3>
                <p className="text-muted-foreground">
                  Korea Advanced Institute of Science and Technology (KAIST), 2008
                </p>
                <p className="mt-2">
                  Honors: Mathematical Science Department scholarship | National Science and Technology scholarship
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Founder / Data Scientist</h3>
                  <span className="text-sm text-muted-foreground">Oct. 2021 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Decode Data Inc.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    Founded and led a nonprofit research initiative focused on data science applications in economics
                    and business decision-making
                  </li>
                  <li>
                    Directed all stages of project development, from ideation to deployment, combining domain expertise
                    with technical execution
                  </li>
                  <li>
                    Oversaw stakeholder engagement, data strategy, and infrastructure planning, establishing a scalable
                    foundation for future data-driven research
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Data Scientist</h3>
                  <span className="text-sm text-muted-foreground">Oct. 2022 - Mar. 2024</span>
                </div>
                <p className="text-muted-foreground mb-2">Datacrunch Global</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    Led the design and deployment of Business Decision Solutions (BDS) for E-commerce company by
                    integrating order, procurement, settlement, and inventory data, which enables a 30% reduction in
                    decision-making time
                  </li>
                  <li>
                    Designed and implemented machine learning models for demand forecasting, optimizing procurement
                    decisions and reducing excess inventory costs by 15-20%
                  </li>
                  <li>
                    Led the project to automate data cleansing processes, reducing manual report generation time by 80%
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Assistant Professor (First Lieutenant)</h3>
                  <span className="text-sm text-muted-foreground">Jun. 2010 - May. 2013</span>
                </div>
                <p className="text-muted-foreground mb-2">Korea Army Academy at Yeongcheon</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Led cadets in the Economics department, achieving #1 ranking for 2 consecutive years</li>
                  <li>Developed robust Panel Data economic models for two government research projects</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Economics Researcher</h3>
                  <span className="text-sm text-muted-foreground">Oct. 2009 - Mar. 2010</span>
                </div>
                <p className="text-muted-foreground mb-2">Korea University – Client: Hyundai MOBIS</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    Applied causal inference techniques (Difference-in-Differences, Before-After) to assess the economic
                    impact of Hyundai Mobis' alleged anti-competitive behavior
                  </li>
                  <li>
                    Proved that penalties imposed on relayers had no statistically significant negative effect on sales,
                    resulting in a $120 million reduction in fine
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Publications</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">
                  Control Function Approach for Partly Ordered Endogenous Treatments: Military Rank Premium in Wage
                </h3>
                <p className="text-muted-foreground mb-2">Oxford Bulletin of Economics and Statistics, June 2017</p>
                <p className="text-sm mb-3">
                  Developed a novel statistical methodology to analyze the effects of military ranks on post-service
                  wages, addressing endogeneity in rank assignment through an innovative control function approach.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://onlinelibrary.wiley.com/doi/10.1111/obes.12199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Publication
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">
                  A Study on Scale of Defense Expenditure for Security Menace: A Panel Regression Analysis Approach
                </h3>
                <p className="text-muted-foreground mb-2">Journal of Korea Army Academy at Yeong-cheon, 2013</p>
                <p className="text-sm mb-3">
                  Led a government research project to design robust economic models for estimating optimal national
                  defense R&D expenditure and efficient management, contributing to a larger project with a total value
                  exceeding $40,000.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">
                  Affirmative Action in Korea - Regression Discontinuity with Multiple Assignment Variables
                </h3>
                <p className="text-muted-foreground mb-2">Dissertation Research, 2021</p>
                <p className="text-sm mb-3">
                  Developed an identification method for fuzzy regression discontinuity design with multiple assignment
                  variables to analyze affirmative action effects in Korea. Found that while the overall policy showed
                  no significant effect, company size-based implementation increased female employment rates by 5
                  percentage points.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">Store Item Demand Forecasting Project</h3>
                <p className="text-muted-foreground mb-2">Technical Report, 2021</p>
                <p className="text-sm mb-3">
                  Implemented a Recurrent Neural Network with Long Short-Term Memory (LSTM) using Keras/TensorFlow to
                  predict 3-month item sales across different stores, supporting business planning and cash flow
                  management. The LSTM model reduced error rates to 86% of traditional ARIMA forecasting methods.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">Customer Churn Prediction Project</h3>
                <p className="text-muted-foreground mb-2">Technical Report, 2020</p>
                <p className="text-sm mb-3">
                  Built a multi-classification model using XGBoost to identify customers likely to churn and determine
                  the most influential features. The XGBoost model achieved an AUC of 93.3%, outperforming other
                  algorithms including GBM (90.89%), Random Forest (87.76%), and Decision Trees (83%).
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">Online Retail Customer Segmentation Analysis</h3>
                <p className="text-muted-foreground mb-2">Technical Report, 2020</p>
                <p className="text-sm mb-3">
                  Segmented and cleaned business performance metrics including monthly revenue, activation rate,
                  retention rate, and churn rate. Applied Lifetime Value (LTV) methods to improve multi-classification
                  model accuracy from 76.5% to 84%.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">
                  A Study on the Estimation of Optimal Defense R&D Expenditure and Efficient Management
                </h3>
                <p className="text-muted-foreground mb-2">Korea Army Academy at Yeongcheon, 2012</p>
                <p className="text-sm mb-3">
                  Conducted comprehensive research on defense R&D expenditure optimization and management efficiency,
                  providing evidence-based recommendations for resource allocation in national defense.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">The Study on Scale of Defense Expenditure</h3>
                <p className="text-muted-foreground mb-2">Korea Army Academy at Yeongcheon, 2011</p>
                <p className="text-sm mb-3">
                  Analyzed defense expenditure patterns and requirements, developing models to determine appropriate
                  funding levels based on security threats and national priorities.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg">
                  Economic Effects of Alleged Anti-Competitive Behavior of Top Automobile Parts Company
                </h3>
                <p className="text-muted-foreground mb-2">Research Report for Hyundai MOBIS, 2010</p>
                <p className="text-sm mb-3">
                  Designed causal inference models to investigate economic effects of alleged anti-competitive behaviors
                  on retail agencies, mediating companies, repair shops, and consumers. The research provided economic
                  evidence that helped reduce the imposed fine from $150 million to $30 million.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
