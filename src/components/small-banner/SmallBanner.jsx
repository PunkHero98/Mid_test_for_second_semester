
import Banner from '../banner/Banner'
const SmallBanner = ({movieData , handleOpenModal }) =>{
const filteredData = movieData.slice(1);
    return(
        <div className='w-[1174px] flex flex-col items-start gap-8'>
            <h3 className='poppins-semibold text-[36px]'>New Release</h3>
            <div className='flex w-full items-center justify-between'>
                {filteredData.map((item )=> (
                    <Banner  handleOpenModal={handleOpenModal} itemKey={item.id} imgSource={item.image} name={item.movieName} episode={item.episode} key={`${item.id}_${Date.now()}`} />
                ))}
            </div>
        </div>
    )
};

export default SmallBanner;