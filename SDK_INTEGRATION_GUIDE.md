# SDK Integration Guide - Hackathonia Collaboration Hub

## 🎯 Fitur yang Terintegrasi

### 1. **LintasEdu SDK** - Video Call Integration
- Tombol "Hubungi Kami" di sidebar kiri (Video Call section)
- Klik untuk memuat dan menjalankan LintasEdu SDK
- API Key dan Secret sudah dikonfigurasi

### 2. **WebSocket Chat dengan AI (Google Gemini)**
- Real-time chat dengan AI di Team Chat section
- Indikator status koneksi (hijau = connected, merah = disconnected)
- Auto-reconnect jika koneksi terputus

### 3. **Chat History**
- Semua pesan disimpan di localStorage
- History tetap ada setelah refresh halaman
- Format: `teamChatHistory` di localStorage

### 4. **Background Music**
- Scary music dari `sdk/scarymusic.mp3`
- Auto-play setelah user interaction pertama
- Loop terus menerus

## 🚀 Cara Menggunakan

### Setup Backend (WebSocket Server)

1. Install dependencies Python:
```bash
cd sdk
pip install -r requirements.txt
```

2. Jalankan WebSocket server:
```bash
python websocket_server.py
```

Server akan berjalan di `ws://localhost:8765`

### Menggunakan Aplikasi

1. Buka `index.html` di browser
2. **Video Call**: Klik tombol "Hubungi Kami" di sidebar kiri untuk memuat LintasEdu SDK
3. **AI Chat**: Ketik pesan di Team Chat section, AI akan merespons otomatis
4. **Music**: Klik di mana saja untuk memulai background music

## 📊 Status Indicators

- **Dot hijau** di samping "VIDEO CALL" = AI Connected
- **Dot merah** = AI Disconnected (cek WebSocket server)

## 🔧 Konfigurasi

### LintasEdu SDK
```javascript
const SDK_URL = 'https://api.lintasedu.com/sdk.js';
const API_KEY = '9b73dc03-0e4d-4374-a7ca-39ea84153a7e';
const API_SECRET = '13827aa8-1d5e-454c-8896-c21c6a292d52';
```

### WebSocket Server
- URL: `ws://localhost:8765`
- AI Model: Google Gemini 2.5 Flash Lite
- API Key tersimpan di `websocket_server.py`

## 💡 Fitur Tambahan

### Chat Commands
- Ketik pesan normal untuk chat dengan AI
- AI akan merespons berdasarkan context
- History tersimpan otomatis

### LocalStorage Keys
- `theme` - Dark/Light mode preference
- `teamChatHistory` - Chat history dengan AI

## 🎨 UI yang Tidak Berubah

Semua integrasi dilakukan tanpa mengubah UI yang sudah final:
- ✅ Layout tetap sama
- ✅ Styling tetap sama
- ✅ Warna dan tema tetap sama
- ✅ Hanya menambahkan fungsionalitas

## 🐛 Troubleshooting

### AI tidak merespons
- Pastikan WebSocket server berjalan: `python sdk/websocket_server.py`
- Cek console browser untuk error
- Lihat status indicator (dot merah = disconnected)

### SDK tidak muncul
- Cek koneksi internet (SDK dimuat dari external URL)
- Lihat console browser untuk error loading
- Pastikan API Key dan Secret valid

### Music tidak play
- Browser memerlukan user interaction pertama
- Klik di mana saja di halaman
- Cek file `sdk/scarymusic.mp3` ada

## 📁 File Structure

```
├── index.html                    # Main file dengan integrasi SDK
├── sdk/
│   ├── websocket_server.py      # Backend AI server
│   ├── scarymusic.mp3           # Background music
│   ├── requirements.txt         # Python dependencies
│   └── README.md                # SDK documentation
└── SDK_INTEGRATION_GUIDE.md     # This file
```

## 🎉 Selesai!

Semua fitur SDK sudah terintegrasi dengan sempurna tanpa mengubah UI yang sudah final. Enjoy coding! 🚀
