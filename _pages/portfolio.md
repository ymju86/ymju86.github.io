---
toc: true
layout: single
permalink: /portfolio/
title: "Portfolio"
author_profile: true
read_time: true
comments: true
share: true
related: true
popular: true
toc: true
toc_sticky: true
toc_label: Contents
header:
  image: "/images/fort point.png"
---

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Store Item Demand Forecasting Project
Data: [kaggle](https://www.kaggle.com/c/demand-forecasting-kernels-only/data?select=train.csv)
Github: [github](https://github.com/ymju86/Store_Item_Demand_Forecasting_Project)
- pandas, numpy, matplotlib, plotly, sklearn, tensorflow, keras

Use Keras (TensorFlow) to implement LSTM (Long Short-term Memory)
-	Data Wrangling
-	Data Transformation to make it stationary and supervised
-	Building the LSTM model & evaluation

--------------------------------------------------------------------------------------

## Predicting Sales

Time series forecasting is an important area of Machine Learning because there are so many prediction problems that involve a time component. There are many methods in the literature to achieve this like Autoregressive Moving Average (ARMA), Autoregressive Integrated Moving Average (ARIMA), Seasonal Autoregressive Integrated Moving-Average (SARIMA), Vector Autoregression (VAR), and so on.

## Data Transformation

To model our forecast easier and more accurate, the transformations below are needed:

* Convert the data to stationary if it is not
* Convert from time series to supervised for having the feature set of our LSTM model
* Scale the data

First off, how do we check if the data is not stationary? Let’s plot it and see:

![alt text](/images/Monthly_Sales.png)

Obviously, it is not stationary and has an increasing trend over the months. One method is to get the difference in sales compared to the previous month and build the model on it:

![alt text](/images/diff.png)

It is stationary. Now we can start building our feature set. We need to use previous monthly sales data to forecast the next ones. The look-back period may vary for every model. Ours will be 12 for this example.

## Building the LSTM model

![alt text](/images/Sales_prediction.png)

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Customer Churn Prediction Project
Data: [kaggle](https://www.kaggle.com/blastchar/telco-customer-churn)
Github: [github](https://github.com/ymju86/Customer_Churn_Prediction_Project)
- pandas, numpy, matplotlib, seaborn, plotly, sklearn, xgboost

Develop a Churn Prediction model:
-	Exploratory data analysis
-	Feature engineering
-	Investigating how the features affect Retention by using Logistic Regression -	Building a classification model with XGBoost

------------------------------------------------------------------------------------------

## Churn Prediction

Retention Rate is an indication of how good is your product market fit (PMF). If your PMF is not satisfactory, you should see your customers churning very soon. One of the powerful tools to improve Retention Rate (hence the PMF) is Churn Prediction. By using this technique, you can easily find out who is likely to churn in the given period. In this article, we will use a **Telco dataset** (https://www.kaggle.com/blastchar/telco-customer-churn) and go over the following steps to develop a Churn Prediction model:

* Exploratory data analysis
* Feature engineering
* Investigating how the features affect Retention by using Logistic Regression
* Building a classification model with XGBoost

## Exploratory Data Analysis (EDA)

Data fall under two categories:

* Categorical features: gender, streaming tv, payment method &, etc.
* Numerical features: tenure, monthly charges, total charges

## Feature Engineering
1. Group the numerical columns by using clustering techniques
2. Apply Label Encoder to categorical features which are binary
3. Apply get_dummies() to categorical features which have multiple values

### Categorical features

| `Gender` | `Partner` |
| --- | --- |
| ![alt text](/images/gender.png) | ![alt text](/images/partner.png) |
| `Phone Service` | `Multiple Lines` |
|![alt text](/images/phone.png)|![alt text](/images/multiple_lines.png)|
| `Internet Service` | 
|![alt text](/images/internet.png)|
 
This chart reveals customers who have Fiber optic as Internet Service are more likely to churn.

| `Online Security` | `Online Backup` |
| --- | --- |
|![alt text](/images/online_security.png)|![alt text](/images/online_backup.png)|
| `Device Protection` | `Tech Support` |
|![alt text](/images/device_protection.png)|![alt text](/images/tech_support.png)|

Customers don’t use Tech Support are more like to churn (~25% difference).

| `Streaming_TV` | `Streaming_Movies` |
| --- | --- |
|![alt text](/images/Streaming_TV.png)|![alt text](/images/Streaming_Movies.png)|
| `Contract` | `Paperless` |
|![alt text](/images/contract.png)|![alt text](/images/Paperless.png)|
| `Payment_methods` | 
|![alt text](/images/payment_methods.png)|

Automating the payment makes the customer more likely to retain in your platform (~30% difference).

### Numerical features

#### Feature Engineering for Numerical columns

1. Use Elbow Method to identify the appropriate number of clusters
2. Apply K-means logic to the selected column and change the naming
3. Observe the profile of clusters

![alt text](/images/tenure_based_churn_rate.png)

Super apparent that the higher tenure means lower Churn Rate.

![alt text](/images/Elbow_method.png)

The appropriate number of clusters is 3 by Elbow Method

![alt text](/images/tenure_cluster_vs_churn_rate.png)

![alt text](/images/Monthly_charge_cluster_vs.png)

![alt text](/images/total_charge_clsuter_vs.png)

## Logistic Regression

Predicting churn is a binary classification problem. Customers either churn or retain in a given period. Along with being a robust model, Logistic Regression provides interpretable outcomes too. As we did before, let’s sort out our steps to follow for building a Logistic Regression model:

1. Prepare the data (inputs for the model)
2. Fit the model and see the model summary

![alt text](/images/GLM.png)

## Binary Classification Model with XGBoost

![alt text](/images/classification_report.png)
![alt text](/images/Feature_importance.png)

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Market Response Project
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

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Online Retail Project
Data: [kaggle](https://www.kaggle.com/vijayuv/onlineretail)
Github: [github](https://github.com/ymju86/Online_Retail_Project)
- pandas, numpy, matplotlib, seaborn, plotly, sklearn(k-means clustering), elbow method, xgboost

Metrics for Business
- Build metrics: 
Monthly Revenue, Monthly Active Customers, Monthly Order Count, Average Revenue per Order, 
New Customer Ratio, Activation Rate, Monthly Retention Rate, Churn Rate, Cohort Base Retention

Customer Segmentation
- RFM: Recency, Frequency, Monetary value (Revenue)
- The main strategies are quite clear:
•	High Value: Improve Retention
•	Mid Value: Improve Retention + Increase Frequency
•	Low Value: Increase Frequency

Customer Lifetime Value Prediction
- RFM: Recency, Frequency, Monetary value (Revenue)
- LTV (Life Time Value), Accuracy, Precision, Recall

Predicting Next Purchase Day
-	Data Wrangling (creating previous/next datasets and calculate purchase day differences)
-	Feature Engineering
-	Selecting a Machine Learning Model
-	Multi-Classification Model
-	Hyperparameter Tuning

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Big_Data_Econometrics
Materials for TA session (update: March 15, 2021)  
Github: [github](https://github.com/ymju86/Big_Data_Econometrics)

## Basic & Econometrics
- Computational Efficiency
- Cross Validation
- Feature Engineering
- OLS via Stochastic Gradient Descent
- Misspecified Model
- ARCH and GARCH Model
- Spatial data - Visualization

![alt text](/images/covid.png)
![alt text](/images/pair.png)
![alt text](/images/box.png)

## Causal Inference
- Instrumental Variables & Regression Discontinuity
- Differences in Differences

![alt text](/images/dd1.png)
![alt text](/images/dd.png)

- Blocking estimator & Matching estimator
   - Pre-processing phase:
   - Assess covariate balance
   - Estimate propensity score
   - Trim sample
   - Stratify sample

![alt text](/images/ps_score.png)

## Exmerimental Design
- A/B Testing
- Randomized Experiments

![alt text](/images/re.png)
![alt text](/images/ci.png)
![alt text](/images/re_cov.png)

## Machine Learning
- Principan Component Analysis (PCA)
- Regularized Regression
- Double LASSO
- Manifold Learning 

![alt text](/images/ridge.png)
![alt text](/images/lasso.png)
![alt text](/images/lasso_en.png)
![alt text](/images/pos_lasso.png)
![alt text](/images/en.png)

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
