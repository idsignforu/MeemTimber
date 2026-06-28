const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(compression()); // Gzip compression for speed
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));

// ===== STATIC FILES =====
// Serve images, CSS, JS from public folder
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d', // Cache images for 7 days
  etag: true,
}));

// ===== API ROUTES =====

// GET /api/images - Returns list of all slider images
app.get('/api/images', (req, res) => {
  const heroImages = [
    { id: 1, src: '/images/slide1.png', alt: 'Meem Timber - Premium Wood Products' },
    { id: 2, src: '/images/slide2.png', alt: 'Meem Timber - Quality Doors' },
    { id: 3, src: '/images/slide3.png', alt: 'Meem Timber - Teak Wood' },
    { id: 4, src: '/images/slide4.png', alt: 'Meem Timber - African Wood' },
    { id: 5, src: '/images/slide5.png', alt: 'Meem Timber - WPC Doors' },
    { id: 6, src: '/images/slide6.png', alt: 'Meem Timber - Premium Timber' },
    { id: 7, src: '/images/slide7.png', alt: 'Meem Timber - Windows & Frames' },
  ];

  const aboutImages = [
    { id: 1, src: '/images/about1.png', alt: 'Meem Timber Depot - Our Store' },
    { id: 2, src: '/images/about2.png', alt: 'Meem Timber Depot - Wood Selection' },
    { id: 3, src: '/images/about3.png', alt: 'Meem Timber Depot - Quality Products' },
  ];

  res.json({
    success: true,
    data: { heroImages, aboutImages }
  });
});

// GET /api/contact - Business info
app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    data: {
      phones: ['9130640765', '8977800536', '8019200536'],
      email: 'akram.sorathiya@gmail.com',
      address: '13-103/3,3A, Opp. Boys Hotel, Parameshwara Theatre Road, Shadnagar, Rangareddy, TS - 509202',
      whatsapp: '919130640765',
      hours: 'Mon-Sat: 9AM - 7PM | Sun: 10AM - 5PM'
    }
  });
});

// ===== SERVE MAIN HTML =====
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`\n🪵 Meem Timber Depot Server Running!`);
  console.log(`📍 Local:   http://localhost:${PORT}`);
  console.log(`🖼️  Images:  http://localhost:${PORT}/images/slide1.png`);
  console.log(`📡 API:     http://localhost:${PORT}/api/images\n`);
});

module.exports = app;
