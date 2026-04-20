# QR-First Flow

QR-First is a mobile-first widget experience designed for businesses that primarily interact with customers via QR codes and WhatsApp.

## What is QR-First?

QR-First is for businesses that:

- Don't have a website (or have a minimal one)
- Use QR codes on business cards, flyers, store displays
- Want customers to connect directly via WhatsApp
- Need autonomous AI that handles inquiries 24/7

## How It Works

```
1. Customer scans QR code
2. Opens WhatsApp chat with your business
3. CatyAI responds immediately
4. Handles inquiries, appointments, quotes
5. Notifies you of qualified leads
```

## Features

### Autonomous AI

QR-First mode operates autonomously:

- Responds to customers without human intervention
- Uses your knowledge base for accurate answers
- Handles appointments and reservations
- Captures leads automatically

### Admin Commands

Control the AI via WhatsApp commands:

| Command | Action |
|---------|--------|
| `/caty on` | Enable AI responses |
| `/caty off` | Disable AI (manual mode) |
| `PREIA` | Take over conversation manually |

### SelfChat Support

Business owners can talk to Caty directly:

```
Owner: "Caty, what appointments do I have tomorrow?"
Caty: "You have 3 appointments tomorrow: ..."
```

### Lead Notifications

When a qualified lead is detected, you receive a notification:

```
New Lead Alert!
Name: Maria Popescu
Phone: +40721234567
Interest: Product consultation
Maturity Score: 4/5
```

## Setting Up QR-First

### 1. Create Widget

In the dashboard, create a new widget and select **QR-First** mode.

### 2. Connect WhatsApp

Link your WhatsApp Business number:

1. Go to **Integrations → WhatsApp**
2. Scan the QR code with your phone
3. Wait for connection confirmation

### 3. Configure Knowledge Base

Add your business information:

- Services/products offered
- Pricing information
- Business hours
- FAQ entries

### 4. Generate QR Code

Download your branded QR code from the dashboard and add it to:

- Business cards
- Store windows
- Flyers and brochures
- Product packaging
- Social media

## Message Flow

```
Customer Message
      ↓
Message Router
      ↓
QR-First Handler
      ↓
┌─────────────────┐
│ SAG Agents      │ ← Intent, Sentiment
└────────┬────────┘
         ↓
┌─────────────────┐
│ Brain Module    │ ← Same AI as web widget
└────────┬────────┘
         ↓
WhatsApp Response
```

## Service Catalog

Display your services in WhatsApp:

```
User: "Ce servicii oferiti?"

Caty sends interactive list:
├── Service A - 100 RON
├── Service B - 150 RON
├── Service C - 200 RON
└── [Book Now] button
```

## Appointment Booking

QR-First includes appointment booking:

```
User: "Vreau o programare"
Caty: "Pentru ce serviciu doriti programare?"
User: "Consultatie"
Caty: "Ce data preferati?"
User: "Maine la 14:00"
Caty: "Am rezervat pentru maine, 21 aprilie, ora 14:00.
       Veti primi o confirmare pe WhatsApp."
```

## Payment Integration

Accept payments via Stripe Connect:

```
User: "Vreau sa platesc"
Caty: "Va trimit link-ul de plata:"
     [Pay 150 RON via Stripe]
```

## Dashboard Access

View QR-First analytics:

- **Conversations**: Total WhatsApp chats
- **Response time**: Average AI response speed
- **Leads captured**: Qualified leads count
- **Appointments**: Bookings made via chat

## Best Practices

1. **Keep knowledge base updated** - AI accuracy depends on your content
2. **Set business hours** - Configure when AI should respond
3. **Review conversations** - Check AI responses regularly
4. **Use quick replies** - Common questions get faster responses
5. **Enable notifications** - Get alerts for high-value leads
