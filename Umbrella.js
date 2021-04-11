class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png" );
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.image2 = loadImage("Walking Frame/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount<100){
        animation(this.image,pos.x,pos.y+70,20,30);
        }else{
       // if(frameCount>100){
            image(this.image2, pos.x, pos.y+100, 600, 800);
            //animation(this.image, -100000, 200);
        }
    }
}

