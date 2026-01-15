# TABS Frontend Architecture

TABS is a content-driven frontend architecture where **Pages are built on TABS**:
**Typography, Atoms, Base, and Sections**.

The architecture is defined by its constraints. Each layer has a clear responsibility and a strict dependency direction.

---

## Layers

### T — Typography

**Purpose:** Text primitives and typographic consistency.

- Headings, paragraphs, inline text
- No layout
- No composition
- No CMS awareness

**Examples:**

- `Heading1`
- `Paragraph`

---

### A — Atoms

**Purpose:** Small, reusable UI elements users interact with.

- Buttons, links, form controls
- Single responsibility
- No layout systems
- No knowledge of Sections or Pages

Atoms may depend on **Typography**, but nothing above.

**Examples:**

- `Button`
- `Link`

---

### B — Base

**Purpose:** Layout and structural primitives.

- Grid, stack, container, spacing
- No meaningful content
- No business logic
- Visually neutral

Base components are used by Atoms and Sections to ensure consistent layout.

**Examples:**

- `Section` (layout wrapper)
- `Grid`
- `Container`

---

### S — Sections

**Purpose:** Vertically stacked, CMS-driven visual patterns.

- Always stack vertically
- Named by **visual appearance**, not semantics
- Compose Atoms and Base components
- No layout systems of their own
- 1:1 mapping with CMS schemas

Sections are replaceable and isolated. Removing one must not affect others.

**Examples:**

- `TitleTextSection`
- `ImageTextSection`
- `FeatureGridSection`

---

## Pages (built on TABS)

Pages are composition only.

- Pages import **Sections only**
- No direct use of Atoms, Base, or Typography
- Page structure is driven by the CMS
- Pages define order, not implementation

---
