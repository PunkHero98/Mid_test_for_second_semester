import overlay from '../../assets/Rectangle.png';
import aoashi from '../../assets/aoashi.png';
import attackontitan from '../../assets/attackontitan.png';
import boruto from '../../assets/boruto.png';
import captsu from '../../assets/captsu.png';
import One_piece from '../../assets/One-piece.png';
import spy_card from '../../assets/spy_card.png';

const imageMap = {
    aoashi,
    attackontitan,
    boruto,
    captsu,
    One_piece,
    spy_card
};

const Banner = ({ imgSource, name, episode , handleOpenModal  , itemKey}) => {
    // Lấy ảnh từ object map, nếu không có thì dùng mặc định là aoashi
    const imageToShow = imageMap[imgSource] || aoashi;
    return (
        <div className="relative cursor-pointer hover:opacity-50 w-[170px] h-[284px] rounded-[12px]" onClick={() => handleOpenModal(itemKey)}>
            {/* Hình ảnh nền */}
            <img src={imageToShow} alt={name} className="w-full h-full object-cover rounded-[12px]" />
            
            {/* Lớp overlay gradient */}
            <img src={overlay} className="absolute top-0 w-full h-full object-cover " />

            {/* Nội dung trên ảnh */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                <p className="absolute bottom-[80px] poppins-regular text-[16px]">Episode: {episode}</p>
                <h2 className="poppins-semibold text-[16px] text-center">{name}</h2>
            </div>
        </div>
    );
};

export default Banner;
