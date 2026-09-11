interface SkillCardProps {
  name: string;
}

interface SkillCardProps{
  name:string;
}
const SkillCard =({name} : SkillCardProps) =>{
  return(
    <div className=" p-4 rounded my-2">
      {name}
    </div>
  )
}

export default SkillCard;
