# Lead Capture

Automatically collect and qualify leads from your website visitors.

## How It Works

Caty.AI captures leads at optimal moments during conversations:

1. **Behavioral triggers** - Detects high-intent visitors
2. **Smart forms** - Asks for contact info naturally
3. **Qualification** - Scores leads based on intent and engagement
4. **Notifications** - Alerts you to hot leads instantly

## Lead Scoring

Each lead receives a score (0-100) based on:

| Factor | Points |
|--------|--------|
| Purchase intent detected | +30 |
| Multiple page visits | +10 |
| Engaged with proactive message | +15 |
| Provided email | +20 |
| Provided phone | +25 |
| High engagement time | +10 |

### Lead Categories

- **Hot Lead** (70-100): Ready to buy, contact immediately
- **Warm Lead** (40-69): Interested, follow up within 24h
- **Cold Lead** (0-39): Early stage, add to nurture sequence

## Configuration

### Enable Lead Capture

In the dashboard, go to **Settings → Lead Capture**:

- **Enabled**: Turn lead capture on/off
- **Timing**: When to ask for contact info
- **Required Fields**: Email, phone, name
- **Optional Fields**: Company, role, etc.

### Timing Options

- **After intent detected**: When user shows purchase intent
- **After X messages**: After a set number of exchanges
- **Before handoff**: Before transferring to human
- **On exit intent**: When user is about to leave

## Lead Data

Captured information includes:

```json
{
  "id": "lead_xxx",
  "name": "John Smith",
  "email": "john@company.com",
  "phone": "+1234567890",
  "company": "Acme Inc",
  "source": "website",
  "score": 85,
  "intent": "purchase_intent",
  "tags": ["enterprise", "demo_requested"],
  "conversation_url": "https://app.catyai.io/conversations/xxx",
  "captured_at": "2026-01-28T10:30:00Z"
}
```

## Notifications

Get notified when leads are captured:

### Email Notifications

```
Subject: 🔥 Hot Lead: John Smith (Score: 85)

New lead captured from your Caty.AI widget!

Name: John Smith
Email: john@company.com
Phone: +1234567890
Score: 85 (Hot Lead)
Intent: Ready to purchase

Last message: "I'd like to schedule a demo"

View conversation: https://app.catyai.io/conversations/xxx
```

### Push Notifications

Enable browser push notifications in the dashboard.

### WhatsApp Notifications

Receive lead alerts directly on WhatsApp.

## CRM Integration

Export leads to your CRM:

- **Webhook**: POST lead data to your endpoint
- **Zapier**: Connect to 3000+ apps
- **API**: Pull leads programmatically

### Webhook Example

```javascript
// Your webhook receives:
{
  "event": "lead_captured",
  "lead": {
    "id": "lead_xxx",
    "email": "john@company.com",
    // ... full lead data
  },
  "widget_id": "widget_xxx",
  "timestamp": "2026-01-28T10:30:00Z"
}
```

## Best Practices

1. **Don't ask too early** - Build rapport first
2. **Explain the value** - "So I can send you pricing..."
3. **Make fields optional** - More leads with email only
4. **Follow up quickly** - Hot leads cool down fast
5. **Use notifications** - Don't miss high-intent leads
