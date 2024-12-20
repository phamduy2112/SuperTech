// backend/src/controllers/websocketController.js
import WebSocket from 'ws';

export const setupWebSocketServer = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Một client đã kết nối');

        // Gửi thông tin hệ thống mỗi giây (hoặc theo cách bạn muốn)
        const sendSystemInfo = () => {
            const systemInfo = {
                cpu: {
                    brand: 'Intel',
                    manufacturer: 'Intel Corp',
                    speed: 3.5,
                    cores: 4
                },
                memory: {
                    total: 16 * 1024 * 1024 * 1024, // 16 GB
                    used: 8 * 1024 * 1024 * 1024, // 8 GB
                    free: 8 * 1024 * 1024 * 1024 // 8 GB
                },
                timestamp: new Date().toISOString()
            };
            ws.send(JSON.stringify(systemInfo));
        };

        const interval = setInterval(sendSystemInfo, 1000); // Gửi thông tin mỗi giây

        ws.on('close', () => {
            clearInterval(interval);
            console.log('Client đã ngắt kết nối');
        });
    });
};