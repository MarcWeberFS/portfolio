const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  class Particle {
    constructor(canvas, options, delay) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.options = options;
      this.delay = delay;
      this.size = randomInt(options.size.min, options.size.max);
      this.duration = randomInt(options.duration.min, options.duration.max) || options.duration || 10000;
      this.amplitude = randomInt(options.amplitude.min, options.amplitude.max) || options.amplitude || 10;
      this.frequency = randomInt(options.frequency.min, options.frequency.max) || options.frequency || 5;
      this.color = options.color || '#fff';
      this.toleranceX = options.tolerance >= 1 ? options.tolerance : options.tolerance >= .5 ? (1 - options.tolerance) * this.canvas.width : options.tolerance * this.canvas.width;
      this.toleranceY = options.tolerance >= 1 ? options.tolerance : options.tolerance > .5 ? (1 - options.tolerance) * this.canvas.height : options.tolerance * this.canvas.height;
      this.startPosX = options.direction.x < 0 ? this.canvas.width : options.direction.x > 0 ? 0 : this.canvas.width / 2;
      this.startPosY = options.direction.y > 0 ? this.canvas.height : options.direction.y < 0 ? 0 : this.canvas.height / 2;
      this.resetParticle();
    }
  
    resetParticle() {
      this.startTime = Date.now() + this.delay;
      this.startX = this.startPosX + Math.random() * this.options.direction.x * (this.toleranceX + this.size);
      this.startY = this.startPosY - Math.random() * this.options.direction.y * (this.toleranceX + this.size);
      this.duration = randomInt(this.options.duration.min, this.options.duration.max) || this.options.duration || 10000;
      this.endX = this.canvas.width - this.startX;
      this.endY = this.canvas.height - this.startY;
      // Base angle in radians (45 degrees)
      const baseAngle = Math.PI / 4;
      // Random deviation in radians within ±15 degrees
      const angleDeviation = (Math.random() * 0.261799 * 2) - 0.261799 * 2;
      // Final angle considering the deviation
      const angle = baseAngle + angleDeviation;
      this.velocityX = (this.endX - this.startX) / this.duration * Math.cos(angle);
      this.velocityY = (this.endY - this.startY) / this.duration * Math.sin(angle);
      this.opacity = 0;
    }
  
    update() {
      const timeElapsed = Date.now() - this.startTime;
      if (timeElapsed < 0) return; // Waiting for delay
  
      const fadeInDuration = this.duration * .4;
      const fadeOutStart = this.duration - fadeInDuration;
      const fadeOutFinish = this.duration - 100;
      const maxOpacity = 1;
  
      // Update opacity
      if (timeElapsed > fadeOutStart && timeElapsed < fadeOutFinish) {
        this.opacity = maxOpacity - ((timeElapsed - fadeOutStart) / fadeInDuration) * maxOpacity;
      } else if (timeElapsed >= fadeOutFinish) {
        this.opacity = 0;
      } else if (timeElapsed < fadeInDuration) {
        this.opacity = 0.5 + (timeElapsed / fadeInDuration) * 0.5;
      } else {
        this.opacity = maxOpacity;
      }
  
      // Update position considering the wave trajectory
      const progress = (timeElapsed % this.duration) / this.duration;
      this.x = this.startX + this.velocityX * timeElapsed + this.amplitude * Math.cos(progress * this.frequency * Math.PI / 4);
      this.y = this.startY + this.velocityY * timeElapsed;
  
      // Reset particle when animation ends
      if (timeElapsed > this.duration) {
        this.resetParticle();
      }
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.globalAlpha = this.opacity;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }
  }
  
  class ParticleSystem {
    constructor(canvas, options) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.options = options;
      this.interval = randomInt(options.interval.min, options.interval.max) || options.interval || 100;
      this.init();
      this.isAnimating = false; // Animation flag
    }
  
    init() {
      for (let i = 0; i < this.options.count; i++) {
        const delay = i * this.interval;
        this.particles.push(new Particle(this.canvas, this.options, delay));
      }
    }
  
    animate = () => {
      if (!this.isAnimating) return; // Stop animation if flag is false
  
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(this.animate);
    }
  
    start() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.animate();
      }
    }
  
    stop() {
      this.isAnimating = false;
    }
  }
  
  export { Particle, ParticleSystem };
  