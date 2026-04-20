# Proactive Messages

Engage visitors automatically based on their behavior.

## Overview

Proactive messages appear as speech bubbles to catch visitors' attention:

- Triggered by user behavior (scroll, time, exit intent)
- Customizable messages per trigger
- Configurable frequency and timing
- Click to open full chat

## Default Triggers

| Trigger | Condition | Message Type |
|---------|-----------|--------------|
| High Engagement | Scroll 60%+ AND time 30s+ | Contextual |
| Exit Intent | Mouse leaves viewport | Exit offer |
| Pricing Page | URL contains "pricing" | Pricing help |
| Return Visitor | 2+ visits | Welcome back |
| Form Abandonment | Form focus + 15s idle | Form help |

## Configuration

### Dashboard Settings

Go to **Settings → Proactive Messages**:

- **Enable/Disable**: Turn proactive messages on/off
- **Delay**: Wait time before first trigger (default: 5s)
- **Cooldown**: Time between triggers (default: 30s)
- **Max per session**: Maximum triggers per visit (default: 3)

### Custom Rules

Create custom trigger rules:

```javascript
{
  "id": "pricing_help",
  "name": "Pricing Page Helper",
  "enabled": true,
  "conditions": {
    "pageUrl": { "contains": "pricing" },
    "timeOnPage": { "gte": 20000 }
  },
  "message_type": "pricing_help",
  "priority": 1
}
```

## Message Types

### Contextual
General engagement based on behavior:
> "Hi! I noticed you're exploring our site. Can I help you find something?"

### Exit Offer
Triggered when user is about to leave:
> "Wait! Before you go, would you like a quick summary of what we offer?"

### Pricing Help
For visitors on pricing pages:
> "Looking at our plans? I can help you choose the right one for your needs."

### Welcome Back
For returning visitors:
> "Welcome back! Ready to pick up where you left off?"

### Form Help
When forms are abandoned:
> "Need help with the form? I'm here to assist!"

## AI-Generated Messages

Messages are generated dynamically using AI:

1. Trigger fires based on conditions
2. System sends context to AI (page, behavior, history)
3. AI generates personalized message
4. Message displayed to visitor

## Mobile Behavior

On mobile devices:
- Bubble appears above the launcher
- Smaller, less intrusive design
- Can be disabled separately for mobile

## Best Practices

1. **Don't be annoying** - Limit frequency
2. **Be relevant** - Match message to context
3. **Add value** - Offer help, not just "Hi!"
4. **Test timing** - Find the sweet spot
5. **Monitor engagement** - Track click rates

## Analytics

Track proactive message performance:

- **Impressions**: How many were shown
- **Click rate**: Percentage that opened chat
- **Conversion rate**: Leads captured after proactive

View in **Dashboard → Analytics → Proactive**.
