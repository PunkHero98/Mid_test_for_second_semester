import MyImage from '../../assets/spy_carousel 1.png'
import OverLay from '../../assets/overlay.png'
const BigBanner = ({movieData}) =>{
    return(
        <div className='w-[1174px] flex flex-col items-start gap-8'>
            <h3 className='poppins-semibold text-[32px]'>Explore</h3>
            <label htmlFor="" className='poppins-regular text-[22px] text-[#868686]'>What are you gonna watch today ?</label>
            <div className="relative w-[1174px] h-[400px] rounded-[12px] overflow-hidden">
        {/* Hình ảnh nền */}
            <img
                src={MyImage}
                alt="Background"
                className="w-full h-full object-cover"
            />
            
            <img src={OverLay} className='absolute top-0'/>
            <div className="absolute top-[211px] left-[60px] w-[586px] h-[161px] inset-0 flex flex-col items-start justify-between text-white text-center overflow-hidden">
                <h2 className="poppins-semibold text-[36px]">{movieData.movieName}</h2>
                <p className="poppins-regular mt-2 text-[16px]">{movieData.description}</p>
            </div>
            </div>
        </div>
    )
};

export default BigBanner;