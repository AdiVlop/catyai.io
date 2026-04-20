# SAG Agents

SAG (Small Agentic Group) agents are deterministic pre-processing agents that handle common tasks **without using LLM calls**. This makes responses faster and more cost-effective.

## Overview

SAG agents use rule-based logic, keyword matching, and regex patterns to:

- Classify user intent
- Detect sentiment and urgency
- Find products and FAQ matches
- Handle greetings/farewells directly
- Extract appointments and tasks

## The 6 SAG Agents

| Agent | Purpose | LLM? |
|-------|---------|------|
| **IntentSAG** | Classify message intent | No |
| **SentimentSAG** | Detect mood/urgency | No |
| **PersonaSAG** | Get persona context | No |
| **BusinessSAG** | Find products/FAQ | No |
| **TaskSAG** | Extract tasks/reminders | No |
| **GreetingSAG** | Handle social messages | No |

## IntentSAG

Classifies user intent into categories:

### Greetings & Social

```
GREETING  → "salut", "buna", "hello"
FAREWELL  → "pa", "bye", "la revedere"
THANKS    → "multumesc", "mersi", "thanks"
```

### Questions

```
QUESTION_PRICE        → "cat costa", "pret"
QUESTION_PRODUCT      → "aveti", "exista", "caut"
QUESTION_AVAILABILITY → "in stoc", "disponibil"
QUESTION_HOURS        → "program", "deschis"
QUESTION_SHIPPING     → "livrare", "transport"
QUESTION_RETURNS      → "retur", "schimb"
```

### Actions

```
ORDER     → "comanda", "vreau sa cumpar"
COMPLAINT → "reclamatie", "problema"
SCHEDULE  → "programare", "rezervare"
CANCEL    → "anuleaza", "renunt"
HUMAN     → "operator", "om", "agent"
```

## SentimentSAG

Detects emotional state and urgency:

| Sentiment | Indicators |
|-----------|------------|
| Positive | "super", "excelent", "multumesc mult" |
| Negative | "dezamagit", "nasol", "nu merge" |
| Urgent | "urgent", "acum", "imediat" |
| Frustrated | Multiple punctuation, caps, complaints |

## GreetingSAG

Handles greetings directly without LLM:

```
User: "Salut!"
→ GreetingSAG responds: "Bună! Cu ce te pot ajuta?"

User: "Pa pa"
→ GreetingSAG responds: "La revedere! O zi frumoasă!"
```

This saves LLM tokens for actual questions.

## BusinessSAG

Matches user queries against:

- Product catalog (name, description, keywords)
- FAQ entries
- Business policies (returns, shipping, hours)

```
User: "Aveti laptop-uri gaming?"
→ BusinessSAG: Finds matching products
→ Returns: [Product A, Product B, Product C]
```

## TaskSAG

Extracts structured data from messages:

```
User: "Vreau o programare maine la 14:00"
→ TaskSAG extracts:
   {
     type: "appointment",
     date: "2026-04-21",
     time: "14:00"
   }
```

## How SAG Works in Flow

```
1. Message arrives
2. SAG agents analyze in parallel:
   - IntentSAG → What does user want?
   - SentimentSAG → How do they feel?
   - BusinessSAG → Any product/FAQ matches?
   - GreetingSAG → Is it just a greeting?

3. If GreetingSAG matches → Respond directly (no LLM)
4. Otherwise → Pass enriched context to LLM
```

## Performance Benefits

| Metric | With SAG | Without SAG |
|--------|----------|-------------|
| Greeting response | ~50ms | ~800ms |
| Intent detection | ~10ms | ~500ms |
| LLM calls saved | ~30% | 0% |
| Token usage | Lower | Higher |

## Multi-Language Support

SAG agents support Romanian and English patterns:

```javascript
// Romanian
"cat costa" → QUESTION_PRICE
"vreau sa cumpar" → ORDER

// English
"how much" → QUESTION_PRICE
"I want to buy" → ORDER
```

## Configuration

SAG agents are enabled by default. Customize in widget settings:

```json
{
  "sag": {
    "greeting_responses": true,
    "intent_classification": true,
    "sentiment_tracking": true,
    "fallback_to_llm": true
  }
}
```
