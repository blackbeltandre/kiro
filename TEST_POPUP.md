# 🧪 Quick Test Guide - Popup Update

## Test 1: Popup Hidden by Default
1. Open `index.html` in browser
2. **Expected**: Popup "Undang Peserta" tidak terlihat
3. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 2: Open Popup with more_vert Button
1. Look at call controls (bottom center)
2. Find button with "⋮" icon (more_vert)
3. Click the button
4. **Expected**: Popup "Undang Peserta" muncul dengan smooth animation
5. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 3: Close Popup with X Button
1. With popup open
2. Click "X" button di kanan atas popup
3. **Expected**: Popup hilang
4. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 4: Toggle Popup with more_vert
1. Click "⋮" button to open popup
2. Click "⋮" button again
3. **Expected**: Popup closes
4. Click "⋮" button again
5. **Expected**: Popup opens again
6. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 5: Vibe Coding Section Removed
1. Scroll down main content area
2. **Expected**: No "KIRO IDE - Vibe Coding" section
3. **Expected**: Only screen share section visible
4. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 6: Animation Smooth
1. Open popup with "⋮" button
2. **Expected**: Smooth fade-in animation
3. **Expected**: No jerky movement
4. Close popup
5. **Expected**: Smooth disappear
6. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 7: No Console Errors
1. Open browser DevTools (F12)
2. Go to Console tab
3. Perform all actions above
4. **Expected**: No errors in console
5. **Status**: ⬜ Pass / ⬜ Fail

---

## Test 8: Other Features Still Work
1. Test dark/light mode toggle
2. Test "Hubungi Kami" button
3. Test Team Chat input
4. **Expected**: All features work normally
5. **Status**: ⬜ Pass / ⬜ Fail

---

## Quick Visual Check

### Popup Location
```
┌─────────────────────────────────────┐
│                                     │
│         Avatar "L"                  │
│                                     │
│                    ┌──────────────┐ │
│                    │ Undang       │ │
│                    │ Peserta   [X]│ │← Close button
│                    │              │ │
│                    │ [Salin Info] │ │
│                    └──────────────┘ │
│                                     │
│  [●][●][●][●][●][⋮][●][🔴]        │← more_vert button
│                    ↑                │
│              Click here to toggle   │
└─────────────────────────────────────┘
```

---

## Expected Behavior Summary

| Action | Expected Result |
|--------|----------------|
| Page load | Popup hidden |
| Click ⋮ | Popup appears |
| Click ⋮ again | Popup disappears |
| Click X | Popup disappears |
| Animation | Smooth fade-in |
| Vibe Coding | Not visible |
| Console | No errors |

---

## If Test Fails

### Popup not appearing
- Check browser console for errors
- Verify `toggleUndangPeserta()` function exists
- Check if popup has `id="undang-peserta-popup"`

### Close button not working
- Check `onclick="closeUndangPeserta()"` attribute
- Verify function exists in script

### Animation not smooth
- Clear browser cache
- Check Tailwind CSS loaded
- Verify animation config in tailwind.config

### Vibe Coding still visible
- Hard refresh (Ctrl + Shift + R)
- Clear cache
- Check if section removed from HTML

---

## Debug Commands

### Check if popup exists
```javascript
// In browser console
document.getElementById('undang-peserta-popup')
// Should return: <div id="undang-peserta-popup" ...>
```

### Check if functions exist
```javascript
// In browser console
typeof toggleUndangPeserta
// Should return: "function"

typeof closeUndangPeserta
// Should return: "function"
```

### Manually toggle popup
```javascript
// In browser console
toggleUndangPeserta()
// Should toggle popup visibility
```

---

## Success Criteria

✅ All 8 tests pass
✅ No console errors
✅ Smooth animations
✅ Clean UI without vibe coding

---

**Tester**: _________________

**Date**: _________________

**Overall Result**: ⬜ Pass / ⬜ Fail
