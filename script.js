const movies = [
  {
    title: "RRR",
    ott: "Netflix",
    image: "https://via.placeholder.com/300x450"
  },
  {
    title: "KGF",
    ott: "ZEE5",
    image: "https://via.placeholder.com/300x450"
  }
];

function display(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach(movie => {
    grid.innerHTML += `
      <div class="card">
        <img src="${movie.image}">
        <p>${movie.title}</p>
      </div>
    `;
  });
}

function filter(ott) {
  if (ott === "All") {
    display(movies);
  } else {
    display(movies.filter(m => m.ott === ott));
  }
}

display(movies);
