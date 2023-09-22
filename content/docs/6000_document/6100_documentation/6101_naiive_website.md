---
weight: 6101
title: "NAIIVE Website"
description: "Basic Documentation"
icon: "article"
draft: false
tags: ["Documentations"]
---
---

### Thread

- **weight** : `int` # thread weight for indexing
- **title** : `string`
- **icon** : `string` icon path. ref <https://fonts.google.com/icons>
- **description** : `string`
- **lead** : `string`
- **date** : `date`
- **lastmod** : `date`
- **draft** : `bool`
- **images** : `array`
- **toc** : `bool`

#### Add Alerts

Page alerts can be added to your markdown using the following shortcode:

```go
{{</* alert text="This is the default alert. It consists of a default theme colour and icon." /*/>}}
```

{{< alert text="This is the default alert. It consists of a default theme colour and icon." />}}

- **context** : `success`, `danger`, `warning`, `info`, `primary`, `light`, `dark`
- **icon** : Custom Emoji icon

Example of context alert using all parameter:

```go
{{</* alert context="info" icon="👌" text="This is an example of alert with an <strong>info</strong> context. It consists of the info theme colour and icon." /*/>}}
```

{{< alert context="info" icon="👌" text="This is an example of alert with an <strong>info</strong> context. It consists of the info theme colour and icon." />}}

by using [paired shortcode](https://gohugo.io/content-management/shortcodes/) with the `%` delimiter[^2] you can render Markdown and HTML inside an alert:

```go
{{%/* alert icon="🛒" context="success" %}}
This ***paired shortcode*** alert contains a **markdown** list and header:

#### My Shopping List:
1. Tomatoes
2. Bananas
3. Pineapples

and a sentence <em>styled</em> using <strong>HTML</strong> tags such as \<strong\> and \<em\>
{{% /alert */%}}
```

{{% alert icon="🛒" context="success" %}}
This ***paired shortcode*** alert contains a **markdown** list and header:

#### My Shopping List

1. Tomatoes
2. Bananas
3. Pineapples

and a sentence <em>styled</em> using <strong>HTML</strong> tags such as \<strong\> and \<em\>
{{% /alert %}}

[^2]: [Shortcodes with Markdown - gohugo.io](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown)

### Info

NAIIVE website is utilizing [Hugo](https://github.com/gohugoio/hugo) and [Lotus Docs](https://github.com/colinwilson/lotusdocs) as a theme
