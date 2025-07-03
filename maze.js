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

export class Maze{
    constructor(width = 10, height = 4){
        this.__width = width;
        this.__height = height;
        this.__maze = null;
    }
    
    generate(){
        //Implement Prim's algorithm to generate the maze


    }
    clear(){

    }
}