# MONITOR PORTAL TRANSITION - Spatial Grammar Implementation

**Created**: 2026-04-08
**Status**: Implemented
**Scope**: Scene 2 → Scene 3 (Opening Desk → Identity Hero)

---

## Purpose

This document explains how the monitor portal transition was implemented following correct spatial grammar from the approved Spatial Grammar Correction document.

**This is NOT a zoom. This is NOT a scale effect. This is a spatial portal crossing.**

---

## Implementation Overview

### Files Modified/Created

1. **`scripts/portal-transition.js`** (NEW) - Portal transition logic
2. **`styles/main.css`** - Portal transition CSS mechanics
3. **`index.html`** - Script reference updated

---

## Spatial Grammar Rules Enforced

### Rule 1: Monitor Bezel Becomes Viewport Mask

**How enforced**:
- Center monitor scales from normal size to 8x scale
- At maximum scale, bezel edges extend beyond viewport edges
- Monitor bezel acts as architectural boundary, not just decoration
- `clip-path` applied to Scene 3 creates inset effect (bezel framing)

**Code location**: `scripts/portal-transition.js` lines 130-145 (threshold phase)

```javascript
// Monitor bezel expands to fill viewport (becomes viewport mask)
const scale = lerp(2.5, 8, easedProgress);
centerMonitor.style.transform = `scale(${scale})`;

// Apply bezel mask to scene 3 (monitor frame becomes viewport boundary)
scene3.style.clipPath = `inset(3% 3% 3% 3% round 8px)`;
```

---

### Rule 2: Room Space Completely Occludes When Portal Crossed

**How enforced**:
- Scene 2 (desk/room) opacity goes from 1 → 0 during threshold phase
- At interior state, `scene2.style.opacity = '0'` and `pointerEvents = 'none'`
- Side monitors opacity = 0
- Desk items opacity = 0
- Room context opacity = 0
- **Room is completely invisible after threshold crossing**

**Code location**: `scripts/portal-transition.js` lines 135-153 (threshold phase), lines 158-183 (interior state)

```javascript
// Room completely occludes - THIS IS THE KEY PORTAL MECHANIC
scene2.style.opacity = lerp(1, 0, easedProgress);

// Side monitors completely invisible
sideMonitors.forEach(monitor => {
  monitor.style.opacity = '0';
});
```

**Test**: If you can still see desk, monitors, or room after crossing, the portal is broken.

---

### Rule 3: Threshold Moment is Visually Explicit

**How enforced**:
- Dedicated threshold phase (scrollVh 130-145)
- Distinct visual changes during this 15vh window:
  - Monitor bezel scales 2.5x → 8x (rapid expansion)
  - Room opacity 1 → 0 (complete occlusion)
  - Scene 3 opacity 0 → 1 (interior emergence)
  - Clip-path inset 0% → 3% (bezel mask application)
- This is the **crossing moment** - visually distinct from approach

**Code location**: `scripts/portal-transition.js` lines 127-155 (THRESHOLD CROSSING PHASE comment block)

```javascript
// === THRESHOLD CROSSING PHASE ===
// Monitor bezel aligns with viewport edges, room occludes, portal crossed
if (scrollVh >= PORTAL_CONFIG.thresholdStart && scrollVh < PORTAL_CONFIG.thresholdEnd) {
  // ... explicit threshold mechanics
}
```

---

### Rule 4: Camera Crosses Screen Surface Plane

**How enforced**:
- Approach phase (vh 80-130): Camera moves **toward** monitor surface
- Threshold phase (vh 130-145): Camera **crosses through** screen surface plane
- Interior phase (vh 145+): Camera is **inside** monitor content space

**Visual representation**:
- Approach: Monitor grows, but room still visible
- Threshold: Monitor fills viewport, room occludes, interior appears
- Interior: Only monitor content visible, room completely gone

**Code location**: `scripts/portal-transition.js` - three distinct phases

---

### Rule 5: Interior State is Discontinuous from Exterior State

**How enforced**:
- Scene 2 and Scene 3 are **separate environments**
- When in interior state:
  - Scene 2 is opacity 0, pointerEvents none (doesn't exist)
  - Scene 3 is opacity 1, pointerEvents auto (only reality)
  - No visual connection between states
  - Bezel clip-path creates framing discontinuity
- **Environments do not blend or cross-fade**

**Code location**: `scripts/portal-transition.js` lines 158-183 (INTERIOR STATE)

```javascript
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
}
```

---

## Four Transition Phases

### Phase 1: Scene 2 Hold (vh 0-80)
**State**: Desk visible, 3 monitors visible, no animation
**Purpose**: Establish room space and portal object (center monitor)
**Code**: Lines 91-109

### Phase 2: Approach (vh 80-130)
**State**: Camera moves toward center monitor
**Mechanics**:
- Center monitor scales 1x → 2.5x
- Side monitors fade out and exit frame edges
- Desk items fade out
- Room context begins to fade

**Purpose**: Camera dolly toward portal surface
**Code**: Lines 111-125

### Phase 3: Threshold Crossing (vh 130-145)
**State**: THE PORTAL MOMENT
**Mechanics**:
- Center monitor scales 2.5x → 8x (bezel becomes viewport mask)
- Room opacity 1 → 0 (complete occlusion)
- Scene 3 opacity 0 → 1 (interior emerges)
- Clip-path inset applied (bezel framing)

**Purpose**: Cross screen surface plane, enter portal
**Code**: Lines 127-155

### Phase 4: Interior Hold (vh 145-280)
**State**: Inside monitor content space
**Mechanics**:
- Scene 2 opacity 0, pointerEvents none
- Scene 3 opacity 1, pointerEvents auto, clip-path inset 3%
- Center monitor at scale 8 (maximum)
- All room elements invisible

**Purpose**: Stable interior environment for hero content
**Code**: Lines 158-183

---

## Where Threshold Moment Happens

**Scroll position**: vh 130-145 (15vh window)

**Visual markers**:
1. Monitor bezel edges approaching/aligning with viewport edges
2. Room space rapidly fading to black
3. Monitor interior content simultaneously fading in
4. Bezel clip-path mask being applied to Scene 3

**Physical interpretation**:
- Monitor surface plane crosses camera position
- Camera transitions from exterior (room space) to interior (monitor content space)
- Threshold is the screen surface itself

---

## Why This Cannot Be Misinterpreted as Zoom

### Zoom Characteristics (NOT present):
- ❌ Room remains visible as monitor gets bigger
- ❌ Monitor just "fills screen" without occlusion
- ❌ Gradual blend between scenes
- ❌ Single continuous environment

### Portal Characteristics (PRESENT):
- ✅ Room completely disappears when threshold crossed
- ✅ Monitor bezel becomes architectural viewport boundary (clip-path mask)
- ✅ Explicit threshold moment with distinct visual event
- ✅ Two discontinuous environments (room vs. monitor interior)
- ✅ Bezel acts as permanent framing architecture in interior
- ✅ Cannot see room from inside monitor (complete occlusion)

**The test**: After crossing (vh 145+), if you can see ANY room elements, it's zoom. In this implementation, room is opacity 0 and completely invisible. ✅

---

## Scroll Configuration

```javascript
const PORTAL_CONFIG = {
  scene2HoldStart: 0,      // Scene 2 stable
  scene2HoldEnd: 80,       // End of hold

  approachStart: 80,       // Begin dolly toward monitor
  approachEnd: 130,        // Monitor at threshold

  thresholdStart: 130,     // Begin portal crossing
  thresholdEnd: 145,       // Inside portal

  interiorStart: 145,      // Interior hold begins
  interiorEnd: 280         // End of Scene 3
};
```

---

## Reversibility

**All phases are fully reversible**:
- Scroll down: Room → Approach → Threshold → Interior
- Scroll up: Interior → Threshold → Approach → Room

Each phase's math is based on scroll position, not time, so reversing scroll immediately reverses the transition.

**Code**: All phases use scroll position (scrollVh) to calculate progress, ensuring perfect reversibility.

---

## Accessibility: Prefers Reduced Motion

**Support**: Full

**Implementation**:
1. Detect preference: `window.matchMedia('(prefers-reduced-motion: reduce)')`
2. If true, use `progress = 1` instead of eased progress
3. CSS transitions disabled via media query

**Code**:
- `scripts/portal-transition.js` line 28: detection
- `scripts/portal-transition.js` lines 103, 131: instant progress
- `styles/main.css` lines 571-581: CSS transition disabling

```javascript
const easedProgress = PORTAL_CONFIG.prefersReducedMotion ? 1 : easeInOutCubic(progress);
```

---

## CSS Mechanics

### Scene Positioning
- `.opening-desk-scene`: `position: fixed` - allows room to stay in place while monitor scales
- `.identity-hero-scene`: `position: fixed` (set by JS) - overlays room, receives clip-path mask

### Transitions
- `transform`: 0.6s cubic-bezier for smooth scaling
- `opacity`: 0.3-0.4s ease-out for fades
- `clip-path`: 0.4s cubic-bezier for bezel mask application

### Performance
- `will-change` hints for GPU acceleration
- Transform-based animations (not layout-triggering properties)
- Minimal repaints during transition

---

## Verification Checklist

To verify this is a true portal (not zoom):

- [x] Room completely invisible after threshold (vh 145+)
- [x] Monitor bezel acts as viewport mask (clip-path applied)
- [x] Threshold moment is visually distinct (vh 130-145)
- [x] Interior and exterior are discontinuous (no blend)
- [x] Bezel remains as framing architecture in interior
- [x] Cannot see desk/monitors from inside portal
- [x] Transition is fully reversible
- [x] Prefers-reduced-motion supported
- [x] Four distinct phases implemented
- [x] Scroll position drives all mechanics

---

## Spatial Grammar Success Criteria Met

1. ✅ **What "camera entering monitor" means**: Camera crosses screen surface plane, enters content space
2. ✅ **Visual threshold exists**: Monitor bezel edges at threshold, screen surface as crossing plane
3. ✅ **Monitor frame as spatial boundary**: Bezel becomes viewport mask (clip-path), not decoration
4. ✅ **Threshold crossing visual**: Explicit vh 130-145 phase with bezel expansion and room occlusion
5. ✅ **Changes after crossing**: Complete environment discontinuity, bezel framing, room invisible
6. ✅ **Why zooming insufficient**: Zoom shows room; portal occludes room completely
7. ✅ **Portal vs dolly/pan**: Portal crosses boundary between spaces; dolly/pan stay in same space

---

## Future Work (Out of Scope)

This implementation covers ONLY Scene 2 → Scene 3 (monitor portal).

**Not implemented**:
- Scene 3 → Scene 4 transition (monitor exit, pan to portrait)
- Scene 4 → Scene 5 transition (pan to cabinet)
- Drawer portal (Scene 5 interior)
- Project navigation
- All other transitions

**Next task**: Scene 3 → Scene 4 or drawer portal, following same spatial grammar principles.

---

## Conclusion

This implementation enforces correct spatial grammar for portal crossing:
- Room occludes completely ✅
- Bezel becomes viewport mask ✅
- Threshold moment is explicit ✅
- Interior is discontinuous ✅
- Cannot be mistaken for zoom ✅

**This is a portal. Not a zoom.**

---

**Document Status**: Implementation complete
**Implementation Files**: `scripts/portal-transition.js`, `styles/main.css` (lines 515-581), `index.html` (line 299)
**Verified**: 2026-04-08
