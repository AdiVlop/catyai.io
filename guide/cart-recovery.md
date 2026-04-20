# Cart Recovery

CatyAI includes gamified cart abandonment recovery that helps you recover lost sales via WhatsApp with engaging, personalized messages.

## How It Works

```
1. Customer abandons cart on Shopify/WooCommerce
2. Webhook triggers CatyAI
3. Gamified recovery sequence starts
4. Customer engages → discount unlocked
5. Customer completes purchase
```

## Recovery Strategies

CatyAI uses 4 gamified strategies (no wheel of fortune, no physical gifts):

### 1. Unlock Discount

**Timing:** 30 minutes after abandonment

```
Buna Maria! 

Am observat ca ai lasat in cos: Laptop Gaming, Mouse Wireless.

Am activat o Oferta Speciala pentru tine care asteapta sa fie deblocata!

Raspunde cu VREAU pentru a vedea ce ai castigat.

[Deblocheaza Oferta]
```

When customer responds:

```
Felicitari! 

Ai deblocat o reducere de 10% pentru cosul tau!

Codul tau: MARIA10
Valabil doar 15 minute

[Finalizeaza Comanda]
```

### 2. Virtual Credit

**Timing:** 2 hours after abandonment

```
Buna din nou! 

Tocmai ti-am adaugat 50 RON Credit in contul tau!

Acest credit poate fi folosit doar pentru produsele din cosul tau 
si expira la miezul noptii.

Ar fi pacat sa il pierzi! Il folosim acum?

[Folosesc 50 RON]
```

### 3. Priority Reserve

**Timing:** 4 hours after abandonment

```
Stoc limitat! 

Produsele din cosul tau sunt foarte cautate.

Am rezervat stocul pentru tine timp de 1 ora.

Finalizeaza comanda acum pentru a nu pierde rezervarea.

[Rezervarea Mea]
```

### 4. Free Shipping Milestone

**Timing:** Next day

```
Aproape ai transport gratuit! 

Mai adauga 50 RON in cos si primesti livrare GRATUITA.

Produsele tale asteapta:
- Laptop Gaming
- Mouse Wireless

[Completeaza pentru Transport Gratuit]
```

## Shopify Integration

### Setup

1. Go to **Dashboard → Integrations → Shopify**
2. Enter your Shopify store URL
3. Install the CatyAI app
4. Enable cart recovery

### Webhook

Shopify sends cart data to:

```
POST /api/webhooks/cart-abandoned
```

### Discount Codes

CatyAI creates **real** discount codes in Shopify:

```javascript
{
  code: "MARIA10",
  discount_type: "percentage",
  value: 10,
  usage_limit: 1,
  expires_at: "2026-04-20T11:00:00Z"
}
```

## WooCommerce Integration

### Setup

1. Go to **Dashboard → Integrations → WooCommerce**
2. Enter your store URL
3. Generate API keys
4. Enable cart recovery

### Coupon API

CatyAI creates coupons via WooCommerce REST API:

```bash
POST /wp-json/wc/v3/coupons
```

## Configuration

Configure cart recovery in widget settings:

```json
{
  "cart_recovery": {
    "enabled": true,
    "default_discount": 10,
    "max_discount": 20,
    "first_message_delay": 30,
    "strategies": ["unlock_discount", "virtual_credit", "priority_reserve"],
    "whatsapp_channel": "notifications"
  }
}
```

## Dashboard Analytics

Track recovery performance:

| Metric | Description |
|--------|-------------|
| Carts Abandoned | Total abandoned carts |
| Recovery Started | Sequences initiated |
| Messages Sent | Total recovery messages |
| Engaged | Customers who responded |
| Recovered | Completed purchases |
| Recovery Rate | % of carts recovered |
| Revenue Recovered | Total recovered revenue |

## Rate Limiting

To prevent spam, CatyAI enforces:

- **1 message per cart per strategy**
- **60-second cooldown between messages**
- **Max 3 recovery attempts per cart**

## API Endpoints

### Get Recovery Stats

```bash
GET /api/widgets/:widgetId/cart-recovery/stats
```

### Trigger Manual Recovery

```bash
POST /api/widgets/:widgetId/cart-recovery/trigger
{
  "cart_id": "cart_123",
  "strategy": "unlock_discount"
}
```

### Pause Recovery

```bash
POST /api/widgets/:widgetId/cart-recovery/pause
{
  "cart_id": "cart_123"
}
```

## Best Practices

1. **Time messages well** - First message at 30 min is optimal
2. **Personalize** - Use customer name and cart items
3. **Create urgency** - Limited time offers work best
4. **Test discounts** - Find the minimum effective discount
5. **Monitor unsubscribes** - Reduce frequency if too many opt-out
