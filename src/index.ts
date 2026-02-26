const img: HTMLImageElement = document.createElement("img") as HTMLImageElement;
const key = process.env.GIPHY_KEY;

const body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
const search: HTMLInputElement = document.querySelector("input#search") as HTMLInputElement;
const submitSearch: HTMLButtonElement = document.querySelector("button.search-button") as HTMLButtonElement;

submitSearch.addEventListener("click", (e) => {
  e.preventDefault();
  searchForImage(search.value);
  search.value = "";
});

async function searchForImage(query: string) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${query}`
  fetch(url)
    .then(response => response.json())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((response: any) => {
      console.log(response.data.images.original.url);
      img.src = response.data.images.original.url;
      body.appendChild(img);
    })
    .catch(error => console.error(error));
}