const needHeavyCoat=(goingOutside,somewhereCold)=>{
  return goingOutside && somewhereCold
}
const needSunscreen=(goingToBeach,goingSkiing)=>{
  return goingToBeach || goingSkiing
}
const needMittens=(goingOutside,somewhereWarm)=>{
  return goingOutside || !somewhereWarm
}
const isVenomous=(striped,blueHead)=>{
  if (!striped && blueHead){
  return false}
  return true
}
const okaySpeed=(speedLimit,carSpeed)=>{
   if (speedLimit +10 >carSpeed && speedLimit -10 <carSpeed){
   return true}
   return false
}
const twiceAsExpensive=(p1,p2)=>{
  return p1 > (p2*2)
}
const winningRecord=(wins,losses,ties)=>{
  return wins > (losses+ties)
}
const  isMagicNumber=(num)=>{
  if (num === 42){
  if (num === 17)
  return true}
}
//its a reference to hitchhickers guide to the galexy
//i watched the movie it was kind of bad