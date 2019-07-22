# Memory Game Project


## Table of Contents

* [General](#general)
* [How To Play](#how-to-play)
* [Scores](#scores)
* [How Can I Make The Game](#how-can-I-make-the-game)
* [Game Dependencies](#game-dependencies)


## General 

Udacity Front-End Developer Nanodegree Second Project

## How To Play
You can clone or download the hole project
Then open the folder and open index.html file

There are 16 cards contain 8 pairs of cards
Each time you can open 2 cars:
* if they are the same then cards reveal
* if they are not the same then cards hide
Your goal is to reveal all the cards

There is a restart icon if you want to restart immediately

## Scores

Stopwatch will start as soon as you chose your first pair of cards.
And stop when you reveal all the cards.
* You will have 3 stars(maximum) if your steps is less than 15
* You will have 2 stars if your steps is less than 20
* You will have 1 stars if your steps is more than 20

## How Can I Make The Game

I used Udacity provided template of the game

1. I modify the HTML file to add winning notification
2. I modify the CSS file to add style and animation to winning notification
3. I modify the JS file:
	* I made a new set of 16 randoms cards
	* I made the stopwatch and function to count step
	* I made check system if the player guess is right or wrong
	* I made the winning notification to display time, steps and stars
	* I made the restart procedure to reset everything to beginning value

## Game Dependencies
* HTML5
* CSS3
* jQuery
