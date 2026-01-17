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
    <h1><strong>Naslov:</strong> ${lessonData.id}</h1>
  `;
}

// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
