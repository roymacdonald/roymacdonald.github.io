---
layout: post
date: 2015-06-01 12:10:00
categories:
 - work
tags: 
thumb: /thumbs/byb.jpg
---

# Backyard Brains finger muscles analysis app.

Tim Marzullo, one of the [exceptional] brains behind [BackyardBrains](http://backyardbrains.com) asked me for some help. He was using five of theirs muscle spike interface, stacked together and conected to a single Arduino. With several electrodes stuck into his fore arm he was able to get the signals of the muscles that control each finger. Just using some very simple rules on the arduino and threshold values he was able to trigger an LED when any of the fingers moved. 
The problem here was that the he was setting the threshold by hand, actually by the very tedious method of looking at the serial output of the arduino in order to catch more or less where the threshold should be, hence by a lot of trial and error.
The idea was to make a piece of software, that would run idealy on the Arduino (which didn't happen), that could guess these threshold values by itself just using a very simple and guided training. BackyardBrains has several pieces of sortware to be used in conjution with their neuroscience kits, all of these opensourced and available in their github account. Almost all of these were written on Processing. I decided to write my own using openFrameworks as I felt more comfortable in it and could be opensourced as well. It should be published any time soon.


### Muscle Spike detection
As each person is different from each other, there is the need for a custom setting for each. Placing the electrodes might differ on each person, hence the signals that these receive will be different. Yet the electrical signals sent over our neurons to each muscle all behave in a similar way. So when ever a muscle needs to be contracted the electrical signal has a very characteristic peak followed by a decay phase. If the muscle is to be kept tight after the initial spike, the signal holds at about half the value of the peak and once released it continues to decay to the resting state, which usually is zero or very close to it. (This is very much like ADSR syths! a lot of crazy ideas come to my mind!). Detecting this spikes is sort of trivial, just like detecting percusive sound on an audio signal. I just added a few more rules to make this detection a bit more robust and at the same time sensible enough, as these spikes can have a wide range of values. These electrical signals seemed to behave very much the same on all the tested subjects, so theres no need of tweeking parameters for each one.

### Finger muscle signal isolation

In order to know which finger was being moved we decided to use some machine learning. A very easy and short training has to be performed. The software guides the user and tells him to move a certain finger a few times, each time a peak is detected the values of all the electrode readings are associated to a particular finger. This the goes to a machine learning algorithm as a training instance. Once the training is done for all the fingers the software is ready for detecting the finger movements. When the detection is running it only "asks" to the machine learning algorithm when a peak is detected in the signal.

### Hacker hand

The final idea was to use the BackyardBrains product called Hacker Hand. It is just a robotic hand that uses servos to control each finger. If it is attached to the arduino, the software instruct to move a finger when ever it is detected from the incomming muscular signals.

### Further develop

I really enjoyed this project. I learned a lot and a lot of ideas came into my mind, to further develop the software as well as to connect muscular signals to other things.
-Controling a synths AttackDecaySustainRelease controls with the spikes from the muscles, in order to somehow achieve more control over the sounds while playing.
-Using a Leap Motion sensor to train the machine learning algorithm, so instead of just knowing if a finger is moved or not, the algorithm can know how much is being moved, and hopefully it will be able to predict this value just from the muscles signal.



