/* ===============================
   Fresh Cut Barbershop Script
   =============================== */

/* Smooth Scroll Navigation */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* Appointment Form Handling */
const form = document.querySelector("form");

if(form){

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const date = form.querySelector('input[type="date"]').value;

    // Basic validation
    if(name === "" || phone === "" || date === ""){
      alert("Please fill out all required fields.");
      return;
    }

    // Simulate sending request
    const button = form.querySelector("button");
    button.innerText = "Sending...";
    button.disabled = true;

    setTimeout(() => {

      form.innerHTML = `
        <div style="
          background:#0f2233;
          padding:30px;
          border-radius:12px;
          text-align:center;
        ">
          <h2>Appointment Request Sent!</h2>
          <p>Thank you, ${name}.</p>
          <p>We will contact you shortly to confirm your appointment.</p>
          <p style="margin-top:10px;">📞 Expect a call within 1 business day.</p>
        </div>
      `;

    }, 1200);

  });

}


/* Navbar Shadow on Scroll */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 4px 18px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

