let currentLanguage = "en";  //sr ili en za sada
let currentLessonFile = "racunarstvo/introductionComputerScience.json"; //osnove_racunara.json ili computer_basics.json za sada ili lessons/racunarstvo/introductionComputerScience.json
let lessonData = null;

// Učitaj lekciju iz JSON fajla
async function loadLesson(language, lessonFile) {
  //const path = `lessons/${language}/${lessonFile}`;
  const path = `lessons/${currentLessonFile}`;

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Lesson not found");
    }

    lessonData = await response.json();
    showLessonInfo();
  } catch (error) {
    console.error("Greška pri učitavanju lekcije:", error);
    alert("Lekcija ne može da se učita.");
  }
}

// Prikaži osnovne informacije (za početak)
function showLessonInfo() {
  document.body.innerHTML = `
    <h1><strong>Naslov lekcije: </strong> ${lessonData.sr.naslov}</h1>
    //<p><strong>Naslov prozora: </strong> ${lessonData.it.naslovProzora}</p>
    //<p><strong>naziv Dela Lekcije: </strong> ${lessonData.sr.deloviLekcije.nazivDelaLekcije}</p>
    //<hr>
    //<p><strong>Teorija / 1.deo :</strong> ${lessonData.sr.deloviLekcije.teorija[0].tekst}</p>
  `;
}

// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
