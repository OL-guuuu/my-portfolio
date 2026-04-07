/**
 * Phase 2: Full Transition & Animation Layer Implementation
 *
 * This implements the complete scroll-driven camera transition system
 * for the cinematic portfolio experience through one designer's workspace.
 *
 * Five Transitions:
 * 1. Scene 2 → Scene 3: Dolly into center monitor
 * 2. Scene 3 → Scene 4: Pull back and pan left to wall portrait
 * 3. Scene 4 → Scene 5: Pan right to archive cabinet
 * 4. Scene 5 → Scene 6: Continue pan right to message board
 * 5. Scene 6 → Scene 7: Pan back to desk, settle on CTA
 *
 * Core principles:
 * - User scroll drives progression
 * - Calm, premium, restrained, editorial, cinematic
 * - One continuous spatial journey through one room
 * - All transitions reversible
 * - Respects prefers-reduced-motion
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * Scene scroll configuration (in viewport heights)
 * Based on PHASE2_TRANSITION_LAYER_PLAN.md
 */
const SCENES = [
  {
    id: 'scene2',
    name: 'Opening Desk Scene',
    element: null, // Will be set in init
    holdStart: 0,
    holdEnd: 80,
    transitionEnd: 180
  },
  {
    id: 'scene3',
    name: 'Identity Hero Scene',
    element: null,
    holdStart: 180,
    holdEnd: 280,
    transitionEnd: 380
  },
  {
    id: 'scene4',
    name: 'About Me Scene',
    element: null,
    holdStart: 380,
    holdEnd: 480,
    transitionEnd: 580
  },
  {
    id: 'scene5',
    name: 'Projects Scene',
    element: null,
    holdStart: 580,
    holdEnd: 680,
    transitionEnd: 780
  },
  {
    id: 'scene6',
    name: 'Recommendations Scene',
    element: null,
    holdStart: 780,
    holdEnd: 880,
    transitionEnd: 980
  },
  {
    id: 'scene7',
    name: 'CTA Scene',
    element: null,
    holdStart: 980,
    holdEnd: Infinity,
    transitionEnd: Infinity
  }
];

// Total document height in viewport heights
const TOTAL_JOURNEY_VH = 1100;

// =============================================================================
// STATE
// =============================================================================

const state = {
  currentScrollY: 0,
  previousScrollY: 0,
  scrollDirection: 'down',
  viewportHeight: window.innerHeight,
  scrollInVh: 0,
  activeSceneIndex: 0,
  previousSceneIndex: 0,
  isInTransition: false,
  transitionProgress: 0,
  prefersReducedMotion: false,
  isInitialized: false
};

// =============================================================================
// UTILITIES
// =============================================================================

function pxToVh(px) {
  return (px / state.viewportHeight) * 100;
}

function vhToPx(vh) {
  return (vh / 100) * state.viewportHeight;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// =============================================================================
// SCENE DETECTION
// =============================================================================

function getCurrentSceneAndProgress(scrollVh) {
  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i];

    // In hold zone
    if (scrollVh >= scene.holdStart && scrollVh < scene.holdEnd) {
      return {
        sceneIndex: i,
        inHoldZone: true,
        inTransition: false,
        transitionProgress: 0,
        fromScene: i,
        toScene: i
      };
    }

    // In transition zone
    if (scrollVh >= scene.holdEnd && scrollVh < scene.transitionEnd) {
      const progress = (scrollVh - scene.holdEnd) / (scene.transitionEnd - scene.holdEnd);
      return {
        sceneIndex: i,
        inHoldZone: false,
        inTransition: true,
        transitionProgress: clamp(progress, 0, 1),
        fromScene: i,
        toScene: i + 1 < SCENES.length ? i + 1 : i
      };
    }
  }

  // Default to last scene
  return {
    sceneIndex: SCENES.length - 1,
    inHoldZone: true,
    inTransition: false,
    transitionProgress: 0,
    fromScene: SCENES.length - 1,
    toScene: SCENES.length - 1
  };
}

// =============================================================================
// TRANSITION IMPLEMENTATIONS
// =============================================================================

/**
 * Transition 1: Scene 2 → Scene 3 (Desk to Identity Hero)
 * Forward dolly into center monitor
 */
function applyTransition1(scene2, scene3, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Scene 2: Scales up and fades as camera moves forward into monitor
  const scale2 = lerp(1, 1.5, easedProgress);
  const opacity2 = lerp(1, 0, easedProgress);
  scene2.style.transform = `scale(${scale2})`;
  scene2.style.opacity = opacity2;

  // Scene 3: Fades in and scales from slight zoom as we enter monitor world
  const scale3 = lerp(0.95, 1, easedProgress);
  const opacity3 = lerp(0, 1, easedProgress);
  scene3.style.transform = `scale(${scale3})`;
  scene3.style.opacity = opacity3;
}

/**
 * Transition 2: Scene 3 → Scene 4 (Identity Hero to About Me)
 * Pull back from monitor, then pan left to wall portrait
 */
function applyTransition2(scene3, scene4, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Scene 3: Pull back (slight scale down) and pan right as camera turns left
  const translateX3 = lerp(0, 30, easedProgress); // Pan right (camera turns left)
  const scale3 = lerp(1, 0.9, easedProgress);
  const opacity3 = lerp(1, 0, easedProgress);
  scene3.style.transform = `translateX(${translateX3}%) scale(${scale3})`;
  scene3.style.opacity = opacity3;

  // Scene 4: Pan in from left as camera settles on portrait
  const translateX4 = lerp(-30, 0, easedProgress);
  const opacity4 = lerp(0, 1, easedProgress);
  scene4.style.transform = `translateX(${translateX4}%)`;
  scene4.style.opacity = opacity4;
}

/**
 * Transition 3: Scene 4 → Scene 5 (About Me to Projects)
 * Lateral pan right across room to archive cabinet
 */
function applyTransition3(scene4, scene5, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Scene 4: Pan left as camera moves right
  const translateX4 = lerp(0, -40, easedProgress);
  const opacity4 = lerp(1, 0, easedProgress);
  scene4.style.transform = `translateX(${translateX4}%)`;
  scene4.style.opacity = opacity4;

  // Scene 5: Pan in from right
  const translateX5 = lerp(40, 0, easedProgress);
  const opacity5 = lerp(0, 1, easedProgress);
  scene5.style.transform = `translateX(${translateX5}%)`;
  scene5.style.opacity = opacity5;
}

/**
 * Transition 4: Scene 5 → Scene 6 (Projects to Recommendations)
 * Continue pan right from cabinet to message board
 */
function applyTransition4(scene5, scene6, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Scene 5: Continue panning left
  const translateX5 = lerp(0, -40, easedProgress);
  const opacity5 = lerp(1, 0, easedProgress);
  scene5.style.transform = `translateX(${translateX5}%)`;
  scene5.style.opacity = opacity5;

  // Scene 6: Pan in from right
  const translateX6 = lerp(40, 0, easedProgress);
  const opacity6 = lerp(0, 1, easedProgress);
  scene6.style.transform = `translateX(${translateX6}%)`;
  scene6.style.opacity = opacity6;
}

/**
 * Transition 5: Scene 6 → Scene 7 (Recommendations to CTA)
 * Pan back toward desk, settle on final CTA
 */
function applyTransition5(scene6, scene7, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Scene 6: Pan left and fade as camera returns to desk area
  const translateX6 = lerp(0, -30, easedProgress);
  const opacity6 = lerp(1, 0, easedProgress);
  scene6.style.transform = `translateX(${translateX6}%)`;
  scene6.style.opacity = opacity6;

  // Scene 7: Gentle zoom and fade in as final CTA settles
  const scale7 = lerp(0.95, 1, easedProgress);
  const opacity7 = lerp(0, 1, easedProgress);
  scene7.style.transform = `scale(${scale7})`;
  scene7.style.opacity = opacity7;
}

/**
 * Apply appropriate transition based on which scenes are transitioning
 */
function applyTransition(fromIndex, toIndex, progress) {
  if (fromIndex >= SCENES.length || toIndex >= SCENES.length) return;

  const fromScene = SCENES[fromIndex].element;
  const toScene = SCENES[toIndex].element;

  if (!fromScene || !toScene) return;

  // Apply transition based on scene pair
  if (fromIndex === 0 && toIndex === 1) {
    applyTransition1(fromScene, toScene, progress);
  } else if (fromIndex === 1 && toIndex === 2) {
    applyTransition2(fromScene, toScene, progress);
  } else if (fromIndex === 2 && toIndex === 3) {
    applyTransition3(fromScene, toScene, progress);
  } else if (fromIndex === 3 && toIndex === 4) {
    applyTransition4(fromScene, toScene, progress);
  } else if (fromIndex === 4 && toIndex === 5) {
    applyTransition5(fromScene, toScene, progress);
  }
}

/**
 * Reset scene to hold state (no transforms, full opacity)
 */
function resetSceneToHold(sceneElement) {
  if (!sceneElement) return;
  sceneElement.style.transform = 'none';
  sceneElement.style.opacity = '1';
  sceneElement.classList.add('scene--hold');
  sceneElement.classList.remove('scene--hidden', 'scene--transitioning');
}

/**
 * Hide scene completely
 */
function hideScene(sceneElement) {
  if (!sceneElement) return;
  sceneElement.style.opacity = '0';
  sceneElement.classList.add('scene--hidden');
  sceneElement.classList.remove('scene--hold', 'scene--transitioning');
}

// =============================================================================
// SCENE UPDATES
// =============================================================================

function updateScenes() {
  const detection = getCurrentSceneAndProgress(state.scrollInVh);

  state.activeSceneIndex = detection.sceneIndex;
  state.isInTransition = detection.inTransition;
  state.transitionProgress = detection.transitionProgress;

  // Update all scenes
  SCENES.forEach((scene, index) => {
    if (!scene.element) return;

    if (detection.inHoldZone) {
      // In hold zone - show active scene, hide others
      if (index === detection.sceneIndex) {
        resetSceneToHold(scene.element);
      } else {
        hideScene(scene.element);
      }
    } else {
      // In transition - apply transition between scenes
      if (index === detection.fromScene || index === detection.toScene) {
        scene.element.classList.add('scene--transitioning');
        scene.element.classList.remove('scene--hidden', 'scene--hold');

        // Apply the actual transition
        if (state.scrollDirection === 'down') {
          applyTransition(detection.fromScene, detection.toScene, detection.transitionProgress);
        } else {
          // Reverse transition when scrolling up
          applyTransition(detection.fromScene, detection.toScene, 1 - detection.transitionProgress);
        }
      } else if (index < detection.fromScene) {
        // Scenes before transition - hide
        hideScene(scene.element);
      } else if (index > detection.toScene) {
        // Scenes after transition - hide
        hideScene(scene.element);
      }
    }
  });
}

// =============================================================================
// SCROLL HANDLING
// =============================================================================

function updateScrollPosition() {
  state.previousScrollY = state.currentScrollY;
  state.currentScrollY = window.scrollY;
  state.scrollInVh = pxToVh(state.currentScrollY);

  // Determine scroll direction
  if (state.currentScrollY > state.previousScrollY) {
    state.scrollDirection = 'down';
  } else if (state.currentScrollY < state.previousScrollY) {
    state.scrollDirection = 'up';
  }
}

function handleScroll() {
  updateScrollPosition();
  updateScenes();
}

// Use requestAnimationFrame for smoother performance
let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
}

// =============================================================================
// RESIZE HANDLING
// =============================================================================

function handleResize() {
  state.viewportHeight = window.innerHeight;
  state.scrollInVh = pxToVh(state.currentScrollY);

  // Re-apply transforms based on current scroll position
  updateScenes();
}

let resizeTimeout;
function onResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 150);
}

// =============================================================================
// REDUCED MOTION SUPPORT
// =============================================================================

function detectReducedMotionPreference() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  state.prefersReducedMotion = mediaQuery.matches;

  // If reduced motion is preferred, disable transitions
  if (state.prefersReducedMotion) {
    document.body.classList.add('reduced-motion');
    // In reduced motion mode, instantly snap between scenes
    console.log('[ACCESSIBILITY] Reduced motion mode active');
  }

  mediaQuery.addEventListener('change', (e) => {
    state.prefersReducedMotion = e.matches;
    if (e.matches) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  });
}

// =============================================================================
// DOCUMENT HEIGHT SETUP
// =============================================================================

function setupDocumentHeight() {
  // Create a spacer element to ensure document can scroll through full journey
  const spacer = document.createElement('div');
  spacer.id = 'scroll-journey-spacer';
  spacer.style.height = `${TOTAL_JOURNEY_VH}vh`;
  spacer.style.pointerEvents = 'none';
  spacer.style.position = 'absolute';
  spacer.style.top = '0';
  spacer.style.left = '0';
  spacer.style.width = '1px';
  spacer.style.zIndex = '-1000';
  spacer.setAttribute('aria-hidden', 'true');

  document.body.appendChild(spacer);

  console.log(`[SETUP] Document height set to ${TOTAL_JOURNEY_VH}vh for full journey`);
}

// =============================================================================
// INITIALIZATION
// =============================================================================

function init() {
  console.log('='.repeat(80));
  console.log('Phase 2: Full Transition & Animation Layer');
  console.log('Implementing scroll-driven cinematic camera transitions');
  console.log('='.repeat(80));

  // Get scene elements
  SCENES[0].element = document.querySelector('.opening-desk-scene');
  SCENES[1].element = document.querySelector('.identity-hero-scene');
  SCENES[2].element = document.querySelector('.about-me-scene');
  SCENES[3].element = document.querySelector('.projects-scene');
  SCENES[4].element = document.querySelector('.recommendations-scene');
  SCENES[5].element = document.querySelector('.cta-scene');

  // Verify all scenes found
  const missingScenes = SCENES.filter(s => !s.element);
  if (missingScenes.length > 0) {
    console.error('[ERROR] Missing scene elements:', missingScenes.map(s => s.id));
    return;
  }

  // Detect accessibility preferences
  detectReducedMotionPreference();

  // Setup document height for scrollable journey
  setupDocumentHeight();

  // Set initial viewport height
  state.viewportHeight = window.innerHeight;

  // Set initial scroll position
  updateScrollPosition();

  // Initialize scene states
  updateScenes();

  // Add scroll event listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Add resize event listener
  window.addEventListener('resize', onResize, { passive: true });

  state.isInitialized = true;

  console.log('✅ Phase 2 transition system initialized');
  console.log(`   - Document height: ${TOTAL_JOURNEY_VH}vh`);
  console.log(`   - Viewport height: ${state.viewportHeight}px`);
  console.log(`   - Reduced motion: ${state.prefersReducedMotion}`);
  console.log(`   - All ${SCENES.length} scenes ready`);
  console.log('   - Scroll to begin journey through workspace');
  console.log('='.repeat(80));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for debugging
window.PortfolioTransitions = {
  state,
  SCENES,
  updateScenes,
  getCurrentSceneAndProgress
};
