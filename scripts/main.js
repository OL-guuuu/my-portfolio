/**
 * Phase 2 Step 1: Scroll Infrastructure Foundation
 *
 * This file implements ONLY the scroll detection and scene mapping infrastructure.
 * NO visual transitions are implemented yet.
 *
 * Scope:
 * - Scroll position detection
 * - Active scene detection (scenes 2-7)
 * - Transition progress calculation
 * - Reversible scroll logic
 * - prefers-reduced-motion support
 * - Clean hooks for future transition implementations
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * Scene scroll ranges (in viewport heights)
 * Based on PHASE2_TRANSITION_LAYER_PLAN.md specification
 */
const SCENE_CONFIG = {
  scene2: {
    name: 'Opening Desk Scene',
    holdStart: 0,
    holdEnd: 80,
    transitionEnd: 180
  },
  scene3: {
    name: 'Identity Hero Scene',
    holdStart: 180,
    holdEnd: 280,
    transitionEnd: 380
  },
  scene4: {
    name: 'About Me Scene',
    holdStart: 380,
    holdEnd: 480,
    transitionEnd: 580
  },
  scene5: {
    name: 'Projects Scene',
    holdStart: 580,
    holdEnd: 680,
    transitionEnd: 780
  },
  scene6: {
    name: 'Recommendations Scene',
    holdStart: 780,
    holdEnd: 880,
    transitionEnd: 980
  },
  scene7: {
    name: 'CTA Scene',
    holdStart: 980,
    holdEnd: Infinity, // Final scene - no further transitions
    transitionEnd: Infinity
  }
};

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

/**
 * Application state
 */
const state = {
  currentScrollY: 0,
  previousScrollY: 0,
  scrollDirection: 'down', // 'up' or 'down'
  viewportHeight: window.innerHeight,
  scrollInVh: 0, // Scroll position in viewport heights
  activeScene: 'scene2',
  previousScene: 'scene2',
  isInTransition: false,
  transitionProgress: 0, // 0-1 for current transition
  prefersReducedMotion: false
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Convert pixels to viewport heights
 */
function pxToVh(px) {
  return (px / state.viewportHeight) * 100;
}

/**
 * Convert viewport heights to pixels
 */
function vhToPx(vh) {
  return (vh / 100) * state.viewportHeight;
}

/**
 * Clamp a value between min and max
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

/**
 * Calculate progress between two values (0-1)
 */
function calculateProgress(value, start, end) {
  if (end === start) return 0;
  return clamp((value - start) / (end - start), 0, 1);
}

// =============================================================================
// SCENE DETECTION
// =============================================================================

/**
 * Determine which scene is currently active based on scroll position
 */
function detectActiveScene(scrollVh) {
  // Check each scene's hold zone
  for (const [sceneKey, config] of Object.entries(SCENE_CONFIG)) {
    if (scrollVh >= config.holdStart && scrollVh < config.holdEnd) {
      return {
        scene: sceneKey,
        inHoldZone: true,
        inTransition: false,
        transitionProgress: 0
      };
    }
  }

  // If not in a hold zone, we're in a transition
  for (const [sceneKey, config] of Object.entries(SCENE_CONFIG)) {
    if (scrollVh >= config.holdEnd && scrollVh < config.transitionEnd) {
      const progress = calculateProgress(scrollVh, config.holdEnd, config.transitionEnd);
      return {
        scene: sceneKey,
        inHoldZone: false,
        inTransition: true,
        transitionProgress: progress
      };
    }
  }

  // Default to last scene if beyond all ranges
  return {
    scene: 'scene7',
    inHoldZone: true,
    inTransition: false,
    transitionProgress: 0
  };
}

/**
 * Get the next scene after the current one
 */
function getNextScene(currentScene) {
  const sceneNumbers = {
    scene2: 'scene3',
    scene3: 'scene4',
    scene4: 'scene5',
    scene5: 'scene6',
    scene6: 'scene7',
    scene7: null // No scene after scene7
  };
  return sceneNumbers[currentScene];
}

/**
 * Get the previous scene before the current one
 */
function getPreviousScene(currentScene) {
  const sceneNumbers = {
    scene2: null, // No scene before scene2
    scene3: 'scene2',
    scene4: 'scene3',
    scene5: 'scene4',
    scene6: 'scene5',
    scene7: 'scene6'
  };
  return sceneNumbers[currentScene];
}

// =============================================================================
// SCROLL DETECTION
// =============================================================================

/**
 * Update scroll position and direction
 */
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
  // If equal, keep previous direction
}

/**
 * Update active scene based on scroll position
 */
function updateActiveScene() {
  const detection = detectActiveScene(state.scrollInVh);

  state.previousScene = state.activeScene;
  state.activeScene = detection.scene;
  state.isInTransition = detection.inTransition;
  state.transitionProgress = detection.transitionProgress;
}

// =============================================================================
// TRANSITION HOOKS (FOR FUTURE IMPLEMENTATION)
// =============================================================================

/**
 * Hook: Called when entering a scene's hold zone
 * Future implementation will add visual effects here
 */
function onEnterHoldZone(scene) {
  // Log for now - future implementation will add visual effects
  console.log(`[HOLD] Entered hold zone: ${SCENE_CONFIG[scene].name}`);

  // Future: Apply CSS classes for hold zone state
  // Future: Ensure content is stable and readable
  // Future: Stop any transition animations
}

/**
 * Hook: Called when entering a transition between scenes
 * Future implementation will add camera movements here
 */
function onEnterTransition(fromScene, toScene, progress) {
  // Log for now - future implementation will add camera movements
  console.log(`[TRANSITION] ${SCENE_CONFIG[fromScene].name} → ${toScene ? SCENE_CONFIG[toScene].name : 'END'} (${Math.round(progress * 100)}%)`);

  // Future: Apply CSS transforms for camera movement
  // Future: Fade in/out elements as needed
  // Future: Respect prefers-reduced-motion preference
}

/**
 * Hook: Called on every scroll update during transition
 * Future implementation will update camera position here
 */
function onTransitionProgress(fromScene, toScene, progress) {
  // Log progress for now
  if (Math.round(progress * 10) !== Math.round(state.transitionProgress * 10)) {
    // Only log when progress changes by 10% to reduce noise
    console.log(`[PROGRESS] Transition ${Math.round(progress * 100)}%`);
  }

  // Future: Update CSS transforms based on progress
  // Future: Interpolate camera position
  // Future: Update element opacities
}

/**
 * Hook: Called when scene changes
 * Future implementation will handle scene switching here
 */
function onSceneChange(previousScene, currentScene) {
  console.log(`[SCENE CHANGE] ${SCENE_CONFIG[previousScene].name} → ${SCENE_CONFIG[currentScene].name}`);

  // Future: Update active scene classes
  // Future: Trigger scene-specific animations
  // Future: Update navigation state if implemented
}

// =============================================================================
// MAIN SCROLL HANDLER
// =============================================================================

/**
 * Main scroll event handler
 * Orchestrates all scroll-related updates
 */
function handleScroll() {
  // Update scroll position and direction
  updateScrollPosition();

  // Update active scene
  const previousScene = state.activeScene;
  const wasInTransition = state.isInTransition;
  updateActiveScene();

  // Detect scene changes
  if (previousScene !== state.activeScene) {
    onSceneChange(previousScene, state.activeScene);
  }

  // Handle hold zones vs transitions
  if (state.isInTransition) {
    const targetScene = state.scrollDirection === 'down'
      ? getNextScene(state.activeScene)
      : state.activeScene;

    if (!wasInTransition) {
      // Just entered a transition
      onEnterTransition(state.activeScene, targetScene, state.transitionProgress);
    } else {
      // Update transition progress
      onTransitionProgress(state.activeScene, targetScene, state.transitionProgress);
    }
  } else {
    if (wasInTransition) {
      // Just entered a hold zone
      onEnterHoldZone(state.activeScene);
    }
  }

  // Log current state (for debugging Step 1)
  logState();
}

/**
 * Log current state for debugging
 * This will be removed in future steps
 */
let lastLoggedScene = null;
let lastLoggedProgress = -1;

function logState() {
  // Only log when something meaningful changes
  const currentProgress = Math.round(state.transitionProgress * 10);

  if (state.activeScene !== lastLoggedScene || currentProgress !== lastLoggedProgress) {
    console.group('📊 Scroll State');
    console.log(`Scroll: ${Math.round(state.scrollInVh)}vh (${Math.round(state.currentScrollY)}px)`);
    console.log(`Direction: ${state.scrollDirection}`);
    console.log(`Scene: ${state.activeScene} - ${SCENE_CONFIG[state.activeScene].name}`);
    console.log(`In Hold Zone: ${!state.isInTransition}`);
    if (state.isInTransition) {
      console.log(`Transition Progress: ${Math.round(state.transitionProgress * 100)}%`);
    }
    console.log(`Reduced Motion: ${state.prefersReducedMotion}`);
    console.groupEnd();

    lastLoggedScene = state.activeScene;
    lastLoggedProgress = currentProgress;
  }
}

// =============================================================================
// RESIZE HANDLER
// =============================================================================

/**
 * Handle viewport resize
 * Recalculates viewport height and scroll position in vh
 */
function handleResize() {
  state.viewportHeight = window.innerHeight;
  state.scrollInVh = pxToVh(state.currentScrollY);

  console.log(`[RESIZE] Viewport: ${state.viewportHeight}px`);
}

// =============================================================================
// REDUCED MOTION DETECTION
// =============================================================================

/**
 * Detect prefers-reduced-motion preference
 */
function detectReducedMotionPreference() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  state.prefersReducedMotion = mediaQuery.matches;

  console.log(`[ACCESSIBILITY] prefers-reduced-motion: ${state.prefersReducedMotion}`);

  // Listen for changes to preference
  mediaQuery.addEventListener('change', (e) => {
    state.prefersReducedMotion = e.matches;
    console.log(`[ACCESSIBILITY] prefers-reduced-motion changed to: ${state.prefersReducedMotion}`);
  });
}

// =============================================================================
// INITIALIZATION
// =============================================================================

/**
 * Initialize scroll infrastructure
 */
function init() {
  console.log('='.repeat(80));
  console.log('Phase 2 Step 1: Scroll Infrastructure Initialized');
  console.log('This is ONLY the detection infrastructure - no visual transitions yet');
  console.log('NOTE: Infrastructure is dormant until scrollable content is added in Step 2+');
  console.log('='.repeat(80));

  // Detect accessibility preferences
  detectReducedMotionPreference();

  // Set initial viewport height
  state.viewportHeight = window.innerHeight;

  // Set initial scroll position
  updateScrollPosition();
  updateActiveScene();

  // Log initial state
  console.log(`Initial scene: ${state.activeScene} - ${SCENE_CONFIG[state.activeScene].name}`);
  console.log(`Document height: ${document.documentElement.scrollHeight}px`);
  console.log(`Viewport height: ${state.viewportHeight}px`);

  // Add scroll event listener with passive flag for performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Add resize event listener (debounced)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  }, { passive: true });

  console.log('✅ Scroll detection ready (dormant until Step 2+ adds scrollable content)');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =============================================================================
// EXPORT FOR FUTURE USE
// =============================================================================

// Export state and functions for future transition implementations
window.ScrollInfrastructure = {
  state,
  SCENE_CONFIG,
  detectActiveScene,
  getNextScene,
  getPreviousScene,
  calculateProgress,
  pxToVh,
  vhToPx,
  clamp,
  lerp
};
