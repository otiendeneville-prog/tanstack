import { useState } from "react";
import { Heart } from 'lucide-react';


type SkillCardProps={
  name:string;
}

export default function skillCard({name}:SkillCardProps) {
  const[liked,setLiked] = useState(false);
  const likes = liked? 1 :0;
  return (
    <article className="rise-in rounded-3xl p-5">
      <div className="flex items-start justify-between gap-5">
        <div className="space-y-2">
            <p className="leading-normal font-semibold text-base">Skill</p>
            <h2 className="display-title text-2xl font-bold">{name}</h2>
            <p>{likes} {likes == 1? 'like': 'likes'}</p>
        </div>
        <button className="inline-flex size-11 items-center justify-center rounded-full  border   border-(--line) shadow-md"onClick={()=>setLiked((current)=> !current)} type="button">
        <Heart fill={liked ? 'currentColor': 'none'} size={18} />
      </button>
      </div>
    </article>
  )
}
