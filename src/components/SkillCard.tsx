

import { Heart } from 'lucide-react';
import {useState} from 'react';

interface SkillCardProps{
  name:string;
}
const SkillCard =({name} : SkillCardProps) =>{
  const [liked, setLiked] = useState(false);
  return(
    <div className=" p-4 rounded my-2">
      <h1>{name}</h1>
     <Heart
     className={`cursor-pointer ${liked ? 'fill-red-500 stroke-red-500': 'text-gray-500' }`} 
       onClick={() =>setLiked(!liked)}
    
     
    />
      
    </div>
  )
}

export default SkillCard;
