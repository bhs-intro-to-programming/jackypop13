const upToX=(s)=>{
  let x = s.indexOf('x')
  return s.substring(0)
}
const charactersAround=(s1,s2)=>{
  return s.indexOf('s1')+s.indexOf('s2')
}
const middle=(s)=>{
  return s.substring(s.length/4)+s.substring(s.length/2)
}
const pair=(string1,string2)=>{
  return string1+'and'+string2
}
const containsX=(s)=>{
  if (s.substring(s.indexOf('x')))  {
  return true}
  return false
}
const slug=(s1,s2,s3)=>{
  return (s1.toLowerCase + s2.toLowerCase + s3.toLowerCase )+''
  
}
const capitalize=(s)=>{
  return s.substring(0,1).toUpperCase()+s.substring(1,s.length)
}
const capitalizeName=()=>{
  return
}