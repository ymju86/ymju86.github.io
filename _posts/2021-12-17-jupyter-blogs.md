---
title: "Turning Jupyter notebooks into Jekyll blog posts"
toc: true
---

# Getting started
There are multiple blog posts explaining how to turn Jupyter notebooks into either Markdown
or HTML files (e.g. [1](https://cduvallet.github.io/posts/2018/03/ipython-notebooks-jekyll),
[2](https://jaketae.github.io/blog/jupyter-automation/),
[3](http://www.kasimte.com/adding-and-including-jupyter-notebooks-as-jekyll-blog-posts))
using `nbconvert`. If there are plots in the notebook, `nbconvert` turns them into png images
which are then embedded in the Markdown document. Using the resulting files as Jekyll posts
does then only require adjusting a few things like headers or image paths, moving the files
in the right folder, and upload the result. This sounds like a viable option!

There are several additional options I found which don't perfectly fit for what I'm trying
to achieve, but look very interesting:
* [`fastpages`](https://github.com/fastai/fastpages), a blogging platform which supports
  Markdown and Jupyter notebooks (and even Word docs!). This looks extremely powerful, but
  after some exploration I found that trying to fit the result into my existing site did not
  yield satisfactory results. I think this is a great project, though!
* [Jupyter Book](https://jupyterbook.org) turns notebooks into beautiful books
  or articles. This looks amazing for standalone projects, but I don't see an easy way to fit
  the result into my existing page.
* [Jekyll Jupyter Notebook plugin](https://github.com/red-data-tools/jekyll-jupyter-notebook)
  allows to embed Jupyter notebooks in Markdown documents used by Jekyll. This seems
  really useful, but is not exactly what I'm looking for here - I would prefer to write the
  entire post in a notebook rather than including a notebook into a Markdown post.

I decided to use `nbconvert` to create Markdown files (and not directly HTML). My reasoning was
that this approach would have a higher likelihood to create posts with the right look, as they
would be processed by Jekyll in the same way as the rest of the site. This also meant that I
could write the YAML front matter for the posts in a Markdown cell, which should then be left
alone by `nbconvert`. Finally, it would also mean that the automatic excerpt function of the
Minimal Mistakes theme (taking the first paragraph as an excerpt if it isn't defined differently)
should work properly.

# Turning a Jupyter notebook into a Markdown Jekyll post

## Naming and file organization
When converting a Jupyter notebook to Markdown, `nbconvert` will by default write a Markdown file
with the same base name as the notebook, changing only the file extension. The Markdown conversion
of a notebook named `basename.ipynb` will be saved in a file called `basename.md`. Since Jekyll
blog posts are required to be named as `YEAR-MONTH-DAY-title.md` (
[reference](https://jekyllrb.com/docs/posts/)), it is easiest to follow that naming
for notebooks. A notebook which should become a blog post should hence be named
`YEAR-MONTH-DAY-title.ipynb`.

Blog posts on Jekyll sites live in the `_posts` folder. I decided to follow the example of `fastpages`
and create a `_notebooks` folder in which to store the notebooks. I will then move the resulting
Markdown file into the `_posts` folder, where it will be picked up by Jekyll. I will also move the
images into the `assets/images/` folder, which is the default location for images.

## A bash script to convert Jupyter notebooks to Markdown Jekyll posts
As a recap, here's the steps we need to take:
* Use `nbconvert` to convert Jupyter notebook to Markdown
* Change image paths from local paths to absolute paths in `assets/images/`
* Move the resulting Markdown file into the `_posts` folder
* Move the image folder to `assets/images/`.

This can easily be done by a few lines of bash with some perl support (and a call to `jupyter nbconvert`
which does the heavy-lifting, of course):
```bash
# Get file name without extension
filename="${notebook_file%.*}"
# Name of Markdown file will be base name + ".md"
md_notebook="${filename}.md"
# Convert notebook to Markdown
jupyter nbconvert "$notebook_file" --to markdown
# Fix image links to point to a place where Jekyll will pick up the images
{% raw %}perl -pi -e 's/\[png\]\(/[png]({{ site.url }}{{ site.baseurl }}\/assets\/images\//g' "$md_notebook"{% endraw %}
# Move Markdown notebook to _posts/ directory
mv "$md_notebook" "${root_directory}/_posts/"
# Move images to a assets such that Jekyll finds them
mv "${filename}_files" "${root_directory}/assets/images/"
```

## Front matter
Since `nbconvert` does not change the content of Markdown cells, I can simply define the first cell of the
notebook to be a Markdown cell and write the YAML front matter there. For example, the first cell of this
notebook reads
```
---
title: "Turning Jupyter notebooks into Jekyll blog posts"
toc: true
category: "Blogging platform"
tags: ["Jekyll", "Jupyter", "Minimal Mistakes"]
badges: true
---
```

`nbconvert` will simply print that as the first lines of the created Markdown file. Jekyll will then interpret
these lines as the YAML front matter, and will render the rest of the post based on the settings set here. I'm pretty
satisfied with this solution: It's easy and intuitive to write, and it doesn't impair the functionality of
the notebook in any way.

# Features
## Math mode
Math mode works in the Markdown part of the notebook, both inline mode $a^2 + b^2 = c^2$ and display mode

$$ i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t) $$

## Matplotlib plot


```python
import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-np.pi, np.pi, 0.01)
fig, ax = plt.subplots(1, 2, figsize=(12, 3))
ax = ax.flatten()

ax[0].plot(x, np.sin(x))
ax[1].plot(x, np.cos(x))

plt.show()
```


    
![png](/assets/images/output_2_0.png)
    


## Code with output


```python
for word in ["one", "two", "three"]:
    print(word)
```

    one
    two
    three
    

# Future work
There are two small details I might look into some day:
* I am not completely satisfied by the design of the code output. I would like to make it easier to distinguish
  between the input of a code cell and its output.
* I would love to have a way to hide / collapse input or output of code cells like Jupyter Book. I think this
  feature would allow to write concise posts focusing on the essential parts. It is challenging, though,
  as it would require to either convert the notebook directly into HTML, or to further process the Markdown
  file created by `jupyter nbconvert`.

# Conclusion
I am really happy with this solution. I can write blog posts as Jupyter notebooks, needing only to add a
first cell with the YAML front matter. I can commit these notebooks to GitHub,
and the GitHub actions take care of the rest. The results fit perfectly in the Minimal Mistake theme, and
allow readers to view the original notebook on GitHub or in Colab.
