# Architecture

CatyAI runs on AWS infrastructure with the following components:

## Infrastructure Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CATYAI INFRASTRUCTURE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                   │
│  │  catyai.io  │     │app.catyai.io│     │docs.catyai.io│                  │
│  │  (Landing)  │     │ (Dashboard) │     │   (Docs)    │                   │
│  └──────┬──────┘     └──────┬──────┘     └──────┬──────┘                   │
│         │                   │                   │                           │
│         ▼                   ▼                   ▼                           │
│  ┌─────────────────────────────────────────────────────────────┐           │
│  │                    AWS CLOUDFRONT CDN                        │           │
│  │  E3EB3UPK5D8B1L │ E2JS8EYGJUXPG6 │ E21B2K9IS5HWZO           │           │
│  └─────────────────────────────────────────────────────────────┘           │
│         │                   │                   │                           │
│         ▼                   ▼                   ▼                           │
│  ┌─────────────────────────────────────────────────────────────┐           │
│  │                       AWS S3 BUCKETS                         │           │
│  │  catyai-landing  │  app-catyai-io  │  docs-catyai-io        │           │
│  └─────────────────────────────────────────────────────────────┘           │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                         cdn.catyai.io                                 │  │
│  │                    CloudFront E5PY2AJV2I4I9                           │  │
│  │                     (Widget JS + Assets)                              │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                        api.catyai.io                                  │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │  │
│  │  │                    AWS ECS FARGATE                              │ │  │
│  │  │                  Cluster: caty-cluster                          │ │  │
│  │  │                  Service: caty-api                              │ │  │
│  │  │                                                                 │ │  │
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │ │  │
│  │  │  │   Task 1    │  │   Task 2    │  │   Task N    │             │ │  │
│  │  │  │  (Node.js)  │  │  (Node.js)  │  │  (Node.js)  │             │ │  │
│  │  │  └─────────────┘  └─────────────┘  └─────────────┘             │ │  │
│  │  └─────────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                    │                                        │
│         ┌──────────────────────────┼──────────────────────────┐            │
│         │                          │                          │            │
│         ▼                          ▼                          ▼            │
│  ┌─────────────┐           ┌─────────────┐           ┌─────────────┐       │
│  │ DocumentDB  │           │   Qdrant    │           │    Redis    │       │
│  │  (MongoDB)  │           │ (Vectors)   │           │   (Cache)   │       │
│  │             │           │             │           │             │       │
│  │ Sessions    │           │ Knowledge   │           │ Rate Limit  │       │
│  │ Leads       │           │ Base        │           │ Sessions    │       │
│  │ Widgets     │           │ Embeddings  │           │ Widget      │       │
│  │ Convos      │           │             │           │ Config      │       │
│  └─────────────┘           └─────────────┘           └─────────────┘       │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                       EXTERNAL SERVICES                               │  │
│  │                                                                       │  │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐         │  │
│  │  │  Supabase │  │  OpenAI   │  │  Stripe   │  │  WhatsApp │         │  │
│  │  │   Auth    │  │ GPT-4o-m  │  │ Payments  │  │  Baileys  │         │  │
│  │  └───────────┘  └───────────┘  └───────────┘  └───────────┘         │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Live Endpoints

| Service | URL | Status |
|---------|-----|--------|
| Landing | https://catyai.io | ✅ Live |
| Dashboard | https://app.catyai.io | ✅ Live |
| API | https://api.catyai.io | ✅ Live |
| CDN | https://cdn.catyai.io/widget.js | ✅ Live |
| Docs | https://docs.catyai.io | ✅ Live |

## Verify Infrastructure

```bash
# Check API health
curl -s https://api.catyai.io/health | jq .

# Check widget CDN
curl -I https://cdn.catyai.io/widget.js 2>&1 | head -5

# Check landing
curl -I https://catyai.io 2>&1 | head -5
```

## AWS Resources

### ECS Fargate
- **Cluster:** `caty-cluster`
- **Service:** `caty-api`
- **Region:** `eu-west-1`

### CloudFront Distributions
| Domain | Distribution ID |
|--------|-----------------|
| catyai.io | E3EB3UPK5D8B1L |
| app.catyai.io | E2JS8EYGJUXPG6 |
| cdn.catyai.io | E5PY2AJV2I4I9 |
| docs.catyai.io | E21B2K9IS5HWZO |

### Databases
- **DocumentDB:** `ahauros-docdb.cluster-cr6ikqkei37w.eu-west-1.docdb.amazonaws.com`
- **DynamoDB Tables:** `ahauros-brand-vault`, `ahauros-geo-results`

## Message Flow

```
User Message
     │
     ▼
┌─────────────┐
│   Widget    │◄──── cdn.catyai.io/widget.js
│  (Browser)  │
└──────┬──────┘
       │ WebSocket / HTTP
       ▼
┌─────────────┐
│  API Layer  │◄──── api.catyai.io
│   (ECS)     │
└──────┬──────┘
       │
       ├────────────────┬────────────────┐
       ▼                ▼                ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    Brain    │  │   Qdrant    │  │  DocumentDB │
│  (GPT-4o-m) │  │     KB      │  │  (Session)  │
└─────────────┘  └─────────────┘  └─────────────┘
       │
       ▼
┌─────────────┐
│  Response   │
│  to User    │
└─────────────┘
```
