const learnedDisplay = document.querySelector(".learned-display");

let currentPage = 1;

let previousWords = localStorage.getItem("learnedWords");
if (previousWords) {
  previousWords = JSON.parse(previousWords);
} else {
  previousWords = [];
}

// Display the stored data in the learnedDisplay container
let learnHtmlMarkup = "";
previousWords.forEach((prevWord) => {
  learnHtmlMarkup += `
  <div class="learned-display">
    <p class="concept-info">Word: ${prevWord.word}</p>
    <p class="concept-info">Definition: ${prevWord.definition}</p>
    <p class="concept-info">Usage: ${prevWord.usage}</p>         
  </div>`;
});

learnedDisplay.innerHTML = learnHtmlMarkup;

//maadama aysan xogta ka imaanayn api waxaan awoodi wayay inaan xadido tirada fetchka ama arrays ee aan helay pageka sidaa darradeed kodkan waan ka saaray

// window.addEventListener("scroll", function() {
//     console.log("window.innerHeight=" + window.innerHeight + "px");
//     console.log("window.scrollY=" + window.scrollY + "px");
//     console.log("document.body.offsetHeight" + document.body.offsetHeight + "px");

//     if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         currentPage++;

//     }

// })