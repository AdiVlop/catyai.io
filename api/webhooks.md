# Webhooks

Receive real-time notifications when events occur in your Caty.AI widget.

## Setup

1. Go to **Settings → Webhooks** in the dashboard
2. Enter your webhook URL
3. Select events to subscribe to
4. Save and test

## Events

| Event | Description |
|-------|-------------|
| `lead.captured` | New lead captured |
| `lead.updated` | Lead status changed |
| `conversation.started` | New conversation began |
| `conversation.ended` | Conversation ended |
| `message.received` | New user message |
| `handoff.requested` | Human handoff requested |

## Payload Format

All webhooks follow this structure:

```json
{
  "event": "lead.captured",
  "timestamp": "2026-01-28T10:30:00Z",
  "widget_id": "xxx",
  "data": { ... }
}
```

## Event Payloads

### lead.captured

```json
{
  "event": "lead.captured",
  "data": {
    "lead_id": "lead_xxx",
    "name": "John Smith",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Acme Inc",
    "score": 85,
    "intent": "purchase_intent",
    "session_id": "sess_xxx",
    "conversation_url": "https://app.catyai.io/conversations/xxx"
  }
}
```

### conversation.started

```json
{
  "event": "conversation.started",
  "data": {
    "session_id": "sess_xxx",
    "visitor_id": "vis_xxx",
    "page_url": "https://example.com/pricing",
    "referrer": "https://google.com",
    "user_agent": "Mozilla/5.0..."
  }
}
```

### handoff.requested

```json
{
  "event": "handoff.requested",
  "data": {
    "session_id": "sess_xxx",
    "reason": "user_request",
    "visitor": {
      "email": "john@example.com"
    },
    "last_message": "I want to talk to a human",
    "conversation_url": "https://app.catyai.io/conversations/xxx"
  }
}
```

## Verification

Verify webhook authenticity using the signature:

```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return `sha256=${expected}` === signature;
}

// In your webhook handler:
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-caty-signature'];

  if (!verifySignature(req.body, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Process webhook
  console.log('Event:', req.body.event);
  res.status(200).send('OK');
});
```

## Retry Policy

Failed webhooks are retried:

- **Attempt 1**: Immediate
- **Attempt 2**: After 1 minute
- **Attempt 3**: After 5 minutes
- **Attempt 4**: After 30 minutes
- **Attempt 5**: After 2 hours

Webhooks are considered failed if:
- Response status is not 2xx
- Request times out (10 seconds)
- Connection error

## Best Practices

1. **Respond quickly** - Return 200 immediately, process async
2. **Handle duplicates** - Use event IDs to dedupe
3. **Verify signatures** - Always validate webhook authenticity
4. **Log payloads** - Keep records for debugging
5. **Set up alerts** - Monitor for delivery failures
