# Personal Website

This is my personal website.
It's a work in progress, currently being rebuilt and redesigned with Hugo.

## Inspiration

### Themes

#### Cactus

[Source](https://themes.gohugo.io/themes/hugo-theme-cactus/)

#### Hugo Bare Min

[source](https://themes.gohugo.io/themes/hugo-bare-min-theme/)

#### No Style Please

[source](https://themes.gohugo.io/themes/hugo-theme-nostyleplease/)

#### Terminal

https://themes.gohugo.io/themes/hugo-theme-terminal/

#### Accessible Minimalism

[source](https://themes.gohugo.io/themes/accessible-minimalism-hugo-theme/)

#### Tufte

https://themes.gohugo.io/themes/hugo-tufte/

#### Hylas

- [https://github.com/h-enk/hyas](https://github.com/h-enk/hyas)
     
### Other Sites

#### Andrew Zah

[https://andrewzah.com/](source)

#### Alistair Smith

[https://alistair.blog/](source)

#### Low-Tech Magazine (Solar Powered)

[https://solar.lowtechmagazine.com/](source)


## Planned Features

### Blog Posts

### Integration with ox-hugo

[https://github.com/kaushalmodi/ox-hugo](repo)

### RSS Feed

### Web Mentions

[https://indieweb.org/Webmention](Webmentions) are a standard for enabling cross-site conversations.
Users can send mentions to other sites when the link to them, the other site can choose how to display the mention on their page.

- [https://www.jayeless.net/2021/02/integrating-webmentions-into-hugo.html](Guided Steps for setup with Hugo)
- [https://anaulin.org/blog/adding-webmentions/](another example)
- [https://discourse.gohugo.io/t/anyone-for-webmention/10411/5](Hugo Discourse discussion)
- [https://berk.es/2022/10/12/blog-comments-on-a-static-site-via-social-networks/](Alternative using discu.eu)

### Search

- [https://gohugo.io/tools/search/](Hugo Docs)

#### Using Fuse.js

This seems like the best solution, as Fuse.js is more recently updated.

- [https://gist.github.com/cmod/5410eae147e4318164258742dd053993](gist)
- [https://fusejs.io/](Fuse.js docs)

#### Using Pagefind

Uses Rust/WASM to index site after it's built.
Newer than Fuse, with less examples.

- [https://pagefind.app/](docs)

#### Using Lunar.js

This has the most examples, but the libary has been stale since 2020.

- [https://www.npmjs.com/package/hugo-lunr](hugo-lunar npm package)
- [https://lunrjs.com/](lunar.js site)
- [https://gist.github.com/sebz/efddfc8fdcb6b480f567](gist using lunar.js with hugo and grunt)

## TODO

- [x] Scaffold Styles
  - [File structure](https://matthewelsom.com/blog/simple-scss-playbook.html#file-structure)
- [ ] Create 404 page
- [ ] Create robots.txt
- [ ] Headers
- [ ] Redirects
- [ ] About Page
- [ ] Projects Index
- [ ] Writing Index
- [ ] A11y Check
- [ ] Webmentions
- [ ] Code Syntax Highlighting
  - [Select color](https://xyproto.github.io/splash/docs/all.html)
- [ ] MathJax
  - [ ] Add font
  - [ ] Configure a11y
- [ ] Search
