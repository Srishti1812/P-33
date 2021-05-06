class Snow{
    constructor(x, y){
        var options = {
            isStatic : false,
            restitution : 0.4,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }

    update(){
        if(this.body.position.y> height){
            Matter.Body.setPosition(this.body, {x: random(0,800), y: random(0,400)})
        }
    }
}