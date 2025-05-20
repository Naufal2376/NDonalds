AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: true,
})

function createStars() {
  const stars = document.querySelector(".stars")
  const count = 200

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div")
    star.classList.add("star")

    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    const size = Math.random() * 2

    const delay = Math.random() * 5

    star.style.left = `${x}px`
    star.style.top = `${y}px`
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.animationDelay = `${delay}s`

    stars.appendChild(star)
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(11, 15, 44, 0.90)"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    navbar.style.borderBottom = "1px solid rgba(93, 52, 255, 0.2)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "transparent"
    navbar.style.boxShadow = "none"
    navbar.style.borderBottom = "none"
    navbar.style.backdropFilter = "none"
  }
})

window.addEventListener("load", createStars)

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault()

    emailjs.sendForm("service_mfdlsyb", "template_hokjhvp", this).then(
      function () {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been successfully delivered 🚀",
          icon: "success",
          background: "#1a237e",
          color: "#ffffff",
          confirmButtonColor: "#5d34ff",
        })
        document.getElementById("contact-form").reset()
      },
      function (error) {
        Swal.fire({
          title: "Failed to Send",
          text: "Oops, something went wrong 😞",
          icon: "error",
          background: "#1a237e",
          color: "#ffffff",
          confirmButtonColor: "#5d34ff",
        })
      }
    )
  })

const app = document.getElementById("typewriter")

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
  deleteSpeed: 30,
  cursor: "|",
})

typewriter
  .typeString("INNOVATE")
  .pauseFor(1200)
  .deleteAll()
  .typeString("INTEGRATE")
  .pauseFor(1200)
  .deleteAll()
  .typeString("ELEVATE")
  .pauseFor(1200)
  .deleteAll()
  .start()
