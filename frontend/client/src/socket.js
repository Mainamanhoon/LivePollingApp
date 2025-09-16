import { io } from 'socket.io-client';

const socket = io('https://live-polling-ro1gcd8c7-amans-projects-c8708e7e.vercel.app', {
  withCredentials: true,
  autoConnect: true,
});

// Optional: log connection status
socket.on('connect', () => {
  console.log('🟢 Connected to backend:', socket.id);
});

socket.on('disconnect', () => {
  console.log('🔌 Disconnected from backend');
});

socket.on('connect_error', (error) => {
  console.error('❌ Socket connection error:', error);
});

// For devtools debugging
if (typeof window !== 'undefined') {
  window.socket = socket;
}

export default socket;
