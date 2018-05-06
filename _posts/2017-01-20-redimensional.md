---
layout: post
date: 2015-10-27 12:10:00
categories:
 - projects
tags: data-viz sfpc
thumb: /thumbs/redimensional.jpg
video_vimeo: 200435042
video_width: 958
video_height: 599
title: REDIMENSIONAL
lang: en
---

Time is often thought, in physics, as our fourth dimension. Time and images, formally speaking, are the building blocks of movies. As images only have two dimensions, time becomes the third dimension of movies. This condition allows us to create a single three dimensional object that represents the whole movie, although because of the opaque nature of the pixels only the external faces of this objects become visible. Just like in medical CT Scans, we can slice this object in order to reveal its internal features. The slices can be on any plane of this object. As we keep on slicing and watching at each slice as a new frame of the movie we become able to watch the  movie from a completely different perspective. The inner workings of the movie shot are revealed somehow; camera movements, actors movements, scenery, or simply strange yet very appealing abstract images. There is an infinite number of possible slices; images become infinite which transcend the original, never changing, movie.


This is an interactive application which allows the user to view any video file as a
three dimensional object made by stacking the video frames. The user can slice this object on any plane. By set a begining and an end plane it will animate the slicing which will have the same duration as the original video piece.
Because of the limited amount of memory on the graphics card, it is only possible to load short pieces of video, so this app will automatically detect scene cuts and load scene by scene.

This application was made using [openFrameworks](http://openframeworks.cc) and its code will be soon available as open source.
