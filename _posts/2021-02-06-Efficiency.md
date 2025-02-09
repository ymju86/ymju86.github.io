---
title: "Basic & Econometrics - Computational efficiency"
toc: true
toc_sticky: true
toc_label: Contents
category: "Big Data Econometrics" 
---
```python
import numpy as np
import pandas as pd 

import seaborn as sns
import matplotlib.pyplot as plt
%matplotlib inline
plt.style.use('ggplot')
import random
```

# P vs NP


```python
%%timeit -o
n = 10
l1 = [i for i in range(n)]
random.shuffle(l1)
# sort numbers
for i in range(n-1):
    for j in range(i+1,n):
        if l1[i]>l1[j]:
            tmp = l1[j]
            l1[j] = l1[i]
            l1[i] = tmp
```

    21.1 µs ± 970 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)
    




    <TimeitResult : 21.1 µs ± 970 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)>




```python
def sort_numbers(n):
    l1 = [i for i in range(n)]
    random.shuffle(l1)
    # sort numbers
    for i in range(n-1):
        for j in range(i+1,n):
            if l1[i]>l1[j]:
                tmp = l1[j]
                l1[j] = l1[i]
                l1[i] = tmp
```


```python
res = []
y = []
x = [10,50,100,200,500,1000]
for n in x:
    a = %timeit -o sort_numbers(n)
    res.append(a)
    y = y + [np.mean(a.timings)]
```

    21.8 µs ± 1.29 µs per loop (mean ± std. dev. of 7 runs, 10000 loops each)
    281 µs ± 18.2 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    884 µs ± 66 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    3.04 ms ± 129 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)
    23.4 ms ± 773 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)
    103 ms ± 22.5 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    


```python
fig = plt.figure(figsize = (8,8))
plt.scatter(x,y)
x2 = [i for i in range(max(x))]
y2 = [i**2 for i in x2]
norm = max(y)/max(y2)
y2 = [i*norm for i in y2]

plt.plot(x2,y2,color = 'blue')
plt.xlabel('N')
plt.ylabel('compute time in ms')
```




    Text(0, 0.5, 'compute time in ms')




    
![png](/assets/images/notebooks/BigDataEconometrics/efficiency/output_5_1.png)
    



```python

```
