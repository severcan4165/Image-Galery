import data from "../helper/data.js"

function PictureShow(){

    return (
        <div class="container">
            {data.map(item=>{
                return(
                <div>
                    <img src={item.src.large} alt="" class="imgs" />
                    <h2>{item.photographer}</h2>
                </div>)
            })}
        
        </div>
    )

}
export default PictureShow;