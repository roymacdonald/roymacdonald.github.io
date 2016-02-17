---
layout: post
date: 2015-03-01 12:10:00
categories:
 - projects
tags: live-visuals
video_gdrive: https://drive.google.com/file/d/0B5mz90wE4rsMOFdJUjFsLU5qcWc/preview
video_width: 958
video_height: 538
thumb: /thumbs/farmacos.jpg
---

# Live Visuals Farmacos Lollapalooza 2015

I was asked by the chilean band [Fármacos](http://www.ffarmacos.com/) to help them with the visuals for their show in the Lollapalooza Chile music festival.
They wanted something simple and abstract. Mainly geometric shapes. No colors.

I've used Quartz Composer (QC) for several years, but as years pass, new OS versions come out and no QC updates come to light, the performance and stability of QC has decreased immensely. I had some realy bad experiences with QC crashing in the middle of a show so I decided to build my own visuals system.

I coded this system using openFrameworks, and made it modular and extensible. It mainly allows you to nest different transitions for something you want to draw. Then you just trigger this animations by hand or based on BPM. The cameras also had some parameters that could be animated. It worked really well, yet the GUI needs more love. 
I'll push it soon to github as the project needs a bit of cleanup to make it useful to anyone.
