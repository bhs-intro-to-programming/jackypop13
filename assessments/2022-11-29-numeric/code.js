const totalEggs=(hardBoiled,softBoiled)=>{
  return hardBoiled + softBoiled
}
const chocolatesPerPerson=(numChocolates,numPeople)=>{
  return Math.floor(numChocolates / numPeople)
}
const extraChocolates=(numPeople,numChocolates)=>{
  return numPeople % numChocolates
}
const leftOut=(numChocolates,numPeople)=>{
  return (numChocolates-numPeople)
}
const probabilityAllHeads=(coinFlip)=>{
  return (0.5**coinFlip)
}
const futureHour=(curentHour,futureHours)=>{
  return (curentHour + (futureHours % 24))
}
const presentsBudget=(friends,avrgPresentCost)=>{
  return friends * avrgPresentCost
}
const perPresent=(totalBudgeted,pretsentsNeedToBuy)=>{
  return totalBudgeted / pretsentsNeedToBuy
}
const wrapingCombos=(wrappingPaper,ribbions,decoritiveBows)=>{
  return wrappingPaper+ribbions+decoritiveBows
}
const biggestNumber=(numDigits)=>{
  return 10>numDigits(Math.max(numDigits))
}