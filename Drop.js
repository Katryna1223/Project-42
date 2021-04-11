class Drop{
    constructor(x, y){
        var options = {
            restitution: 0.2,
            friction: 0.1,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.radius = 3;
        World.add(world, this.body);
    }
    update(dropCurrent){
        if(dropCurrent.position.y>displayHeight+100){
            Matter.Body.setPosition(dropCurrent, {x: random(0, displayWidth), y: random(-50, -4)});
        }
    }
    display(){
        stroke("lightblue");
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}