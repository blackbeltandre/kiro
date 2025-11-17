# Dark/Light Mode Theme Guide

## 🎨 Fitur Dark/Light Mode

Aplikasi Hackathonia Collaboration Hub sekarang mendukung **dark mode** dan **light mode** dengan transisi yang smooth.

## 🔧 Cara Menggunakan

### Toggle Theme
Klik tombol di pojok kanan atas (header area) untuk toggle antara dark dan light mode:
- **Dark Mode**: Icon 🌙 (moon)
- **Light Mode**: Icon ☀️ (sun)

### Persistensi
Theme preference disimpan di `localStorage`, jadi pilihan Anda akan tetap tersimpan setelah refresh halaman.

## 🎯 Implementasi Teknis

### JavaScript
```javascript
// Toggle function
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
```

### Tailwind CSS Classes
Semua elemen menggunakan Tailwind's dark mode variant:
```html
<!-- Example -->
<div class="bg-white dark:bg-[#2b2d31]">
    <h1 class="text-gray-800 dark:text-gray-100">Title</h1>
</div>
```

## 🎨 Color Palette

### Light Mode
- **Background**: `#f3f4f6` (gray-100)
- **Sidebar**: `#ffffff` (white)
- **Text Primary**: `#1f2937` (gray-800)
- **Text Secondary**: `#6b7280` (gray-600)
- **Borders**: `#d1d5db` (gray-300)

### Dark Mode
- **Background**: `#18191c`
- **Sidebar**: `#2b2d31`
- **Text Primary**: `#f3f4f6` (gray-100)
- **Text Secondary**: `#9ca3af` (gray-400)
- **Borders**: `rgba(0,0,0,0.2)`

## ✨ Special Effects

### Eerie Glow (Dark Mode Only)
Glow effects hanya aktif di dark mode untuk aesthetic Halloween:
```css
.dark .eerie-glow-green {
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
}
```

### Smooth Transitions
Semua color changes menggunakan transition:
```html
<div class="transition-colors duration-200">
```

## 📱 Responsive Design

Theme bekerja di semua breakpoints:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔍 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## 🐛 Troubleshooting

### Theme tidak tersimpan?
Check browser localStorage:
```javascript
console.log(localStorage.getItem('theme'));
```

### Warna tidak berubah?
Pastikan Tailwind config sudah benar:
```javascript
tailwind.config = {
    darkMode: "class", // Harus "class" bukan "media"
    // ...
};
```

## 🎃 Halloween Theme Notes

- Glow effects (green, purple, orange) hanya muncul di dark mode
- Light mode lebih clean dan professional
- Dark mode lebih immersive untuk coding sessions

---

**Default Mode**: Dark Mode (sesuai dengan vibe Halloween hackathon)
