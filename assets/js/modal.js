const closeModal = document.getElementById("modal-close");

function removePokeType(element) {
  const classes = element.classList;
  if (classes.length > 0) {
    const lastClass = classes.item(classes.length - 1);
    classes.remove(lastClass);
  }
}

function abrirModal() {
  modal.setAttribute("open", "true")
  overlay.style.display = "block";
  overlay.style.pointerEvents = "auto"
}

overlay.addEventListener("click", () => {
  modal.removeAttribute("open");
  overlay.style.display = "none";
  overlay.style.pointerEvents = "none";
  removePokeType(modal)
})

closeModal.addEventListener("click", () => {
  modal.removeAttribute("open");
  overlay.style.display = "none";
  overlay.style.pointerEvents = "none";
  removePokeType(modal)
});


