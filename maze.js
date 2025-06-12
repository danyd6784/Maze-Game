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
function createGrid(gridDimension){
    let gridArray = [];
    for (let i = 0; i < gridDimension; i++){
        //push new array filled with Arbitrary character to every slot
        gridArray.push(Array(gridDimension).fill("O"));
    }
    return gridArray;
}

function main(){
    console.log(createGrid(4));
}
main()