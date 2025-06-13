function toggleMenu() {
  const nav = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  nav.classList.toggle("show");
  hamburger.textContent = nav.classList.contains("show") ? "✖" : "☰";
}

const slides = [
  {
    image: 'images/pic1.jpg',
    tagline: 'Your Trusted Partner For Immigration',
    heading: 'US Immigration Services',
    description: 'Need a visa for the United States? We handle EB5, EB2-NIW, E2, EB3, Visit, and Sponsorship visas.',
    buttonText: 'Find Out More',
    buttonLink: '#'
  },
  {
    image: 'images/pic2.webp',
    tagline: 'Visa Success Stories',
    heading: 'Clients from Around the World',
    description: 'Thousands have trusted us for seamless visa application and approvals.',
    buttonText: 'Read Stories',
    buttonLink: '#stories'
  },
  {
    image: 'images/pic3.jpg',
    tagline: 'Expert Guidance',
    heading: 'Step-by-Step Process',
    description: 'Get expert help at every stage of your visa journey.',
    buttonText: 'Get Started',
    buttonLink: '#process'
  },
  {
    image: 'images/pic4.jpg',
    tagline: 'Transparent Process',
    heading: 'We Value Your Trust',
    description: 'No hidden steps, just honest and efficient visa consultancy.',
    buttonText: 'Learn More',
    buttonLink: '#about'
  }
];

let currentSlide = 0;

const bannerBg = document.getElementById('bannerBg');
const bannerContent = document.getElementById('bannerContent');
const tagline = document.getElementById('tagline');
const heading = document.getElementById('heading');
const description = document.getElementById('description');
const ctaBtn = document.getElementById('ctaBtn');

function updateSlide() {
  bannerContent.classList.add('fade-out');
  bannerBg.style.opacity = 0;

  setTimeout(() => {
    const slide = slides[currentSlide];
    bannerBg.style.backgroundImage = `url('${slide.image}')`;
    tagline.textContent = slide.tagline;
    heading.textContent = slide.heading;
    description.textContent = slide.description;
    ctaBtn.textContent = slide.buttonText;
    ctaBtn.href = slide.buttonLink;

    currentSlide = (currentSlide + 1) % slides.length;

    bannerContent.classList.remove('fade-out');
    bannerBg.style.opacity = 1;
  }, 400);
}

updateSlide();
setInterval(updateSlide, 5000);
