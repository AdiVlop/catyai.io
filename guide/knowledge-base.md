# Knowledge Base

Train your AI with your business information for accurate, relevant responses.

## Overview

The knowledge base stores your content and enables the AI to answer questions accurately about:

- Products and services
- Pricing and plans
- Policies (returns, shipping, etc.)
- FAQs
- Technical documentation

## Adding Content

### Upload Documents

Supported formats:
- PDF (.pdf)
- Word (.docx, .doc)
- Text (.txt)
- Markdown (.md)

In dashboard: **Knowledge Base → Upload**

### Add FAQ Entries

Directly add question-answer pairs:

```
Q: What is your return policy?
A: We offer a 30-day money-back guarantee on all products...
```

### Website Crawler

Automatically import content from your website:

1. Go to **Knowledge Base → Crawl Website**
2. Enter your website URL
3. Configure: max pages, depth, include/exclude patterns
4. Start crawl
5. Review and approve imported content

## Content Organization

### Categories

Organize content into categories:
- Products
- Pricing
- Support
- Policies

### Tags

Add tags for better retrieval:
- `shipping`, `international`, `express`
- `enterprise`, `startup`, `pricing`

## How AI Uses Knowledge

1. **User asks question**
2. **Semantic search** finds relevant content
3. **AI reads** the matched content
4. **Generates response** based on your information
5. **Cites sources** when configured

### Example

```
User: Do you ship to Germany?

AI: [Searches knowledge base → Finds "International Shipping" doc]

AI: Yes! We ship to Germany. Standard shipping takes 5-7 business
    days and costs €15. Express shipping (2-3 days) is available
    for €35.
```

## Best Practices

1. **Be comprehensive** - Cover all common questions
2. **Keep updated** - Refresh content regularly
3. **Use clear language** - Avoid jargon in FAQs
4. **Include variations** - Different ways to ask same question
5. **Test regularly** - Ask questions to verify accuracy

## Content Quality

### Good Content ✓

```
Q: What payment methods do you accept?
A: We accept Visa, Mastercard, American Express, PayPal, and
   bank transfers for orders over €1000. All payments are
   processed securely through Stripe.
```

### Poor Content ✗

```
Q: Payment?
A: Cards, PayPal
```

## Limits by Plan

| Plan | Documents | Storage |
|------|-----------|---------|
| Free | 10 | 10 MB |
| Starter | 50 | 100 MB |
| Growth | 200 | 500 MB |
| Business | Unlimited | 2 GB |
| Enterprise | Unlimited | Custom |

## API Access

Manage knowledge base via API. See [Admin API](/api/admin).
