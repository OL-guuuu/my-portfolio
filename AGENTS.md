# AI Agent Instructions

## Overview

This document provides instructions for **all AI coding assistants** working on this portfolio project.

If you are Claude, also read `CLAUDE.md` for additional specific instructions.

If you are GitHub Copilot, also read `.github/copilot-instructions.md`.

---

## Before You Start

### Required Reading (MANDATORY)

You **must** read and understand these documents before taking any action:

1. **`.project-docs/WORLD_BIBLE.md`** - World coherence rules (source of truth)
2. **`.project-docs/PRODUCT_VISION.md`** - Project goals and philosophy
3. **`.project-docs/WORKFLOW_RULES.md`** - Development workflow (how we work)
4. **`.project-docs/CURRENT_PHASE.md`** - Current project phase and what's allowed

### Specification Documents (Read When Relevant)

- **`.project-docs/HERO_STRUCTURE_SPEC.md`** - Hero section specification
- **`.project-docs/MONITOR_OBJECT_SPEC.md`** - Monitor object specification

---

## Core Principles

### 1. Plan First, Code Second

**Never write code before getting approval for what you're building.**

- Present a written plan first
- Wait for explicit approval
- Then implement exactly what was approved
- No surprises, no "I also added..."

### 2. Stay in Current Phase

Check `.project-docs/CURRENT_PHASE.md` to understand:
- What phase we're in
- What's allowed in this phase
- What requires approval
- What's explicitly forbidden right now

**Do not jump ahead to future phases.**

### 3. Preserve World Coherence

Every decision must align with `.project-docs/WORLD_BIBLE.md`:
- One coherent space: designer's office/workspace
- Monochrome/grayscale only
- Premium, restrained, editorial aesthetic
- No gaming aesthetic, no neon, no flashy effects
- Physical realism and grounding

### 4. One Scope at a Time

- Complete the current task before suggesting new ones
- No feature creep
- No "while I'm here" additions
- Stay within approved boundaries

### 5. Restraint is Excellence

When in doubt, **do less**.

- Simplicity over complexity
- Intentionality over abundance
- Quality over quantity
- Visible design value only

---

## Workflow Rules

### Starting a New Task

1. **Understand the request**
   - What exactly is being asked?
   - Is this in scope for current phase?
   - Is approval already granted?

2. **Check current phase**
   - Read `.project-docs/CURRENT_PHASE.md`
   - Verify task is phase-appropriate
   - Identify any constraints

3. **Present a plan**
   - What will you do?
   - How does it align with vision?
   - What won't you do (boundaries)?
   - Wait for approval

4. **Implement exactly what was approved**
   - No additions
   - No improvements outside scope
   - No surprise features

5. **Document and complete**
   - Update relevant docs if needed
   - Confirm scope adherence
   - Note completion

### During Implementation

- **Stay in scope**: Do what was approved, nothing more
- **Preserve coherence**: Align with WORLD_BIBLE.md
- **Maintain quality**: Premium, accessible, performant
- **Ask when uncertain**: Better to ask than guess wrong

### When Uncertain

**Ask. Don't guess.**

If you're unsure about:
- Whether something is in scope
- Whether it's appropriate for current phase
- Whether it aligns with world rules
- Whether approval is needed

**Stop and ask for clarification.**

---

## What You Can Do (By Phase)

### Phase 0: Planning & Foundation
✅ **Allowed**:
- Write documentation
- Create specifications
- Define structure
- Create minimal placeholders

❌ **Not Allowed**:
- Implement UI
- Write production code
- Add libraries
- Build features

### Phase 1: Static Foundation
✅ **Allowed**:
- HTML structure
- CSS styling
- Responsive layouts
- Typography
- SVG graphics

❌ **Not Allowed**:
- 3D/WebGL
- Complex animations
- JavaScript beyond basics
- External dependencies (without approval)

### Phase 2: Interaction Layer
✅ **Allowed**:
- JavaScript interactions
- CSS animations (approved)
- Scroll behaviors
- State management

❌ **Not Allowed**:
- 3D/WebGL (still)
- Auto-playing media
- Third-party libraries (without approval)

### Phase 3: Depth & Dimensionality
✅ **Allowed** (with approval):
- Three.js / WebGL
- 3D objects
- Camera choreography
- Advanced lighting

❌ **Not Allowed** (without approval):
- Each 3D object needs approval
- Performance trade-offs need approval
- Must have accessible fallbacks

---

## Quality Standards

### Every Contribution Must

1. **Align with WORLD_BIBLE.md**
   - Workspace coherence
   - Monochrome aesthetic
   - Premium feel
   - Restrained approach

2. **Meet Technical Standards**
   - Semantic HTML
   - WCAG 2.1 AA accessibility
   - Responsive design
   - Performance-conscious
   - Browser compatible

3. **Respect Current Phase**
   - Phase-appropriate techniques
   - No premature optimization
   - No jumping ahead

4. **Add Visible Value**
   - User-perceivable quality
   - Serves narrative
   - Purposeful, not decorative

---

## Code Style Guidelines

### HTML
- Semantic HTML5 elements
- Proper heading hierarchy
- Accessible landmark regions
- Minimal, clean markup
- No unnecessary divs

### CSS
- No CSS frameworks (bespoke design)
- CSS Grid and/or Flexbox for layout
- CSS custom properties for theming
- Mobile-first responsive approach
- Performance-conscious (minimize reflows)
- Monochrome/grayscale colors only

### JavaScript
- Progressive enhancement
- Vanilla JS preferred
- No JavaScript required for core content
- Accessibility-first
- Respect `prefers-reduced-motion`
- No libraries without approval

### Performance
- Fast initial load
- 60fps for animations
- Lazy load heavy assets
- Minimize JavaScript execution
- Efficient DOM operations

---

## Common Mistakes to Avoid

### ❌ "Let me just add this quick feature..."
No. If it's not approved, don't add it.

### ❌ "This would look better in color..."
No. Monochrome/grayscale only. Read WORLD_BIBLE.md.

### ❌ "I'll add Three.js to make it 3D..."
No. Not until Phase 3, and only with approval.

### ❌ "I found a cool library for this..."
Libraries need approval. Is it necessary? Does it align with vision?

### ❌ "I improved the whole layout while fixing the button..."
No. Stay in scope. Fix the button, nothing else.

### ❌ "I added some parallax effects..."
No. Flashy effects violate world coherence. Read WORLD_BIBLE.md.

---

## Anti-Patterns (Never Do These)

### Visual
- ❌ Adding color (except grayscale)
- ❌ Gaming aesthetics
- ❌ Neon effects
- ❌ RGB lighting
- ❌ Flashy animations
- ❌ Parallax overload

### Technical
- ❌ CSS frameworks (Bootstrap, Tailwind, etc.)
- ❌ jQuery
- ❌ Unapproved libraries
- ❌ Auto-playing media
- ❌ Tracking scripts without approval
- ❌ Inaccessible implementations

### Process
- ❌ Code before approval
- ❌ Scope creep
- ❌ Skipping phases
- ❌ Ignoring CURRENT_PHASE.md
- ❌ Surprising additions

---

## Communication Templates

### Proposing Work

```markdown
## Proposed Task
[What you want to do]

## Current Phase Alignment
[How this fits the current phase]

## Vision Alignment
[How this supports WORLD_BIBLE.md and PRODUCT_VISION.md]

## Scope
[What will change, what won't]

## Alternatives Considered
[Other approaches, if any]

## Approval Requested
[Explicit request for go-ahead]
```

### Reporting Completion

```markdown
## Completed
[What was done]

## Scope Adherence
[Confirmation of staying in scope]

## Quality Checklist
- [ ] Aligns with WORLD_BIBLE.md
- [ ] Phase-appropriate
- [ ] Accessible
- [ ] Performant
- [ ] Documentation updated

## Next Steps
[Recommendations, if any]
```

---

## Decision Framework

When making any decision, ask:

1. **Is this in the current approved scope?**
   - Yes → Proceed
   - No → Ask for approval
   - Unsure → Ask for clarification

2. **Does this align with WORLD_BIBLE.md?**
   - Yes → Continue
   - No → Reconsider or ask
   - Unsure → Review world rules

3. **Is this phase-appropriate?**
   - Yes → Continue
   - No → Defer to later phase
   - Unsure → Check CURRENT_PHASE.md

4. **Does this add visible design value?**
   - Yes → Continue
   - No → Reconsider necessity
   - Unsure → Ask

5. **Is this the simplest solution?**
   - Yes → Good to proceed
   - No → Simplify first
   - Unsure → Propose alternatives

If **any** answer is "No" or "Unsure," stop and ask.

---

## Accessibility Requirements

### Mandatory
- WCAG 2.1 AA compliance minimum
- Semantic HTML structure
- Sufficient color contrast (even in grayscale)
- Keyboard navigation
- Screen reader friendly
- Focus indicators
- Respect `prefers-reduced-motion`

### Best Practices
- Alt text for images
- ARIA labels where semantic HTML insufficient
- Logical tab order
- Skip links for navigation
- No keyboard traps

---

## Performance Requirements

### Initial Load
- Hero content visible within 1 second (3G)
- Critical CSS inlined or loaded first
- No blocking resources for initial render
- Progressive loading for heavy assets

### Runtime
- 60fps for animations
- No layout shifts after initial render
- Minimal JavaScript execution on load
- Efficient resource usage

---

## Browser Support

### Target Browsers
- Modern Chrome, Firefox, Safari, Edge
- Last 2 versions
- Progressive enhancement for older browsers

### Graceful Degradation
- Core content accessible to all
- Enhanced features for modern browsers
- No browser sniffing (feature detection only)

---

## Documentation Responsibilities

### Update When Needed
- `.project-docs/CURRENT_PHASE.md` - If phase status changes
- `README.md` - If project structure changes significantly
- Relevant spec docs - If implementations deviate (with approval)

### Don't Modify Without Approval
- `.project-docs/WORLD_BIBLE.md` - Source of truth
- `.project-docs/PRODUCT_VISION.md` - Core vision
- `.project-docs/WORKFLOW_RULES.md` - Process rules

---

## Version Control

### Commits
- Clear, descriptive messages
- Reference phase/scope when relevant
- Conventional commits format encouraged

### Branches
- Main branch: stable, approved work only
- Feature branches: for proposed changes
- No direct commits to main without approval

---

## Getting Help

### When Stuck
1. Re-read relevant documentation
2. Check CURRENT_PHASE.md
3. Review WORLD_BIBLE.md
4. Ask specific questions
5. Propose alternatives with rationale

### When Rules Conflict
Priority order:
1. WORLD_BIBLE.md
2. PRODUCT_VISION.md
3. WORKFLOW_RULES.md
4. Specific task instructions

---

## Creative Reference

### Lusion (https://lusion.co/)

**Lusion is a creative reference for:**
- **Quality bar**: The premium execution level we aspire to
- **Atmosphere**: How to create mood and immersive depth
- **Restraint**: Intentionality over abundance
- **Cinematic pacing**: Thoughtful, deliberate storytelling
- **Premium digital experience**: Editorial quality standards

**Lusion is NOT:**
- A template to copy or clone
- A source for layouts to replicate
- A place to copy interactions from
- A reason to duplicate sections or components
- A guide for 3D/WebGL implementations to mimic
- Something that changes our designer workspace world

**How AI Agents Should Use This Reference:**
1. Study Lusion to understand **quality standards**
2. Observe their **restraint** and **intentional design choices**
3. Feel the **mood** and **cinematic pacing** they achieve
4. Apply those **principles** to our **unique workspace world**
5. **Always create original work** - never copy Lusion directly
6. When uncertain, ask: "Am I inspired by their quality, or am I copying?"

**Critical Rule:**
Our project world is **a singular designer's office/workspace**. This never changes, regardless of what Lusion does. We study Lusion for quality and mood, we create our own original implementation.

---

## Success Criteria

You're doing well when:

1. ✅ Every contribution aligns with world coherence
2. ✅ Current phase boundaries are respected
3. ✅ Quality standards are met consistently
4. ✅ No surprises or scope creep
5. ✅ Documentation is accurate and current
6. ✅ Communication is clear and proactive
7. ✅ Restraint and intentionality are evident
8. ✅ Lusion is used for inspiration, never for copying

---

## Governance

These instructions are **mandatory** for all AI assistants.

Violations waste time and compromise the project vision.

**When in doubt, ask. When uncertain, do less.**

**Restraint and coherence are not limitations—they are the vision.**
