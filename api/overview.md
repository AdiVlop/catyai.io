# API Overview

The Caty.AI API enables programmatic access to all platform features.

## Base URL

```
https://api.catyai.io
```

## API Types

### Widget API

Public endpoints for the chat widget:

- `/api/widget/config` - Get widget configuration
- `/api/widget/session` - Create/get session
- `/api/widget/message` - Send/receive messages
- `/api/widget/track` - Behavioral tracking

**Authentication**: Widget API Key (`X-API-Key` header)

### Admin API

Protected endpoints for dashboard operations:

- `/api/admin/widgets` - Manage widgets
- `/api/admin/conversations` - View conversations
- `/api/admin/leads` - Manage leads
- `/api/admin/knowledge` - Manage knowledge base
- `/api/admin/analytics` - Get analytics data

**Authentication**: Supabase JWT (`Authorization: Bearer` header)

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error description",
  "code": "ERROR_CODE"
}
```

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| Widget API | 100 req/min |
| Admin API | 60 req/min |
| Message | 20 req/min |

## Error Codes

| Code | Description |
|------|-------------|
| `MISSING_API_KEY` | API key not provided |
| `INVALID_API_KEY` | API key is invalid or inactive |
| `RATE_LIMITED` | Too many requests |
| `VALIDATION_ERROR` | Invalid request data |
| `NOT_FOUND` | Resource not found |
| `UNAUTHORIZED` | Authentication required |

## SDKs

Coming soon:
- JavaScript/TypeScript
- Python
- PHP

## Quick Example

```javascript
// Send a message
const response = await fetch('https://api.catyai.io/api/widget/message', {
  method: 'POST',
  headers: {
    'X-API-Key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    session_id: 'sess_xxx',
    message: 'Hello!'
  })
});

const data = await response.json();
console.log(data.response); // AI's response
```
