

import { Heart } from 'lucide-react';
import {useState} from 'react';


const [heart, setHeart] = useState(false)

interface SkillCardProps{
  name:string;
}
const SkillCard =({name} : SkillCardProps) =>{
  return(
    <div className=" p-4 rounded my-2">
      <h1>{name}</h1>
      <p>{Heart}</p>
      
    </div>
  )
}

export default SkillCard;
