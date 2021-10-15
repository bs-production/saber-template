function AddTransitions() {
  document.querySelector("body").classList.remove("preload");
}

try {
  AddTransitions();
} catch (e) {
  console.log("Could not add transitions back");
}
