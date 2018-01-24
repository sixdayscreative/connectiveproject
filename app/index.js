require('./css/main.scss');



document.addEventListener("DOMContentLoaded",function(){


  let lyricButtons = document.querySelectorAll(".verse_add");

  let verseCount = 0;

  lyricButtons.forEach((button ,i) => {
    button.addEventListener("click", () => {
      addVerse(button.dataset.vstype);
    });
  });

  function addVerse(verseType){
    let lyricMarkup = `
        <div id="verse_type_select">
          <input type="radio" value="Verse" id="verse${verseCount}" name="lyrics${verseCount}[verseType]" ${isVerseType("Verse", verseType)}>
          <label for="verse${verseCount}">Verse</label>
          <input type="radio" value="Chorus" id="chorus${verseCount}" name="lyrics${verseCount}[verseType]" ${isVerseType("Chorus", verseType)}>
          <label for="chorus${verseCount}">Chorus</label>
          <input type="radio" value="Bridge" id="bridge${verseCount}" name="lyrics${verseCount}[verseType]" ${isVerseType("Bridge", verseType)}>
          <label for="bridge${verseCount}">Bridge</label>
        </div>
        <span class="delete">&times;</span>
        <textarea class="form-control" name="lyrics${verseCount}[verseText]" cols="30" rows="10" placeholder="Insert lyrics here..."></textarea>
      `;
      let newNode = document.createElement("DIV");
      newNode.classList.add("form-group");

    newNode.innerHTML = lyricMarkup;
    document.getElementById("lyrics").appendChild(newNode)

    verseCount++


    let deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        let unwantedVerse = button.parentNode;
        deleteVerse(unwantedVerse, i);
      });
    });

  }
  function isVerseType(str, vt){
    if(str === vt){
      return "checked='true'";
    }
  }
  function deleteVerse(verse, index){
    verse.remove();
  }





});
