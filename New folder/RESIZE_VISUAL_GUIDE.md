# 🎨 Resizable Sidebar - Visual Guide

## 📐 Layout Overview

```
┌────────────────────────────────────────────────────────────────┐
│                     Browser Window                              │
├──┬─────────────────┬──────────────────────────┬────────────────┤
│  │                 │                          │                │
│  │  Left Sidebar   │    Main Content Area     │ Right Sidebar  │
│  │                 │                          │                │
│  │  [Resizable →]  │                          │ [← Resizable]  │
│  │                 │                          │                │
│  │  256px          │       flex-1             │    320px       │
│  │  (default)      │       (dynamic)          │   (default)    │
│  │                 │                          │                │
└──┴─────────────────┴──────────────────────────┴────────────────┘
```

---

## 🎯 Resize Handle Position

### Left Sidebar (Right Edge)
```
┌─────────────────────┐
│                     │
│   Left Sidebar      │
│                     │
│   Content here...   │
│                     │
│                     ║  ← Resize Handle (6px)
│                     │     Position: right: -3px
│                     │     Cursor: col-resize
│                     │
└─────────────────────┘
```

### Right Sidebar (Left Edge)
```
                ┌─────────────────────┐
                │                     │
                │   Right Sidebar     │
                │                     │
                │   Content here...   │
                │                     │
Resize Handle → ║                     │
(6px)           │                     │
Position:       │                     │
left: -3px      │                     │
                └─────────────────────┘
```

---

## 🎨 Visual States

### 1. Normal State (No Hover)
```
┌─────────────────────┐
│                     │
│   Sidebar Content   │
│                     │
│                     │  ← Handle invisible
│                     │
└─────────────────────┘
```

### 2. Hover State
```
┌─────────────────────┐
│                     │
│   Sidebar Content   │
│                     │
│                     ║  ← Handle visible (purple 30%)
│                     ║     Indicator line appears
└─────────────────────┘
```

### 3. Active Drag State
```
┌─────────────────────┐
│                     │
│   Sidebar Content   │
│                     │
│                     ║  ← Handle darker (purple 60%)
│                     ║     Cursor: col-resize
└─────────────────────┘     Body: user-select: none
```

---

## 🌈 Color Scheme

### Light Mode
```
┌─────────────────────────────────────┐
│ Normal:   Transparent               │
│ Hover:    rgba(139, 92, 246, 0.3)  │ ← Purple 30%
│ Active:   rgba(139, 92, 246, 0.6)  │ ← Purple 60%
└─────────────────────────────────────┘
```

### Dark Mode
```
┌─────────────────────────────────────┐
│ Normal:   Transparent               │
│ Hover:    rgba(139, 92, 246, 0.5)  │ ← Purple 50%
│ Active:   rgba(139, 92, 246, 0.8)  │ ← Purple 80%
└─────────────────────────────────────┘
```

---

## 📏 Width Constraints

### Minimum Width (200px)
```
┌──────────┐
│          │
│ Sidebar  │  ← Cannot resize smaller
│          │     than 200px
│          │
└──────────┘
  200px
```

### Default Width
```
Left Sidebar:
┌────────────────┐
│                │
│   Sidebar      │  ← 256px (w-64)
│                │
└────────────────┘
     256px

Right Sidebar:
┌────────────────────┐
│                    │
│   Sidebar          │  ← 320px (w-80)
│                    │
└────────────────────┘
      320px
```

### Maximum Width (600px)
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│                    Sidebar                           │  ← Cannot resize larger
│                                                      │     than 600px
│                                                      │
└──────────────────────────────────────────────────────┘
                      600px
```

---

## 🖱️ Interaction Flow

### Step 1: Hover
```
User moves mouse → Handle appears
                   ↓
              ┌─────────┐
              │ Sidebar ║  ← Purple highlight
              └─────────┘
```

### Step 2: Click
```
User clicks handle → Start resize
                     ↓
                ┌─────────┐
                │ Sidebar ║  ← Darker purple
                └─────────┘
                     ↓
              Store startX, startWidth
```

### Step 3: Drag
```
User drags mouse → Update width in real-time
                   ↓
    ┌─────────────────┐
    │ Sidebar         ║  ← Width changes
    └─────────────────┘
         ↓
    Calculate: newWidth = startWidth + delta
    Constrain: 200px ≤ width ≤ 600px
```

### Step 4: Release
```
User releases mouse → Save to localStorage
                      ↓
                 ┌─────────┐
                 │ Sidebar │  ← New width set
                 └─────────┘
                      ↓
              localStorage.setItem('width', newWidth)
```

---

## 🎯 Handle Anatomy

```
┌─────────────────────────────────────┐
│                                     │
│         Sidebar Content             │
│                                     │
│                                     │
│                                     │
│                                  ┌──┴──┐
│                                  │  ║  │  ← Resize Handle
│                                  │  ║  │     Width: 6px
│                                  │  ║  │     Height: 100%
│                                  │  ║  │     
│                                  │  ║  │  ← Indicator Line
│                                  │  ║  │     Width: 2px
│                                  │  ║  │     Height: 40px
│                                  │  ║  │     Center aligned
│                                  └──┬──┘
│                                     │
└─────────────────────────────────────┘

Position: absolute
Top: 0
Bottom: 0
Right: -3px (left sidebar)
Left: -3px (right sidebar)
```

---

## 🔄 Resize Animation

### Smooth Transition
```
Before Resize:
┌────────────────┐
│                │
│   Sidebar      │
│   256px        │
│                │
└────────────────┘

During Resize: (Real-time update)
┌──────────────────────┐
│                      │
│   Sidebar            │
│   300px              │  ← Width updates smoothly
│                      │
└──────────────────────┘

After Resize:
┌──────────────────────┐
│                      │
│   Sidebar            │
│   350px              │  ← Final width
│                      │
└──────────────────────┘
```

---

## 💾 Persistence Flow

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  1. User resizes sidebar                            │
│     ↓                                               │
│  2. mouseup event fires                             │
│     ↓                                               │
│  3. Save to localStorage                            │
│     localStorage.setItem('leftSidebarWidth', 300)   │
│     ↓                                               │
│  4. User reloads page                               │
│     ↓                                               │
│  5. initResizableSidebars() runs                    │
│     ↓                                               │
│  6. Read from localStorage                          │
│     const width = localStorage.getItem('...')       │
│     ↓                                               │
│  7. Apply saved width                               │
│     sidebar.style.width = width + 'px'              │
│     ↓                                               │
│  8. Sidebar restored to previous width              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## ⌨️ Keyboard Shortcuts Visual

### Toggle Left Sidebar
```
Press: Ctrl/Cmd + B

Before:                    After:
┌────────┬──────────┐     ┌──────────┐
│ Left   │  Main    │     │   Main   │
│ Side   │ Content  │  →  │ Content  │
│ bar    │          │     │          │
└────────┴──────────┘     └──────────┘
```

### Toggle Right Sidebar
```
Press: Ctrl/Cmd + Shift + B

Before:                    After:
┌──────────┬────────┐     ┌──────────┐
│   Main   │ Right  │     │   Main   │
│ Content  │ Side   │  →  │ Content  │
│          │ bar    │     │          │
└──────────┴────────┘     └──────────┘
```

### Reset Widths
```
Press: Ctrl/Cmd + Shift + R

Before:                    After:
┌──────────┬──────────┐   ┌────────┬──────────┐
│  Left    │   Main   │   │ Left   │   Main   │
│  400px   │ Content  │ → │ 256px  │ Content  │
│          │          │   │        │          │
└──────────┴──────────┘   └────────┴──────────┘
```

---

## 🖱️ Double-Click Reset

```
Double-click on handle:

┌──────────────────────┐        ┌────────────────┐
│                      │        │                │
│   Sidebar            │        │   Sidebar      │
│   400px              │   →    │   256px        │
│   (custom)           │        │   (default)    │
│                      │        │                │
└──────────────────────┘        └────────────────┘
     Double-click                   Instant reset
```

---

## 📱 Responsive Behavior

### Desktop (Current)
```
┌──────┬────────────────────┬──────┐
│ Left │       Main         │Right │
│ 256px│      flex-1        │320px │
└──────┴────────────────────┴──────┘
```

### Tablet (Future)
```
┌────┬──────────────────┬────┐
│Left│      Main        │Right│
│200 │     flex-1       │280 │
└────┴──────────────────┴────┘
```

### Mobile (Future)
```
┌──────────────────────────┐
│         Main             │
│        (full)            │
│                          │
│  Sidebars as overlays    │
└──────────────────────────┘
```

---

## 🎨 CSS Structure

```
.resize-handle
├── position: absolute
├── width: 6px
├── cursor: col-resize
├── z-index: 100
│
├── :hover
│   ├── background-color: purple 30%
│   └── ::before (indicator line)
│       ├── width: 2px
│       ├── height: 40px
│       └── background-color: purple 80%
│
└── :active
    └── background-color: purple 60%
```

---

## 🔍 Debug View

### Console Logs
```
✅ Resizable sidebars initialized
📏 Sidebar resized to 300px
🔄 Sidebar widths reset to default
👁️ left sidebar hidden
⌨️ Sidebar keyboard shortcuts initialized
🖱️ Double-click resize handle to reset width
```

### localStorage View
```javascript
{
  "leftSidebarWidth": "300",
  "rightSidebarWidth": "350",
  "leftSidebarVisible": "true",
  "rightSidebarVisible": "true"
}
```

---

## 🎯 Hit Area

### Handle Hit Area (6px wide)
```
Sidebar edge
     ↓
┌────┴────┐
│    ║    │  ← 6px total width
│    ║    │     3px inside sidebar
│    ║    │     3px outside sidebar
└────┬────┘
     ↑
  Hit area
```

### Cursor Change Zone
```
Outside sidebar:
  ← 3px → ║ ← 3px →
          ↑
    Cursor changes to col-resize
    when mouse enters this zone
```

---

## 🎨 Theme Support

### Light Mode
```
┌─────────────────────┐
│                     │  Background: white
│   Light Sidebar     │  Text: gray-800
│                     │  Border: gray-300
│                     ║  Handle: purple 30%
└─────────────────────┘
```

### Dark Mode
```
┌─────────────────────┐
│                     │  Background: #2b2d31
│   Dark Sidebar      │  Text: gray-200
│                     │  Border: black/20
│                     ║  Handle: purple 50%
└─────────────────────┘
```

---

## 📊 Performance

### Resize Performance
```
Event: mousemove
Frequency: ~60fps
Calculation: O(1)
DOM Update: 1 element
Repaint: Minimal

Result: Smooth, no lag
```

---

## ✅ Visual Checklist

- [x] Handle appears on hover
- [x] Handle color changes on active
- [x] Indicator line visible on hover
- [x] Cursor changes to col-resize
- [x] Width updates in real-time
- [x] Smooth drag experience
- [x] No text selection during drag
- [x] Width constraints enforced
- [x] Double-click resets width
- [x] Dark mode support
- [x] Light mode support

---

**Visual Guide Complete! 🎨**

Gunakan diagram-diagram ini untuk memahami cara kerja resizable sidebar secara visual.
