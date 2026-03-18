/**
 * Before/After Image Slider Component
 * Interactive slider for showcasing transformation results
 */

class BeforeAfterSlider {
  constructor(container) {
    this.container = container;
    this.slider = container.querySelector('.ba-slider');
    this.beforeImage = container.querySelector('.ba-before');
    this.afterImage = container.querySelector('.ba-after');
    this.handle = container.querySelector('.ba-handle');
    this.isDragging = false;
    
    this.init();
  }
  
  init() {
    // Mouse events
    this.handle.addEventListener('mousedown', (e) => this.startDrag(e));
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', () => this.stopDrag());
    
    // Touch events
    this.handle.addEventListener('touchstart', (e) => this.startDrag(e));
    document.addEventListener('touchmove', (e) => this.drag(e));
    document.addEventListener('touchend', () => this.stopDrag());
    
    // Click on container to move slider
    this.container.addEventListener('click', (e) => {
      if (e.target !== this.handle) {
        this.moveSliderTo(e);
      }
    });
    
    // Keyboard accessibility
    this.handle.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.moveSliderByPercent(-5);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.moveSliderByPercent(5);
      }
    });
  }
  
  startDrag(e) {
    this.isDragging = true;
    this.handle.classList.add('dragging');
    e.preventDefault();
  }
  
  stopDrag() {
    this.isDragging = false;
    this.handle.classList.remove('dragging');
  }
  
  drag(e) {
    if (!this.isDragging) return;
    
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    this.updateSlider(x);
  }
  
  moveSliderTo(e) {
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    this.updateSlider(x);
  }
  
  updateSlider(x) {
    const rect = this.container.getBoundingClientRect();
    const offsetX = x - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    
    this.slider.style.left = `${percentage}%`;
    this.afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }
  
  moveSliderByPercent(delta) {
    const currentLeft = parseFloat(this.slider.style.left) || 50;
    const newLeft = Math.max(0, Math.min(100, currentLeft + delta));
    
    this.slider.style.left = `${newLeft}%`;
    this.afterImage.style.clipPath = `inset(0 ${100 - newLeft}% 0 0)`;
  }
}

// Initialize all before/after sliders on page load
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.before-after-container');
  containers.forEach(container => {
    new BeforeAfterSlider(container);
  });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BeforeAfterSlider;
}
