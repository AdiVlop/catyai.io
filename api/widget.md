# Widget API

Public API endpoints for the chat widget.

## Authentication

All endpoints require the `X-API-Key` header:

```
X-API-Key: caty_xxxxxxxxxxxxxxxx
```

---

## Get Configuration

Get widget configuration for the client.

```http
GET /api/widget/config
```

### Response

```json
{
  "success": true,
  "config": {
    "widget_id": "xxx",
    "business": {
      "name": "Company Name",
      "type": "saas"
    },
    "persona": {
      "name": "Caty",
      "role": "AI Assistant",
      "tone": "friendly"
    },
    "appearance": {
      "theme": "dark",
      "position": "bottom-right",
      "colors": { ... }
    },
    "behavior": {
      "greeting": { ... },
      "proactive": { ... }
    }
  }
}
```

---

## Create Session

Create or retrieve a chat session.

```http
POST /api/widget/session
```

### Request Body

```json
{
  "visitor_id": "optional_visitor_id",
  "page": {
    "url": "https://example.com/page",
    "title": "Page Title",
    "referrer": "https://google.com"
  }
}
```

### Response

```json
{
  "success": true,
  "session_id": "sess_xxx",
  "visitor_id": "vis_xxx",
  "greeting": {
    "content": "Hi! How can I help you today?",
    "timestamp": "2026-01-28T10:00:00Z"
  }
}
```

---

## Send Message

Send a message and get AI response.

```http
POST /api/widget/message
```

### Request Body

```json
{
  "session_id": "sess_xxx",
  "message": "What are your pricing plans?",
  "context": {
    "page_url": "https://example.com/pricing"
  }
}
```

### Response

```json
{
  "success": true,
  "response": {
    "content": "We have three pricing plans...",
    "suggested_actions": [
      { "label": "View Pricing", "action": "link", "url": "/pricing" },
      { "label": "Talk to Sales", "action": "handoff" }
    ]
  },
  "metadata": {
    "intent": "pricing_inquiry",
    "confidence": 0.95,
    "lead_score": 65
  }
}
```

---

## Track Behavior

Send behavioral tracking data.

```http
POST /api/widget/track
```

### Request Body

```json
{
  "session_id": "sess_xxx",
  "events": [
    { "type": "scroll_depth", "data": 75, "timestamp": "..." },
    { "type": "click", "data": { "element": "button" }, "timestamp": "..." }
  ],
  "metrics": {
    "timeOnPage": 45000,
    "scrollDepth": 75,
    "clickCount": 3
  }
}
```

### Response

```json
{
  "success": true,
  "engagement_score": 65,
  "proactive": {
    "should_trigger": true,
    "message": "I see you're interested in our features..."
  }
}
```

---

## Get Proactive Message

Get AI-generated proactive message.

```http
POST /api/widget/proactive
```

### Request Body

```json
{
  "session_id": "sess_xxx",
  "trigger_type": "high_engagement",
  "context": {
    "page_url": "https://example.com/features",
    "engagement_score": 70
  }
}
```

### Response

```json
{
  "success": true,
  "message": {
    "message_id": "msg_xxx",
    "content": "I noticed you're exploring our features. Can I help explain anything?",
    "suggested_actions": [
      { "label": "Tell me more", "action": "message" },
      { "label": "No thanks", "action": "dismiss" }
    ]
  }
}
```

---

## Capture Lead

Submit lead information.

```http
POST /api/widget/lead
```

### Request Body

```json
{
  "session_id": "sess_xxx",
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Inc",
  "custom_fields": {
    "interest": "Enterprise plan"
  }
}
```

### Response

```json
{
  "success": true,
  "lead_id": "lead_xxx",
  "message": "Thanks! Someone will be in touch soon."
}
```
