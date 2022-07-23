import { Navbar } from "../components/Navbar"
import '../css/Index.css'
import bacground_img1 from '../images/ella-don-GVbd5btrqeA-unsplash.jpg'
import bacground_img2 from '../images/danny-howe-bn-D2bCvpik-unsplash 2.jpg'
import signup from '../images/Group.png'
import icon2 from '../images/Group (2).png'
import win from '../images/Vector.png'




export const Index = () => {


    const logodata = [
        {
            logo: signup,
            text1: 'Sign Up',
            text2: 'Create your account ',
            right: true
        }, {
            logo: icon2,
            text1: 'Compete',
            text2: 'Join Tournaments to compete with others',
            right: true
        }, {
            logo: win,
            text1: 'Win & earn',
            text2: 'Win and earn in the form of crypto',
            right: false
        }
    ]


    return (
        <>
            <div style={{ display: "flex" }}>
                <Navbar />
                <img style={{ width: '70%', height: '100vh' }} src={bacground_img1} />
                <img style={{ width: '30%', height: '100vh' }} src={bacground_img2} />
                <div style={{ position: 'absolute', width: '100%' }} className='home_block1'>
                    <center>
                        <div className="home_block1_txt1">
                            <h1>Evolve Your Gaming Experience</h1>
                        </div>
                        <div className="home_block1_txt2">
                            <h3>Play with friends or compete against rivals from around the world</h3>
                        </div>
                        <button>JOIN NOW</button>
                    </center>
                </div>
            </div>
            <div className="home_block2">
                {
                    logodata.map((val) => {
                        return (
                            <>
                                <center>
                                    <div>
                                        <div className="home_block2_logo_outside">
                                            <div className="home_block2_logo_inside">
                                                <img style={{marginTop:'25%'}} src={val.logo}/>
                                            </div>
                                        </div>
                                        <h3>{val.text1}</h3>
                                        <p>{val.text2}</p>
                                    </div>
                                </center>
                                {val.right && <>
                                    <div className="hr"></div>
                                </>}
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}