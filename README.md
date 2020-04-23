# radio 
Radio is a minimal [Zola](https://github.com/getzola/zola) portfolio theme inspired by [Hyde](https://github.com/getzola/hyde/) and [mdbook](https://github.com/rust-lang/mdBook).

Radio features a versatile nav pane, menu bar, and main content area. 

## Contents

- [Options](#options)
  - [Logo](#logo)
  - [Nav Links](#nav-links)
  - [Section Columns](#section-columns)
  - [Page Columns](#page-columns)
- [License](#license)

## Options

Configure theme.toml with these options: 

### Logo
Set the extra field `radio_logo` to the path, from root, to your graphic logo. 

```toml
[extra]
radio_logo = "/path/to/logo.svg"
```

Note that radio currently scales the logo wildly, so an .svg or high-resolution image is recommended. 

### Nav Links
An array of links, to be displayed in the collapsible nav pane. 
Note that the nav pane will, in the future, show the static site's entire tree -- so don't get too attached to these nav links. 

```toml
[extra]
radio_nav_links = [
    {url = "link1", name = "name1"},
    {url = "link2", name = "name2"},
]
```

### Section Columns
For supersections, how many columns to display the pages of a subsection in.


```toml
[extra]
section_col = 3
```

### Page Columns
How many columns to display the top-level pages of sections and supersections in.

```toml
[extra]
page_col = 2
```

## License
MIT License

Copyright (c) 2020 Kris Keillor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
