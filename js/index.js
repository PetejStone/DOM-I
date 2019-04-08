const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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

///////Beginning of variables
const navItems = document.querySelectorAll('nav a');
const headerImg = document.querySelector('header img');
const mainHeading = document.querySelector('.cta h1');
const headingButton = document.querySelector('.cta button');
const headingImg = document.querySelector('.cta img');
const features = document.querySelector('.top-content').children[0];
const about = document.querySelector('.top-content').children[1];
const middleImg = document.querySelector('#middle-img');
const services = document.querySelector('.bottom-content').children[0];
const product = document.querySelector('.bottom-content').children[1];
const vision = document.querySelector('.bottom-content').children[2];
const contact = document.querySelector('.contact');
const contactAddess = document.querySelector('.contact').children[1];
const contactPhone = document.querySelector('.contact').children[2];
const contactEmail = document.querySelector('.contact').children[3];
const footer = document.querySelector('footer');
////////////end of variables


//nav content
navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";
headerImg.setAttribute('src', "img/logo.png");
////

//cta content
mainHeading.innerHTML = "DOM Is Awesome!"
headingImg.setAttribute('src', "img/header-img.png");
headingButton.innerHTML = "Get Started";
////

///features content
features.children[0].innerHTML = "Features";
features.children[1].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
/////

///about content
about.children[0].innerHTML = "About";
about.children[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
/////

//middle img
middleImg.setAttribute('src', "img/mid-page-accent.jpg" );
///

//services content
services.children[0].innerHTML = "Services"
services.children[1].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
////

///Product content
product.children[0].innerHTML = "Product"
product.children[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

////

///vision content
vision.children[0].innerHTML = "Vision"
vision.children[1].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
////

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
