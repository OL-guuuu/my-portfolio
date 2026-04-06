# PHASE 2 TRANSITION LAYER PLAN

**Status**: Locked Specification — Ready for Implementation Approval
**Created**: 2026-04-06
**Phase**: Phase 2 — Transition/Scroll Layer Planning
**Parent Documents**: WORLD_BIBLE.md, MASTER_EXPERIENCE_BLUEPRINT.md, ROOM_LAYOUT_MAP.md, KEYFRAMES_SPECIFICATION.md, SCENE7_NOTEBOOK_RESET_BRIEF.md

---

## Document Purpose

This document defines the **final locked transition logic** for Phase 2 implementation.

All six scenes (2-7) exist as excellent static HTML/CSS foundations. This document locks down exactly how camera movement reveals these scenes through scroll-driven choreography.

**This is the locked planning specification. No alternatives, no options, no variations.**

**Phase 2 planning is complete. Implementation may begin after approval.**

---

## Current Phase Status

**Phase**: Phase 2 — Transition/Scroll Layer Planning

**What is complete**:
- ✅ Phase 0: All planning and specifications approved
- ✅ Phase 1: All six scenes (2-7) implemented as static HTML/CSS foundations
- ✅ Scene 2: Opening Desk Scene — 3 monitors on desk
- ✅ Scene 3: Identity Hero Scene — inside center monitor content
- ✅ Scene 4: About Me Scene — left wall portrait with text
- ✅ Scene 5: Projects Scene — right side archive cabinet
- ✅ Scene 6: Recommendations Scene — right wall message board
- ✅ Scene 7: CTA Scene — desk-area notebook with handwritten invitation

**What Phase 2 will add**:
- Scroll-driven camera transitions between static scenes
- User-controlled progression through portfolio narrative
- Calm, cinematic camera movements revealing content
- Hold zones where content is readable at rest
- CSS and JavaScript transition system only (no 3D/WebGL)

**What Phase 2 will NOT add**:
- 3D rendering or WebGL
- Loading screen transitions (Scene 1 → Scene 2)
- Audio/music system
- Complex micro-interactions
- Scene content redesigns
- Scope expansion beyond core transitions

---

## Core Transition Principles

### The One-Room Camera Rule

**Every transition is a cinematic camera movement through one continuous office space.**

- Camera travels through physical space, never teleports
- All objects remain in fixed positions throughout
- Camera reveals content that already exists
- User maintains spatial orientation at all times
- Movement motivated by narrative progression
- No world breaks or spatial discontinuities

### One Coherent Workspace

The entire experience exists within **one singular designer's office**:

- Desk zone: front/center with 3 monitors
- Left wall: portrait and About Me text
- Right side: archive cabinet with projects
- Right wall: message board with recommendations
- Desk area: notebook with handwritten invitation

Camera explores this single space progressively, never leaving the room.

---

## Movement Quality Standards

### Calm, Premium, Restrained, Editorial, Cinematic

**These five qualities are mandatory for all transitions:**

**Calm**:
- Gentle, unhurried camera movements
- No sudden jolts or aggressive speed
- Transition duration: 2-3 seconds at normal scroll speed
- Ease-in-out curves (gentle starts, gentle ends)

**Premium**:
- 60fps performance target
- Smooth, professional execution
- No janky scrolling or stuttering
- Hardware-accelerated CSS transforms only

**Restrained**:
- Minimal movement to achieve narrative purpose
- Direct paths between scenes
- No unnecessary flourishes
- Camera serves content, doesn't show off

**Editorial**:
- Deliberate, considered pacing
- Composed framing at all positions
- Magazine-quality visual standards
- Content readable or tastefully out of frame

**Cinematic**:
- Documentary-style exploration
- Motivated dolly and pan movements
- Camera explores with clear purpose
- Feels like filmmaker touring office with intention

### Explicitly NOT Game-Like

**This is NOT**:
- First-person game camera controls
- Aggressive parallax scrolljacking
- Rapid swoops, spins, or rotations
- Disorienting speed changes
- Competitive game energy
- Flashy camera showmanship

**This IS**:
- Deliberate dolly movements (tracking forward/backward)
- Smooth pan movements (rotating left/right)
- Motivated reframing between content areas
- Professional documentary-style exploration

---

## Scroll Choreography System

### User Control Principle

**User scroll = camera progression through space**

- User controls pacing entirely through scroll speed
- Scroll down = camera moves forward through narrative
- Scroll up = camera moves backward (fully reversible)
- User can pause at any scroll position
- No auto-play, no forced timing, no scroll-jacking
- Respects `prefers-reduced-motion` preference

### Scroll-to-Camera Mapping

**Linear, predictable relationship**:

- Consistent scroll distance for each transition (~100vh per transition)
- Smooth 1:1 mapping between scroll amount and camera movement
- No sudden speed changes or jumps
- Transitions feel continuous and under user control
- Total experience: approximately 980-1100vh scroll height

### Scene Anchoring at Scroll Positions

**Locked scroll positions** (approximate viewport heights):

- **Scene 2 Hold**: 0-80vh — Opening Desk Scene
- **Transition 1**: 80-180vh — Dolly into center monitor
- **Scene 3 Hold**: 180-280vh — Identity Hero content
- **Transition 2**: 280-380vh — Pull back and pan left to wall
- **Scene 4 Hold**: 380-480vh — About Me portrait and text
- **Transition 3**: 480-580vh — Pan right to cabinet
- **Scene 5 Hold**: 580-680vh — Projects cabinet
- **Transition 4**: 680-780vh — Continue pan right to board
- **Scene 6 Hold**: 780-880vh — Recommendations board
- **Transition 5**: 880-980vh — Move to desk-area notebook
- **Scene 7 Hold**: 980vh+ — Final notebook CTA (end of journey)

---

## Scene Hold Zones

### Hold Zone Definition

**Every scene has a readable rest position where camera is completely stationary.**

Between transitions, camera holds steady at each scene for user to read content comfortably.

### Hold Zone Requirements

**At each scene**:

1. **Camera stops completely** — no movement, perfectly stable frame
2. **Content fully readable** — all text at optimal size and position
3. **Composition settled** — visual hierarchy clear and balanced
4. **User can pause indefinitely** — no pressure to continue scrolling
5. **Scroll threshold clear** — user understands when they're in scene vs transitioning

### Protecting Content During Transitions

**Content readability is preserved**:

- **During hold zones**: All content perfectly readable, camera stationary
- **During transitions**: Scene exiting fades to neutral background OR camera frames empty space between focal points
- **No blur effects**: Content remains clear or is not visible (clean fade to background)
- **No text sliding through frame**: Text doesn't pass across viewport mid-transition
- **Clean handoffs**: Old scene exits before new scene enters, or seamless pan across neutral space

### Hold Zone Durations

**Each scene hold zone**: Approximately 80-120vh scroll range

- Scene 2 hold: 80vh
- Scene 3 hold: 100vh
- Scene 4 hold: 100vh
- Scene 5 hold: 100vh
- Scene 6 hold: 100vh
- Scene 7 hold: 120vh+ (final scene, no further transitions)

---

## Transition 1: Scene 2 → Scene 3 (Desk to Identity Hero)

### Cinematic Movement Description

**Forward dolly into center monitor**

Camera tracks forward toward the center monitor on the desk, entering its content space to reveal the identity message.

### Movement Sequence

1. **Hold at Scene 2**: Wide desk view, all 3 monitors visible, camera stationary
2. **User scrolls**: Triggers forward dolly movement
3. **Camera moves forward**: Tracking straight toward center monitor
4. **Center monitor enlarges**: Fills frame as camera approaches
5. **Left and right monitors exit**: Slide out of frame naturally as center monitor dominates
6. **Enter monitor content space**: Camera completes dolly inside monitor's visual field
7. **Hold at Scene 3**: Identity content (logo, name, role, headlines) visible and stable

### What Moves

- **Camera position**: Dollies forward on straight Z-axis path toward center monitor
- **Center monitor**: Appears to grow larger as camera approaches (relative scaling)
- **Left/right monitors**: Exit frame edges naturally
- **Desk items**: Exit frame bottom as camera focuses upward

### What Stays Static

- **Center monitor position**: Monitor doesn't move, camera moves toward it
- **Identity content**: Text and logo exist on monitor, revealed by camera approach
- **Desk and monitor arrangement**: All objects remain in fixed spatial positions

### Content Protection

- Scene 2 fully readable during hold
- Transition: desk context fades to background naturally as camera moves forward
- Scene 3 fully readable as camera settles

---

## Transition 2: Scene 3 → Scene 4 (Identity Hero to About Me)

### Cinematic Movement Description

**Pull back from monitor, then pan left to wall portrait**

Camera dollies backward away from monitor content, then rotates left to reframe on the left wall where the portrait hangs.

### Movement Sequence

1. **Hold at Scene 3**: Identity content fills frame, camera stationary
2. **User scrolls**: Triggers pull-back movement
3. **Camera pulls back**: Dollies backward, monitor content shrinks
4. **Brief desk context**: Monitors become visible again momentarily
5. **Camera begins left pan**: Rotates left away from desk toward left wall
6. **Desk exits right**: Desk and monitors slide out of frame to the right
7. **Left wall enters**: Wall portrait enters frame from left
8. **Portrait centers**: Camera settles on portrait with About Me text alongside
9. **Hold at Scene 4**: Portrait and text fully visible and stable

### What Moves

- **Camera position**: Dollies backward (Z-axis), then pans/rotates left (Y-axis)
- **Monitor content**: Shrinks as camera backs away
- **Desk**: Briefly visible, then exits right side of frame
- **Left wall and portrait**: Enter frame from left as camera pans

### What Stays Static

- **All room objects**: Monitors, desk, portrait remain in fixed positions
- **Wall portrait**: Exists on left wall, camera pans to reveal it
- **About Me text**: Positioned near portrait, static layout

### Content Protection

- Scene 3 fully readable during hold
- Transition: monitor content fades as camera backs away, desk exits cleanly
- No unreadable text passing through center frame
- Scene 4 fully readable as camera settles

---

## Transition 3: Scene 4 → Scene 5 (About Me to Projects)

### Cinematic Movement Description

**Lateral pan right across room to archive cabinet**

Camera pans right from left wall portrait, traveling across the office space to reveal the archive cabinet on the right side.

### Movement Sequence

1. **Hold at Scene 4**: Portrait and About Me text visible, camera stationary
2. **User scrolls**: Triggers rightward pan
3. **Camera pans right**: Rotates/slides right across room
4. **Portrait exits left**: Wall portrait slides out of frame to the left
5. **Neutral wall space**: Camera frames neutral wall surface or room context briefly during pan
6. **Cabinet enters right**: Archive cabinet comes into frame from right side
7. **Cabinet centers**: Camera settles on cabinet with project drawers clearly visible
8. **Hold at Scene 5**: Cabinet and drawer labels fully visible and stable

### What Moves

- **Camera position**: Pans/rotates right (Y-axis rotation or X-axis lateral slide)
- **Left wall portrait**: Exits frame left
- **Archive cabinet**: Enters frame right

### What Stays Static

- **Portrait on left wall**: Remains in fixed position
- **Cabinet on right side**: Remains in fixed position
- **All room objects**: Nothing moves except camera viewpoint

### Content Protection

- Scene 4 fully readable during hold
- Transition: portrait exits cleanly left, camera frames neutral space during pan
- Desk/monitor objects not relied upon during transition
- Scene 5 fully readable as camera settles

### Minimal Transition Approach

**For first implementation**:
- Simple right pan across neutral background (room wall color)
- Portrait fades out left, cabinet fades in right
- No complex parallax layers or mid-transition content required
- Clean, simple lateral camera movement

---

## Transition 4: Scene 5 → Scene 6 (Projects to Recommendations)

### Cinematic Movement Description

**Continue pan right from cabinet to message board**

Camera continues rightward pan from archive cabinet to the message board mounted on the right wall.

### Movement Sequence

1. **Hold at Scene 5**: Archive cabinet visible, camera stationary
2. **User scrolls**: Triggers continued rightward pan
3. **Camera pans right**: Continues rotation/slide right
4. **Cabinet exits left**: Archive cabinet slides out of frame to the left
5. **Neutral wall space**: Camera frames right wall surface briefly during pan
6. **Message board enters right**: Pinned notes board comes into frame from right
7. **Board centers**: Camera settles on board with recommendation notes clearly visible
8. **Hold at Scene 6**: Board and pinned notes fully visible and stable

### What Moves

- **Camera position**: Continues panning right
- **Archive cabinet**: Exits frame left
- **Message board**: Enters frame right

### What Stays Static

- **Cabinet on right side**: Remains in fixed position
- **Message board on right wall**: Remains in fixed position
- **Pinned notes**: Exist on board surface, static arrangement

### Content Protection

- Scene 5 fully readable during hold
- Transition: cabinet exits cleanly left, camera frames neutral right wall space
- No essential content passing through center
- Scene 6 fully readable as camera settles

### Minimal Transition Approach

**For first implementation**:
- Simple right pan continuation across wall surface
- Cabinet fades out left, board fades in right
- Neutral wall background during transition
- No complex mid-transition elements required

---

## Transition 5: Scene 6 → Scene 7 (Recommendations to CTA Notebook)

### Cinematic Movement Description

**Pan and reframe from board to desk-area notebook**

Camera moves from right wall message board back toward desk area, completing the spatial circle by settling on an open notebook on the desk surface.

### Movement Sequence

1. **Hold at Scene 6**: Message board and notes visible, camera stationary
2. **User scrolls**: Triggers final movement toward desk area
3. **Camera begins pan/reframe**: Rotates away from right wall toward desk area
4. **Board exits**: Message board slides out of frame
5. **Room context during pan**: Camera frames neutral room space briefly as it travels
6. **Desk area returns**: Camera approaches desk area where journey began
7. **Notebook comes into focus**: Open notebook on desk surface becomes visible
8. **Camera settles close**: Intimate framing on notebook with handwritten invitation
9. **Hold at Scene 7**: Notebook fully visible and readable — final rest position

### What Moves

- **Camera position**: Pans/rotates from right wall back toward desk area, then settles on close framing of notebook
- **Message board**: Exits frame as camera leaves right wall
- **Notebook**: Comes into focus as camera frames desk surface

### What Stays Static

- **Message board on wall**: Remains in fixed position
- **Notebook on desk**: Exists on desk surface in fixed position
- **All room objects**: Desk, monitors, notebook remain stationary

### Content Protection

- Scene 6 fully readable during hold
- Transition: board exits cleanly, camera frames neutral room space during movement
- Scene 7 fully readable: notebook with handwritten text visible and stable
- **Final rest state**: Camera holds perfectly still on notebook

### Full-Circle Closure

**Spatial narrative completion**:

- Journey started at desk (Scene 2)
- Journey explored left wall, right side, right wall
- Journey returns to desk area (Scene 7)
- Notebook on desk creates intimate conclusion where experience began
- User understands spatial tour is complete

### Final Scene Stability

**Scene 7 settles into fully readable final rest state**:

- Camera completely stationary on notebook
- Handwritten text perfectly readable at comfortable size:
  - Line 1: "If this feels right, write to me."
  - Line 2: "hello@oussamalassoued.com"
- No further movement or animation
- User can remain at this final scene indefinitely
- Clear endpoint to scroll journey
- Calm, resolved conclusion

---

## What Stays Static During All Transitions

### All Room Objects Fixed

**Physical objects never move**:

- Desk remains front/center
- 3 monitors remain on desk
- Left wall portrait remains on left wall
- Archive cabinet remains on right side
- Message board remains on right wall
- Notebook remains on desk surface

**Only camera moves. Objects are revealed, not animated.**

### Content Exists, Camera Reveals

**No type-on or fly-in animations**:

- Identity text exists on monitor, camera approaches to read it
- About Me text exists near portrait, camera pans to reveal it
- Project labels exist on drawers, camera frames them
- Recommendation notes exist on board, camera shows them
- Notebook text exists on page, camera settles to read it

**Content is discovered through camera movement, not through content animation.**

### Room Architecture Consistent

**One continuous office space**:

- Wall surfaces remain consistent throughout
- Floor remains consistent
- Lighting remains consistent (time of day doesn't change)
- Materials remain monochrome throughout all scenes
- Spatial relationships remain logical and coherent

**The room is a fixed stage. Camera explores it.**

---

## What Must NOT Be Implemented Yet

### Not Allowed in Phase 2

**Defer to Phase 3 or later**:

- ❌ Three.js or WebGL setup
- ❌ 3D rendering of any objects
- ❌ 3D camera rigs and 3D scene graphs
- ❌ Realistic 3D lighting, shadows, materials
- ❌ Complex GSAP ScrollTrigger setups (use simple CSS first)

### Not Allowed in Phase 2

**Defer to separate approval**:

- ❌ Loading screen transition (Scene 1 → Scene 2)
- ❌ Audio/music timing and triggers
- ❌ Complex micro-interactions (drawer opening animations, note hover effects)
- ❌ Particle effects or atmospheric enhancements
- ❌ Scene navigation UI or progress indicators
- ❌ Back-to-top buttons or jump-to-scene controls

### Not Allowed in Phase 2

**Defer to polish phases**:

- ❌ Hover state animations on content elements
- ❌ Button click animations beyond basic CSS
- ❌ Social media link fancy transitions
- ❌ Resume download interaction embellishments
- ❌ Easter eggs or hidden interactions

### Scene Content Changes Not Allowed

**No redesign during Phase 2**:

- ❌ Changing scene layouts or visual designs
- ❌ Modifying content text or messaging
- ❌ Adding new visual elements to scenes
- ❌ Restructuring HTML beyond transition needs
- ❌ Changing color palettes or typography

**Phase 2 scope: Core scene-to-scene transitions only. Nothing else.**

---

## Minimum Transition System — First Implementation

### Phase 2 First Build Priorities

**Build minimum viable transition system first, then refine.**

Priority order for initial implementation:

### Step 1: Scroll Detection Infrastructure

**Before any visual movement**:

1. Set up scroll event listener system
2. Detect current scroll position (window.scrollY)
3. Map scroll position to scene numbers (2-7)
4. Calculate transition progress (0-1) within each transition zone
5. Test `prefers-reduced-motion` detection
6. Console log current scene and transition progress
7. Verify scroll up/down detection works correctly

**Deliverable**: Functional scroll tracking system with no visual changes yet

**Why first**: Foundation for all transitions. Must be rock-solid before adding visual movement.

---

### Step 2: Scene Hold Zones

**Implement stable rest positions**:

1. Define scroll ranges where each scene is "active" (hold zones)
2. When in hold zone, ensure scene is fully visible with no movement
3. Snap content to stable positions at hold zone boundaries
4. Test that content remains readable and stable in each hold zone
5. Verify hold zones feel natural and comfortable for reading

**Deliverable**: All scenes have stable hold positions where camera stops completely

**Why second**: Ensures readability and stability before adding movement between scenes.

---

### Step 3: Simple Fade Transitions (Minimal First Pass)

**Implement simplest possible scene-to-scene transitions**:

1. When leaving hold zone, fade out current scene (opacity transition)
2. When entering next hold zone, fade in next scene (opacity transition)
3. Use linear or ease-in-out timing
4. Verify smooth handoff between scenes
5. No complex camera movement yet — just clean fades

**Deliverable**: All scenes connected with simple fade transitions

**Why third**: Proves entire scroll-to-scene system works end-to-end with minimal complexity.

---

### Step 4: Camera Movement — Transition 1 (Desk → Hero)

**Implement first cinematic transition**:

1. Replace fade with forward dolly effect (scale center monitor up)
2. Move camera toward center monitor using CSS transforms
3. Fade out left/right monitors as center monitor grows
4. Test smooth, calm easing
5. Verify transition is reversible (scroll up returns smoothly)

**Deliverable**: Transition 1 working with cinematic forward dolly movement

**Why fourth**: Simplest camera movement to implement. Proves cinematic approach works.

---

### Step 5: Camera Movement — Transitions 2-5

**Implement remaining cinematic transitions**:

1. **Transition 2** (Hero → About): Pull-back and left pan using CSS transforms
2. **Transition 3** (About → Projects): Right pan using CSS transforms
3. **Transition 4** (Projects → Recommendations): Continue right pan
4. **Transition 5** (Recommendations → Notebook): Pan back to desk, settle on notebook

Each transition:
- Use CSS transform (translate, scale, rotate as needed)
- Maintain calm, smooth easing
- Verify reversibility
- Test content readability during transitions

**Deliverable**: All 5 transitions working with cinematic camera movements

**Why fifth**: Complete the transition system methodically, one at a time or in similar groups.

---

### Step 6: Refinement and Polish

**After all transitions work**:

1. Fine-tune easing curves for premium, editorial feel
2. Adjust transition timing for calm, deliberate pacing
3. Refine scroll distances for natural rhythm
4. Ensure all hold zones feel stable and readable
5. Verify Scene 7 settles into perfect final rest state
6. Test across browsers and devices
7. Optimize for 60fps performance
8. Accessibility testing (keyboard, screen readers, `prefers-reduced-motion`)
9. Verify all content remains readable throughout journey

**Deliverable**: Polished, premium Phase 2 transition system ready for approval

**Why sixth**: Only refine after foundation is complete. Polish comes last, not first.

---

## Safe Phase 2 Implementation Order

### Implementation Sequence (Locked)

**Follow this exact order. Do not skip steps.**

1. **Scroll detection infrastructure** — Build foundation first
2. **Scene hold zones** — Establish stable rest positions
3. **Simple fade transitions** — Prove end-to-end system works
4. **Camera movement Transition 1** — Implement first cinematic movement
5. **Camera movements Transitions 2-5** — Complete cinematic system
6. **Refinement and polish** — Tune for premium quality

### Why This Order

**Step-by-step validation**:

- Each step builds on previous foundation
- Problems caught early before complexity increases
- System proven functional before adding visual sophistication
- Readability and stability prioritized from start
- Polish only after mechanics are solid

### What NOT To Do

**Anti-patterns to avoid**:

- ❌ Starting with polish or complex animations
- ❌ Implementing all transitions simultaneously without testing
- ❌ Adding 3D/WebGL before CSS works
- ❌ Skipping hold zone implementation
- ❌ Building complex choreography before simple fades work
- ❌ Ignoring `prefers-reduced-motion` until the end

---

## Success Criteria

### Phase 2 Is Complete When

Phase 2 transition implementation is successful when:

1. ✅ All 5 transitions (Scene 2→3, 3→4, 4→5, 5→6, 6→7) work smoothly
2. ✅ Each scene has stable, readable hold zone where camera stops completely
3. ✅ Hold zones feel comfortable for reading content without movement
4. ✅ Transitions are fully reversible (scroll up works perfectly)
5. ✅ Movement quality is calm, premium, restrained, editorial, cinematic
6. ✅ No game-like camera movement qualities
7. ✅ User controls all pacing through scroll
8. ✅ All room objects remain static, only camera moves
9. ✅ Content is revealed by camera, not animated in
10. ✅ Scene 7 settles into stable final rest state at journey's end
11. ✅ `prefers-reduced-motion` accessibility works correctly
12. ✅ Performance is smooth (60fps) across devices and browsers
13. ✅ Implementation matches this specification exactly
14. ✅ No features outside Phase 2 scope were added
15. ✅ One-room spatial coherence is preserved throughout

### Quality Gates

**Before moving to Phase 3**:

- All success criteria above must be met
- User testing confirms smooth, comfortable experience
- Performance benchmarks achieved (60fps minimum)
- Accessibility standards verified
- Cross-browser compatibility confirmed
- Phase 2 work approved by project owner

---

## Locked Implementation Scope Summary

### Phase 2 Scope: What IS Allowed

**CSS and JavaScript transitions only**:

- ✅ CSS transforms (translate, scale, rotate)
- ✅ CSS opacity transitions
- ✅ JavaScript scroll event listeners
- ✅ Scroll position detection and scene mapping
- ✅ Transition progress calculation
- ✅ Simple easing functions (ease-in-out or custom cubic-bezier)
- ✅ CSS transitions and animations for camera movement
- ✅ Viewport-based positioning and sizing
- ✅ `prefers-reduced-motion` media query detection and fallback
- ✅ Performance optimization (requestAnimationFrame, debouncing if needed)

**Minimal scene adjustments for transition support**:

- ✅ Adding wrapper divs for camera positioning if needed
- ✅ Adjusting z-index or positioning for layering during transitions
- ✅ Opacity adjustments during transitions
- ✅ CSS class additions to indicate active scene or transition state

**No redesign of scene layouts or content.**

### Phase 2 Scope: What IS NOT Allowed

**Explicitly forbidden in Phase 2**:

- ❌ Three.js, WebGL, or any 3D libraries
- ❌ 3D rendering of objects
- ❌ Loading screen implementation
- ❌ Audio/music system
- ❌ Complex micro-interactions beyond core transitions
- ❌ Navigation UI or progress indicators
- ❌ Scene content redesigns
- ❌ Scope expansion beyond core scene-to-scene transitions

### Locked Decisions

**These decisions are final**:

- **Transition types**: Forward dolly, pull-back and pan, lateral pans (locked)
- **Hold zones**: Mandatory stable rest positions at each scene (locked)
- **Content protection**: Readable at rest, clean transitions (locked)
- **Movement quality**: Calm, premium, restrained, editorial, cinematic (locked)
- **User control**: Scroll-driven, fully reversible (locked)
- **Scene 7 final state**: Stable notebook with handwritten invitation (locked)
- **Implementation order**: 6-step sequence (locked)
- **Phase 2 scope**: CSS/JS only, no 3D/WebGL/audio (locked)

**No deviations without documented approval.**

---

## Governance / Approval Rules

### This Document Is The Source Of Truth

**For Phase 2 implementation**:

- All transition work must align with this specification exactly
- No deviations, no improvisations, no additional features
- Implementation must follow 6-step sequence
- Quality standards are mandatory, not optional

### Changes Require Approval

**If implementation requires changes to this spec**:

1. Stop work immediately
2. Document proposed change with clear justification
3. Explain why spec cannot be followed as written
4. Request formal approval from project owner
5. Update this document after approval received
6. Resume implementation with updated spec

### Quality Standards Are Non-Negotiable

**These cannot be compromised**:

- Calm, premium, restrained, editorial, cinematic movement
- Hold zones with stable, readable content
- 60fps performance target
- `prefers-reduced-motion` accessibility support
- Full scroll reversibility
- One-room spatial coherence

**If quality standards cannot be met, stop and reassess approach.**

### Scope Boundaries Are Fixed

**Phase 2 scope is locked**:

- Core scene-to-scene transitions only
- CSS and JavaScript only
- No 3D/WebGL
- No loading screen, audio, or micro-interactions
- No scope expansion

**Features outside scope must wait for future phases.**

### When In Doubt

**If uncertain about implementation**:

1. Re-read this specification
2. Check if action aligns with locked decisions
3. Verify action is within Phase 2 scope
4. Confirm action maintains quality standards
5. If still uncertain, ask before proceeding

**Better to ask than to build wrong thing.**

---

## Next Step

**This file is now the source of truth for Phase 2 implementation.**

When beginning Phase 2 implementation work:

1. Read this entire document thoroughly
2. Understand all locked decisions and requirements
3. Follow the 6-step implementation order exactly
4. Refer back to this document when questions arise
5. Do not deviate from specification without approval

**All future Phase 2 implementation prompts should reference this document as the authoritative planning specification.**

**Restraint. Coherence. Readability. Premium movement. One room always. Phase 2 transitions locked.**

---

**Document Status**: Final Locked Specification — Ready for Implementation Approval
**Created**: 2026-04-06
**Parent Documents**: WORLD_BIBLE.md, MASTER_EXPERIENCE_BLUEPRINT.md, ROOM_LAYOUT_MAP.md, KEYFRAMES_SPECIFICATION.md, SCENE7_NOTEBOOK_RESET_BRIEF.md
**Phase**: Phase 2 Planning Complete
**Next Action**: Implementation approval, then begin 6-step build sequence
**Implementation Note**: Follow this specification exactly — no deviations without documented approval
