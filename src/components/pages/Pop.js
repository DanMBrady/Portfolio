import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const Pop =()=>{
    return <div>
        <h1>Pop Quiz</h1>
        
        <div>
            <Container>
                <div className='w-50 p-3 ratio ratio-16x9'>
                    <iframe src="https://www.youtube.com/embed/pyXNMR1orhE?si=IZ8DEapk3s6BkOT6"
                    title="YouTube video Player"
                    allowFullScreen></iframe>
                </div>
            </Container>
       
        </div>
    </div>
}