function disableSubmit() {
  document.querySelector("#submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
  });
}
