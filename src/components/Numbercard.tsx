import React from 'react'

const Numbercard = ({itemNUm,itemIndex,setCurrentNumberIndex, currentNumberIndex,numbers}) => {
 const handleClick=(item)=>{
   if(item===numbers[currentNumberIndex].number){
    setCurrentNumberIndex(prev=>prev+1)
    alert('hooray')
   }
 }
  return (
    <div onClick={()=>{handleClick(itemNUm)}} className='nCard' >{itemNUm}</div>
  )
}

export default Numbercard