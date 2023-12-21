function openGame(game) {
    window.location.href = game + ".html"
}

const gameList = document.getElementById("Games-List");
const searchInput = document.getElementById("GameSearchBar");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const gameCards = gameList.querySelectorAll(".Games-Game");

  gameCards.forEach((card) => {
    const title = card.querySelector(".title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  gameList.style.removeProperty("display");
  gameList.style.removeProperty("flex-wrap");

  const visibleCards = Array.from(gameList.querySelectorAll(".game-card[style='display: block;']"));
});

const gamesContainer = document.getElementById('Games-List');
const games = Array.from(gamesContainer.getElementsByClassName('Games-Game'));

games.sort((a, b) => {
  const titleA = a.querySelector('.title').textContent.toUpperCase();
  const titleB = b.querySelector('.title').textContent.toUpperCase();
  return titleA.localeCompare(titleB);
});

gamesContainer.innerHTML = '';

games.forEach(game => {
  gamesContainer.appendChild(game);
});