# PHASE 2 CINEMATIC NARRATIVE BRIEF — FINAL LOCKED SPECIFICATION

**Status**: Final Locked Specification — Ready for Implementation Approval
**Created**: 2026-04-07
**Phase**: Phase 2 — Cinematic Narrative Choreography Layer
**Replaces**: PHASE2_TRANSITION_LAYER_PLAN.md (scene-layer transition approach completely abandoned)

---

## Purpose of This Document

This document defines the **complete and final locked specification** for Phase 2 implementation.

The previous Phase 2 direction based on **scene-layer transitions** is **completely abandoned**.

Phase 2 is now defined as a **full cinematic narrative choreography layer** driven by:
- Camera movement through space
- Object focus and spatial story progression
- Premium, restrained, editorial, cinematic motion
- No game-camera behavior, no flashy effects, no generic web transitions

**This is the final source of truth. One direction. No alternatives. No ambiguities.**

---

## The Cinematic Narrative Experience

### Story Logic: The Full Camera Journey

**The experience is a continuous spatial story told through intentional camera choreography.**

1. **Opening**: Desk visible (3 monitors established)
2. **Entry**: Camera moves toward center monitor
3. **Portal**: Camera enters center monitor
4. **Hero World**: Hero section appears inside screen world
5. **Exit**: Camera reorients and moves through the room
6. **Portrait Discovery**: Camera settles on wall framed portrait
7. **About Reveal**: About text reveals alongside portrait
8. **Cabinet Approach**: Camera moves to cabinet
9. **Drawer Interaction**: First drawer opens on scroll
10. **Drawer Entry**: Camera enters drawer interior
11. **Project Window**: Project window appears inside drawer
12. **Project Content**: Behance button + live project button visible
13. **Project Navigation**: User can move through projects or continue
14. **Final CTA**: Camera continues to tablet CTA on desk

**This is spatial storytelling through camera choreography, not section-to-section fading.**

---

## Role of Each Scene in Cinematic Sequence

### Scene 2: Opening Desk Establishing Shot
**Role**: World establishment, spatial grounding, portal setup

**What it does**:
- Establishes the designer's workspace
- Shows 3 monitors on desk
- **Center monitor is the portal** into identity world
- Camera holds steady, waiting for user to begin journey

**Cinematic function**: The establishing shot—"this is where we are"

---

### Scene 3: Identity Hero (Inside Monitor World)
**Role**: Primary message delivery inside screen space

**What it does**:
- Camera has entered the center monitor's content world
- Hero section (logo, name, role, headlines) exists **inside** this screen space
- User reads identity message
- Camera prepares to exit back to physical room

**Cinematic function**: Portal into designer's identity—message delivered in screen world

**How Scene 2 transitions into Scene 3**:
- User scrolls
- Camera dollies forward toward center monitor
- Center monitor enlarges, fills frame
- Left/right monitors exit frame edges
- Camera **crosses threshold** into monitor's content space
- Hero content revealed inside screen world
- Camera holds inside monitor for reading

**This is spatial entry into an object, not a fade.**

---

### Scene 4: About Me (Wall Portrait)
**Role**: Personal identity, human connection

**What it does**:
- Camera has exited monitor, returned to physical room
- Camera settles on left wall portrait
- About Me text reveals alongside portrait
- User reads personal background

**Cinematic function**: Human behind the work—personal reveal

**How the camera leaves screen world and reaches portrait**:
- User scrolls from Scene 3
- Camera **pulls back** from monitor content space
- Camera exits screen world, returns to physical room
- Brief moment seeing desk/monitors again (spatial reorientation)
- Camera **pans left** toward left wall
- Desk exits right side of frame
- Left wall and portrait enter frame from left
- Camera settles on portrait
- About text **reveals** alongside portrait (locked reveal behavior below)
- Camera holds for reading

**About text reveal behavior (LOCKED)**:

**No dramatic reveal**:
- ❌ No type-on animation
- ❌ No letter-by-letter appearance
- ❌ No fancy text effects
- ❌ No dramatic fade-in from 0 to 100%

**Only soft restrained reveal**:
- ✅ Text fades in gently after camera settles on portrait
- ✅ Opacity transition only: 0 → 1 over 0.8-1.2 seconds
- ✅ Ease-out or ease-in-out timing
- ✅ Text appears as complete block, not animated per-letter
- ✅ Reveal happens **after** camera has fully settled, not during camera movement
- ✅ Calm, premium, restrained appearance
- ✅ Respects `prefers-reduced-motion` (instant appearance if preference set)

**Timing**:
- Camera settles on portrait → 0.2-0.3 second pause → text begins soft fade-in
- Total reveal duration: approximately 1 second from camera settle to text fully visible
- User can interrupt by scrolling at any time

**This is spatial reorientation followed by left pan to portrait, with soft text reveal.**

---

### Scene 5: Projects (Archive Cabinet)
**Role**: Work showcase, project gateway object

**What it does**:
- Camera settles on archive cabinet on right side of room
- Cabinet has 4 vertical drawers (per existing static implementation)
- Exactly 3 projects displayed on drawers 2-4
- Cabinet is **static object** initially
- User can scroll to continue or interact with drawer

**Cinematic function**: Discovery of work archive—transition from personal to professional

**Cabinet transition from static to interactive gateway**:

**Initial state** (Scene 5 arrival):
- Camera pans right from portrait to cabinet
- Cabinet visible as **static display object**
- 3 project labels visible on drawers 2-4
- Drawer 1 empty (restraint)
- All drawers **closed**
- Camera holds on cabinet

**Activation state** (first scroll into Scene 5):
- User scrolls
- **First drawer begins to open** (drawer 2, first project)
- Drawer slides open smoothly (vertical or pull-out motion)
- Camera holds on opening drawer
- Drawer completes opening animation
- Drawer interior becomes visible (dark interior space)

**How drawer opening should work**:
- Scroll-driven drawer pull animation
- Smooth, mechanical motion (real furniture behavior)
- Drawer slides out approximately 30-40% of depth
- Interior of drawer revealed (dark space inside cabinet)
- No jump cuts—continuous motion
- Respects `prefers-reduced-motion` (instant open if preference set)

---

### Project Interaction System

**How camera entry into drawer should work**:

After drawer opens:
- User continues scrolling
- Camera **dollies forward** toward open drawer
- Drawer interior enlarges, fills frame
- Camera **enters drawer interior space**
- Drawer interior becomes new environment (like entering monitor was)
- Dark background, focused project window space

**This is the second spatial portal—entering drawer interior.**

**How project window should appear**:

Inside drawer interior:
- **Project window emerges** in center of dark space
- Window contains project preview/information
- Clean, framed presentation
- Monochrome/grayscale rendering
- Premium, editorial layout

**What exactly exists in project window (LOCKED RESTRAINT)**:

Each project window contains **exactly these elements, nothing more**:

1. **One image only**:
   - Project preview/hero image
   - Monochrome/grayscale
   - High quality, editorial
   - Fills window naturally
   - No gallery, no slideshow, no additional images

2. **One title only**:
   - Project name
   - Clear typography
   - Prominent but not oversized
   - Single line preferred, two lines maximum

3. **One concise description only**:
   - 2-3 lines maximum
   - Brief project context
   - Plain text, no rich formatting
   - Readable, focused copy

4. **Exactly two buttons only**:
   - Button 1: "View on Behance" (external link)
   - Button 2: "View Live Project" (external link, if applicable)
   - Clear, simple button styling
   - Accessible, keyboard-navigable
   - No icon-only buttons without text labels

5. **Clean frame/border defining window edges**

**What must NOT appear in project window (LOCKED EXCLUSIONS)**:
- ❌ No extra metadata panels
- ❌ No tags (skills, technologies, categories)
- ❌ No gallery or multiple images
- ❌ No additional content layers or tabs
- ❌ No "read more" expansion mechanisms
- ❌ No testimonials or client quotes
- ❌ No metrics (views, likes, awards)
- ❌ No date or timeline information
- ❌ No team member credits
- ❌ No embedded videos
- ❌ No social sharing buttons
- ❌ No third button or additional actions

**Project window aesthetic**:
- Monochrome/grayscale throughout
- Premium, restrained presentation
- Editorial composition
- Clear hierarchy: image → title → description → buttons
- Generous spacing
- Focused, intentional design

---

### Project Navigation Logic (LOCKED)

**Primary progression system: Vertical scroll**

- **Vertical scroll is the main narrative path**
- Scrolling down continues the camera journey through the portfolio
- Scroll-driven progression maintains spatial continuity
- User can scroll through projects or exit project system at any time

**Secondary optional interaction: Left/right project navigation**

- **Left/right navigation is optional enhancement inside project window**
- Available when user is inside drawer interior viewing projects
- Allows browsing between 3 projects without exiting drawer
- Does NOT replace vertical scroll as primary control

**How navigation works**:

**Option 1: Browse projects horizontally (optional)**:
- User presses left/right arrow keys OR swipes left/right (touch)
- Current project window **slides left** (exit)
- Next project window **slides in from right**
- Camera remains inside drawer interior space
- Smooth, direct transitions between projects
- No drawer closing/reopening between projects
- User can browse all 3 projects this way

**Option 2: Continue journey vertically (primary)**:
- User continues **vertical scroll** at any time
- Current project window and drawer **exit** (fade or slide up)
- Camera **exits drawer interior**
- Returns to room view
- Continues journey toward Scene 6

**Navigation controls**:
- **Vertical scroll**: Always active, always continues journey (primary)
- **Left/right arrow keys**: Previous/next project (secondary, optional)
- **Touch swipe left/right**: Previous/next project (secondary, optional)
- Clear visual indicators for available navigation directions
- Accessible keyboard navigation
- No complex gesture requirements

**How many projects**: Exactly **3 projects**
- Drawer 2 → Project 1
- Drawer 3 → Project 2
- Drawer 4 → Project 3
- Drawer 1 empty (no project)
- Fixed count, no dynamic loading

**Project navigation priority**:
1. Vertical scroll = primary path (always continues journey)
2. Left/right = optional enhancement (browse projects without exiting)
3. Scroll remains king—user always in control of main progression

---

### Continuing After Projects

**After user finishes with projects**:

User has two clear paths:
1. **Browse all 3 projects horizontally** → then vertical scroll continues journey
2. **Vertical scroll at any time** → exits project system, continues journey immediately

**Exit from drawer interior**:
- Camera **pulls back** from drawer interior
- Drawer space recedes
- Returns to room view with cabinet
- Drawer remains open (visual continuity)
- Camera continues panning right toward Scene 6

**Spatial logic**:
- Entered drawer = entered portal
- Exited drawer = exited portal, back in room
- Journey continues through room space
- No teleportation, continuous spatial experience

---

### Scene 6: Recommendations (Message Board)
**Role**: Social proof, testimonials, credibility

**Does Scene 6 still exist**: **YES**

**What changes**: Nothing. Scene 6 continues to exist exactly as specified in static Phase 1.

**Cinematic function**:
- Camera exits drawer/cabinet area
- Continues panning right to right wall message board
- Settles on pinned testimonials
- User reads recommendations
- Camera holds for reading

**Why Scene 6 remains**:
- Provides social proof after work showcase
- Maintains full spatial room tour (left wall → right side → right wall)
- Creates rhythm: personal (portrait) → work (projects) → validation (recommendations) → invitation (CTA)
- No reason to remove—serves narrative purpose

---

### Scene 7: Final CTA (Premium Tablet)
**Role**: Graceful conclusion, invitation to connect

**Scene 7 uses currently approved tablet-based CTA direction** (per implemented site)

**The final CTA object**:
- **Premium tablet on desk surface**
- Tablet device with visible bezel/frame
- Tablet screen displays CTA content
- Tablet stand grounding device on desk
- Natural placement on desk, slight angle
- Monochrome/grayscale rendering

**Exact tablet screen content** (per implemented site):
- Heading: "Let's work together."
- Description: "Email me to start the conversation."
- Primary button: "Send Email" (mailto:hello@oussamalassoued.com)
- Secondary links: LinkedIn • Resume

**How final CTA is reached**:
- User scrolls from Scene 6 (message board)
- Camera pans from right wall back toward desk area
- Full-circle spatial return to where journey began
- Camera settles on **premium tablet on desk**
- Tablet screen shows clear invitation
- Camera holds—final rest state

**Cinematic function**:
- Completes spatial circle (desk → room → desk)
- Modern, professional final invitation
- Calm, resolved conclusion
- Journey ends where it began
- Premium object aligned with designer's workspace

**Scene 7 locked specification**: Tablet-based CTA with heading, description, primary email button, and secondary links (LinkedIn, Resume). Matches currently implemented site exactly.

---

## What Must Remain Minimal

### Object Inventory (Locked)
- ✅ Desk with 3 monitors
- ✅ Center monitor = portal 1
- ✅ Left wall portrait
- ✅ Archive cabinet with 4 drawers
- ✅ Cabinet drawer interior = portal 2
- ✅ Right wall message board
- ✅ Desk tablet (tablet-based CTA per implemented Scene 7)
- ❌ No additional objects without approval

### Visual Treatment (Locked)
- ✅ Monochrome/grayscale only
- ✅ Premium, restrained aesthetic
- ✅ Editorial composition
- ✅ Cinematic camera movement
- ❌ No color
- ❌ No flashy effects
- ❌ No game aesthetics
- ❌ No neon, no RGB

### Interaction Scope (Locked)
- ✅ Scroll-driven camera movement (primary progression system)
- ✅ Drawer opening on scroll
- ✅ Left/right arrow key / swipe project navigation (secondary optional)
- ✅ Two buttons per project window
- ✅ Tablet CTA with email button + secondary links
- ❌ No complex micro-interactions yet
- ❌ No audio system yet
- ❌ No loading screen yet
- ❌ No progress indicators yet

### Content Restraint (Locked)
- ✅ Hero section: 5 elements (logo, name, role, 2 headlines)
- ✅ About text: concise, focused, soft restrained reveal after camera settles
- ✅ Project window: one image, one title, one description, two buttons only
- ✅ 3 projects maximum
- ✅ Recommendations: curated testimonials
- ✅ CTA: tablet with heading, description, email button, secondary links (per implemented Scene 7)
- ❌ No content expansion beyond specifications

---

## What Must NOT Appear

### Forbidden Visual Elements
- ❌ Color (except grayscale #000000 to #FFFFFF range)
- ❌ Gaming UI aesthetics
- ❌ Neon glows or RGB effects
- ❌ Parallax overload or aggressive scroll-jacking
- ❌ Floating objects without spatial grounding
- ❌ Generic web transition libraries (unless specifically approved)

### Forbidden Interaction Patterns
- ❌ Auto-playing media
- ❌ Forced timing (user must control all pacing via scroll)
- ❌ Complex gesture requirements
- ❌ Hidden interactions or easter eggs (without approval)
- ❌ Navigation that breaks spatial continuity

### Forbidden Scope Expansion
- ❌ Additional scenes beyond 2-7
- ❌ Additional portals beyond monitor and drawer
- ❌ Social media integration beyond Behance/live links in projects + LinkedIn/Resume in CTA
- ❌ Blog or content sections
- ❌ Multiple room environments
- ❌ Timeline or history sections

---

## Locked Implementation Order

### Step 1: Camera Infrastructure (No Visual Changes)
**Build the camera system foundation**

1. Set up scroll detection system
2. Map scroll position to camera states
3. Calculate camera position/rotation values
4. Create camera transform calculation functions
5. Console log camera values (no visual changes yet)
6. Test `prefers-reduced-motion` detection
7. Verify scroll up/down bidirectional control

**Deliverable**: Functional camera positioning system with no visual output

**Why first**: Foundation must be rock-solid before any visual movement

---

### Step 2: Scene Hold States (Static Positions)
**Define where camera rests at each scene**

1. Define camera position/scale/rotation for each scene hold state
2. Implement snap-to-hold on scroll position boundaries
3. Verify each scene is stable and readable at hold position
4. Test that camera stops completely in hold zones
5. No transitions yet—just hold positions

**Deliverable**: All 6 scenes have defined camera hold positions

**Why second**: Establishes stable rest states before adding movement

---

### Step 3: Transition 1 — Desk to Monitor Portal
**First cinematic camera movement**

1. Implement dolly forward toward center monitor
2. Scale center monitor up as camera approaches
3. Fade out left/right monitors
4. Cross threshold into monitor content space
5. Hero section visible inside monitor world
6. Smooth easing, calm motion
7. Fully reversible on scroll up

**Deliverable**: Working portal entry into monitor

**Why third**: Proves portal concept and camera dolly movement

---

### Step 4: Transition 2 — Monitor Exit to Portrait
**Portal exit and room reorientation**

1. Implement pull-back from monitor content space
2. Brief desk reorientation view
3. Implement left pan toward wall portrait
4. **Soft restrained About text reveal** after camera settles (0.2s pause, then 0.8-1.2s opacity fade-in)
5. Smooth, calm motion throughout
6. Fully reversible

**Deliverable**: Working exit from portal 1, pan to portrait, soft text reveal

**Why fourth**: Proves portal exit and spatial reorientation

---

### Step 5: Transition 3 — Portrait to Cabinet
**Right pan across room**

1. Implement right pan from left wall to right side
2. Portrait exits left, cabinet enters right
3. Camera settles on closed cabinet
4. Clean, simple lateral movement
5. Fully reversible

**Deliverable**: Working pan to cabinet, cabinet at rest

**Why fifth**: Establishes rightward journey progression

---

### Step 6: Drawer Opening Animation
**Cabinet activation**

1. Implement scroll-driven drawer opening
2. Drawer slides out smoothly (mechanical motion)
3. Drawer interior becomes visible
4. Holds with drawer open, ready for entry
5. `prefers-reduced-motion` instant-open fallback

**Deliverable**: Drawer 2 opens on scroll, reveals interior

**Why sixth**: Activates cabinet as interactive gateway object

---

### Step 7: Drawer Portal Entry
**Second portal entry**

1. Implement camera dolly into drawer interior
2. Drawer interior enlarges, fills frame
3. Dark space established for project window
4. Camera inside drawer space
5. Fully reversible back to room view

**Deliverable**: Working entry into drawer portal (portal 2)

**Why seventh**: Proves second portal concept

---

### Step 8: Project Window System
**Project presentation inside drawer**

1. Implement project window appearance in drawer space
2. Build project window layout: **one image, one title, one description, exactly two buttons**
3. Display first project (Project 1)
4. Clean, stable presentation
5. Buttons functional (external links)
6. **Locked restraint**: No extra metadata, no tags, no gallery, no additional content

**Deliverable**: Project 1 window visible inside drawer with working buttons, locked restraint enforced

**Why eighth**: Establishes project presentation system with proper constraints

---

### Step 9: Project Navigation (Secondary Optional)
**Horizontal project browsing**

1. Implement left/right arrow key navigation (secondary)
2. Implement touch swipe left/right navigation (secondary)
3. Slide transitions between projects (current exits left, next enters right)
4. All 3 projects accessible
5. Smooth, direct transitions
6. **Vertical scroll remains active and primary** at all times

**Deliverable**: Working optional navigation between 3 projects, vertical scroll always functional

**Why ninth**: Completes project interaction system while preserving scroll-driven primary path

---

### Step 10: Drawer Exit and Continue
**Exit from project system**

1. Implement vertical scroll exit from drawer interior (primary path)
2. Camera pulls back from drawer space
3. Returns to room view (cabinet with open drawer visible)
4. Camera continues right pan toward message board

**Deliverable**: Working exit from portal 2, journey continuation via primary scroll path

**Why tenth**: Completes project system and continues spatial journey

---

### Step 11: Transitions 4-5 — Board to Tablet
**Final journey segments**

1. Transition 4: Pan right from cabinet to message board (Scene 6)
2. Scene 6 hold: camera stable on board
3. Transition 5: Pan from board back to desk, settle on **premium tablet** (Scene 7)
4. Scene 7 hold: final rest state on **tablet with CTA screen content**
5. Both transitions smooth, calm, reversible

**Deliverable**: Complete journey from cabinet to final tablet CTA (per implemented Scene 7)

**Why eleventh**: Completes full spatial narrative journey with approved tablet ending

---

### Step 12: Refinement and Polish
**Premium quality tuning**

1. Fine-tune all easing curves for premium feel
2. Adjust timing for calm, editorial pacing
3. Verify all hold states are stable and readable
4. Verify **soft restrained About text reveal** timing and feel
5. Verify **project window restraint** is enforced (one image, one title, one description, two buttons only)
6. Verify **vertical scroll remains primary progression** throughout project interaction
7. Optimize for 60fps performance
8. Cross-browser testing
9. Accessibility verification (keyboard, screen readers, `prefers-reduced-motion`)
10. Mobile responsiveness
11. Final quality assurance

**Deliverable**: Polished, premium Phase 2 cinematic narrative system

**Why twelfth**: Polish only after all mechanics work correctly

---

## Final Locked Implementation Scope Summary

### What Phase 2 IS

**Phase 2 is a cinematic narrative choreography layer:**
- ✅ Full camera journey through one designer's office
- ✅ Two spatial portals: monitor (portal 1) and drawer (portal 2)
- ✅ Scroll-driven primary progression (user always in control)
- ✅ Premium, restrained, editorial, cinematic camera movement
- ✅ Object-based spatial storytelling (not page-layer transitions)
- ✅ About text soft restrained reveal (no drama, no type-on)
- ✅ Project window locked restraint (one image, one title, one description, two buttons only)
- ✅ Left/right project navigation as secondary optional enhancement
- ✅ Vertical scroll as primary narrative path at all times
- ✅ Final CTA: approved tablet with screen content (per implemented Scene 7)
- ✅ CSS and JavaScript only (no 3D/WebGL yet)

### What Phase 2 Is NOT

**Phase 2 is NOT:**
- ❌ Scene-layer fade transitions
- ❌ Generic web section scrolling
- ❌ 3D/WebGL rendering (that's Phase 3)
- ❌ Audio/music system (separate approval required)
- ❌ Loading screen (separate approval required)
- ❌ Complex micro-interactions beyond core narrative
- ❌ Navigation UI or progress indicators
- ❌ Scene content redesigns
- ❌ Scope expansion beyond approved narrative

### Locked Decisions (No Deviations)

**These are final and cannot be changed without new approval:**

1. **Scene 7**: Tablet-based CTA with heading, description, email button, secondary links (per implemented site)
2. **Project navigation**: Vertical scroll primary, left/right secondary optional
3. **About text reveal**: Soft restrained opacity fade-in only, no dramatic effects
4. **Project window**: One image, one title, one description, two buttons only—nothing more
5. **Movement quality**: Calm, premium, restrained, editorial, cinematic (always)
6. **Primary control**: Scroll-driven progression (user controls all pacing)
7. **Portal count**: Two portals only (monitor and drawer)
8. **Project count**: Exactly 3 projects
9. **Scene count**: Scenes 2-7 only (no additions)
10. **Room count**: One designer's office only (no additional spaces)
11. **Implementation order**: 12-step sequence (follow exactly)

---

## Governance

### This Document Is The Final Source Of Truth

**For Phase 2 implementation:**
- All work must align with this specification exactly
- No deviations, no improvisations, no additional features
- Implementation must follow 12-step sequence
- Quality standards are mandatory, not optional
- Locked decisions cannot be changed without documented approval

### All Critical Ambiguities Resolved

**Micro-freeze decisions applied:**
1. ✅ Scene 7 matches currently approved tablet-based CTA direction (per implemented site)
2. ✅ Project navigation logic locked: vertical scroll primary, left/right secondary optional
3. ✅ About text reveal locked: soft restrained opacity fade only
4. ✅ Project window restraint locked: one image, one title, one description, two buttons only
5. ✅ Final implementation scope summary provided

### Changes Require Approval

**If implementation requires changes to this spec:**
1. Stop work immediately
2. Document proposed change with clear justification
3. Explain why spec cannot be followed as written
4. Request formal approval from project owner
5. Update this document after approval received
6. Resume implementation with updated spec

### When In Doubt

**If uncertain about implementation:**
1. Re-read this specification
2. Check if action aligns with locked decisions
3. Verify action is within Phase 2 scope
4. Confirm action maintains quality standards
5. If still uncertain, ask before proceeding

**Better to ask than to build the wrong thing.**

---

## Final Statement

**The Phase 2 cinematic narrative brief is now fixed and ready for implementation approval.**

All critical ambiguities have been resolved:
- Scene 7 matches currently approved tablet-based CTA direction from implemented site
- Project navigation logic is locked (scroll primary, arrows secondary)
- About text reveal behavior is locked (soft restrained fade only)
- Project window restraint is locked (one image, one title, one description, two buttons only)
- Implementation scope is clearly summarized

**This specification is complete, decisive, and locked.**

**No outdated notebook references. No multiple options. No broad suggestions. No code yet.**

**One strong final direction only.**

**Ready for implementation approval.**

---

**Document Status**: Final Locked Specification — Ready for Implementation Approval
**Created**: 2026-04-07
**Replaces**: PHASE2_TRANSITION_LAYER_PLAN.md
**Phase**: Phase 2 — Cinematic Narrative Choreography Layer
**Implementation**: 12-step sequence locked, awaiting approval to begin
**Next Action**: Implementation approval required before any code
