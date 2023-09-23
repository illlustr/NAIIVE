---
weight: 2001
icon: "smartphone"
tags: ["Software", "Mobile"]
title: "AISE"
description: "Artificial Image Sketch Editor"
---

{{< alert context="warning" text="this thread is mark as work in progress." />}}

### General

AISE is an software build in [godot engine](https://godotengine.org/) that provide user with various tools to create / modify images, it design for mobile application and initially was made for attempt to integrate the latest technology of artificial intelligent.

#### Features

{{< tabs tabTotal="3">}}
{{% tab tabName="Artificial Intelligent" %}}

- Use [Stable Diffusion](https://github.com/Stability-AI/StableDiffusion)
- Served by [AI Horde](https://stablehorde.net/)
  - Models
  - Text to Image
  - Image to Image
  - ControlNet
  - Tiling
  - & More
- LoRA by [Civit AI](https://civitai.com/)
- Style Prompt injection using [CheatSheet](https://github.com/SupaGruen/StableDiffusion-CheatSheet/tree/main/src)

{{% /tab %}}
{{% tab tabName="Online" %}}

- Discovery (Social)
- Reporting Tool
- Version Checking
- Translation [Google Translate API](https://cloud.google.com/translate/docs/reference/rest/)
- Image Optimization [Resmush API](https://resmush.it/)

{{% /tab %}}
{{% tab tabName="Offline" %}}

- image editing
- sketch
- gallery

{{% /tab %}}
{{< /tabs >}}

---

#### Motivation

AISE initially build for only limited amount of time (max 1 day), where the goal is to integrate latest technology of Artificial Intelligent as fast as possible for proof of concept and as a basic design practice for Mobile devices.

but as the development & more research been made, we decide to expand it to fully usable tool for everyone to use.

##### Problem

Currently Artificial image generator is expensive, where the user require a powerful GPU or pay some amount of money to make it 'usable', not to mention where if user may get some of it for free, often user need to sacrifice something in return like watching ADs or Providing their data for unknown use.

it is understandable why developers require user to pay, watch ADs, or giving away their data since operating this Artificial Intelligent require huge amount of money where they need to serve hundred if not million amount of request

---

#### Resources
{{< table "table-hover" >}}
| url | type | description |
|-----|------|-------------|
| [Itch.io](https://naiive.itch.io/aise) | `page`, `HTML5` | executable & more user friendly explanation |
| [Android](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_android.apk) | `installer` as `apk` | target platform |
| IOS | N/A | target platform |
| [Windows](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_windows.zip) | `portable` as `exe` in `zip` | for testing, main development operating system |
| [MacOS](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_mac.zip) | `unknown` as `zip` | for testing, untested / reported |
| [Linux](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_linux.zip) | `portable` as `x86_64` in `zip` | for testing, untested / reported |
{{< /table >}}

---

### Additional

#### Modules

from developing AISE we create & introduce some new and refined component & class we can share and utilize in the furute

{{< table "table-hover" >}}
| name | type | description |
|------|------|-------------|
| `stable_horde_api` | `resources` | stable horde APIs wrapper with helper class, it has `resume` method that will try to retrive the last known `task` |
| `texture_showcase` | `.tscn` | iterate & animate part / position from atlas texture. |
| `texture_dock` | `HTTPRequest` | optimize, download, cached image from internet in batch and assing it to the requested node. |
| `google_translate_api` | `HTTPRequest` | google tanslate APIs Wrapper, contain necessary helper. |
{{< /table >}}

#### Core

we also update our Core framework to make it more universal

{{< table "table-hover" >}}
| name | description |
|------|-------------|
| `file_panel` | cleaned up, & add touchscreen support |
| `theme` | cleaned up, add shadow, consistency adjustment |
{{< /table >}}

---

AISE use AI Horde a crowd sourced distributed cluster of Image generation workers and text generation workers. if you like consider joining the horde yourself!

