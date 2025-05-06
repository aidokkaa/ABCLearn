import React from 'react'
import '../styles/numberScreen.css'
import tadaSound from '../assets/sounds/tada.mp3'
const NumberScreen = () => {
  const [openModal,setOpenModal]=React.useState(false);
  const [currentNumber,setCurrentNumber]=React.useState(0);
  type numsData={
    number:number,
    backgroundUrl:string
  }
  const numbersData:numsData[] = [
    { number: 1, backgroundUrl: 'https://img.freepik.com/free-vector/blank-nature-park-landscape-scene-daytime_1308-62625.jpg?t=st=1746405079~exp=1746408679~hmac=ca43e6ac6e4c523d9e27770cd78179d3629b683acc0090a2785acf9e90b8ad91&w=1380', color:'blue' },
    { number: 2, backgroundUrl: 'https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148621414.jpg?t=st=1746405530~exp=1746409130~hmac=309c468c13aaea772de7e2ba6e032e3612c8cebe133fc0052d060797af459155&w=1380', color:'white' },
    { number: 3, backgroundUrl: 'https://img.freepik.com/free-vector/empty-beach-scene-with-coconut-trees-mountain-simple-style_1308-55959.jpg?t=st=1746405734~exp=1746409334~hmac=775d4539822404dcfd1904d27ab75e8f2245425a1cae8e2fce56002ef99ae3ee&w=1380', color:'red' },
    { number: 4, backgroundUrl: 'https://img.freepik.com/free-vector/cityscape-night_1308-18430.jpg?t=st=1746405826~exp=1746409426~hmac=620102144f6cf59e5d795a0ce501d1964c49a04dd6904f709394fd4956367acf&w=740', color:'white' },
    { number: 5, backgroundUrl: 'https://img.freepik.com/free-vector/desert-forest-landscape-night-scene_1308-59096.jpg?t=st=1746406018~exp=1746409618~hmac=8a4b74f56c2c3b31573182b9797d8e153b66b24a9ccc1aa17638f6db18f492f2&w=1380', color:'white' },
    { number: 6, backgroundUrl: 'https://img.freepik.com/free-vector/blank-nature-park-landscape-scene-daytime_1308-62625.jpg?t=st=1746405079~exp=1746408679~hmac=ca43e6ac6e4c523d9e27770cd78179d3629b683acc0090a2785acf9e90b8ad91&w=1380', color:'blue' },
    { number: 7, backgroundUrl: 'https://img.freepik.com/free-vector/cityscape-night_1308-18430.jpg?t=st=1746405826~exp=1746409426~hmac=620102144f6cf59e5d795a0ce501d1964c49a04dd6904f709394fd4956367acf&w=740', color:'red' },
    { number: 8, backgroundUrl:  'https://img.freepik.com/free-vector/blank-nature-park-landscape-scene-daytime_1308-62625.jpg?t=st=1746405079~exp=1746408679~hmac=ca43e6ac6e4c523d9e27770cd78179d3629b683acc0090a2785acf9e90b8ad91&w=1380', color:'blue' },
    { number: 9, backgroundUrl:  'https://img.freepik.com/free-vector/sunset-forest-with-path-sea-summer-landscape-background-pink-sky-scenery-beautiful-sunny-switzerland-day-game-environment-outdoor-illustration-flower-wild-garden-near-ocean-scene_107791-22894.jpg?t=st=1746476350~exp=1746479950~hmac=c191ceeda91600306bb098c2f8ef83d5eae7ede8449b207f186927473501e4d4&w=1380', color:'white'},
    { number: 10, backgroundUrl: 'https://img.freepik.com/free-vector/vector-white-fluffy-clouds-blue-sky_107791-1056.jpg?t=st=1746476439~exp=1746480039~hmac=9dc60804db9600881466563df23e80b08cca8c18b29264af3099421446a0ae9c&w=1380', color:'red' }
  ];
  const openNumberModalPage=()=>{
  setOpenModal(true)
  }

  return (
    <div className='numberScreenContainer'>
   {/* <button onClick={openNumberModalPage}>Начать</button> */}
   <div className="magic-start" onClick={openNumberModalPage}>
  <div className="sparkles"></div>
  <div className="fairy">🧚</div>
  <div className="magic-text">Кел, сандарды үйренейік!</div>
  <button className="magic-button">Бастау</button>
</div>
   {
    openModal &&
    <div className={`modalNumber ${openModal ? "open" : ""}`}>
      <div  style={{ backgroundImage: `url(${numbersData[currentNumber].backgroundUrl})` }} className="modal-body"> 
      <div
  style={{ color: numbersData[currentNumber].color }}
  className="number"
>
  {numbersData[currentNumber].number}
</div>
    <div className="btns">
    <button onClick={()=>setCurrentNumber((prev)=>{
        if(currentNumber===0){
          return 0;
        }else{
          return prev-1
        }
      })}>Артқа</button>
      <button onClick={()=>setCurrentNumber((prev)=>{
        if(currentNumber===numbersData.length-1){
          return 0;
        }else{
          return prev+1
        }
      })}>Келесі сан</button>
      <button onClick={()=>setOpenModal(false)}>Шығу</button>
      </div>
      </div>
     
  
    
     </div>
   }
</div>


  )
}

export default NumberScreen



