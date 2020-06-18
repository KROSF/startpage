const search = document.querySelector("#search");
const q = document.querySelector("#q");

const enginesQueries = {
  yt: (query) => {
    window.location = `https://youtube.com/results?search_query=${query
      .substr(3)
      .replace(/ /g, "+")}`;
  },
  gh: (query) => {
    window.location = `https://github.com/search?q=${query
      .substr(3)
      .replace(/ /g, "+")}`;
  },
  rd: (query) => {
    window.location = `https://reddit.com/search/?q=${query
      .substr(3)
      .replace(/ /g, "%20")}`;
  },
  default: (query) => {
    window.location = `https://google.com/search?q=${query.replace(/ /g, "+")}`;
  },
};

const enginesIcons = {
  yt: "fab fa-youtube",
  gh: "fab fa-github",
  rd: "fab fa-reddit",
  default: "fab fa-google",
};

search.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(q.value);
  const search = enginesQueries[q.value.substr(0, 2)] || enginesQueries.default;
  search(q.value);
});

q.addEventListener("input", (event) => {
  const submit = document.querySelector("#search .w i");
  const icon =
    enginesIcons[event.target.value.substr(0, 2)] || enginesIcons.default;
  submit.className = icon;
});
