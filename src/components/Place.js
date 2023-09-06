import logo from '../logo.svg';
import '../App.css';

function Place(props) {
    return (  
        <>
            

                <div className='container'>
                    <div className='head'>
                        <img src={"https://source.unsplash.com/1600x1000/?"+props.img} className='location' alt='chennai'></img>
                        <div className={props.rating > 3.5 ? "best-place" : "none"} >Most Visited</div>
                    </div>
                    <div className='content'>
                        <h3>{props.title}</h3>
                        <p> {props.desc}</p>
                    </div>

                </div>

        
        </>  
  )
}
export default Place;