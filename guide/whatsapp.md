# WhatsApp Integration

CatyAI provides deep WhatsApp integration, allowing your widget to work seamlessly across web and WhatsApp channels with unified AI behavior.

## Unified Experience

One widget powers both channels:

```
Web Widget + WhatsApp = SAME AI behavior
```

Your knowledge base, personality, and responses work identically on both platforms.

## Channel Types

| Channel | Use Case |
|---------|----------|
| **web** | Traditional website widget |
| **qr_first** | QR code → WhatsApp businesses |
| **notifications** | Outbound-only notifications |

## Setting Up WhatsApp

### 1. Connect Your Number

1. Go to **Dashboard → Integrations → WhatsApp**
2. Click **Connect WhatsApp**
3. Scan the QR code with WhatsApp on your phone
4. Wait for "Connected" status

### 2. Link to Widget

Associate the WhatsApp channel with your widget:

```json
{
  "widget_id": "your-widget-id",
  "whatsapp_channel": "notifications",
  "phone": "+40721234567"
}
```

## Message Handling

### Inbound Messages

```
Customer sends WhatsApp message
         ↓
Message Router (message-router.js)
         ↓
Channel Type Detection
         ↓
├── web → web-handler.js
├── qr_first → qr-first-handler.js
└── notifications → SKIP (outbound only)
```

### Outbound Messages

Send messages via API:

```bash
POST /api/whatsapp/send
{
  "to": "+40721234567",
  "message": "Your order has shipped!",
  "widget_id": "your-widget-id"
}
```

## Lead Notifications

Get notified when leads are captured:

### Via WhatsApp

```
New Lead Captured!
━━━━━━━━━━━━━━━━━
Name: Ion Popescu
Phone: +40721234567
Email: ion@example.com
Interest: Product demo
Score: 4/5
━━━━━━━━━━━━━━━━━
Reply CALL to schedule
```

### Configuration

Enable in widget settings:

```json
{
  "notifications": {
    "lead_alerts": true,
    "alert_channel": "whatsapp",
    "alert_phone": "+40721234567"
  }
}
```

## Conversation Handoff

Transfer conversations from AI to human:

### Customer Request

```
Customer: "Vreau sa vorbesc cu un om"
Caty: "Desigur, transfer conversatia catre un coleg.
       Veti fi contactat in cateva minute."
```

### Admin Takeover

Send `PREIA` in the chat to take over:

```
Admin: "PREIA"
System: "Ai preluat conversatia. Caty nu va mai raspunde."
```

Resume AI with:

```
Admin: "/caty on"
System: "Caty este din nou activa."
```

## Multi-Language Support

WhatsApp messages support automatic language detection:

- Romanian (default)
- English
- 50+ languages via AWS Comprehend

## Rich Messages

Send interactive WhatsApp messages:

### Buttons

```javascript
{
  text: "Cum doriti sa continuam?",
  buttons: [
    { id: "buy", title: "Cumpara" },
    { id: "info", title: "Mai multe info" },
    { id: "later", title: "Mai tarziu" }
  ]
}
```

### Lists

```javascript
{
  text: "Alege un produs:",
  list: {
    title: "Produse",
    items: [
      { id: "prod1", title: "Produs A", description: "100 RON" },
      { id: "prod2", title: "Produs B", description: "150 RON" }
    ]
  }
}
```

## API Endpoints

### Send Message

```bash
POST /api/whatsapp/send
```

### Get Conversations

```bash
GET /api/widgets/:widgetId/whatsapp/conversations
```

### Get Channel Status

```bash
GET /api/whatsapp/channels/:channelId/status
```

## Webhook Events

Receive events for WhatsApp activity:

```json
{
  "event": "whatsapp.message.received",
  "data": {
    "from": "+40721234567",
    "text": "Hello",
    "timestamp": "2026-04-20T10:30:00Z"
  }
}
```

## Best Practices

1. **Respond quickly** - WhatsApp users expect fast responses
2. **Use buttons** - Interactive messages increase engagement
3. **Keep messages short** - Mobile-friendly formatting
4. **Enable read receipts** - Users know you received their message
5. **Set away messages** - Inform users during off-hours
