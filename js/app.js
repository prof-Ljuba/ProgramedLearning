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
    <h1>${lessonData.meta.Author}, ${lessonData.meta.School}</h1>
    <h3>Lesson modified: ${lessonData.meta.lesson_modified}, subject: ${lessonData.meta.subject}, license: ${lessonData.meta.license}</h3>
    <p><strong>id:</strong> ${lessonData.meta.id}</p>
    <p><strong>lessonData[currentLanguage].naslov:</strong> ${lessonData[currentLanguage].naslov}</p>
    <hr>
    <p><strong>lesson default language:</strong> ${lessonData.lesson_default_language}</p>
    <p><strong>lessonData[currentLanguage].deloviLekcije[0].nazivDelaLekcije:</strong> ${lessonData[currentLanguage].deloviLekcije[0].nazivDelaLekcije}</p>
    <p><strong>lessonData[currentLanguage].deloviLekcije[0].teorija[1].tekst, tj. pojam informacije:</strong> ${lessonData[currentLanguage].deloviLekcije[0].teorija[1].tekst}</p>
  `;
}

// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
