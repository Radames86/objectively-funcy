// YOUR CODE GOES HERE!!!
/*************************/
//----- 1 -------
// const getFirstName = (obj) => obj.firstName // this is one way of doing it below is another

const getFirstName = (obj) => {
 for(let key in obj){
  if(key === "firstName"){
    return obj[key]
  }
 }
}

//----- 2 --------

//const getLastName = (obj) => obj.lastName // one way of doing it, below is another

const getLastName = (obj) => {
  for(let key in obj){
    if(key === "lastName"){
      return obj[key]
    }
  }
}

//----- 3 ---------

// const getFullName = (obj) =>
//   `${obj.firstName} ${obj.lastName}` // one way of doing it, below is another

const getFullName = (obj) => {
  let first = ''
  let last = ''
  for(let key in obj){
    if(key === 'firstName'){
      first = obj[key]
    } else if(key === 'lastName') {
      last = obj[key]
    }
  }
  return first + ' ' + last
}

//----- 4 ----------

//const setFirstName = (obj, name) => obj.firstName = name 
// one way of doing it, below is another

const setFirstName = (obj, newFirstName) => {
  for(let key in obj) {
    if(key === 'firstName'){
      obj[key] = newFirstName
    }
  }
  return obj
}

//----- 5 ---------

//const setAge = (obj, num) => obj.age = num // one way of doing it, below is another

const setAge = (obj, num) => {
  for(let key in obj){
    if(key === 'age'){
      obj[key] = num
    }
  }
  return obj
}

//------ 6 -------

// const giveBirthday = (obj) => {
//   if(!obj.age){
//     obj.age = 1
//   }else{
//     obj.age += 1
//   }
// } 
 // this is one way of doing it, below is another

 const giveBirthday = (obj) => {
  let aging = false
  for(let key in obj) {
    if(key === 'age'){
      obj[key] += 1
      aging = true
    }
  }
  if(!aging){
    obj.age = 1
  }
  return obj
 }

//----- 7 ---------

// const marry = (person1, person2) => {
//   person1.married = true
//   person2.married = true
//   person1.spouseName = getFullName(person2)
//   person2.spouseName = getFullName(person1)
// }
 // this is one way of doing it, below is another

 const marry = (person1, person2) => {
  for(let key in person1){
    if(key === 'married'){
      person1[key] = true
    }
  }
  for(let key in person2){
    if(key === 'married'){
      person2[key] = true
    }
  }
  person1.spouseName = person2.firstName + ' ' + person2.lastName
  person2.spouseName = person1.firstName + ' ' + person1.lastName
 }

 //----- 8 ---------

// const divorce = (person1, person2) => {
//   person1.married = false
//   person2.married = false
//   delete person1.spouseName
//   delete person2.spouseName
// }
// this is one way of doing it, below is another

const divorce = (person1, person2) => {
  for(let key in person1){
    if(key === 'married'){
      person1[key] = false
    }
  }
  for(let key in person2){
    if(key === 'married'){
      person2[key] = false
    }
   }
   delete person1.spouseName
   delete person2.spouseName
}

/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
