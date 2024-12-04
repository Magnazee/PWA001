import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/PWA001/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icons/icon-144.png',
        'icons/icon-192-any.svg',
        'icons/icon-192-maskable.svg',
        'icons/icon-512-any.svg',
        'icons/icon-512-maskable.svg',
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
        start_url: '/PWA001/',
        scope: '/PWA001/',
        id: '/PWA001/',
        icons: [
          {
            src: '/PWA001/icons/icon-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/PWA001/icons/icon-192-any.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/PWA001/icons/icon-192-maskable.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'maskable'
          },
          {
            src: '/PWA001/icons/icon-512-any.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/PWA001/icons/icon-512-maskable.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: '/PWA001/screenshot-desktop.svg',
            sizes: '1920x1080',
            type: 'image/svg+xml',
            form_factor: 'wide',
            label: 'Desktop view of Rainbow Hello World'
          },
          {
            src: '/PWA001/screenshot-mobile.svg',
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