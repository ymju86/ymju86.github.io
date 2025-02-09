---
title: "Basic & Econometrics - Misspecified model - pitfalls"
toc: true
toc_sticky: true
toc_label: Contents
category: "Big Data Econometrics" 
---

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm

```

$y_t = \beta y_{t-1}+u_t$

$u_t = \rho u_{t-1}+v_t$

Suppose we want to estimate $\beta$ by running an OLS regression of $y_t$ on $y_{t-1}$


```python
T = 100
y = np.zeros([T,1])
u = np.zeros([T,1])
beta = .7
rho = .5
u[0] = np.random.normal()
y[0] = u[0]
for t in range(1,T):
    u[t] = rho*u[t-1]+np.random.normal()
    y[t] = beta*y[t-1]+u[t]
```


```python
np.random.normal()
```




    -0.09498498374286703




```python
model = sm.OLS(y[1:],y[:-1])
model = sm.OLS(y[2:],np.concatenate([y[:-2],y[1:-1]],axis = 1))
```


```python
res = model.fit()
res.summary()
```




<table class="simpletable">
<caption>OLS Regression Results</caption>
<tr>
  <th>Dep. Variable:</th>            <td>y</td>        <th>  R-squared (uncentered):</th>      <td>   0.764</td>
</tr>
<tr>
  <th>Model:</th>                   <td>OLS</td>       <th>  Adj. R-squared (uncentered):</th> <td>   0.759</td>
</tr>
<tr>
  <th>Method:</th>             <td>Least Squares</td>  <th>  F-statistic:       </th>          <td>   155.4</td>
</tr>
<tr>
  <th>Date:</th>             <td>Mon, 25 Jan 2021</td> <th>  Prob (F-statistic):</th>          <td>7.95e-31</td>
</tr>
<tr>
  <th>Time:</th>                 <td>10:13:18</td>     <th>  Log-Likelihood:    </th>          <td> -140.81</td>
</tr>
<tr>
  <th>No. Observations:</th>      <td>    98</td>      <th>  AIC:               </th>          <td>   285.6</td>
</tr>
<tr>
  <th>Df Residuals:</th>          <td>    96</td>      <th>  BIC:               </th>          <td>   290.8</td>
</tr>
<tr>
  <th>Df Model:</th>              <td>     2</td>      <th>                     </th>              <td> </td>   
</tr>
<tr>
  <th>Covariance Type:</th>      <td>nonrobust</td>    <th>                     </th>              <td> </td>   
</tr>
</table>
<table class="simpletable">
<tr>
   <td></td>     <th>coef</th>     <th>std err</th>      <th>t</th>      <th>P>|t|</th>  <th>[0.025</th>    <th>0.975]</th>  
</tr>
<tr>
  <th>x1</th> <td>   -0.2794</td> <td>    0.099</td> <td>   -2.825</td> <td> 0.006</td> <td>   -0.476</td> <td>   -0.083</td>
</tr>
<tr>
  <th>x2</th> <td>    1.1097</td> <td>    0.099</td> <td>   11.257</td> <td> 0.000</td> <td>    0.914</td> <td>    1.305</td>
</tr>
</table>
<table class="simpletable">
<tr>
  <th>Omnibus:</th>       <td> 0.819</td> <th>  Durbin-Watson:     </th> <td>   2.050</td>
</tr>
<tr>
  <th>Prob(Omnibus):</th> <td> 0.664</td> <th>  Jarque-Bera (JB):  </th> <td>   0.866</td>
</tr>
<tr>
  <th>Skew:</th>          <td> 0.074</td> <th>  Prob(JB):          </th> <td>   0.649</td>
</tr>
<tr>
  <th>Kurtosis:</th>      <td> 2.564</td> <th>  Cond. No.          </th> <td>    3.67</td>
</tr>
</table><br/><br/>Notes:<br/>[1] R² is computed without centering (uncentered) since the model does not contain a constant.<br/>[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.




```python
rho = beta-0.2794
-rho*beta = -(beta-0.2794)*beta = 1.1097
0.2794-beta^2 = 1.
```
