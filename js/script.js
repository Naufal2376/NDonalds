// Initialize AOS animation
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: true,
})

// Create stars
function createStars() {
  const stars = document.querySelector(".stars")
  const count = 200

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div")
    star.classList.add("star")

    // Random position
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)

    // Random size
    const size = Math.random() * 2

    // Random animation delay
    const delay = Math.random() * 5

    star.style.left = `${x}px`
    star.style.top = `${y}px`
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.animationDelay = `${delay}s`

    stars.appendChild(star)
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(11, 15, 44, 0.90)"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    navbar.style.borderBottom = "1px solid rgba(93, 52, 255, 0.2)"
  } else {
    navbar.style.background = "transparent"
    navbar.style.boxShadow = "none"
    navbar.style.borderBottom = "none"
  }
})

// Call the function when page loads
window.addEventListener("load", createStars)
