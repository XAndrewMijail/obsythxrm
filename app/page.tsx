import { useState, useEffect } from ‘react’;

export default function ObsythPage() {
const [activeModal, setActiveModal] = useState(false);
const [selectedPlan, setSelectedPlan] = useState({ name: ‘’, price: ‘’, wallet: ‘’ });
const [activeFaq, setActiveFaq] = useState<number | null>(null);

useEffect(() => {
// Crear partículas
const particlesContainer = document.querySelector(’.particles’);
if (particlesContainer) {
for (let i = 0; i < 50; i++) {
const particle = document.createElement(‘div’);
particle.className = ‘particle’;
const size = Math.random() * 5;
particle.style.width = size + ‘px’;
particle.style.height = size + ‘px’;
particle.style.left = Math.random() * 100 + ‘%’;
particle.style.animationDelay = Math.random() * 15 + ‘s’;
particle.style.animationDuration = (Math.random() * 10 + 10) + ‘s’;
particlesContainer.appendChild(particle);
}
}
}, []);

const openPayment = (name: string, price: string, wallet: string) => {
setSelectedPlan({ name, price, wallet });
setActiveModal(true);
document.body.style.overflow = ‘hidden’;
};

const closePayment = () => {
setActiveModal(false);
document.body.style.overflow = ‘auto’;
};

const toggleFaq = (index: number) => {
setActiveFaq(activeFaq === index ? null : index);
};

const scrollToSection = (id: string) => {
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
}
};

const faqs = [
{
question: ‘¿Cómo funciona Obsyth?’,
answer: ‘Obsyth es una herramienta de línea de comandos (CMD) que utiliza algoritmos avanzados para buscar wallets perdidas con saldo en diferentes blockchains. El sistema escanea de manera eficiente y segura.’
},
{
question: ‘¿Es legal usar Obsyth?’,
answer: ‘Sí, Obsyth busca wallets abandonadas o perdidas en la blockchain pública. Todas las operaciones son completamente legales y transparentes.’
},
{
question: ‘¿Qué tan rápido veré resultados?’,
answer: ‘Los resultados varían según el plan y la suerte. Algunos usuarios encuentran wallets en las primeras horas, mientras que otros pueden tardar días. El sistema está optimizado para máxima eficiencia.’
},
{
question: ‘¿Necesito conocimientos técnicos?’,
answer: ‘No necesitas ser un experto. Obsyth viene con instrucciones claras y soporte 24/7 para ayudarte en cada paso del proceso.’
},
{
question: ‘¿Qué métodos de pago aceptan?’,
answer: ‘Aceptamos pagos en USDT a través de Tron (TRC20), BSC (BEP20) y Polygon. Elige la red que prefieras al momento de comprar.’
},
{
question: ‘¿Ofrecen reembolsos?’,
answer: ‘Debido a la naturaleza digital del producto, no ofrecemos reembolsos. Sin embargo, garantizamos soporte completo y actualizaciones continuas para asegurar tu satisfacción.’
}
];

const testimonials = [
{
stars: 5,
text: ‘Increíble herramienta. En mi primer día recuperé una wallet con 0.3 BTC. La inversión se pagó sola en horas. Totalmente recomendado.’,
author: ‘Carlos M.’
},
{
stars: 5,
text: ‘El plan profesional es perfecto. He encontrado múltiples wallets con ETH. El soporte es excelente y siempre están disponibles.’,
author: ‘Ana G.’
},
{
stars: 5,
text: ‘Llevo 3 meses usando Obsyth y las ganancias son reales. La herramienta es fácil de usar y muy efectiva. Vale cada centavo.’,
author: ‘Miguel R.’
},
{
stars: 4,
text: ‘Excelente servicio. El algoritmo de búsqueda es muy eficiente. Solo le daría 5 estrellas si tuviera más opciones de blockchain.’,
author: ‘Laura P.’
},
{
stars: 5,
text: ‘Plan Premium totalmente justificado. La velocidad de búsqueda en las tres blockchains es impresionante. ROI en menos de una semana.’,
author: ‘David L.’
},
{
stars: 5,
text: ‘Obsyth cambió mi perspectiva sobre la recuperación de wallets. Profesional, confiable y con resultados comprobados.’,
author: ‘Sofia K.’
}
];

return (
<>
<style jsx global>{`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

```
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #000000;
      color: #ffffff;
      overflow-x: hidden;
    }

    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      border-bottom: 1px solid rgba(0, 122, 255, 0.1);
    }

    .logo {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 4px;
      background: linear-gradient(135deg, #007AFF, #00D4FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 122, 255, 0.5)); }
      50% { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.8)); }
    }

    .nav-links {
      display: flex;
      gap: 40px;
    }

    .nav-link {
      color: #ffffff;
      text-decoration: none;
      font-size: 16px;
      transition: all 0.3s;
      position: relative;
      cursor: pointer;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #007AFF;
      transition: width 0.3s;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
    }

    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      background: rgba(0, 122, 255, 0.3);
      border-radius: 50%;
      animation: float 15s infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
    }

    .hero-content {
      text-align: center;
      z-index: 10;
      padding: 0 20px;
    }

    .hero h1 {
      font-size: 72px;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff, #007AFF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: slideDown 1s ease-out;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero p {
      font-size: 24px;
      color: #aaaaaa;
      margin-bottom: 40px;
      animation: fadeIn 1.5s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .cta-button {
      display: inline-block;
      padding: 18px 50px;
      background: linear-gradient(135deg, #007AFF, #00D4FF);
      color: #ffffff;
      text-decoration: none;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 600;
      transition: all 0.3s;
      box-shadow: 0 10px 30px rgba(0, 122, 255, 0.3);
      animation: pulse 2s infinite;
      cursor: pointer;
      border: none;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 122, 255, 0.5);
    }

    .section {
      padding: 100px 50px;
      position: relative;
    }

    .section-title {
      text-align: center;
      font-size: 48px;
      margin-bottom: 60px;
      background: linear-gradient(135deg, #ffffff, #007AFF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .plans-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .plan-card {
      background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
      border: 2px solid rgba(0, 122, 255, 0.2);
      border-radius: 20px;
      padding: 40px;
      transition: all 0.4s;
      position: relative;
      overflow: hidden;
    }

    .plan-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(0, 122, 255, 0.1), transparent);
      transform: rotate(45deg);
      transition: all 0.6s;
    }

    .plan-card:hover::before {
      left: 100%;
    }

    .plan-card:hover {
      transform: translateY(-10px);
      border-color: #007AFF;
      box-shadow: 0 20px 60px rgba(0, 122, 255, 0.3);
    }

    .plan-card.featured {
      border-color: #007AFF;
      box-shadow: 0 10px 40px rgba(0, 122, 255, 0.2);
    }

    .plan-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #007AFF, #00D4FF);
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .plan-name {
      font-size: 28px;
      margin-bottom: 10px;
      color: #ffffff;
    }

    .plan-price {
      font-size: 48px;
      font-weight: 700;
      color: #007AFF;
      margin-bottom: 20px;
    }

    .plan-price span {
      font-size: 20px;
      color: #aaaaaa;
    }

    .plan-features {
      list-style: none;
      margin-bottom: 30px;
    }

    .plan-features li {
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      color: #cccccc;
    }

    .plan-features li::before {
      content: '✓';
      color: #007AFF;
      font-weight: bold;
      margin-right: 10px;
    }

    .plan-button {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #007AFF, #00D4FF);
      border: none;
      border-radius: 10px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .plan-button:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(0, 122, 255, 0.4);
    }

    .rating {
      text-align: center;
      margin: 40px 0;
    }

    .rating-stars {
      font-size: 48px;
      color: #FFD700;
    }

    .rating-text {
      font-size: 24px;
      color: #ffffff;
      margin-top: 10px;
    }

    .testimonials-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .testimonial-card {
      background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
      border: 1px solid rgba(0, 122, 255, 0.2);
      border-radius: 15px;
      padding: 30px;
      transition: all 0.3s;
    }

    .testimonial-card:hover {
      border-color: #007AFF;
      transform: translateY(-5px);
    }

    .stars {
      color: #FFD700;
      font-size: 20px;
      margin-bottom: 15px;
    }

    .testimonial-text {
      color: #cccccc;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .testimonial-author {
      color: #007AFF;
      font-weight: 600;
    }

    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
      border: 1px solid rgba(0, 122, 255, 0.2);
      border-radius: 10px;
      margin-bottom: 20px;
      overflow: hidden;
      transition: all 0.3s;
    }

    .faq-question {
      padding: 25px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .faq-question:hover {
      color: #007AFF;
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s, padding 0.3s;
      padding: 0 25px;
      color: #aaaaaa;
    }

    .faq-item.active .faq-answer {
      max-height: 200px;
      padding: 0 25px 25px 25px;
    }

    .faq-icon {
      transition: transform 0.3s;
    }

    .faq-item.active .faq-icon {
      transform: rotate(180deg);
    }

    .payment-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      z-index: 2000;
      justify-content: center;
      align-items: center;
    }

    .payment-modal.active {
      display: flex;
    }

    .payment-content {
      background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
      border: 2px solid #007AFF;
      border-radius: 20px;
      padding: 40px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      animation: modalSlide 0.3s ease-out;
      position: relative;
    }

    @keyframes modalSlide {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .close-modal {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 40px;
      color: #ffffff;
      cursor: pointer;
      transition: all 0.3s;
      background: none;
      border: none;
    }

    .close-modal:hover {
      color: #007AFF;
      transform: rotate(90deg);
    }

    .qr-placeholder {
      width: 250px;
      height: 250px;
      margin: 30px auto;
      background: #1a1a1a;
      border: 2px dashed #007AFF;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
    }

    .wallet-address {
      background: #0a0a0a;
      padding: 15px;
      border-radius: 10px;
      border: 1px solid #007AFF;
      word-break: break-all;
      font-family: monospace;
      color: #00D4FF;
      margin-top: 20px;
    }

    .footer {
      text-align: center;
      padding: 40px;
      background: #0a0a0a;
      border-top: 1px solid rgba(0, 122, 255, 0.2);
    }

    @media (max-width: 768px) {
      .hero h1 { font-size: 42px; }
      .section-title { font-size: 36px; }
      .navbar { padding: 15px 20px; }
      .nav-links { gap: 20px; }
    }
  `}</style>

  <nav className="navbar">
    <div className="logo">OBSYTH</div>
    <div className="nav-links">
      <span className="nav-link" onClick={() => scrollToSection('inicio')}>Inicio</span>
      <span className="nav-link" onClick={() => scrollToSection('planes')}>Planes</span>
      <span className="nav-link" onClick={() => scrollToSection('testimonios')}>Testimonios</span>
      <span className="nav-link" onClick={() => scrollToSection('faq')}>FAQ</span>
    </div>
  </nav>

  <section id="inicio" className="hero">
    <div className="particles"></div>
    <div className="hero-content">
      <h1>OBSYTH</h1>
      <p>Recupera Wallets Perdidas con Saldo - Ganancias Jugosas</p>
      <button className="cta-button" onClick={() => scrollToSection('planes')}>
        Comienza Ahora
      </button>
    </div>
  </section>

  <section id="planes" className="section">
    <h2 className="section-title">Nuestros Planes</h2>
    <div className="plans-container">
      <div className="plan-card">
        <div className="plan-name">BÁSICO</div>
        <div className="plan-price">70 <span>USDT</span></div>
        <ul className="plan-features">
          <li>Búsqueda en Blockchain BTC</li>
          <li>Comando CMD Avanzado</li>
          <li>Soporte 24/7</li>
          <li>Actualizaciones Gratis</li>
        </ul>
        <button 
          className="plan-button" 
          onClick={() => openPayment('BÁSICO', '70', 'TU_WALLET_TRON_AQUI')}
        >
          Comprar Ahora
        </button>
      </div>

      <div className="plan-card featured">
        <div className="plan-badge">POPULAR</div>
        <div className="plan-name">PROFESIONAL</div>
        <div className="plan-price">120 <span>USDT</span></div>
        <ul className="plan-features">
          <li>Búsqueda en BTC + ETH</li>
          <li>Algoritmos Optimizados</li>
          <li>Soporte Prioritario</li>
          <li>Actualizaciones Premium</li>
          <li>Reportes Detallados</li>
        </ul>
        <button 
          className="plan-button" 
          onClick={() => openPayment('PROFESIONAL', '120', 'TU_WALLET_BSC_AQUI')}
        >
          Comprar Ahora
        </button>
      </div>

      <div className="plan-card">
        <div className="plan-badge">ELITE</div>
        <div className="plan-name">PREMIUM</div>
        <div className="plan-price">200 <span>USDT</span></div>
        <ul className="plan-features">
          <li>Búsqueda en BTC + ETH + BNB</li>
          <li>Máxima Velocidad</li>
          <li>Soporte VIP 24/7</li>
          <li>Todas las Actualizaciones</li>
          <li>Analytics Avanzados</li>
          <li>Configuración Personalizada</li>
        </ul>
        <button 
          className="plan-button" 
          onClick={() => openPayment('PREMIUM', '200', 'TU_WALLET_POLYGON_AQUI')}
        >
          Comprar Ahora
        </button>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="rating">
      <div className="rating-stars">★★★★★</div>
      <div className="rating-text">4.8 / 5.0 - Basado en 1,247 reseñas</div>
    </div>
  </section>

  <section id="testimonios" className="section">
    <h2 className="section-title">Testimonios</h2>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="stars">
            {'★'.repeat(testimonial.stars)}
            {'☆'.repeat(5 - testimonial.stars)}
          </div>
          <p className="testimonial-text">{testimonial.text}</p>
          <div className="testimonial-author">- {testimonial.author}</div>
        </div>
      ))}
    </div>
  </section>

  <section id="faq" className="section">
    <h2 className="section-title">Preguntas Frecuentes</h2>
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeFaq === index ? 'active' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span className="faq-icon">▼</span>
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </section>

  <div className={`payment-modal ${activeModal ? 'active' : ''}`} onClick={closePayment}>
    <div className="payment-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={closePayment}>&times;</button>
      <h2>Plan {selectedPlan.name}</h2>
      <p style={{ fontSize: '36px', color: '#007AFF', margin: '20px 0' }}>
        {selectedPlan.price} USDT
      </p>
      
      <div className="qr-placeholder">
        <span>Coloca tu QR aquí</span>
      </div>
      
      <p style={{ color: '#aaaaaa', marginBottom: '10px' }}>Dirección de Wallet:</p>
      <div className="wallet-address">{selectedPlan.wallet}</div>
      
      <p style={{ color: '#666', marginTop: '20px', fontSize: '14px' }}>
        Envía el pago y contacta a soporte con tu comprobante
      </p>
    </div>
  </div>

  <footer className="footer">
    <p>&copy; 2025 OBSYTH. Todos los derechos reservados.</p>
    <p style={{ color: '#666', marginTop: '10px' }}>
      Recuperación de Wallets Blockchain Profesional
    </p>
  </footer>
</>
```

);
}