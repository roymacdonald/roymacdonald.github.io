---
date: 2019-10-16 00:00:00 -0400
year: 2019
layout: post
title: Laser Tools
published: true
categories:
 - code
tags: Laser, ILDA, Activism
thumb: /thumbs/lasertools.jpg
poster_img: /img/lasertools/resistencia.jpg
lang: en
---

Since 2018 I have been collaborating with the Chilean light-art collective [Trimex](https://trimex.cl/), with whom I developed a series of software tools that allow to control ILDA Lasers.

These Laser Tools I developed were intended to process video and generate laser lines that could be overlaid and mapped to a video projection.
As is can be seen in the following videos:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/379093206?color=65c1ac&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<div style="padding:28.13% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/427470871?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<br>
<h2> Laser (and text) as a tool for public manifestation and protest</h2>

With the [huge social protest](https://en.wikipedia.org/wiki/2019%E2%80%9320_Chilean_protests) that happened in Chile from October 18th, 2019 we decided that it would be a good idea to use the laser tools and equipment we as a our form of manifestation in pro of the people's protests. We had access to an ideal spot that would allow to project accross Plaza Dignidad, ground-zero for all the protest, onto a huge corporative bulding. These projections became iconic, yet anonymous, happening every day since the start of the protests for several weeks. 

As the original tools were not inteded to draw typographies, the results were sub-optimal and only very short words could be rendered, as you can see in the following pictures:

<img src="/img/lasertools/unidos.jpg">
<img src="/img/lasertools/sinmiedo.jpg">

Unfortunately I was not in Chile at the time that this happened, so I could not fix it on the spot, yet I was able to grab some code I wrote for another project that was specially made for rendering letters properly and optimize the laser paths for such, allowing it to draw crisp letters with sharp angles and much longer text than before. It took me a few days to nail it as I did not have a laser with me so I had to live test the software via internet while it was actually being projected in the spot. 
The following picture and videos show this new version in use

<img src="/img/lasertools/resistencia.jpg">
<img src="/img/lasertools/resistencia2.jpg">
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/384540090?color=65c1ac&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<iframe width="560" height="315" src="https://www.youtube.com/embed/qRZ_FskRnWw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<h2>Code</h2>
I intend to release the code and compiled versions for anyone to use, yet it is in a super beta state which needs a bit more work. I don't like to release software that is not ready for use.

If you want to use these tools for publicly manifesting and protesting please [contact me](https://github.com/roymacdonald/) and I can share the app and provide help.