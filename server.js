const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:", "https://images.unsplash.com"],
      connectSrc: ["'self'"],
      frameSrc: ["https://www.google.com", "https://maps.google.com"],
    },
  },
}));

// ===== STATIC FILES =====
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag: true,
}));

// ===== API ROUTES =====
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
  res.json({ success: true, data: { heroImages, aboutImages } });
});

app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    data: {
      phones: ['9130640765', '8977800536', '8019200536'],
      email: 'Meemtimber@gmail.com',
      address: 'Sub Registrar Office Rd, Shadnagar, Telangana 509216',
      whatsapp: '919130640765',
      mapsUrl: 'https://www.google.com/maps/place/Meem+Timber+Depot/data=!4m2!3m1!1s0x0:0x2c87a81c4e69d56e',
      hours: 'Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM'
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
  console.log(`📡 API:     http://localhost:${PORT}/api/images`);
  console.log(`📧 Email:   Meemtimber@gmail.com\n`);
});

module.exports = app;
