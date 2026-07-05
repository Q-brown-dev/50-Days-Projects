const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const Msg = document.getElementById("formMsg");
        Msg.textContent = "Sending..."
        setTimeout(() => {
            Msg.textContent = "Thanks — your message was sent (demo).'";
            contactForm.reset();
        }, 600)
    })
}