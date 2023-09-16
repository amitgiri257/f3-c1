const apikey="d2749c3a";
const url="https://www.omdbapi.com/?";

const searchButton=document.getElementById("searchButton")
const searchInput=document.getElementById("search");
const loader = document.getElementById("loader");

async function SearchName(searchVAlue){
    // https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={API_KEY}
const endpoint =`${url}s=${searchVAlue}&apikey=${apikey}`;
try{
    const response= await fetch(endpoint);
const result= await response.json();
loader.style.display = "block";

console.log(result.Search);


 for(let index=0; index<result.Search.length;index++){
    let poster=result.Search[index].Poster;
let Title=result.Search[index].Title;
let Year=result.Search[index].Year;
let imdbID=result.Search[index].imdbID;

const container = document.getElementById("container");

    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=
    `
    <div class="poster">
<img id="movie-poster" src="${poster}" alt="movie-poster">
</div>
<div class="info">
<div class="title">${Title}</div>

</div>
<div class="more-Details">
<div class="year">${Year}</div>
<button id="more">More Details</button></div>
    `;
    container.appendChild(div);
};

const moreDetails=document.getElementById("more");
moreDetails.addEventListener("click",()=> {
    const imdbID =result.Search[index].imdbID;
    var redirectUrl = `https://www.imdb.com/title/tt${imdbID}/?ref_=${imdbID}`

    // Redirect to the specified URL
    window.location.href = redirectUrl;
})
  loader.style.display = "none";
}
catch(error){
    console.log("some error occured");
}
}

searchButton.addEventListener("click",()=> {
    const searchVAlue=searchInput.value ;
    SearchName(searchVAlue);
})

SearchName("");
