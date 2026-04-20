# Installation

## Basic Installation

Add this script to your website:

```html
<script
  src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_API_KEY">
</script>
```

## Configuration Options

You can customize the widget with data attributes:

```html
<script
  src="https://api.catyai.io/widget.js"
  data-api-key="YOUR_API_KEY"
  data-position="bottom-right"
  data-primary-color="#6366f1"
  data-theme="dark">
</script>
```

### Available Options

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-api-key` | Your API key (required) | - |
| `data-position` | Widget position: `bottom-right`, `bottom-left` | `bottom-right` |
| `data-primary-color` | Primary color (hex) | `#6366f1` |
| `data-theme` | Theme: `light`, `dark` | `light` |
| `data-greeting` | Custom greeting message | From dashboard |

## Async Loading

For better performance, load the widget asynchronously:

```html
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://api.catyai.io/widget.js';
    script.setAttribute('data-api-key', 'YOUR_API_KEY');
    script.async = true;
    document.body.appendChild(script);
  })();
</script>
```

## Single Page Applications (SPA)

For React, Vue, or Angular apps, you can control when the widget loads:

### React

```jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.catyai.io/widget.js';
    script.setAttribute('data-api-key', 'YOUR_API_KEY');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (window.CatyWidget) {
        window.CatyWidget.destroy();
      }
    };
  }, []);

  return <div>Your App</div>;
}
```

### Vue

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://api.catyai.io/widget.js';
  script.setAttribute('data-api-key', 'YOUR_API_KEY');
  script.async = true;
  document.body.appendChild(script);
});

onUnmounted(() => {
  if (window.CatyWidget) {
    window.CatyWidget.destroy();
  }
});
</script>
```

## JavaScript API

Once loaded, you can control the widget programmatically:

```javascript
// Open the chat
window.CatyWidget.open();

// Close the chat
window.CatyWidget.close();

// Toggle visibility
window.CatyWidget.toggle();

// Send a message programmatically
window.CatyWidget.sendMessage('Hello!');

// Listen to events
window.CatyWidget.on('message', (data) => {
  console.log('New message:', data);
});

window.CatyWidget.on('lead_captured', (lead) => {
  console.log('Lead captured:', lead);
});
```

## Content Security Policy (CSP)

If your site uses CSP, add these directives:

```
script-src 'self' https://api.catyai.io;
connect-src 'self' https://api.catyai.io wss://api.catyai.io;
style-src 'self' 'unsafe-inline';
img-src 'self' https://api.catyai.io data:;
```

## Troubleshooting

### Widget not appearing

1. Check browser console for errors
2. Verify your API key is correct
3. Ensure the script is loaded after DOM is ready
4. Check if any ad blockers are interfering

### CORS errors

The widget should work from any domain. If you see CORS errors:

1. Verify you're using the correct API key
2. Contact support if the issue persists

### Performance

The widget is optimized for performance:
- ~35KB gzipped
- Loads asynchronously
- Lazy-loads components
