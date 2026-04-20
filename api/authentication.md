# Authentication

Caty.AI uses two authentication methods depending on the API.

## Widget API (Public)

For widget operations, use your **API Key**:

```bash
curl https://api.catyai.io/api/widget/config \
  -H "X-API-Key: caty_xxxxxxxxxxxxxxxx"
```

### Getting Your API Key

1. Log in to [app.catyai.io](https://app.catyai.io)
2. Go to **Settings → API Keys**
3. Copy your widget API key

### API Key Format

```
caty_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

::: warning Security
- Never expose your API key in client-side code that could be inspected
- The widget script handles this securely
- For server-to-server calls, use environment variables
:::

## Admin API (Protected)

For dashboard operations, use **Supabase JWT**:

```bash
curl https://api.catyai.io/api/admin/widgets \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Getting a JWT

1. Sign in via Supabase Auth
2. Get the session token
3. Include in Authorization header

### JavaScript Example

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Sign in
const { data: { session } } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// Use token for API calls
const response = await fetch('https://api.catyai.io/api/admin/widgets', {
  headers: {
    'Authorization': `Bearer ${session.access_token}`
  }
})
```

## Webhook Authentication

For incoming webhooks, verify the signature:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

## Token Refresh

JWT tokens expire after 1 hour. Use refresh tokens:

```javascript
const { data: { session } } = await supabase.auth.refreshSession()
```

## Best Practices

1. **Store keys securely** - Use environment variables
2. **Rotate keys periodically** - Regenerate if compromised
3. **Use HTTPS only** - All API calls must use HTTPS
4. **Limit key permissions** - Use separate keys for different purposes
