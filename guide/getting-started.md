# Getting Started

Welcome to Caty.AI! This guide will help you set up your AI chatbot in minutes.

## Prerequisites

- A website where you can add JavaScript code
- A Caty.AI account ([sign up here](https://app.catyai.io/signup))

## Step 1: Create Your Widget

1. Log in to [app.catyai.io](https://app.catyai.io)
2. Click **Create Widget**
3. Enter your business information:
   - Business name
   - Website URL
   - Business type

## Step 2: Get Your Widget ID

After creating your widget, you'll see your Widget ID in the dashboard. It looks like:

```
widget_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Keep this ID handy - you'll need it to embed the widget on your site.

## Step 3: Install the Widget

Add this script tag to your website, just before the closing `</body>` tag:

```html
<script
  src="https://api.catyai.io/widget.js"
  data-widget-id="YOUR_WIDGET_ID">
</script>
```

Replace `YOUR_WIDGET_ID` with your actual Widget ID from the dashboard.

### Platform-Specific Instructions

::: details WordPress
1. Go to **Appearance → Theme Editor**
2. Select `footer.php`
3. Paste the script before `</body>`
4. Save changes

Or use a plugin like **Insert Headers and Footers**.
:::

::: details Shopify
1. Go to **Online Store → Themes**
2. Click **Actions → Edit code**
3. Open `theme.liquid`
4. Paste the script before `</body>`
5. Save
:::

::: details React / Next.js
Add to your `_app.js` or layout component:

```jsx
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://api.catyai.io/widget.js"
        data-widget-id="YOUR_WIDGET_ID"
        strategy="lazyOnload"
      />
    </>
  )
}
```
:::

## Step 4: Configure Your Widget

In the dashboard, customize:

- **Appearance**: Colors, position, theme
- **Persona**: Name, role, greeting message
- **Behavior**: Proactive messages, lead capture
- **Knowledge Base**: Upload FAQs, docs, product info

## Step 5: Train Your AI

For best results, add content to your knowledge base:

1. Go to **Knowledge Base** in the dashboard
2. Upload documents (PDF, DOCX, TXT)
3. Or paste FAQ content directly
4. The AI will learn and answer questions based on your content

## Verification

To verify the widget is working:

1. Visit your website
2. You should see the chat icon in the bottom-right corner
3. Click it and send a test message
4. Check the **Conversations** tab in your dashboard

## Next Steps

- [Configure appearance](/guide/appearance)
- [Set up proactive messages](/guide/proactive-messages)
- [Configure lead capture](/guide/lead-capture)
- [Explore the API](/api/overview)

## Need Help?

- Email: support@catyai.io
- Dashboard: [app.catyai.io](https://app.catyai.io)
