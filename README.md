# Get All Primes #
![meme](https://i.imgflip.com/1d6g4k.jpg)

## The challenge  ##
Given a number: max, find all the primes that are smaller or equal to it.
Then return them in an array;

## One way to do it: ##
Get/write yourself a function to check if a number is a prime.
Then use it to check all numbers equal or smaller than the max

Then the challenge would essentially become: how do you implement the algorithm 
to check if a number is prime?

## A more interesting way: Sieve Of Eratosthenes: ##
Once you have found a prime number, you can pretty much eliminate
a lot of not primes by multiplying that prime with a series of numbers.

Ex: starting from number 2, you can 2X2=4 which eliminates 4, 2X3=6 which eliminates 6,
2X4 which eliminates 8, etc...

##### A picture is worth small loan of a million dollar: #####
![gif](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

##### For more detail: #####
Wikipedia's article on [Sieve Of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## test it against a huge max ##
go to: lib/spec.js
change 'xit' to 'it' to see what would happen if generating all the primes within 1 million
