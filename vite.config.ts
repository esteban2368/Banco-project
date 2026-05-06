import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path/win32'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@features': path.resolve(__dirname, './src/features'),
    },
  },
  server: {
    proxy: {
      '/api-auth': {
        target: 'https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-auth/, '')
      },
      '/api-transfer': {
        target: 'https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-transfer/, ''),
                configure: (proxy) => {
    proxy.on('proxyReq', (proxyReq) => {
      console.log('[PROXY] Authorization:', proxyReq.getHeader('Authorization'))
      console.log('[PROXY] Path:', proxyReq.path)
    })
  }
      },
      '/transferlist': {
        target: 'https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/transferlist/, '/default'),
        configure: (proxy) => {
    proxy.on('proxyReq', (proxyReq) => {
      console.log('[PROXY] Authorization:', proxyReq.getHeader('Authorization'))
      console.log('[PROXY] Path:', proxyReq.path)
    })
  }
      },
      '/api-balance-list': {
        target: 'https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-balance-list/, ''),
        configure: (proxy) => {
    proxy.on('proxyReq', (proxyReq) => {
      console.log('[PROXY] Authorization:', proxyReq.getHeader('Authorization'))
      console.log('[PROXY] Path:', proxyReq.path)
    })
  }
      },
    }
  }
})
