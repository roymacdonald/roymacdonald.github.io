---
date: 2020-08-21 00:00:00 -0400
layout: post
title: StyleGAN mixing console
published: true
categories:
 - projects
tags: RunwayML, Residency, Artist-In-Residence, StyleGAN, GAN, AI, Machine Learning
thumb: /thumbs/StyleGANMixer.jpg
lang: en
---

Between October 2019 to February 2020 I spent my time in New York City, as a Something-In-Residence at [RunwayML](https://runwayml.com/). 


## Context

[GAN](https://en.wikipedia.org/wiki/Generative_adversarial_network)s have become very popular recently, particularly [StyleGAN](https://en.wikipedia.org/wiki/StyleGAN), as a method for creating photorealist synthetic images, which are particularly good with human faces. As such, Latent Space interpolation, a technique for visualizing some of the options available from what the GAN has learned has become a quite common visualization method.

The following is a video that shows Latent Space Interpolation using StyleGAN.


<iframe width="560" height="315" src="https://www.youtube.com/embed/djsEKYuiRFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Understanding

When looking at how this technique works I realized that it was simply using [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) -which is a very common algorithm used in computer graphics for generating pseudo-random numbers that smoothly change from one to the next- to smoothly change each of the 512 parameters that these GANs have. 

As I wanted to play with this parameters I thought of  controlling these with something like a sound mixing console, with 512 vertical faders, where each controls a single parameter of the GAN.

![Sound Mixing console]({{site.url | append: "/img/StyleGAN_Mixer/ssl.jpg"}})

## Experiment

I initially made this experiment using the regular interface between RunwayML and p5js. But then I ported it to use [RunwayML's Hosted Models](https://runwayml.com/web/) feature -which is at not publicly available at the time of writing this-, that allows you to use your RunwayML's models inside regular websites, without needing to download and install the RunwayML app. It is really nice. This is what allows me to have this experiment embedded in this web page. :D

This experiment allows the user (you) to control each of the 512 different parameters that StyleGAN has.

* At the left is the generated image. 
* Below the image are 512 grey vertical bars (sliders), one for each parameter. 
* Drag up and down any of these sliders to modify the single parameter that each control. 
The image will be updated to reflect these changes. 

* If you drag across the sliders you can "draw" their positions.

* Be patient as the changes happen quite fast but not instantly.
* When you first run it the server might need to start so it can take about 30 seconds to start.
* At the right of the image you can see the current status of the server.
* There are 4 buttons, labeled "Random", "Zero", "Min", "Max", "Perlin Noise" which will set some values to the sliders, as it follows:
	* "Random" : Assigns a different random value to each parameter.
	* "Zero" : Sets all the parameters to zero, which actually is the middle position.
	* "Min"  : Sets all the parameters to -1, the lowest possible value for the parameters.
	* "Max"  : Sets all the parameters to 1, the Highest possible value for the parameters.
	* "Perlin Noise" : Sets the values using Perlin Noise. These will be random-ish but these will change smoothly between each parameter.
 * You might find it more convenient to use this experiment without all the rest of things in this website. Click [here](/styleGAN_Mixer.html) to go there.



<div class="inlinestyleGAN">
<iframe class="inlinevideo-iframe" src="{{site.url | append: '/styleGAN_Mixer.html'}}" frameborder="0" scrolling="no"></iframe>
</div>



## Conclusion

At the time I did this and showed it to the people at RunwayML, most said that they had not seen an interface like this for navigating the latent space and they liked it very much.
As well, as far as I know it had not been done. 

This interface allows to see in much better detail how the model works, and you can see that each parameter does not control a specific feature but rather a more undefined one. Yet after fiddling with it a bit you will find patterns of changes and certain areas  in the faders that controlled a specific feature (I remember having found one that, when changed it added or removed glasses from the resulting image). Usually you need to move together a few adjacent sliders in order to have a larger effect over the image generation, yet sometimes you can get quite dramatic changes by slightly moving a single one. Go on and explore it.

Another thing you can perceive are the limits of machine learning in the form of visual artifacts. The model does not really understand what a human face (or what ever thing you used for training it), it simply holds statistical values about how all images of the training data are related. As such you can see strange things happening, like almost appearing earrings or eye glasses. The model does not know what an earring or eye glass is and that it needs to be able to exist in real space, instead it just has the ability to infer what an image should look like given the training data and the parameters used for producing it, which means that the laws of real-world space don't need to apply.

Using javascript proved to be really nice for experiments as this one as it required very short code, as all the requests to RunwayML are made through an http request, which are native to javascript as well as the response format, JSON, so there was no need to parse or use special libraries for such. You can inspect the Javascript code that drives this experiment [here](/stylegan-transition.js)
 
I hope that this small tool allows you to both have fun and get a better understanding on how GANs work.

I also did some other experiments while being Resident at RunwayML which you can read [here](https://roymacdonald.github.io//projects/2020/08/19/How_NOT_to_train_your_GAN.html)

. 🙂 


