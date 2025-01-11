import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '/photo/main_cover.jpg';
import img2 from '/photo/cover_2.jpg';
import img3 from '/photo/cover_3.jpg';
import img4 from '/photo/cover_4.jpg';
import img5 from '/photo/cover_5.jpg';

const Cover = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Cover;