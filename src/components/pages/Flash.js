import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const Flash =()=>{
    return <div>
        <h1>Flash Forward</h1>
        <div>
            <Container>
                <div className='w-50 p-3 ratio ratio-16x9'>
                    <iframe src="https://www.youtube.com/embed/pOhgKsjsB9k?si=1rDrYAAVNfXw62zl"
                    title="YouTube video Player"
                    allowFullScreen></iframe>
                </div>
            </Container>
       
        </div>
    </div>
}