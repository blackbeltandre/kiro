# 🎯 Interactive Features & Animations Guide

## ✨ Fitur Interaktif yang Tersedia

### 1. **Collapsible Sections** (Expand/Collapse)
Folder di Project Files bisa di-expand atau collapse dengan klik.

#### Cara Kerja:
- **Chevron Icon**: Berputar 90° saat expanded
- **Smooth Animation**: Transisi height & opacity
- **Default State**: 
  - GHOST-NET: Expanded (rotated chevron)
  - KIROWEEN-HACK: Collapsed

#### Implementasi:
```javascript
function toggleCollapse(sectionId) {
    const content = document.getElementById(sectionId);
    const chevron = document.querySelector(`[data-chevron="${sectionId}"]`);
    
    content.classList.toggle('expanded');
    chevron.classList.toggle('rotated');
}
```

#### CSS Classes:
```css
.collapsible-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}

.collapsible-content.expanded {
    max-height: 2000px;
    transition: max-height 0.5s ease-in;
}

.chevron-icon.rotated {
    transform: rotate(90deg);
}
```

---

### 2. **Ripple Effect** pada Buttons
Semua button memiliki ripple effect saat diklik (Material Design style).

#### Fitur:
- Ripple muncul dari posisi klik
- Fade out setelah 600ms
- Warna: `rgba(255, 255, 255, 0.6)`

#### Cara Disable:
Tambahkan class `no-ripple` pada button:
```html
<button class="no-ripple">No Ripple</button>
```

---

### 3. **Hover Effects**

#### Card Hover (`.card-hover`)
- **Transform**: `translateY(-4px)`
- **Shadow**: Meningkat saat hover
- **Duration**: 200ms

#### Scale Hover (`.scale-hover`)
- **Transform**: `scale(1.05)`
- **Use Case**: Icons, small buttons

#### Glow Hover (`.hover-glow`)
- **Box Shadow**: Purple glow
- **Intensity**: Lebih kuat di dark mode

---

### 4. **Progress Bar Animation**
Progress bars di "Offerings to the Witch" memiliki animasi fill dari 0% ke target.

#### CSS:
```css
.progress-bar {
    animation: progress 1s ease-out;
}

@keyframes progress {
    from { width: 0%; }
}
```

---

### 5. **Smooth Transitions**
Semua elemen interaktif memiliki smooth transitions:
- **Color changes**: 200ms
- **Transform**: 200ms
- **Opacity**: 300ms

---

## 🎨 Animasi yang Tersedia

### Entrance Animations

#### 1. **Fade In** (`.fade-in`)
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### 2. **Slide In Left** (`.slide-in-left`)
Elemen masuk dari kiri dengan fade.

#### 3. **Slide In Right** (`.slide-in-right`)
Elemen masuk dari kanan dengan fade.

---

### Continuous Animations

#### 1. **Pulse** (`.pulse`)
Opacity berubah 1 → 0.7 → 1 (infinite loop)
- **Duration**: 2s
- **Use Case**: Active indicators, live badges

#### 2. **Float** (`.float`)
Elemen bergerak naik-turun
- **Distance**: 10px
- **Duration**: 3s
- **Use Case**: Decorative elements

#### 3. **Bounce** (`.bounce`)
Elemen memantul
- **Duration**: 1s
- **Use Case**: Attention grabbers

#### 4. **Spinner** (`.spinner`)
Rotasi 360° continuous
- **Duration**: 1s linear
- **Use Case**: Loading indicators

---

### Feedback Animations

#### 1. **Shake** (`.shake`)
Untuk error states
- **Duration**: 0.5s
- **Movement**: ±10px horizontal

#### 2. **Glow Pulse** (`.glow-pulse`)
Box shadow pulse effect
- **Duration**: 2s
- **Use Case**: Active status indicators

---

## 🎯 Utility Classes

### Skeleton Loading (`.skeleton`)
```css
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    animation: skeleton-loading 1.5s ease-in-out infinite;
}
```

### Gradient Animation (`.gradient-animate`)
Background gradient bergerak
- **Duration**: 3s
- **Background Size**: 200% 200%

### Typing Indicator (`.typing-dot`)
Tiga dots dengan delay berbeda
```html
<div class="flex space-x-1">
    <span class="typing-dot">•</span>
    <span class="typing-dot">•</span>
    <span class="typing-dot">•</span>
</div>
```

---

## 🖱️ Custom Scrollbar

### Light Mode:
- **Track**: `#f3f4f6`
- **Thumb**: `#9ca3af`
- **Thumb Hover**: `#6b7280`

### Dark Mode:
- **Track**: `#1f2937`
- **Thumb**: `#4b5563`
- **Thumb Hover**: `#6b7280`

---

## 💡 Tooltips

Tambahkan attribute `data-tooltip`:
```html
<button class="tooltip" data-tooltip="Click to expand">
    Hover me
</button>
```

**Features:**
- Auto-positioned above element
- Arrow indicator
- Fade in/out
- Dark background

---

## 🎮 Interactive Examples

### Example 1: Collapsible Card
```html
<div onclick="toggleCollapse('my-content')">
    <span class="chevron-icon" data-chevron="my-content">▶</span>
    <span>Click to expand</span>
</div>
<div id="my-content" class="collapsible-content">
    Hidden content here
</div>
```

### Example 2: Animated Button
```html
<button class="card-hover hover-glow">
    Hover & Click Me
</button>
```

### Example 3: Progress Card
```html
<div class="card-hover">
    <div class="progress-bar" style="width: 75%"></div>
</div>
```

---

## 🔧 Customization

### Mengubah Durasi Animasi
Edit di `style.css`:
```css
.collapsible-content {
    transition: max-height 0.5s ease-out; /* Ubah 0.5s */
}
```

### Mengubah Warna Ripple
Edit di `index.html`:
```css
.ripple-effect {
    background: rgba(139, 92, 246, 0.6); /* Purple ripple */
}
```

### Disable Semua Animasi
Tambahkan di CSS:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

---

## 📱 Responsive Behavior

Semua animasi dan interaksi bekerja di:
- ✅ Desktop (mouse hover)
- ✅ Tablet (touch)
- ✅ Mobile (touch)

### Touch Optimization:
- Ripple effect bekerja pada touch
- Hover states diganti dengan active states di mobile
- Smooth scroll untuk touch gestures

---

## ⚡ Performance Tips

1. **Hardware Acceleration**: Transform & opacity menggunakan GPU
2. **Will-change**: Otomatis untuk animasi
3. **Debouncing**: Scroll events di-debounce
4. **Lazy Loading**: Intersection Observer untuk fade-in

---

## 🐛 Troubleshooting

### Animasi tidak berjalan?
1. Check browser support (IE11 tidak support)
2. Pastikan class sudah ditambahkan
3. Check console untuk errors

### Ripple tidak muncul?
1. Pastikan button memiliki `position: relative`
2. Check JavaScript loaded
3. Pastikan tidak ada class `no-ripple`

### Collapse tidak smooth?
1. Check `max-height` value (harus lebih besar dari content)
2. Pastikan `overflow: hidden` ada
3. Check transition timing

---

## 🎃 Halloween Theme Animations

Khusus untuk dark mode:
- **Eerie Glow**: Text shadow effects
- **Pulse**: Untuk live indicators
- **Float**: Untuk ghost icons

---

**Pro Tip**: Combine multiple classes untuk efek yang lebih menarik!
```html
<div class="card-hover hover-glow fade-in">
    Amazing Card
</div>
```
