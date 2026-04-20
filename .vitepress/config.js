export default {
  title: 'Caty.AI Docs',
  description: 'Documentation for Caty.AI - AI Chatbot Platform',
  base: '/catyai.io/',
  srcExclude: ['**/README.md', '**/CONTRIBUTING.md'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: 'https://catyai.io' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Dashboard', link: 'https://app.catyai.io' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Core Features',
          items: [
            { text: 'AI Chat', link: '/guide/ai-chat' },
            { text: 'Lead Capture', link: '/guide/lead-capture' },
            { text: 'Proactive Messages', link: '/guide/proactive-messages' },
            { text: 'Human Handoff', link: '/guide/human-handoff' }
          ]
        },
        {
          text: 'AI Intelligence',
          items: [
            { text: 'SAG Agents', link: '/guide/sag-agents' },
            { text: 'FraudAI Shield', link: '/guide/fraud-ai' },
            { text: 'GEO Gateway', link: '/guide/geo-gateway' }
          ]
        },
        {
          text: 'Channels',
          items: [
            { text: 'WhatsApp Integration', link: '/guide/whatsapp' },
            { text: 'QR-First Flow', link: '/guide/qr-first' }
          ]
        },
        {
          text: 'E-Commerce',
          items: [
            { text: 'Cart Recovery', link: '/guide/cart-recovery' },
            { text: 'Universal Orders', link: '/guide/orders' }
          ]
        },
        {
          text: 'Customization',
          items: [
            { text: 'Appearance', link: '/guide/appearance' },
            { text: 'Behavior', link: '/guide/behavior' },
            { text: 'Knowledge Base', link: '/guide/knowledge-base' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/overview' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Widget API', link: '/api/widget' },
            { text: 'Admin API', link: '/api/admin' },
            { text: 'Webhooks', link: '/api/webhooks' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdiVlop/catyai.io' }
    ],
    footer: {
      message: 'AI Chatbot Platform',
      copyright: '© 2026 PayAi-X FZE (Caty.AI)'
    }
  }
}
