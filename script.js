/**

 * Royal Islamic Wedding Invitation - Ultra-Optimized High Performance Engine

 * Md. Tauqir & Mahjibeen Parveen | 27–29 November 2026

 */

document.addEventListener('DOMContentLoaded', () => {

  initRoyalPreloader();

  initPersonalizedGreeting();

  initVideoIntroAndAudio();

  initBackgroundMusicController();

  initScratchEngine();

  initLiveCountdown();

  initHeroVideoObserver();

  initRingCeremonyVideo();

  initAfreenExperience();

  initMuhDikhaiGame();

  initDuasAndVoice();

  initFinalBlessings();

  initNazarSection();

});

/* ==========================================================================

   0. ROYAL LUXURY ASSET PRELOADER (100% READY BEFORE OPENING)

   ========================================================================== */

function initRoyalPreloader() {

  const preloader = document.getElementById('royal-preloader');

  const barFill = document.getElementById('preloader-bar-fill');

  const statusEl = document.getElementById('preloader-status');

  const counterEl = document.getElementById('preloader-counter');

  if (!preloader) return;

  // Skip visual preloader UI if debug query parameters are present

  const isDebugSkip = window.location.search.includes('skip=1') ||

    window.location.search.includes('view=');

  if (isDebugSkip) {

    preloader.style.display = 'none';

  }

  // Critical assets that must be cached before the guest begins the experience

  const criticalImages = [

    'assets/video_poster.webp',

    'assets/elegant_wedding_letter.webp',

    'assets/Arch Frame(Left).webp',

    'assets/Romantic Floral Lantern Corner Ornament.webp',

    'assets/Save the Date.webp',

    'assets/Pink Heart Frame.webp',

    'assets/gold_heart_surface.webp',

    'assets/inner_heart_mask.png',

    'assets/Romantic Scratch-to-Reveal Plaque.webp',

    'assets/Countdown frame 2.webp',

    'assets/Ornate Pink and Gold Wedding Invitation.webp',

    'assets/wedding_timeline_title.webp',

    'assets/timeline_node_head.webp',

    'assets/timeline_card.webp',

    'assets/seamless_floral_border.webp',

    'assets/Ornate Pink Wedding Venue Card-Photoroom.webp',

    'assets/Curtain Frame.webp',

    'assets/Wedding Valance.webp',

    'assets/Wedding Memories.webp',

    'assets/Floral Frame.webp',

    'assets/Ornate Pink and Gold Wedding Frame.webp',

    'assets/img_1.webp',

    'assets/img_2.webp',

    'assets/img_3.webp',

    'assets/img_4.webp',

    'assets/img_5.png',

    'assets/img_6.webp',

    'assets/img_7.webp',

    'assets/photo_frame.webp',

    'assets/real_photo_1.jpg',

    'assets/real_photo_2.jpg',

    'assets/real_photo_3.jpg'

  ];

  let loadedCount = 0;

  const totalCount = criticalImages.length + 2; // +1 video metadata, +1 audio metadata

  let currentDisplayPercent = 0;

  let isComplete = false;

  const updateProgress = (targetPercent) => {

    if (isComplete) return;

    // Smooth counter tween

    const step = () => {

      if (currentDisplayPercent < targetPercent) {

        currentDisplayPercent = Math.min(targetPercent, currentDisplayPercent + 2);

        if (barFill) barFill.style.width = currentDisplayPercent + '%';

        if (counterEl) counterEl.textContent = currentDisplayPercent + '%';

        if (statusEl) {

          if (currentDisplayPercent < 35) {

            statusEl.textContent = 'Opening Royal Palace...';

          } else if (currentDisplayPercent < 75) {

            statusEl.textContent = 'Loading Wedding Blessings...';

          } else if (currentDisplayPercent < 100) {

            statusEl.textContent = 'Almost Ready...';

          }

        }

        if (currentDisplayPercent < targetPercent) {

          requestAnimationFrame(step);

        } else if (currentDisplayPercent >= 100) {

          finishPreloader();

        }

      }

    };

    requestAnimationFrame(step);

  };

  const itemLoaded = () => {

    loadedCount++;

    const target = Math.round((loadedCount / totalCount) * 100);

    updateProgress(target);

  };

  // Pinned texture cache to prevent V8/Blink GC eviction during scroll

  window.__pinnedTextures = [];

  // Preload critical images into browser cache and force GPU texture pre-decoding

  criticalImages.forEach((src) => {

    const img = new Image();

    window.__pinnedTextures.push(img);

    img.onload = () => {

      if (img.decode) {

        img.decode().then(itemLoaded).catch(itemLoaded);

      } else {

        itemLoaded();

      }

    };

    img.onerror = itemLoaded; // Never stall on individual error

    img.src = src;

  });

  // Track video metadata readiness

  const video = document.getElementById('envelope-video');

  if (video) {

    if (video.readyState >= 1) {

      itemLoaded();

    } else {

      video.addEventListener('loadedmetadata', itemLoaded, { once: true });

      video.addEventListener('error', itemLoaded, { once: true });

    }

  } else {

    itemLoaded();

  }

  // Track audio metadata readiness

  const audio = document.getElementById('wedding-audio');

  if (audio) {

    if (audio.readyState >= 1) {

      itemLoaded();

    } else {

      audio.addEventListener('loadedmetadata', itemLoaded, { once: true });

      audio.addEventListener('canplay', itemLoaded, { once: true });

      audio.addEventListener('error', itemLoaded, { once: true });

    }

  } else {

    itemLoaded();

  }

  const finishPreloader = () => {

    if (isComplete) return;

    isComplete = true;

    if (barFill) barFill.style.width = '100%';

    if (counterEl) counterEl.textContent = '100%';

    if (statusEl) statusEl.textContent = '✨ Welcome to the Celebration ✨';

    // Luxury fade out after brief appreciation

    setTimeout(() => {

      preloader.classList.add('preloader-hidden');

      setTimeout(() => {

        preloader.style.display = 'none';

      }, 850);

    }, 450);

  };

  // Fail-safe maximum timeout (3.5 seconds) so no guest is ever stuck

  setTimeout(() => {

    if (!isComplete) {

      updateProgress(100);

      finishPreloader();

    }

  }, 3500);

}

/* ==========================================================================

   1. FULLSCREEN VIDEO INTRO & BACKGROUND AUDIO FADE-IN

   ========================================================================== */

function initVideoIntroAndAudio() {

  const overlay = document.getElementById('video-overlay');

  const video = document.getElementById('envelope-video');

  const audio = document.getElementById('wedding-audio');

  const letterScene = document.getElementById('royal-letter-scene');

  const btnOpen = document.getElementById('btn-open-invitation');

  const clickTrigger = document.getElementById('click-here-trigger');

  const skipBtn = document.getElementById('skip-btn');

  const musicToggle = document.getElementById('music-toggle');

  const unlockScroll = () => {
    document.documentElement.classList.remove('scroll-locked');
    document.body.classList.remove('scroll-locked');
  };

  const lockScroll = () => {
    document.documentElement.classList.add('scroll-locked');
    document.body.classList.add('scroll-locked');
  };

  const lockScrollHandler = (e) => {
    if (!isTransitioned) {
      e.preventDefault();
    }
  };

  if (!overlay || !video || !audio) {
    unlockScroll();
    return;
  }

  if (window.location.search.includes('view=rsvp')) {
    unlockScroll();
    overlay.style.display = 'none';
    ['hero', 'the-date', 'countdown-block', 'formal-invitation', 'timeline', 'venue'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    startAmbientPetals();
    return;
  }

  if (window.location.search.includes('view=venue')) {
    unlockScroll();
    overlay.style.display = 'none';
    ['hero', 'the-date', 'countdown-block', 'formal-invitation', 'timeline'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    startAmbientPetals();
    return;
  }

  if (window.location.search.includes('view=timeline')) {
    unlockScroll();
    overlay.style.display = 'none';
    ['hero', 'the-date', 'countdown-block', 'formal-invitation'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    startAmbientPetals();
    return;
  }

  if (window.location.search.includes('view=countdown')) {
    unlockScroll();
    overlay.style.display = 'none';
    const hero = document.getElementById('hero');
    if (hero) hero.style.display = 'none';
    const theDate = document.getElementById('the-date');
    if (theDate) theDate.style.display = 'none';
    startAmbientPetals();
    return;
  }

  if (window.location.search.includes('view=the-date')) {
    unlockScroll();
    overlay.style.display = 'none';
    const hero = document.getElementById('hero');
    if (hero) hero.style.display = 'none';
    startAmbientPetals();
    return;
  }

  let isStarted = false;
  let isTransitioned = false;

  if (window.location.search.includes('skip=1')) {
    unlockScroll();
    overlay.style.display = 'none';
    overlay.classList.add('overlay-faded');
    if (musicToggle) musicToggle.classList.remove('hidden');
    startAmbientPetals();
    isTransitioned = true;
  } else {
    // Lock scrolling on window events strictly during letter & video intro
    window.addEventListener('wheel', lockScrollHandler, { passive: false });
    window.addEventListener('touchmove', lockScrollHandler, { passive: false });
  }

  // Handle "Click Here" / Tap to Start

  const startExperience = (e) => {

    if (e) e.preventDefault();

    if (isStarted) return;

    isStarted = true;

    // 1. Gently fade out the Royal Letter Scene while the envelope video starts
    if (letterScene) {
      letterScene.classList.add('letter-fade-out');
      setTimeout(() => {
        if (letterScene.classList.contains('letter-fade-out')) {
          letterScene.style.display = 'none';
        }
      }, 1350);
    }

    if (clickTrigger) {
      clickTrigger.classList.add('fade-out-cta');
    }

    // 2. Warm up hero video buffer during intro so it starts with 0 delay later

    const heroPetalsVideo = document.getElementById('hero-petals-video');

    if (heroPetalsVideo && heroPetalsVideo.preload !== 'auto') {

      heroPetalsVideo.preload = 'auto';

      heroPetalsVideo.load();

    }

    // 3. Play the Fullscreen Video unmuted at 50% volume

    try {

      video.muted = false;

      video.volume = 0.5;

    } catch (_) { }

    const videoPromise = video.play();

    if (videoPromise !== undefined) {

      videoPromise.catch(err => {

        console.warn('Video play with sound warning, falling back to muted if blocked:', err);

        video.muted = true;

        video.play().catch(e => console.error('Video play error:', e));

      });

    }

    // 4. Start Background Music with Smooth Fade-In (Target: 50% volume)

    audio.volume = 0;

    const audioPromise = audio.play();

    if (audioPromise !== undefined) {

      audioPromise.then(() => {

        fadeInAudio(audio, 2500, 0.5);

        updateMusicUI(true);

      }).catch(err => {

        console.warn('Audio play notice:', err);

      });

    }

    // 5. Show Skip Button after 1.2s

    setTimeout(() => {

      if (!isTransitioned && skipBtn) {

        skipBtn.classList.remove('hidden');

      }

    }, 1200);

  };

  // Transition from Video Overlay to Website

  const transitionToWebsite = () => {

    if (isTransitioned) return;
    isTransitioned = true;

    // Unlock scrolling now that main page is transitioning in
    unlockScroll();
    window.removeEventListener('wheel', lockScrollHandler);
    window.removeEventListener('touchmove', lockScrollHandler);
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Smoothly dissolve video overlay
    overlay.classList.add('overlay-faded');

    // Reveal floating music player button

    if (musicToggle) {

      musicToggle.classList.remove('hidden');

    }

    // Start Hero Petals Video on loop!

    const heroPetalsVideo = document.getElementById('hero-petals-video');

    if (heroPetalsVideo) {

      heroPetalsVideo.currentTime = 0;

      heroPetalsVideo.play().catch(e => console.warn('Hero petals video auto-play notice:', e));

    }

    // Start Ambient Petals Canvas now that website is visible

    startAmbientPetals();

    // Smoothly breathe in the bottom shadow gradient & floating scroll badge

    const heroGradient = document.querySelector('.hero-video-gradient');

    const heroScrollPrompt = document.querySelector('.hero-scroll-prompt');

    setTimeout(() => {

      if (heroGradient) heroGradient.classList.add('gradient-active');

      if (heroScrollPrompt) heroScrollPrompt.classList.add('prompt-active');

    }, 700);

    // Refresh scratch canvas dimensions after overlay disappears

    setTimeout(() => {

      window.dispatchEvent(new Event('resize'));

    }, 400);

    // Remove overlay from DOM interaction

    setTimeout(() => {

      overlay.style.display = 'none';

      try { video.pause(); } catch (_) { }

    }, 1300);

  };

  // Audio Smooth Fade-In Function

  function fadeInAudio(audioEl, durationMs, targetVol = 0.5) {

    const stepTime = 50;

    const stepCount = durationMs / stepTime;

    let currentStep = 0;

    const interval = setInterval(() => {

      currentStep++;

      const vol = Math.min(targetVol, (currentStep / stepCount) * targetVol);

      audioEl.volume = vol;

      if (vol >= targetVol || currentStep >= stepCount) {

        audioEl.volume = targetVol;

        clearInterval(interval);

      }

    }, stepTime);

  }

  // Trigger start on Royal Letter 'Open Invitation' button or letter tap

  if (btnOpen) {

    btnOpen.addEventListener('click', (e) => {

      e.stopPropagation();

      startExperience(e);

    });

  }

  if (letterScene) {

    letterScene.addEventListener('click', (e) => {

      startExperience(e);

    });

  }

  if (clickTrigger) {

    clickTrigger.addEventListener('click', startExperience);

    clickTrigger.addEventListener('touchend', startExperience, { passive: false });

  }

  overlay.addEventListener('click', (e) => {

    if (!isStarted) {

      startExperience(e);

    }

  });

  // Global Replay Experience (called from Section 10 Blessings Screen)

  window.replayExperience = function () {
    window.scrollTo({ top: 0, behavior: 'instant' });
    lockScroll();
    window.addEventListener('wheel', lockScrollHandler, { passive: false });
    window.addEventListener('touchmove', lockScrollHandler, { passive: false });

    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.remove('overlay-faded');
    }

    if (letterScene) {
      letterScene.style.display = 'flex';
      letterScene.classList.remove('letter-fade-out');
    }

    if (video) {

      video.currentTime = 0;

      try { video.pause(); } catch (_) { }

    }

    if (skipBtn) {

      skipBtn.classList.add('hidden');

    }

    isStarted = false;

    isTransitioned = false;

  };

  // When video reaches near the end (~9.4s) or finishes, cross-fade to website

  video.addEventListener('timeupdate', () => {

    if (video.currentTime >= 9.4 && !isTransitioned) {

      transitionToWebsite();

    }

  });

  video.addEventListener('ended', () => {

    transitionToWebsite();

  });

  // Skip button click

  if (skipBtn) {

    skipBtn.addEventListener('click', (e) => {

      e.stopPropagation();

      transitionToWebsite();

    });

  }

}

/* ==========================================================================

   1B. SMART VIEWPORT OBSERVER FOR HERO VIDEO (SAVES 100% GPU WHEN SCROLLED)

   ========================================================================== */

function initHeroVideoObserver() {

  const heroSection = document.getElementById('hero');

  const heroVideo = document.getElementById('hero-petals-video');

  if (!heroSection || !heroVideo || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        // Hero is on screen -> Play

        if (heroVideo.paused && heroVideo.currentTime > 0) {

          heroVideo.play().catch(() => { });

        }

      } else {

        // Hero is scrolled offscreen -> Pause to eliminate GPU drain!

        if (!heroVideo.paused) {

          heroVideo.pause();

        }

      }

    });

  }, { threshold: 0.08 });

  observer.observe(heroSection);

}

/* ==========================================================================

   1C. AMBIENT DRIFTING ROSE PETALS CANVAS ENGINE (VIEWPORT FIXED 120FPS)

   ========================================================================== */

let ambientPetalsRunning = false;

// Global interaction flag to pause petal calculations during user interactions

let isUserInteracting = false;

window.isUserInteracting = false;

function setUserInteracting(state) {

  isUserInteracting = state;

  window.isUserInteracting = state;

}

let isScratchingGlobal = false;

let scrollDebounceTimer = null;

window.addEventListener('scroll', () => {

  setUserInteracting(true);

  if (typeof window.stopPetalsLoop === 'function') {

    window.stopPetalsLoop();

  }

  clearTimeout(scrollDebounceTimer);

  scrollDebounceTimer = setTimeout(() => {

    scrollDebounceTimer = null;

    if (!isScratchingGlobal) {

      setUserInteracting(false);

      if (typeof window.resumePetalsLoop === 'function') {

        window.resumePetalsLoop();

      }

    }

  }, 180);

}, { passive: true });

function startAmbientPetals() {

  if (ambientPetalsRunning) return;

  ambientPetalsRunning = true;

  const canvas = document.getElementById('ambient-petals-canvas');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  let width = 0;

  let height = 0;

  // Pre-render a tiny petal sprite on an offscreen canvas

  const spriteCanvas = document.createElement('canvas');

  const spriteSize = 36;

  spriteCanvas.width = spriteSize;

  spriteCanvas.height = spriteSize;

  const sCtx = spriteCanvas.getContext('2d');

  const half = spriteSize / 2;

  const sGrad = sCtx.createRadialGradient(half, half, 1, half, half, half);

  sGrad.addColorStop(0, 'rgba(255, 240, 244, 0.95)');

  sGrad.addColorStop(0.55, 'rgba(248, 175, 192, 0.88)');

  sGrad.addColorStop(1, 'rgba(224, 138, 158, 0.75)');

  sCtx.fillStyle = sGrad;

  sCtx.beginPath();

  sCtx.moveTo(half, 2);

  sCtx.bezierCurveTo(half + 12, half - 4, half + 10, half + 10, half, spriteSize - 2);

  sCtx.bezierCurveTo(half - 10, half + 10, half - 12, half - 4, half, 2);

  sCtx.closePath();

  sCtx.fill();

  const resizeCanvas = () => {

    const dpr = 1; // Pure 1:1 on mobile to prevent any fillrate overdraw

    const cssW = Math.min(window.innerWidth, 440);

    const cssH = window.innerHeight;

    width = canvas.width = Math.round(cssW * dpr);

    height = canvas.height = Math.round(cssH * dpr);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

  };

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas, { passive: true });

  const petalCount = 18; // Silky smooth on any mobile GPU

  const petals = [];

  const cssW = Math.min(window.innerWidth, 440);

  const cssH = window.innerHeight;

  for (let i = 0; i < petalCount; i++) {

    petals.push({

      x: Math.random() * cssW,

      y: Math.random() * cssH,

      size: 14 + Math.random() * 12,

      speedY: 0.9 + Math.random() * 1.3,

      speedX: -0.4 + Math.random() * 0.8,

      angle: Math.random() * Math.PI * 2,

      angularSpeed: (Math.random() - 0.5) * 0.025,

      flip: Math.random() * Math.PI,

      flipSpeed: 0.015 + Math.random() * 0.02,

      opacity: 0.55 + Math.random() * 0.4

    });

  }

  let isTabVisible = true;

  let petalsRafId = null;

  let isPetalsLoopRunning = false;

  function stopPetalsLoop() {

    if (isPetalsLoopRunning) {

      if (petalsRafId) cancelAnimationFrame(petalsRafId);

      petalsRafId = null;

      isPetalsLoopRunning = false;

    }

  }

  function resumePetalsLoop() {

    if (!isPetalsLoopRunning && isTabVisible && !isUserInteracting) {

      isPetalsLoopRunning = true;

      petalsRafId = requestAnimationFrame(render);

    }

  }

  window.stopPetalsLoop = stopPetalsLoop;

  window.resumePetalsLoop = resumePetalsLoop;

  document.addEventListener('visibilitychange', () => {

    isTabVisible = !document.hidden;

    if (isTabVisible) {

      resumePetalsLoop();

    } else {

      stopPetalsLoop();

    }

  });

  function render() {

    if (!isTabVisible || isUserInteracting) {

      isPetalsLoopRunning = false;

      petalsRafId = null;

      return;

    }

    const currentW = Math.min(window.innerWidth, 440);

    const currentH = window.innerHeight;

    ctx.clearRect(0, 0, currentW, currentH);

    for (let i = 0; i < petals.length; i++) {

      const p = petals[i];

      p.y += p.speedY;

      p.x += p.speedX + Math.sin(p.angle) * 0.6;

      p.angle += p.angularSpeed;

      p.flip += p.flipSpeed;

      if (p.y > currentH + 30) {

        p.y = -30;

        p.x = Math.random() * currentW;

      }

      if (p.x > currentW + 30) p.x = -30;

      if (p.x < -30) p.x = currentW + 30;

      ctx.save();

      ctx.globalAlpha = p.opacity;

      ctx.translate(p.x, p.y);

      ctx.rotate(p.angle);

      ctx.scale(1, Math.cos(p.flip));

      const s = p.size;

      ctx.drawImage(spriteCanvas, -s / 2, -s / 2, s, s);

      ctx.restore();

    }

    petalsRafId = requestAnimationFrame(render);

  }

  resumePetalsLoop();

}

/* ==========================================================================

   2. PERSISTENT FLOATING MUSIC CONTROLLER

   ========================================================================== */

let audioIsPlaying = false;
window.userPrefersMusic = false;
window.isRingVideoSuppressedAudio = false;

function initBackgroundMusicController() {

  const toggle = document.getElementById('music-toggle');

  const audio = document.getElementById('wedding-audio');

  if (!toggle || !audio) return;

  toggle.addEventListener('click', () => {

    // If Afreen experience is the active soundtrack, control Afreen!
    if (window.activeAudioTrack === 'afreen' && window.afreenAudioInstance) {
      const afreen = window.afreenAudioInstance;
      if (!afreen.paused) {
        afreen.pause();
        updateMusicUI(false);
        if (window.updateAfreenPlayButtonUI) window.updateAfreenPlayButtonUI(false);
      } else {
        afreen.play().then(() => {
          updateMusicUI(true);
          if (window.updateAfreenPlayButtonUI) window.updateAfreenPlayButtonUI(true);
        }).catch(console.error);
      }
      return;
    }

    if (audioIsPlaying) {

      audio.pause();

      audioIsPlaying = false;

      window.userPrefersMusic = false;

      updateMusicUI(false);

    } else {

      try { audio.volume = 0.5; } catch (_) { }

      audio.play().then(() => {

        audioIsPlaying = true;

        window.userPrefersMusic = true;

        updateMusicUI(true);

      }).catch(console.error);

    }

  });

  audio.addEventListener('play', () => {

    audioIsPlaying = true;

    window.userPrefersMusic = true;

    updateMusicUI(true);

  });

  audio.addEventListener('pause', () => {

    audioIsPlaying = false;

    updateMusicUI(false);

  });

}

function updateMusicUI(isPlaying) {

  const icon = document.getElementById('music-icon');

  const toggle = document.getElementById('music-toggle');

  if (!icon || !toggle) return;

  if (isPlaying) {

    icon.textContent = '⏸';

    toggle.classList.add('playing');

  } else {

    icon.textContent = '▶';

    toggle.classList.remove('playing');

  }

}

/* ==========================================================================

   3. HTML5 CANVAS SCRATCH CARD REVEAL ENGINE (BLUSH GARDEN GOLDEN HEART)

   ========================================================================== */

function initScratchEngine() {

  const canvas = document.getElementById('canvas-heart');

  const wrap = document.getElementById('card-wrap-heart');

  if (!canvas || !wrap) return;

  const ctx = canvas.getContext('2d');

  let isRevealed = false;

  let isScratching = false;

  let lastX = null;

  let lastY = null;

  let activePointerId = null;

  let cachedRect = null;

  // Lightweight offscreen hit-test buffer

  let hitCanvas = null;

  let hitCtx = null;

  let hitData = null;

  // Tiny 60x66 sampler canvas for 0.04ms lag-free progress checking

  const sampleW = 60;

  const sampleH = 66;

  const sampleCanvas = document.createElement('canvas');

  sampleCanvas.width = sampleW;

  sampleCanvas.height = sampleH;

  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  let totalSampleOpaque = 1;

  // Use the ultra-optimized golden heart WebP artwork

  const heartImg = new Image();

  heartImg.src = 'assets/gold_heart_surface.webp';

  const updateRect = () => {

    if (canvas) cachedRect = canvas.getBoundingClientRect();

  };

  const setupCanvas = () => {

    if (isRevealed) return;

    const rect = wrap.getBoundingClientRect();

    const width = rect.width > 20 ? rect.width : 320;

    const height = rect.height > 20 ? rect.height : Math.round(width * 1312 / 1199);

    const dpr = window.innerWidth <= 600 ? 1 : 1.5;

    canvas.width = Math.round(width * dpr);

    canvas.height = Math.round(height * dpr);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.scale(dpr, dpr);

    if (heartImg.complete && heartImg.naturalWidth > 0) {

      ctx.drawImage(heartImg, 0, 0, width, height);

    } else {

      heartImg.onload = setupCanvas;

      return;

    }

    updateRect();

    // Low-res hit-test mask (120x131) for instant O(1) hit testing

    try {

      const hw = 120;

      const hh = 131;

      hitCanvas = document.createElement('canvas');

      hitCanvas.width = hw;

      hitCanvas.height = hh;

      hitCtx = hitCanvas.getContext('2d', { willReadFrequently: true });

      hitCtx.drawImage(heartImg, 0, 0, hw, hh);

      hitData = hitCtx.getImageData(0, 0, hw, hh).data;

    } catch (_) {

      hitData = null;

    }

    // Initial opaque measurement (<0.04ms)

    try {

      sampleCtx.clearRect(0, 0, sampleW, sampleH);

      sampleCtx.drawImage(canvas, 0, 0, sampleW, sampleH);

      const sData = sampleCtx.getImageData(0, 0, sampleW, sampleH).data;

      let count = 0;

      for (let i = 3; i < sData.length; i += 4) {

        if (sData[i] > 100) count++;

      }

      totalSampleOpaque = count || 1500;

    } catch (_) {

      totalSampleOpaque = 1500;

    }

  };

  if (heartImg.complete) {

    setupCanvas();

  } else {

    heartImg.onload = setupCanvas;

  }

  window.addEventListener('resize', () => {

    if (!isRevealed) {

      setupCanvas();

      updateRect();

    }

  });

  // O(1) hit test without layout reflow

  function isInsideHeartFast(x, y) {

    if (!hitData || !hitCanvas || !cachedRect) return true;

    if (x < 0 || x >= cachedRect.width || y < 0 || y >= cachedRect.height) return false;

    const sx = Math.floor((x / cachedRect.width) * hitCanvas.width);

    const sy = Math.floor((y / cachedRect.height) * hitCanvas.height);

    if (sx < 0 || sx >= hitCanvas.width || sy < 0 || sy >= hitCanvas.height) return false;

    return hitData[(sy * hitCanvas.width + sx) * 4 + 3] > 35;

  }

  // --- High-Performance rAF Batched Scratch Engine ---

  let scratchQueue = [];

  let rafPending = false;

  let totalScratchDistance = 0;

  let distanceThresholdTriggered = false;

  const processScratchBatch = () => {

    rafPending = false;

    if (!scratchQueue.length || isRevealed) return;

    ctx.globalCompositeOperation = 'destination-out';

    ctx.lineWidth = 54;

    ctx.lineCap = 'round';

    ctx.lineJoin = 'round';

    ctx.beginPath();

    for (let i = 0; i < scratchQueue.length; i++) {

      const pt = scratchQueue[i];

      if (lastX !== null && lastY !== null) {

        ctx.moveTo(lastX, lastY);

        ctx.lineTo(pt.x, pt.y);

        totalScratchDistance += Math.hypot(pt.x - lastX, pt.y - lastY);

      } else {

        ctx.arc(pt.x, pt.y, 27, 0, Math.PI * 2);

      }

      lastX = pt.x;

      lastY = pt.y;

    }

    ctx.stroke();

    scratchQueue.length = 0;

    // Zero-cost distance check: NO getImageData GPU-to-CPU pipeline stall during finger movement!

    if (!distanceThresholdTriggered && totalScratchDistance > 950) {

      distanceThresholdTriggered = true;

      scheduleProgressCheck();

    }

  };

  const queueScratchPoint = (x, y) => {

    scratchQueue.push({ x, y });

    if (!rafPending) {

      rafPending = true;

      requestAnimationFrame(processScratchBatch);

    }

  };

  let checkPending = false;

  const scheduleProgressCheck = () => {

    if (isRevealed || checkPending) return;

    checkPending = true;

    requestAnimationFrame(() => {

      checkPending = false;

      try {

        sampleCtx.clearRect(0, 0, sampleW, sampleH);

        sampleCtx.drawImage(canvas, 0, 0, sampleW, sampleH);

        const sData = sampleCtx.getImageData(0, 0, sampleW, sampleH).data;

        let currentOpaque = 0;

        for (let i = 3; i < sData.length; i += 4) {

          if (sData[i] > 100) currentOpaque++;

        }

        const scratchedRatio = 1 - (currentOpaque / (totalSampleOpaque || 1));

        if (scratchedRatio > 0.30) {

          isRevealed = true;

          isScratching = false;

          isScratchingGlobal = false;

          if (!scrollDebounceTimer) {

            setUserInteracting(false);

            if (typeof window.resumePetalsLoop === 'function') {

              window.resumePetalsLoop();

            }

          }

          canvas.style.pointerEvents = 'none';

          canvas.style.transition = 'opacity 0.6s ease';

          canvas.style.opacity = '0';

          setTimeout(() => {

            canvas.style.display = 'none';

          }, 600);

          celebrateDateRevealed();

        }

      } catch (_) { }

    });

  };

  canvas.addEventListener('pointerdown', (e) => {

    if (isRevealed) return;

    updateRect();

    const rect = cachedRect || canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    // Outside the heart shape: allow normal page scrolling without interference

    if (!isInsideHeartFast(x, y)) {

      return;

    }

    isScratching = true;

    isScratchingGlobal = true;

    setUserInteracting(true);

    if (typeof window.stopPetalsLoop === 'function') {

      window.stopPetalsLoop();

    }

    activePointerId = e.pointerId;

    try {

      canvas.setPointerCapture(e.pointerId);

    } catch (_) { }

    lastX = null;

    lastY = null;

    queueScratchPoint(x, y);

  });

  canvas.addEventListener('pointermove', (e) => {

    if (!isScratching || isRevealed) return;

    if (activePointerId !== null && e.pointerId !== activePointerId) return;

    const rect = cachedRect || canvas.getBoundingClientRect();

    const coalesced = e.getCoalescedEvents ? e.getCoalescedEvents() : null;

    const events = (coalesced && coalesced.length > 0) ? coalesced : [e];

    for (let i = 0; i < events.length; i++) {

      const ev = events[i];

      queueScratchPoint(ev.clientX - rect.left, ev.clientY - rect.top);

    }

  });

  const finishScratch = (e) => {

    if (activePointerId !== null && e.pointerId !== activePointerId) return;

    if (isScratching) {

      isScratching = false;

      isScratchingGlobal = false;

      if (!scrollDebounceTimer) {

        setUserInteracting(false);

        if (typeof window.resumePetalsLoop === 'function') {

          window.resumePetalsLoop();

        }

      }

      lastX = null;

      lastY = null;

      try {

        if (activePointerId !== null) canvas.releasePointerCapture(activePointerId);

      } catch (_) { }

      activePointerId = null;

      // Flush any queued points and verify progress

      if (scratchQueue.length) {

        processScratchBatch();

      }

      scheduleProgressCheck();

    }

  };

  canvas.addEventListener('pointerup', finishScratch);

  canvas.addEventListener('pointercancel', finishScratch);

  canvas.addEventListener('lostpointercapture', finishScratch);

}

function celebrateDateRevealed() {

  const hintArrow = document.getElementById('scratch-hint-arrow');

  if (hintArrow) {

    hintArrow.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    hintArrow.style.opacity = '0';

    hintArrow.style.transform = 'translateY(-10px)';

    setTimeout(() => {

      hintArrow.style.display = 'none';

    }, 400);

  }

  const plaqueWrap = document.getElementById('scratch-plaque-wrap');

  if (plaqueWrap) {

    plaqueWrap.classList.add('revealed-celebrate');

  }

  const feedback = document.getElementById('scratch-feedback');

  if (feedback) {

    feedback.style.display = 'flex';

    feedback.innerHTML = `

      <div class="revealed-celebrate-badge">

        <span>✨ Saturday, 28th November 2026 — Insha'Allah ✨</span>

      </div>

    `;

  }

}

/* ==========================================================================

   4. LIVE WEDDING COUNTDOWN TIMER

   ========================================================================== */

function initLiveCountdown() {

  const targetTime = new Date('2026-11-28T21:00:00+05:30').getTime();

  const daysEl = document.getElementById('timer-days');

  const hoursEl = document.getElementById('timer-hours');

  const minsEl = document.getElementById('timer-mins');

  const secsEl = document.getElementById('timer-secs');

  const updateCountdown = () => {

    const now = Date.now();

    const distance = targetTime - now;

    if (distance <= 0) {

      if (daysEl) daysEl.textContent = '00';

      if (hoursEl) hoursEl.textContent = '00';

      if (minsEl) minsEl.textContent = '00';

      if (secsEl) secsEl.textContent = '00';

      return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');

    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');

    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');

  };

  updateCountdown();

  setInterval(updateCountdown, 1000);

}

/* ==========================================================================

   5. SAVE TO CALENDAR (.ICS FILE DOWNLOAD)

   ========================================================================== */

window.downloadCalendarEvent = function () {

  const icsData = [

    'BEGIN:VCALENDAR',

    'VERSION:2.0',

    'PRODID:-//Royal Wedding Invitation//Md. Tauqir & Mahjibeen//EN',

    'BEGIN:VEVENT',

    'SUMMARY:Nikah Ceremony: Md. Tauqir & Mahjibeen Parveen',

    'DESCRIPTION:In the name of Allah. Marriage ceremony of Md. Tauqir and Mahjibeen Parveen at Shobha Marriage Hall, Near Patratu Dam, Ramgarh, Jharkhand.',

    'LOCATION:Shobha Marriage Hall, Near Patratu Dam, Ramgarh, Jharkhand',

    'DTSTART;TZID=Asia/Kolkata:20261128T210000',

    'DTEND;TZID=Asia/Kolkata:20261129T020000',

    'STATUS:CONFIRMED',

    'END:VEVENT',

    'END:VCALENDAR'

  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });

  const downloadUrl = window.URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = downloadUrl;

  a.download = 'Tauqir_Mahjibeen_Nikah.ics';

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  window.URL.revokeObjectURL(downloadUrl);

};

/* ==========================================================================

   FEATURE 1: PERSONALIZED GUEST GREETING LOGIC (?to=...)

   ========================================================================== */

function initPersonalizedGreeting() {

  const urlParams = new URLSearchParams(window.location.search);

  const rawTo = urlParams.get('to');

  let guestName = 'Dear Family & Friends';

  if (rawTo && rawTo.trim().length > 0) {

    // Sanitize whitespace and enforce a safe maximum length of 50 characters

    guestName = rawTo.trim().slice(0, 50);

  }

  // Safely render using textContent to prevent XSS injection

  const letterGuestEl = document.getElementById('letter-guest-name');

  if (letterGuestEl) {

    letterGuestEl.textContent = guestName;

  }

  const ribbonGuestEl = document.getElementById('ribbon-guest-name');

  if (ribbonGuestEl) {

    ribbonGuestEl.textContent = `Specially Invited: ${guestName}`;

  }

  // Pre-fill the guest name in Duas & Wishes form if personalized

  const wishGuestInput = document.getElementById('wish-guest-name');

  if (wishGuestInput && rawTo && rawTo.trim().length > 0) {

    wishGuestInput.value = guestName;

  }

}

/* ==========================================================================

   FEATURE 2: WEDDING MEMORIES CINEMATIC RING CEREMONY VIDEO & AUDIO ENGINE

   Md. Tauqir & Mahjibeen Parveen | Auto Cross-Fade Audio Engine

   ========================================================================== */

function initRingCeremonyVideo() {

  const ringVideo = document.getElementById('wedding-ring-video');

  const ringFrameWrapper = document.getElementById('ring-frame-wrapper');

  const bgAudio = document.getElementById('wedding-audio');

  if (!ringVideo || !ringFrameWrapper) return;

  let isRingVideoActive = false;

  let ringFadeInterval = null;

  let bgFadeInterval = null;

  const targetRingVolume = 0.85;

  // Smooth Volume Ramp Helper (Interpolates media element volume cleanly)

  function rampVolume(mediaEl, targetVol, durationMs, onComplete) {

    if (!mediaEl) return null;

    const stepTime = 40;

    const steps = Math.max(1, Math.floor(durationMs / stepTime));

    const startVol = typeof mediaEl.volume === 'number' ? mediaEl.volume : 0;

    const volDelta = (targetVol - startVol) / steps;

    let step = 0;

    const intervalId = setInterval(() => {

      step++;

      const nextVol = Math.max(0, Math.min(1, startVol + (volDelta * step)));

      try {

        mediaEl.volume = nextVol;

      } catch (_) { }

      if (step >= steps || Math.abs(mediaEl.volume - targetVol) < 0.02) {

        try {

          mediaEl.volume = Math.max(0, Math.min(1, targetVol));

        } catch (_) { }

        clearInterval(intervalId);

        if (onComplete) onComplete();

      }

    }, stepTime);

    return intervalId;

  }

  // Crossfade: Smoothly fade OUT background music & fade IN ring ceremony video

  function crossFadeToRingVideo() {

    if (isRingVideoActive) return;

    // Guard: If Afreen experience is active, do not interrupt Afreen audio
    if (window.activeAudioTrack === 'afreen' && window.afreenAudioInstance && !window.afreenAudioInstance.paused) {
      ringVideo.muted = true;
      ringVideo.play().catch(() => { });
      return;
    }

    isRingVideoActive = true;

    // Reset video volume to 0 before starting ramp

    ringVideo.currentTime = ringVideo.currentTime || 0;

    ringVideo.muted = false;

    ringVideo.volume = 0;

    const playPromise = ringVideo.play();

    if (playPromise !== undefined) {

      playPromise.then(() => {

        ringVideo.muted = false;

        if (ringFadeInterval) clearInterval(ringFadeInterval);

        ringFadeInterval = rampVolume(ringVideo, targetRingVolume, 800);

        // Turn OFF website background music permanently until user taps bottom-right button

        if (bgAudio) {

          if (bgFadeInterval) clearInterval(bgFadeInterval);

          bgFadeInterval = rampVolume(bgAudio, 0, 800, () => {

            try {

              bgAudio.pause();

              bgAudio.volume = 0.5; // Ready with normal volume for manual restart

            } catch (_) { }

            audioIsPlaying = false;

            window.userPrefersMusic = false;

            updateMusicUI(false);

          });

        }

      }).catch((err) => {

        console.warn('Autoplay with sound restricted, continuing muted:', err);

        ringVideo.muted = true;

        ringVideo.play().catch(() => { });

      });

    }

  }

  // When leaving Section 7: Fade out ring video & pause (Main song stays OFF automatically)

  function leaveRingVideoSection() {

    if (!isRingVideoActive) return;

    isRingVideoActive = false;

    // 1. Ramp down ceremony video volume to 0 and pause

    if (ringFadeInterval) clearInterval(ringFadeInterval);

    ringFadeInterval = rampVolume(ringVideo, 0, 600, () => {

      try { ringVideo.pause(); } catch (_) { }

    });

    // NOTE: Main background music is NOT restarted automatically.

    // It remains off until the guest explicitly clicks the bottom-right music button.

  }

  // IntersectionObserver to auto-detect when Section 7 Ring Ceremony enters viewport

  if ('IntersectionObserver' in window) {

    const videoObserver = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {

          crossFadeToRingVideo();

        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {

          if (isRingVideoActive) {

            leaveRingVideoSection();

          }

        }

      });

    }, {

      threshold: [0.1, 0.25, 0.5, 0.75]

    });

    videoObserver.observe(ringFrameWrapper);

  }

}

/* ==========================================================================
   FEATURE 2B: AFREEN AFREEN REAL-TIME SYNCHRONIZED MUSICAL LYRIC ENGINE 🎵✨
   Md. Tauqir & Mahjibeen Parveen Special Romantic Tribute
   ========================================================================== */

/**
 * =========================================================================
 * 🎵 AFREEN AFREEN MASTER 2D FREE-MOVEMENT CONTROLLER (% BASED) 🎵
 * Har ek lyric line ke liye aap complete 2D Free Movement customize kar sakte hain:
 * 
 * 1. urdu / hinglish: Lyrics text (String ya Array)
 * 2. start / end: Gaane ke mutabiq kab shuru aur kab khatam hoga (in seconds)
 * 3. lyricPos: Lyrics ki 2D percentage position (Screen me kahi bhi rakhein!):
 *      - Object: { top: '66%', left: '50%' } ya { top: '20%', right: '10%', width: '45%' }
 *      - Coordinates: '50% 66%' (X Y) ya 'top: 66%; left: 50%'
 *      - Numbers: { top: 66, left: 50 } (auto % lag jayega)
 *      - Presets: 'bottom', 'top', 'left', 'right', 'center'
 * 4. lyricAnim: Lyric animation ('fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'dissolve')
 * 5. fadeIn / fadeOut: Lyrics ki fade speed (in seconds, e.g. 1.2, 0.8)
 * 6. image: Konsi photo aayegi (e.g. 'assets/img_1.webp')
 * 7. imagePos: Photo ki 2D percentage position (Screen me kahi bhi rakhein!):
 *      - Object: { top: '4%', left: '50%' } ya { top: '10%', left: '50%', width: '85%', height: '55%' }
 *      - Coordinates: '50% 4%' (X Y) ya 'top: 4%; left: 50%'
 *      - Numbers: { top: 4, left: 50 } (auto % lag jayega)
 *      - Presets: 'top', 'bottom', 'left', 'right', 'center'
 * 8. imageAnim: Photo ka animation ('zoom-in' | 'zoom-out' | 'kenburns' | 'float' | 'slide-left' | 'slide-right')
 * 9. imageFadeIn / imageFadeOut: Photo ki fade speed (in seconds)
 * =========================================================================
 */

/**
 * 🎯 2D Free-Movement Percentage Parser for Lyrics & Images
 */
function parseAfreenPosition(posInput, type = 'lyric') {
  const isImage = type === 'image';
  const defaultObj = isImage
    ? { top: '4%', left: '50%', bottom: 'auto', right: 'auto', width: '94%', height: '58%', transform: 'translate(-50%, 0)', textAlign: 'center' }
    : { top: '66%', left: '50%', bottom: 'auto', right: 'auto', width: '92%', height: 'auto', transform: 'translate(-50%, 0)', textAlign: 'center' };

  if (posInput === undefined || posInput === null || posInput === '') {
    return defaultObj;
  }

  const result = {
    top: '',
    left: '',
    bottom: '',
    right: '',
    width: '',
    height: '',
    transform: '',
    textAlign: 'center'
  };

  const fmt = (v) => {
    if (v === undefined || v === null || v === '') return '';
    if (typeof v === 'number') return `${v}%`;
    const s = String(v).trim();
    return (!isNaN(Number(s)) && !s.endsWith('%') && !s.endsWith('px')) ? `${s}%` : s;
  };

  // 1. If posInput is an Object
  if (typeof posInput === 'object') {
    let top = posInput.top ?? posInput.y;
    let left = posInput.left ?? posInput.x;
    let bottom = posInput.bottom;
    let right = posInput.right;
    let width = posInput.width;
    let height = posInput.height;
    let transform = posInput.transform;
    let align = posInput.align || posInput.textAlign;
    let justify = posInput.justify;
    let alignItems = posInput.alignItems;
    let objectPosition = posInput.objectPosition || posInput.objectPos;

    result.top = fmt(top);
    result.left = fmt(left);
    result.bottom = fmt(bottom);
    result.right = fmt(right);
    result.width = fmt(width) || (isImage ? '94%' : '92%');
    result.height = fmt(height) || (isImage ? '58%' : 'auto');
    if (align) result.textAlign = align;
    if (justify) result.justify = justify;
    if (alignItems) result.alignItems = alignItems;
    if (objectPosition) result.objectPosition = objectPosition;

    if (transform) {
      result.transform = transform;
    } else {
      const transX = (result.left === '50%') ? '-50%' : '0';
      const transY = (result.top === '50%') ? '-50%' : '0';
      result.transform = (transX !== '0' || transY !== '0') ? `translate(${transX}, ${transY})` : 'none';
    }
    return result;
  }

  // 2. If posInput is a Number (e.g. 65 -> top: 65%, left: 50%)
  if (typeof posInput === 'number') {
    result.top = `${posInput}%`;
    result.left = '50%';
    result.width = isImage ? '94%' : '92%';
    result.height = isImage ? '58%' : 'auto';
    result.transform = 'translate(-50%, 0)';
    return result;
  }

  // 3. If posInput is a String
  if (typeof posInput === 'string') {
    const raw = posInput.trim();
    const str = raw.toLowerCase();

    // A. CSS property style: e.g. "top: 66%; left: 50%"
    if (str.includes(':')) {
      const parts = str.split(/[;,]/);
      parts.forEach(part => {
        const [k, v] = part.split(':').map(s => s ? s.trim() : '');
        if (!k || !v) return;
        if (k === 'top' || k === 'y') result.top = fmt(v);
        if (k === 'left' || k === 'x') result.left = fmt(v);
        if (k === 'bottom') result.bottom = fmt(v);
        if (k === 'right') result.right = fmt(v);
        if (k === 'width') result.width = fmt(v);
        if (k === 'height') result.height = fmt(v);
        if (k === 'align' || k === 'text-align') result.textAlign = v;
        if (k === 'justify') result.justify = v;
        if (k === 'align-items' || k === 'alignitems') result.alignItems = v;
        if (k === 'object-position' || k === 'objectposition' || k === 'objectpos') result.objectPosition = v;
        if (k === 'transform') result.transform = v;
      });
      result.width = result.width || (isImage ? '94%' : '92%');
      result.height = result.height || (isImage ? '58%' : 'auto');
      if (!result.transform) {
        const transX = (result.left === '50%') ? '-50%' : '0';
        const transY = (result.top === '50%') ? '-50%' : '0';
        result.transform = (transX !== '0' || transY !== '0') ? `translate(${transX}, ${transY})` : 'none';
      }
      return result;
    }

    // B. Coordinate pair: e.g. "50% 66%" or "50%, 66%" (X Y)
    const coordMatch = str.match(/^(-?\d+(?:\.\d+)?%?)[,\s]+(-?\d+(?:\.\d+)?%?)$/);
    if (coordMatch) {
      result.left = fmt(coordMatch[1]);
      result.top = fmt(coordMatch[2]);
      result.width = isImage ? '94%' : '92%';
      result.height = isImage ? '58%' : 'auto';
      const transX = (result.left === '50%') ? '-50%' : '0';
      const transY = (result.top === '50%') ? '-50%' : '0';
      result.transform = (transX !== '0' || transY !== '0') ? `translate(${transX}, ${transY})` : 'none';
      return result;
    }

    // C. Single percentage: e.g. "66%" -> Top: 66%, Left: 50%
    const singlePct = str.match(/^(-?\d+(?:\.\d+)?%?)$/);
    if (singlePct && (str.includes('%') || !isNaN(Number(str)))) {
      result.top = fmt(str);
      result.left = '50%';
      result.width = isImage ? '94%' : '92%';
      result.height = isImage ? '58%' : 'auto';
      result.transform = 'translate(-50%, 0)';
      return result;
    }

    // D. Preset directions
    if (str === 'top') {
      return isImage
        ? { top: '4%', left: '50%', bottom: 'auto', right: 'auto', width: '94%', height: '58%', transform: 'translate(-50%, 0)', textAlign: 'center' }
        : { top: '6%', left: '50%', bottom: 'auto', right: 'auto', width: '92%', height: '30%', transform: 'translate(-50%, 0)', textAlign: 'center' };
    }
    if (str === 'bottom') {
      return isImage
        ? { top: '38%', left: '50%', bottom: 'auto', right: 'auto', width: '94%', height: '58%', transform: 'translate(-50%, 0)', textAlign: 'center' }
        : { top: '66%', left: '50%', bottom: 'auto', right: 'auto', width: '92%', height: '30%', transform: 'translate(-50%, 0)', textAlign: 'center' };
    }
    if (str === 'left') {
      return isImage
        ? { top: '8%', left: '3%', bottom: 'auto', right: 'auto', width: '48%', height: '84%', transform: 'none', textAlign: 'center' }
        : { top: '8%', left: '3%', bottom: 'auto', right: 'auto', width: '46%', height: '84%', transform: 'none', textAlign: 'right' };
    }
    if (str === 'right') {
      return isImage
        ? { top: '8%', left: '50%', bottom: 'auto', right: 'auto', width: '48%', height: '84%', transform: 'none', textAlign: 'center' }
        : { top: '8%', left: '50%', bottom: 'auto', right: 'auto', width: '46%', height: '84%', transform: 'none', textAlign: 'left' };
    }
    if (str === 'center') {
      return isImage
        ? { top: '15%', left: '50%', bottom: 'auto', right: 'auto', width: '85%', height: '52%', transform: 'translate(-50%, 0)', textAlign: 'center' }
        : { top: '50%', left: '50%', bottom: 'auto', right: 'auto', width: '92%', height: 'auto', transform: 'translate(-50%, -50%)', textAlign: 'center' };
    }
  }

  return defaultObj;
}
window.parseAfreenPosition = parseAfreenPosition;

const AFREEN_DEFAULT_SETTINGS = {
  fadeIn: 1.2,            // Default lyrics fade in speed (seconds)
  fadeOut: 0.9,           // Default lyrics fade out speed (seconds)
  imageFadeIn: 1.2,       // Default image fade in speed (seconds)
  imageFadeOut: 0.9,      // Default image fade out speed (seconds)
  lineStaggerDelay: 0.35, // Stagger delay between lines
  fadeOutLeadTime: 0.9    // Seconds before 'end' to begin fading out
};

const AFREEN_LINES_CONFIG = [
  // LINE 1
  {
    id: 1,
    start: 4.3,
    end: 9.8,
    urdu: 'ایسا دیکھا نہیں خوبصورت کوئی',
    hinglish: 'Aisa dekha nahi khoobsurat koi',
    lyricPos: { top: '66%', left: '50%' }, // % Position (Kahi bhi move karein!)
    lyricAnim: 'fade-up',
    fadeIn: 1.2,
    fadeOut: 0.8,
    image: 'assets/img_1.webp',
    imagePos: { top: '4%', left: '50%' },  // % Position (Kahi bhi move karein!)
    imageAnim: 'zoom-in',
    imageFadeIn: 1.2,
    imageFadeOut: 0.8
  },
  // LINE 2
  {
    id: 2,
    start: 9.8,
    end: 15.0,
    urdu: 'جسم جیسے اجنتا کی مورت کوئی',
    hinglish: 'Jism jaise Ajanta ki moorat koi',
    lyricPos: { top: '66%', left: '50%' },
    lyricAnim: 'fade-up',
    fadeIn: 1.1,
    fadeOut: 0.8,
    image: 'assets/img_1.webp',
    imagePos: { top: '4%', left: '50%' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.8
  },
  // LINE 3
  {
    id: 3,
    start: 15.0,
    end: 19.0,
    urdu: 'جسم جیسے نگاہوں پہ جادو کوئی',
    hinglish: 'Jism jaise nigaahon pe jaadu koi',
    lyricPos: { top: '8%', left: '50%' },
    lyricAnim: 'fade-up',
    fadeIn: 1.0,
    fadeOut: 0.7,
    image: 'assets/img_2.webp',
    imagePos: { top: '37%', left: '50%' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.7
  },
  // LINE 4
  {
    id: 4,
    start: 19.0,
    end: 22.5,
    urdu: 'جسم نغمہ کوئی',
    hinglish: 'Jism naghma koi',
    lyricPos: { top: '8%', left: '50%' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.6,
    image: 'assets/img_2.webp',
    imagePos: { top: '37%', left: '50%' },
    imageAnim: 'zoom-in',
    imageFadeIn: 0.9,
    imageFadeOut: 0.6
  },
  // LINE 5
  {
    id: 5,
    start: 22.5,
    end: 26.0,
    urdu: 'جسم خوشبو کوئی',
    hinglish: 'Jism khushboo koi',
    lyricPos: { top: '8%', left: '50%' },
    lyricAnim: 'fade-up',
    fadeIn: 0.9,
    fadeOut: 0.8,
    image: 'assets/img_2.webp',
    imagePos: { top: '37%', left: '50%' },
    imageAnim: 'zoom-in',
    imageFadeIn: 0.9,
    imageFadeOut: 0.8
  },
  // LINE 6 (Bride: Image LEFT Bada %, Lyrics RIGHT %)
  {
    id: 6,
    start: 26.0,
    end: 30.5,
    urdu: 'جسم جیسے مہکتی ہوئی چاندنی',
    hinglish: 'Jism jaise mehekti hui chaandni',
    lyricPos: { top: '24%', left: '56%', width: '42%', align: 'center' },
    lyricAnim: 'fade-left',
    fadeIn: 1.1,
    fadeOut: 0.7,
    image: 'assets/img_4.webp',
    imagePos: { top: '0%', left: '0%', right: 'auto', bottom: '0%', width: '70%', height: '100%', justify: 'flex-start', objectPosition: 'left center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.7
  },
  // LINE 7 (Bride: Image LEFT Bada %, Lyrics RIGHT %)
  {
    id: 7,
    start: 30.5,
    end: 35.0,
    urdu: 'جسم جیسے مچلتی ہوئی راگنی',
    hinglish: 'Jism jaise machalti hui raagni',
    lyricPos: { top: '24%', left: '56%', width: '42%', align: 'center' },
    lyricAnim: 'fade-right',
    fadeIn: 1.1,
    fadeOut: 0.7,
    image: 'assets/img_4.webp',
    imagePos: { top: '0%', left: '0%', right: 'auto', bottom: '0%', width: '70%', height: '100%', justify: 'flex-start', objectPosition: 'left center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.7
  },
  // LINE 8 (Bride: Image LEFT Bada %, Lyrics RIGHT %)
  {
    id: 8,
    start: 35.0,
    end: 39.5,
    urdu: 'جسم جیسے کہ کھلتا ہوا اک چمن',
    hinglish: 'Jism jaise ke khilta hua ek chaman',
    lyricPos: { top: '24%', left: '56%', width: '42%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 1.1,
    fadeOut: 0.8,
    image: 'assets/img_4.webp',
    imagePos: { top: '0%', left: '0%', right: 'auto', bottom: '0%', width: '70%', height: '100%', justify: 'flex-start', objectPosition: 'left center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.8
  },
  // LINE 9 (Groom in chair: Image RIGHT 100%, Lyrics LEFT %)
  {
    id: 9,
    start: 39.5,
    end: 44.0,
    urdu: 'جسم جیسے کہ سورج کی پہلی کرن',
    hinglish: 'Jism jaise ke sooraj ki pehli kiran',
    lyricPos: { top: '16%', left: '4%', width: '44%', align: 'center' },
    lyricAnim: 'fade-right',
    fadeIn: 1.1,
    fadeOut: 0.7,
    image: 'assets/img_3.webp',
    imagePos: { top: '0%', right: '0%', left: 'auto', bottom: '0%', width: '92%', height: '100%', justify: 'flex-end', objectPosition: 'right center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.7
  },
  // LINE 10 (Groom in chair: Image RIGHT 100%, Lyrics LEFT %)
  {
    id: 10,
    start: 44.0,
    end: 48.5,
    urdu: 'جسم تراشا ہوا، دلکش و دلنشیں',
    hinglish: 'Jism tarasha hua, dilkash-o-dilnasheen',
    lyricPos: { top: '16%', left: '4%', width: '44%', align: 'center' },
    lyricAnim: 'fade-right',
    fadeIn: 1.1,
    fadeOut: 0.8,
    image: 'assets/img_3.webp',
    imagePos: { top: '0%', right: '0%', left: 'auto', bottom: '0%', width: '92%', height: '100%', justify: 'flex-end', objectPosition: 'right center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.8
  },
  // LINE 11
  {
    id: 11,
    start: 48.5,
    end: 52.5,
    urdu: 'صندلیں صندلیں',
    hinglish: 'Sandalin sandalin',
    lyricPos: { top: '4%', left: '50%', width: '92%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.6,
    image: 'assets/img_5.png',
    imagePos: { top: '23%', left: '50%', width: '98%', height: '77%', justify: 'center', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.6
  },
  // LINE 12
  {
    id: 12,
    start: 52.5,
    end: 57.0,
    urdu: 'مرمریں مرمریں',
    hinglish: 'Marmarin marmarin',
    lyricPos: { top: '4%', left: '50%', width: '92%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.7,
    image: 'assets/img_5.png',
    imagePos: { top: '23%', left: '50%', width: '98%', height: '77%', justify: 'center', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.7
  },
  // LINE 13 (Lantern & Open Book + Royal Arch Frame: Bottom Bada %, Lyrics Arch Ke Andar %)
  {
    id: 13,
    start: 57.0,
    end: 62.0,
    urdu: ['حسنِ جاناں کی', 'تعریف ممکن نہیں'],
    hinglish: ['Husn-e-jaana ki', 'Tareef mumkin nahi'],
    lyricPos: { top: '22%', left: '50%', width: '70%', align: 'center' },
    lyricAnim: 'fade-up',
    fadeIn: 1.1,
    fadeOut: 0.7,
    arch: 'assets/arch_frame.webp',
    image: 'assets/Lantern.webp',
    imagePos: { bottom: '0%', left: '50%', width: '106%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.7
  },
  // LINE 14 (Lantern & Open Book + Royal Arch Frame: Bottom Bada %, Lyrics Arch Ke Andar %)
  {
    id: 14,
    start: 62.0,
    end: 67.0,
    urdu: ['حسنِ جاناں کی', 'تعریف ممکن نہیں'],
    hinglish: ['Husn-e-jaana ki', 'Tareef mumkin nahi'],
    lyricPos: { top: '22%', left: '50%', width: '70%', align: 'center' },
    lyricAnim: 'fade-up',
    fadeIn: 1.1,
    fadeOut: 0.8,
    arch: 'assets/arch_frame.webp',
    image: 'assets/Lantern.webp',
    imagePos: { bottom: '0%', left: '50%', width: '106%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.8
  },
  // LINE 15 (Lantern & Open Book + Royal Arch Frame: Bottom Bada %, Lyrics Arch Ke Andar %)
  {
    id: 15,
    start: 67.0,
    end: 71.0,
    urdu: 'آفریں آفریں',
    hinglish: 'Afreen Afreen',
    lyricPos: { top: '24%', left: '50%', width: '70%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.6,
    arch: 'assets/arch_frame.webp',
    image: 'assets/Lantern.webp',
    imagePos: { bottom: '0%', left: '50%', width: '106%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.6
  },
  // LINE 16 (Lantern & Open Book + Royal Arch Frame: Bottom Bada %, Lyrics Arch Ke Andar %)
  {
    id: 16,
    start: 71.0,
    end: 75.0,
    urdu: 'آفریں آفریں',
    hinglish: 'Afreen Afreen',
    lyricPos: { top: '24%', left: '50%', width: '70%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.7,
    arch: 'assets/arch_frame.webp',
    image: 'assets/Lantern.webp',
    imagePos: { bottom: '0%', left: '50%', width: '106%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.7
  },
  // LINE 17 (Ring Exchange - Flush to Left & Right Borders)
  {
    id: 17,
    start: 75.0,
    end: 79.5,
    urdu: 'تو بھی دیکھے اگر تو کہے ہم نشیں',
    hinglish: 'Tu bhi dekhe agar to kahe humnasheen',
    lyricPos: { top: '64%', left: '50%', width: '88%', align: 'center' },
    lyricAnim: 'fade-up',
    fadeIn: 1.1,
    fadeOut: 0.7,
    image: 'assets/img_7.webp',
    imagePos: { top: '8%', left: '50%', width: '128%', height: '58%', justify: 'center', alignItems: 'center', objectPosition: 'center center' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.0,
    imageFadeOut: 0.7
  },
  // LINE 18 (Ring Exchange - Flush to Left & Right Borders)
  {
    id: 18,
    start: 79.5,
    end: 83.5,
    urdu: 'آفریں آفریں',
    hinglish: 'Afreen Afreen',
    lyricPos: { top: '64%', left: '50%', width: '88%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 0.9,
    fadeOut: 0.8,
    image: 'assets/img_7.webp',
    imagePos: { top: '8%', left: '50%', width: '128%', height: '58%', justify: 'center', alignItems: 'center', objectPosition: 'center center' },
    imageAnim: 'zoom-out',
    imageFadeIn: 0.9,
    imageFadeOut: 0.8
  },
  // LINE 19 (Propose Pose Bada Bottom % + Lantern Base % + Lyrics Top %)
  {
    id: 19,
    start: 83.5,
    end: 90.0,
    urdu: ['حسنِ جاناں کی', 'تعریف ممکن نہیں'],
    hinglish: ['Husn-e-jaana ki', 'Tareef mumkin nahi'],
    lyricPos: { top: '12%', left: '50%', width: '74%', align: 'center' },
    lyricAnim: 'fade-down',
    fadeIn: 1.1,
    fadeOut: 0.8,
    image: 'assets/img_6.webp',
    imagePos: { bottom: '15%', left: '50%', width: '108%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    lantern: 'assets/Lantern.webp',
    imageAnim: 'zoom-in',
    imageFadeIn: 1.1,
    imageFadeOut: 0.8
  },
  // LINE 20 (Propose Pose Bada Bottom % + Lantern Base % + Lyrics Top %)
  {
    id: 20,
    start: 90.0,
    end: 97.5,
    urdu: ['حسنِ جاناں کی', 'تعریف ممکن نہیں'],
    hinglish: ['Husn-e-jaana ki', 'Tareef mumkin nahi'],
    lyricPos: { top: '12%', left: '50%', width: '74%', align: 'center' },
    lyricAnim: 'fade-down',
    fadeIn: 1.1,
    fadeOut: 0.9,
    image: 'assets/img_6.webp',
    imagePos: { bottom: '15%', left: '50%', width: '108%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    lantern: 'assets/Lantern.webp',
    imageAnim: 'alive-float',
    imageFadeIn: 1.0,
    imageFadeOut: 0.9
  },
  // LINE 21 (Musical Outro - Arch & Lantern + Music Symbol + Scroll To See More)
  {
    id: 21,
    start: 97.5,
    end: 360.0,
    type: 'outro',
    urdu: 'آفریں آفریں',
    hinglish: 'Afreen Afreen',
    scrollTextUrdu: 'مزید دیکھنے کے لیے نیچے اسکرول کریں',
    scrollTextHinglish: 'Scroll to explore more',
    lyricPos: { top: '24%', left: '50%', width: '76%', align: 'center' },
    lyricAnim: 'zoom',
    fadeIn: 1.2,
    fadeOut: 0.8,
    arch: 'assets/arch_frame.webp',
    image: 'assets/Lantern.webp',
    imagePos: { bottom: '0%', left: '50%', width: '106%', height: '52%', justify: 'center', alignItems: 'flex-end', objectPosition: 'center bottom' },
    imageAnim: 'zoom-in',
    imageFadeIn: 1.2,
    imageFadeOut: 0.8
  }
];

// Backward-compatibility alias
const AFREEN_SLIDES_CONFIG = AFREEN_LINES_CONFIG;
window.AFREEN_LINES_CONFIG = AFREEN_LINES_CONFIG;
window.AFREEN_SLIDES_CONFIG = AFREEN_SLIDES_CONFIG;
window.AFREEN_DEFAULT_SETTINGS = AFREEN_DEFAULT_SETTINGS;

function initAfreenExperience() {
  const btnPlay = document.getElementById('btn-afreen-experience');
  const btnIcon = document.getElementById('afreen-btn-icon');
  const btnLabel = document.getElementById('afreen-btn-label');
  const audio = document.getElementById('afreen-audio');
  const btnUrdu = document.getElementById('lang-btn-urdu');
  const btnHinglish = document.getElementById('lang-btn-hinglish');
  const slideWelcome = document.getElementById('afreen-slide-welcome');
  const slideDynamic = document.getElementById('afreen-slide-dynamic');
  const photoEl = document.getElementById('afreen-photo');
  const archPhotoEl = document.getElementById('afreen-arch-photo');
  const lanternPhotoEl = document.getElementById('afreen-lantern-photo');
  const lyricsWrap = document.getElementById('afreen-lyric-lines');
  const bgAudio = document.getElementById('wedding-audio');
  const ringVideo = document.getElementById('wedding-ring-video');
  const stage = document.getElementById('afreen-experience-stage');

  if (!btnPlay || !audio) return;

  // Global references for audio control from floating player & scroll observer
  window.afreenAudioInstance = audio;
  audio.loop = true;

  let currentLang = 'urdu'; // Default language is strictly Urdu
  let currentSlideIndex = -1;
  let isFadingOutCurrent = false;
  let transitionTimer = null;

  function updateAfreenPlayButtonUI(isPlaying) {
    if (isPlaying) {
      btnPlay.classList.add('playing');
      if (btnIcon) btnIcon.textContent = '⏸';
      if (btnLabel) btnLabel.textContent = 'Pause Experience';
    } else {
      btnPlay.classList.remove('playing');
      if (btnIcon) btnIcon.textContent = '▶';
      if (btnLabel) btnLabel.textContent = 'Experience Afreen 🎵';
    }
  }
  window.updateAfreenPlayButtonUI = updateAfreenPlayButtonUI;

  // Language Switching Handler (Urdu <-> Hinglish)
  function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'urdu') {
      if (btnUrdu) btnUrdu.classList.add('active');
      if (btnHinglish) btnHinglish.classList.remove('active');
    } else {
      if (btnHinglish) btnHinglish.classList.add('active');
      if (btnUrdu) btnUrdu.classList.remove('active');
    }
    // Re-render currently active line in new language immediately
    if (currentSlideIndex >= 0 && currentSlideIndex < AFREEN_LINES_CONFIG.length) {
      renderLineLyrics(currentSlideIndex);
    }
  }

  if (btnUrdu) {
    btnUrdu.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage('urdu');
    });
  }

  if (btnHinglish) {
    btnHinglish.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage('hinglish');
    });
  }

  // Render Lyric Lines for active line with staggered poetic reveal
  function renderLineLyrics(index) {
    if (!lyricsWrap) return;
    const item = AFREEN_LINES_CONFIG[index];
    if (!item) return;

    if (item.type === 'outro') {
      if (stage) stage.classList.add('afreen-perf-idle');
      const title = currentLang === 'urdu' ? item.urdu : item.hinglish;
      const scrollPrompt = currentLang === 'urdu'
        ? (item.scrollTextUrdu || 'مزید دیکھنے کے لیے نیچے اسکرول کریں')
        : (item.scrollTextHinglish || 'Scroll to explore more moments');

      lyricsWrap.innerHTML = `
        <div class="afreen-outro-card">
          <div class="afreen-outro-soundwaves" aria-hidden="true">
            <span class="outro-bar bar-1"></span>
            <span class="outro-bar bar-2"></span>
            <span class="outro-bar bar-3"></span>
            <span class="outro-bar bar-4"></span>
            <span class="outro-bar bar-5"></span>
          </div>
          <p class="afreen-lyric-line ${currentLang === 'urdu' ? 'lang-urdu' : 'lang-hinglish'} afreen-outro-title">${title}</p>
          <div class="afreen-outro-scroll-cue" onclick="document.getElementById('muh-dikhai')?.scrollIntoView({ behavior: 'smooth' });">
            <span class="outro-scroll-text">${scrollPrompt}</span>
            <span class="outro-scroll-arrow">↓</span>
          </div>
        </div>
      `;
      return;
    }

    if (stage) stage.classList.remove('afreen-perf-idle');

    const rawLines = currentLang === 'urdu' ? item.urdu : item.hinglish;
    const lines = Array.isArray(rawLines) ? rawLines : [rawLines];
    const langClass = currentLang === 'urdu' ? 'lang-urdu' : 'lang-hinglish';

    lyricsWrap.innerHTML = lines.map((text, i) => {
      const delay = (i * (item.lineStaggerDelay || AFREEN_DEFAULT_SETTINGS.lineStaggerDelay)).toFixed(2);
      return `<p class="afreen-lyric-line ${langClass}" style="transition-delay: ${delay}s;">${text}</p>`;
    }).join('');
  }

  // Mount whole line / slide (Photo + Direction + Animation + Lyrics)
  function mountLine(index, isSameImage = false) {
    currentSlideIndex = index;
    isFadingOutCurrent = false;

    if (index < 0 || index >= AFREEN_LINES_CONFIG.length) {
      if (slideWelcome) slideWelcome.classList.add('active');
      if (slideDynamic) slideDynamic.classList.remove('active');
      return;
    }

    const item = AFREEN_LINES_CONFIG[index];
    if (slideWelcome) {
      slideWelcome.classList.remove('active');
      slideWelcome.classList.remove('is-playing-prelude');
      slideWelcome.classList.remove('is-fading-out');
    }

    // 1. Compute 2D Free-Movement Percentage Coordinates
    const imgPos = parseAfreenPosition(item.imagePos, 'image');
    const lyricPos = parseAfreenPosition(item.lyricPos, 'lyric');

    // Layout class compatibility
    let layoutClass = 'layout-custom';
    if (typeof item.imagePos === 'string' && ['top', 'bottom', 'left', 'right', 'center'].includes(item.imagePos)) {
      layoutClass = `layout-img-${item.imagePos}`;
    }

    const lyricAnimClass = `lyric-anim-${item.lyricAnim || 'fade-up'}`;
    const imgAnimClass = `img-anim-${item.imageAnim || 'zoom-in'}`;
    const lyricAlign = lyricPos.textAlign || item.lyricAlign || (layoutClass === 'layout-img-right' ? 'right' : layoutClass === 'layout-img-left' ? 'left' : 'center');
    const lyricAlignClass = `lyric-align-${lyricAlign}`;

    // 2. Apply Custom Animation Speed & 2D Free-Movement CSS Variables
    const fadeIn = item.fadeIn || AFREEN_DEFAULT_SETTINGS.fadeIn;
    const fadeOut = item.fadeOut || AFREEN_DEFAULT_SETTINGS.fadeOut;
    const imgFadeIn = item.imageFadeIn || AFREEN_DEFAULT_SETTINGS.imageFadeIn;
    const imgFadeOut = item.imageFadeOut || AFREEN_DEFAULT_SETTINGS.imageFadeOut;
    const duration = Math.max(1, (item.end - item.start)).toFixed(1);

    if (slideDynamic) {
      // Fade Speeds & Animation timing
      slideDynamic.style.setProperty('--lyric-fade-in', `${fadeIn}s`);
      slideDynamic.style.setProperty('--lyric-fade-out', `${fadeOut}s`);
      slideDynamic.style.setProperty('--img-fade-in', `${imgFadeIn}s`);
      slideDynamic.style.setProperty('--img-fade-out', `${imgFadeOut}s`);
      slideDynamic.style.setProperty('--line-duration', `${duration}s`);

      // 🎯 Exact Free-Movement 2D Percentage Coordinates for Image
      slideDynamic.style.setProperty('--img-pos-top', imgPos.top || 'auto');
      slideDynamic.style.setProperty('--img-pos-left', imgPos.left || 'auto');
      slideDynamic.style.setProperty('--img-pos-bottom', imgPos.bottom || 'auto');
      slideDynamic.style.setProperty('--img-pos-right', imgPos.right || 'auto');
      slideDynamic.style.setProperty('--img-pos-width', imgPos.width || '94%');
      slideDynamic.style.setProperty('--img-pos-height', imgPos.height || '58%');
      slideDynamic.style.setProperty('--img-pos-transform', imgPos.transform || 'translate(-50%, 0)');

      const defaultJustify = imgPos.justify || (imgPos.right && imgPos.right !== 'auto' ? 'flex-end' :
        (imgPos.left === '0%' || imgPos.left === '0' || imgPos.left === '1%' || imgPos.left === '2%') ? 'flex-start' : 'center');
      slideDynamic.style.setProperty('--img-pos-justify', defaultJustify);

      const defaultAlignItems = imgPos.alignItems || (imgPos.bottom && imgPos.bottom !== 'auto' ? 'flex-end' : 'center');
      slideDynamic.style.setProperty('--img-pos-align-items', defaultAlignItems);

      const defaultObjPos = imgPos.objectPosition || (imgPos.right && imgPos.right !== 'auto' ? 'right center' :
        (imgPos.left === '0%' || imgPos.left === '0' || imgPos.left === '1%' || imgPos.left === '2%') ? 'left center' :
          (imgPos.bottom && imgPos.bottom !== 'auto') ? 'center bottom' : 'center center');
      slideDynamic.style.setProperty('--img-object-position', defaultObjPos);

      // 🎯 Exact Free-Movement 2D Percentage Coordinates for Lyrics
      slideDynamic.style.setProperty('--lyric-pos-top', lyricPos.top || 'auto');
      slideDynamic.style.setProperty('--lyric-pos-left', lyricPos.left || 'auto');
      slideDynamic.style.setProperty('--lyric-pos-bottom', lyricPos.bottom || 'auto');
      slideDynamic.style.setProperty('--lyric-pos-right', lyricPos.right || 'auto');
      slideDynamic.style.setProperty('--lyric-pos-width', lyricPos.width || '92%');
      slideDynamic.style.setProperty('--lyric-pos-height', lyricPos.height || 'auto');
      slideDynamic.style.setProperty('--lyric-pos-transform', lyricPos.transform || 'translate(-50%, 0)');
      slideDynamic.style.setProperty('--lyric-text-align', lyricAlign);

      // Set entering state (pass same-image-transition to guarantee zero photo flicker)
      const sameImgClass = isSameImage ? 'same-image-transition' : '';
      slideDynamic.className = `afreen-slide slide-dynamic active is-entering ${sameImgClass} ${layoutClass} ${lyricAnimClass} ${imgAnimClass} ${lyricAlignClass}`.replace(/\s+/g, ' ').trim();
    }

    // 3. Update photo (only change if src is different to keep smooth continuity)
    if (photoEl && item.image) {
      if (!photoEl.src.endsWith(item.image)) {
        photoEl.src = item.image;
      }
    }

    // 3B. Update Arch Frame if specified for this line (e.g. Lines 13-16)
    if (slideDynamic) {
      if (item.arch) {
        if (archPhotoEl && !archPhotoEl.src.endsWith(item.arch)) {
          archPhotoEl.src = item.arch;
        }
        slideDynamic.classList.add('has-arch');
      } else {
        slideDynamic.classList.remove('has-arch');
      }

      // 3C. Update Lantern if specified for this line (e.g. Lines 19-20)
      if (item.lantern) {
        if (lanternPhotoEl && !lanternPhotoEl.src.endsWith(item.lantern)) {
          lanternPhotoEl.src = item.lantern;
        }
        slideDynamic.classList.add('has-lantern');
      } else {
        slideDynamic.classList.remove('has-lantern');
      }
    }

    // 4. Render Lyrics
    renderLineLyrics(index);

    // 5. Force browser reflow to register the starting frame before fading in
    if (slideDynamic) {
      void slideDynamic.offsetWidth;
      slideDynamic.classList.remove('is-entering');
      slideDynamic.classList.remove('is-fading-out');
    }
  }

  // Trigger gentle fade-out of current slide (lyrics always fade; image only fades if different next line)
  function triggerFadeOut(isSameImage = false) {
    if (isFadingOutCurrent || currentSlideIndex === -1) return;
    isFadingOutCurrent = true;
    if (slideDynamic) {
      if (isSameImage) {
        slideDynamic.classList.add('same-image-transition');
      } else {
        slideDynamic.classList.remove('same-image-transition');
      }
      slideDynamic.classList.add('is-fading-out');
    }
  }

  // Change to line with graceful cross-dissolve
  function changeToLine(targetIndex) {
    if (targetIndex === currentSlideIndex) return;
    if (transitionTimer) clearTimeout(transitionTimer);

    const prevItem = AFREEN_LINES_CONFIG[currentSlideIndex];
    const nextItem = AFREEN_LINES_CONFIG[targetIndex];
    const isSameImage = Boolean(
      prevItem &&
      nextItem &&
      prevItem.image &&
      nextItem.image &&
      prevItem.image === nextItem.image
    );

    const fadeOutSpeed = prevItem ? (prevItem.fadeOut || AFREEN_DEFAULT_SETTINGS.fadeOut) : AFREEN_DEFAULT_SETTINGS.fadeOut;

    // If currently visible, fade out first before mounting next line
    if (currentSlideIndex !== -1 && slideDynamic && !slideDynamic.classList.contains('is-fading-out')) {
      triggerFadeOut(isSameImage);
      transitionTimer = setTimeout(() => {
        mountLine(targetIndex, isSameImage);
      }, fadeOutSpeed * 850);
    } else {
      mountLine(targetIndex, isSameImage);
    }
  }

  // Synchronize Slides with Audio Current Time
  audio.addEventListener('timeupdate', () => {
    const time = audio.currentTime;
    const firstLineStart = (AFREEN_LINES_CONFIG[0] && AFREEN_LINES_CONFIG[0].start) ? AFREEN_LINES_CONFIG[0].start : 4.3;

    // 🎵 1. MUSICAL INTRO PRELUDE ANIMATION (0.0s to 4.3s)
    if (time < firstLineStart) {
      if (currentSlideIndex !== -1) {
        currentSlideIndex = -1;
      }
      if (slideDynamic) slideDynamic.classList.remove('active');
      if (slideWelcome) {
        slideWelcome.classList.add('active');
        slideWelcome.classList.add('is-playing-prelude');

        // Smoothly cross-fade out prelude right before Line 1 starts
        if (time >= (firstLineStart - 0.7)) {
          slideWelcome.classList.add('is-fading-out');
        } else {
          slideWelcome.classList.remove('is-fading-out');
        }
      }
      return;
    }

    // 2. ACTIVE LYRIC LINES (4.3s onwards)
    if (slideWelcome) {
      slideWelcome.classList.remove('active');
      slideWelcome.classList.remove('is-fading-out');
      slideWelcome.classList.remove('is-playing-prelude');
    }

    let foundIndex = -1;
    for (let i = 0; i < AFREEN_LINES_CONFIG.length; i++) {
      const s = AFREEN_LINES_CONFIG[i];
      if (time >= s.start && time < s.end) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1 && time >= AFREEN_LINES_CONFIG[AFREEN_LINES_CONFIG.length - 1].start) {
      foundIndex = AFREEN_LINES_CONFIG.length - 1;
    }

    if (foundIndex !== -1) {
      if (foundIndex !== currentSlideIndex) {
        changeToLine(foundIndex);
      } else {
        // In the active line -> check if we are within the fade-out lead time before line ends
        const currentItem = AFREEN_LINES_CONFIG[foundIndex];
        const nextItem = AFREEN_LINES_CONFIG[foundIndex + 1];
        const lead = currentItem.fadeOutLeadTime || AFREEN_DEFAULT_SETTINGS.fadeOutLeadTime;
        const remaining = currentItem.end - time;
        if (remaining <= lead && foundIndex < AFREEN_LINES_CONFIG.length - 1) {
          const isSameImage = Boolean(
            nextItem &&
            currentItem.image &&
            nextItem.image &&
            currentItem.image === nextItem.image
          );
          triggerFadeOut(isSameImage);
        }
      }
    }
  });

  // Handle seeking / scrubbing directly
  audio.addEventListener('seeked', () => {
    const time = audio.currentTime;
    const firstLineStart = (AFREEN_LINES_CONFIG[0] && AFREEN_LINES_CONFIG[0].start) ? AFREEN_LINES_CONFIG[0].start : 4.3;

    // Seeking inside prelude (0s to 4.3s)
    if (time < firstLineStart) {
      currentSlideIndex = -1;
      if (transitionTimer) clearTimeout(transitionTimer);
      if (slideDynamic) slideDynamic.classList.remove('active');
      if (slideWelcome) {
        slideWelcome.classList.add('active');
        if (!audio.paused) {
          slideWelcome.classList.add('is-playing-prelude');
        }
        if (time >= (firstLineStart - 0.7)) {
          slideWelcome.classList.add('is-fading-out');
        } else {
          slideWelcome.classList.remove('is-fading-out');
        }
      }
      return;
    }

    if (slideWelcome) {
      slideWelcome.classList.remove('active');
      slideWelcome.classList.remove('is-fading-out');
      slideWelcome.classList.remove('is-playing-prelude');
    }

    let foundIndex = -1;
    for (let i = 0; i < AFREEN_LINES_CONFIG.length; i++) {
      const s = AFREEN_LINES_CONFIG[i];
      if (time >= s.start && time < s.end) {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex === -1 && time >= AFREEN_LINES_CONFIG[AFREEN_LINES_CONFIG.length - 1].start) {
      foundIndex = AFREEN_LINES_CONFIG.length - 1;
    }
    if (foundIndex !== -1) {
      if (transitionTimer) clearTimeout(transitionTimer);
      const prevItem = AFREEN_LINES_CONFIG[currentSlideIndex];
      const targetItem = AFREEN_LINES_CONFIG[foundIndex];
      const isSameImage = Boolean(
        prevItem &&
        targetItem &&
        prevItem.image &&
        targetItem.image &&
        prevItem.image === targetItem.image &&
        photoEl && photoEl.src && photoEl.src.endsWith(targetItem.image)
      );
      mountLine(foundIndex, isSameImage);
      const currentItem = AFREEN_LINES_CONFIG[foundIndex];
      const lead = currentItem.fadeOutLeadTime || AFREEN_DEFAULT_SETTINGS.fadeOutLeadTime;
      const remaining = currentItem.end - time;
      if (remaining <= lead && foundIndex < AFREEN_LINES_CONFIG.length - 1) {
        const nextItem = AFREEN_LINES_CONFIG[foundIndex + 1];
        const isSameImageNext = Boolean(
          nextItem &&
          currentItem.image &&
          nextItem.image &&
          currentItem.image === nextItem.image
        );
        triggerFadeOut(isSameImageNext);
      }
    }
  });

  // Play / Pause Experience Button
  btnPlay.addEventListener('click', () => {
    if (audio.paused) {
      // 1. Permanently stop previous background website music
      if (bgAudio) {
        try {
          bgAudio.pause();
          bgAudio.currentTime = 0;
        } catch (_) { }
      }

      // 2. Mute ring video so audio doesn't clash
      if (ringVideo) {
        ringVideo.muted = true;
      }

      // 3. Mark Afreen as the global soundtrack across the site
      window.activeAudioTrack = 'afreen';

      // 4. Immediately trigger visual feedback for play & prelude
      updateAfreenPlayButtonUI(true);
      updateMusicUI(true);

      const firstLineStart = (AFREEN_LINES_CONFIG[0] && AFREEN_LINES_CONFIG[0].start) ? AFREEN_LINES_CONFIG[0].start : 4.3;
      if (audio.currentTime < firstLineStart) {
        currentSlideIndex = -1;
        if (slideDynamic) slideDynamic.classList.remove('active');
        if (slideWelcome) {
          slideWelcome.classList.add('active');
          slideWelcome.classList.add('is-playing-prelude');
          slideWelcome.classList.remove('is-fading-out');
        }
      } else {
        let idx = AFREEN_LINES_CONFIG.findIndex(l => audio.currentTime >= l.start && audio.currentTime < l.end);
        mountLine(idx !== -1 ? idx : 0);
      }

      // 5. Play Afreen song unmuted
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Afreen play prevented:', err);
          updateAfreenPlayButtonUI(false);
          updateMusicUI(false);
        });
      }
    } else {
      audio.pause();
      updateAfreenPlayButtonUI(false);
      updateMusicUI(false);
      const firstLineStart = (AFREEN_LINES_CONFIG[0] && AFREEN_LINES_CONFIG[0].start) ? AFREEN_LINES_CONFIG[0].start : 4.3;
      if (audio.currentTime < firstLineStart && slideWelcome) {
        slideWelcome.classList.remove('is-playing-prelude');
      }
    }
  });

  audio.addEventListener('play', () => {
    window.activeAudioTrack = 'afreen';
    updateAfreenPlayButtonUI(true);
    updateMusicUI(true);
    if (stage) {
      stage.classList.remove('animations-paused');
      stage.classList.remove('afreen-perf-idle');
    }
    const firstLineStart = (AFREEN_LINES_CONFIG[0] && AFREEN_LINES_CONFIG[0].start) ? AFREEN_LINES_CONFIG[0].start : 4.3;
    if (audio.currentTime < firstLineStart) {
      if (slideDynamic) slideDynamic.classList.remove('active');
      if (slideWelcome) {
        slideWelcome.classList.add('active');
        slideWelcome.classList.add('is-playing-prelude');
      }
    }
  });

  audio.addEventListener('pause', () => {
    updateAfreenPlayButtonUI(false);
    updateMusicUI(false);
    if (stage) {
      stage.classList.add('animations-paused');
    }
  });

  audio.addEventListener('ended', () => {
    updateAfreenPlayButtonUI(false);
    updateMusicUI(false);
    if (stage) {
      stage.classList.add('afreen-perf-idle');
    }
  });
}

/* ==========================================================================

   FEATURE 3: DUAS & WISHES WITH VOICE & WHATSAPP

   ========================================================================== */

function initDuasAndVoice() {

  const wishInput = document.getElementById('wish-text-input');

  const wishGuestInput = document.getElementById('wish-guest-name');

  const charCounter = document.getElementById('wish-char-counter');

  const chips = document.querySelectorAll('.quick-blessing-chip');

  const btnVoice = document.getElementById('btn-voice-wish');

  const btnVoiceStop = document.getElementById('btn-voice-stop');

  const voiceBtnText = document.getElementById('voice-btn-text');

  const voiceIcon = document.getElementById('voice-icon');

  const voiceStatus = document.getElementById('voice-status-notice');

  const btnWhatsApp = document.getElementById('btn-whatsapp-wish');

  if (!wishInput) return;

  // 1. Live Character Counter

  wishInput.addEventListener('input', () => {

    if (charCounter) {

      charCounter.textContent = wishInput.value.length;

    }

  });

  // 2. Quick Blessing Chips Fill Textarea

  chips.forEach((chip) => {

    chip.addEventListener('click', () => {

      const wishText = chip.getAttribute('data-wish') || '';

      wishInput.value = wishText;

      if (charCounter) charCounter.textContent = wishText.length;

      wishInput.focus();

    });

  });

  // 3. Web Speech API (speechSynthesis) Voice Reading

  const hasSpeech = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  let activeUtterance = null;

  const resetVoiceUI = () => {

    if (voiceBtnText) voiceBtnText.textContent = 'Listen to Your Wish';

    if (voiceIcon) voiceIcon.textContent = '🔊';

    if (btnVoiceStop) btnVoiceStop.classList.add('hidden');

    if (voiceStatus) voiceStatus.style.display = 'none';

  };

  if (!hasSpeech) {

    if (btnVoice) {

      btnVoice.title = 'Voice reading is not supported on this browser';

      btnVoice.style.opacity = '0.7';

    }

  }

  if (btnVoice && hasSpeech) {

    btnVoice.addEventListener('click', () => {

      if (window.speechSynthesis.speaking) {

        if (window.speechSynthesis.paused) {

          // Resume speech

          window.speechSynthesis.resume();

          if (voiceBtnText) voiceBtnText.textContent = 'Pause Listening';

          if (voiceIcon) voiceIcon.textContent = '⏸';

        } else {

          // Pause speech

          window.speechSynthesis.pause();

          if (voiceBtnText) voiceBtnText.textContent = 'Resume Listening';

          if (voiceIcon) voiceIcon.textContent = '▶';

        }

        return;

      }

      // Gather text to speak

      const textToSpeak = wishInput.value.trim() ||

        "May Allah fill their lives with endless love, happiness, and barakah. Ameen!";

      window.speechSynthesis.cancel(); // Stop any pending utterances

      activeUtterance = new SpeechSynthesisUtterance(textToSpeak);

      activeUtterance.rate = 0.95;

      activeUtterance.pitch = 1.0;

      // Select preferred voice (Hindi/Urdu or English)

      const voices = window.speechSynthesis.getVoices();

      if (voices && voices.length > 0) {

        const preferredVoice = voices.find(v => v.lang.startsWith('hi') || v.lang.startsWith('ur')) ||

          voices.find(v => v.lang.includes('IN') || v.lang.startsWith('en')) ||

          voices[0];

        if (preferredVoice) {

          activeUtterance.voice = preferredVoice;

        }

      }

      activeUtterance.onstart = () => {

        if (voiceBtnText) voiceBtnText.textContent = 'Pause Listening';

        if (voiceIcon) voiceIcon.textContent = '⏸';

        if (btnVoiceStop) btnVoiceStop.classList.remove('hidden');

        if (voiceStatus) {

          voiceStatus.style.display = 'block';

          voiceStatus.textContent = '🎙️ Reading your blessings aloud...';

        }

      };

      activeUtterance.onend = resetVoiceUI;

      activeUtterance.onerror = resetVoiceUI;

      window.speechSynthesis.speak(activeUtterance);

    });

  } else if (btnVoice) {

    btnVoice.addEventListener('click', () => {

      if (voiceStatus) {

        voiceStatus.style.display = 'block';

        voiceStatus.textContent = 'Speech synthesis is not supported on this device/browser.';

      }

    });

  }

  if (btnVoiceStop && hasSpeech) {

    btnVoiceStop.addEventListener('click', () => {

      window.speechSynthesis.cancel();

      resetVoiceUI();

    });

  }

  // 4. Send via WhatsApp

  if (btnWhatsApp) {

    btnWhatsApp.addEventListener('click', () => {

      const guestName = (wishGuestInput && wishGuestInput.value.trim()) || 'A Well-Wisher';

      const wishText = wishInput.value.trim() ||

        "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair! 🤲✨ Heartiest Mubarak on your wedding!";

      const whatsappMessage =

        `*Wedding Duas & Wishes for Tauqir & Mahjibeen* 🌸

*From:* ${guestName}

"${wishText}"

_Sent with love via tauqirwedsmahjibeen.com_`;

      const encodedMsg = encodeURIComponent(whatsappMessage);

      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    });

  }

}

/* ==========================================================================

   FEATURE 4: FINAL WEDDING BLESSINGS SCREEN INTERACTIONS

   ========================================================================== */

function initFinalBlessings() {

  const btnScrollWishes = document.getElementById('btn-scroll-wishes');

  const btnReplay = document.getElementById('btn-replay-invitation');

  if (btnScrollWishes) {

    btnScrollWishes.addEventListener('click', () => {

      const duasSection = document.getElementById('duas-wishes');

      if (duasSection) {

        duasSection.scrollIntoView({ behavior: 'smooth' });

      }

    });

  }

  if (btnReplay) {

    btnReplay.addEventListener('click', () => {

      if (typeof window.replayExperience === 'function') {

        window.replayExperience();

      }

    });

  }

}

/* ==========================================================================
   FEATURE 3.5: MUH DIKHAI BOMB BLAST GAME & ROYAL FRAMED GALLERY 👑💣
   ========================================================================== */

function initMuhDikhaiGame() {
  const gameWrap = document.getElementById('muh-dikhai-game-wrap');
  const unlockedGallery = document.getElementById('muh-dikhai-unlocked');
  const gridEl = document.getElementById('muh-dikhai-grid');
  const safeCountEl = document.getElementById('md-safe-count');
  const defeatBanner = document.getElementById('muh-dikhai-defeat');
  const retryBtn = document.getElementById('btn-muh-dikhai-retry');
  const replayBtn = document.getElementById('btn-md-replay');

  // Photo Carousel Elements
  const slidesTrack = document.getElementById('md-slides-track');
  const slides = slidesTrack ? Array.from(slidesTrack.querySelectorAll('.md-slide')) : [];
  const dotsContainer = document.getElementById('md-carousel-dots');
  const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.md-dot')) : [];
  const prevBtn = document.getElementById('md-btn-prev');
  const nextBtn = document.getElementById('md-btn-next');
  const captionTitleEl = document.getElementById('md-caption-title');
  const captionDescEl = document.getElementById('md-caption-desc');

  if (!gridEl || !gameWrap || !unlockedGallery) return;

  const PHOTO_CAPTIONS = [
    {
      title: "Tauqir & Mahjibeen",
      desc: "Mohabbat Ka Khubsoorat Aaghaz • 27–29 November 2026 ❤️"
    },
    {
      title: "Khushiyon Ki Chamak",
      desc: "Duaon Aur Mohabbat Ka Haseen Safar • Jashn-e-Bahaar ✨"
    },
    {
      title: "Dilon Ka Bandhan",
      desc: "Rab Ne Bana Di Jodi • Hamesha Ke Liye Ek Duje Ke 💍"
    }
  ];

  const SHAGUN_TREASURES = [
    { icon: '💍', label: 'Heere Ki Angoothi' },
    { icon: '🍬', label: 'Kaju Katli' },
    { icon: '💌', label: 'Shagun Lifafa ₹501' },
    { icon: '🌹', label: 'Noor-e-Gulab' },
    { icon: '✨', label: 'Kundan Haar' },
    { icon: '👑', label: 'Shahi Taj' }
  ];

  let currentPhotoIndex = 0;
  let safeBoxesOpened = 0;
  let isGameOver = false;
  let gridState = []; // Array of 9 box configs

  // --- Photo Carousel Controller ---
  function goToPhoto(index) {
    if (!slides.length) return;
    slides[currentPhotoIndex]?.classList.remove('active');
    dots[currentPhotoIndex]?.classList.remove('active');

    currentPhotoIndex = (index + slides.length) % slides.length;

    slides[currentPhotoIndex]?.classList.add('active');
    dots[currentPhotoIndex]?.classList.add('active');

    if (PHOTO_CAPTIONS[currentPhotoIndex]) {
      if (captionTitleEl) captionTitleEl.textContent = PHOTO_CAPTIONS[currentPhotoIndex].title;
      if (captionDescEl) captionDescEl.textContent = PHOTO_CAPTIONS[currentPhotoIndex].desc;
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToPhoto(currentPhotoIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToPhoto(currentPhotoIndex + 1));
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToPhoto(idx));
  });

  // Touch Swipe for Mobile Carousel
  const stageEl = document.getElementById('md-frame-stage');
  if (stageEl) {
    let touchStartX = 0;
    let touchEndX = 0;
    stageEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    stageEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) goToPhoto(currentPhotoIndex + 1);
        else goToPhoto(currentPhotoIndex - 1);
      }
    }, { passive: true });
  }

  // --- Confetti Sparkle Burst on Victory ---
  function triggerCelebrationConfetti() {
    const card = document.querySelector('.muh-dikhai-royal-card');
    if (!card) return;
    const colors = ['#D4AF37', '#FFD700', '#FF4081', '#E91E63', '#FFF', '#9C27B0'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.position = 'absolute';
      p.style.width = `${Math.floor(Math.random() * 8 + 6)}px`;
      p.style.height = `${Math.floor(Math.random() * 8 + 6)}px`;
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.top = '40%';
      p.style.left = '50%';
      p.style.zIndex = '99';
      p.style.pointerEvents = 'none';

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 220 + 60;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 80;
      const rot = Math.random() * 720;

      p.style.transition = 'all 1.2s cubic-bezier(0.12, 0.8, 0.32, 1)';
      card.appendChild(p);

      requestAnimationFrame(() => {
        p.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
        p.style.opacity = '0';
      });

      setTimeout(() => p.remove(), 1300);
    }
  }

  // --- Game Engine Setup & Shuffling ---
  function setupGame() {
    safeBoxesOpened = 0;
    isGameOver = false;
    if (safeCountEl) safeCountEl.textContent = '0 / 3';
    if (defeatBanner) defeatBanner.style.display = 'none';

    // Pick 3 random bomb positions out of 9
    const bombIndices = new Set();
    while (bombIndices.size < 3) {
      bombIndices.add(Math.floor(Math.random() * 9));
    }

    // Shuffle treasures for safe positions
    const shuffledTreasures = [...SHAGUN_TREASURES].sort(() => Math.random() - 0.5);
    let treasureIdx = 0;

    gridState = [];
    for (let i = 0; i < 9; i++) {
      if (bombIndices.has(i)) {
        gridState.push({ isBomb: true, icon: '💣', label: 'Shahi Patakha' });
      } else {
        const tr = shuffledTreasures[treasureIdx++] || { icon: '✨', label: 'Shahi Shagun' };
        gridState.push({ isBomb: false, icon: tr.icon, label: tr.label });
      }
    }

    // Render 9 Box DOM Elements
    gridEl.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const box = document.createElement('button');
      box.type = 'button';
      box.className = 'shagun-box';
      box.setAttribute('data-index', i.toString());
      box.setAttribute('aria-label', `Sandook ${i + 1}`);
      box.innerHTML = `
        <span class="box-badge-num">#${i + 1}</span>
        <span class="box-gift-icon">🎁</span>
        <span class="box-gift-label">Sandook #${i + 1}</span>
      `;
      box.addEventListener('click', () => handleBoxClick(i, box));
      gridEl.appendChild(box);
    }
  }

  function handleBoxClick(index, boxEl) {
    if (isGameOver || boxEl.classList.contains('revealed') || boxEl.classList.contains('disabled')) return;

    const data = gridState[index];
    boxEl.classList.add('revealed');

    if (data.isBomb) {
      // BOMB BLAST!
      isGameOver = true;
      boxEl.classList.add('is-bomb', 'exploded');
      boxEl.innerHTML = `
        <span class="box-gift-icon">💥</span>
        <span class="box-gift-label">BOMB! 💣</span>
      `;

      // Shake the whole grid
      gridEl.classList.add('shake');
      setTimeout(() => gridEl.classList.remove('shake'), 600);

      // Reveal remaining bombs so user sees their locations
      const allBoxes = gridEl.querySelectorAll('.shagun-box');
      allBoxes.forEach((otherBox, idx) => {
        if (idx !== index) {
          if (gridState[idx].isBomb) {
            otherBox.classList.add('is-bomb');
            otherBox.innerHTML = `
              <span class="box-gift-icon">💣</span>
              <span class="box-gift-label">Bomb</span>
            `;
          } else {
            otherBox.classList.add('disabled');
          }
        }
      });

      // Show Defeat Message
      setTimeout(() => {
        if (defeatBanner) defeatBanner.style.display = 'block';
      }, 500);

    } else {
      // SAFE BOX!
      boxEl.classList.add('is-safe');
      boxEl.innerHTML = `
        <span class="box-check-badge">✓</span>
        <span class="box-gift-icon">${data.icon}</span>
        <span class="box-gift-label">${data.label}</span>
      `;

      safeBoxesOpened++;
      if (safeCountEl) safeCountEl.textContent = `${safeBoxesOpened} / 3`;

      // Check for WIN condition (3 safe boxes opened)
      if (safeBoxesOpened >= 3) {
        isGameOver = true;

        // Reveal remaining unopened boxes gently
        const allBoxes = gridEl.querySelectorAll('.shagun-box');
        allBoxes.forEach((otherBox, idx) => {
          if (!otherBox.classList.contains('revealed')) {
            otherBox.classList.add('disabled');
            if (gridState[idx].isBomb) {
              otherBox.innerHTML = `<span class="box-gift-icon" style="opacity:0.4;">💣</span><span class="box-gift-label" style="opacity:0.4;">Safe!</span>`;
            }
          }
        });

        // Trigger confetti celebration
        triggerCelebrationConfetti();

        // Remember unlocked state
        try {
          localStorage.setItem('muh_dikhai_unlocked', 'true');
        } catch (e) {
          console.warn('LocalStorage error:', e);
        }

        // Transition to Unlocked Real Photo Gallery
        setTimeout(() => {
          gameWrap.style.display = 'none';
          unlockedGallery.style.display = 'block';
          goToPhoto(0);
          unlockedGallery.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 900);
      }
    }
  }

  // Retry Button on Defeat
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      setupGame();
    });
  }

  // Replay Game from Unlocked Gallery
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      unlockedGallery.style.display = 'none';
      gameWrap.style.display = 'block';
      setupGame();
      gameWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Check if previously unlocked, but let them play or view immediately
  setupGame();
}

/* ==========================================================================
   FEATURE 6: NAZAR NA LAGE SCROLL-REVEAL SLOW FADE-IN (ZERO LAG)
   ========================================================================== */
function initNazarSection() {
  const nazarSection = document.getElementById('nazar-na-lage');
  if (!nazarSection) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nazarSection.classList.add('is-visible');
          obs.unobserve(nazarSection); // Runs once on scroll-in then completely disconnects
        }
      });
    }, { threshold: 0.15 });
    observer.observe(nazarSection);
  } else {
    nazarSection.classList.add('is-visible');
  }
}


