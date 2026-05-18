function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#perfil img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/Retrato-alegre-ao-enterdar.png")
  } else {
    img.setAttribute(
      "src",
      "./Assets/Noite-tranquila-em-varanda-acolhedora.png",
    )
  }
  const altText = html.classList.contains("light")
    ? "Retrato alegre da Marina, com cabelo solto e sorrindo"
    : "Noite tranquila em varanda acolhedora, com a Marina sorrindo e cabelo solto"
  img.setAttribute("alt", altText)
}

const btn = document.getElementById("btn")
const overlay = document.getElementById("overlay")

// Adiciona um evento de clique ao botão para mostrar o overlay
btn.addEventListener("click", () => {
  overlay.classList.add("active")
})

// Adiciona um evento de clique ao overlay para esconder o overlay quando clicar fora da modal
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active")
  }
})

// Adiciona um evento de teclado para esconder o overlay quando pressionar a tecla "Escape"
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("active")
  }
})
