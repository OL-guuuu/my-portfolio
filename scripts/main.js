/**
 * Phase 2: Full Cinematic Narrative Choreography Layer
 *
 * Complete scroll-driven camera journey through designer's workspace.
 * Implements all transitions, portals, and interactions from PHASE2_CINEMATIC_NARRATIVE_BRIEF.md.
 *
 * Key Features:
 * - Two spatial portals: monitor (portal 1) and drawer (portal 2)
 * - Drawer opening animation
 * - Project window with locked restraint (1 image, 1 title, 1 description, 2 buttons)
 * - Vertical scroll primary, left/right navigation secondary
 * - Soft restrained About text reveal
 * - All transitions reversible and respects prefers-reduced-motion
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
 * Based on PHASE2_CINEMATIC_NARRATIVE_BRIEF.md
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
    transitionEnd: 580,
    // About text reveal timing
    aboutTextRevealStart: 390, // After camera settles (10vh after hold start)
    aboutTextRevealEnd: 410     // Soft 20vh reveal duration
  },
  {
    id: 'scene5',
    name: 'Projects Scene',
    element: null,
    holdStart: 580,
    holdEnd: 620, // Shortened to allow for drawer interaction
    transitionEnd: 780,
    // Drawer opening sub-states
    drawerOpenStart: 620,
    drawerOpenEnd: 660,
    // Portal entry into drawer
    drawerPortalStart: 660,
    drawerPortalEnd: 700,
    // Project window hold
    projectWindowHoldStart: 700,
    projectWindowHoldEnd: 760,
    // Exit drawer
    drawerExitStart: 760,
    drawerExitEnd: 780
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

// Project data (locked to 3 projects)
const PROJECTS = [
  {
    id: 1,
    title: 'AI-Driven Analytics Platform',
    description: 'Enterprise SaaS redesign focused on data visualization and user insights.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/808080?text=Analytics+Platform',
    behanceUrl: '#behance-project-1',
    liveUrl: '#live-project-1'
  },
  {
    id: 2,
    title: 'Mobile Banking Experience',
    description: 'iOS and Android app delivering seamless financial management.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/808080?text=Banking+App',
    behanceUrl: '#behance-project-2',
    liveUrl: '#live-project-2'
  },
  {
    id: 3,
    title: 'Healthcare Patient Portal',
    description: 'User research to launch of comprehensive patient care platform.',
    image: 'https://via.placeholder.com/600x400/2a2a2a/808080?text=Patient+Portal',
    behanceUrl: '#behance-project-3',
    liveUrl: '#live-project-3'
  }
];

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
  isInitialized: false,
  // About text reveal state
  aboutTextRevealed: false,
  aboutTextRevealProgress: 0,
  // Drawer interaction state
  drawerIsOpen: false,
  drawerOpenProgress: 0,
  isInDrawerPortal: false,
  drawerPortalProgress: 0,
  // Project navigation state
  currentProjectIndex: 0, // 0-2 for 3 projects
  projectWindowVisible: false,
  isNavigatingProjects: false
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
 * Transition 2: Scene 3 → Scene 4 (Monitor Exit - Reverse Portal + Portrait Arrival)
 *
 * This transition has TWO parts:
 * Part A: Monitor Exit (Reverse Portal) - vh 280-345
 * Part B: Portrait Arrival (Reorientation) - vh 345-380
 *
 * PART A implements REVERSE PORTAL logic (exact inverse of monitor entry)
 */
function applyTransition2(scene3, scene4, progress) {
  const easedProgress = easeInOutCubic(progress);

  // Get monitor elements (needed for reverse portal)
  const scene2 = SCENES[0].element;
  const centerMonitor = document.querySelector('.monitor--center');
  const sideMonitors = document.querySelectorAll('.monitor--left, .monitor--right');
  const deskItems = document.querySelector('.desk-items');
  const roomContext = document.querySelector('.room-context');

  // Convert progress (0-1 for full transition) to sub-phases
  // Phase boundaries within the 100vh transition (280-380):
  // 0.0-0.65 = Monitor Exit Reverse Portal (280-345 = 65vh)
  // 0.65-1.0 = Portrait Arrival Reorientation (345-380 = 35vh)

  if (progress < 0.65) {
    // === PART A: MONITOR EXIT REVERSE PORTAL ===
    // Map progress 0-0.65 to 0-1 for portal exit
    const portalProgress = progress / 0.65;

    // Further subdivide portal exit into phases:
    // 0.0-0.23 = Threshold Crossing (15vh out of 65vh)
    // 0.23-1.0 = Pull-back (50vh out of 65vh)

    if (portalProgress < 0.23) {
      // === THRESHOLD CROSSING PHASE (REVERSE) ===
      // This is THE KEY PORTAL MOMENT - room re-emerges from complete occlusion
      const thresholdProgress = portalProgress / 0.23;
      const thresholdEased = easeInOutCubic(thresholdProgress);

      // Monitor bezel edges pull away from viewport edges
      // Scale: 8 → 2.5 (reverse of entry 2.5 → 8)
      const scale = lerp(8, 2.5, thresholdEased);
      if (centerMonitor) {
        centerMonitor.style.transform = `scale(${scale})`;
        centerMonitor.style.zIndex = '100';
      }

      // Scene 3 (monitor interior) fades OUT as we cross threshold
      const interiorOpacity = lerp(1, 0, thresholdEased);
      scene3.style.opacity = interiorOpacity;
      scene3.style.pointerEvents = interiorOpacity > 0.5 ? 'auto' : 'none';

      // Clip-path bezel mask releases (3% → 0%)
      const bezelMaskInset = lerp(3, 0, thresholdEased);
      scene3.style.clipPath = `inset(${bezelMaskInset}% ${bezelMaskInset}% ${bezelMaskInset}% ${bezelMaskInset}% round 8px)`;

      // Scene 2 (room) re-emerges from complete invisibility
      // This is the OCCLUSION REVERSAL - room was opacity 0, now fades in
      const roomOpacity = lerp(0, 1, thresholdEased);
      if (scene2) {
        scene2.style.opacity = roomOpacity;
        scene2.style.pointerEvents = roomOpacity > 0.5 ? 'auto' : 'none';
      }

      // Side monitors still invisible during threshold
      if (sideMonitors) {
        sideMonitors.forEach(monitor => {
          monitor.style.opacity = '0';
        });
      }

      // Desk items still invisible during threshold
      if (deskItems) {
        deskItems.style.opacity = '0';
      }

      // Room context begins to re-appear
      if (roomContext) {
        const contextOpacity = lerp(0, 0.3, thresholdEased);
        roomContext.style.opacity = contextOpacity;
      }

      // Scene 4 completely invisible during portal exit
      scene4.style.opacity = '0';
      scene4.style.pointerEvents = 'none';

    } else {
      // === PULL-BACK PHASE ===
      // Camera continues pulling back from monitor, room fully restored
      const pullbackProgress = (portalProgress - 0.23) / 0.77;
      const pullbackEased = easeInOutCubic(pullbackProgress);

      // Monitor continues scaling down to normal size (2.5 → 1)
      const scale = lerp(2.5, 1, pullbackEased);
      if (centerMonitor) {
        centerMonitor.style.transform = `scale(${scale})`;
      }

      // Scene 3 completely invisible (portal fully exited)
      scene3.style.opacity = '0';
      scene3.style.pointerEvents = 'none';
      scene3.style.clipPath = 'none';

      // Scene 2 fully visible
      if (scene2) {
        scene2.style.opacity = '1';
        scene2.style.pointerEvents = 'auto';
      }

      // Side monitors re-enter frame from edges
      if (sideMonitors) {
        const sideOpacity = lerp(0, 1, pullbackEased);
        const leftX = lerp(-100, 0, pullbackEased);
        const rightX = lerp(100, 0, pullbackEased);

        const leftMonitor = document.querySelector('.monitor--left');
        const rightMonitor = document.querySelector('.monitor--right');

        if (leftMonitor) {
          leftMonitor.style.opacity = sideOpacity;
          leftMonitor.style.transform = `perspective(1000px) rotateY(8deg) translateX(${leftX}%)`;
        }

        if (rightMonitor) {
          rightMonitor.style.opacity = sideOpacity;
          rightMonitor.style.transform = `perspective(1000px) rotateY(-8deg) translateX(${rightX}%)`;
        }
      }

      // Desk items fade back in
      if (deskItems) {
        deskItems.style.opacity = lerp(0, 1, pullbackEased);
      }

      // Room context fully restored
      if (roomContext) {
        roomContext.style.opacity = lerp(0.3, 1, pullbackEased);
      }

      // Scene 4 completely invisible during pull-back
      scene4.style.opacity = '0';
      scene4.style.pointerEvents = 'none';
    }

  } else {
    // === PART B: PORTRAIT ARRIVAL (REORIENTATION) ===
    // Map progress 0.65-1.0 to 0-1 for portrait arrival
    const portraitProgress = (progress - 0.65) / 0.35;
    const portraitEased = easeInOutCubic(portraitProgress);

    // Portal exit complete - ensure clean state
    scene3.style.opacity = '0';
    scene3.style.pointerEvents = 'none';
    scene3.style.clipPath = 'none';

    if (centerMonitor) {
      centerMonitor.style.transform = 'none';
    }

    // Scene 2 begins to pan left as camera turns left toward portrait
    // This is REORIENTATION, not portal - room stays visible
    if (scene2) {
      const translateX2 = lerp(0, -30, portraitEased);
      const opacity2 = lerp(1, 0, portraitEased);
      scene2.style.transform = `translateX(${translateX2}%)`;
      scene2.style.opacity = opacity2;
    }

    // Scene 4 (portrait) pans in from left as camera settles
    const translateX4 = lerp(-30, 0, portraitEased);
    const opacity4 = lerp(0, 1, portraitEased);
    scene4.style.transform = `translateX(${translateX4}%)`;
    scene4.style.opacity = opacity4;
    scene4.style.pointerEvents = opacity4 > 0.5 ? 'auto' : 'none';
  }
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

// =============================================================================
// ABOUT TEXT REVEAL
// =============================================================================

/**
 * Soft restrained About text reveal (no drama, no type-on, just opacity fade)
 */
function updateAboutTextReveal(scrollVh) {
  const scene4 = SCENES[2]; // About Me Scene
  if (!scene4.aboutTextRevealStart) return;

  const aboutTextBlock = document.querySelector('.about-text-block');
  if (!aboutTextBlock) return;

  // Calculate reveal progress
  if (scrollVh >= scene4.aboutTextRevealStart && scrollVh <= scene4.aboutTextRevealEnd) {
    const progress = (scrollVh - scene4.aboutTextRevealStart) /
                    (scene4.aboutTextRevealEnd - scene4.aboutTextRevealStart);
    state.aboutTextRevealProgress = clamp(progress, 0, 1);

    // Soft opacity fade: 0 → 1
    const opacity = easeInOutCubic(state.aboutTextRevealProgress);
    aboutTextBlock.style.opacity = opacity;
    aboutTextBlock.style.transition = state.prefersReducedMotion ? 'none' : 'opacity 0.8s ease-out';

    if (progress >= 1 && !state.aboutTextRevealed) {
      state.aboutTextRevealed = true;
    }
  } else if (scrollVh < scene4.aboutTextRevealStart) {
    // Before reveal - hidden
    aboutTextBlock.style.opacity = '0';
    state.aboutTextRevealed = false;
    state.aboutTextRevealProgress = 0;
  } else if (scrollVh > scene4.aboutTextRevealEnd) {
    // After reveal - fully visible
    aboutTextBlock.style.opacity = '1';
    state.aboutTextRevealed = true;
    state.aboutTextRevealProgress = 1;
  }
}

// =============================================================================
// DRAWER OPENING ANIMATION
// =============================================================================

/**
 * Drawer opening animation (smooth mechanical motion)
 */
function updateDrawerOpening(scrollVh) {
  const scene5 = SCENES[3]; // Projects Scene
  if (!scene5.drawerOpenStart) return;

  const firstDrawer = document.querySelector('.cabinet-drawer:nth-child(2)'); // Drawer 2 (first project)
  if (!firstDrawer) return;

  // Calculate drawer open progress
  if (scrollVh >= scene5.drawerOpenStart && scrollVh <= scene5.drawerOpenEnd) {
    const progress = (scrollVh - scene5.drawerOpenStart) /
                    (scene5.drawerOpenEnd - scene5.drawerOpenStart);
    state.drawerOpenProgress = clamp(progress, 0, 1);

    // Smooth pull-out animation (translateY for vertical drawer slide)
    const easedProgress = easeInOutCubic(state.drawerOpenProgress);
    const pullDistance = easedProgress * 30; // 30% of drawer depth

    firstDrawer.style.transform = `translateY(${pullDistance}%)`;
    firstDrawer.style.transition = state.prefersReducedMotion ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';

    if (progress >= 1 && !state.drawerIsOpen) {
      state.drawerIsOpen = true;
    }
  } else if (scrollVh < scene5.drawerOpenStart) {
    // Drawer closed
    firstDrawer.style.transform = 'translateY(0)';
    state.drawerIsOpen = false;
    state.drawerOpenProgress = 0;
  } else if (scrollVh > scene5.drawerOpenEnd) {
    // Drawer fully open
    firstDrawer.style.transform = 'translateY(30%)';
    state.drawerIsOpen = true;
    state.drawerOpenProgress = 1;
  }
}

// =============================================================================
// DRAWER PORTAL ENTRY (Portal 2)
// =============================================================================

/**
 * Camera entry into drawer interior (second spatial portal)
 */
function updateDrawerPortalEntry(scrollVh) {
  const scene5 = SCENES[3]; // Projects Scene
  if (!scene5.drawerPortalStart) return;

  const projectsScene = scene5.element;
  if (!projectsScene) return;

  // Calculate portal entry progress
  if (scrollVh >= scene5.drawerPortalStart && scrollVh <= scene5.drawerPortalEnd) {
    const progress = (scrollVh - scene5.drawerPortalStart) /
                    (scene5.drawerPortalEnd - scene5.drawerPortalStart);
    state.drawerPortalProgress = clamp(progress, 0, 1);

    // Camera dollies into drawer interior
    const easedProgress = easeInOutCubic(state.drawerPortalProgress);
    const scale = lerp(1, 1.8, easedProgress);
    const translateY = lerp(0, -20, easedProgress); // Move up as we enter

    projectsScene.style.transform = `translateY(${translateY}%) scale(${scale})`;
    projectsScene.style.transition = state.prefersReducedMotion ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';

    if (progress >= 1 && !state.isInDrawerPortal) {
      state.isInDrawerPortal = true;
    }
  } else if (scrollVh < scene5.drawerPortalStart) {
    // Before portal entry
    projectsScene.style.transform = 'none';
    state.isInDrawerPortal = false;
    state.drawerPortalProgress = 0;
  } else if (scrollVh > scene5.drawerPortalEnd) {
    // Inside drawer portal
    projectsScene.style.transform = 'translateY(-20%) scale(1.8)';
    state.isInDrawerPortal = true;
    state.drawerPortalProgress = 1;
  }
}

// =============================================================================
// DRAWER EXIT (Step 10)
// =============================================================================

/**
 * Camera exit from drawer interior back to room view
 * Reverses the portal entry, pulling back to cabinet view
 */
function updateDrawerExit(scrollVh) {
  const scene5 = SCENES[3]; // Projects Scene
  if (!scene5.drawerExitStart) return;

  const projectsScene = scene5.element;
  if (!projectsScene) return;

  // Calculate exit progress
  if (scrollVh >= scene5.drawerExitStart && scrollVh <= scene5.drawerExitEnd) {
    const progress = (scrollVh - scene5.drawerExitStart) /
                    (scene5.drawerExitEnd - scene5.drawerExitStart);
    const exitProgress = clamp(progress, 0, 1);

    // Camera pulls back from drawer interior
    const easedProgress = easeInOutCubic(exitProgress);
    const scale = lerp(1.8, 1, easedProgress); // Reverse zoom out
    const translateY = lerp(-20, 0, easedProgress); // Move back down

    projectsScene.style.transform = `translateY(${translateY}%) scale(${scale})`;
    projectsScene.style.transition = state.prefersReducedMotion ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';

    if (progress >= 1) {
      state.isInDrawerPortal = false;
    }
  } else if (scrollVh < scene5.drawerExitStart) {
    // Still inside drawer portal
    projectsScene.style.transform = 'translateY(-20%) scale(1.8)';
    state.isInDrawerPortal = true;
  } else if (scrollVh >= scene5.drawerExitEnd) {
    // Fully exited, back to normal room view
    projectsScene.style.transform = 'none';
    state.isInDrawerPortal = false;
  }
}

// =============================================================================
// PROJECT WINDOW SYSTEM
// =============================================================================

/**
 * Create project window element with locked restraint
 * One image, one title, one description, exactly two buttons
 */
function createProjectWindow(projectIndex) {
  const project = PROJECTS[projectIndex];
  if (!project) return null;

  const window = document.createElement('div');
  window.className = 'project-window';
  window.setAttribute('data-project-id', project.id);

  window.innerHTML = `
    <div class="project-window__frame">
      <img src="${project.image}" alt="${project.title}" class="project-window__image">
      <h3 class="project-window__title">${project.title}</h3>
      <p class="project-window__description">${project.description}</p>
      <div class="project-window__buttons">
        <a href="${project.behanceUrl}" class="project-window__button project-window__button--behance" target="_blank" rel="noopener noreferrer">
          View on Behance
        </a>
        <a href="${project.liveUrl}" class="project-window__button project-window__button--live" target="_blank" rel="noopener noreferrer">
          View Live Project
        </a>
      </div>
    </div>
  `;

  return window;
}

/**
 * Show/hide project window based on scroll position
 */
function updateProjectWindow(scrollVh) {
  const scene5 = SCENES[3]; // Projects Scene
  if (!scene5.projectWindowHoldStart) return;

  let projectWindowContainer = document.querySelector('.project-window-container');

  // Create container if it doesn't exist
  if (!projectWindowContainer) {
    projectWindowContainer = document.createElement('div');
    projectWindowContainer.className = 'project-window-container';
    document.body.appendChild(projectWindowContainer);
  }

  // Show/hide based on scroll position
  if (scrollVh >= scene5.projectWindowHoldStart && scrollVh <= scene5.projectWindowHoldEnd) {
    if (!state.projectWindowVisible) {
      // Show project window
      projectWindowContainer.innerHTML = '';
      const window = createProjectWindow(state.currentProjectIndex);
      if (window) {
        projectWindowContainer.appendChild(window);
      }
      projectWindowContainer.style.opacity = '1';
      projectWindowContainer.style.pointerEvents = 'auto';
      state.projectWindowVisible = true;
    }
  } else {
    // Hide project window
    projectWindowContainer.style.opacity = '0';
    projectWindowContainer.style.pointerEvents = 'none';
    state.projectWindowVisible = false;
  }
}

/**
 * Navigate between projects (secondary optional interaction)
 */
function navigateToProject(direction) {
  if (!state.projectWindowVisible) return;

  const newIndex = state.currentProjectIndex + direction;

  // Clamp to valid range (0-2)
  if (newIndex < 0 || newIndex >= PROJECTS.length) return;

  state.currentProjectIndex = newIndex;
  state.isNavigatingProjects = true;

  // Update project window
  const projectWindowContainer = document.querySelector('.project-window-container');
  if (projectWindowContainer) {
    const oldWindow = projectWindowContainer.querySelector('.project-window');
    const newWindow = createProjectWindow(state.currentProjectIndex);

    if (oldWindow && newWindow) {
      // Slide transition
      oldWindow.style.transform = `translateX(${direction > 0 ? '-100%' : '100%'})`;
      oldWindow.style.opacity = '0';

      setTimeout(() => {
        projectWindowContainer.innerHTML = '';
        projectWindowContainer.appendChild(newWindow);
        newWindow.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`;
        newWindow.style.opacity = '0';

        requestAnimationFrame(() => {
          newWindow.style.transition = state.prefersReducedMotion ? 'none' : 'transform 0.4s ease, opacity 0.4s ease';
          newWindow.style.transform = 'translateX(0)';
          newWindow.style.opacity = '1';

          setTimeout(() => {
            state.isNavigatingProjects = false;
          }, 400);
        });
      }, state.prefersReducedMotion ? 0 : 300);
    }
  }
}

/**
 * Reset scene to hold state (no transforms, full opacity)
 * Special handling for Scene 3 (monitor interior) to maintain portal state
 */
function resetSceneToHold(sceneElement) {
  if (!sceneElement) return;

  // Special handling for Scene 3 (Identity Hero - Monitor Interior)
  if (sceneElement.classList.contains('identity-hero-scene')) {
    // Scene 3 hold state: Inside monitor portal
    sceneElement.style.transform = 'none';
    sceneElement.style.opacity = '1';
    sceneElement.style.clipPath = 'inset(3% 3% 3% 3% round 8px)'; // Bezel mask maintained
    sceneElement.style.pointerEvents = 'auto';

    // Ensure room (Scene 2) is completely invisible during Scene 3 hold
    const scene2 = SCENES[0].element;
    if (scene2) {
      scene2.style.opacity = '0';
      scene2.style.pointerEvents = 'none';
    }

    // Ensure monitor is at portal scale
    const centerMonitor = document.querySelector('.monitor--center');
    if (centerMonitor) {
      centerMonitor.style.transform = 'scale(8)';
      centerMonitor.style.zIndex = '100';
    }

    // Ensure side monitors invisible
    const sideMonitors = document.querySelectorAll('.monitor--left, .monitor--right');
    sideMonitors.forEach(monitor => {
      monitor.style.opacity = '0';
    });

    // Ensure desk items invisible
    const deskItems = document.querySelector('.desk-items');
    if (deskItems) {
      deskItems.style.opacity = '0';
    }

    // Ensure room context invisible
    const roomContext = document.querySelector('.room-context');
    if (roomContext) {
      roomContext.style.opacity = '0';
    }
  } else {
    // Normal scenes: clean hold state
    sceneElement.style.transform = 'none';
    sceneElement.style.opacity = '1';
    sceneElement.style.clipPath = 'none';
    sceneElement.style.pointerEvents = 'auto';
  }

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

  // Update About text reveal
  updateAboutTextReveal(state.scrollInVh);

  // Update drawer opening
  updateDrawerOpening(state.scrollInVh);

  // Update drawer portal entry
  updateDrawerPortalEntry(state.scrollInVh);

  // Update drawer exit (Step 10)
  updateDrawerExit(state.scrollInVh);

  // Update project window
  updateProjectWindow(state.scrollInVh);

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
// KEYBOARD NAVIGATION
// =============================================================================

/**
 * Handle keyboard navigation for projects (secondary optional interaction)
 */
function handleKeyDown(event) {
  // Only handle arrow keys when project window is visible
  if (!state.projectWindowVisible) return;
  if (state.isNavigatingProjects) return; // Prevent rapid navigation

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    navigateToProject(-1); // Previous project
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    navigateToProject(1); // Next project
  }
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

  // Add keyboard event listener for project navigation
  document.addEventListener('keydown', handleKeyDown);

  state.isInitialized = true;

  console.log('✅ Phase 2 transition system initialized');
  console.log(`   - Document height: ${TOTAL_JOURNEY_VH}vh`);
  console.log(`   - Viewport height: ${state.viewportHeight}px`);
  console.log(`   - Reduced motion: ${state.prefersReducedMotion}`);
  console.log(`   - All ${SCENES.length} scenes ready`);
  console.log('   - Scroll to begin journey through workspace');
  console.log('   - Use Arrow Left/Right for project navigation (when visible)');
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
