//template_hs55b8
//service_3wyzj2h
//user_hEvFFvKV8WJkG9qTY

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


