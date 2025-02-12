import { useState } from 'react'
import './style/App.css'
import Header from './components/header/Header'
import BigBanner from './components/big-banner/BigBanner'
import { FetchData } from './data/data'
import SmallBanner from './components/small-banner/SmallBanner'
import { Modal } from 'antd'
function App() {
  const [data , setData] = useState(FetchData().data);
  const [choosenMovie , setChoosenMovie] = useState(null);
  const [openModal , setOpenModal] = useState(false);
  const handleOpenModal = (key) =>{
    setOpenModal(true)
    setChoosenMovie(data[key-1].description);
  }
  return (
    <>
      <div className='flex flex-col items-center py-4 gap-4 bg-[#192026] text-white w-full'> 
        <Header/>
        <BigBanner movieData={data[0]} />
        <SmallBanner  movieData={data} handleOpenModal={handleOpenModal} />
      </div>
      <Modal open={openModal} onCancel={()=> setOpenModal(false)} cancelButtonProps={{style: {display: 'none'}}} onOk={() => setOpenModal(false)}>
        <div className='p-4 flex flex-col gap-10'>
          <h3 className='poppins-semibold text-[24px]'>Description</h3>
          <p className='poppins-regular text-[18px]'>{choosenMovie}</p>
        </div>
      </Modal>
    </>
  )
}

export default App
