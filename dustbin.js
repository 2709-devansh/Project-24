class dustbin{
    constructor(){
       var options={
           isStatic: true
       }
       this.body1 = Bodies.rectangle(1150,640,200,20,options);
       this.body2 = Bodies.rectangle(1050,600,20,100,options);
       this.body3 = Bodies.rectangle(1250,600,20,100,options);
       World.add(world, this.body1);
       World.add(world, this.body2);
       World.add(world, this.body3);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(1150,640,200,20);
        rect(1050,600,20,100);
        rect(1250,600,20,100);
    }
}
