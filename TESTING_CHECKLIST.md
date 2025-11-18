# ✅ Testing Checklist - SDK Integration

## Pre-requisites
- [ ] Python 3.x installed
- [ ] Dependencies installed: `pip install -r sdk/requirements.txt`
- [ ] Browser modern (Chrome, Firefox, Edge)

## Backend Testing

### 1. WebSocket Server
```bash
cd sdk
python websocket_server.py
```

**Expected Output**:
```
WebSocket server running on ws://localhost:8765
```

**Status**: ⬜ Pass / ⬜ Fail

---

## Frontend Testing

### 2. Open Application
- [ ] Open `index.html` in browser
- [ ] No console errors
- [ ] UI loads correctly

### 3. LintasEdu SDK Integration
- [ ] Tombol "Hubungi Kami" terlihat di sidebar kiri
- [ ] Klik tombol "Hubungi Kami"
- [ ] SDK loading (check console)
- [ ] SDK interface muncul (jika berhasil)

**Status**: ⬜ Pass / ⬜ Fail

### 4. AI Chat Integration
- [ ] Dot status terlihat di samping "VIDEO CALL"
- [ ] Dot berwarna hijau (connected) atau merah (disconnected)
- [ ] Input chat terlihat di Team Chat section
- [ ] Ketik pesan: "Hello AI"
- [ ] Pesan user muncul di chat
- [ ] AI merespons dalam beberapa detik
- [ ] Respons AI muncul di chat

**Status**: ⬜ Pass / ⬜ Fail

### 5. Chat History
- [ ] Ketik beberapa pesan
- [ ] Refresh halaman (F5)
- [ ] Chat history tetap ada
- [ ] Check localStorage: `teamChatHistory`

**Status**: ⬜ Pass / ⬜ Fail

### 6. Background Music
- [ ] Klik di mana saja di halaman
- [ ] Music mulai play
- [ ] Music loop terus menerus
- [ ] Volume terdengar

**Status**: ⬜ Pass / ⬜ Fail

### 7. UI Consistency
- [ ] Layout tidak berubah
- [ ] Warna tetap sama
- [ ] Styling tetap sama
- [ ] Responsive tetap berfungsi
- [ ] Dark/Light mode tetap berfungsi

**Status**: ⬜ Pass / ⬜ Fail

---

## Error Handling Testing

### 8. WebSocket Disconnection
- [ ] Stop WebSocket server
- [ ] Dot status berubah merah
- [ ] Ketik pesan
- [ ] Muncul pesan "AI is not connected"
- [ ] Start server lagi
- [ ] Dot status berubah hijau (auto-reconnect)

**Status**: ⬜ Pass / ⬜ Fail

### 9. SDK Loading Error
- [ ] Disconnect internet
- [ ] Klik "Hubungi Kami"
- [ ] Check console untuk error message
- [ ] Reconnect internet
- [ ] Klik lagi, SDK should load

**Status**: ⬜ Pass / ⬜ Fail

---

## Browser Compatibility

### 10. Chrome
- [ ] All features work
- [ ] No console errors

### 11. Firefox
- [ ] All features work
- [ ] No console errors

### 12. Edge
- [ ] All features work
- [ ] No console errors

---

## Performance Testing

### 13. Load Time
- [ ] Page loads < 3 seconds
- [ ] No lag saat typing
- [ ] Smooth animations

### 14. Memory Usage
- [ ] No memory leaks
- [ ] Chat history tidak membengkak
- [ ] WebSocket reconnect tidak error

---

## Final Checklist

- [ ] Semua fitur SDK terintegrasi
- [ ] UI tidak berubah
- [ ] No breaking changes
- [ ] Documentation lengkap
- [ ] Easy to use

---

## Notes

**Tested by**: _________________

**Date**: _________________

**Issues Found**:
1. 
2. 
3. 

**Overall Status**: ⬜ Pass / ⬜ Fail

---

## Quick Commands

### Start Server
```bash
# Windows
start_ai_server.bat

# Linux/Mac
cd sdk && python websocket_server.py
```

### Check LocalStorage
```javascript
// In browser console
localStorage.getItem('teamChatHistory')
```

### Clear Chat History
```javascript
// In browser console
localStorage.removeItem('teamChatHistory')
location.reload()
```
