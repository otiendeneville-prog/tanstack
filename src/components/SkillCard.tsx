import { useState } from "react";
import { Heart } from 'lucide-react';


type SkillCardProps={
  name:string;
}

export default function skillCard({name}:SkillCardProps) {
  const[liked,setLiked] = useState(false);
  const likes = liked? 1 :0;
  return (
    <article>
     <p>Skill</p>
     <h2>{name}</h2>
     <p>{likes} {likes == 1? 'like': 'likes'}</p>
      <button onClick={()=>setLiked((current)=> !current)} type="button">
        <Heart fill={liked ? 'currentColor': 'none'} size={18} />
      </button>
    </article>
  )
}
