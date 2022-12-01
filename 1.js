var a = [1, 2, 3, 4, 5]

a.some((i) => {

  if(i===3){
    break
  }
  return i =1
})

console.log(a)