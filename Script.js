function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#perfil img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/retrato alegre ao entardecer.png")
  } else {
    img.setAttribute("src", "/Assets/Noite tranquila em varanda acolhedora.png")
  }
  const altText = html.classList.contains("light")
    ? "Foto de perfil do Mayk Brito, com óculos escuro, barba e cabelo curto"
    : "Foto de perfil da Marina, com cabelo solto e sorrindo"
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
