# 🎃 Hackathonia Collaboration Hub

> Platform kolaborasi hackathon dengan integrasi LintasEdu SDK, AI Chat, dan fitur real-time

## 🚀 Quick Start

### 1. Start AI Server
```bash
# Windows
start_ai_server.bat

# Linux/Mac
cd sdk && python websocket_server.py
```

### 2. Open Application
```bash
# Buka index.html di browser
# Atau gunakan Live Server
```

### 3. Use Features
- **Video Call**: Klik "Hubungi Kami" di sidebar kiri
- **AI Chat**: Ketik di Team Chat (kanan bawah)
- **Music**: Klik di mana saja untuk play music

## ✨ Features

### 🎥 Video Call Integration
- LintasEdu SDK terintegrasi
- Tombol "Hubungi Kami" untuk memulai call
- Status indicator (hijau = connected, merah = disconnected)

### 🤖 AI Chat with Google Gemini
- Real-time chat dengan AI
- WebSocket connection untuk instant response
- Auto-reconnect jika disconnect
- Chat history persistent (localStorage)

### 💾 Persistent Chat History
- Semua chat tersimpan otomatis
- History tetap ada setelah refresh
- Format JSON dengan timestamp

### 🎵 Background Music
- Scary music auto-play
- Loop continuous
- Play on first user interaction

### 🎨 Modern UI
- Dark/Light mode toggle
- Responsive design
- Smooth animations
- Material Design icons

## 📁 Project Structure

```
├── index.html                      # Main application
├── style.css                       # Custom styles
├── resize-sidebar.js               # Sidebar resize functionality
├── start_ai_server.bat            # Quick start server (Windows)
│
├── sdk/                           # SDK folder
│   ├── websocket_server.py       # AI backend server
│   ├── scarymusic.mp3            # Background music
│   ├── requirements.txt          # Python dependencies
│   └── README.md                 # SDK documentation
│
└── Documentation/
    ├── QUICK_START.md            # Quick start guide
    ├── SDK_INTEGRATION_GUIDE.md  # Full integration guide
    ├── SDK_INTEGRATION_SUMMARY.md # Integration summary
    ├── ARCHITECTURE.md           # System architecture
    ├── TESTING_CHECKLIST.md      # Testing checklist
    └── TROUBLESHOOTING.md        # Troubleshooting guide
```

## 🔧 Installation

### Prerequisites
- Python 3.x
- Modern browser (Chrome, Firefox, Edge)
- Internet connection (for LintasEdu SDK)

### Setup
```bash
# 1. Clone repository
git clone <repository-url>
cd hackathonia-hub

# 2. Install Python dependencies
cd sdk
pip install -r requirements.txt

# 3. Start WebSocket server
python websocket_server.py

# 4. Open index.html in browser
```

## 📊 Status Indicators

| Indicator | Location | Meaning |
|-----------|----------|---------|
| 🟢 Green dot | Next to "VIDEO CALL" | AI Connected |
| 🔴 Red dot | Next to "VIDEO CALL" | AI Disconnected |

## 🎯 Key Technologies

### Frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Chakra Petch, Roboto, Fira Code
- **Material Icons** - Icon library
- **Font Awesome** - Additional icons
- **WebSocket API** - Real-time communication

### Backend
- **Python 3.x** - Backend language
- **websockets** - WebSocket server
- **google-genai** - Google Gemini API
- **asyncio** - Async programming

## 📖 Documentation

- **[Quick Start](QUICK_START.md)** - Get started in 5 minutes
- **[Integration Guide](SDK_INTEGRATION_GUIDE.md)** - Full integration details
- **[Architecture](ARCHITECTURE.md)** - System architecture & data flow
- **[Testing Checklist](TESTING_CHECKLIST.md)** - Complete testing guide
- **[Troubleshooting](TROUBLESHOOTING.md)** - Common issues & solutions

## 🔐 Configuration

### LintasEdu SDK
```javascript
const SDK_URL = 'https://api.lintasedu.com/sdk.js';
const API_KEY = '9b73dc03-0e4d-4374-a7ca-39ea84153a7e';
const API_SECRET = '13827aa8-1d5e-454c-8896-c21c6a292d52';
```

### WebSocket Server
```python
# Port: 8765
# URL: ws://localhost:8765
# AI Model: Google Gemini 2.5 Flash Lite
```

## 🧪 Testing

Run the complete testing checklist:
```bash
# See TESTING_CHECKLIST.md for details
```

Key tests:
- ✅ WebSocket connection
- ✅ AI chat functionality
- ✅ LintasEdu SDK loading
- ✅ Chat history persistence
- ✅ Background music playback
- ✅ UI consistency

## 🐛 Troubleshooting

### AI Not Responding?
```bash
# Check if server is running
cd sdk
python websocket_server.py
```

### SDK Not Loading?
- Check internet connection
- Verify API credentials
- Check browser console for errors

### More Issues?
See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for complete guide.

## 🚀 Deployment

### Development
```bash
# Local development
python sdk/websocket_server.py
open index.html
```

### Production
```bash
# Deploy backend to cloud (AWS, GCP, Azure)
# Deploy frontend to static hosting (Netlify, Vercel)
# Use wss:// instead of ws://
# Add authentication and rate limiting
```

## 📝 API Reference

### WebSocket Messages

**Client → Server**
```json
{
  "message": "User message here"
}
```

**Server → Client**
```json
{
  "success": true,
  "user_message": "User message here",
  "ai_response": "AI response here"
}
```

### LocalStorage Keys

- `theme` - Dark/Light mode preference
- `teamChatHistory` - Chat history with AI

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Frontend**: Modern UI with Tailwind CSS
- **Backend**: Python WebSocket server
- **AI**: Google Gemini integration
- **SDK**: LintasEdu video call integration

## 🎉 Acknowledgments

- LintasEdu for SDK
- Google for Gemini API
- Tailwind CSS team
- Material Design team

## 📞 Support

- **Documentation**: See `/docs` folder
- **Issues**: Open GitHub issue
- **Email**: support@example.com

## 🔄 Updates

### Version 1.0.0 (Current)
- ✅ LintasEdu SDK integration
- ✅ AI chat with Google Gemini
- ✅ Persistent chat history
- ✅ Background music
- ✅ Dark/Light mode
- ✅ Responsive design

### Roadmap
- [ ] File upload for AI
- [ ] Voice chat integration
- [ ] Screen sharing
- [ ] Collaborative coding
- [ ] Multi-language support

---

Made with ❤️ for Hackathonia

**Status**: 🟢 Production Ready

**Last Updated**: November 2024
