function Brick() {
    this.r = random(20, 50);
    this.pos = createVector(random(10, width ), random(10, height - 300));
    this.total = random(3, 8);
    
    this.display = function() {
      push();
      translate(this.pos.x, this.pos.y);
      noStroke();
      fill(random(255), random(100, 200), random(255));
      beginShape();
      for (var i = 0; i < this.total; i++) {
        let angle = map(i, 0, this.total, 0, TWO_PI);
        var x = this.r * cos(angle);
        var y = this.r * sin(angle);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    };
}