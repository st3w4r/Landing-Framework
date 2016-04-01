# Landing-Framework
Build your landing page with blocks.

Add, Remove, Tidy, like you want!

## Block

What is a Block?
A Block is a part of page, a page is composed of multiples blocks, a block it's same as section.
Each block is told about same subject.

Schema:

| Landing Page |
| :------------- |
| Block Header |
| Block Content |
| Block Content |
| Block Footer |

	|    Page      |
	| ____________ |
	||   Block    ||
	||  (Header)  ||
	||____________||
	| ____________ |
	||   Block    ||
	|| (Content)  ||
	||____________||
	| ____________ |
	||   Block    ||
	|| (Content)  ||
	||____________||
	| ____________ |
	||   Block    ||
	||  (Footer)  ||
	||____________||

A block is composed of:

- Content: Markdown
- Layout: HTML
- Style: CSS
- Script: JS

##### Content

Content is composed of Key and Value, keys is variables to include in layout and value is texts.

Exemple `content.md`:

	---
	layout: content.html
	# Content
	content_title: The amazing startup!
	content_detail: We're the best
	content_cta: Click Here!
	---

##### Layout

The layout is a structure of a block, is contain the html balises and the keys of content texts.

Exemple `content.html`:

	<section class="bloc bloc_1">
		<div class="bloc_content">
			<h3>{{content_title}}</h3>
			<p>{{content_detail}}</p>
			<button>{{content_cta}}</button>
		</div>
	</section>

##### Style

The style is the css part, each block have your own css.

Exemple `content.css`:

	.bloc_1 { background: #ddd;}
	.bloc_1 h2 { padding: 64px 0px; font-size: 32px;}
	.bloc_1 .column { display: inline-block; vertical-align: top; width: 33.333%;}
		.bloc_1 .column img { width: 75%;}
		.bloc_1 .column p { padding: 16px; font-size: 16px;}

##### Script

The script is a javascript function for animation, tracking click or other stuff.

Exemple `script.js`:

	var blocs_1_titles = document.querySelectorAll(".bloc_1 h2");

	for (var i = 0; i < blocs_1_titles.length; ++i)
	{
		blocs_1_titles[i].onclick = function()
		{
			this.style.color = "#c55"
		}
	}

## Architecture

Landing Framework is based on Metalsmith, a static site generator use file system and plugins.

Multiples steps is needed to build your Landing page.
The first is build your blocks.
The second is build your page with blocks list.

Directories:

	- blocks_layouts
	- blocks_src
	- blocks_build
	- lists_src
	- lists_build
	- src
	- src/scripts
	- src/styles
	- src/img
	- build

# Add new block

For add a new block.
Add html file in `blocks_layouts`
Add md file in `blocks_src`
Add css file in `src/styles`
Add js file in `src/scripts`
