import { useEffect, useState } from "react";
import UdemyLogo from "../assets/udemy_logo.png"
import { getDB } from "../db/init";

const MainNav = ({displayExercise, data}) => {
  const [activeLinkId, setActiveLinkId] = useState()
  // const [stats, setStats] = useState(getStats())
  let videoId = 7



  function getStats() {
      const allData = getDB()
  
      const questionsTotal = 0
      const tasksTotal = 0
      let totalCorrect = 0;
      let totalFalse = 0;
      let totalTasksDone = 0;
  
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

    useEffect(() => {
      console.log('2', data)
      getStats()
    }, [data])

  return (
    <nav className="left-menu">
        <div className="menu-header">
          <h2>📘 TypeScript Drills </h2>
        </div>
        <div className="course-link">
          <a href="https://www.udemy.com/course/modern-TypeScript-es6-for-react-nextjs-vue-nodejs/?referralCode=6963EBB03103EBCEF1F8" target="_blank" rel="noopener" style={{marginRight: '7px'}}>
          <span><img style={{height: '15px'}} src={UdemyLogo}/></span> 
          Go to TS Course</a>
          <a 
            href="https://www.youtube.com/channel/UCxsJ-g3ALVzsn_VCkKfDXxA" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                style={{ height: '15px', fill: '#FF0000' }}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            My YouTube
          </a>
        </div>
        <ul className="exercise-list" >
          <h2 className="pl-2 font-bold">Udemy Videos</h2>
          {data?.map((listItem) => {

            if(listItem.type === 'title') {
              return (
                <div key={listItem.id} style={{marginBottom: '10px'}}>
                  <h2  style={{fontSize: '1.2rem', margin: '35px 0px 5px 10px'}}>{listItem.title}</h2>
                  <div className="header-stats flex" style={{marginLeft: '10px'}}>

                    <div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        style={{display: 'inline-block', color: '#b91c1c', marginRight: '4px'}}
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                      <strong> 0 / </strong>
                      <strong style={{color: '#b91c1c'}}>0 </strong>
                      <strong>/ 112</strong>
                    </div>

                
                    <div style={{margin: '0px 7px'}}></div>

                
                    <div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        style={{display: 'inline-block', marginRight: '4px', color: 'rgb(0, 92, 255)', position: 'relative', top: '-2px'}}
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        <line x1="9" y1="12" x2="10" y2="13"></line>
                        <line x1="15" y1="12" x2="15.01" y2="12"></line>
                        <line x1="9" y1="16" x2="10" y2="17"></line>
                        <line x1="15" y1="16" x2="15.01" y2="16"></line>
                      </svg>
                      <strong> 0 </strong>
                      <strong>/ 23</strong>
                    </div>

                    <button style={{marginLeft: '35px', color: '#b91c1c', cursor: 'pointer', fontSize: '16px'}}><span>↻</span> Reset</button>
                  </div>
                </div>
              )
            }

            // skip one number for call to review video
            if(listItem.id === 'logical-not-01') {videoId = videoId + 2} 
            else {
              videoId++
            }

            
            return (
              <li 
                className={`exercise-item ${activeLinkId === listItem.id ? 'active-exercise' : ''}`} 
                key={listItem.id} 
                onClick={() => {
                  setActiveLinkId(listItem.id)
                  displayExercise(listItem)
                }}>
                <a href={`#section=${listItem.section}`}>
                  <i style={{color: listItem.milestone ? '#f37a7a' : '#38bdf8'}}>{videoId} </i> 
                {listItem.title} 
                <span className={`status-dot bg-slate-700
                  ${(listItem.done && !listItem.inProgress) ? '!bg-green-500' : ''}   
                  ${(!listItem.done && listItem.inProgress) ? '!bg-yellow-500' : ''}   
                   `} ></span>
                </a>
              </li>
            )
          })}
          {/* <li className="exercise-item" style={{marginTop: '12px', borderTop: '1px solid #1e2b3f', paddingTop: '8px'}}><a href="#challenge1"><i>⚡</i> Reverse string</a></li>
          <li className="exercise-item"><a href="#challenge2"><i>⚡</i> Filter even</a></li>
          <li className="exercise-item"><a href="#challenge3"><i>⚡</i> Delay log</a></li> */}
        </ul>
        {/* <div style={{marginTop: 'auto', fontSize: '0.8rem', color: '#5f6c80', padding: '1rem', borderTop: '1px solid #1e2b3f'}}>
          What to add: code color coding, copy code icon, stats of one and all exercises, btn on taskt 'click to make as DONE', each item in the menu should have green icon if all is done, milestne number should be red, za lake stvari ostavi samo pitanja a smakni tasks, u dosta lekcija odgovor je uvjek A, promjeni to
        </div> */}
    </nav>
  )
}

export default MainNav;
