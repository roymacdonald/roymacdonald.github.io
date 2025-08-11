---
date: 2024-06-01 00:00:00 -0400
layout: post
title: AC's Neutrino Cloud
full_title: Agnes Chavez' Neutrino Cloud (of Probabilities)
published: true
categories:
 - work
tags: Agnes Chavez, Firebase, javascript, three.js, 8thwall, generative AR, generative 3d
thumb: /thumbs/neutrinos.jpg
lang: en 
video_vimeo: 1108913400
video_width: 958
video_height: 540
---

While visiting CERN on May 2024, I collaborated with artist Agnes Chavez to envision, conceptualize, and develop an artwork centered on neutrino detectors and quantum physics.

Agnes wanted to work with AR but wasn’t sure how to create 3D objects that truly captured her vision. I proposed a generative system — an approach that, at the time, was rare in AR, especially for 3D content. Relying on my experience, knowledge of available tools, and intuition, I decided to build a generative AR platform from scratch.

My background in particle physics allowed me to quickly understand and distill many of the scientific concepts involved. The generative system “depicts” a cloud of probabilities and the collapse of the wave function. When triggered, it reveals a cone of light inspired by the Cherenkov effect — the same phenomenon observed in neutrino detectors when a neutrino interacts with other particles, producing light captured by the detector’s ultra-sensitive photomultiplier tubes.

Because the project targeted mobile devices, we needed a lightweight application. We chose to work with simple lines and points instead of complex rendering, a choice that also complemented the hand-drawn line aesthetic Agnes envisioned.

When a user taps the screen, they trigger a wave function collapse. Their position in space is recorded and shared in real time with all other participants.

Like any generative system, this one relied on numerous parameters that could drastically change its appearance. While these settings were hidden from end users, they needed to be adjustable for Agnes so she could fine-tune the visuals to match her creative intent. I created a special configuration website where these parameters could be set while seeing the same generative 3d objects on the browser. Because of the UI this was intended for Desktop rather than mobile. Settings would be stored as presets in firebase and automatically pushed to any mobile client running which made it really useful for testing.

This work has been presented at:
* Fuller Lodge Art Center, Los Alamos on June 2024
* Fermilab's Art Gallery from May to August 2025.


[Here are more details about the project](https://agneschavez.com/2024/08/04/neutrino-cloud-of-probabilities/)

