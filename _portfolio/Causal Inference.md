---
title: "Analyzing Wage Determinants"
excerpt: "OLS, Random Forest, Double Machine Learning, Causal Forest"
toc: true
toc_sticky: true
toc_label: Contents
header:
  #image: /assets/images/unsplash-gallery-image-2.jpg
  teaser: /assets/projects/ML1.png
sidebar:
  - title: "Role"
    image: /assets/projects/ML1.png
    image_alt: "logo"
    text: "Data Scientist / Economist"
  - title: "Responsibilities"
    text: "Analyze Wage Determinants based on Causal Inference Process"
# gallery:
#   - #url: /assets/images/unsplash-gallery-image-1.jpg
#     image_path: /assets/projects/DS4.png
#     alt: "placeholder image 1"
#   - #url: /assets/images/unsplash-gallery-image-2.jpg
#     image_path: /assets/projects/DS2.png
#     alt: "placeholder image 2"
#   - #url: /assets/images/unsplash-gallery-image-3.jpg
#     image_path: /assets/projects/DS6.png
#     alt: "placeholder image 3"
---

# Analyzing Wage Determinants with Econometrics, Machine Learning and Causal Inference

In this notebook, we will:

1. **Simulate a Dataset:** Create a synthetic dataset that includes features such as _Education_ and _Experience_ and an outcome variable _Wage_.
2. **Econometric Analysis (OLS Regression):** Estimate the relationship between the predictors and _Wage_ using Ordinary Least Squares.
3. **Machine Learning (Random Forest):** Predict _Wage_ using a Random Forest model and evaluate its performance.
4. **Causal Inference (Double Machine Learning):** Use Double Machine Learning (DML) to estimate the causal effect of education on wage.
5. **Causal Forest (Heterogeneous Treatment Effects):** Estimate heterogeneous treatment effects (HTE) with a causal forest.
6. **Visualization & Subgroup Analysis:** Visualize the results and conduct subgroup analysis by education levels.

Each section includes detailed explanations to help you understand the process.

## 1. Import Libraries

We import all the necessary libraries, including those for numerical computing (`numpy`, `pandas`), econometric and statistical analysis (`statsmodels`), machine learning (`sklearn`), causal inference (`econml`), and visualization (`matplotlib`, `seaborn`).


```python
# Import necessary libraries
import numpy as np
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LassoCV

from econml.dml import LinearDML, CausalForestDML

# Ignore Warnings
def warn(*args, **kwargs):
    pass
import warnings
warnings.warn = warn

# This magic command ensures plots are shown inline in the notebook
%matplotlib inline
```

## 2. Data Simulation

In this section, we simulate a dataset with 1000 observations.  
- **Education:** Random integer values between 10 and 19 (years of education).
- **Experience:** Random integer values between 1 and 39 (years of experience).
- **Ability:** A normally distributed variable representing unobserved ability.

The outcome variable **Wage** is generated as a linear combination of these variables with added random noise.


```python
# ---------------------------
# Data Simulation
# ---------------------------
def simulate_data(n=1000, random_state=42):
    """
    Simulate a dataset with Education, Experience, and Wage.
    
    Parameters:
      - n: Number of observations.
      - random_state: Seed for reproducibility.
      
    Returns:
      - data: A pandas DataFrame with columns 'Education', 'Experience', and 'Wage'.
    """
    np.random.seed(random_state)
    
    # Generate features
    education = np.random.randint(10, 20, size=n)      # Years of education (10 to 19)
    experience = np.random.randint(1, 40, size=n)        # Years of experience (1 to 39)
    ability = np.random.randn(n)                         # Unobserved ability (standard normal)
    
    # Generate outcome variable (log wage)
    wage = 2 + 0.08 * education + 0.02 * experience + 0.5 * ability + np.random.normal(0, 0.5, size=n)
    
    # Create and return DataFrame
    data = pd.DataFrame({
        'Education': education,
        'Experience': experience,
        'Wage': wage
    })
    return data
```


```python
# Data Simulation
data = simulate_data()
print("Data simulation complete.\n")
data.head()
```

    Data simulation complete.
    
    




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Education</th>
      <th>Experience</th>
      <th>Wage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16</td>
      <td>33</td>
      <td>4.168880</td>
    </tr>
    <tr>
      <th>1</th>
      <td>13</td>
      <td>12</td>
      <td>2.225531</td>
    </tr>
    <tr>
      <th>2</th>
      <td>17</td>
      <td>36</td>
      <td>3.099148</td>
    </tr>
    <tr>
      <th>3</th>
      <td>14</td>
      <td>4</td>
      <td>3.889295</td>
    </tr>
    <tr>
      <th>4</th>
      <td>16</td>
      <td>5</td>
      <td>3.198863</td>
    </tr>
  </tbody>
</table>
</div>



## 3. Econometric Analysis: OLS Regression

We run an Ordinary Least Squares (OLS) regression to model _Wage_ as a function of _Education_ and _Experience_.  
This classic econometric technique provides us with coefficients, standard errors, and other statistics.


```python
# ---------------------------
# Econometrics Approach (OLS)
# ---------------------------
def run_ols(data):
    """
    Run an OLS regression using Education and Experience to predict Wage.
    
    Parameters:
      - data: The input DataFrame.
    
    Returns:
      - model: The fitted OLS regression model.
    """
    # Add a constant term for the intercept
    X = sm.add_constant(data[['Education', 'Experience']])
    Y = data['Wage'].values
    model = sm.OLS(Y, X).fit()
    
    print("Econometrics (OLS) Results:")
    print(model.summary())
    return model
```


```python
# Econometrics Approach (OLS Regression)
ols_model = run_ols(data)
```

    Econometrics (OLS) Results:
                                OLS Regression Results                            
    ==============================================================================
    Dep. Variable:                      y   R-squared:                       0.176
    Model:                            OLS   Adj. R-squared:                  0.174
    Method:                 Least Squares   F-statistic:                     106.6
    Date:                Tue, 11 Feb 2025   Prob (F-statistic):           1.15e-42
    Time:                        14:16:56   Log-Likelihood:                -1109.6
    No. Observations:                1000   AIC:                             2225.
    Df Residuals:                     997   BIC:                             2240.
    Df Model:                           2                                         
    Covariance Type:            nonrobust                                         
    ==============================================================================
                     coef    std err          t      P>|t|      [0.025      0.975]
    ------------------------------------------------------------------------------
    const          1.9147      0.127     15.084      0.000       1.666       2.164
    Education      0.0850      0.008     10.638      0.000       0.069       0.101
    Experience     0.0217      0.002     10.486      0.000       0.018       0.026
    ==============================================================================
    Omnibus:                        0.458   Durbin-Watson:                   2.050
    Prob(Omnibus):                  0.795   Jarque-Bera (JB):                0.546
    Skew:                           0.014   Prob(JB):                        0.761
    Kurtosis:                       2.889   Cond. No.                         146.
    ==============================================================================
    
    Notes:
    [1] Standard Errors assume that the covariance matrix of the errors is correctly specified.
    

## 4. Machine Learning Approach: Random Forest Regression

We apply a Random Forest regression to predict _Wage_.  
The dataset is split into training (80%) and testing (20%) sets.  
The model is then evaluated using Mean Squared Error (MSE).


```python
# ---------------------------
# Machine Learning Approach (Random Forest)
# ---------------------------
def run_random_forest(data):
    """
    Train a Random Forest to predict Wage and print the test MSE.
    
    Parameters:
      - data: The input DataFrame.
      
    Returns:
      - rf: The fitted Random Forest model.
      - mse: The mean squared error on the test set.
    """
    X = data[['Education', 'Experience']]
    Y = data['Wage']
    
    # Train-test split (80% train, 20% test)
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
    
    # Train Random Forest
    rf = RandomForestRegressor(n_estimators=100, random_state=42)
    rf.fit(X_train, Y_train)
    
    # Predict on test set and calculate MSE
    Y_pred = rf.predict(X_test)
    mse = mean_squared_error(Y_test, Y_pred)
    print("Machine Learning (Random Forest) MSE:", mse)
    return rf, mse
```


```python
# Machine Learning Approach (Random Forest)
rf_model, rf_mse = run_random_forest(data)
```

    Machine Learning (Random Forest) MSE: 0.7115261448887159
    

## 5. Causal Inference: Double Machine Learning (DML)

We use the Double Machine Learning (DML) approach to estimate the causal effect of _Education_ on _Wage_.  
In this setup:

- **Treatment (T):** Education  
- **Outcome (Y):** Wage  
- **Confounders (W):** Experience  

Two nuisance models are used: one for predicting the outcome and one for the treatment assignment.


```python
# ---------------------------
# Double Machine Learning (DML)
# ---------------------------
def run_dml(data):
    """
    Run Double Machine Learning (DML) using LinearDML to estimate 
    the causal effect of Education on Wage.
    
    Parameters:
      - data: The input DataFrame.
    
    Returns:
      - dml: The fitted DML model.
      - treatment_effect: The estimated constant marginal treatment effect.
    """
    Y = data['Wage'].values
    T = data['Education'].values.reshape(-1, 1)   # Treatment: Education
    W = data[['Experience']].values               # Confounder: Experience

    # Define ML models for the nuisance parameters:
    # ml_model_y: Model for predicting the outcome
    # ml_model_t: Model for predicting the treatment
    ml_model_y = GradientBoostingRegressor(n_estimators=100, max_depth=3, random_state=42)
    ml_model_t = LassoCV(cv=5, n_jobs=-1, max_iter=10000)
    
    # Fit the DML model
    dml = LinearDML(model_y=ml_model_y, model_t=ml_model_t, random_state=42)
    dml.fit(Y, T, X=None, W=W)
    
    # Estimate the constant marginal treatment effect
    treatment_effect = dml.const_marginal_effect()
    print(f"Estimated Causal Effect of Education on Wage (DML): {treatment_effect.flatten()[0]:.4f}")
    return dml, treatment_effect
```


```python
# 4. Double Machine Learning (DML) Causal Estimation
dml_model, dml_treatment_effect = run_dml(data)
```

    Estimated Causal Effect of Education on Wage (DML): 0.0847
    

## 6. Causal Forest: Estimating Heterogeneous Treatment Effects (HTE)

We apply a Causal Forest to estimate the heterogeneous treatment effects of _Education_ on _Wage_.  
In the first run, we use _Experience_ as the effect modifier.  
In the second run, we introduce an interaction term between _Education_ and _Experience_ as additional modifiers.

The causal forest allows us to see how the treatment effect may vary across different levels of the modifiers.


```python
# ---------------------------
# Causal Forest (Heterogeneous Treatment Effects)
# ---------------------------
def run_causal_forest(data):
    """
    Run Causal Forest (CausalForestDML) to estimate heterogeneous treatment effects (HTE).
    First, using Experience as the effect modifier.
    Then, re-fit using an interaction term between Education and Experience.
    
    Parameters:
      - data: The input DataFrame.
      
    Returns:
      - cfdml: The fitted causal forest model.
      - hte_effects: Estimated HTE when using Experience as the effect modifier.
      - hte_effects_interaction: Estimated HTE when using both Experience and the interaction term as modifiers.
    """
    Y = data['Wage'].values
    T = data['Education'].values.reshape(-1, 1)
    
    ml_model_y = GradientBoostingRegressor(n_estimators=100, max_depth=3, random_state=42)
    ml_model_t = LassoCV(cv=5, n_jobs=-1, max_iter=10000)
    
    # First, use Experience as the effect modifier
    cfdml = CausalForestDML(model_y=ml_model_y, model_t=ml_model_t, random_state=42)
    cfdml.fit(Y, T, X=data[['Experience']].values, W=None)
    hte_effects = cfdml.effect(data[['Experience']].values)
    print(f"Estimated HTE Mean (Experience as modifier): {np.mean(hte_effects):.4f}")
    
    # Next, create an interaction term and use both Experience and Interaction as modifiers
    data['Interaction'] = data['Education'] * data['Experience']
    X_effect = data[['Experience', 'Interaction']].values
    cfdml.fit(Y, T, X=X_effect, W=None)
    hte_effects_interaction = cfdml.effect(X_effect)
    
    return cfdml, hte_effects, hte_effects_interaction
```


```python
# 5. Causal Forest for Heterogeneous Treatment Effects (HTE)
cfdml_model, hte_effects, hte_effects_interaction = run_causal_forest(data)
```

    Estimated HTE Mean (Experience as modifier): 0.0842
    

## 7. Visualization Functions

We define helper functions to visualize:

- The distribution of the estimated treatment effects (histogram).
- The relationship between the treatment effect and a variable (scatter plot).
- Subgroup analysis by binning the Education variable.


```python
# ---------------------------
# Visualization Functions
# ---------------------------
def plot_histogram(data_array, xlabel, ylabel, title, color='blue'):
    """
    Plot a histogram with a kernel density estimate.
    
    Parameters:
      - data_array: The data to plot.
      - xlabel: Label for the x-axis.
      - ylabel: Label for the y-axis.
      - title: Plot title.
      - color: Color for the plot.
    """
    plt.figure(figsize=(8, 5))
    sns.histplot(data_array, bins=30, kde=True, color=color)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.title(title)
    plt.show()

def plot_scatter(x, y, xlabel, ylabel, title, color='blue'):
    """
    Plot a scatter plot.
    
    Parameters:
      - x: Data for the x-axis.
      - y: Data for the y-axis.
      - xlabel: Label for the x-axis.
      - ylabel: Label for the y-axis.
      - title: Plot title.
      - color: Color for the markers.
    """
    plt.figure(figsize=(8, 5))
    sns.scatterplot(x=x, y=y, color=color, alpha=0.6)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.title(title)
    plt.show()
    
def subgroup_analysis(data, hte_effects):
    """
    Perform subgroup analysis by binning Education and plotting the average HTE.
    
    Parameters:
      - data: The input DataFrame.
      - hte_effects: Estimated treatment effects.
    """
    data = data.copy()  # Work on a copy to avoid modifying the original DataFrame
    data['HTE'] = hte_effects
    # Bin Education into categories; include the lowest value explicitly
    education_bins = pd.cut(
        data['Education'], 
        bins=[10, 12, 14, 16, 18, 20],
        labels=['10-12', '12-14', '14-16', '16-18', '18-20'],
        include_lowest=True
    )
    edu_means = data.groupby(education_bins)['HTE'].mean()
    
    plt.figure(figsize=(8, 5))
    edu_means.plot(kind='bar', color='purple')
    plt.xlabel("Education Level (Years)")
    plt.ylabel("Average Estimated Treatment Effect")
    plt.title("HTE by Education Level")
    plt.show()
```

## 8. Visualizing the Results

We now generate several plots:

- **Histogram:** Distribution of the estimated treatment effects when using _Experience_ as the effect modifier.
- **Scatter Plot:** Relationship between _Experience_ and the estimated treatment effects.
- **Subgroup Analysis:** Average estimated treatment effects by education levels.
- **Interaction Plot:** Relationship between the interaction term (Education × Experience) and the estimated treatment effects.


```python
# Histogram of HTE (using Experience as effect modifier)
plot_histogram(
    hte_effects,
    xlabel="Estimated Treatment Effect",
    ylabel="Frequency",
    title="Distribution of HTE (Experience as Modifier)"
)
```


    
![png](/images/portfolio/CI/output_21_0.png)
    



```python
# Scatter plot: HTE vs. Experience
plot_scatter(
    x=data['Experience'],
    y=hte_effects,
    xlabel="Experience (Years)",
    ylabel="Estimated Treatment Effect",
    title="HTE vs. Experience"
)
```


    
![png](/images/portfolio/CI/output_22_0.png)
    



```python
# Subgroup Analysis by Education Levels
subgroup_analysis(data, hte_effects)
```


    
![png](/images/portfolio/CI/output_23_0.png)
    



```python
# Scatter plot: HTE vs. Interaction of Education & Experience
plot_scatter(
    x=data['Interaction'],
    y=hte_effects_interaction,
    xlabel="Education * Experience Interaction",
    ylabel="Estimated Treatment Effect",
    title="HTE vs. Interaction of Education & Experience",
    color='green'
)
```


    
![png](/images/portfolio/CI/output_24_0.png)
    

