import banner from './banner.jpg';
import Images from "./Image";

const Banner = () =>{
    return(
        <div className="App-banner">
                <Images src={banner} alt="banner"/>
        </div>

    )
}

export default Banner;