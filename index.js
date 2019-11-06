function logName(name) {
    console.log(`Hello, ${name}!`)
  }
  
  const nameA = 'Taufik'
  const nameB = 'Hidayat'
  
  logName(nameA)


  function logCity(city) {
      console.log(`Welcome to ${city}`)
  }
  const cityA = 'Jakarta'
  const cityB = 'Depok'
  const cityC = 'Bogor'
  const cityD = 'Bandung'

  logCity(cityC)

  const checkAge = function(age) {
    if (age >= 18) {
      console.log('You are old enough')
    } else if (age < 18 && age >= 0) {
      console.log('You are still young')
    } else {
      console.log('You are not born yet')
    }
  }
  
  checkAge(10) 
  checkAge(25) 
  checkAge(-2) 



  const checkYear = function(year) {
      if (year < 2010) {
          console.log('Your version is expired')
      } else if (year >= 2010){
          console.log('Your version is up to date')
      }
  }
  
checkYear (2009)
checkYear (2018)
checkYear (2019)



const addMarks = (text, mark, times) => { // arrow is shorcut for function
    let newText = text
  
    for (let i = 0; i <= times; i++) {
      newText += mark
    }
  
    console.log(newText)
  }
  
  addMarks('Hello', '!', 1) 
  addMarks('Hello', '!', 3)
  addMarks('How are you', '?', 1) 
  addMarks('How are you', '?', 2)
  addMarks('What do you want',' @', 5) 


  const showNameWithAge = (name = 'Unknown', age = 0) => {
    const nameWithAge = `${name} is ${age} year(s) old`
  
    return nameWithAge // return the value to be used later
  }
  
  const alpha = showNameWithAge('Alpha', 11)
  const betty = showNameWithAge('Betty', 42)
  const gamma = showNameWithAge('Gamma', 30)
  
  console.log(alpha)
  console.log(betty)
  console.log(gamma)
  

  
  
  