"use strict"

const character_Icon = '𐙬'
const topIntersection  = '╦'
const rightEdge = '╣'
const leftEdge = '╠'
const middleIntersection = '╬'
const bottomIntersection = '╩'
const topLeftCorner = '╔'
const topRightCorner = '╗'
const bottomLeftCorner = '╚'
const bottomRightCorner = '╝'
const horizontalEdge = '═'
const verticalEdge = '║'

//Create an equilateral 2d array and populate with arbitrary character
//Note: this is assuming that the grid will always be a square - a neat enhancement would be one that locks the dimensions
//of the console window to a specified height and width and always works off of that. 
//Of course this would be a bit of a gamble because of higher screen resolutions being a bitch to characters and windows
//but maybe would be a great addition to another version of the app
function createGrid(gridDimension){
    let gridArray = [];
    for (let i = 0; i < gridDimension; i++){
        //push new array filled with Arbitrary character to every slot
        gridArray.push(Array(gridDimension).fill("O"));
    }
    return gridArray;
}

function generateRandomX(gridDimension){
    return Math.floor(Math.random() * gridDimension);
}

function generateRandomY(gridDimension){
    return Math.floor(Math.random() * gridDimension);
}

function main(){
    console.log(createGrid(4));
}

main()