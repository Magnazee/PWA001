import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icon-192-any.svg',
        'icon-192-maskable.svg',
        'icon-512-any.svg',
        'icon-512-maskable.svg',
        'screenshot-desktop.svg',
        'screenshot-mobile.svg'
      ],
      manifest: {
        name: 'Rainbow Hello World PWA',
        short_name: 'Rainbow PWA',
        description: 'A simple PWA that demonstrates color changing text',
        theme_color: '#4B0082',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        id: '/',
        icons: [
          {
            src: 'icon-192-any.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: 'icon-192-maskable.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'maskable'
          },
          {
            src: 'icon-512-any.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: 'icon-512-maskable.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshot-desktop.svg',
            sizes: '1920x1080',
            type: 'image/svg+xml',
            form_factor: 'wide',
            label: 'Desktop view of Rainbow Hello World'
          },
          {
            src: 'screenshot-mobile.svg',
            sizes: '1080x1920',
            type: 'image/svg+xml',
            form_factor: 'narrow',
            label: 'Mobile view of Rainbow Hello World'
          }
        ],
        categories: ['entertainment', 'education'],
        prefer_related_applications: false,
        display_override: ['window-controls-overlay', 'standalone'],
        handle_links: 'preferred',
        launch_handler: {
          client_mode: ['navigate-existing', 'auto']
        },
        edge_side_panel: {
          preferred_width: 480
        }
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
            },
          }
        ],
        cleanupOutdatedCaches: true,
        sourcemap: true
      }
    })
  ]
})