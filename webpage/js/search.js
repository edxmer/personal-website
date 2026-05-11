
const dialog = document.getElementById("search-modal");
const searchbox = document.getElementById("search-input");
const results = document.getElementById("search-results");

// Manual search indexing xddddd
const search_index = [
  { title: "main", url: "index.html#", keywords: "index homepage" },
  { title: "main#about-me", url: "index.html#about-me", keywords: "about me introduction" },
  { title: "main#interests", url: "index.html#interests", keywords: "intersts hobbies hobby" },
  { title: "main#spoken-languages", url: "index.html#spoken-languages", keywords: "spoken languages learning" },
  { title: "main#programming-languages", url: "index.html#programming-languages", keywords: "programming languages coding c++ cpp c python java html css javascript c# cs" },
  { title: "main#meaning-of-the-universe", url: "index.html#meaning-of-the-universe", keywords: "meaning of life everything 42" },
  { title: "projects", url: "projects.html#", keywords: "github"},
  { title: "projects#where-to-find-them", url: "projects.html#where-to-find-them", keywords: "github where to find them my projects"},
  { title: "projects#minigrad", url: "projects.html#minigrad", keywords: "gradient descent backpropogation python"},
  { title: "projects#goons", url: "projects.html#goons", keywords: "goons game gooning steam gamemaker"},
  { title: "projects#structogram-viewer", url: "projects.html#structogram-viewer", keywords: "structogram viewer algorithms and data structures python html css js javacsript"},
  { title: "projects#character-level-language-model", url: "projects.html#character-level-language-model", keywords: "python pytorch neural networks machine learning backpropogation gradient descent"},
  { title: "projects#competitive-programming", url: "projects.html#competitive-programming", keywords: "c++ cpp cses problemset problems leetcode codeforces" },
  { title: "projects#this-website", url: "projects.html#this-website", keywords: "" },
  { title: "cheat-sheets", url: "cheat-sheets.html", keywords: "shortcuts cheat sheets tips" },
  { title: "cheat-sheets#terminal", url: "cheat-sheets.html#terminal", keywords: "unix bash shell shortcuts cheat sheets" },
  { title: "cheat-sheets#vim", url: "cheat-sheets.html#vim", keywords: "vim commands keybinds cheat sheets tips" },
  { title: "cheat-sheets#vscode", url: "cheat-sheets.html#vscode", keywords: "visual studio code cheat sheet keybinds tips" },
  { title: "cheat-sheets#maths", url: "cheat-sheets.html#maths", keywords: "3b1b video youtube math linear algebra reference pdf" },
  { title: "resources", url: "resources.html", keywords: "references" },
  { title: "resources#elte", url: "resources.html#elte", keywords: "eötvös loránd tudományegyetem ik informatikai kar" },
  { title: "resources#study", url: "resources.html#study", keywords: "notebooklm" },
  { title: "resources#AI", url: "resources.html#AI", keywords: "gemini claude chatgpt" },
  { title: "resources#free-stuff", url: "resources.html#free-stuff", keywords: "freemediaheckyeah fmhy free stuff" },
  { title: "resources#configs", url: "resources.html#configs", keywords: "config files configurations" },
  { title: "resources#web-dev", url: "resources.html#web-dev", keywords: "website development web dev" },
  { title: "resources#color-themes", url: "resources.html#color-themes", keywords: "color themes catppuccin rose pine rosé pine" },
]

const MAX_DISPLAYED_MATCHES = 8;

let matches = [];
let selectedIndex = 0;

// opens the search dialog
function openSearch() {
  dialog.showModal();
  matches = [];
  selectedIndex = 0;
  results.innerHTML = "";
  searchbox.value = "";
  searchbox.focus();
  setTimeout(() => {
    dialog.classList.add("visible");
  }, 10);
}

// closes search, duhh
function closeSearch() {
  dialog.classList.remove("visible");
  setTimeout(() => {
    dialog.close();
    matches = [];
    results.innerHTML = "";
    selectedIndex = 0;
  }, 200);
}

// draw search results. Uses the `matches` and `selectedIndex` variables
function drawMatches() {
  results.innerHTML = "";
  let i = 0;
  for (; i < matches.length && i < MAX_DISPLAYED_MATCHES; ++i) {
    const m = matches[i];
    if (i === selectedIndex) results.innerHTML += `<li><a class="selected" href="${m.url}">${m.title}</a></li>`;
    else results.innerHTML += `<li><a href="${m.url}">${m.title}</a></li>`;
  }

  if (i < matches.length) {
    results.innerHTML += "<li><span>...</span></li>";
  }
  
  if (matches.length === 0) {
    results.innerHTML = "<li><span>no results</span></li>";
  }
}

// event listener for opening and closing the search dialog by keypresses
document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    dialog.open ? closeSearch() : openSearch();
  }

  if (e.key === "Escape" && dialog.open) {
    e.preventDefault();
    closeSearch();
  }
});

// close search when clicking on the backdrop
dialog.addEventListener("click", e => {
  if (e.target === dialog) closeSearch();
});

// event listener for updates in the search text box
searchbox.addEventListener("input", e => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) return;

  matches = search_index.filter(
    i => i.title.toLowerCase().includes(query) || i.keywords.toLowerCase().includes(query)
  );
  
  selectedIndex = 0;
  drawMatches();
});

// enter, Down and Up event listener for the search text box
searchbox.addEventListener("keydown", e => {
  if (e.key === "Enter" && selectedIndex < matches.length) {
    closeSearch();
    window.location.href = matches[selectedIndex].url;
  }
  else if (e.key === "ArrowUp" && 0 < selectedIndex) {
    e.preventDefault();
    --selectedIndex;
    drawMatches();
  }
  else if (e.key === "ArrowDown" && selectedIndex < matches.length - 1 && selectedIndex < MAX_DISPLAYED_MATCHES - 1) {
    e.preventDefault();
    ++selectedIndex;
    drawMatches();
  }
});