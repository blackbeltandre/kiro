# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 1. AI Chat Tidak Merespons

#### Symptoms
- Ketik pesan tapi tidak ada respons dari AI
- Dot status berwarna merah
- Console error: "WebSocket connection failed"

#### Solutions

**A. Check WebSocket Server**
```bash
# Pastikan server berjalan
cd sdk
python websocket_server.py

# Expected output:
# WebSocket server running on ws://localhost:8765
```

**B. Check Port**
```bash
# Windows - Check if port 8765 is in use
netstat -ano | findstr :8765

# Kill process if needed
taskkill /PID <PID> /F
```

**C. Check Python Dependencies**
```bash
cd sdk
pip install -r requirements.txt
```

**D. Check Google API Key**
- Open `sdk/websocket_server.py`
- Verify API key is valid
- Test API key: https://aistudio.google.com/

---

### 2. LintasEdu SDK Tidak Muncul

#### Symptoms
- Klik "Hubungi Kami" tapi tidak ada yang terjadi
- Console error: "Failed to load SDK"

#### Solutions

**A. Check Internet Connection**
```bash
# Test connection to SDK URL
ping api.lintasedu.com
```

**B. Check Console Errors**
- Open browser DevTools (F12)
- Go to Console tab
- Look for errors related to SDK loading

**C. Check API Credentials**
```javascript
// In index.html, verify:
const API_KEY = '9b73dc03-0e4d-4374-a7ca-39ea84153a7e';
const API_SECRET = '13827aa8-1d5e-454c-8896-c21c6a292d52';
```

**D. Clear Browser Cache**
```
Ctrl + Shift + Delete
Clear cached images and files
Reload page
```

---

### 3. Background Music Tidak Play

#### Symptoms
- Klik di halaman tapi music tidak play
- No sound

#### Solutions

**A. Check File Exists**
```bash
# Verify file exists
dir sdk\scarymusic.mp3
```

**B. Check Browser Autoplay Policy**
- Chrome: chrome://settings/content/sound
- Allow autoplay
- Reload page

**C. Check Volume**
- Unmute browser tab
- Check system volume
- Check audio element in DevTools

**D. Check File Format**
```html
<!-- Verify audio element -->
<audio id="background-music" loop>
    <source src="sdk/scarymusic.mp3" type="audio/mpeg">
</audio>
```

---

### 4. Chat History Tidak Tersimpan

#### Symptoms
- Refresh page, chat history hilang
- LocalStorage empty

#### Solutions

**A. Check LocalStorage**
```javascript
// In browser console
localStorage.getItem('teamChatHistory')

// Should return JSON string
```

**B. Check Browser Settings**
- Settings → Privacy → Cookies
- Allow cookies and site data
- Don't block third-party cookies

**C. Check Incognito Mode**
- LocalStorage doesn't persist in incognito
- Use normal browsing mode

**D. Clear and Reset**
```javascript
// In browser console
localStorage.clear()
location.reload()
```

---

### 5. WebSocket Keeps Disconnecting

#### Symptoms
- Dot status keeps changing red/green
- Console: "WebSocket disconnected, reconnecting..."

#### Solutions

**A. Check Server Stability**
```bash
# Restart server
cd sdk
python websocket_server.py
```

**B. Check Network**
- Disable VPN
- Disable firewall temporarily
- Check antivirus settings

**C. Increase Timeout**
```javascript
// In index.html, modify:
setTimeout(connectWebSocket, 5000); // Increase from 3000 to 5000
```

---

### 6. UI Looks Broken

#### Symptoms
- Layout messed up
- Styling not applied
- Elements overlapping

#### Solutions

**A. Check Tailwind CSS**
```html
<!-- Verify CDN link in <head> -->
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
```

**B. Check Custom CSS**
```html
<!-- Verify style.css exists -->
<link rel="stylesheet" href="style.css"/>
```

**C. Clear Browser Cache**
```
Ctrl + Shift + Delete
Clear all
Reload page
```

**D. Check Browser Compatibility**
- Use modern browser (Chrome, Firefox, Edge)
- Update browser to latest version

---

### 7. Console Errors

#### Common Errors & Fixes

**Error: "Cannot read property 'addEventListener' of null"**
```javascript
// Solution: Check element IDs
const chatInput = document.getElementById('team-chat-input');
if (chatInput) {
    chatInput.addEventListener('keypress', ...);
}
```

**Error: "WebSocket is not defined"**
```javascript
// Solution: Check browser compatibility
// WebSocket is supported in all modern browsers
// Update browser or use polyfill
```

**Error: "Failed to load resource: net::ERR_CONNECTION_REFUSED"**
```bash
# Solution: Start WebSocket server
cd sdk
python websocket_server.py
```

**Error: "Uncaught SyntaxError: Unexpected token"**
```javascript
// Solution: Check JSON parsing
try {
    const data = JSON.parse(message);
} catch (e) {
    console.error('Invalid JSON:', e);
}
```

---

### 8. Performance Issues

#### Symptoms
- Page loads slowly
- Chat lags
- High CPU usage

#### Solutions

**A. Check Chat History Size**
```javascript
// In browser console
const history = localStorage.getItem('teamChatHistory');
console.log('Size:', history.length, 'bytes');

// If too large (>1MB), clear old messages
```

**B. Limit Chat History**
```javascript
// In index.html, modify saveChatToLocal():
function saveChatToLocal(type, message) {
    const saved = localStorage.getItem('teamChatHistory');
    let messages = saved ? JSON.parse(saved) : [];
    
    // Keep only last 100 messages
    if (messages.length > 100) {
        messages = messages.slice(-100);
    }
    
    messages.push({ type, message, timestamp: new Date().toISOString() });
    localStorage.setItem('teamChatHistory', JSON.stringify(messages));
}
```

**C. Optimize WebSocket**
```javascript
// Add debouncing for rapid messages
let messageQueue = [];
let sending = false;

function sendChatMessage(message) {
    messageQueue.push(message);
    if (!sending) {
        processQueue();
    }
}
```

---

### 9. Mobile Issues

#### Symptoms
- UI broken on mobile
- Touch events not working
- Sidebar not responsive

#### Solutions

**A. Check Viewport**
```html
<!-- Verify meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```

**B. Test Responsive Design**
```
F12 → Toggle device toolbar
Test on different screen sizes
```

**C. Add Touch Events**
```javascript
// Add touch support
element.addEventListener('touchstart', handleTouch);
element.addEventListener('touchend', handleTouch);
```

---

### 10. Deployment Issues

#### Symptoms
- Works locally but not on server
- WebSocket connection fails on production

#### Solutions

**A. Use WSS instead of WS**
```javascript
// For production
const wsUrl = window.location.protocol === 'https:' 
    ? 'wss://your-domain.com/ws' 
    : 'ws://localhost:8765';
```

**B. Configure CORS**
```python
# In websocket_server.py
# Add CORS headers if needed
```

**C. Check Firewall**
- Allow port 8765
- Configure security groups (AWS)
- Add firewall rules

---

## Quick Diagnostics

### Run This in Browser Console
```javascript
// Check all integrations
console.log('=== SDK Integration Diagnostics ===');
console.log('1. WebSocket:', ws ? 'Connected' : 'Disconnected');
console.log('2. Chat History:', localStorage.getItem('teamChatHistory') ? 'Exists' : 'Empty');
console.log('3. Theme:', localStorage.getItem('theme'));
console.log('4. Audio:', document.getElementById('background-music') ? 'Loaded' : 'Missing');
console.log('5. SDK Button:', document.querySelector('[onclick="loadLintasEduSDK()"]') ? 'Found' : 'Missing');
```

---

## Getting Help

### 1. Check Documentation
- `SDK_INTEGRATION_GUIDE.md` - Full guide
- `QUICK_START.md` - Quick start
- `ARCHITECTURE.md` - System architecture

### 2. Check Logs
```bash
# Server logs
cd sdk
python websocket_server.py

# Browser logs
F12 → Console tab
```

### 3. Debug Mode
```javascript
// Enable debug mode in index.html
const DEBUG = true;

if (DEBUG) {
    console.log('Debug info:', ...);
}
```

### 4. Contact Support
- Check SDK documentation: `sdk/README.md`
- Check progress report: `sdk/progress.md`

---

## Prevention Tips

✅ **Always start WebSocket server first**
✅ **Check console for errors regularly**
✅ **Clear cache when updating code**
✅ **Test on multiple browsers**
✅ **Keep dependencies updated**
✅ **Monitor localStorage size**
✅ **Use error handling in code**
✅ **Test offline scenarios**

---

## Emergency Reset

If nothing works, try this:
```javascript
// In browser console
localStorage.clear();
sessionStorage.clear();
location.reload(true);
```

Then:
```bash
# Restart server
cd sdk
python websocket_server.py
```

Then:
- Open `index.html` in new incognito window
- Test basic functionality
- If works, issue was cache/storage related
