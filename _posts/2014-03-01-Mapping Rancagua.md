---
layout: default
date: 2014-03-01 12:10:00
categories:
 - work
tags: interactive mapping
thumb: /thumbs/mappingRancagua.jpg
---

#Interactive video mapping Mall Rancagua

Three projectors were used to project over a conical column inside a mall in Rancagua, Chile.
When users standed in a marked spot and looked to the camera placed above the column a photo was taken automatically using face detection, the face was cropped, masked and placed over the characters of an animation. This project was co-developed with [DelightLab](http://www.delightlab.com).
To export the data from the animation made in After Effects I made a script that took all nested transformations and "flattened" them. This exported data was read by an openFrameworks application. I[ published ](https://github.com/roymacdonald/ofxAfterEffectsTransforms)an openFrameworks addon to allows this.
