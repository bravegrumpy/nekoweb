---
layout: base.liquid
title: Blog
eleventyNavigation:
    key: Blog
---

<details>

<summary>Table of Contents</summary>

***

{{ collections.all | eleventyNavigation | eleventyNavigationToMarkdown }}

***

</details>

{% for post in collections.blog %}
## [{{ post.data.title }}]({{ post.url}})

{{ post.content }}
{% endfor %}