const form = document.querySelector("form");
const email = document.querySelector("input");

form.addEventListener('submit', (event)=>{
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email_pattern.test(email.value)){
        event.preventDefault();
        document.querySelector(".hint").style.display = "block";
        email.classList.add("error");
    }
})
