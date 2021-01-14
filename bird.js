class Ball {
    constructor(x, y,w,h) {
      var options = {
          'density':2.0,
          'frictionAir':1
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      this.image=loadImage("Superhero-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    //  var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
     // rectMode(CENTER);
    //  strokeWeight(3);
      //stroke('lime');
      imageMode(CENTER);
			image(this.image, 0,0, this.width, this.height);
      pop();
    }
  }