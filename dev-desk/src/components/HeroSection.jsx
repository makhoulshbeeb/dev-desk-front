import './styles/HeroSection.css';

export default function HeroSection() {
    return (
        <div className="hero-bg">
            <div className='half'>
                <h1 style={{alignSelf:'flex-start'}}>Your Desk,</h1>
                <h1 style={{alignSelf:'center'}}>Your Code,</h1>
                <h1 style={{alignSelf:'flex-end'}}>Your Way!</h1>
            </div>
            <div>
                <div className="half">
                    <div className="screen">
                        <img src={require("./assets/html.png")} alt=''/>
                        <img src={require("./assets/cmd.png")} alt='' style={{scale:'1.2'}}/>
                        <img src={require("./assets/js.png")} alt=''/>
                    </div>
                    <div className="stand"></div>
                </div>
            </div>
        </div>
    )
}