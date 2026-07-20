import { getDB } from "../db/init"




function getStats() {
  const allData = getDB()
  
  const questionsTotal = allData.allExercises.reduce((n, e) => { return n + e.questions.length}, 0)
  const tasksTotal = allData.allExercises.reduce((n, e) => { return n + e.tasks.length}, 0)
  let totalCorrect = 0;
  let totalFalse = 0;
  let totalTasksDone = 0;

  const sections = {
    '2': {
      questionsTotal: 0,
      tasksTotal: 0,
      totalCorrect: 0,
      totalFalse: 0,
      totalTasksDone: 0
    },
    '3': {
      questionsTotal: 0,
      tasksTotal: 0,
      totalCorrect: 0,
      totalFalse: 0,
      totalTasksDone: 0
    }
  }

  allData.allExercises.forEach((exercise) => {
    if(exercise.type === 'title') return false;
  
    // get section stats ///////////////////////
    sections[exercise.section].questionsTotal += exercise.questions.length
    sections[exercise.section].tasksTotal += exercise.tasks.length

    // totalCorrect
    exercise.questions.forEach(question => {
      question.options.forEach(opt => { 
        if(opt.correct === true && opt.selected === true) {
          sections[exercise.section].totalCorrect += 1
        }
      })
    })
    // totalFalse
    exercise.questions.forEach(question => {
      question.options.forEach(opt => { 
        if(opt.correct === false && opt.selected === true) {
          sections[exercise.section].totalFalse += 1
        }
      })
    })

    // totalTasksDone
    exercise.tasks.forEach(task => {
      if(task.done) sections[exercise.section].totalTasksDone += 1
    })

    
    // get app stats ///////////////////////
    exercise.questions.forEach((question) => {
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

    exercise.tasks.forEach(task => {
      if(task.done) totalTasksDone++
    })
  });

  // add stats to the data so menu can show it
  allData.allExercises.forEach(exercise => {
    
    if(exercise.type === 'title' && sections[exercise.section]){
      
      exercise.questionsTotal =  sections[exercise.section].questionsTotal
      exercise.tasksTotal = sections[exercise.section].tasksTotal
      exercise.totalCorrect = sections[exercise.section].totalCorrect
      exercise.totalFalse = sections[exercise.section].totalFalse
      exercise.totalTasksDone =  sections[exercise.section].totalTasksDone
    }

  })

  return {
    appStats: {
      numOfQuestions: questionsTotal,
      correctQuestions: totalCorrect,
      incorrectQuestions: totalFalse,
      numOfAssignments: tasksTotal,
      assignmentsDone: totalTasksDone,
    },
    allData: allData
  }
}

export default getStats