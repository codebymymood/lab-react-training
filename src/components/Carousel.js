import { useState } from 'react';

 function Carousel(props) {

  const [img, setImg] = useState(props.imgs[0]);
  const [count, setCount] = useState(0);

      function handleLeft() {
        setCount(count + 1);

        if (count === 0) {
          setImg(props.imgs[0]);
        } else if (count === 1) {
          setImg(props.imgs[3]);
        } else if (count === 2) {
          setImg(props.imgs[2]);
        } else if (count === 3) {
          setImg(props.imgs[1]);
          setCount(0);
        }
      }

      function handleRight() {
        setCount(count + 1);

        if (count === 0) {
          setImg(props.imgs[0]);
        } else if (count === 1) {
          setImg(props.imgs[1]);
        } else if (count === 2) {
          setImg(props.imgs[2]);
        } else if (count === 3) {
          setImg(props.imgs[3]);
          setCount(0);
        }
      }

    return (
      

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..."></img>
          </div>          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <button  class="sr-only" onClick={handleLeft} >Left</button>
        </a>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <button  class="sr-only" onClick={handleRight} >Right</button>
        </a>
      </div>
    )
}
export default Carousel