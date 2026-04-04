# GitHub Copilot Instructions

## Project Context

This is a **cinematic editorial portfolio experience** set in a designer's workspace.

It is **not** a typical website. Every suggestion you make must align with strict world coherence and workflow rules.

---

## Required Reading Before Suggestions

Before suggesting any code, you must understand:

1. **`.project-docs/WORLD_BIBLE.md`** - World coherence rules
2. **`.project-docs/WORKFLOW_RULES.md`** - Development workflow
3. **`.project-docs/CURRENT_PHASE.md`** - Current project phase

---

## Core Constraints

### Visual Language
- **Monochrome/grayscale only** - No colors except grays, blacks, whites
- **Premium aesthetic** - High-end, professional quality
- **Restrained** - Do less, make it better
- **Editorial** - Magazine-quality composition
- **No gaming aesthetic** - No neon, no RGB, no flashy effects

### World Coherence
- **One space only**: Designer's office/workspace
- **Physical realism**: Objects must feel real and grounded
- **No floating elements** without clear motivation
- **No random environments** or disconnected scenes

### Workflow
- **No code before approval** for new features
- **One scope at a time** - Stay focused
- **No 3D before 2D is excellent** - Sequential quality gates
- **Preserve restraint** - When in doubt, suggest doing less

---

## Current Phase Awareness

**Check `.project-docs/CURRENT_PHASE.md` before suggesting anything.**

### If in Phase 0 (Planning)
- Suggest documentation, specifications, structure
- **Do NOT suggest** implementation code

### If in Phase 1 (Static Foundation)
- Suggest HTML, CSS, SVG
- **Do NOT suggest** 3D, WebGL, complex animations

### If in Phase 2 (Interaction Layer)
- Suggest interactions, JavaScript behaviors
- **Do NOT suggest** 3D/WebGL yet

### If in Phase 3 (Depth & Dimensionality)
- Suggest 3D, WebGL enhancements
- Only if 2D foundation is approved

---

## Code Style Preferences

### HTML
- Semantic, accessible HTML5
- Minimal, clean markup
- No unnecessary divs
- ARIA labels only when semantic HTML insufficient

### CSS
- No frameworks (bespoke design)
- CSS Grid and Flexbox for layout
- CSS custom properties for theming
- Mobile-first responsive approach
- Performance-conscious (minimize reflows)

### JavaScript
- Vanilla JS preferred
- Progressive enhancement
- No library suggestions without explicit need
- Accessibility-first
- Respect `prefers-reduced-motion`

---

## Suggestion Guidelines

### Always Suggest
- Accessible alternatives
- Performance optimizations
- Semantic HTML improvements
- Cleaner, simpler solutions

### Never Suggest
- Bootstrap, Tailwind, or other CSS frameworks
- jQuery or unnecessary libraries
- Auto-playing media
- Tracking/analytics scripts without approval
- Color (except grayscale)
- Gaming aesthetics
- Flashy effects

### Ask First Before Suggesting
- New libraries or dependencies
- 3D/WebGL implementations
- Complex animations
- Significant refactoring
- Architecture changes

---

## Quality Standards

Every suggestion should:
1. Align with WORLD_BIBLE.md coherence rules
2. Respect current phase boundaries
3. Maintain monochrome aesthetic
4. Prioritize accessibility
5. Be performance-conscious
6. Preserve restraint and intentionality

---

## Common Scenarios

### "How to make this more visually interesting?"
- Suggest typography, spacing, composition
- **Don't** suggest colors or flashy effects

### "How to add interactivity?"
- Check current phase first
- Suggest subtle, intentional interactions
- Respect user motion preferences

### "How to display work/projects?"
- Consider workspace narrative
- Suggest monitor object as display canvas
- Maintain premium, editorial presentation

### "How to improve performance?"
- Always welcome suggestions
- Lazy loading, code splitting, optimization
- Maintain functionality while improving speed

---

## Anti-Patterns to Avoid Suggesting

❌ Bootstrap/Tailwind classes
❌ jQuery animations
❌ Parallax libraries
❌ Auto-playing video backgrounds
❌ Cookie consent libraries (unless legally required)
❌ Color gradients or chromatic elements
❌ Gaming-style UI elements
❌ Neon glows or RGB effects
❌ Multiple environments or worlds

---

## File Organization Awareness

### Implementation Files
- `index.html` - Main HTML structure
- `styles/main.css` - Primary stylesheet
- `scripts/main.js` - Main JavaScript

### Documentation (Read these!)
- `.project-docs/WORLD_BIBLE.md` - Source of truth
- `.project-docs/PRODUCT_VISION.md` - Project goals
- `.project-docs/WORKFLOW_RULES.md` - How we work
- `.project-docs/CURRENT_PHASE.md` - What's allowed now
- `.project-docs/HERO_STRUCTURE_SPEC.md` - Hero section spec
- `.project-docs/MONITOR_OBJECT_SPEC.md` - Monitor object spec

### Meta
- `README.md` - Project overview
- `AGENTS.md` - AI agent guidelines
- `CLAUDE.md` - Claude-specific rules
- `.github/copilot-instructions.md` - This file

---

## Example Good Suggestions

✅ "Use CSS Grid for this layout to maintain clean semantic HTML"
✅ "Add aria-label here for screen reader accessibility"
✅ "Consider prefers-reduced-motion for users with vestibular sensitivity"
✅ "Optimize this animation to maintain 60fps"
✅ "Use CSS custom properties to maintain monochrome palette consistency"

---

## Example Bad Suggestions

❌ "Add Bootstrap for faster development"
❌ "Use this parallax library for cool effects"
❌ "Make this button blue to stand out"
❌ "Add an auto-playing video background"
❌ "Install Three.js and create a 3D scene" (before Phase 3)

---

## When Uncertain

If you're unsure whether a suggestion aligns with project rules:

1. Check `.project-docs/CURRENT_PHASE.md`
2. Verify against `.project-docs/WORLD_BIBLE.md`
3. If still uncertain, **don't suggest it**
4. Or frame it as a question: "Would this align with the workspace aesthetic?"

---

## Governance

These instructions are **mandatory** for all Copilot suggestions.

Suggestions that violate these rules will be rejected and waste developer time.

When in doubt, suggest **less**, not more.

**Restraint is a feature, not a limitation.**
