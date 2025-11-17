# 📐 Layout Structure Guide

## 🎯 Layout Overview

Aplikasi menggunakan **3-column layout** dengan struktur yang rapi dan konsisten:

```
┌─────┬──────────────┬──────────────┬─────────────┐
│ Nav │  Left Sidebar │ Main Content │ Right Sidebar│
│ Bar │  (Video Call) │ (Share+IDE)  │ (Files+Chat) │
│ 64px│    288px      │   Flexible   │    320px     │
└─────┴──────────────┴──────────────┴─────────────┘
```

---

## 📏 Dimensions

### Navigation Bar (Icon Sidebar)
- **Width**: `64px` (w-16)
- **Background**: Gray-200 (light) / #202225 (dark)
- **Content**: Icon buttons only
- **Position**: Fixed left

### Left Sidebar (Video Call)
- **Width**: `288px` (w-72 / 18rem)
- **Min-Width**: `288px`
- **Background**: White (light) / #2b2d31 (dark)
- **Sections**:
  - Header: 64px height
  - Video Grid: Flexible
  - Controls: 80px height

### Main Content (Center)
- **Width**: Flexible (flex-1)
- **Layout**: Vertical split (50/50)
  - Top: Screen Share Area
  - Bottom: Vibe Coding/IDE Area
- **Background**: Gray-50 (light) / #313338 (dark)

### Right Sidebar (Files + Chat)
- **Width**: `320px` (w-80 / 20rem)
- **Min-Width**: `320px`
- **Background**: White (light) / #2b2d31 (dark)
- **Sections**:
  - Project Files
  - Offerings to the Witch
  - Page Thoughts
  - Team Chat

---

## 🎨 Spacing System

### Padding Scale
```css
.section          → 1.5rem (24px)
.section-compact  → 1rem (16px)
.gap-sm           → 0.5rem (8px)
.gap-md           → 0.75rem (12px)
.gap-lg           → 1rem (16px)
```

### Margin Scale
- **Section Spacing**: 1.5rem between major sections
- **Card Spacing**: 0.75rem between cards
- **Item Spacing**: 0.5rem between list items

---

## 🏗️ Component Structure

### Section Header Pattern
```html
<div class="section-header-wrapper">
    <h2 class="section-header flex items-center space-x-2">
        <span class="material-symbols-outlined">icon</span>
        <span>SECTION TITLE</span>
    </h2>
</div>
```

**Styling**:
- Background: Subtle tint (2% opacity)
- Border-bottom: 1px divider
- Padding: 1rem 1.5rem
- Font: 0.875rem, bold, uppercase

### Card Pattern
```html
<div class="card">
    <div class="flex-between mb-2">
        <span class="text-label">Label</span>
        <span class="text-muted">Value</span>
    </div>
    <div class="content">
        <!-- Card content -->
    </div>
</div>
```

**Styling**:
- Background: White (light) / #313338 (dark)
- Border-radius: 0.5rem
- Padding: 1rem
- Shadow: Subtle elevation
- Hover: Increased shadow

### File Item Pattern
```html
<div class="file-item">
    <span class="material-symbols-outlined text-base">icon</span>
    <span class="ml-2">filename.ext</span>
</div>
```

**Styling**:
- Padding: 0.5rem
- Border-radius: 0.375rem
- Hover: Background tint
- Active: Purple tint + color

---

## 📱 Responsive Breakpoints

### Desktop (> 1280px)
- Full 3-column layout
- Left sidebar: 288px
- Right sidebar: 320px

### Laptop (1024px - 1280px)
- Reduced sidebar widths
- Left sidebar: 256px
- Right sidebar: 288px

### Tablet (768px - 1024px)
- Narrower sidebars
- Both sidebars: 224px
- Reduced padding

### Mobile (< 768px)
- **Stacked layout** (vertical)
- Sidebars: 100% width
- Max-height: 40vh each
- Scrollable sections

---

## 🎯 Layout Classes

### Container Classes
```css
.main-container      → Flex container, h-screen
.sidebar             → Flex column, overflow-y-auto
.sidebar-left        → Width 18rem
.sidebar-right       → Width 20rem
.main-content        → Flex-1, flex column
```

### Section Classes
```css
.section             → Padding 1.5rem
.section-compact     → Padding 1rem
.section-header-wrapper → Header container
.section-header      → Header text styling
```

### Grid Classes
```css
.video-grid          → Video call grid
.action-grid         → 2-column action buttons
.file-tree           → File explorer tree
```

---

## 🎨 Color System

### Backgrounds
```css
/* Light Mode */
.bg-surface          → white
.bg-surface-elevated → #f9fafb
.bg-surface-hover    → #f3f4f6

/* Dark Mode */
.bg-surface          → #2b2d31
.bg-surface-elevated → #313338
.bg-surface-hover    → #3f4147
```

### Borders
```css
/* Light Mode */
.border-divider      → #e5e7eb

/* Dark Mode */
.border-divider      → rgba(255,255,255,0.1)
```

### Text
```css
/* Light Mode */
.text-label          → #6b7280
.text-muted          → #9ca3af

/* Dark Mode */
.text-label          → #9ca3af
.text-muted          → #6b7280
```

---

## 🔧 Utility Classes

### Flexbox Utilities
```css
.flex-center         → Center both axes
.flex-between        → Space between
.flex-start          → Align start
```

### Gap Utilities
```css
.gap-sm              → 0.5rem
.gap-md              → 0.75rem
.gap-lg              → 1rem
```

### Text Utilities
```css
.text-label          → Small, bold, uppercase
.text-muted          → Muted color
```

---

## 📐 Layout Examples

### Left Sidebar Structure
```html
<div class="sidebar sidebar-left">
    <!-- Header -->
    <div class="section-header-wrapper">
        <h2 class="section-header">VIDEO CALL</h2>
    </div>
    
    <!-- Content -->
    <div class="flex-1 p-4 space-y-3 overflow-y-auto">
        <!-- Video cards -->
    </div>
    
    <!-- Footer -->
    <div class="p-4 border-t border-divider">
        <!-- Controls -->
    </div>
</div>
```

### Main Content Structure
```html
<main class="main-content">
    <!-- Top Half: Screen Share -->
    <div class="flex-1 flex-center">
        <!-- Share content -->
    </div>
    
    <!-- Bottom Half: IDE -->
    <div class="flex-1 section">
        <!-- IDE content -->
    </div>
</main>
```

### Right Sidebar Structure
```html
<aside class="sidebar sidebar-right">
    <!-- Section 1 -->
    <div class="section border-b border-divider">
        <h3 class="section-header">PROJECT FILES</h3>
        <div class="file-tree">
            <!-- Files -->
        </div>
    </div>
    
    <!-- Section 2 -->
    <div class="section border-b border-divider">
        <h3 class="section-header">OFFERINGS</h3>
        <!-- Content -->
    </div>
    
    <!-- More sections... -->
</aside>
```

---

## 🎯 Best Practices

### 1. Consistent Spacing
- Use spacing scale (0.5rem, 0.75rem, 1rem, 1.5rem)
- Maintain vertical rhythm
- Group related elements

### 2. Clear Hierarchy
- Section headers: Bold, uppercase, small
- Card titles: Medium weight
- Body text: Regular weight

### 3. Visual Separation
- Use borders sparingly
- Prefer background tints
- Add subtle shadows

### 4. Responsive Design
- Mobile-first approach
- Test at all breakpoints
- Ensure touch targets (min 44px)

### 5. Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support

---

## 🐛 Common Issues & Solutions

### Issue: Sidebar too narrow
**Solution**: Adjust min-width in `.sidebar-left` or `.sidebar-right`

### Issue: Content overflow
**Solution**: Add `overflow-y-auto` to scrollable containers

### Issue: Inconsistent spacing
**Solution**: Use utility classes (.section, .gap-md, etc.)

### Issue: Layout breaks on mobile
**Solution**: Check responsive breakpoints and stacking order

---

## 📊 Layout Metrics

### Optimal Dimensions
- **Left Sidebar**: 256px - 320px
- **Right Sidebar**: 288px - 352px
- **Main Content**: Minimum 600px
- **Total Width**: Minimum 1280px

### Spacing Guidelines
- **Section Padding**: 16px - 24px
- **Card Padding**: 12px - 16px
- **Item Spacing**: 8px - 12px
- **Section Gap**: 16px - 24px

---

## 🎨 Visual Consistency Checklist

- [ ] All sections have consistent padding
- [ ] Headers use same styling pattern
- [ ] Cards have uniform border-radius
- [ ] Hover states are consistent
- [ ] Spacing follows scale system
- [ ] Colors match design system
- [ ] Shadows are subtle and consistent
- [ ] Transitions are smooth (200ms)

---

**Pro Tip**: Use browser DevTools to inspect spacing and alignment. Toggle grid overlay to verify layout structure.
