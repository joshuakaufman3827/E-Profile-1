// EmailJS Configuration Keys
// Service ID: service_3wyzj2h
// Template ID: template_hs55b8
// Public Key: user_hEvFFvKV8WJkG9qTY

let contrastToggle = false;
const scaleFactor = 1 / 20;

/**
 * Creates an interactive parallax shift on background geometric shapes 
 * based on the user's desktop mouse movements.
 */
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

/**
 * Toggles global dark theme rendering parameters on the document body element.
 */
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    // FIXED: Removed accidental leading whitespace string bug (" dark-theme")
    document.body.classList.add("dark-theme"); 
  } else {
    document.body.classList.remove("dark-theme");
  }
}

/**
 * Processes form data, invokes EmailJS asynchronously, and manages 
 * localized submission visual component states.
 */
function contact(event) {
  event.preventDefault();
  
  const submitButton = document.getElementById("contact__submit");
  const originalButtonText = submitButton.innerText;
  
  // Visual Loading Feedback
  submitButton.style.backgroundColor = "#7026DE";
  submitButton.innerText = "Sending...";
  submitButton.disabled = true;

  // Execute EmailJS Service Email dispatch
  emailjs.sendForm(
    'service_3wyzj2h', 
    'template_hs55b8',
    event.target,
    'user_hEvFFvKV8WJkG9qTY' 
  )
  .then(() => {
    // Clear the form fields
    event.target.reset();
    
    // Visual Success Feedback
    submitButton.style.backgroundColor = "#4bb543";
    submitButton.innerText = "Thanks for reaching out!";
    
    // Revert button state back after a temporary window delay
    setTimeout(() => {
      submitButton.style.backgroundColor = "";
      submitButton.innerText = originalButtonText;
      submitButton.disabled = false;
    }, 4000);
  })
  .catch((error) => {
    console.error("EmailJS Form Dispatch Failed:", error);
    
    // Reset loader button view state
    submitButton.style.backgroundColor = "#f06449";
    submitButton.innerText = "Error! Try Again.";
    submitButton.disabled = false;
    
    alert(
      "The email service is currently experiencing technical issues. Please email me directly at joshuakaufman3827@gmail.com"
    );
  });
}