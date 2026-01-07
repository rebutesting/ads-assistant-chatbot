# Design System Integration

This chatbot UI now uses CSS variables from `/styles/globals.css` for all styling, making it easy to update the entire design by modifying the CSS file.

## Typography

All text uses the design system fonts:
- **Headings**: `var(--font-heading)` - "Uber Move", "Inter", sans-serif
- **Body text**: `var(--font-body)` - "Uber Move Text", "Inter", sans-serif

Font weights:
- **Bold**: `var(--font-weight-bold)` (700)
- **Medium**: `var(--font-weight-medium)` (500)
- **Normal**: `var(--font-weight-normal)` (400)

## Colors

The UI uses semantic color tokens:
- `--background` / `bg-background` - Main background
- `--foreground` / `text-foreground` - Main text color
- `--card` / `bg-card` - Card backgrounds
- `--border` / `border-border` - Border colors
- `--secondary` / `bg-secondary` - Secondary button backgrounds
- `--muted` / `bg-muted` - Muted/hover states
- `--muted-foreground` / `text-muted-foreground` - Secondary text

## Border Radius

All components use design system radius variables:
- `var(--radius)` - Default (8px)
- `var(--radius-card)` - Cards (12px)
- `var(--radius-pill)` - Pill-shaped buttons (36px)
- `var(--radius-button)` - Buttons (8px)

## Components Using Design System

### MessageBubble
- Uses `var(--font-body)` for all text
- Uses `text-foreground` for bot messages
- Card backgrounds use purple system colors

### OptionsButtons
- Background: `bg-secondary`
- Hover: `bg-muted`
- Text: `text-secondary-foreground`
- Border radius: `var(--radius-pill)`
- Font: `var(--font-body)` with `var(--font-weight-medium)`

### QuickActions
- Background: `bg-background`
- Border: `border-border`
- Buttons use same system as OptionsButtons

### DataTable
- Background: `bg-card`
- Border: `border-border`
- Border radius: `var(--radius-card)`
- Labels: `text-muted-foreground`
- Values: `text-foreground` with `var(--font-weight-medium)`

### PerformanceCard
- Background: `bg-card`
- Border: `border-border`
- Shadow: `shadow-elevation-sm`
- Border radius: `var(--radius-card)`

### CampaignList
- Background: `bg-card`
- Hover: `hover:bg-muted`
- Border radius: `var(--radius-card)`
- Status badges use `var(--radius-pill)`

### SuggestionsList
- Same pattern as CampaignList
- Icon container uses `var(--radius)`

### MetricsDisplay
- Background: `bg-card`
- Border radius: `var(--radius-card)`

### SuccessMessage
- Border radius: `var(--radius)`
- Font weight: `var(--font-weight-medium)`

## How to Customize

To change the design, simply update the CSS variables in `/styles/globals.css`:

```css
:root {
  --font-body: "Your Custom Font", sans-serif;
  --radius-card: 16px;
  --secondary: rgba(240, 240, 245, 1.00);
  /* etc. */
}
```

All components will automatically update to use the new values!
