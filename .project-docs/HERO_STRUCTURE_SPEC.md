# HERO STRUCTURE SPEC

## Purpose

The Hero section is the **first impression** and **narrative anchor** for the entire portfolio experience.

It introduces the designer's workspace world and establishes the tone, aesthetic, and core message.

**DO NOT IMPLEMENT YET.** This is a specification document.

---

## Core Function

### What the Hero Does

1. **Establishes the world**: Immediately signals "this is a designer's workspace"
2. **Delivers the message**: Communicates the designer's value proposition
3. **Invites exploration**: Creates interest in exploring further
4. **Sets expectations**: Establishes the premium, restrained, editorial tone

### What the Hero Does NOT Do

- ❌ Overwhelm with effects
- ❌ Auto-play media
- ❌ Trap users in forced sequences
- ❌ Distract from the message
- ❌ Look like every other hero section

---

## Content Requirements

### Primary Message (Required)
> "Understanding your users, designing your success."

**Placement**: Prominent, readable, impactful
**Treatment**: Premium typography, appropriate hierarchy
**Tone**: Confident, clear, professional

### Supporting Message (Required)
> "Powered by AI-driven insight, product thinking, and user-centered design."

**Placement**: Secondary to primary message, but clearly visible
**Treatment**: Lighter weight, smaller scale, but still premium
**Tone**: Informative, modern, specific

### Designer Role Identifier (Required)
- UX/UI & Product Designer
- May be integrated into supporting text or standalone
- Must be clear without being redundant

---

## Visual Structure

### Composition Philosophy

**Editorial framing**: Think magazine spread, not website header.

**Cinematic consideration**: Intentional use of space, depth, and focus.

**Object-centered**: The workspace environment should be present, even if subtle.

### Layout Principles

1. **Generous whitespace**: Premium feel through restraint
2. **Typographic hierarchy**: Clear, intentional, readable
3. **Monochrome palette**: Grays, blacks, whites only
4. **Balanced asymmetry**: Interesting but not chaotic
5. **Depth suggestion**: Hint at the 3D workspace to come

### Key Elements to Consider (Future Implementation)

- **The Monitor**: May be visible or suggested in hero
  - If visible: follows MONITOR_OBJECT_SPEC.md
  - If suggested: hints at its presence
- **The Desk**: Grounds the environment
- **Lighting**: Creates mood and depth
- **Workspace context**: Subtle cues of the designer's environment

---

## Interaction Requirements

### Initial State (Before User Interaction)

- **Static or subtle motion only**
- No auto-playing animations that distract from message
- Calm, confident, premium feeling
- Message is immediately readable
- Environment is immediately understandable

### On User Interaction (Future Phases)

- **Scroll behavior**: May reveal more of workspace
- **Hover states**: Subtle, refined, purposeful
- **Click/tap areas**: Clear, accessible, intentional
- **Navigation cues**: Gentle invitation to explore further

### What Is NOT Allowed

- ❌ Splash screens or forced intros
- ❌ Auto-playing video or audio
- ❌ Jarring animations on load
- ❌ Parallax overload
- ❌ Scrolljacking (forced scroll behavior)
- ❌ Intrusive popups

---

## Technical Specifications

### HTML Structure (Future Phase 1)

```
- Semantic HTML5
- Proper heading hierarchy (h1 for primary message)
- Accessible landmark regions
- No unnecessary divs
- Clean, readable markup
```

### CSS Implementation (Future Phase 1)

```
- Mobile-first responsive design
- CSS Grid and/or Flexbox for layout
- CSS custom properties for theming
- No CSS frameworks (bespoke design)
- Performance-conscious (minimal reflows/repaints)
```

### JavaScript (Future Phase 2)

```
- Progressive enhancement
- No JavaScript required for core message
- Interaction enhancements only
- Accessibility-first
- Vanilla JS or minimal, approved library
```

### WebGL/3D (Future Phase 3)

```
- Only after static design is approved and excellent
- Must have accessible fallback
- Performance budget must be met
- Must serve narrative, not spectacle
```

---

## Responsive Behavior

### Mobile (< 768px)

- **Message priority**: Text must be fully readable
- **Simplified environment**: Fewer details, clearer hierarchy
- **Touch-friendly**: Adequate tap targets
- **Performance**: Fast load, minimal resources

### Tablet (768px - 1024px)

- **Balanced layout**: More environment detail possible
- **Readable at arm's length**: Appropriate type sizes
- **Orientation flexibility**: Works in portrait and landscape

### Desktop (> 1024px)

- **Full experience**: Complete workspace environment
- **Cinematic framing**: Generous use of space
- **Detail and depth**: Environment richness
- **Comfortable reading**: Optimal line length and hierarchy

### Ultrawide (> 1920px)

- **Premium presentation**: Take advantage of space
- **Avoid stretching**: Content should not feel thin
- **Maintain balance**: Composition integrity at all sizes

---

## Accessibility Requirements

### Must Have

- **WCAG 2.1 AA compliance** minimum
- Sufficient color contrast (even in grayscale)
- Keyboard navigable (when interactive elements present)
- Screen reader friendly
- Focus indicators for interactive elements
- No motion for users with vestibular sensitivity (respect prefers-reduced-motion)

### Best Practices

- Semantic HTML for proper structure
- Alt text for any images
- ARIA labels where appropriate (but prefer semantic HTML)
- Logical tab order
- Skip links if needed for navigation

---

## Performance Requirements

### Loading

- **Hero content visible within 1 second** on 3G connection
- Progressive loading for any heavy assets
- Critical CSS inlined or loaded first
- No blocking resources for initial render

### Runtime

- **60fps** for any animations
- No layout shifts after initial render
- Minimal JavaScript execution on load
- Efficient resource usage

---

## Content Guidelines

### Typography (Future Implementation)

- **Premium font selection**: Professional, readable, distinctive
- **Appropriate hierarchy**: Clear visual levels
- **Optimal readability**: Line height, letter spacing, line length
- **Responsive scaling**: Fluid typography where appropriate

### Messaging Tone

- **Clear and direct**: No ambiguity
- **Confident**: Not arrogant, not timid
- **Specific**: Avoid vague claims
- **Human**: Professional but approachable

---

## Implementation Phases

### Phase 1: Static Foundation
- HTML structure
- CSS styling
- Responsive layout
- Typography implementation
- Static 2D workspace hints

### Phase 2: Interaction Layer
- Scroll behaviors (approved)
- Subtle hover states
- Navigation implementation
- Micro-interactions

### Phase 3: Depth & Dimensionality
- WebGL workspace rendering (if approved)
- 3D monitor object (if approved)
- Camera choreography (if approved)
- Advanced lighting

---

## Success Criteria

The Hero section is successful when:

1. **Message is clear**: Visitor immediately understands what the designer does
2. **Tone is set**: Premium, restrained, editorial feeling established
3. **World is introduced**: Workspace environment is apparent
4. **Engagement happens**: Visitor wants to explore further
5. **Accessibility works**: All users can access content
6. **Performance meets targets**: Fast, smooth, efficient

---

## Anti-Patterns to Avoid

### ❌ The "Typical Agency Site" Hero
- Auto-playing video background
- Parallax overload
- Vague tagline ("We make things great")
- Generic stock photography

### ❌ The "Look What I Can Do" Hero
- Gratuitous WebGL effects
- Animation for animation's sake
- Complexity that obscures message
- Tech demo over user experience

### ❌ The "Information Dump" Hero
- Too much text
- Multiple CTAs competing for attention
- No visual hierarchy
- Cramped layout

---

## Reference Quality

When evaluating hero implementation quality, ask:

1. **Does this feel premium?**
2. **Is the message immediately clear?**
3. **Does this establish the workspace world?**
4. **Is this restrained and intentional?**
5. **Would this make a great first impression?**

If any answer is "no," refinement is needed.

---

## Governance

This specification guides hero implementation.

**Do not implement without approval.**

**Do not deviate from this spec without documenting why.**

Changes to this spec must be intentional and approved.
