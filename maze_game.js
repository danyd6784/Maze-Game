/*
Maze-Game
------------------------
  This game is meant to recreate paper maze puzzles with a randomly generated maze
which the user must complete within a given time period. The maze generated will
fill the entire console window with a bit of padding and place the user at the center
of the maze.
  To win the level, the player must reach the end of the maze, which will always
be in the top right hand corner of the maze and marked by an asterisk character (*).
*/

const { terminal } = require('terminal-kit');
const maze = require('/Maze.js');
const termkit = require('terminal-kit').terminal;
"use strict"

//character set which will be used during maze generation
const character_Icon = '𐙬'


//Define the menu options of the maze game in an array
const menuItems = [
    "Play Game",
    "Settings",
    "Exit"];


termkit.singleColumnMenu(menuItems, (error, response) => {
    let selection = response.selectedText;
    switch (selection) {
        case "Play Game":
            console.log("Now launching the game")
            break;
        case "Settings":
            console.log("Now opening settings");
            break;
        default:
            break;
    }
    process.exit(0);
    });