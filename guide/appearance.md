# Appearance

Customize how Caty.AI looks on your website.

## Theme

Choose between light and dark themes:

- **Light**: Clean, bright interface
- **Dark**: Modern, easy on the eyes

```html
<script src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_KEY"
  data-theme="dark">
</script>
```

## Colors

Customize colors in the dashboard or via attributes:

| Property | Description | Default |
|----------|-------------|---------|
| Primary | Main accent color | `#6366f1` |
| Secondary | Secondary accent | `#8b5cf6` |
| Background | Chat background | Theme-based |
| Text | Text color | Theme-based |

```html
<script src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_KEY"
  data-primary-color="#10b981">
</script>
```

## Position

Place the widget where it works best:

- `bottom-right` (default)
- `bottom-left`

```html
<script src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_KEY"
  data-position="bottom-left">
</script>
```

## Launcher

The launcher is the button that opens the chat:

### Style Options

- **Icon**: Chat bubble, message icon, or custom
- **Size**: Small, medium, large
- **Animation**: Pulse, bounce, or none

### Custom Launcher

Hide the default launcher and use your own:

```javascript
// Hide default launcher
window.CatyWidget.configure({ showLauncher: false });

// Your custom button
document.getElementById('my-chat-btn').onclick = () => {
  window.CatyWidget.open();
};
```

## Chat Window

Customize the chat window dimensions:

| Property | Description | Default |
|----------|-------------|---------|
| Width | Window width | 380px |
| Height | Window height | 600px |
| Max Height | Maximum height | 80vh |

## Mobile Responsive

The widget automatically adapts to mobile:

- Full-width on small screens
- Touch-optimized controls
- Keyboard handling for input
- Maximum 70% viewport height

## Branding

### Show/Hide Branding

Toggle "Powered by Caty.AI" in settings.

### White Label

Business and Enterprise plans can remove all Caty.AI branding.

## CSS Customization

For advanced customization, use CSS variables:

```css
:root {
  --caty-primary: #6366f1;
  --caty-secondary: #8b5cf6;
  --caty-radius: 16px;
  --caty-shadow: 0 4px 24px rgba(0,0,0,0.15);
}
```

## Preview

Use the dashboard preview to see changes in real-time before publishing.
