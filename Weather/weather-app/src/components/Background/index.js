import {useState, useEffect} from 'react';
import axios from 'axios';

const Background = ({city}) => {

    const [backgroundUrl, setBackgroundUrl] = useState('');

    useEffect(() => {
        async function searchApi(city) {
            try{
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=Mruvb8-NOdM4GOXdUbIGjRv5TSL5S06FiCpw4nHRy28`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)];
                setBackgroundUrl(randomPhoto.urls.regular);

                
            }catch(err){
                console.error(err)
            }
        }
        searchApi(city);
    }, [city]);

    let divStyle;

    if (backgroundUrl !== ''){
      divStyle = {
        color: 'blue',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85)), url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -100,
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
      }
      
    } 
    return ( <>
          <div style={divStyle}>
    </div>
    <div className='unsplash-description'>
        <p><a href='https://unsplash.com/' target="_blank" rel='noreferrer'>Unsplash</a></p>
    </div>
    </> );
}
 
export default Background;
