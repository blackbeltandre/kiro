# Witch Chat Interface

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the WebSocket server:
```bash
python websocket_server.py
```

3. Open iframeindex.html directly in your browser (or use Live Server on port 5500)

## Features

- WebSocket communication (NO page reload)
- SDK stays logged in
- Real-time AI responses
- Local chat history storage

## Features

- Text input at the bottom of the witch image
- Messages appear as chat bubbles in front of the witch
- All messages are saved to `messages.json`
- Python Flask backend handles message storage

## Files

- `iframeindex.html` - Main HTML with chat interface
- `server.py` - Python Flask backend
- `messages.json` - Stored messages (created automatically)
- `style.css` - Styling
