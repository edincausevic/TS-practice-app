import { getDB } from "../db/init"




function getStats() {
  const allData = getDB()
  
  const questionsTotal = allData.allExercises.reduce((n, e) => { return n + e.questions.length}, 0)
  const tasksTotal = allData.allExercises.reduce((n, e) => { return n + e.tasks.length}, 0)
  let totalCorrect = 0;
  let totalFalse = 0;
  let totalTasksDone = 0;

  const section2 = {
    questionsTotal: allData.allExercises.reduce((n, e) => { return n + e.questions.length}, 0),
    tasksTotal: allData.allExercises.reduce((n, e) => { return n + e.tasks.length}, 0),
    totalCorrect: 0,
    totalFalse: 0,
    totalTasksDone: 0
  }

  allData.allExercises.forEach((section) => {


    section.questions.forEach((question) => {
      // Check if the user selected the correct option
      const userGotItRight = question.options.some(
        (opt) => opt.correct === true && opt.selected === true
      );
      const userGotItWrong = question.options.some(
        (opt) => opt.correct === false && opt.selected === true
      );

      if (userGotItRight) totalCorrect++;
      if(userGotItWrong) totalFalse++
    });

    section.tasks.forEach(task => {
      if(task.done) totalTasksDone++
    })
  });

  return {
    numOfQuestions: questionsTotal,
    correctQuestions: totalCorrect,
    incorrectQuestions: totalFalse,
    numOfAssignments: tasksTotal,
    assignmentsDone: totalTasksDone,
  }
}

export default getStats