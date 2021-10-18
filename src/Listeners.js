function Listeners() {
  document.querySelector("#submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#submitBtn").addEventListener("click", addTask());
  });
}
