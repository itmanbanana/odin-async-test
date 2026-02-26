const img = document.createElement("img");
const key = process.env.GIPHY_KEY;
const body = document.querySelector("body");
const search = document.querySelector("input#search");
const submitSearch = document.querySelector("button.search-button");
submitSearch.addEventListener("click", (e) => {
    e.preventDefault();
    searchForImage(search.value);
    search.value = "";
});
async function searchForImage(query) {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${query}`;
    fetch(url)
        .then(response => response.json())
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response) => {
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
        body.appendChild(img);
    })
        .catch(error => console.error(error));
}
export {};
//# sourceMappingURL=index.js.map