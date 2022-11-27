+++
author = "AUTHOR NAME"
date = "2022-02-20T13:56:01-08:00"
meta = true
math = true
title = "Test Features"
subtitle = "Fancy Subtitle"
toc = true
categories = ["katex", "latex", "tufte-css"]


+++

Test section

## Margin Notes

Some inline math:
{{< marginnote "mn-example" >}}This is a margin note.{{< /marginnote >}}
$e^{i \pi} = -1$
 and $\sqrt{-1} = i $
and $ a_2 = 3 $.

## Figure

### Regular

Below we have an example of a regular width figure.
{{< figure
  src="https://github.com/edwardtufte/tufte-css/raw/gh-pages/img/exports-imports.png"
  class="class param"
  title="The image title."
  caption="This is the image caption."
  label="mn-export-import"
  attr="Image attribution"
  attrlink="attribute link"
  alt="alt"
  link="link"
 >}}

### Margin

This is the start of a margin figure.{{< figure
  src="https://edwardtufte.github.io/tufte-css/img/rhino.png"
  class="class param"
  type="margin"
  label="mn-rhino"
  title="The image title."
  caption="This is the image caption."
  attr="Image attribution"
  attrlink="https://edwardtufte.github.io/tufte-css"
  alt="alt"
  link="link"
 >}}
 But tight integration of graphics with text is central to Tufte’s work even when those graphics are ancillary to the main body of a text. In many of those cases, a margin figure may be most appropriate.

### Full-Width

Below is a full-width figure.
{{< figure
  src="https://edwardtufte.github.io/tufte-css/img/napoleons-march.png"
  type="full"
  label="mn-napoleonic-wars"
  title="Napoleonic wars"
  caption="This the image caption."
  attr="Image attribution"
  attrlink="attribute link"
  alt="Napoleonic wars"
  link="link"
 >}}

