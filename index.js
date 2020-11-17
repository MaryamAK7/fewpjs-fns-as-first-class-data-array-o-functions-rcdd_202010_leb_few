function wakeDog(dogName,dogBreed){
 return `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(dogName,dogBreed){
  return console.log(`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName,dogBreed){
  return console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName,dogBreed){
 return console.log(`Throw the frisbeefor ${dogName} the ${dogBreed}`);
}
function walkHome(dogName,dogBreed){
return  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName,dogBreed){
  return console.log(`Unleash ${dogName} the ${dogBreed}`);
}
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
 function exerciseDog(dogName, dogBreed){
   let arr=[];
   for(let i=0; i<routine.length; i++){
     
   arr.push(routine[i](dogName,dogBreed));
     
   }
   return arr;
 }



