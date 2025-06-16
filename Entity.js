class Entity {
    constructor() {
        this.__x_coordinate = 1;
        this.__y_coordinate = 1;
    }
    constructor(x, y){
        this.__x_coordinate = x;
        this.__y_coordinate = y;
    }
}

class Player extends Entity{
    moveLeft(){
        this.__x_coordinate--;
    }
    moveRight() {
        this.__x_coordinate++;
    }
    moveDown(){
        this.__y_coordinate++;
    }
    moveUp(){
        this.__y_coordinate--;
    }
}