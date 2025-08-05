---
date: 2023-04-01 00:00:00 -0400
layout: post
title: Reality Field
published: true
categories:
 - work
tags: Virtual Production, cine, C++, tools, openFrameworks
thumb: /thumbs/realityfield.jpg
poster_img: /img/realityfield.jpg
header_img_width: 1221
header_img_height: 899
lang: en
---

I was in charge of a major refactoring and code architecture redesign of the [Reality Field](https://loledvirtual.gumroad.com/l/realityfield) software from [LOLED Virtual](https://www.loledvirtual.com/)

Reality Field is a utility designed for virtual production environments. It acts as a funnel for the many different protocols used by cinema cameras and camera trackers, unifying them into a format that is easy to integrate into the broader workflow.

The main objective was to clean up the entire codebase: abstract functionality as much as possible, eliminate redundancy, optimize performance, ensure long-term maintainability, add numerous features, and fix bugs from the original implementation. This also involved extensive work with multithreading to maximize speed and the integration of various protocols and APIs.


The UI was developed by [Manuel Molina](https://github.com/moebiussurfing/) using his addon [ofxSurfingImGui](https://github.com/moebiussurfing/ofxSurfingImGui), an extension of [ofxImGui](https://github.com/jvcleave/ofxImGui/tree/develop) which itself is based on [ImGui](https://github.com/ocornut/imgui).

<iframe width="560" height="315" src="https://www.youtube.com/embed/I07uBXCfgbY?si=nhdIZzMjUSxGMmFJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Link to the RealityField's page](https://loledvirtual.gumroad.com/l/realityfield)
