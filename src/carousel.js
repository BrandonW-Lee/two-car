import photo1 from "./dancingFromBehind.jpg";
import photo2 from "./dancingFromFront.jpg";
import photo3 from "./pictureOfDanceStudio.jpg";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className='carousel'>
      <div className='carousel-inner'></div>
    </div>
  );
}
