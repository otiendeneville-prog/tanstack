type SkillCardProps={
  name:string;
}

export default function skillCard({name:SkillCardProps}) {
  const[liked,setLiked] = useState(false);
  return (
    <article>
     <p>Skill: Tanstack Start</p>
    </article>
  )
}
