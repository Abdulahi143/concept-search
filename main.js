let conceptDisplay = document.querySelector(".concept-display-wrapper");
let searchBtn = document.querySelector(".searchBtn");
let selector = document.querySelector("#concept-areas");
let searchInput = document.querySelector(".search-input");
let learnedCheckBox = document.querySelector("#learned");
const learnedDisplay = document.querySelector(".learned-display");

searchBtn.addEventListener("click", async function () {
  const selected = selector.value;
  let query = searchInput.value.toLowerCase();

  if (!query) return alert("No matching word found");

  if (selected === "") {
    return alert("Please select a choice");
  }

  const request = await fetch('words.json');
  const response = await request.json();

  word = response.find(res => res.word.toLowerCase() === query); // Assign the found word to the 'word' variable

  if (!word) {
    alert("The word you entered is not yet available");
    return;
  }

  if (selected === "all") {
    conceptDisplay.innerHTML = `
      <div class="display">
        <p class="concept-info">Word: ${word.word}</p>
        <p class="concept-info">Definition: ${word.definition}</p>
        <p class="concept-info">Usage: ${word.usage}</p>         
      </div>`;
  } else if (selected === "word") {
    conceptDisplay.innerHTML = `
      <div class="display">
        <p class="concept-info">Word: ${word.word}</p>       
      </div>`;
  } else if (selected === "definition") {
    conceptDisplay.innerHTML = `
      <div class="display">
        <p class="concept-info">Definition: ${word.definition}</p>     
      </div>`;
  } else if (selected === "usage") {
    conceptDisplay.innerHTML = `
      <div class="display">
        <p class="concept-info">Usage: ${word.usage}</p>         
      </div>`;
  } 
  
  learnedCheckBox.checked = "";
});

// Storing to the localStorage for the learned concepts
let word;

let previousWords = localStorage.getItem("learnedWords");
if (previousWords) {
  previousWords = JSON.parse(previousWords);
} else {
  previousWords = [];
}

learnedCheckBox.addEventListener("change", function() {
  if (learnedCheckBox.checked && word) {
    let alreadyStored = previousWords.find(prevWord => prevWord.word == word.word);

    if (!alreadyStored) {
      previousWords.push(word);
      localStorage.setItem("learnedWords", JSON.stringify(previousWords));
    } else {
      alert("The concept is already saved to the learned page!");
    }
  }
});

// // Display the stored data in the learnedDisplay container
// let learnHtmlMarkup = "";
// previousWords.forEach((prevWord) => {
//   learnHtmlMarkup += `
//   <div class="learned-display">
//     <p class="concept-info">Word: ${prevWord.word}</p>
//     <p class="concept-info">Definition: ${prevWord.definition}</p>
//     <p class="concept-info">Usage: ${prevWord.usage}</p>         
//   </div>`;
// });

// learnedDisplay.innerHTML = learnHtmlMarkup;
