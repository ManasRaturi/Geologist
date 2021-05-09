class Rubber{
  constructor(x,y,z)
  {var options={
    'restitution':0.5,
	'friction':0.3,
	'density':1

  }
	this.x=x
	this.y=y
	this.z=z  
  this.body=Bodies.rectangle(x, y, z, options);

 World.add(world,this.body);
}
display(){
	var pos=this.body.position;
	var angle=this.body.angle;
	push();
	translate(pos.x, pos.y);
	rectMode(CENTER);
	strokeWeight(4);
	stroke('black');
	fill('black');
    rect(0,0,this.width,this.height)
	pop();
}
}


















