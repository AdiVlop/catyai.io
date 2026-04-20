# Configuration

Configure your Caty.AI widget through the dashboard or programmatically.

## Dashboard Configuration

Log in to [app.catyai.io](https://app.catyai.io) to configure:

### Business Settings

- **Business Name**: Displayed in the chat header
- **Website URL**: Your website's URL
- **Business Type**: Helps AI understand context (e-commerce, SaaS, services, etc.)

### Persona Settings

- **Name**: Your AI assistant's name (e.g., "Caty", "Support Bot")
- **Role**: Description shown to users (e.g., "AI Sales Assistant")
- **Tone**: Communication style (friendly, professional, casual)

### Appearance

- **Theme**: Light or dark mode
- **Position**: Bottom-right or bottom-left
- **Colors**: Primary, secondary, background, text colors
- **Launcher**: Icon style, size, animation

### Behavior

- **Greeting**: Initial message shown to visitors
- **Proactive Messages**: Auto-engage visitors based on behavior
- **Lead Capture**: When and how to collect contact info
- **Human Handoff**: Conditions for escalating to humans

## Programmatic Configuration

Override dashboard settings with data attributes:

```html
<script
  src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_API_KEY"
  data-position="bottom-left"
  data-primary-color="#10b981"
  data-theme="light"
  data-greeting="Welcome! How can I assist you?">
</script>
```

## Advanced Configuration

For advanced use cases, use the JavaScript API:

```javascript
window.CatyWidget.configure({
  position: 'bottom-right',
  theme: 'dark',
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#111827',
    text: '#f3f4f6'
  },
  persona: {
    name: 'Caty',
    greeting: 'Hi! How can I help you today?'
  },
  behavior: {
    showOnLoad: true,
    proactiveDelay: 10000, // 10 seconds
    collectEmail: true
  }
});
```

## Environment-Specific Config

Use different configurations for development and production:

```javascript
const config = {
  apiKey: process.env.NODE_ENV === 'production'
    ? 'caty_prod_xxx'
    : 'caty_dev_xxx',
  theme: 'dark'
};

window.CatyWidget.init(config);
```

## Feature Flags

Enable or disable specific features:

```javascript
window.CatyWidget.configure({
  features: {
    proactiveMessages: true,
    leadCapture: true,
    humanHandoff: true,
    fileUpload: false,
    voiceInput: false
  }
});
```
