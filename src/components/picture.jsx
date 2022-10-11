import data from "../helper/data.js"
import "../components/picture.css"

function PictureShow(){

    return (
        <>
            {data.map(({photographer,src:{large}})=>{
                return(
                <div className="image-card">
                    <div className="image-container">
                        <img src={large} alt="photos" />
                    </div>
                    
                    <div className="image-info">
                        <p>{photographer.toUpperCase()}</p>
                    </div>
                </div>)
            })}
        
        </>
        //    <>
        //    {data.map((image, id) => (
        //      <div key={id} className="image-card">
        //      <div className="image-container">
        //          <img alt={id} src={image.src.large} />
        //      </div>
        //      <div className="image-info">
        //         <p>{image.photographer.toLocaleUpperCase()}</p>
        //      </div>
        //      </div>
        //    ))}
        //    </>
    )

}
export default PictureShow;