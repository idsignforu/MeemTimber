# 🪵 Meem Timber Depot — Website with Backend

## Project Structure

```
meem-timber/
├── server.js              ← Node.js Express backend
├── package.json           ← Dependencies
├── README.md              ← This file
└── public/
    ├── index.html         ← Main website
    └── images/
        ├── slide1.png     ← Hero slider images (1-7)
        ├── slide2.png
        ├── slide3.png
        ├── slide4.png
        ├── slide5.png
        ├── slide6.png
        ├── slide7.png
        ├── about1.png     ← About section images (1-3)
        ├── about2.png
        └── about3.png
```

## How to Run (Local)

```bash
# 1. Install dependencies
npm install

# 2. Start server
npm start

# 3. Open browser
http://localhost:3000
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Main website |
| `GET /api/images` | Returns all slider image paths |
| `GET /api/contact` | Returns contact information |
| `GET /images/slide1.png` | Direct image access |

## Deploy on Render.com (FREE)

1. GitHub pe push karo:
   ```bash
   git init
   git add .
   git commit -m "Meem Timber Website"
   git push origin main
   ```

2. **render.com** pe jao → New Web Service
3. GitHub repo connect karo
4. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Deploy! ✅

## Add New Images

`public/images/` folder mein koi bhi image dalo aur `server.js` mein array update karo.

---
Built by **iDesign4U** | idesign4u.in
