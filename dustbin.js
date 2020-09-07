class dustbin{
    constructor(){
       var options={
           isStatic: true
       }
       this.side1 = Bodies.rectangle(1150,640,200,20,options);
       this.side2 = Bodies.rectangle(1050,600,20,100,options);
       this.side3 = Bodies.rectangle(1250,600,20,100,options);
       World.add(world, this.side1);
       World.add(world, this.side2);
       World.add(world, this.side3);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(1150,640,200,20);
        rect(1050,600,20,100);
        rect(1250,600,20,100);
    }
}