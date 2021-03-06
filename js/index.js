const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Link number 7",
    "nav-item-8": "Link number 8",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//nav
const nav = document.querySelector('nav');
const anchorAppend = nav.appendChild(document.createElement('a'));
anchorAppend.setAttribute('href', '#');

const anchors = document.querySelectorAll('header nav a');
for (let i=0; i<anchors.length; i++) {
  anchors[i].textContent = siteContent.nav['nav-item-' + (i+1)];
  anchors[i].style.color = 'green';
}

nav.prepend(document.createElement('a'));
const anchorPrepend = document.querySelector('nav a')
anchorPrepend.setAttribute('href', '#');
anchorPrepend.textContent = siteContent.nav['nav-item-8'];
anchorPrepend.style.color = 'green';


//content
const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent.cta['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];

const textContents = document.querySelectorAll('.text-content h4');
textContents[0].textContent = siteContent['main-content']['features-h4'];
textContents[1].textContent = siteContent['main-content']['about-h4'];
textContents[2].textContent = siteContent['main-content']['services-h4'];
textContents[3].textContent = siteContent['main-content']['product-h4'];
textContents[4].textContent = siteContent['main-content']['vision-h4'];

const textContentsParagraphs = document.querySelectorAll('.text-content p');
textContentsParagraphs[0].textContent = siteContent['main-content']['features-content'];
textContentsParagraphs[1].textContent = siteContent['main-content']['about-content'];
textContentsParagraphs[2].textContent = siteContent['main-content']['services-content'];
textContentsParagraphs[3].textContent = siteContent['main-content']['product-content'];
textContentsParagraphs[4].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent['contact']['address'];
contactParagraphs[1].textContent = siteContent['contact']['phone'];
contactParagraphs[2].textContent = siteContent['contact']['email'];


//footer
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];