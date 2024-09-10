import './ButtonSuspense.css'

import instagram from '/Instagram_icon.png'
import facebook from '/facebook.png'
import whatsapp from '/whatsapp.png'

const ButtonSuspense = () => {
    return (
        <div className="div-button-suspense">
            <div className="button-suspense">
                <a href="https://www.facebook.com/autotagveiculos"><img src={facebook} alt="" className="button-suspense-content"/></a>
            </div>
            <div className="button-suspense">
                <a href="https://www.instagram.com/auttotag/"><img src={instagram} alt="" className="button-suspense-content"/></a>
            </div>
            <div className="button-suspense">
                <a href="https://api.whatsapp.com/send/?phone=5511947316797&text&type=phone_number&app_absent=0"><img src={whatsapp} alt="" className="button-suspense-content"/></a>
            </div>
        </div>
)
}

export default ButtonSuspense
