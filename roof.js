class roof{
constructor(x,y){
    var options={
  'isStatic': true  
    }
    this.x=x;
    this.y=y;
    this.width=800/2;
    this.height=30;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    pop();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
}

}