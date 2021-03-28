function Paddle() {
    this.w = 80;
    this.h = 12;
    
    this.isMovingLeft = false;
    this.isMovingRight = false;
    
    this.pos = createVector(width / 2, height - 20);
    
    this.display = function() {
      fill('#FF6961')
      rect(this.pos.x, this.pos.y, this.w, this.h, height/1.07, 90, 15, 10);
    };
    
    this.move = function(step) {
      this.pos.x += step;
    };
    
    this.update = function() {
      if (this.isMovingRight) {
        this.move(10);
      } else if (this.isMovingLeft) {
        this.move(-10);
      }
    };
    
    this.checkEdges = function() {
      if (this.pos.x < 0) {
        this.pos.x = 0;
      } else if (this.pos.x > width - this.w) {
        this.pos.x = width - this.w;
      }
    };
  }