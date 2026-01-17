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
    //showLessonInfo();
  } catch (error) {
    console.error("Greška pri učitavanju lekcije:", error);
    alert("Lekcija ne može da se učita... " + path);
  };
  try {
    showLessonInfo();
  } catch (error) {
    alert("showLessonInfo() ne može da prikaze podatke, doslo je do greske.");
  }
}

// Prikaži osnovne informacije (za početak)
function showLessonInfo() {
  document.body.innerHTML = `
    <h1>${lessonData.Author}, ${lessonData.School}</h1>
    <p><strong>id:</strong> ${lessonData.id}</p>
    <p><strong>sr.naslov:</strong> ${lessonData.sr.naslov}</p>
    <hr>
    <p><strong>sr.deloviLekcije[0].nazivDelaLekcije:</strong> ${lessonData.sr.deloviLekcije[0].nazivDelaLekcije}</p>
    <p><strong>sr.deloviLekcije[0].teorija[1].tekst, tj. pojam informacije:</strong> ${lessonData.sr.deloviLekcije[0].teorija[1].tekst}</p>
  `;
}

// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
