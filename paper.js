class paper
{
	constructor(x,y)
	{
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
            
            
        }
        this.image=loadImage("paper.png")    
        this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      
     
      World.add(world, this.body);
        

    }
    display(){
      var pos = this.body.position
			push()
      translate(pos.x , pos.y)
      rotate(this.body.angle)
			imageMode(CENTER)
			
			image(this.image,0, 0, this.width, this.width);
      pop()
      
    }

}