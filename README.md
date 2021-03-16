# Wheel-of-fortune
# Wheel of Fortune: Putting it All Together

For this lesson, we're going to build on everything you've learned during this unit by building a simplified version of America's favorite game show: Wheel of Fortune! Here's how it will work. 

1. Your application should choose a random word. You can use the `getRandomWord` function in the starter code. When called with no arguements, the function will return a random word of five letters or more.
2. Display the word to the user using underscores (or empty `divs`) to replace each letter. For example, if the word is "horse", you would dispaly "- - - - - ".
3. There should be a start button. When the user clicks start, reveal any instances of the letters R,S,T,L,N, or E. Using the "horse" example above, we would then display: "_ _ R S E"
4. Via some form, the user can then guess 3 constanants and one vowel. For example, the user might enter "B C D O" and press "Submit Letters". **You MUST validate each field to make sure that they enter a valid letter!**
5. After the user submits their four letters, reveal any instances of those letters. Using the example above, we would then display: "_ O R S E".
6. Finally, allow the user to submit a single guess at what the word is, tell them if they're right or wrong, and reveal the word. 

## Example project

[demo](https://weilyl.github.io/wheel-of-fortune/)

For the Minimum Viable Product, you do not have to work with timers and animations. The demo uses timers as a way to mimic Wheel of Fotune on the TV.

### Bonus

At first, we allow the user to enter 1 guess only. But you should add a feature where they can guess 5 times. After the 5th attempt, reveal what the random word is. Or have a countdown, where a user has 10 seconds to guess as many times as I want.

Some notes to help you as you work through the prompt. 

1. We've given you some basic starter files in this directory - feel free to create additional files as needed. 
2. The exact flow/UI is up to you, but try to give you users feedback as much as possible. For example, let them know which letters have already been guessed. 
3. How you organize the project is up to you, but try to keep your functions neatly organized. 
