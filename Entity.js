class Entity {
    constructor(x = 1, y = 1){
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