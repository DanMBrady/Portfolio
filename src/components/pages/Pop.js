import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import "./Pop.css"

export const Pop =()=>{
    return <div className='indProjectDiv'>
        <div className='webName'>
        <h1>Pop Quiz</h1>
        <section>Pop Quiz is an app that allows users to create trivia quizzes and compete with other users</section>
       </div>
            <div className='vidCont'>
                 <div className='w-50 p-3 ratio ratio-16x9'>
                    <iframe src="https://www.youtube.com/embed/pyXNMR1orhE?si=IZ8DEapk3s6BkOT6"
                    title="YouTube video Player"
                    allowFullScreen></iframe>
                </div>
            </div>
        <div className='techUsed'>
            <h3>Technologies Used</h3>
            <ul>
                <li>React</li>
                <li>C#</li>
                <li>Sql Server</li>
            </ul>

        </div>

        
    </div>
}