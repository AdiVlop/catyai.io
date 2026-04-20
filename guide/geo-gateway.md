# GEO Gateway & SENTINEL

GEO Gateway is CatyAI's AI-optimized content delivery system that makes your knowledge base accessible to AI crawlers and search engines.

## What is GEO?

**GEO** (Generative Engine Optimization) optimizes your content for AI systems like ChatGPT, Claude, Perplexity, and Google AI Overviews.

## SENTINEL System

SENTINEL is the predictive intelligence layer (Layer 3.6) that:

- Monitors AI crawler activity in real-time
- Predicts which content AI systems will request
- Pre-generates optimized responses
- Tracks authority scores across AI platforms

### Architecture

```
Layer 3.3: Validation + Rate Limiting
Layer 3.5: AI Beacon (crawler detection)
Layer 3.6: SENTINEL Predictive Core
```

## llms.txt Support

CatyAI automatically generates [llms.txt](https://llmstxt.org) files for your knowledge base:

```
GET /llms.txt?widget=YOUR_WIDGET_ID
```

This provides AI systems with a structured, machine-readable summary of your content.

### Format

```markdown
# Company Name

> Brief description of your business

## Products
- Product A: Description
- Product B: Description

## FAQ
### Common Question?
Answer here...
```

## Authority Score

CatyAI tracks how AI systems cite your content:

| Platform | Score Range | Meaning |
|----------|-------------|---------|
| ChatGPT | 0-100 | Citation frequency in responses |
| Claude | 0-100 | Content retrieval rate |
| Perplexity | 0-100 | Search result ranking |
| Google AI | 0-100 | AI Overview inclusion |

## Dashboard

View GEO metrics at **Dashboard → GEO Observability**:

- **Crawler Visits**: Real-time AI crawler activity
- **Content Freshness**: Last indexed timestamps
- **Authority Trends**: Score changes over time
- **Top Queries**: What AI systems ask about you

## Qdrant Vector Search

Knowledge base content is indexed in Qdrant for semantic search:

```javascript
// Content retrieval flow
1. User asks question
2. Question embedded as vector
3. Qdrant finds similar content chunks
4. AI generates response with context
```

### Indexing Content

Content is automatically indexed when you:

- Upload documents (PDF, DOCX, TXT)
- Add FAQ entries
- Crawl website pages
- Import product catalogs

## Configuration

Enable GEO Gateway in widget settings:

```json
{
  "geo": {
    "enabled": true,
    "llmstxt_enabled": true,
    "crawler_tracking": true,
    "beacon_enabled": true
  }
}
```

## API Endpoints

### Get GEO Stats

```bash
GET /api/widgets/:widgetId/geo/stats
```

### Refresh llms.txt

```bash
POST /api/widgets/:widgetId/geo/refresh-llmstxt
```

### View Crawler Activity

```bash
GET /api/widgets/:widgetId/geo/crawlers
```

## Best Practices

1. **Keep content fresh** - Update knowledge base regularly
2. **Use structured content** - Clear headings, bullet points
3. **Include metadata** - Descriptions, categories, tags
4. **Monitor authority scores** - Track AI citation trends
5. **Optimize for questions** - Frame content as Q&A when possible
