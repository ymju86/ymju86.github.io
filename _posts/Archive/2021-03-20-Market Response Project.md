---
title: "Market Response Project"

---

Data: [kaggle](https://blog.minethatdata.com/2008/03/minethatdata-e-mail-analytics-and-data.html)
Github: [github](https://github.com/ymju86/Market_Response_Project)

- pandas, numpy, matplotlib, seaborn, plotly, sklearn, xgboost

Market Response Model
-	Building the uplift formula
-	Exploratory Data Analysis (EDA) & Feature Engineering
-	Scoring the conversion probabilities
-	Observing the results on the test set

Uplift Modeling
1.	Predict the probabilities of being in each group for all customers: build a multi-classification model
2.	Calculate the uplift score. (US = TR + CN – TN – CR)
-	TR(Treatment Responders): Customers that will purchase only if they receive an offer
-	TN(Treatment Non-Responders): Customer that won’t purchase in any case
-	CR(Control Responders): Customers that will purchase without an offer
-	CN(Control Non-Responders): Customers that will not purchase if they don’t receive an offer
