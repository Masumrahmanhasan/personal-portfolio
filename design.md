---
version: alpha
name: Bponi Global Studio
description: A clean, high-trust B2B platform system with restrained color, rounded cards, and lightweight enterprise polish.
colors:
  primary: "#4E6F64"
  secondary: "#334155"
  tertiary: "#0A0A0A"
  neutral: "#E3E7E5"
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  muted: "#6B7B93"
  border: "#4E6F642E"
  background: "#FFFFFF"
  error: "#B42318"
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Manrope
    fontSize: 35px
    fontWeight: 600
    lineHeight: 42px
    letterSpacing: 0px
  headline-md:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: 600
    lineHeight: 34.8px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Manrope
    fontSize: 19px
    fontWeight: 600
    lineHeight: 23px
    letterSpacing: 0.3px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.35px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0.2px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.2px
  label-md:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.15px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.12px
  overline:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 4px
  md: 12px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 38px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 38px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 20px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  nav-pill-active:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  nav-pill-inactive:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 10px 18px
---

# Bponi Global Studio

## Overview
Bponi presents itself as a calm, credible B2B product studio for emerging markets. The tone is professional, modern, and slightly understated, with a strong emphasis on trust, systems thinking, and operational clarity. The layout feels spacious and airy, allowing large typography and data cards to carry the narrative without visual clutter.

## Colors
- **Primary (#4E6F64):** A muted eucalyptus green used for the main call-to-action and subtle brand emphasis. It feels grounded, regional, and businesslike rather than flashy.
- **Secondary (#334155):** A slate-blue text tone used for quieter UI text, secondary actions, and supporting copy. It keeps the interface soft while preserving contrast.
- **Tertiary (#0A0A0A):** Near-black used for headlines, body text, and the strongest visual hierarchy. It gives the page a crisp editorial edge.
- **Neutral (#E3E7E5):** A light cool border and divider tone that defines cards, pills, and navigation surfaces without feeling heavy.
- **Surface (#FFFFFF):** The dominant canvas color. White space is a major part of the system’s perceived luxury and clarity.
- **On-surface (#0A0A0A):** The default readable text color on light backgrounds, matching the screenshot’s strong typographic contrast.
- **Muted (#6B7B93):** A restrained blue-gray used for helper text and lower-priority labels. It helps preserve the calm, enterprise feel.
- **Border (#4E6F642E):** A very subtle translucent green-tinted border used to separate cards and panels gently.
- **Error (#B42318):** A functional alert color reserved for invalid states, even though the screenshot is otherwise mostly neutral and positive.

## Typography
The system combines Space Grotesk for the largest hero headline with Manrope for nearly everything else. Space Grotesk gives the page a confident, slightly futuristic personality in the hero, while Manrope keeps the body copy, labels, and interface text clean and highly legible.

Headlines are weight 600 and use tight line heights, creating compact blocks with strong rhythm. The display headline is large and bold, while supporting section headings scale down into 35px, 26px, and 19px sizes for a clear information hierarchy.

Body text leans medium-to-strong in weight, especially for the UI labels and explanatory copy. Uppercase overlines and small metric labels appear with modest letter spacing, reinforcing a structured, data-driven presentation without becoming overly decorative.

## Layout
The page uses a centered, fixed-max-width content container with generous horizontal breathing room. Sections are separated by large vertical gaps, creating a deliberate, editorial flow rather than a dense dashboard layout.

Spacing follows a simple 8/16/24/40/80 rhythm, with the larger values used to separate major content bands and the smaller values used inside cards and navigation groups. Cards typically use 20px internal padding, while metric groups rely on compact inner spacing to keep the data dense but readable.

The overall structure balances wide hero compositions with modular, card-based proof sections. This gives the interface both a strong marketing presence and a practical product-system feel.

## Elevation & Depth
The system is intentionally flat and low-shadow. Depth is communicated primarily through subtle borders, rounded containers, and tonal separation rather than heavy elevation or dramatic shadows.

Cards sit on white surfaces with thin translucent borders, making them feel soft and contemporary. The result is a restrained enterprise aesthetic where hierarchy comes from contrast, spacing, and typography instead of layered effects.

## Shapes
The shape language is rounded and friendly, with pill buttons and soft 24px card corners. Interactive elements use a full pill radius, which makes the UI feel polished and approachable.

Internal metric tiles and panels also lean rounded, but not excessively so. The overall impression is calm architectural softness rather than playful curvature.

## Components
Buttons are a key visual anchor. `button-primary` should be used for the main action and appear as a filled pill with `primary` green, white text, and compact 8px/16px padding. `button-secondary` is an outlined or light button on white, with slate text and a neutral border. `button-tertiary` is minimal and text-like, used for low-emphasis actions.

Navigation pills should follow the same pill logic: `nav-pill-active` uses dark fill with white text, while `nav-pill-inactive` stays white with muted text. Keep them compact and horizontally balanced.

Cards should use the `card` style: white background, subtle border, 24px rounding, and 20px padding. They should feel like light containers for metrics or content summaries, not elevated surfaces.

Inputs should be clean and understated, with white backgrounds, soft borders, and medium padding. They should match the card language so forms feel like part of the same system instead of a separate utility layer.

Chips and small tags should be compact, pill-shaped, and low contrast. They work best as contextual metadata rather than prominent actions.

Lists and metric blocks should rely on strong typographic hierarchy instead of iconography or separators. Use small, muted labels above large numeric values, and keep descriptions short and direct.

## Do's and Don'ts
- Do use generous whitespace to preserve the calm, premium feel.
- Do keep borders subtle and translucent rather than dark or heavy.
- Do favor pill shapes for buttons and navigation.
- Do let headlines be bold and compact, with clear line breaks.
- Don't introduce bright accent colors that break the restrained palette.
- Don't use deep shadows or skeuomorphic depth.
- Don't overcrowd cards with too many nested dividers.
- Don't make body copy overly light; maintain the system’s confident readability.