# breakout-voice-controlled

a voice controlled game of breakout made using p5.js and ml5.js

[p5.js sketch](https://editor.p5js.org/mushahidq/present/7FY-AOloT)

## Inspiration

I wanted to work on a unique game and modifying a classic game like breakout is always fun so I decided to go with a whacky game with voice commands

## What it does

It is a game of breakout in which the paddle can be controlled by saying `left`, `right`, `go` and `stop`

## How I built it

I used p5.js for making the game first since it is a great library for creative coding.
Then I used ml5.js's pretrained model to implement voice commands in the game

## Challenges I ran into

The keyboard commands are still kept since the voice commands are not calibrated properly
Given the time constraint I was not able to train my own machine learning model which I planned on doing since the estimated training time was a few hours which left me very little time to fine tune the model and other game parameters

## Accomplishments that we're proud of

I remade a classic game and it's still fun although it is much more fast paced than the original

## What I learned

How to train a ml model to recognize voice commands

## What's next for Breakout but Voice Controlled

I plan to train my own model and use that in the game since ml5.js has support for custom models