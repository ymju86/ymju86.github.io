---
title: "Market Response Project"
excerpt: "Develop Market Response Model"
header:
  #image: /assets/images/unsplash-gallery-image-2.jpg
  teaser: /assets/projects/DS4.png
sidebar:
  - title: "Role"
    image: /assets/projects/DS4.png
    image_alt: "logo"
    text: "Data Scientist / Economist"
  - title: "Responsibilities"
    text: "Develop Market Response Model"
gallery:
  - #url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: /assets/projects/CCP.jpg
    alt: "placeholder image 1"
  - #url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: /assets/projects/DS2.png
    alt: "placeholder image 2"
  - #url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: /assets/projects/DS6.png
    alt: "placeholder image 3"
---

Data: [kaggle](https://blog.minethatdata.com/2008/03/minethatdata-e-mail-analytics-and-data.html)
Github: [github](https://github.com/youngminju-phd/Market_Response_Project)

- pandas, numpy, matplotlib, seaborn, plotly, sklearn, xgboost

{% include gallery caption="This is a sample gallery to go along with this case study." %}

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