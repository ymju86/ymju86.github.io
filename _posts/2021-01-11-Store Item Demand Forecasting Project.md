---
title: "Store Item Demand Forecasting Project"

---

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

