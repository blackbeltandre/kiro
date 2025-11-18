# 🏗️ Architecture - SDK Integration

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         BROWSER (index.html)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Left Sidebar│  │ Main Content │  │ Right Sidebar│          │
│  │              │  │              │  │              │          │
│  │ ┌──────────┐ │  │ ┌──────────┐ │  │ ┌──────────┐ │          │
│  │ │ VIDEO    │ │  │ │  Avatar  │ │  │ │ PROJECT  │ │          │
│  │ │ CALL     │ │  │ │    L     │ │  │ │ FILES    │ │          │
│  │ │          │ │  │ │          │ │  │ │          │ │          │
│  │ │ [Hubungi]│◄┼──┼─┤  Popup   │ │  │ ├──────────┤ │          │
│  │ │  Kami    │ │  │ │          │ │  │ │ OFFERINGS│ │          │
│  │ │          │ │  │ │          │ │  │ │          │ │          │
│  │ │ • Status │ │  │ │ Controls │ │  │ ├──────────┤ │          │
│  │ │   (●)    │ │  │ │          │ │  │ │  PAGE    │ │          │
│  │ │          │ │  │ └──────────┘ │  │ │ THOUGHTS │ │          │
│  │ │ Alex     │ │  │              │  │ │          │ │          │
│  │ │ Bella    │ │  │ ┌──────────┐ │  │ ├──────────┤ │          │
│  │ └──────────┘ │  │ │   KIRO   │ │  │ │  TEAM    │◄┼──┐       │
│  │              │  │ │   IDE    │ │  │ │  CHAT    │ │  │       │
│  └──────────────┘  │ │  Vibe    │ │  │ │          │ │  │       │
│                    │ │  Coding  │ │  │ │ [Input]  │ │  │       │
│                    │ └──────────┘ │  │ └──────────┘ │  │       │
│                    └──────────────┘  └──────────────┘  │       │
│                                                          │       │
└──────────────────────────────────────────────────────────┼───────┘
                                                           │
                    ┌──────────────────────────────────────┘
                    │
                    │ WebSocket
                    │ ws://localhost:8765
                    │
                    ▼
         ┌─────────────────────────┐
         │  WebSocket Server       │
         │  (websocket_server.py)  │
         │                         │
         │  • Python Backend       │
         │  • Port: 8765          │
         │  • Auto-reconnect      │
         └────────────┬────────────┘
                      │
                      │ API Call
                      │
                      ▼
         ┌─────────────────────────┐
         │   Google Gemini API     │
         │   (AI Model)            │
         │                         │
         │  • Model: 2.5-flash-lite│
         │  • Real-time response   │
         └─────────────────────────┘
```

## Component Flow

### 1. LintasEdu SDK Flow
```
User Click "Hubungi Kami"
    ↓
loadLintasEduSDK()
    ↓
Load External Script
    ↓
https://api.lintasedu.com/sdk.js
    ↓
Initialize SDK with API Key & Secret
    ↓
SDK Interface Loaded
```

### 2. AI Chat Flow
```
User Types Message
    ↓
sendChatMessage(message)
    ↓
addChatMessage('You', message, 'user')
    ↓
saveChatToLocal('user', message)
    ↓
WebSocket.send(JSON.stringify({ message }))
    ↓
WebSocket Server receives
    ↓
Google Gemini API processes
    ↓
AI Response generated
    ↓
WebSocket.send(response)
    ↓
Browser receives response
    ↓
addChatMessage('Kiro AI', response, 'ai')
    ↓
saveChatToLocal('ai', response)
```

### 3. Chat History Flow
```
Page Load
    ↓
loadChatHistory()
    ↓
localStorage.getItem('teamChatHistory')
    ↓
Parse JSON
    ↓
Loop through messages
    ↓
addChatMessage() for each
    ↓
Display in UI
```

### 4. Background Music Flow
```
Page Load
    ↓
<audio> element created
    ↓
Wait for user interaction
    ↓
User clicks anywhere
    ↓
audio.play()
    ↓
Music loops continuously
```

## Data Flow

### LocalStorage Structure
```javascript
{
  "theme": "dark",  // or "light"
  "teamChatHistory": [
    {
      "type": "user",
      "message": "Hello AI",
      "timestamp": "2024-01-01T12:00:00.000Z"
    },
    {
      "type": "ai",
      "message": "Hello! How can I help you?",
      "timestamp": "2024-01-01T12:00:01.000Z"
    }
  ]
}
```

### WebSocket Message Format
```javascript
// Client → Server
{
  "message": "User message here"
}

// Server → Client
{
  "success": true,
  "user_message": "User message here",
  "ai_response": "AI response here"
}

// Error
{
  "error": "Error message"
}
```

## Integration Points

### 1. HTML Integration
- **Location**: `index.html`
- **Changes**: 
  - Added SDK button in left sidebar
  - Added status indicator
  - Added chat input/output IDs
  - Added background music element

### 2. JavaScript Integration
- **Location**: `<script>` in `<head>`
- **Functions**:
  - `loadLintasEduSDK()` - Load external SDK
  - `connectWebSocket()` - Connect to AI server
  - `sendChatMessage()` - Send message to AI
  - `addChatMessage()` - Display message in UI
  - `saveChatToLocal()` - Save to localStorage
  - `loadChatHistory()` - Load from localStorage

### 3. CSS Integration
- **Location**: Inline styles + `style.css`
- **Changes**: None (UI tidak berubah)

## Security Considerations

### API Keys
- LintasEdu API Key: Hardcoded (public SDK)
- Google Gemini API Key: Server-side only

### WebSocket
- Local connection only (localhost:8765)
- No authentication (development mode)
- Production: Add authentication layer

### LocalStorage
- Client-side storage
- No sensitive data
- Can be cleared by user

## Performance Optimization

### WebSocket
- Auto-reconnect on disconnect
- Timeout: 3 seconds
- No polling (real-time only)

### Chat History
- Stored in localStorage
- No size limit check (add if needed)
- Loaded once on page load

### Music
- Lazy load (play on interaction)
- Loop without reload
- No buffering issues

## Scalability

### Current Limits
- WebSocket: 1 connection per client
- Chat History: Browser localStorage limit (~5-10MB)
- AI: Google Gemini rate limits

### Future Improvements
- [ ] Add chat history pagination
- [ ] Add file upload for AI
- [ ] Add voice chat integration
- [ ] Add video recording
- [ ] Add screen sharing
- [ ] Add collaborative coding

## Dependencies

### Frontend
```
- Tailwind CSS (CDN)
- Google Fonts (CDN)
- Material Icons (CDN)
- Font Awesome (CDN)
```

### Backend
```
- Python 3.x
- websockets
- google-genai
- asyncio
```

## Deployment

### Development
```bash
# Start backend
python sdk/websocket_server.py

# Open frontend
open index.html
```

### Production
```bash
# Backend: Deploy to cloud (AWS, GCP, Azure)
# Frontend: Deploy to static hosting (Netlify, Vercel, GitHub Pages)
# WebSocket: Use wss:// instead of ws://
# Add authentication and rate limiting
```

---

## Summary

✅ **Modular Architecture** - Each component independent
✅ **Real-time Communication** - WebSocket for instant updates
✅ **Persistent Storage** - LocalStorage for chat history
✅ **External Integration** - LintasEdu SDK via external script
✅ **AI Integration** - Google Gemini for intelligent responses
✅ **Zero UI Changes** - All integration without UI modification
