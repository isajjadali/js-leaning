class users{
    
    constructor(id,firstName,lastName,dateOfBirth,address,ratings){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.dateOfBirth=dateOfBirth;
    this.address=address;
    this.ratings=ratings;
    }
} 
let x=[
    {
     id: 1,
     firstName: 'Sajjad',
     lastName: 'Ali',
     dateOfBirth: {
         day: 20,
         month: 6,
         year: 1995,
     },
     address: [
         {
             street: 'Washing Line',
             houseNo: 2,
             city: 'lahore',
         },
         {
             street: 'Washing Line',
             houseNo: 2,
             city: 'lahore',
         },
     ],
     ratings: [
         {
             description: 'it should be a string always',
             score: 5, // in between 1 to 5
         },
         {
             description: 'it should be a string always',
             score: 5, // in between 1 to 5
         },
     ]
   },
   {
     id: 2,
     firstName: 'Basit',
     lastName: 'Ali',
     dateOfBirth: {
         day: 26,
         month: 11,
         year: 2000,
     },
     address: [
         {
             street: 'garhi shahu',
             houseNo: 5,
             city: 'lahore',
         },
         {
             street: 'garhi shahu',
             houseNo: 5,
             city: 'lahore',
         },
     ],
     ratings: [
         {
             description: 'it should be a string always',
             score: 4, // in between 1 to 5
         },
         {
             description: 'it should be a string always',
             score: 3, // in between 1 to 5
         },
     ]
   },
   {
     id: 3,
     firstName: 'Ferasat',
     lastName: 'Ali',
     dateOfBirth: {
         day: 06,
         month: 12,
         year: 2000,
     },
     address: [
         {
             street: 'Sami Town',
             houseNo: 8,
             city: 'lahore',
         },
         {
             street: 'Sami Town',
             houseNo: 8,
             city: 'lahore',
         },
     ],
     ratings: [
         {
             description: 'it should be a string always',
             score: 5, // in between 1 to 5
         },
         {
             description: 'it should be a string always',
             score: 3, // in between 1 to 5
         },
     ]
   }
 ]

//==============>                       GET ARRAY OF USERS BY USING PROMISE    <==============//
let v=[];
for(let i=0;i<x.length;i++){
        v[i]=new users(x[i].id,x[i].firstName,x[i].lastName,x[i].dateOfBirth,x[i].address,x[i].ratings);
    }

function getNumOfUsers(){
    return new Promise((res,rej)=>{
       return res(v);
    })
   }
   getNumOfUsers(x)
   .then(res=>{
       console.log(res);
   })
   .catch(err=>{
       console.log(err);
   })
 