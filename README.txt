Blue Sky Oil Services — Static Site (HTML)
------------------------------------------------
Files:
- index.html
- /assets/logo-bluesky.png  (replace with your real logo PNG)
- /assets/hero.jpg          (optional background image)
- /assets/favicon.png       (optional favicon)

Deploy on Vercel via GitHub:
1) Create a public repo (blue-sky-oil-services) and upload these files/folders.
2) In Vercel: Add New Project → Import from GitHub → select the repo → Deploy.
3) In Settings → Domains, add:
   bluesky-oilservices.com and www.bluesky-oilservices.com
DNS (GoDaddy) should be:
   A @ -> 76.76.21.21
   CNAME www -> cname.vercel-dns.com
