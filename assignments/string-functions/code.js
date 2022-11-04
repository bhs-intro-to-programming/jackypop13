const findFnord=(s) => {
  return s.indexOf('fnord')
}
const stringContains=(s1, s2)=>{
  return s.indexOf(s1+s2)
}
const firstAndLast=(s)=>{
  return s.substring(0,1)+ s.substring(s.length -1)
}
const swapFrontAndBack=(s)=>{
  return s.substring(s.length /2)+s.substring(0,s.length/2)
}
const simplePigLatin=(s)=>{
  return (s.substring(/[aeiou]/))+'ay'
}
const isAllUpperCase=(s)=>{
  return s.substring(0,s.length-1).toUpperCase()
}
const sameIgnoringCase=(s1, s2)=>{
  return 
}