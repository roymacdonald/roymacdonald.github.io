---
date: 2020-08-19 00:00:00 -0400
layout: post
title: How NOT to train your GAN
published: false
categories:
 - projects
tags: RunwayML, Residency, Artist-In-Residence, StyleGAN, GAN, AI, Machine Larning
thumb: /thumbs/GAN.jpg
lang: en
---

Between October 2019 to February 2020 I spent my time in New York City, as a Something-In-Residence at [RunwayML](https://runwayml.com/). 

Among other things I did a 3 experiments with the by-then unreleased [GAN](https://en.wikipedia.org/wiki/Generative_adversarial_network) training feature that RunwayML had. Now it is available to anyone. It particularly uses the [StyleGAN](https://en.wikipedia.org/wiki/StyleGAN) model. 

## Experiment #1

**Context**

Just after I left Chile and before starting my residency at RunwayML a [huge Chile social revolt begun](https://en.wikipedia.org/wiki/2019%E2%80%9320_Chilean_protests) (still ongoing, currently on standby because of COVID-19). This kept me quite distracted from the residency at RunwayML. I wanted to explore RunwayML’s tools to produce a socially aware, critical and timely project but could not figure it out. Yet, as I wanted to train a GAN I needed images; the images of Chile’s President Sebastián Piñera were constantly appearing while drifting though the internet and social media. So I decided as an act of protest to train a GAN on him, but in the wrong way. 

In order to get “good” results from any kind of ML process you need to teach it “correctly”. StyleGAN, the particular GAN that RunwayML allows you to train, it is not different.
If you want to train it on faces, in order to get “good” and photo-realistic results you need to use images of faces that are as similar as possible; same pose, similar illumination, have all the faces aligned so the features are in the same coordinates, etc. The least amount of unwanted variation is best. 
This is how you should do it to get a “good” result. Now how to get a “bad” result that it is still good in some other twisted (artistic?) sense? Easy, train it wrongly but not too much.

**Step 1. Getting images.**

In order to train the GAN, I did a Google image search for the word “Piñera” and took the first 500 images. I used [this](https://serpapi.com/images-results) service which returns a [JSON](https://en.wikipedia.org/wiki/JSON) file with the results instead of getting these through the regular interface. I wrote a [short bash script](https://gist.github.com/roymacdonald/fc808144d46fc499d654d05209f2495a), which searches for all the lines containing `"original":` as it was the keyword in the JSON file containing the URL of the original image, the one I wanted. Then I use [c](https://en.wikipedia.org/wiki/CURL)[URL](https://en.wikipedia.org/wiki/CURL) to download each one of these.

**Step 2. Finding faces and cropping.**

Among the results I got most were images of Chile’s president, but not all, and these were all kinds of images, close ups, full body, alone, with more people, different facial expressions and poses, etc. I made an app using [openFrameworks](http://openframeworks.cc/), that would find only faces that were front facing -which is one of the most basic face finding algorithms-, then crop and normalize these, so all the faces of each cropped face were aligned. You can find the [code for it here](https://github.com/roymacdonald/faceCropAndNormalize)

This step was the improper one, as I only took care of aligning faces so I would get as a result an image that resembled a face but without making sure that each image was actually the person I wanted nor that it was in the correct pose or anything else. I did not want to go through an exhaustive process of hand picking each image or making a very complex workflow in order to filter these, I just wanted what Google gave me, filtering the least possible, in order to only have normalized faces.

The following are all the images I used for training.

![](https://paper-attachments.dropbox.com/s_21F393265B10C06E160C3C058466E7B7B53C6C1210A89C67C03DC15FE1B7A8B2_1597020051999_gridIMGS.jpg)


**Step 3. Training StyleGAN.**

This one was easy. Simply feeding the images to RunwayML and let it run for a while (I think it was about 3 hours) and… *voila!*

The following are some of the images produced by it:


<div class="galery">
     {% for img in site.data['piranas'] %}
  		<div class="galery_thumb">
  		<a href="{{site.url}}{{img.img}}" data-lightbox="img-set" data-title="img">
  		<img src="{{site.url}}{{img.thumb}}" width="100%" height="100%"/>
  		</a>
  		</div>
  	{% endfor %}
  </div>




The results were great, I mean very bad from the “correct” point of view, but I really like the images as these all are some kind of representation of the president, with a painting-look and a resemblance to [Freddy Krueger](https://es.wikipedia.org/wiki/Freddy_Krueger) (which I find quite fit for all the hell that this president has brought and been unable to manage diligently).

Another of the many super nice features RunwayML has is that you can share your trained StyleGAN. This one is named Pirañas. 

The following is the training video of it:

<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449852980" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>


## Experiment #2

So now I thought, if the idea is to have a data set with the least possible unwanted variations, then that data set should be only copies of the same image. So I simply copied the same image 500 times and used these to train the GAN.

I was already fed up with Piñera so I chose not to use his image anymore.

I found a nice photo of my niece I had taken recently during a family trip, which I decided to use.

The original image is the following.


![](https://paper-attachments.dropbox.com/s_21F393265B10C06E160C3C058466E7B7B53C6C1210A89C67C03DC15FE1B7A8B2_1597021068866_domi+copy+2.png)


Duplicated 500 times and used to train StyleGAN produced the following



![](https://paper-attachments.dropbox.com/s_21F393265B10C06E160C3C058466E7B7B53C6C1210A89C67C03DC15FE1B7A8B2_1597021152742_Training-Experiment-8-+-+December+4th+2019+at+10.33.46+AM.jpeg)


Not bad for a synthetic image yet totally useless as a method for re-creating (compressing-decompressing) the original image. I was suspecting something like this would happen, but as obvious that it might have seemed I thought it was a necessary experiment. There are so many cases in history where great discoveries have been done simply by doing what everyone skipped because its result was obvious, yet nobody had tried it before. As such I like to do such kind of obvious as well as “wrong” things.

In the following video you can see how the images from the starting point converge into the image of my niece.

<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449864961" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

 About halfway through the video some really interesting and creepy looking faces appear.
 As the following. (this is probably the only interesting thing about this mostly uninteresting experiment)

![](https://paper-attachments.dropbox.com/s_21F393265B10C06E160C3C058466E7B7B53C6C1210A89C67C03DC15FE1B7A8B2_1597022621420_vlcsnap-2020-08-09-21h21m24s795.png)


 

## Experiment #3

Now, the mathematical representation of a specific face must be quite large and complex, so what would happen if instead I would try the simplest image possible. A completely white image did not sound so interesting so I opted for a black square in a white background.
I did the same thing as before, copy the image 500 times and feed it to RunwayML.
I thought that it would easily converge into the square, just as it did with the image of my niece, but I was wrong.

![Black square over white. Copied 500 times to make the data set feed into StyleGAN](https://paper-attachments.dropbox.com/s_21F393265B10C06E160C3C058466E7B7B53C6C1210A89C67C03DC15FE1B7A8B2_1597022942565_sq+copy+2.png)

  

Before continuing I need to explain something about the **training** **starting** **points.**

In extremely reductionist terms, in order to train a GAN, its algorithm's variables are initialized with placeholders, in the form of noise (random data). During training, these placeholder values are modified -a small amount on each training step- and it generates an image using these variables. The resulting image is then compared to the trainning data. If such modification gives a result that resembles more to the training data than before, the modification will be kept, other wise it will be ditched. Thus, this takes an enormous amount of computational power as it is essentially guessing, trying to move in all directions blindly but systematically. The longest part of this process is the beginning, going from noise into something. In order to avoid such long processing times, in RunwayML you have to choose a starting point for the training that it is not noise. You are provided by a series of categories of things commonly used, which can be thought of as faces (people), objects and places. 

In the previous experiment the choice of the starting point was trivial, I chose the people faces (although I should have tried using the other starting points but it costs money). In this experiment there was nothing similar as a starting point to the black square over white. So I simply tried out a lot of these. And now interesting things happened.

The following are the progress videos of these. Watch these in full screen and full quality and resolution, as the details are the nice things.


<!-- https://www.dropbox.com/s/tohvow2c9vo876d/sq_cats.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449865983" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<!-- https://www.dropbox.com/s/a9zee9y3b5tk79v/sq_bedrooms.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449866027" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<!-- https://www.dropbox.com/s/69znflb39hia546/sq_cars.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449865991" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<!-- https://www.dropbox.com/s/aks2bxb3zhb0lfa/sq_portraits.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449866078" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<!-- https://www.dropbox.com/s/yup6unlw95exg4i/sq_nebulas.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449866122" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<!-- https://www.dropbox.com/s/iv99redoisb3lhj/sq_flowers.mp4?dl=0 -->
<div class="inlinevideo">
<iframe class="inlinevideo-iframe" src="https://player.vimeo.com/video/449866133" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

As you might have noticed the algorithm converged at something quite close to the original image several times but overshot and had then to compensate, so it got into some sort of oscillation around the “correct” result, each time giving different results, which are really interesting. 
But what I found most interesting was what happened during the early steps of each training, where the original data set still had a lot of influence over the result, yet it was producing a shape that was quite close to a square, but these had a special paint like effect that I really like. Even, the one that starts from cats looks like a pencil drawn sketch. :)
Some of my favorites are the following:


![Flowers]({{site.url | append: "/img/HowNotToTrainYourGAN/GAN_sq_flowers.jpg"}})

![Nebulas]({{site.url | append: "/img/HowNotToTrainYourGAN/GAN_sq_nebula.png"}})

![Cats]({{site.url | append: "/img/HowNotToTrainYourGAN/GAN_sq_cats.png"}})

## Conclusion

These were some experiments I made besides the main project I was working on while I was a resident at RunwayML. Were these useful? I am not sure, at least I tried and got some interesting results. I would have liked to try out a lot of other options but each experiment costs money, as it has to be run on a remote server way much more powerful than my own computer, yet I am immensely grateful with the RunwayML team as they allowed to do these experiments. 🙂 


