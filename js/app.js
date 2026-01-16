let currentLanguage = "sr";  //sr ili en za sada
let currentLessonFile = "racunarstvo/introductionComputerScience.json"; //osnove_racunara.json ili computer_basics.json za sada
let lessonData = null;

// Učitaj lekciju iz JSON fajla
async function loadLesson(language, lessonFile) {
  const path = `lessons/${lessonFile}`;

 try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Lesson not found");

    lessonData = await response.json();

  } catch (error) {
    console.error(error);
    alert("Lekcija ne može da se učita: " + path);
  }
}



// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
