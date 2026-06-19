// EmailJS Configuration Keys
// Service ID: service_3wyzj2h
// Template ID: template_hs55b8
// Public Key: user_hEvFFvKV8WJkG9qTY

//template_hs55b8
//service_3wyzj2h
//user_hEvFFvKV8WJkG9qTY

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i=0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function contact() {
 event.preventDefault();
 const loading = document.querySelector('.modal__overlay--loading');
 const success = document.querySelector('.modal__overlay--success');
 loading.classList += " modal__overlay--visible";
 emailjs
  .sendForm(
    'service_3wyzj2h', 
    'template_hs55b8',
    event.target,
    'user_hEvFFvKV8WJkG9qTY' 
 ).then(() => {  
   loading.classList.remove("modal__overlay--loading");
   success.classList += " modal__overlay--visible";
 }).catch(() => {
   loading.classList.remove("modal__overlay--visible");
   alert(
    "The email service is currently unavailable. Please contact me directly at joshuakaufman3827@gmail.com"
   );
 });
}

let isModalOpen = false;
function toggleModal() {
 if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}
