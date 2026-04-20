# Human Handoff

Seamlessly transfer conversations from AI to human agents.

## When to Handoff

The AI knows when to escalate:

- User explicitly requests human help
- AI confidence is low
- Complaint or negative sentiment detected
- Complex technical issue
- High-value lead requiring personal attention

## Configuration

### Handoff Triggers

In **Settings → Human Handoff**:

- **User request**: "I want to talk to a human"
- **Low confidence**: AI unsure how to respond
- **Negative sentiment**: User is frustrated
- **Keywords**: Custom trigger words
- **After X failed attempts**: Repeated misunderstandings

### Availability

Set your team's availability:

```javascript
{
  "availability": {
    "timezone": "Europe/Bucharest",
    "hours": {
      "monday": { "start": "09:00", "end": "18:00" },
      "tuesday": { "start": "09:00", "end": "18:00" },
      // ...
    }
  },
  "offline_message": "Our team is currently offline. Leave your contact info and we'll get back to you!"
}
```

## Handoff Flow

1. **Trigger detected** - AI recognizes need for human
2. **Notification sent** - Team alerted via email/push/WhatsApp
3. **Context shared** - Human sees full conversation history
4. **Handoff message** - User informed they're being transferred
5. **Human responds** - Conversation continues in dashboard

## Notifications

When handoff is requested:

### Email
```
Subject: 🙋 Human Handoff Requested

A visitor has requested to speak with a human.

Visitor: john@example.com
Reason: "I have a complex question about enterprise pricing"
Conversation: https://app.catyai.io/conversations/xxx

Last 3 messages:
- User: I need custom integrations
- AI: I can help with basic integrations...
- User: No, I need to talk to someone
```

### WhatsApp
```
🙋 Human Handoff Request

From: john@example.com
Reason: Complex question
View: app.catyai.io/c/xxx
```

## Live Chat Mode

Once handed off:

1. Open conversation in dashboard
2. Click **Take Over**
3. Type responses directly
4. AI is paused for this conversation
5. Click **Return to AI** when done

## Offline Handling

When no humans are available:

- Collect visitor's contact info
- Promise callback within X hours
- Send notification when team is back online
- AI can continue handling simple queries

## Best Practices

1. **Set realistic expectations** - Tell users wait times
2. **Respond quickly** - Don't keep visitors waiting
3. **Review AI's summary** - Understand context before jumping in
4. **Return to AI gracefully** - Let users know when you're done
5. **Track handoff reasons** - Improve AI to reduce handoffs
