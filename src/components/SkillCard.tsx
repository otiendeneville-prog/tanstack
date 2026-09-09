type SkillCardProps={
  name:string;
}

export default function skillCard({name:SkillCardProps}) {
  const[liked,setLiked] = useState(false);
  const likes=liked? 1 :0;
  return (
    <article>
     <p>Skill: Tanstack Start</p>
    </article>
  )
}
