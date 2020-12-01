---
date: 2020-11-30 00:00:00 -0400
layout: post
title: ofxLineaDeTiempo
subtitle: A new timeline addon for openFrameworks.
published: true
categories:
 - code
poster_img: /img/ofxLineaDeTiempo_poster.png
thumb: /thumbs/ofxLineaDeTiempo.png
lang: en
---

# [ofxLineaDeTiempo](https://github.com/roymacdonald/ofxLineaDeTiempo)

A new timeline addon for openFrameworks.

## Introduction


[ofxTimeline](https://github.com/YCAMInterlab/ofxTimeline) , created by [James George](https://github.com/obviousjim/),  has long been the go-to timeline tool for [openFramworks](https://openframeworks.cc/). It has been modified and tailored numerous times over the years for specific things but current versions are not as accessible as they could be to the beginner user. ofxLineaDeTiempo comes into play in order to fulfill this need, making it easy to anyone to easily utilize a functional timeline with both basic and advanced features. The key is that it requires minimal coding and is deeply connected with ofxGui.

As I could not use ofxTimeline as the name of this addon, ofxTimeline2 sounded boring, and considering that I am a native Spanish speaker it made sense to use a Spanish word instead. **Línea De Tiempo** is the literal translation of **Timeline** into Spanish, hence **ofxLineaDeTiempo**

## IMPORTANT
**This is still a work in progress.** It is working as expected and seems stable, yet it needs more testing. You are very welcome to test and provide feedback, as well as using it on your projects.

## Goals

* Make an usable timeline from both the coder and user points of view.
* Rely heavily on openFrameworks interanal classes and functionalities.
* An `ofParameter` is held by each timeline track.
* As a consequence, `ofxGui` will be an integral part of the addon.
* Behave in a similar usage to `ofxPanel` so the code for it can be directly swapped with an instance of this addon.
* The renderer is a different class which will allow to customize its visual appearance as well as having specialized timeline tracks (ie. video and audio)
* Have an optimized rendering, redrawing only when needed. 
* It can run with or without rendering the timeline, making it perfectly usable in headless contexts.
* Thread-safe, the updating of it can be carried out by any thread. (I need to test and verify this)
* Each ofxLineaDeTiempo instance has its own clock, which allows to have more than a single instance running simultaneously. 

## Thanks
This addon was build ontop of Christopher Baker's ( @bakercp ) excenent adons [ofxMUI](https://github.com/bakercp/ofxMUI), [ofxDOM](https://github.com/bakercp/ofxDOM), and [ofxPointer](https://github.com/bakercp/ofxPointer)

This addon was kickstarted while I was a Resident and Contributor at [COSA](https://www.du.edu/ahss/opensourcearts/) at University of Denver on the winter of 2020. Many thanks to Christopher Coleman @digitalcoleman, director of COSA, who was kind enough to make it happen. :D


## Code
Available [here](https://github.com/roymacdonald/ofxLineaDeTiempo)



