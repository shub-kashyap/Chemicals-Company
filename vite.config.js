import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const localApiPlugin = () => ({
  name: 'local-api-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/send-inquiry' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            req.body = data;
            
            // Load environment variables for the API handler
            const env = loadEnv('', process.cwd(), '');
            process.env.RESEND_API_KEY = env.RESEND_API_KEY;
            process.env.RECIPIENT_EMAIL = env.RECIPIENT_EMAIL;
            process.env.SENDER_EMAIL = env.SENDER_EMAIL;

            // Import the actual handler
            const { default: handler } = await import('./api/send-inquiry.js');
            
            // Add helper methods if needed by the handler, though it mostly uses basic res.status().json()
            const originalJson = res.json;
            const originalStatus = res.status;
            
            res.status = function(code) {
              res.statusCode = code;
              return res;
            };
            
            res.json = function(obj) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(obj));
            };
            
            await handler(req, res);
          } catch (e) {
            console.error(e);
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid payload or server error.' }));
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
  plugins: [react(), localApiPlugin()],
})
