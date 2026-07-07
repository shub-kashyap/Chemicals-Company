import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to mock the /api/send-inquiry serverless function in local dev mode
const mockApiPlugin = () => ({
  name: 'mock-api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Handle /api/send-inquiry POST route
      if (req.url === '/api/send-inquiry' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            console.log('\n--- [Local Dev Api Mock] Inquiry Received ---');
            console.log(data);
            console.log('---------------------------------------------\n');
            
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ 
              success: true, 
              message: 'Inquiry simulated successfully locally! (Note: Deploy your Resend key on Vercel to receive real emails)',
              simulated: true,
              data 
            }));
          } catch (e) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid JSON payload received.' }));
          }
        });
      } else {
        next();
      }
    });
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mockApiPlugin()],
})
