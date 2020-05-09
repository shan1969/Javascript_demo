//without Callback function
//function sum(num1, num2){
    //return num1 + num2;
//}

//function div (n1, n2){
  //  return n1 / n2;
//}

//Calling functions
//const sumResult = sum(100, 200);
//console.log('sumResult ', sumResult);

//const averageValue = div(sumResult, 2);
//console.log('Average value is ', averageValue);

//Callback functions

//function sum(num1, num2, cb){
  //  return cb(num1 + num2);
//}

//function div (n1, n2, cb){
  //  return cb(n1 / n2);
//}

//console.log('With Callback function');
//sum(25,15,function sumFn(sumResult){
  //  console.log('sum result -->', sumResult);
    
//})

//div(25,5,function divFn(divResult){
  //  console.log('div result -->', divResult);
  //})

//Callback with Arrow Functions
//sum(25,15,(sumResult) => {
  //  console.log('sum result -->', sumResult);
    
//})

//div(25,5,function divFn(divResult){
  //  console.log('div result -->', divResult);
   //})

//Nesting of functions
//console.log('With Asynchronous code execution');
//sum(25,15,(sumResult) => {
  //  console.log('sum result -->', sumResult);
    // div(sumResult,2,(divResult)=>{
      //  console.log('div result -->', divResult);
     //})
//});

//console.log('Success..!!!');

//Asynchronous code 
//function sum(num1, num2, cb){
  //  setTimeout(()=>{
    //    cb(num1 + num2);
    //}, 1000);
 // }
  //function div(num1, num2, cb){
    //setTimeout(()=>{
      //  cb(num1 / num2);
   // }, 1000);
  //}

  //function with promises
  function sumResult(num1, num2){
      let promise = new Promise((resolve, reject) =>{
          setTimeout(()=>{
               if(!(isNaN(num1) || isNaN(num2))){
                   resolve(num1 + num2);
               } else {
                   reject(new Error('Only numbers are allowed'));
               }
          },1000)
      });
      return promise;
  }

  function divResult(num1, num2){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
             if(!(isNaN(num1) || isNaN(num2))){
                 resolve(num1 / num2);
             } else {
                 reject(new Error('Only numbers are allowed'));
             }
        },1000)
    });
    return promise;
}

  let sumPromise = sumResult(100,200);
  //console.log('typeof promise', typeof sumPromise);
  let divPromise = sumResult(100,200);
  //console.log('dive promise ', divPromise);
  
  //consuming the promise
  sumPromise.then(sumResult =>{
      console.log('sumresult -->', sumResult);
     
  }).catch( error => {
      console.log('error --> ', error.message);
      
  })
  
  //consuming the promise with div function

  sumPromise.then(sumResult =>{
   // console.log('sumresult -->', sumResult);
    divResult(sumResult,2).then(divResult => {
        console.log('divResult ', divResult);
    }).catch( error => {
        console.log('error in div block --> ', error.message);
    })
    }).catch( error => {
    console.log('error --> ', error.message);
})
