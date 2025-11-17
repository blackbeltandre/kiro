# 📐 Auto Layout Guide - Hackathonia Collaboration Hub

## Overview
Dokumentasi lengkap tentang sistem layout otomatis dari setiap sisi interface menggunakan Flexbox dan Tailwind CSS.

---

## 🏗️ Main Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Container: flex h-screen overflow-hidden                   │
├──┬────────────┬──────────────────────────┬─────────────────┤
│  │   Left     │    Left Sidebar          │   Main Content  │
│  │   Icon     │    (Project Files +      │   (Screen Share │
│  │   Nav      │     Video Call)          │    + Vibe Code) │
│  │   64px     │    256px (w-64)          │    flex-1       │
│  │            │                           │                 │
│  │            │                           │   Right Sidebar │
│  │            │                           │   (Files+Chat)  │
│  │            │                           │   320px (w-80)  │
└──┴────────────┴──────────────────────────┴─────────────────┘
```

---

## 1️⃣ LEFT ICON NAVIGATION (64px Fixed)

### Layout Properties
```css
.left-icon-nav {
    display: flex;
    flex-direction: column;
    width: 64px; /* w-16 = 4rem = 64px */
    justify-content: space-between;
    align-items: center;
    padding: 8px; /* p-2 */
}
```

### Structure
```
┌──────────────┐
│   Top Icons  │ ← flex-col items-center space-y-4
│   ┌────┐     │
│   │ 📹 │     │ ← Active (Video Call)
│   └────┘     │
│   ────────   │ ← Divider
│   ┌────┐     │
│   │ 🔍 │     │ ← Explore
│   └────┘     │
│   ┌────┐     │
│   │ 🔎 │     │ ← Search
│   └────┘     │
│   ┌────┐     │
│   │ 🌐 │     │ ← Hub
│   └────┘     │
│   ┌────┐     │
│   │ 🐛 │     │ ← Bug Report
│   └────┘     │
│   ┌────┐     │
│   │ 🧩 │     │ ← Extensions
│   └────┘     │
│              │
│   (flex-1)   │ ← Spacer
│              │
│ Bottom Icons │ ← flex-col items-center space-y-4
│   ┌────┐     │
│   │ 👤 │     │ ← Account
│   └────┘     │
│   ┌────┐     │
│   │ ⚙️  │     │ ← Settings
│   └────┘     │
└──────────────┘
```

### Auto Layout Rules
- **Container**: `flex flex-col justify-between` - Distributes top and bottom groups
- **Top Group**: `flex flex-col items-center space-y-4` - Vertical stack with 16px gaps
- **Bottom Group**: `flex flex-col items-center space-y-4` - Vertical stack with 16px gaps
- **Icons**: `p-2 rounded-lg` - 8px padding, rounded corners
- **Spacing**: `space-y-4` = 16px vertical gap between items

---

## 2️⃣ LEFT SIDEBAR (256px Fixed)

### Layout Properties
```css
.left-sidebar {
    display: flex;
    flex-direction: column;
    width: 256px; /* w-64 = 16rem = 256px */
    padding: 16px; /* p-4 */
}
```

### Structure
```
┌─────────────────────────┐
│  PROJECT FILES          │ ← Header (mb-4)
├─────────────────────────┤
│  📁 GHOST-NET           │ ← Expandable folder
│    📄 main.py           │
│    📁 dataset           │
├─────────────────────────┤
│  Video Call             │ ← Header (mb-2)
│  ┌───────────────────┐  │
│  │   Alex Grim       │  │ ← Active border (green)
│  │   (Active)        │  │   h-24 (96px)
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │   Bella Witchwood │  │ ← Inactive
│  └───────────────────┘  │   h-24 (96px)
├─────────────────────────┤
│  SHARED CODE            │ ← Header with sync icon
│  ┌───────────────────┐  │
│  │ ghost_detector.py │  │ ← Code editor header
│  ├───────────────────┤  │
│  │                   │  │
│  │  Code Content     │  │ ← flex-1 (takes remaining)
│  │  (Scrollable)     │  │
│  │                   │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Agent Input Area  │  │ ← Fixed at bottom (mt-2)
│  └───────────────────┘  │
└─────────────────────────┘
```

### Auto Layout Rules
- **Container**: `flex flex-col` - Vertical stacking
- **Project Files**: Fixed height section with `mb-4`
- **Video Call**: Fixed height section with `space-y-3` (12px gaps)
- **Shared Code**: `flex-1 flex flex-col min-h-0` - Takes remaining space
  - Code editor: `flex-1` - Expands to fill
  - Agent input: Fixed height at bottom with `mt-2`
- **Scrolling**: Code editor has `overflow-auto`, sidebar has `overflow-hidden`

### Responsive Behavior
```css
/* Video thumbnails auto-size */
.video-thumbnail {
    width: 100%; /* Full width of container */
    height: 96px; /* h-24 = 6rem = 96px */
    object-fit: cover; /* Maintains aspect ratio */
}
```

---

## 3️⃣ MAIN CONTENT AREA (Flex-1 Dynamic)

### Layout Properties
```css
.main-content {
    display: flex;
    flex-direction: column;
    flex: 1; /* Takes remaining space */
    position: relative;
}
```

### Structure
```
┌─────────────────────────────────────┐
│  Header (absolute top-right)       │ ← Dark/Light toggle
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │   Screen Share Section       │  │ ← flex-1 (dynamic)
│  │   (flex-1)                   │  │   Expands/contracts
│  │                              │  │
│  │   - Centered content         │  │
│  │   - Ghost illustration       │  │
│  │   - "Start Sharing" button   │  │
│  │                              │  │
│  └──────────────────────────────┘  │
│  ┌──────────────────────────────┐  │
│  │  KIRO IDE - Vibe Coding      │  │ ← flex-1 (dynamic)
│  │  [Minimize/Maximize Button]  │  │   Can minimize to 60px
│  ├──────────────────────────────┤  │
│  │  🤖 AI Suggestions           │  │
│  │  ┌────────┬────────┐         │  │
│  │  │Generate│ Debug  │         │  │ ← grid-cols-2
│  │  ├────────┼────────┤         │  │
│  │  │Document│Explain │         │  │
│  │  └────────┴────────┘         │  │
│  │  Chat Input Area             │  │
│  └──────────────────────────────┘  │
│                                     │
│  Call Controls (absolute bottom)   │ ← Fixed position
│  [🎤] [📹] [🖥️] [Leave]            │
└─────────────────────────────────────┘
```

### Auto Layout Rules

#### Screen Share Section
```css
.screen-share-section {
    flex: 1; /* Takes available space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px; /* p-8 */
    transition: all 0.3s;
}
```

#### Vibe Coding Section
```css
.vibe-coding-section {
    flex: 1; /* Takes available space */
    overflow: hidden;
    transition: all 0.3s;
}

/* When minimized */
.vibe-coding-section.minimized {
    height: 60px;
    min-height: 60px;
}
```

#### Dynamic Resizing
- **Normal State**: Both sections share space equally (flex: 1 each)
- **Minimized State**: 
  - Vibe Coding: `height: 60px` (fixed)
  - Screen Share: `flex: 1` (takes all remaining space)

#### Quick Actions Grid
```css
.quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
    gap: 8px; /* gap-2 */
}
```

---

## 4️⃣ RIGHT SIDEBAR (320px Fixed)

### Layout Properties
```css
.right-sidebar {
    display: flex;
    flex-direction: column;
    width: 320px; /* w-80 = 20rem = 320px */
    overflow-y: auto;
}
```

### Structure
```
┌─────────────────────────┐
│  PROJECT FILES          │ ← p-4 border-b
│  📁 GHOST-NET           │   Fixed height section
│    📄 main.py           │
│    📁 dataset           │
│    📄 config.json       │
│  📁 KIROWEEN-HACK       │
├─────────────────────────┤
│  Offerings to Witch 🔮  │ ← p-4 border-b
│  ┌───────────────────┐  │   Fixed height section
│  │ Code Quality 85%  │  │
│  │ ████████░░        │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Test Coverage 72% │  │
│  │ ███████░░░        │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Performance 91%   │  │
│  │ █████████░        │  │
│  └───────────────────┘  │
├─────────────────────────┤
│  Page Thoughts 💭       │ ← p-4 border-b
│  • Error boundaries     │   Fixed height section
│  • Accuracy +15%        │
│  • Refactor needed      │
│  • API: 120ms           │
├─────────────────────────┤
│  Team Chat 💬           │ ← flex-1 p-4
│  ┌───────────────────┐  │
│  │                   │  │
│  │  Chat Messages    │  │ ← flex-1 (scrollable)
│  │  (Scrollable)     │  │
│  │                   │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Message input...  │  │ ← Fixed at bottom
│  └───────────────────┘  │
└─────────────────────────┘
```

### Auto Layout Rules

#### Section Distribution
```css
/* Fixed height sections */
.project-files-section { padding: 16px; border-bottom: 1px; }
.offerings-section { padding: 16px; border-bottom: 1px; }
.page-thoughts-section { padding: 16px; border-bottom: 1px; }

/* Flexible section */
.team-chat-section {
    flex: 1; /* Takes remaining space */
    display: flex;
    flex-direction: column;
    padding: 16px;
}
```

#### Team Chat Layout
```css
.team-chat {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.chat-messages {
    flex: 1; /* Expands to fill */
    overflow-y: auto; /* Scrollable */
    margin-bottom: 12px; /* mb-3 */
}

.chat-input {
    /* Fixed at bottom */
    height: auto;
}
```

#### Progress Bars
```css
.progress-bar-container {
    width: 100%;
    height: 8px; /* h-2 */
    border-radius: 9999px; /* rounded-full */
    overflow: hidden;
}

.progress-bar-fill {
    height: 8px;
    border-radius: 9999px;
    transition: width 1s; /* Smooth animation */
}
```

---

## 🎯 Responsive Breakpoints

### Current Fixed Widths
```css
/* Desktop Layout (Current) */
- Left Icon Nav: 64px (w-16)
- Left Sidebar: 256px (w-64)
- Main Content: flex-1 (dynamic)
- Right Sidebar: 320px (w-80)

Total Fixed Width: 640px
Minimum Recommended Screen: 1280px
```

### Suggested Responsive Behavior
```css
/* Tablet (< 1024px) */
@media (max-width: 1024px) {
    .left-sidebar { width: 200px; }
    .right-sidebar { width: 280px; }
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
    .left-icon-nav { width: 48px; }
    .left-sidebar { display: none; } /* Hide or overlay */
    .right-sidebar { display: none; } /* Hide or overlay */
    .main-content { width: 100%; }
}
```

---

## 🔄 Dynamic Layout Behaviors

### 1. Vibe Coding Minimize/Maximize
```javascript
// Normal State
Screen Share: flex-1 (50% of main area)
Vibe Coding: flex-1 (50% of main area)

// Minimized State
Screen Share: flex-1 (100% - 60px)
Vibe Coding: height: 60px (fixed)
```

### 2. Sidebar Scrolling
```css
/* Left Sidebar */
- Container: overflow-hidden
- Shared Code section: overflow-auto (scrollable)

/* Right Sidebar */
- Container: overflow-y-auto (entire sidebar scrolls)
- Team Chat: overflow-y-auto (messages scroll independently)
```

### 3. Content Overflow
```css
/* Code Editor */
.code-editor {
    overflow: auto; /* Both directions */
    max-height: calc(100% - header - footer);
}

/* Chat Messages */
.chat-messages {
    overflow-y: auto; /* Vertical only */
    max-height: 100%; /* Fill parent */
}
```

---

## 📊 Spacing System

### Tailwind Spacing Scale
```css
space-y-2: 8px   (0.5rem)
space-y-3: 12px  (0.75rem)
space-y-4: 16px  (1rem)
space-x-2: 8px   (0.5rem)
space-x-3: 12px  (0.75rem)

p-2: 8px   (0.5rem)
p-3: 12px  (0.75rem)
p-4: 16px  (1rem)
p-8: 32px  (2rem)

mb-2: 8px   (0.5rem)
mb-3: 12px  (0.75rem)
mb-4: 16px  (1rem)
```

### Consistent Gaps
- **Icon Navigation**: 16px vertical gaps (`space-y-4`)
- **Sidebar Sections**: 16px padding (`p-4`)
- **Video Thumbnails**: 12px gaps (`space-y-3`)
- **Quick Actions Grid**: 8px gaps (`gap-2`)
- **Chat Messages**: 12px gaps (`space-y-3`)

---

## 🎨 Layout Transitions

### Smooth Animations
```css
/* All color transitions */
transition-colors duration-200 (200ms)

/* Layout changes */
transition-all duration-300 (300ms)

/* Progress bars */
transition-all duration-1000 (1000ms)
```

### Transform Animations
```css
/* Vibe Coding Toggle Icon */
transform: rotate(0deg) → rotate(180deg)
transition: transform 200ms

/* Content Fade */
opacity: 1 → 0
transform: translateY(0) → translateY(-10px)
transition: 300ms
```

---

## 🔧 Flexbox Cheat Sheet

### Main Container
```css
display: flex;
height: 100vh;
overflow: hidden;
```

### Flex Children
```css
/* Fixed width */
width: 64px | 256px | 320px

/* Dynamic width */
flex: 1; /* Takes remaining space */

/* Column layout */
flex-direction: column;

/* Space distribution */
justify-content: space-between | center;
align-items: center | stretch;
```

### Common Patterns
```css
/* Vertical stack with gaps */
.stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Horizontal row with gaps */
.row {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

/* Centered content */
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Fill remaining space */
.fill {
    flex: 1;
    min-height: 0; /* Important for nested flex */
}
```

---

## 📱 Mobile-First Considerations

### Stack Order (Mobile)
```
1. Header (Dark/Light toggle)
2. Main Content (Screen Share)
3. Vibe Coding (Collapsible)
4. Call Controls
5. Navigation (Bottom bar or hamburger)
6. Sidebars (Overlay/Drawer)
```

### Touch Targets
```css
/* Minimum touch target: 44x44px */
.button {
    min-width: 44px;
    min-height: 44px;
    padding: 12px;
}
```

---

## ✅ Layout Best Practices

1. **Use Flexbox for 1D layouts** (rows or columns)
2. **Use Grid for 2D layouts** (Quick Actions grid)
3. **Set `min-height: 0`** on flex children that need to scroll
4. **Use `flex: 1`** for dynamic sizing
5. **Use fixed widths** for sidebars and navigation
6. **Add `overflow-hidden`** on containers
7. **Add `overflow-auto`** on scrollable content
8. **Use `transition-all`** for smooth animations
9. **Test with different content lengths**
10. **Consider mobile breakpoints early**

---

**Layout System Ready! 📐**
