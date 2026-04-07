const SCENE_CONFIG = {
  scene2: { holdStart: 0, holdEnd: 80, transitionEnd: 180 },
  scene3: { holdStart: 180, holdEnd: 280, transitionEnd: 380 },
  scene4: { holdStart: 380, holdEnd: 480, transitionEnd: 580 },
  scene5: { holdStart: 580, holdEnd: 680, transitionEnd: 780 },
  scene6: { holdStart: 780, holdEnd: 880, transitionEnd: 980 },
  scene7: { holdStart: 980, holdEnd: Infinity, transitionEnd: Infinity }
};

const SCENE_KEYS = ['scene2', 'scene3', 'scene4', 'scene5', 'scene6', 'scene7'];
const TRANSITION_KEYS = ['scene2', 'scene3', 'scene4', 'scene5', 'scene6'];

const state = {
  currentScrollY: 0,
  previousScrollY: 0,
  scrollDirection: 'down',
  viewportHeight: window.innerHeight,
  scrollInVh: 0,
  activeScene: 'scene2',
  isInTransition: false,
  transitionProgress: 0,
  prefersReducedMotion: false,
  ticking: false
};

const sceneElements = {
  scene2: document.querySelector('.opening-desk-scene'),
  scene3: document.querySelector('.identity-hero-scene'),
  scene4: document.querySelector('.about-me-scene'),
  scene5: document.querySelector('.projects-scene'),
  scene6: document.querySelector('.recommendations-scene'),
  scene7: document.querySelector('.cta-scene')
};

const rootStyle = document.documentElement.style;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function calculateProgress(value, start, end) {
  if (end === start || !Number.isFinite(end)) return 0;
  return clamp((value - start) / (end - start), 0, 1);
}

function pxToVh(px) {
  return (px / state.viewportHeight) * 100;
}

function detectActiveScene(scrollVh) {
  for (const [sceneKey, config] of Object.entries(SCENE_CONFIG)) {
    if (scrollVh >= config.holdStart && scrollVh < config.holdEnd) {
      return { scene: sceneKey, inTransition: false, transitionProgress: 0 };
    }
  }

  for (const [sceneKey, config] of Object.entries(SCENE_CONFIG)) {
    if (scrollVh >= config.holdEnd && scrollVh < config.transitionEnd) {
      return {
        scene: sceneKey,
        inTransition: true,
        transitionProgress: calculateProgress(scrollVh, config.holdEnd, config.transitionEnd)
      };
    }
  }

  return { scene: 'scene7', inTransition: false, transitionProgress: 0 };
}

function updateScrollState() {
  state.previousScrollY = state.currentScrollY;
  state.currentScrollY = window.scrollY;
  state.scrollInVh = pxToVh(state.currentScrollY);

  if (state.currentScrollY > state.previousScrollY) state.scrollDirection = 'down';
  if (state.currentScrollY < state.previousScrollY) state.scrollDirection = 'up';

  const detection = detectActiveScene(state.scrollInVh);
  state.activeScene = detection.scene;
  state.isInTransition = detection.inTransition;
  state.transitionProgress = detection.transitionProgress;
}

function getTransitionValue(sceneKey) {
  if (state.prefersReducedMotion) return 0;
  const config = SCENE_CONFIG[sceneKey];
  return calculateProgress(state.scrollInVh, config.holdEnd, config.transitionEnd);
}

function getSettleValue(sceneKey, settleDistanceVh = 24) {
  if (state.prefersReducedMotion) return 0;
  if (state.activeScene !== sceneKey || state.isInTransition) return 0;
  const config = SCENE_CONFIG[sceneKey];
  return calculateProgress(settleDistanceVh - (state.scrollInVh - config.holdStart), 0, settleDistanceVh);
}

function applySceneMetadata() {
  document.body.dataset.activeScene = state.activeScene;
  document.body.dataset.scrollDirection = state.scrollDirection;
  document.body.dataset.sceneState = state.isInTransition ? 'transition' : 'hold';
  document.body.dataset.transitionFrom = state.isInTransition ? state.activeScene : 'none';

  SCENE_KEYS.forEach((sceneKey) => {
    const element = sceneElements[sceneKey];
    if (!element) return;
    element.dataset.sceneState = sceneKey === state.activeScene ? document.body.dataset.sceneState : 'inactive';
    element.dataset.sceneActive = sceneKey === state.activeScene ? 'true' : 'false';
  });
}

function applyTransitionVariables() {
  const t1 = getTransitionValue('scene2');
  const t2 = getTransitionValue('scene3');
  const t3 = getTransitionValue('scene4');
  const t4 = getTransitionValue('scene5');
  const t5 = getTransitionValue('scene6');

  rootStyle.setProperty('--t1', t1.toFixed(4));
  rootStyle.setProperty('--t2', t2.toFixed(4));
  rootStyle.setProperty('--t3', t3.toFixed(4));
  rootStyle.setProperty('--t4', t4.toFixed(4));
  rootStyle.setProperty('--t5', t5.toFixed(4));

  rootStyle.setProperty('--s3-settle', getSettleValue('scene3').toFixed(4));
  rootStyle.setProperty('--s4-settle', getSettleValue('scene4').toFixed(4));
  rootStyle.setProperty('--s5-settle', getSettleValue('scene5').toFixed(4));
  rootStyle.setProperty('--s6-settle', getSettleValue('scene6').toFixed(4));
  rootStyle.setProperty('--s7-settle', getSettleValue('scene7', 28).toFixed(4));

  TRANSITION_KEYS.forEach((sceneKey, index) => {
    const progress = getTransitionValue(sceneKey);
    const threshold = progress > 0.02 && progress < 0.98 ? 'true' : 'false';
    document.body.dataset[`transition${index + 1}Active`] = threshold;
  });
}

function renderFrame() {
  state.ticking = false;
  updateScrollState();
  applySceneMetadata();
  applyTransitionVariables();
}

function requestRender() {
  if (state.ticking) return;
  state.ticking = true;
  window.requestAnimationFrame(renderFrame);
}

function updateReducedMotionState(matches) {
  state.prefersReducedMotion = matches;
  document.body.classList.toggle('reduced-motion', matches);
  requestRender();
}

function initReducedMotionListener() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  updateReducedMotionState(mediaQuery.matches);

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', (event) => updateReducedMotionState(event.matches));
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener((event) => updateReducedMotionState(event.matches));
  }
}

function handleResize() {
  state.viewportHeight = window.innerHeight;
  requestRender();
}

function init() {
  document.body.classList.add('phase2-transitions-enabled');
  initReducedMotionListener();

  requestRender();

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
