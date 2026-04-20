# Behavior

Configure how Caty.AI interacts with visitors.

## Greeting

The first message visitors see:

```
Hi! I'm Caty, your AI assistant. How can I help you today?
```

### Customize Greeting

In dashboard or via config:

```javascript
window.CatyWidget.configure({
  greeting: "Welcome to TechCorp! What brings you here today?"
});
```

### Show on Load

Control when greeting appears:

- **Immediately**: Show when widget loads
- **On open**: Show when user opens chat
- **After delay**: Show after X seconds

## Proactive Engagement

Automatically start conversations based on behavior. See [Proactive Messages](/guide/proactive-messages).

## Response Behavior

### Typing Indicator

Show typing animation while AI thinks (enabled by default).

### Response Speed

- **Instant**: Show response immediately
- **Natural**: Add slight delay for natural feel

### Suggested Actions

Show quick-reply buttons after AI responses:

```
AI: Would you like to learn about our pricing or features?

[Pricing] [Features] [Talk to human]
```

## Session Behavior

### Session Duration

Sessions expire after 30 minutes of inactivity.

### Session Persistence

Visitors returning within session duration continue their conversation.

### Clear Session

```javascript
window.CatyWidget.clearSession();
```

## Sound Effects

- **New message**: Optional sound on new messages
- **Notification**: Sound for proactive messages

Enable/disable in settings or:

```javascript
window.CatyWidget.configure({ sounds: false });
```

## Visibility

### Auto-Open

Automatically open chat window:

```javascript
window.CatyWidget.configure({
  autoOpen: true,
  autoOpenDelay: 5000 // 5 seconds
});
```

### Page-Specific Behavior

Show/hide widget on specific pages:

```javascript
// Hide on checkout
if (window.location.pathname.includes('/checkout')) {
  window.CatyWidget.configure({ visible: false });
}
```
