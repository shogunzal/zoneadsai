# ZoneAds AI review website

Public, review-facing website for ZoneAds AI. It explains the campaign workspace, TikTok Marketing API use case, requested access, data lifecycle and support channels.

The public product page uses illustrative campaign information. It does not contain API credentials, contact TikTok, create campaigns or authorize spend.

## Public routes

- `/` — product overview
- `/tiktok-ads/` — TikTok Ads integration product page
- `/privacy.html` — privacy and connected-platform data policy
- `/terms.html` — service terms
- `/support/` — product, privacy and security contacts
- `/account-deletion/` — account and platform-data deletion instructions

The website can be served as static files. `vercel.json` applies production security headers on Vercel; each HTML page also includes a restrictive browser policy for static hosts.
