function Ball() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 8;
    this.direction = createVector(0.5, 0.5);
    this.vel = createVector(6, 6);
    
    this.display = function() {
      noStroke()
      fill('purple')
      ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    };
    
    this.update = function() {
      this.pos.x += this.vel.x * this.direction.x;
      this.pos.y += this.vel.y * this.direction.y;
    };
    
    this.checkEdges = function() {
      if (this.pos.y < this.r && this.direction.y < 0) {
        this.direction.y *= -1;
      } else if (this.pos.x < this.r && this.direction.x < 0) {
        this.direction.x *= -1;
      } else if (this.pos.x > width - this.r && this.direction.x > 0) {
        this.direction.x *= -1;
      }
    };
    
    this.meets = function(paddle) {
      if (this.pos.y < paddle.pos.y &&
          this.pos.y > paddle.pos.y - this.r &&
          this.pos.x > paddle.pos.x - this.r &&
          this.pos.x < paddle.pos.x + paddle.w + this.r) {
        return true;
      } else {
        return false;
      }
    };
    
    this.hits = function(brick) {
      var distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
      if (distance < this.r + brick.r) {
        return true;
      } else {
        return false;
      }
    };
  }