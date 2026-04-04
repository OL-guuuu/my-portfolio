# WORKFLOW RULES

## Core Mandate

**Plan first. Code second. Never the reverse.**

This project prioritizes **intentionality over speed** and **coherence over features**.

---

## The Iron Laws

### 1. Always Plan First
- No code before written approval
- No "quick experiments" that skip review
- Document the plan before touching files
- Get explicit approval before implementation

### 2. One Scope at a Time
- Complete current scope before expanding
- No feature creep mid-task
- No "while I'm here" additions
- Stay within approved boundaries

### 3. No Redesign Outside Approved Scope
- If current task is "add button," don't refactor the layout
- Respect existing decisions unless explicitly tasked to change them
- Ask before "improving" things outside scope

### 4. Sequential Quality Gates
- **No 3D** before static object quality is approved
- **No WebGL** before object/world design is mature
- **No animations** before static design is solid
- **No effects** before core functionality works

### 5. Preserve Restraint and Coherence
- When in doubt, do less
- Maintain world coherence (see WORLD_BIBLE.md)
- Resist the urge to add "just one more thing"
- Simplicity is not a fallback—it's the goal

### 6. Visible Design Value Only
- No hidden complexity
- No clever code that users don't perceive
- User-perceivable quality is what matters
- Engineering for engineering's sake is out of scope

---

## Development Phases

### Phase 0: Planning (Current)
**What**: Define structure, write docs, establish rules

**Allowed**:
- Create folder structure
- Write documentation
- Create placeholder files
- Define specifications

**Not Allowed**:
- Implement actual UI
- Write production code
- Add libraries or frameworks
- Create "draft" designs without approval

---

### Phase 1: Static Foundation
**What**: Build approved objects and layouts in 2D/CSS

**Allowed**:
- HTML structure for approved elements
- CSS styling for approved designs
- Responsive layouts
- Typography implementation
- SVG graphics

**Requires Approval**:
- New objects or sections
- Layout changes
- Color palette adjustments
- Font additions

**Not Allowed**:
- 3D/WebGL
- Complex animations
- JavaScript beyond basics
- External dependencies without approval

---

### Phase 2: Interactive Layer
**What**: Add approved interactions and motion

**Allowed**:
- CSS transitions and animations (approved)
- JavaScript for interactions (approved)
- Scroll behaviors (approved)
- State management

**Requires Approval**:
- New interaction patterns
- Animation choreography
- JavaScript libraries
- Third-party integrations

**Not Allowed**:
- 3D/WebGL (still)
- Auto-playing media
- Intrusive popups
- Analytics without approval

---

### Phase 3: Depth & Dimensionality
**What**: Add approved 3D and WebGL when objects are mature

**Prerequisites**:
- Static objects approved and excellent
- World coherence proven
- Performance budget established
- Fallback plan documented

**Allowed**:
- Three.js / WebGL implementation
- 3D object rendering
- Camera choreography
- Lighting design

**Requires Approval**:
- Each 3D object individually
- WebGL scenes
- Performance trade-offs
- Accessibility fallbacks

---

### Phase 4: Polish & Launch
**What**: Optimize, test, and deploy

**Allowed**:
- Performance optimization
- Cross-browser testing
- Accessibility audit and fixes
- SEO implementation
- Analytics (privacy-respecting, approved)

**Requires Approval**:
- Launch date
- Analytics platform
- Third-party scripts
- Hosting configuration

---

## Agent Interaction Rules

### For AI Assistants Working on This Project

#### Before Starting Any Task

1. **Read these documents**:
   - WORLD_BIBLE.md (coherence rules + Lusion reference)
   - PRODUCT_VISION.md (project goals + creative reference)
   - WORKFLOW_RULES.md (this file)
   - CURRENT_PHASE.md (current state)

2. **Understand current phase**:
   - What phase are we in?
   - What's allowed in this phase?
   - What requires approval?

3. **Understand creative references**:
   - Lusion is a quality/mood/pacing reference ONLY
   - Never clone or directly copy Lusion
   - Our world is a designer's workspace (not Lusion's world)
   - Study their restraint and quality, create our own work

4. **Clarify the scope**:
   - What exactly is requested?
   - Is this within current phase boundaries?
   - Is approval already granted?

#### During Implementation

1. **Stay in scope**:
   - Do exactly what's requested
   - No surprise additions
   - No "improvements" outside scope

2. **Preserve coherence**:
   - Align with WORLD_BIBLE.md
   - Maintain visual language
   - Respect existing decisions

3. **Ask when uncertain**:
   - Scope boundary unclear? Ask.
   - Need to exceed current phase? Ask.
   - Want to modify existing approved work? Ask.

#### When Proposing Changes

1. **Present a plan first**:
   - What will change
   - Why it's needed
   - How it aligns with vision
   - What phase-appropriate constraints apply

2. **Wait for approval**:
   - Don't code the proposal
   - Don't create "drafts"
   - Don't implement "to show the idea"

3. **Document decisions**:
   - Update relevant docs if approved
   - Note any exceptions granted
   - Keep CURRENT_PHASE.md accurate

---

## Quality Checklist

Before considering any work "complete":

### Coherence
- [ ] Aligns with WORLD_BIBLE.md
- [ ] Fits the designer's workspace world
- [ ] Maintains monochrome/grayscale aesthetic
- [ ] Feels premium and restrained

### Scope Compliance
- [ ] Stayed within approved scope
- [ ] No unapproved additions
- [ ] Current phase boundaries respected

### Technical Quality
- [ ] Semantic HTML
- [ ] Accessible (WCAG 2.1 AA minimum)
- [ ] Responsive design
- [ ] Performance-conscious
- [ ] Browser compatibility considered

### Documentation
- [ ] Changes documented if needed
- [ ] CURRENT_PHASE.md updated
- [ ] Code comments where appropriate
- [ ] README.md reflects current state

---

## Common Mistakes to Avoid

### ❌ "I'll just add this one thing..."
No. If it's not in scope, ask first.

### ❌ "This would look better if..."
Maybe, but is it approved? Is it in the current phase?

### ❌ "Let me show you what I mean..."
Show a plan, not implemented code.

### ❌ "I found a cool library that..."
Libraries need approval. Does it align with vision?

### ❌ "I refactored while working on..."
Refactoring needs its own scope and approval.

### ❌ "I added some animation to..."
Animations need approval and phase-appropriate timing.

### ❌ "I copied this from Lusion because..."
No. Lusion is a quality/mood reference, not a source to copy from. Create original work.

---

## Decision Framework

When uncertain about any decision, ask these questions:

1. **Is this in the current approved scope?**
   - Yes → Proceed
   - No → Ask for approval
   - Unsure → Ask for clarification

2. **Does this align with WORLD_BIBLE.md?**
   - Yes → Continue evaluation
   - No → Stop, reconsider, or ask
   - Unsure → Review world rules

3. **Is this phase-appropriate?**
   - Yes → Continue evaluation
   - No → Defer to appropriate phase
   - Unsure → Check CURRENT_PHASE.md

4. **Does this add visible design value?**
   - Yes → Continue evaluation
   - No → Reconsider necessity
   - Unsure → Ask for guidance

5. **Is this the simplest solution?**
   - Yes → Likely good to proceed
   - No → Simplify first
   - Unsure → Propose alternatives

---

## Communication Protocols

### Requesting Approval

**Template**:
```
## Proposed Change
[What you want to do]

## Rationale
[Why it's needed]

## Scope
[What will change, what won't]

## Phase Alignment
[How it fits current phase]

## Vision Alignment
[How it supports product vision]

## Alternatives Considered
[Other approaches evaluated]
```

### Reporting Completion

**Template**:
```
## Completed
[What was done]

## Scope Adherence
[Confirmation of staying in scope]

## Quality Checklist
[Completed items from checklist]

## Documentation Updates
[What docs were updated]

## Next Logical Step
[Recommendation for what's next, if any]
```

---

## Version Control

### Commit Messages
- Clear and descriptive
- Reference scope/phase when relevant
- Use conventional commits format (optional but encouraged)

### Branch Strategy
- Main branch: stable, approved work only
- Feature branches: for proposed changes
- No direct commits to main without approval

---

## Emergency Overrides

### When Rules Can Be Broken

**Security Issues**: Fix immediately, document after.

**Critical Bugs**: Fix first, follow process after.

**User Harm**: Prevent harm, then document.

### When Rules Cannot Be Broken

Everything else. Plan first, code second.

---

## Governance

These workflow rules are **mandatory** for all contributors, human or AI.

Exceptions require explicit documentation and approval.

When rules conflict, **WORLD_BIBLE.md > PRODUCT_VISION.md > WORKFLOW_RULES.md** in priority.

When in doubt, **ask before acting**.
