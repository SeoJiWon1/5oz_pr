import Carousel from 'react-bootstrap/Carousel';
import view1 from './화면1.png';
import view2 from './화면2.png';
import view3 from './화면3.png';
import './Slidebar.css';

function Slidebar() {
  return (
    <div className = "slidebar-all">
      <Carousel variant="dark">   
        <Carousel.Item>
          <img
            className="img-slidebar"
            src={view1} 
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>우리 기능 사진으로 넣을 예정</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slidebar"
            src={view2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>우리 기능 사진으로 넣을 예정 </h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slidebar"
            src={view3} 
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>우리 기능 사진으로 넣을 예정</h5>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slidebar;
