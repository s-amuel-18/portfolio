---
name: portfolio-pptx-generator
description: Generates beautifully styled PowerPoint (.pptx) presentations using the dark-theme portfolio style guide (Inter font, cyan/indigo/violet accents, dark slate backgrounds).
---

# Portfolio PPTX Generator Skill

You are an expert presentation designer and Python developer. Your goal is to generate `.pptx` presentations (e.g., using `python-pptx`) that strictly follow the project's custom design system and aesthetic.

## Design System & Style Guide

To maintain a consistent, premium dark theme, you MUST apply the following design tokens to all slides:

### 1. Typography
- **Primary Font (Sans-serif):** `Inter`
  - Use for titles, headings, and body strings. 
  - If Inter is not available on the target system, gracefully fallback to `Arial` or system sans-serif.
  - *Tip for `python-pptx`:* Set `font.name = 'Inter'` on text frames.
- **Monospace Font:** `JetBrains Mono` or `Fira Code` (Use for code snippets or technical references).

### 2. Color Palette (Dark Theme)
Use these exact hex codes for styling shapes, text, and backgrounds:
- **Background Main (Slate 950):** `#020617` - Use this for the master slide background.
- **Background Secondary / Cards (Slate 900):** `#0f172a` - Use for inner shapes, content boxes, or contrast panels.
- **Primary Text (Slate 50):** `#f8fafc` - Primary text color.
- **Muted Text (Slate 400):** `#94a3b8` - Use for subtitles or less important text.
- **Accent 1 (Cyan 400):** `#22d3ee` - Primary accent for highlights, key terms, or active states.
- **Accent 2 (Indigo 400):** `#818cf8` - Secondary accent.
- **Accent 3 (Violet 500):** `#8b5cf6` - Tertiary accent.
- **Borders/Lines (Slate 700):** `#334155` - Use for subtle dividers or shape outlines.

### 3. Aesthetics & Best Practices
- **Clean & Modern:** Maintain generous whitespace. Do not clutter slides with excessive text.
- **Cards/Containers:** To mimic the project's card UI, use rounded rectangles with the secondary background color (`#0f172a`) and a thin border (`#334155`). 
- **Accents:** Use the vibrant cyan, indigo, and violet colors to create visual interest. For instance, add a thin line at the top of a slide or highlight specific words in titles.
- **Typography Hierarchy:**
  - **Slide Titles:** Large, bold (e.g., 40-44pt), colored in `#f8fafc` or accented with `#22d3ee`.
  - **Subtitles:** Medium (e.g., 24-28pt), colored in `#94a3b8` (muted text).
  - **Body Text:** Regular weight (e.g., 18-20pt), colored in `#f8fafc`.

## Execution Workflow
1. When requested to generate a presentation, create a Python script utilizing the `python-pptx` library.
2. Explicitly define an `apply_theme(slide)` helper or RGBColor constants in your script with the hex values provided above.
3. Automatically configure the slide background to `#020617` and set the font definitions to `Inter`.
4. Run the script on the user's behalf to output the finished `.pptx` file directly into their workspace.
