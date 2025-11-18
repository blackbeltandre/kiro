@echo off
echo ========================================
echo  Starting AI WebSocket Server
echo ========================================
echo.
echo Server will run on ws://localhost:8765
echo Press Ctrl+C to stop the server
echo.

cd sdk
python websocket_server.py

pause
