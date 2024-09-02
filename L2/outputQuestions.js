//MAP FILTER REDUCE

// const arr= [1,2,3,4];
// const newArr = arr.map((val,i,arr)=> val * 2);

// console.log(newArr)

// ---------------------------------------------------------


// const arr= [1,2,3,4];
// const newArr = arr.filter((val,i,arr)=> val > 2);

// console.log(newArr);


// -----------------------------------------------------------------



// const arr= [1,2,3,4];
// const summ = arr.reduce((acc,val)=> {return acc+=val},0);

// console.log(summ);



// ----------------------------------------------------------


// MAP POLYFILL

// const arr = arr.map((val,i,arr)=>{

// })

// Array.prototype.myMap = function(callback){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(callback(this[i],i,this));
//     }

//     return temp;
// }

// const arr=[1,2,3,4];
// const nw=arr.myMap((val)=> val * 2);
// console.log(nw);



// -----------------------------------------------------------

//FILTER POLYFILL

// const nw=arr.filter((val,i,arr)=>{

// })


// Array.prototype.myFilter = function(callback){
//     let temp = [];
//     for (let index = 0; index < this.length; index++) {
//         callback(this[index],index,this) && temp.push(this[index]);
        
//     }

//     return temp;
// }

// const arr = [1,2,3,4]
// const ans= arr.myFilter((val) => val >2);

// console.log(ans);


// ---------------------------------------------------------------


// const arr=[1,2,3,4];
// // const sum=arr.reduce((acc,val)=>{return acc=acc+val});
// // console.log(sum);

// Array.prototype.myReducer = function(callback,initialValue){

//     var accumulator = initialValue;
//     for (let index = 0; index < this.length; index++) {
//        accumulator = accumulator ? callback(accumulator,this[index],i,this):this[index];
        
//     }

//     return accumulator
// }

// const sum = arr.myReducer((acc,val)=>{return acc=acc+val},0);
// console.log(sum);



// -----------------------------------------------
// Output based

let student = [
    {name:'Piyush',rNo:31,marks:80},
    {name:'Sidd',rNo:3,marks:70},
    {name:'Verma',rNo:35,marks:20},
    {name:'Sharma',rNo:68,marks:90},

]

// 1 )return only names in captial letters

// const ansArray = student.map((student)=>(student.name.toUpperCase()));
// console.log(ansArray);

// 2) return only details of those who score more than 60

// const ansArray = student.filter((student)=>student.marks>60);
// console.log(ansArray);

// 3) more than 60 and rollName greater than 15
// const ansArray = student.filter((student)=>student.marks>60 && student.rNo > 15);
// console.log(ansArray);

// 4)sum of marks of all students

// const ansArray = student.reduce((acc,val)=>{return acc+=val.marks},0);
// console.log(ansArray);

// 5)Only names of those students who scored more than 60

// const ansArray = student.filter((val)=>(val.marks>60)).map((student) => student.name);
// console.log(ansArray);

// 6)return total marks for students with marks greater 60 after 20 marks have been to those who scored less than 60

const ans = student.map((student)=>(student.marks> 60 ? student.marks : student.marks + 20 ))
                .filter((val)=>val>60)
                .reduce((acc,val)=>{return acc+=val},0);

                console.log(ans);
                




