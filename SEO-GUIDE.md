# SEO & Meta Tags Guide for Pukaar.ai

This guide explains how to add and manage SEO meta tags across the Pukaar.ai website.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [SEO Component Usage](#seo-component-usage)
3. [Available Props](#available-props)
4. [Page-Specific Examples](#page-specific-examples)
5. [Global Meta Tags (index.html)](#global-meta-tags-indexhtml)
6. [Social Media Sharing](#social-media-sharing)
7. [Best Practices](#best-practices)
8. [Checklist Before Launch](#checklist-before-launch)

---

## Quick Start

Import and use the SEO component in any page:

```jsx
import SEO from '../components/Common/SEO';

const MyPage = () => {
    return (
        <div>
            <SEO 
                title="Page Title"
                description="A brief description of this page (150-160 characters)"
                keywords="keyword1, keyword2, keyword3"
                url="/page-path"
            />
            {/* Page content */}
        </div>
    );
};
```

---

## SEO Component Usage

The SEO component is located at: `src/components/Common/SEO.jsx`

It uses `react-helmet-async` to dynamically inject meta tags into the `<head>` of each page.

### Basic Usage

```jsx
<SEO 
    title="About Us"
    description="Learn about Pukaar.ai and our mission."
/>
```

### Full Usage

```jsx
<SEO 
    title="About Us"
    description="Learn about Pukaar.ai and our mission to empower parents with AI-driven childcare solutions."
    keywords="about pukaar, baby care startup, AI parenting"
    url="/about"
    image="/images/about-og-image.png"
    type="website"
    author="Pukaar.ai"
    twitterHandle="@pukaarai"
/>
```

---

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Page title (appears in browser tab) |
| `description` | string | Default site description | Meta description for search engines |
| `keywords` | string | - | Comma-separated keywords |
| `url` | string | Site URL | Canonical URL path (e.g., `/about`) |
| `image` | string | `/images/og-image.png` | Image for social sharing |
| `type` | string | `website` | Content type (`website`, `article`, `product`) |
| `distribution` | string | `global` | Content distribution scope |
| `author` | string | `Pukaar.ai` | Content author |
| `twitterHandle` | string | `@pukaarai` | Twitter handle for cards |

---

## Page-Specific Examples

### Home Page

```jsx
<SEO 
    title="AI Baby Cry Translator"
    description="Pukaar.ai uses AI to decode your baby's cries and help you understand their needs instantly. Smart parenting made simple."
    keywords="baby cry translator, AI parenting, baby care app, infant cry analysis, smart parenting, baby health"
    url="/"
/>
```

### About Page

```jsx
<SEO 
    title="About Us"
    description="Learn more about Pukaar.ai and our mission to empower parents with AI-driven childcare solutions. Meet the team behind the innovation."
    keywords="about pukaar, baby care startup, AI parenting company, childcare technology"
    url="/about"
/>
```

### Blog Listing Page

```jsx
<SEO 
    title="Blogs"
    description="Insights, Tips, and Stories for Empowered Parenting. Read our latest blogs on AI baby care and smart parenting."
    keywords="parenting tips, baby care blog, infant health, parenting advice, baby development"
    url="/blogs"
/>
```

### Individual Blog Post

```jsx
<SEO 
    title={blogPost.title}
    description={blogPost.excerpt}
    keywords={blogPost.tags.join(', ')}
    url={`/blogs/${blogPost.slug}`}
    image={blogPost.featuredImage}
    type="article"
/>
```

---

## Global Meta Tags (index.html)

The `index.html` file contains default meta tags that apply to all pages before React hydrates. These are located at the project root.

### Current Global Tags

```html
<!-- Primary Meta Tags -->
<title>Pukaar.ai - AI Baby Cry Translator</title>
<meta name="title" content="Pukaar.ai - AI Baby Cry Translator" />
<meta name="description" content="AI-powered baby cry translator..." />
<meta name="keywords" content="baby cry translator, AI parenting..." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://pukaar.ai/" />
<meta property="og:title" content="Pukaar.ai - AI Baby Cry Translator" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://pukaar.ai/images/og-image.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Pukaar.ai - AI Baby Cry Translator" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://pukaar.ai/images/og-image.png" />
```

### When to Edit index.html

- Changing the site-wide default title/description
- Updating the favicon
- Adding new global meta tags (like verification codes)
- Adding structured data (JSON-LD)

---

## Social Media Sharing

### Open Graph (Facebook, LinkedIn)

Open Graph tags control how your pages appear when shared on Facebook, LinkedIn, and other platforms.

**Required OG Image:**
- Create an image at: `public/images/og-image.png`
- Recommended size: **1200 x 630 pixels**
- Format: PNG or JPG
- Keep important content in the center (some platforms crop edges)

### Twitter Cards

Twitter uses its own meta tags for sharing. The SEO component automatically generates:
- `twitter:card` - Card type (summary_large_image)
- `twitter:title` - Title
- `twitter:description` - Description
- `twitter:image` - Image

**Twitter Image Requirements:**
- Minimum: 300 x 157 pixels
- Recommended: 1200 x 628 pixels
- Maximum file size: 5MB

### Testing Social Sharing

Use these tools to preview how your pages will appear:

- **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Best Practices

### Title Tags

- Keep titles under **60 characters**
- Include primary keyword near the beginning
- Make each page title unique
- Format: `Page Title | Pukaar.ai`

**Good:** `AI Baby Cry Translator | Pukaar.ai`
**Bad:** `Pukaar.ai - The Best AI-Powered Baby Cry Translator App for Parents`

### Meta Descriptions

- Keep descriptions between **150-160 characters**
- Include a call-to-action when appropriate
- Make each description unique
- Include primary keywords naturally

**Good:** `Decode your baby's cries instantly with AI. Pukaar.ai helps parents understand what their baby needs. Download the app today.`

**Bad:** `Pukaar.ai is a baby app. We help with babies. Baby cry translator. AI baby. Parenting app.`

### Keywords

- Use 5-10 relevant keywords per page
- Include variations (baby cry, infant cry, newborn cry)
- Don't stuff keywords
- Focus on long-tail keywords for specific pages

### URLs

- Use lowercase letters
- Use hyphens to separate words
- Keep URLs short and descriptive
- Include primary keyword

**Good:** `/blogs/understanding-baby-cries`
**Bad:** `/blogs/post?id=123&category=parenting`

---

## Checklist Before Launch

### Essential Tasks

- [ ] Update `siteUrl` in SEO component to production domain
- [ ] Create OG image (`public/images/og-image.png`) - 1200x630px
- [ ] Update Twitter handle in SEO component
- [ ] Verify all pages have unique titles and descriptions
- [ ] Test social sharing with Facebook/Twitter debuggers

### index.html Updates

- [ ] Update all `https://pukaar.ai` URLs to actual domain
- [ ] Add Google Analytics / Tag Manager (if needed)
- [ ] Add Google Search Console verification meta tag
- [ ] Update favicon to final logo

### Additional SEO Files to Create

1. **robots.txt** - Create at `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://pukaar.ai/sitemap.xml
```

2. **sitemap.xml** - Create at `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pukaar.ai/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pukaar.ai/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pukaar.ai/blogs</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership (add meta tag to index.html or DNS record)
4. Submit your sitemap

---

## File Structure Reference

```
src/
├── components/
│   └── Common/
│       └── SEO.jsx          # SEO component
├── pages/
│   ├── Home.jsx             # Uses <SEO title="..." />
│   ├── AboutUs.jsx          # Uses <SEO title="..." />
│   └── Blogs.jsx            # Uses <SEO title="..." />
└── main.jsx                 # HelmetProvider wrapper

public/
├── images/
│   └── og-image.png         # Social sharing image (CREATE THIS)
├── robots.txt               # Search engine rules (CREATE THIS)
└── sitemap.xml              # Site map (CREATE THIS)

index.html                   # Global meta tags
```

---

## Need Help?

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Structured Data](https://schema.org/)
