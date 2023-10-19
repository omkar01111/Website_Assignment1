
import '../assets/Styles/serviceCard.css'

const ServiceCard = ({img,title,des}) => {
  return (
    <div className='Service_card'>


              <img src={img} alt="Slot" />
              <div className="intro">
                <h1 className='card_heading'>{title}</h1>
                <div className="inner_Info">
                  <p className='card_des'>{des}</p>
               </div>
              </div>
          
     

    </div>
  )
}

export default ServiceCard