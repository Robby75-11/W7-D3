document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    if (!response.ok) throw new Error("Errore nella risposta del server");
    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error("Errore nel recupero dei libri:", error.message);
    document.getElementById(
      "books-container"
    ).innerHTML = `<p class='text-danger text-center'>Impossibile caricare i libri. Riprova più tardi.</p>`;
  }
});
function renderBooks(books) {
  const container = document.getElementById("books-container");
  container.innerHTML = ""; // Svuota il contenitore prima di riempirlo
  books.forEach((book) => {
    const card = createBookCard(book);
    container.appendChild(card);
  });
}

function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
  card.innerHTML = `
     `;
  card.querySelector(".scarta").addEventListener("click", () => card.remove());
  return card;
}
