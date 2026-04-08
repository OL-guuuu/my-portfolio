/**
 * MONITOR PORTAL TRANSITION - Spatial Grammar Implementation
 *
 * This implements the Scene 2 → Scene 3 transition as a true spatial portal crossing,
 * NOT as a zoom or scale effect.
 *
 * Key Spatial Grammar Rules Enforced:
 * 1. Monitor bezel becomes viewport mask (not just scales up)
 * 2. Room space completely occludes when portal is crossed
 * 3. Threshold moment is visually explicit
 * 4. Camera crosses screen surface plane
 * 5. Interior state is discontinuous from exterior state
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

const PORTAL_CONFIG = {
  // Scene 2 hold (vh units)
  scene2HoldStart: 0,
  scene2HoldEnd: 80,

  // Approach phase (camera moves toward monitor)
  approachStart: 80,
  approachEnd: 130,

  // Threshold crossing (the portal moment)
  thresholdStart: 130,
  thresholdEnd: 145,

  // Interior hold (inside monitor)
  interiorStart: 145,
  interiorEnd: 280,

  // Total journey vh
  totalJourneyVH: 1100,

  // Reduced motion
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

// =============================================================================
// STATE
// =============================================================================

const state = {
  currentScrollY: 0,
  viewportHeight: window.innerHeight,
  scrollInVh: 0,
  isInitialized: false
};

// =============================================================================
// UTILITIES
// =============================================================================

function pxToVh(px) {
  return (px / state.viewportHeight) * 100;
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
// PORTAL TRANSITION IMPLEMENTATION
// =============================================================================

/**
 * Apply the monitor portal transition based on scroll position
 *
 * @param {number} scrollVh - Current scroll position in viewport heights
 */
function applyMonitorPortalTransition(scrollVh) {
  const scene2 = document.querySelector('.opening-desk-scene');
  const scene3 = document.querySelector('.identity-hero-scene');
  const centerMonitor = document.querySelector('.monitor--center');
  const sideMonitors = document.querySelectorAll('.monitor--left, .monitor--right');
  const deskItems = document.querySelector('.desk-items');
  const roomContext = document.querySelector('.room-context');

  if (!scene2 || !scene3 || !centerMonitor) return;

  // === SCENE 2 HOLD STATE ===
  // Desk visible, 3 monitors visible, no animation
  if (scrollVh < PORTAL_CONFIG.scene2HoldEnd) {
    scene2.style.transform = 'none';
    scene2.style.opacity = '1';
    scene2.style.clipPath = 'none';

    scene3.style.opacity = '0';
    scene3.style.pointerEvents = 'none';

    // Reset all monitor states
    centerMonitor.style.transform = 'none';
    centerMonitor.style.width = '';
    centerMonitor.style.height = '';
    centerMonitor.style.position = '';

    sideMonitors.forEach(monitor => {
      monitor.style.opacity = '1';
      monitor.style.transform = '';
    });

    return;
  }

  // === APPROACH PHASE ===
  // Camera moves toward center monitor, side monitors exit frame
  if (scrollVh >= PORTAL_CONFIG.approachStart && scrollVh < PORTAL_CONFIG.approachEnd) {
    const progress = (scrollVh - PORTAL_CONFIG.approachStart) /
                     (PORTAL_CONFIG.approachEnd - PORTAL_CONFIG.approachStart);
    const easedProgress = PORTAL_CONFIG.prefersReducedMotion ? 1 : easeInOutCubic(progress);

    // Camera dollies forward - center monitor grows toward edges
    const scale = lerp(1, 2.5, easedProgress);
    centerMonitor.style.transform = `scale(${scale})`;
    centerMonitor.style.transformOrigin = 'center center';
    centerMonitor.style.zIndex = '100';

    // Side monitors exit frame edges
    const sideOpacity = lerp(1, 0, easedProgress);
    const leftX = lerp(0, -100, easedProgress);
    const rightX = lerp(0, 100, easedProgress);

    document.querySelector('.monitor--left').style.opacity = sideOpacity;
    document.querySelector('.monitor--left').style.transform =
      `perspective(1000px) rotateY(8deg) translateX(${leftX}%)`;

    document.querySelector('.monitor--right').style.opacity = sideOpacity;
    document.querySelector('.monitor--right').style.transform =
      `perspective(1000px) rotateY(-8deg) translateX(${rightX}%)`;

    // Desk items fade out
    if (deskItems) {
      deskItems.style.opacity = lerp(1, 0, easedProgress);
    }

    // Room context begins to fade
    if (roomContext) {
      roomContext.style.opacity = lerp(1, 0.3, easedProgress);
    }

    return;
  }

  // === THRESHOLD CROSSING PHASE ===
  // Monitor bezel aligns with viewport edges, room occludes, portal crossed
  if (scrollVh >= PORTAL_CONFIG.thresholdStart && scrollVh < PORTAL_CONFIG.thresholdEnd) {
    const progress = (scrollVh - PORTAL_CONFIG.thresholdStart) /
                     (PORTAL_CONFIG.thresholdEnd - PORTAL_CONFIG.thresholdStart);
    const easedProgress = PORTAL_CONFIG.prefersReducedMotion ? 1 : easeInOutCubic(progress);

    // Monitor bezel expands to fill viewport (becomes viewport mask)
    // The bezel edges align with viewport edges
    const scale = lerp(2.5, 8, easedProgress);
    centerMonitor.style.transform = `scale(${scale})`;
    centerMonitor.style.zIndex = '100';

    // Room completely occludes - THIS IS THE KEY PORTAL MECHANIC
    scene2.style.opacity = lerp(1, 0, easedProgress);

    // Side monitors completely invisible
    sideMonitors.forEach(monitor => {
      monitor.style.opacity = '0';
    });

    // Desk items invisible
    if (deskItems) {
      deskItems.style.opacity = '0';
    }

    // Room context completely invisible
    if (roomContext) {
      roomContext.style.opacity = '0';
    }

    // Scene 3 (monitor interior) begins to fade in
    // This represents the camera crossing the screen surface plane
    const interiorOpacity = lerp(0, 1, easedProgress);
    scene3.style.opacity = interiorOpacity;
    scene3.style.pointerEvents = interiorOpacity > 0.5 ? 'auto' : 'none';

    // Apply bezel mask to scene 3 (monitor frame becomes viewport boundary)
    const bezelMaskInset = lerp(0, 3, easedProgress);
    scene3.style.clipPath = `inset(${bezelMaskInset}% ${bezelMaskInset}% ${bezelMaskInset}% ${bezelMaskInset}% round 8px)`;

    return;
  }

  // === INTERIOR STATE ===
  // Camera is inside monitor, bezel as viewport mask, room completely invisible
  if (scrollVh >= PORTAL_CONFIG.interiorStart) {
    // Scene 2 (room) completely invisible - we are inside the portal
    scene2.style.opacity = '0';
    scene2.style.pointerEvents = 'none';

    // Scene 3 fully visible with bezel mask
    scene3.style.opacity = '1';
    scene3.style.pointerEvents = 'auto';
    scene3.style.clipPath = 'inset(3% 3% 3% 3% round 8px)';

    // Center monitor at maximum scale (filling viewport as mask)
    centerMonitor.style.transform = 'scale(8)';

    // All room elements invisible
    sideMonitors.forEach(monitor => {
      monitor.style.opacity = '0';
    });

    if (deskItems) {
      deskItems.style.opacity = '0';
    }

    if (roomContext) {
      roomContext.style.opacity = '0';
    }

    return;
  }
}

// =============================================================================
// SCROLL HANDLING
// =============================================================================

function handleScroll() {
  state.currentScrollY = window.scrollY;
  state.scrollInVh = pxToVh(state.currentScrollY);

  applyMonitorPortalTransition(state.scrollInVh);
}

function handleResize() {
  state.viewportHeight = window.innerHeight;

  // Update total document height
  const totalHeight = (PORTAL_CONFIG.totalJourneyVH / 100) * state.viewportHeight;
  document.body.style.height = `${totalHeight}px`;

  // Reapply transition at current scroll position
  handleScroll();
}

// =============================================================================
// INITIALIZATION
// =============================================================================

function init() {
  if (state.isInitialized) return;

  // Set document height to enable scrolling
  const totalHeight = (PORTAL_CONFIG.totalJourneyVH / 100) * state.viewportHeight;
  document.body.style.height = `${totalHeight}px`;

  // Initial state setup
  const scene3 = document.querySelector('.identity-hero-scene');
  if (scene3) {
    scene3.style.position = 'fixed';
    scene3.style.top = '0';
    scene3.style.left = '0';
    scene3.style.width = '100%';
    scene3.style.height = '100vh';
    scene3.style.opacity = '0';
    scene3.style.pointerEvents = 'none';
    scene3.style.zIndex = '200';
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  // Initial render
  handleScroll();

  state.isInitialized = true;

  console.log('Monitor Portal Transition initialized with spatial grammar');
}

// =============================================================================
// START
// =============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for debugging
window.portalTransition = {
  state,
  config: PORTAL_CONFIG,
  applyTransition: applyMonitorPortalTransition
};
