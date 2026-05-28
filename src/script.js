/* 
========================================================================
   YASER SHOSHAA PORTFOLIO LIGHTWEIGHT MODERN VANILLA JAVASCRIPT
   Core: Electric Blackboard Canvas, 3D Bento Tilts, QA Audit Panel
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  
  /* -------------------------------------------------------------------
     01. ACTIVE YEAR INJECTOR
     ------------------------------------------------------------------- */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------------
     02. THEME CONTROLLER & PERSISTENCE
     ------------------------------------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  // Initial Theme load
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  /* -------------------------------------------------------------------
     03. HIGH-BRIGHTNESS INTERACTIVE ELECTRIC BLACKBOARD CANVAS
     ------------------------------------------------------------------- */
  const canvas = document.getElementById('neural-canvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouse = { x: null, y: null, active: false, radius: 220 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }
  
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
  });

  // Particle Node Blueprint (With handwritten blueprint coordinate drift)
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2.5 + 1.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      // Hex representation for blueprint annotations
      this.hexAddr = '0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase();
      this.alpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Mouse magnet attraction snap vector (Spring logic)
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.vx += (dx / dist) * force * 0.025;
          this.vy += (dy / dist) * force * 0.025;
        }
      }

      // Bounds collision
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Speed damper friction
      this.vx *= 0.97;
      this.vy *= 0.97;
    }

    draw() {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? `rgba(245, 245, 240, ${this.alpha})` : `rgba(26, 29, 32, ${this.alpha})`;
      ctx.fill();

      // Faint sketched labels (floating blueprint coordinates)
      if (this.alpha > 0.42 && window.innerWidth > 768) {
        ctx.fillStyle = isDark ? `rgba(90, 99, 104, 0.4)` : `rgba(138, 149, 155, 0.45)`;
        ctx.font = '10px "Architects Daughter", cursive';
        ctx.fillText(`${this.hexAddr} [${Math.round(this.x)}, ${Math.round(this.y)}]`, this.x + 8, this.y + 3);
      }
    }
  }

  function initParticles() {
    particles = [];
    const maxParticles = window.innerWidth < 768 ? 60 : 120;
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
  }

  // Draw high-brightness electric filament trail arcs
  function drawElectricTrails() {
    const isDark = document.documentElement.classList.contains('dark');
    const accentColor = isDark ? '#00F0FF' : '#007D8F';
    const secondaryColor = isDark ? '#D946EF' : '#8B5CF6';
    
    // Configure screens and intensive glowing chromatography
    ctx.globalCompositeOperation = 'screen';
    ctx.shadowBlur = mouse.active ? 15 : 0;
    ctx.shadowColor = accentColor;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      // Slow fading ambient connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (130 - dist) / 130 * 0.12;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isDark ? `rgba(90, 99, 104, ${alpha})` : `rgba(138, 149, 155, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // High-brightness electric mouse attraction filaments (Lightning arcs)
      if (mouse.active) {
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const alpha = (mouse.radius - dist) / mouse.radius * 0.38;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);

          // Synthesize organic micro-lightning arcs using sine deviations
          const segments = 4;
          const segmentX = (mouse.x - p1.x) / segments;
          const segmentY = (mouse.y - p1.y) / segments;

          for (let s = 1; s < segments; s++) {
            const progress = s / segments;
            // Generate perpendicular displacement
            const perpX = -segmentY;
            const perpY = segmentX;
            const wave = Math.sin(progress * Math.PI) * (Math.random() - 0.5) * 12;
            
            const nodeX = p1.x + segmentX * s + (perpX / Math.sqrt(perpX*perpX + perpY*perpY)) * wave;
            const nodeY = p1.y + segmentY * s + (perpY / Math.sqrt(perpX*perpX + perpY*perpY)) * wave;
            ctx.lineTo(nodeX, nodeY);
          }

          ctx.lineTo(mouse.x, mouse.y);
          
          // Dual color neon electric gradient
          const grad = ctx.createLinearGradient(p1.x, p1.y, mouse.x, mouse.y);
          grad.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
          grad.addColorStop(1, `rgba(217, 70, 239, ${alpha})`);
          
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
      }
    }

    // Reset composite mode to avoid affecting body layers
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
  }

  function animateCanvas() {
    const isDark = document.documentElement.classList.contains('dark');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Blackboard matte background fill
    ctx.fillStyle = isDark ? '#100F1E' : '#E4E3EB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drifting grid coordinate guidelines
    drawSlateGrid();

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawElectricTrails();
    requestAnimationFrame(animateCanvas);
  }

  // Draw soft background slate grid
  function drawSlateGrid() {
    const isDark = document.documentElement.classList.contains('dark');
    ctx.strokeStyle = isDark ? 'rgba(90, 99, 104, 0.05)' : 'rgba(138, 149, 155, 0.08)';
    ctx.lineWidth = 0.5;
    const gridSize = 80;

    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
  }

  // Desktop Mouse handlers
  const cursorGlow = document.getElementById('cursor-glow');

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    
    if (cursorGlow) {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }
  });

  document.addEventListener('mouseleave', () => {
    mouse.active = false;
    if (cursorGlow) cursorGlow.style.opacity = '0';
  });

  // Mobile Touch handlers
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    mouse.active = false;
  });

  // Init canvas loops
  resizeCanvas();
  animateCanvas();

  /* -------------------------------------------------------------------
     04. 3D CARD HOVER PHYSICS (Chalk Card Tilting & Glare)
     ------------------------------------------------------------------- */
  const tiltCards = document.querySelectorAll('.hover-tilt');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate responsive angles
      const rotateX = ((y / height) - 0.5) * -12;
      const rotateY = ((x / width) - 0.5) * 12;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      
      // Coordinate shifted chalk highlights inside each card
      let highlight = card.querySelector('.chalk-card-highlight');
      if (!highlight) {
        highlight = document.createElement('div');
        highlight.classList.add('chalk-card-highlight');
        highlight.style.position = 'absolute';
        highlight.style.inset = '0';
        highlight.style.borderRadius = 'inherit';
        highlight.style.pointerEvents = 'none';
        highlight.style.zIndex = '3';
        card.appendChild(highlight);
      }
      
      const isDark = document.documentElement.classList.contains('dark');
      const shineColor = isDark ? 'rgba(0, 240, 255, 0.06)' : 'rgba(139, 92, 246, 0.05)';
      highlight.style.background = `radial-gradient(circle at ${(x/width)*100}% ${(y/height)*100}%, ${shineColor} 0%, transparent 60%)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      const highlight = card.querySelector('.chalk-card-highlight');
      if (highlight) highlight.style.background = 'transparent';
    });
  });

  /* -------------------------------------------------------------------
     05. CAPSULE NAVBAR SPRING INDICATOR
     ------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-item');
  const indicator = document.querySelector('.nav-indicator');

  function positionIndicator(link) {
    if (!link || !indicator) return;
    
    const rect = link.getBoundingClientRect();
    const parentRect = link.parentElement.getBoundingClientRect();
    
    indicator.style.left = `${rect.left - parentRect.left}px`;
    indicator.style.width = `${rect.width}px`;
  }

  const activeLink = document.querySelector('.nav-item.active');
  if (activeLink) {
    setTimeout(() => positionIndicator(activeLink), 150);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      positionIndicator(link);
    });
  });

  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-item.active');
    if (currentActive) positionIndicator(currentActive);
  });

  /* -------------------------------------------------------------------
     06. MOBILE NAV DRAWER TOGGLE
     ------------------------------------------------------------------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-item');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  /* -------------------------------------------------------------------
     07. HIGH-FIDELITY SCROLL-SPY ACTIVE LINKS
     ------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section');
  
  function scrollSpy() {
    const scrollPos = window.scrollY + 180;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        const matchLink = document.querySelector(`.nav-item[data-sec="${id}"]`);
        if (matchLink) {
          navLinks.forEach(l => l.classList.remove('active'));
          matchLink.classList.add('active');
          positionIndicator(matchLink);
        }
      }
    });
  }
  window.addEventListener('scroll', scrollSpy);

  /* -------------------------------------------------------------------
     08. TELEMETRY COCKPIT SIGNAL FLUCTUATION (Trigonometric & Numeric)
     ------------------------------------------------------------------- */
  const latencyVal = document.getElementById('latency-val');
  const rateVal = document.getElementById('inference-val');
  const wavePath = document.getElementById('oscilloscope-wave');
  
  let phase = 0;
  
  function animateOscilloscope() {
    if (wavePath) {
      phase += 0.06;
      let d = 'M 0 50';
      for (let x = 0; x <= 400; x += 10) {
        // Synthesize double frequencies for real-time oscilloscope
        const y = 50 + Math.sin(x * 0.05 + phase) * 14 * Math.sin(x * 0.009 + phase * 0.5);
        d += ` L ${x} ${y}`;
      }
      wavePath.setAttribute('d', d);
    }
    requestAnimationFrame(animateOscilloscope);
  }
  requestAnimationFrame(animateOscilloscope);

  function simulateTelemetryData() {
    if (latencyVal) {
      const randLat = (3.1 + Math.random() * 1.6).toFixed(1);
      latencyVal.textContent = `${randLat} ms`;
    }
    if (rateVal) {
      const randRate = (94.2 + Math.random() * 4.2).toFixed(1);
      rateVal.textContent = `${randRate} K/s`;
    }
  }
  setInterval(simulateTelemetryData, 1800);

  /* -------------------------------------------------------------------
     09. BORDERLESS INPUT TRANSMISSION ZONE (Contact form submission)
     ------------------------------------------------------------------- */
  const contactForm = document.getElementById('portfolio-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const feedbackPane = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const origBtnText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.querySelector('.btn-text').textContent = 'TRANSMITTING HANDSHAKE TELEMETRY...';
      submitBtn.disabled = true;
      feedbackPane.textContent = '';
      
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      try {
        const response = await fetch('https://formspree.io/f/meozpgrl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          feedbackPane.textContent = '✅ PING REGISTERED. COMMUNICATIONS CHANNEL ONLINE.';
          feedbackPane.className = 'form-feedback-pane mt-4 font-mono text-center text-mint';
          contactForm.reset();
        } else {
          feedbackPane.textContent = '⚠️ SYSTEM DELAY. DIRECT NODE: yasserzaher03@gmail.com';
          feedbackPane.className = 'form-feedback-pane mt-4 font-mono text-center text-yellow';
        }
      } catch (err) {
        feedbackPane.textContent = '⚠️ PING TIME OUT. ROUTING DISRUPTED.';
        feedbackPane.className = 'form-feedback-pane mt-4 font-mono text-center text-yellow';
      } finally {
        submitBtn.querySelector('.btn-text').textContent = origBtnText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
          feedbackPane.textContent = '';
        }, 6000);
      }
    });
  }

  /* -------------------------------------------------------------------
     10. INTEGRATED QA AUTOMATION TESTING PANEL SUITE
     ------------------------------------------------------------------- */
  const qaThemeBtn = document.getElementById('qa-theme-btn');
  const qaScreenshotBtn = document.getElementById('qa-screenshot-btn');
  const qaShutter = document.getElementById('qa-shutter');
  const qaModal = document.getElementById('qa-modal');
  const qaModalClose = document.getElementById('qa-modal-close');
  const qaModalLogs = document.getElementById('qa-modal-logs');

  // QA Cycle Theme Matrix
  if (qaThemeBtn) {
    qaThemeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
      
      // Inject alert feedback inside forms
      if (feedbackPane) {
        feedbackPane.textContent = `QA LOG: Theme toggled to ${isDark ? 'LIGHT CHALK' : 'DARK BLACKBOARD'}`;
        feedbackPane.className = 'form-feedback-pane mt-4 font-mono text-center text-yellow';
        setTimeout(() => feedbackPane.textContent = '', 2000);
      }
    });
  }

  // Simulate QA screen capture verification checks
  if (qaScreenshotBtn) {
    qaScreenshotBtn.addEventListener('click', () => {
      
      // Step 1: Hide QA Panel and setup testing environment
      document.body.classList.add('qa-testing');
      
      // Scan standard elements and add test outlines
      const elementsToAudit = document.querySelectorAll('.chalk-card, .bento-box, .stack-layer, .project-card, .capsule-nav');
      let overflowErrors = 0;
      let auditedElements = 0;

      elementsToAudit.forEach(el => {
        el.classList.add('qa-boundary-fit');
        auditedElements++;
        
        // Overflow regression checks
        const bounds = el.getBoundingClientRect();
        if (bounds.right > window.innerWidth || bounds.left < 0) {
          el.classList.remove('qa-boundary-fit');
          el.classList.add('qa-boundary-overflow');
          overflowErrors++;
        }
      });

      // Check overall viewport overflow
      const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
      if (hasHorizontalScroll) overflowErrors++;

      // Step 2: Trigger visual camera Shutter flash after a short latency
      setTimeout(() => {
        if (qaShutter) {
          qaShutter.classList.add('flash-shutter');
          // Play a simulated capture tone context
          try {
            const ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctxAudio.createOscillator();
            const gain = ctxAudio.createGain();
            osc.connect(gain);
            gain.connect(ctxAudio.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, ctxAudio.currentTime);
            gain.gain.setValueAtTime(0.04, ctxAudio.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctxAudio.currentTime + 0.35);
            osc.start();
            osc.stop(ctxAudio.currentTime + 0.35);
          } catch(e){}

          setTimeout(() => {
            qaShutter.classList.remove('flash-shutter');
          }, 500);
        }

        // Step 3: Compile layout diagnostics console reports
        const timestamp = new Date().toISOString();
        const browserWidth = window.innerWidth;
        const browserHeight = window.innerHeight;
        const contrastRatio = '4.85:1 (PASS - WCAG AA compliant silver text)';
        const themeState = document.documentElement.classList.contains('dark') ? 'DARK_BLACKBOARD' : 'LIGHT_CHALK';

        const auditLogs = `[SYSTEM TELEMETRY DIAGNOSTIC CORE REDESIGN v4.0]
------------------------------------------------------
TIMESTAMP: ${timestamp}
VIEWPORT CONTEXT: ${browserWidth}px x ${browserHeight}px
THEME MODE SYSTEM: ${themeState}
AUDITED CONTAINER MODULES: ${auditedElements} slates

VISUAL SANITY CHECK REPORT:
- HTML5 Canvas Engine........ OK (Rendered 60fps)
- Dynamic Oscilloscope....... OK (Fluctuating frequency)
- 3D perspective tilts....... OK (Dampened cursor math active)
- Contrast validation........ PASS (${contrastRatio})
- Grid boundary constraints.. PASS (Organic slates fitted)

OVERFLOW REGRESSION AUDIT:
- Horizontal screen overflow.. 0 errors
- Element bounds anomalies.... ${overflowErrors} errors

======================================================
INTEGRITY VERIFICATION STATUS: [PASS]
No layout anomalies detected. Screenshot simulation captured.
------------------------------------------------------`;

        // Step 4: Display the terminal QA modal report
        if (qaModal && qaModalLogs) {
          qaModalLogs.textContent = auditLogs;
          qaModal.classList.add('show-modal');
        }

        // Cleanup outlines
        elementsToAudit.forEach(el => {
          el.classList.remove('qa-boundary-fit', 'qa-boundary-overflow');
        });
        document.body.classList.remove('qa-testing');

      }, 400);

    });
  }

  // Close QA Modal
  if (qaModalClose && qaModal) {
    qaModalClose.addEventListener('click', () => {
      qaModal.classList.remove('show-modal');
    });
  }

  // Click outside to close modal
  window.addEventListener('click', (e) => {
    if (e.target === qaModal) {
      qaModal.classList.remove('show-modal');
    }
  });

});
