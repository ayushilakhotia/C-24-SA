class CannonBall {
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.r= 30;
        this.body = Bodies.circle(x,y,this.r,option);
        this.image=loadImage("./assets/CannonBall.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }
}