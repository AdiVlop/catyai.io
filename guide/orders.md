# Universal Orders

CatyAI's Universal Orders system provides a unified webhook endpoint for order notifications from any e-commerce platform.

## Overview

Instead of building separate integrations for each platform, Universal Orders normalizes order data into a standard format and delivers notifications via your preferred channel.

```
Shopify ─┐
WooCommerce ─┼──→ Universal Webhook ──→ Normalized Order ──→ WhatsApp/Email
Magento ─┘
```

## Supported Platforms

| Platform | Status | Features |
|----------|--------|----------|
| Shopify | Full | Orders, refunds, fulfillment |
| WooCommerce | Full | Orders, refunds, status updates |
| Magento | Basic | Orders |
| Custom | Via API | Any platform with webhooks |

## Webhook Endpoint

```
POST /api/webhooks/orders/:widgetId
```

### Headers

```
Content-Type: application/json
X-Platform: shopify | woocommerce | magento | custom
X-Webhook-Secret: your-webhook-secret
```

## Order Normalization

All platforms are normalized to a standard format:

```json
{
  "order_id": "ORD-12345",
  "platform": "shopify",
  "status": "paid",
  "customer": {
    "name": "Ion Popescu",
    "email": "ion@example.com",
    "phone": "+40721234567"
  },
  "items": [
    {
      "name": "Product A",
      "quantity": 2,
      "price": 100,
      "currency": "RON"
    }
  ],
  "totals": {
    "subtotal": 200,
    "shipping": 15,
    "tax": 38,
    "total": 253,
    "currency": "RON"
  },
  "shipping_address": {
    "street": "Str. Exemplu 123",
    "city": "Bucuresti",
    "country": "RO"
  },
  "created_at": "2026-04-20T10:30:00Z"
}
```

## Notification Channels

### WhatsApp

```
Comanda Noua! #ORD-12345

Client: Ion Popescu
Telefon: +40721234567

Produse:
• 2x Product A - 200 RON

Total: 253 RON

[Vezi Comanda] [Contacteaza Client]
```

### Email

HTML-formatted order notification with:

- Order details
- Customer information
- Product list with images
- Quick action buttons

## Dashboard

View all orders in **Dashboard → Orders**:

| Column | Description |
|--------|-------------|
| Order ID | Platform order reference |
| Customer | Name and contact |
| Platform | Shopify/WooCommerce/etc |
| Items | Product count and total |
| Status | paid, shipped, delivered |
| Date | Order timestamp |

### Filters

- By platform
- By status
- By date range
- By customer

## Shopify Setup

### 1. Create Webhook in Shopify

Go to **Settings → Notifications → Webhooks**:

```
Event: Order creation
URL: https://api.catyai.io/api/webhooks/orders/YOUR_WIDGET_ID
Format: JSON
```

### 2. Configure Widget

```json
{
  "orders": {
    "enabled": true,
    "platforms": ["shopify"],
    "notification_channel": "whatsapp",
    "notification_phone": "+40721234567"
  }
}
```

## WooCommerce Setup

### 1. Create Webhook in WooCommerce

Go to **WooCommerce → Settings → Advanced → Webhooks**:

```
Topic: Order created
Delivery URL: https://api.catyai.io/api/webhooks/orders/YOUR_WIDGET_ID
Secret: your-webhook-secret
```

### 2. Configure Widget

```json
{
  "orders": {
    "enabled": true,
    "platforms": ["woocommerce"],
    "woo_secret": "your-webhook-secret"
  }
}
```

## Custom Platform Integration

For platforms not natively supported:

### 1. Send POST Request

```bash
POST /api/webhooks/orders/:widgetId
Content-Type: application/json
X-Platform: custom
X-Webhook-Secret: your-secret

{
  "order_id": "12345",
  "customer_name": "Ion Popescu",
  "customer_phone": "+40721234567",
  "items": [...],
  "total": 253
}
```

### 2. Field Mapping

CatyAI auto-maps common field names:

| Your Field | Mapped To |
|------------|-----------|
| order_number, orderNumber, id | order_id |
| customer_name, customerName, name | customer.name |
| phone, customer_phone, tel | customer.phone |
| total, order_total, amount | totals.total |

## API Endpoints

### List Orders

```bash
GET /api/widgets/:widgetId/orders
```

### Get Order Details

```bash
GET /api/widgets/:widgetId/orders/:orderId
```

### Update Order Status

```bash
PATCH /api/widgets/:widgetId/orders/:orderId
{
  "status": "shipped",
  "tracking_number": "AWB123456"
}
```

## Best Practices

1. **Verify webhooks** - Always validate the webhook secret
2. **Handle duplicates** - Use order_id for idempotency
3. **Quick response** - Acknowledge webhooks within 5 seconds
4. **Retry logic** - Platforms retry failed webhooks
5. **Test thoroughly** - Use test orders before going live
