# MASTER EXPERIENCE BLUEPRINT

**Status**: Specification - Not Yet Approved
**Created**: 2026-04-04
**Phase**: Phase 0 - Planning & Foundation

---

## Blueprint Purpose

This document defines the **complete portfolio experience** from first load to final call-to-action.

The experience is a **cinematic journey through a singular designer's workspace**, told through camera movement and spatial storytelling.

**This is a specification only. Do not implement yet.**

---

## Core Vision Restatement

**This portfolio is a cinematic editorial experience set entirely within one coherent designer's office/workspace.**

The visitor experiences the space through **deliberate camera choreography** that reveals different areas of the room as they scroll, creating a **narrative progression** from introduction to contact.

**Aesthetic**: Monochrome/grayscale, premium, restrained, editorial, calm, original.

**NOT**: Gaming aesthetic, neon, flashy effects, cyberpunk, disconnected sections, direct Lusion clone.

---

## Complete Experience Sequence

### 1. Loading Scene
**When**: First load, before anything else
**Duration**: As brief as technically necessary
**Transition Out**: Fade to opening desk scene

### 2. Opening Desk Scene
**When**: Initial view after loading completes
**Duration**: Until user scrolls
**Transition Out**: Camera moves toward selected monitor on scroll

### 3. Identity Hero Scene (Inside Monitor)
**When**: After camera enters the monitor
**Duration**: User-controlled scroll through content
**Transition Out**: Camera exits monitor back to room on scroll

### 4. About Me Scene (Wall Portrait)
**When**: After exiting monitor
**Duration**: User-controlled scroll through content
**Transition Out**: Camera moves toward cabinet/archive on scroll

### 5. Projects Scene (Cabinet/Archive)
**When**: After leaving About area
**Duration**: User-controlled scroll through projects
**Transition Out**: Camera moves toward recommendations area on scroll

### 6. Recommendations Scene (Message System)
**When**: After leaving Projects area
**Duration**: User-controlled interaction with recommendations
**Transition Out**: Camera moves toward CTA area on scroll

### 7. Call-to-Action Scene (Workspace Integration)
**When**: Final section
**Duration**: Until user exits or engages
**Transition Out**: N/A (end of experience)

---

## Scene Definitions

### Scene 1: Loading Scene

#### Purpose
- Establish brand identity immediately
- Provide visual interest during necessary load time
- Set premium, restrained tone from first pixel

#### What Is Visible
- Personal logo (designer's mark)
- Monochrome/grayscale treatment
- Minimal, clean presentation
- Possible subtle loading indicator (if needed)

#### Narrative Anchor
The **logo** itself is the anchor - representing the designer's identity before revealing their workspace.

#### What Remains Minimal
- No taglines or text (logo only)
- No animations beyond necessary loading feedback
- No audio (loading is silent)
- No decorative elements
- Maximum restraint

#### What Must NOT Be Implemented Yet
- Logo design (if not finalized)
- Loading animation choreography
- Transition timing and easing
- Any interactive elements

#### Notes
- This is a **necessary technical moment**, not a creative showcase
- Should feel premium, not like a typical loading screen
- Respect user's time - load actual content as fast as possible
- Consider progressive enhancement: show content immediately if possible

---

### Scene 2: Opening Desk Scene

#### Purpose
- Introduce the designer's workspace world
- Establish spatial understanding of the room
- Show **3 monitors** with the **center monitor as the focal portal point**
- Create calm, premium first impression
- Invite exploration through visual interest

#### What Is Visible
- Wide view of designer's desk from natural viewing angle
- **3 monitors** arranged in believable workspace configuration
- **Center monitor** is the portal that will lead into the Identity Hero scene
- Desk surface (minimal, professional)
- Workspace context: lighting, surfaces, depth
- Calm, intentional composition
- Restrained environmental details (keyboard, mouse) - no extra desk clutter yet

#### Narrative Anchor
The **desk with 3 monitors** establishes "this is a designer's command center" - a professional creative workspace. The **center monitor** serves as the portal into the designer's identity and message.

#### What Remains Minimal
- No text or messaging yet (pure visual introduction)
- No UI elements or navigation
- No distracting details
- No busy clutter
- Generous negative space
- Editorial composition

#### What Must NOT Be Implemented Yet
- 3D rendering of the desk/monitors (start with 2D/illustration in Phase 1)
- Camera movement choreography
- Interactive elements
- Sound design
- WebGL setup

#### Notes
- This is the **world establishment shot** - first impression of the space
- Should feel like walking into a real designer's office
- Calm music (if approved and user-initiated via visible control) may begin here after explicit user interaction
- User controls when to proceed via scroll
- Camera will move toward the **center monitor** on scroll

---

### Scene 3: Identity Hero Scene (Inside Monitor)

#### Purpose
- Deliver the designer's primary message
- Communicate value proposition clearly
- Establish professional identity
- Continue workspace narrative (we're "inside" the monitor content)

#### What Is Visible
- Transition: camera has moved toward and "entered" the **center monitor**
- **Personal logo** (designer's mark)
- **Personal name**
- **Role**: UX/UI & Product Designer
- **Primary headline**: "Understanding your users, designing your success."
- **Supporting line**: "Powered by AI-driven insight, product thinking, and user-centered design."
- Premium typography, editorial composition
- Monochrome/grayscale treatment
- Subtle workspace context at edges (we're still in the room, viewing monitor content)

#### Narrative Anchor
The **monitor content** becomes the narrative anchor - we've zoomed into the designer's primary display to read their message.

#### What Remains Minimal
- No decorative elements
- No competing messages
- Clean, focused layout
- Generous whitespace
- Intentional hierarchy

#### What Must NOT Be Implemented Yet
- Camera animation entering the monitor
- Typography selection and refinement
- Layout polish
- Interaction choreography
- Transition timing

#### Notes
- This is the **message delivery moment**
- Replaces the previous single-monitor split hero concept
- Context: we are viewing the content of the **center monitor** from the desk scene
- User scroll controls when we exit back to the room
- All five identity elements must be present: logo, name, role, primary headline, supporting line

---

### Scene 4: About Me Scene (Wall Portrait)

#### Purpose
- Reveal the designer as a person
- Provide professional background and story
- Maintain workspace narrative (portrait on office wall)
- Build trust and connection

#### What Is Visible
- Camera has moved to focus on a **monochrome framed portrait photo** on the wall
- The portrait: professional, premium, monochrome photograph
- "About Me" content presented in relation to the portrait
- Workspace context remains (we're still in the same room)
- Wall texture, frame details, lighting on portrait

#### Narrative Anchor
The **framed portrait on the wall** grounds the About Me section in the physical space - a natural place for personal presentation in an office.

#### What Remains Minimal
- About Me text: concise, focused, human
- No excessive personal details
- No resume dump
- Clean presentation
- Respectful of user's time

#### What Must NOT Be Implemented Yet
- Portrait image selection/creation
- Camera choreography toward wall
- About Me copy finalization
- Layout and typography
- Frame design details

#### Notes
- This is the **personal connection moment**
- Camera movement from monitor to wall portrait reinforces we're in one coherent room
- Portrait is a **monochrome photograph** (not illustration or stylized treatment)
- Content should be authentic, warm, professional

---

### Scene 5: Projects Scene (Cabinet/Archive)

#### Purpose
- Showcase selected work examples
- Demonstrate design expertise
- Maintain workspace narrative (cabinet/archive in the office)
- Provide depth of portfolio without overwhelming

#### What Is Visible
- Camera has moved toward an **archive cabinet** in the room
- Physical storage metaphor: **archive cabinet with drawers/folders**
- Projects presented as "archived work" in this storage system
- Each project: title, brief description, preview
- Workspace context: this is the designer's project archive area

#### Narrative Anchor
The **archive cabinet** serves as the physical metaphor for "this is where the work lives" - a designer's organized project storage.

#### What Remains Minimal
- Selective projects (quality over quantity)
- No generic portfolio grid
- No project cards floating in space
- Grounded in the physical workspace metaphor
- Clear, simple navigation

#### What Must NOT Be Implemented Yet
- Cabinet/archive object design
- Camera movement choreography
- Project selection and content
- Interaction pattern for browsing projects
- Detailed layout and presentation

#### Notes
- This is the **work showcase moment**
- Must feel integrated into the workspace, not a separate "portfolio section"
- Archive cabinet with drawers/folders as the interaction model
- Projects displayed in monochrome/grayscale
- May include case study links or modals (future phases)

---

### Scene 6: Recommendations Scene (Message System)

#### Purpose
- Provide social proof through testimonials
- Maintain workspace narrative (messages in the office)
- Create warmth and authenticity
- Build credibility

#### What Is Visible
- Camera has moved toward a **pinned message board** on the wall
- Testimonials/recommendations presented as **pinned notes on a message board**
- Monochrome presentation with handwritten-style notes
- Workspace context: this is where the designer keeps encouraging messages from colleagues/clients

#### Narrative Anchor
The **pinned message board** grounds recommendations in a physical, believable workspace element - a place where encouraging notes are visibly displayed.

#### What Remains Minimal
- Curated testimonials (quality over quantity)
- Brief, authentic quotes
- No stock testimonial grid
- Organic, human presentation
- Not overly promotional

#### What Must NOT Be Implemented Yet
- Message board object design and note presentation
- Recommendation content curation
- Interaction pattern (if interactive)
- Layout and presentation details
- Camera choreography

#### Notes
- This is the **social proof moment**
- **Pinned message board** is the chosen metaphor for this scene
- Should feel personal and authentic, not corporate
- Monochrome treatment maintains visual coherence

---

### Scene 7: Call-to-Action Scene (Workspace Integration)

#### Purpose
- Invite user to make contact
- Provide clear next steps
- Conclude the experience gracefully
- Maintain workspace narrative to the end

#### What Is Visible
- Camera has reached final area of the workspace
- CTA presented as a **premium contact card or note object** on the desk
- Clear, simple call-to-action
- Workspace context: the final invitation happens in the designer's space

#### Narrative Anchor
The **premium contact card or note object** containing contact information grounds the CTA in physical reality - a tangible invitation to connect.

#### What Remains Minimal
- One clear CTA (don't offer 10 ways to connect)
- Simple, direct language
- No aggressive sales language
- Calm, confident invitation
- Respectful of user choice

#### What Must NOT Be Implemented Yet
- CTA object design
- Contact method selection (form vs email vs both)
- Copy and messaging
- Interaction implementation
- Camera choreography

#### Notes
- This is the **conversion moment**
- Must feel natural, not forced
- **Premium contact card or note** is the chosen object for this scene
- Should conclude the spatial journey - we've toured the whole workspace
- User should feel they've experienced a complete, cohesive story

---

## World Coherence Across All Scenes

### The One Room Rule

**Every scene exists within the same singular designer's office/workspace.**

- Loading → Opening Desk → Monitor → Wall Portrait → Cabinet → Messages → CTA
- All locations are **different areas of one coherent room**
- Camera moves through the space, doesn't teleport between worlds
- Lighting, materials, atmosphere remain consistent
- It should feel like a **continuous spatial experience**

### Spatial Logic

The room must make **physical sense**:
- Desk is in one area (Scenes 2-3)
- Wall with portrait is visible from the desk area (Scene 4)
- Cabinet/archive is elsewhere in the room (Scene 5)
- Message system is in another area (Scene 6)
- CTA location concludes the spatial tour (Scene 7)

**The camera reveals the room progressively as user scrolls.**

### Visual Consistency

- **Monochrome/grayscale** throughout all scenes
- **Premium materials**: wood, metal, paper, glass, fabric
- **Consistent lighting**: time of day doesn't change, light sources remain coherent
- **Restrained details**: no sudden style shifts between scenes
- **Editorial composition**: every frame could be a magazine spread

### Atmospheric Consistency

- **Calm throughout**: no jarring shifts in energy
- **Professional tone**: serious about craft, approachable
- **Intentional pacing**: user controls progression
- **Cinematic consideration**: composed, deliberate, premium

---

## Originality vs Lusion Reference

### How This Is NOT a Lusion Clone

**Lusion's world**: Their own unique creative environments and narratives
**Our world**: Singular designer's office/workspace - completely different

**Lusion's content**: Their agency work, team, process
**Our content**: Individual designer's portfolio, story, work

**Lusion's interactions**: Their specific choreography and effects
**Our interactions**: Original camera movement and transitions rooted in our workspace

**Lusion's objects**: Their specific 3D implementations
**Our objects**: Desk, monitors, cabinet, portrait - workspace-specific items

**Lusion's structure**: Their site architecture
**Our structure**: Camera journey through designer's workspace - different narrative

### How We Use Lusion as Reference

**Quality bar**: We aspire to their level of premium execution
**Restraint**: We study how they choose NOT to do things
**Atmosphere**: We learn from their mood and depth creation
**Pacing**: We observe their cinematic, deliberate storytelling
**Premium feel**: We understand their attention to detail

**We NEVER**:
- Copy their layouts
- Replicate their interactions
- Clone their sections
- Mimic their 3D techniques
- Duplicate their visual effects
- Borrow their specific implementations

### Our Unique Identity

- **World**: Designer's workspace (ours alone)
- **Narrative**: Camera journey through office spaces
- **Objects**: Monitors, desk, cabinet, portrait, messages - workspace-specific
- **Message**: "Understanding your users, designing your success" (unique to this designer)
- **Story**: Individual portfolio journey, not agency presentation

**We create original work inspired by Lusion's quality principles, never copying their implementations.**

---

## Implementation Phasing

### The Correct Order of Future Work

**DO NOT skip steps. Each builds on the previous.**

#### Step 1: Blueprint Approval (Current)
- Review this Master Experience Blueprint
- Discuss and refine scene definitions
- Approve the overall narrative structure
- Confirm world coherence approach
- Approve progression from loading to CTA

**Deliverable**: Approved MASTER_EXPERIENCE_BLUEPRINT.md

---

#### Step 2: Static Keyframes Specification
- Define visual composition for each scene's "hero frame"
- Specify what each scene looks like at rest (before transitions)
- Document object placement and spatial relationships
- Define typography, hierarchy, layout for each scene
- Create reference composition descriptions (not pixel mockups yet)

**Deliverable**: KEYFRAMES_SPECIFICATION.md (document, not images)

**Constraints**: Still Phase 0 (planning), not implementation

---

#### Step 3: Transition Storyboard Specification
- Define camera movement concepts between scenes
- Specify general timing and choreography principles
- Document scroll-to-camera-movement mapping approach
- Define transition principles (smooth, motivated, calm)
- Plan user control and accessibility considerations
- Keep implementation details flexible for storyboard phase

**Deliverable**: TRANSITIONS_STORYBOARD.md (document describing transition concepts)

**Constraints**: Still Phase 0 (planning), not implementation; detailed choreography deferred to storyboard phase

---

#### Step 4: Phase 1 - Static Foundation Implementation
- **After** blueprints and specs are approved
- Implement each scene as 2D/CSS/HTML
- Build all objects in 2D (monitors, desk, cabinet, portrait frame, etc.)
- Create static compositions matching keyframe specs
- Implement responsive layouts
- Premium typography and editorial spacing

**Deliverable**: Static, excellent 2D version of all scenes

**Constraints**: No 3D, no complex animations, no WebGL yet

---

#### Step 5: Phase 2 - Interaction Layer Implementation
- Add scroll-based transitions between scenes
- Implement camera movement choreography (CSS transforms, JavaScript)
- Add subtle interactions (hover states, clickable elements)
- Implement project browsing and recommendation viewing
- Add contact form or CTA interaction

**Deliverable**: Interactive, transitioning version with full scroll choreography

**Constraints**: No 3D/WebGL yet, CSS/JS interactions only

---

#### Step 6: Phase 3 - Depth & Dimensionality (If Approved)
- Enhance with WebGL/Three.js for 3D workspace
- Render objects in 3D (desk, monitors, cabinet, portrait frame)
- Add realistic materials, lighting, shadows
- Refine camera movements in 3D space
- Add depth and atmosphere

**Deliverable**: Full 3D cinematic workspace experience

**Constraints**: Only after 2D version is excellent and approved

---

## Audio Reality Check

### Vision: Calm Background Music

The vision includes **calm music as part of the atmosphere** - reinforcing the premium, editorial, contemplative experience.

### Browser Reality: Autoplay Restrictions

**Critical Constraint**: Modern browsers **do NOT allow autoplay of audible content** without explicit user interaction.

**What This Means**:
- Music CANNOT start automatically on page load
- Music CANNOT start on scroll without user gesture
- Music requires a user-initiated action: click, tap, keyboard input

### Design Implementation

**Music Control (Locked Decision)**:
- Provide a **visible, accessible music toggle control** (button or icon)
- Fixed position, always accessible
- User **must explicitly click/tap the control** to enable music
- **Default state: music off** (no audio on page load)
- Visible mute/unmute control always available
- Music may begin after user clicks the control in the Opening Desk Scene

### What Is NOT Possible
- ❌ Music auto-plays on page load (browser will block)
- ❌ Music fades in as user scrolls (without prior click/tap interaction)
- ❌ Music is "just there" without user control
- ❌ Scroll alone unlocks music

### Audio Requirements

**When audio is implemented** (future phase, with approval):

- **User control**: Visible, accessible mute/unmute toggle
- **Respects preferences**: Check for autoplay policies, muted preference
- **Optional experience**: Core experience works perfectly without audio
- **Calm and intentional**: Music enhances, doesn't distract
- **Accessibility**: Audio doesn't convey essential information
- **Performance**: Lightweight audio file, lazy-loaded

### Current Phase

**Phase 0**: Do not implement audio. Document the vision and constraints only.

**Future Phases**: Audio implementation requires separate specification and approval.

---

## What Must Be Postponed

### Not for Phase 0 (Current Phase)

Phase 0 is **specification and planning only**.

**DO NOT implement**:
- ❌ Any HTML/CSS for the scenes
- ❌ Any JavaScript for transitions
- ❌ Any 3D objects or WebGL
- ❌ Loading screen design or logo
- ❌ Monitor, desk, cabinet, portrait object creation
- ❌ Typography selection or layout
- ❌ Camera choreography code
- ❌ Audio/music integration
- ❌ Any visual design beyond documentation

**DO create** (if needed):
- ✅ Additional specification documents
- ✅ Refinements to this blueprint
- ✅ Answers to clarifying questions
- ✅ Documentation of decisions

---

### Not Until Static Foundation Is Excellent

**DO NOT implement** until Phase 1 produces excellent 2D versions:
- ❌ 3D rendering of any objects
- ❌ WebGL or Three.js setup
- ❌ Complex camera movements in 3D space
- ❌ Advanced lighting and materials
- ❌ Realistic depth and shadows

**First achieve**:
- ✅ Excellent 2D compositions
- ✅ Premium typography and layouts
- ✅ Solid responsive design
- ✅ Clear visual hierarchy
- ✅ Approved static foundation

---

### Not Until Transitions Work Well in 2D

**DO NOT implement** until Phase 2 scroll choreography is smooth:
- ❌ 3D camera movements
- ❌ WebGL scene transitions
- ❌ Complex 3D object transformations

**First achieve**:
- ✅ Smooth 2D/CSS transitions between scenes
- ✅ Scroll-based camera movement (CSS transforms)
- ✅ User-controlled pacing
- ✅ Accessibility compliance
- ✅ Performance targets met

---

### Not Without Individual Approval

**DO NOT implement** without explicit, documented approval:
- ❌ Audio/music (requires separate spec and approval)
- ❌ Loading screen animation (beyond minimal necessity)
- ❌ Each 3D object (monitors, desk, cabinet, etc.)
- ❌ Complex animation choreography
- ❌ Third-party libraries or dependencies
- ❌ Contact form backend integration
- ❌ Analytics or tracking

---

### Not Before Content Is Ready

**DO NOT implement** layouts before content exists:
- ❌ Identity Hero layout without approved copy
- ❌ About Me section without finalized bio
- ❌ Projects section without selected case studies
- ❌ Recommendations without curated testimonials
- ❌ CTA without clear contact strategy

**First prepare**:
- ✅ Final messaging and copy
- ✅ Selected projects with descriptions
- ✅ Curated testimonials
- ✅ Contact method decision
- ✅ All content reviewed and approved

---

## Success Criteria for This Blueprint

This blueprint is successful when:

1. ✅ **Complete experience is defined** from load to CTA
2. ✅ **Each scene's purpose is clear** and distinct
3. ✅ **World coherence is preserved** across all scenes
4. ✅ **Originality is established** (not a Lusion clone)
5. ✅ **Implementation phasing is understood** (blueprint → keyframes → storyboard → implementation)
6. ✅ **Audio reality is acknowledged** (cannot autoplay without user interaction)
7. ✅ **Postponement boundaries are clear** (what waits for future phases)
8. ✅ **Narrative flow makes sense** (logical spatial progression)
9. ✅ **Each scene serves the portfolio purpose** (not decoration)
10. ✅ **Restraint is maintained** throughout all scenes

---

## Next Steps After Blueprint Approval

1. **Review and approve** this blueprint
2. **Refine** any scenes that need clarification
3. **Begin Keyframes Specification** for each scene's visual composition
4. **Begin Transitions Storyboard** for camera choreography
5. **Update CURRENT_PHASE.md** when ready to transition to Phase 1
6. **Prepare content** (copy, projects, testimonials) in parallel with specifications

---

## Governance

This blueprint defines the **complete portfolio experience**.

**All future implementation must align with this vision.**

Changes to this blueprint must be:
- Intentional
- Documented
- Approved
- Coherent with WORLD_BIBLE.md and PRODUCT_VISION.md

**When in doubt about a scene or transition, refer back to this blueprint.**

The goal: **one coherent cinematic journey through a designer's workspace**.

**Restraint. Coherence. Premium quality. Original work.**

---

**Blueprint Status**: Awaiting approval
**Next Document**: KEYFRAMES_SPECIFICATION.md (after approval)
**Next Phase Transition**: To Phase 1 after all specs approved
