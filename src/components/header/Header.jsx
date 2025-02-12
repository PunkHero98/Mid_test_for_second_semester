const Header = () =>{
    return(
        <div className="flex w-[1174px] justify-between items-center">
            <h1 className="poppins-semibold text-[36px]">Anonime</h1>
            <a href="#" className="poppins-regular text-[18px] text-[#868686]">Home</a>
            <a href="#" className="poppins-regular text-[18px] text-[#868686]">List anime</a>
            <input type="text" className="poppins-regular text-[18px] bg-[#374151] text-[#868686] rounded-[37px] py-[8px] pr-[100px] pl-[18px]" placeholder="Search anime or movie" />
        </div>
    )
};

export default Header;