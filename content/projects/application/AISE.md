---
title: "AISE"
type: docs
prev: projects/application
tags: ["Software", "Mobile"]
---

{{< tabs items="Motive,Features,Status,Result" >}}{{< tab >}}

AISE is a software built using [gd.x](https://github.com/naiiveprojects/gd.x/), offering users a suite of tools for image creation and modification. designed as a mobile application, its inception aimed to integrate cutting-edge artificial intelligence technology.

## Motivation

AISE was initially constructed within a limited timeframe, with a maximum duration of one day. The primary objective was to swiftly incorporate state-of-the-art Artificial Intelligence technology for proof of concept and as a fundamental exercise in mobile device design.

Subsequently, as development progressed and further research was conducted, the decision was made to expand its functionality into a fully functional tool accessible for everyone.

### Problem

While Artificial Image Generators have become more accessible to the general public, it remains evident that using such programs can still be costly. Users typically need a powerful GPU or must invest financially to make the software truly "usable." Even when users can access it for free, there's often a trade-off, such as watching ads or providing their data for undisclosed purposes.

This practice is understandable because developers incur significant expenses in operating Artificial Intelligence systems. These costs include not only bandwidth and electricity but also infrastructure maintenance. Moreover, serving hundreds of thousands, if not millions, of requests daily further compounds the financial challenges.

{{< callout type="info" >}}
  Article work in progress.
{{< /callout >}}

AISE use [AI Horde](https://stablehorde.net/) a crowd sourced distributed cluster of Image generation workers and text generation workers. if you like consider joining the horde yourself!

{{< /tab >}}{{< tab >}}

- [Stable Diffusion](https://github.com/Stability-AI/StableDiffusion) Served by [AI Horde](https://stablehorde.net/)
  - Models
  - Text to Image
  - Image to Image
  - ControlNet
  - Tiling
  - & More
- LoRA by [Civit AI](https://civitai.com/)
- Style Prompt injection using [CheatSheet](https://github.com/SupaGruen/StableDiffusion-CheatSheet/tree/main/src)
- image editing
- sketch
- Discovery
- gallery
- Reporting Tool
- Version Checking
- Text Translation [Google Translate API](https://cloud.google.com/translate/docs/reference/rest/)
- Image Optimization [Resmush API](https://resmush.it/)

{{< /tab >}}{{< tab >}}

| platform | status | type | resource | note |
|----------|--------|------|-----|------|
| Itch.io | ✅ | `marketplace` | [website](https://naiive.itch.io/aise) | - |
| Android | ✅Ⓜ️ | `target` `installer` `apk` | [apk](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_android.apk) | - |
| IOS | ⛔ | `target` | - | x-code or CI/CD |
| Windows | ✅Ⓜ️ | `testing` `portable` `exe` | [zip](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_windows.zip) | - |
| MacOS | ✅❌ | `testing` `portable` `64` | [zip](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_mac.zip) | req notarized |
| Linux | ✅Ⓜ️ | `testing` `portable` `x86_64` | [zip](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_linux.zip) | - |
| PWA | ⛔ | `testing` `HTML5` | [website](https://github.com/naiiveprojects/res/blob/main/AISE/AISE_prod_windows.zip) | cross-origin required |

[**status definition ▶️**](../../../information/documentation/project_status/) `🟢In Progress` `⭕On Hold` `❌Canceled` `✅Completed` `🟡Delayed` `⛔Blocked` `⚪Reopened` `Ⓜ️Monitoring`

{{< /tab >}}{{< tab >}}

| name | type | description |
|------|------|-------------|
| `stable_horde_api` | `new` `resources` | stable horde APIs wrapper with helper class, it has `resume` method that will try to retrieve the last known `task` |
| `texture_showcase` | `new` `.tscn` | iterate & animate part / position from atlas texture. |
| `texture_dock` | `new` `HTTPRequest` | optimize, download, cached image from internet in batch and assign it to the requested node. |
| `google_translate_api` | `new` `HTTPRequest` | google translate APIs Wrapper, contain necessary helper. |
| `file_panel` | `.tscn` | add touchscreen support |
| `theme` | `resources` | add shadow, consistency adjustment |

{{< /tab >}}{{< /tabs >}}
