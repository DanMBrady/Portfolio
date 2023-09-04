import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const Flash =()=>{
    return <div className='indProjectDiv'>
        <div className='webName'>
        <h1>Flash Forward</h1>
        <section>Flash Forward is an app that allows users to create comic book libraries as well as review comics and join book clubs</section>
        </div>
        <div className='vidCont'>
                 <div className='w-50 p-3 ratio ratio-16x9'>
                    <iframe src="https://www.youtube.com/embed/pOhgKsjsB9k?si=1rDrYAAVNfXw62zl"
                    title="YouTube video Player"
                    allowFullScreen></iframe>
                </div>
            </div>
            <div className='techUsed'>
                <h3>Technologies Used</h3>
                <ul>
                    <li>React</li>
                    <li>Json Server</li>
                </ul>
            </div>
    </div>
}

