# 🚀 Resizable Sidebar - Quick Start

## Instalasi Cepat

### 1. File yang Dibutuhkan
```
✅ resize-sidebar.js  (JavaScript functionality)
✅ style.css          (Resize handle styles)
✅ index.html         (Main application)
```

### 2. Tambahkan ke HTML
```html
<head>
    <!-- CSS dengan resize handle styles -->
    <link rel="stylesheet" href="style.css">
    
    <!-- JavaScript untuk resize functionality -->
    <script src="resize-sidebar.js" defer></script>
</head>
```

### 3. Struktur HTML yang Benar
```html
<body>
    <div class="flex h-screen overflow-hidden">
        <!-- Left Sidebar -->
        <div class="left-sidebar w-64 ... relative">
            <!-- Content -->
        </div>

        <!-- Main Content -->
        <main class="flex-1">
            <!-- Content -->
        </main>

        <!-- Right Sidebar -->
        <aside class="right-sidebar w-80 ... relative">
            <!-- Content -->
        </aside>
    </div>
</body>
```

**Penting**: 
- Class `left-sidebar` dan `right-sidebar` wajib ada
- Class `relative` wajib ada untuk positioning handle
- Container parent harus `flex`

---

## 🎯 Cara Menggunakan

### Drag to Resize
1. **Hover** mouse ke tepi sidebar
2. **Lihat** handle ungu muncul
3. **Klik dan drag** untuk resize
4. **Lepas** untuk set width baru

### Double-Click Reset
- **Double-click** pada handle
- Sidebar langsung kembali ke default width

### Keyboard Shortcuts
- `Ctrl/Cmd + B` → Toggle left sidebar
- `Ctrl/Cmd + Shift + B` → Toggle right sidebar
- `Ctrl/Cmd + Shift + R` → Reset semua width

---

## 🎨 Visual Indicators

### Handle Colors
| State | Color | Opacity |
|-------|-------|---------|
| Normal | Transparent | 0% |
| Hover | Purple | 30% |
| Active Drag | Purple | 60% |
| Dark Mode Hover | Purple | 50% |
| Dark Mode Active | Purple | 80% |

### Handle Position
- **Left Sidebar**: Handle di **kanan** (right edge)
- **Right Sidebar**: Handle di **kiri** (left edge)
- **Width**: 6px
- **Cursor**: `col-resize`

---

## 📏 Width Constraints

```javascript
Minimum: 200px
Maximum: 600px
Default Left: 256px (w-64)
Default Right: 320px (w-80)
```

---

## 💾 Persistence

### Automatic Save
- Width tersimpan otomatis saat resize selesai
- Menggunakan localStorage browser
- Restore otomatis saat page reload

### Storage Keys
```javascript
'leftSidebarWidth'   // Left sidebar width
'rightSidebarWidth'  // Right sidebar width
```

### Clear Storage
```javascript
// Via console
localStorage.removeItem('leftSidebarWidth');
localStorage.removeItem('rightSidebarWidth');

// Or clear all
localStorage.clear();
```

---

## 🔧 Programmatic Control

### JavaScript API
```javascript
// Reset to default widths
ResizableSidebar.reset();

// Toggle visibility
ResizableSidebar.toggle('left');   // or 'right'

// Get current width
const width = ResizableSidebar.getWidth('left');

// Set width programmatically
ResizableSidebar.setWidth('left', 300);
```

---

## 🧪 Testing

### Quick Test
1. Open `resize-demo.html` in browser
2. Try dragging sidebar edges
3. Test keyboard shortcuts
4. Reload page to test persistence

### Manual Test
1. Open `index.html` (main app)
2. Hover over sidebar edges
3. Look for purple handle
4. Drag to resize
5. Check console for logs

---

## 🐛 Troubleshooting

### Handle Tidak Muncul
```
✅ Check: Class 'left-sidebar' atau 'right-sidebar' ada?
✅ Check: Class 'relative' ada di sidebar?
✅ Check: resize-sidebar.js sudah di-load?
✅ Check: Console ada error?
```

### Resize Tidak Berfungsi
```
✅ Check: JavaScript enabled di browser?
✅ Check: File resize-sidebar.js path benar?
✅ Check: Tidak ada JavaScript error di console?
✅ Check: Cursor berubah jadi col-resize?
```

### Width Tidak Tersimpan
```
✅ Check: localStorage enabled di browser?
✅ Check: Tidak dalam incognito/private mode?
✅ Check: Browser storage tidak penuh?
✅ Check: Console log saat mouseup?
```

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |

---

## 🎓 Tips & Tricks

### Tip 1: Smooth Resize
Untuk resize yang lebih smooth, pastikan content di sidebar tidak terlalu berat.

### Tip 2: Custom Width
```javascript
// Set custom width via console
ResizableSidebar.setWidth('left', 350);
```

### Tip 3: Hide Sidebar
```javascript
// Hide sidebar completely
document.querySelector('.left-sidebar').style.display = 'none';
```

### Tip 4: Monitor Resize
```javascript
// Watch for resize changes
const sidebar = document.querySelector('.left-sidebar');
const observer = new ResizeObserver(entries => {
    console.log('New width:', entries[0].contentRect.width);
});
observer.observe(sidebar);
```

---

## 📚 Next Steps

1. ✅ Test basic drag functionality
2. ✅ Test keyboard shortcuts
3. ✅ Test persistence (reload page)
4. ✅ Customize colors if needed
5. ✅ Read full documentation: `RESIZABLE_SIDEBAR_GUIDE.md`

---

## 🎉 Done!

Resizable sidebar sudah siap digunakan. Drag handle di tepi sidebar untuk resize!

**Demo**: Open `resize-demo.html` untuk melihat contoh lengkap.

**Docs**: Baca `RESIZABLE_SIDEBAR_GUIDE.md` untuk dokumentasi lengkap.
