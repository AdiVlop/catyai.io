# FraudAI Shield

CatyAI includes FraudAI Shield, a real-time message-based fraud detection system that protects your business from spam, scams, and malicious actors.

## How It Works

Every incoming message is scored against 4 rule categories:

| Category | Examples | Action |
|----------|----------|--------|
| **Spam** | Repetitive messages, mass forwarding, link spam | Block/Flag |
| **Scam** | Financial requests, phishing links, impersonation | Block immediately |
| **Behavioral** | Off-hours activity, language switching, aggressive new contacts | Monitor |
| **Contact** | Unknown numbers, international unknown, blocked contact retry | Log/Flag |

## Risk Score Thresholds

| Level | Score | Action | Color |
|-------|-------|--------|-------|
| CRITICAL | 80+ | BLOCK | Red |
| HIGH | 60-79 | FLAG | Orange |
| MEDIUM | 40-59 | MONITOR | Yellow |
| LOW | 20-39 | LOG | Green |
| MINIMAL | 0-19 | ALLOW | Teal |

## Spam Detection Rules

```
SPAM_001: Repetitive Messages (5+ in 5 min) → Score: 30
SPAM_002: Mass Forwarding                   → Score: 20
SPAM_003: Link Spam (3+ links in 10 min)    → Score: 25
```

## Scam Detection

FraudAI detects scam patterns including:

- **Financial requests**: Keywords like "urgent", "transfer", "bitcoin", "investment"
- **Impersonation attempts**: Patterns indicating someone pretending to be staff
- **Phishing links**: Suspicious URLs (shortened links, suspicious domains)
- **Pressure tactics**: "Now", "immediately", "last chance", "expire"

### Suspicious URL Patterns

The system flags these URL patterns:

- URL shorteners (bit.ly, tinyurl, t.co)
- Suspicious TLDs (.ru, .cn, .tk, .ml)
- Login/verification phishing patterns
- WhatsApp message injection attempts

## Behavioral Analysis

FraudAI monitors behavior patterns:

| Pattern | Description | Score |
|---------|-------------|-------|
| Off-Hours Activity | Messages at unusual times | 10 |
| New Contact Aggressive | Spam from new numbers | 30 |
| Language Switch | Sudden language changes | 15 |

## Dashboard Integration

View fraud metrics in your dashboard:

- **Blocked messages** - Messages blocked by FraudAI
- **Flagged conversations** - Conversations requiring review
- **Risk score distribution** - Overall threat landscape
- **Rule hit frequency** - Which rules trigger most

## Configuration

FraudAI is enabled by default. Configure sensitivity in widget settings:

```json
{
  "fraud_protection": {
    "enabled": true,
    "sensitivity": "medium",
    "auto_block_critical": true,
    "notify_on_flag": true
  }
}
```

### Sensitivity Levels

- **Low**: Only block CRITICAL threats (score 80+)
- **Medium**: Block CRITICAL, flag HIGH (default)
- **High**: Block HIGH+, flag MEDIUM

## API Access

Query fraud scores via API:

```bash
GET /api/widgets/:widgetId/fraud/stats
```

Response:

```json
{
  "blocked_24h": 12,
  "flagged_24h": 45,
  "top_rules": ["SCAM_003", "SPAM_001"],
  "risk_distribution": {
    "critical": 2,
    "high": 10,
    "medium": 33
  }
}
```

## Best Practices

1. **Review flagged conversations** regularly
2. **Whitelist trusted contacts** to reduce false positives
3. **Monitor rule hits** to understand threat patterns
4. **Keep auto-block enabled** for CRITICAL threats
