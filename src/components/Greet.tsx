import React from 'react'
import {TextRevealCard} from './ui/text-reveal-card'

const Greet = () => {
  return (
    <div>
        
         <div className="flex items-center justify-center bg-[#000000] h-[40rem] rounded-2xl w-full">
       <TextRevealCard
        text="Hover over me!"
        revealText="Thank You for visiting!"
      > </TextRevealCard>
      
      </div>
     
    </div>
  )
}

export default Greet
