import ShantoDp from "./assets/ShantoDP.png"


function Card(){
    return(
        <div className="card">
            <img className="image" src={ShantoDp} alt="My profile" />
            <h2>Md. Hasibul Hasan</h2>
            <p>I am a beginer react developer.</p>
        </div>

    );
}
export default Card