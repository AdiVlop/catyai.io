# Admin API

Protected API endpoints for dashboard operations.

## Authentication

All endpoints require JWT authentication:

```
Authorization: Bearer <jwt_token>
```

---

## Widgets

### List Widgets

```http
GET /api/admin/widgets
```

**Response:**
```json
{
  "widgets": [
    {
      "widget_id": "xxx",
      "name": "Main Website",
      "status": "active",
      "plan": "growth",
      "created_at": "2026-01-01T00:00:00Z"
    }
  ]
}
```

### Get Widget

```http
GET /api/admin/widgets/:id
```

### Create Widget

```http
POST /api/admin/widgets
```

**Body:**
```json
{
  "name": "New Widget",
  "business": {
    "name": "Company",
    "website": "https://example.com"
  }
}
```

### Update Widget

```http
PUT /api/admin/widgets/:id
```

### Delete Widget

```http
DELETE /api/admin/widgets/:id
```

---

## Conversations

### List Conversations

```http
GET /api/admin/conversations
```

**Query Parameters:**
- `widget_id` - Filter by widget
- `status` - Filter by status (active, ended)
- `date_from` - Start date
- `date_to` - End date
- `page` - Page number
- `limit` - Items per page

### Get Conversation

```http
GET /api/admin/conversations/:id
```

**Response:**
```json
{
  "conversation": {
    "session_id": "sess_xxx",
    "visitor": { "name": "John", "email": "john@example.com" },
    "messages": [...],
    "lead_score": 75,
    "intent": "purchase_intent",
    "started_at": "...",
    "ended_at": "..."
  }
}
```

---

## Leads

### List Leads

```http
GET /api/admin/leads
```

**Query Parameters:**
- `widget_id` - Filter by widget
- `status` - new, contacted, qualified, converted
- `score_min` - Minimum lead score
- `date_from`, `date_to` - Date range

### Update Lead

```http
PUT /api/admin/leads/:id
```

**Body:**
```json
{
  "status": "contacted",
  "notes": "Called, interested in enterprise plan",
  "tags": ["enterprise", "demo_scheduled"]
}
```

---

## Knowledge Base

### List Documents

```http
GET /api/admin/knowledge
```

### Upload Document

```http
POST /api/admin/knowledge/upload
Content-Type: multipart/form-data
```

**Form Data:**
- `file` - Document file
- `widget_id` - Widget ID
- `category` - Optional category

### Delete Document

```http
DELETE /api/admin/knowledge/:id
```

---

## Analytics

### Get Dashboard Stats

```http
GET /api/admin/analytics
```

**Response:**
```json
{
  "period": "last_30_days",
  "conversations": {
    "total": 1250,
    "change": 15.5
  },
  "leads": {
    "total": 89,
    "change": 22.3
  },
  "conversion_rate": 7.1,
  "avg_response_time": 1.2,
  "top_intents": [...]
}
```

---

## Notifications

### Get Settings

```http
GET /api/admin/notifications/settings
```

### Update Settings

```http
PUT /api/admin/notifications/settings
```

**Body:**
```json
{
  "email": {
    "enabled": true,
    "addresses": ["team@example.com"]
  },
  "push": {
    "enabled": true
  },
  "whatsapp": {
    "enabled": true,
    "phone": "+1234567890"
  }
}
```
