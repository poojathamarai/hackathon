
// let ans=Math.floor(Math.random()*100+1);
// let count= 1;
// document.getElementById("check").onclick = function(){
//     let numb=document.getElementById("number").value;
//     if (numb == ans)
//     {
        
//         window.alert(`You have guessed the number correctly!!It took you ${count} tries`)
//     }
//     else{
//         if(numb>ans)
//         {   count++;
//             window.alert(`Incorrect number.Try smaller number`)
            
//         }
//         else
//         {   count++;
//             window.alert(`Incorrect number.Try larger number`)
            
//         }

//     }
// }
// create a function sum
// create a function mul
// create a function calculate which should take call back function and display output in console


// create a function  make uppercase use inbuilt function toUppercase()
// create another function to reverse string function
// create a function handler name take name from user using call back function
// display the 
//  let capital = (name) =>{
//      return name.toUpperCase();
//  }
//  let reversestr= (name) =>{
//      let splitstr=name.split("")
// let rev=splitstr.reverse();
// let reversename=rev.join("")
// return reversename;
//  }
// function handler(name,callback){
//     console.log(callback(name));
// }

// handler("pooja",capital);
// handler("pooja",reversestr);

// create a function map which takes 2 inputs
// an array of function []10 20 30 40 50]
// a call back function =?
// a function should applied to each element of the array inside map 
// map should return new array filled with number using callback function on each element
// console.log(typeof(1));
// console.log(typeof(1.1));
// console.log(typeof('1.1'));
// console.log(typeof(true));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof([]));
// console.log(typeof({}));
// console.log(typeof(NaN));
// __________________________________________________________________________________________________________
// odd numbers
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let oddnum = function(num){
//     console.log("The odd numbers in the array are")
//     for(i in num){
//         if(num[i]%2!==0)
//         console.log(`${num[i]}`)
//     }
// // }
// oddnum(arr);
// let arr=[1,2,3,4,5,6,7,8,9,10];
// (function()
// {
//     console.log("The odd numbers in the array are")
//     for(i in arr)
//     {
//         if(arr[i]%2!==0)
//         console.log(`${arr[i]}`)
//     }
// })(arr);
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let oddnum = (num) => {
//      console.log("The odd numbers in the array are")
//     for(i in num)
//     {
//         if(num[i]%2!==0)
//         console.log(`${num[i]}`)
//     }

// }
// oddnum(arr);
// _______________________________________________________________________________________________________
// Uppercase
// let str="pooja";
// let capitalstr = function(a){
//     console.log(`The upper case of the string is ${a.toUpperCase()}`)
// }
// capitalstr(str);
// let str="pooja";
// (function(a){
//     console.log(`The upper case of the string is ${a.toUpperCase()}`)
// })(str);
// let str="pooja"
// let capitalstr = (a) => console.log(`The upper case of the string is ${a.toUpperCase()}`)
// capitalstr(str);
// _______________________________________________________________________________________________________
// sum of all numbers in an array
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// let add = function(num)
// {   for(i in num)
//     {
//         sum=sum+num[i]
//     }
//   console.log(`The sum of numbers in the array ${sum}`)
// }
// add(arr);
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// (function(num)
// { 
//     for(i in num)
//      {
//          sum=sum+num[i]
//      }
//   console.log(`Sum of numbers in the array ${sum}`)

// })(arr);
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// let add= (num) => {
//     for(i in num)
//       {
//           sum=sum+num[i];
//       }
//   console.log(` The sum of numbers in the array ${sum}`)
// }
// add(arr);
// _______________________________________________________________________________________________________________
// palindrome
// let str1="madam"
// let str2="pooja"
// let palindrome= function(arr)
// {    const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// }
// palindrome(str1);
// palindrome(str2);
// (function(arr)
// {
//     const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// })("madam");
// let str1="madam"
// let str2="pooja"
// let palindrome= (arr) =>
// {    const len=arr.length;
//     for(let i=0;i<(len-1)/2;i++)
//     {
//         if(arr[i]!== arr[len-i-1])
//          {
//              console.log(`${arr} is not a palindrome`)
//              break;
//          }
//          else
//            console.log(`${arr} is a palindrome`)
//     }
// }
// palindrome(str1);
// palindrome(str2);
// _________________________________________________________________
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         const data =["Apple","Banana","Grapes","Mangoes"]
//         if(data.length == 4)
//         {
//             resolve(data);
//         }
//         else 
//         reject("Spmething went wrong")
        


//     },3000)
// })
// console.log(promise);
// promise.then(result) => 
// https://docs.google.com/document/d/1K6jW6TPmqWvzoRAm2t-GlOAxKmMRsLt5zaCsdcH_3LM/edit
// https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json
// https://github.com/public-apis/public-apis
// const square = async function(x){
//     return x*x;
// }
// const data = await square(10);
// console.log(data)

// const url ="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" ;
// // fetch(url).then((response)=> response.json()).then((data)=>console.log(data)).catch((error)=> console.log(error));
// const fetchdata = async ()=>
// {
//     try
//     { 
//     const response = await fetch(url);
//     const countries =await response.json();
//     console.log(countries);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// };
// fetchdata();
// let btn = document.querySelector("#btn");
// let pic = document.querySelector("#photo");
// btn.addEventListener("click",function(){
//     fetch("https://dog.ceo/api/breeds/image/random").then(handleFetchError)
//     .then(res => res.json())
//     .then(data => {pic.src=data.message;})
//     .catch((err)=>console.log(err))});
// const handleFetchError = (request) =>{
//     if(!request.ok)
//     {
//         throw Error(request.status);
//     }
//     return request;
// }
// const url = "https://api.covid19api.com/summary"
// const fetchdata = async() =>
// {
//     try 
//     {
//         const response = await fetch(url);
//         const data = await response.json();
//          let  ans = data.filter(obj => obj.Country == "India");
//         console.log(ans)
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
// }
// fetchdata();

// fetch("https://api.covid19api.com/summary")
//   .then((apidata) => {
//     // console.log(apidata);
//     return apidata.json();  
//   })
//   .then((actualdata) => {
//     // console.log(actualdata);
//     // console.log(actualdata.Countries[76]);
//     // console.log(actualdata.Countries[76].Country);
//     // console.log(actualdata.Countries[76].TotalConfirmed);
//     // console.log(actualdata.Countries[76].TotalDeaths);
//     // console.log(actualdata.Countries[76].TotalRecovered);
//     // document.getElementById("apiindia").innerHTML =
//     //   actualdata.Countries[76].Country;

//     const realdata = actualdata.Countries[76];
//     document.getElementById("apiindia").innerHTML = `Country Name: ${realdata.Country}
//     <br>Total Confirmed: ${realdata.TotalConfirmed}
//     <br>Total Deaths: ${realdata.TotalDeaths}
//     <br>Total Recovered: ${realdata.TotalRecovered}`;
//   });
// let btn = document.querySelector("#btn");
// fetch("https://breakingbadapi.com/api/quote/random").then((apidata)=>{
//   return apidata.json();
// }).then((actualdata)=>{
//     btn.addEventListener("click", function(){
//         console.log(actualdata)
//         document.getElementById("apiseries").innerHTML =`
//         Quote : ${actualdata[0].quote}
//         <br>Author: ${actualdata[0].author}`
//     })
// }).catch((err)=>console.log(err))

// https://api.github.com/users/
// https://api.giphy.com/v1/gifs/search?api_key=Cc0cDk9PZZMUNjMgvr0MssB098TJR3kN&limit=25&offset=0&rating=g&lang=en&q=
// https://aws.random.cat/meow
// https://random.dog/woof.json
// <!-- <div class="container">
//       <h2>Getting Random images of dog</h2>
//       <img id="photo" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/international_dog_day_2021_4_r_1200x768.jpeg?mhENil.rEsB2Wju30UDroUYKmJ4NfkX4&size=770:433" alt="dogimage"/>
//       <button id="btn">Get the New Image</button>
//     </div> -->
// function display1(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "1";
//         callback();
//     },1000);
// }
// function display2(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "2";
//         callback();
//     },1000);
// }
// function display3(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "3";
//         callback();
//     },1000);
// }
// function display4(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "4";
//         callback();
//     },1000);
// }
// function display5(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "5";
//         callback();
//     },1000);
// }
// function display6(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "6";
//         callback();
//     },1000);
// }
// function display7(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "7";
//         callback();
//     },1000);
// }
// function display8(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "8";
//         callback();
//     },1000);
// }
// function display9(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "9";
//         callback();
//     },1000);
// }
// function display10(callback){
//     setTimeout(() =>
//     {
//         document.getElementById("countdown").innerHTML = "10";
//         callback();
//     },1000);
// }
// document.getElementById("btn").addEventListener("click",function()
// {
//     display10(()=>
//     {
//         display9(()=>
//         {
//             display8(()=>
//             {
//                   display7(()=>
//                     {
//                         display6(()=>
//                         {
//                             display5(()=>
//                             {
//                                 display4(()=>
//                                 {
//                                     display3(()=>
//                                     {
//                                         display2(()=>
//                                         {
//                                             display1(()=>
//                                             {
//                                                 setTimeout(()=> 
//                                                 {
//                                                     document.getElementById("countdown").innerHTML="HAPPY INDEPENDENCE DAY";
//                                                 },1000);
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
                
//             })
//         })
//     })


// })


// let url ="https://619dc713131c60001708907d.mockapi.io/user"
// function getData(){
//     fetch(url)
// .then((result)=>result.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));
// }
// function createData()
// {
//     let data={
//         name:"Pooja",
//         email:"pooja@gmail.com"
//     };
//     fetch(url,
//   {
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:
//     {
//         "Content-type": "application/json; charset=UTF-8",
//     }
//   }).then((result)=>result.json())
//   .then((data)=>console.log(data))
//   .catch((error)=> console.log(error))
// }
// createData();
// getData();

// function updateData(){
//     let data={
//         name:"Vijay George",
//         email:"george@gmail.com",
//     };
//     fetch(url + "/1",{
//         method:"PUT",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     }).then((result)=>result.json())
//     .then((data)=>console.log(data))
//     .catch((error)=> console.log(error))
// }
// updateData();

// function deleteData()
// {    
//     fetch(url + "/12",
//         {
//           method:"DELETE",
//           body:JSON.stringify(data),
//           headers:
//           {
//               "Content-type": "application/json; charset=UTF-8",
//           }
//         }).then((result)=>result.json())
//         .then((data)=>console.log(data))
//         .catch((error)=> console.log(error))
// }
// deleteData();

// function renderToy(toy) {
//     const toyDiv = document.createElement("div");
//     toyDiv.className = "card";
//     toyDiv.innerHTML = `
//       <h2>${toy.name}</h2>
//       <img src="${toy.image}" class="toy-avatar" />
//       <p>${toy.likes} Likes</p>
//       <button data-id='${toy.id}' class="like-btn">Like <3</button>
//       <button data-id='${toy.id}' class="delete-btn">Delete</button>
//       `;

//     toyCollection.appendChild(toyDiv);
//   }




//  function show(data)
//  {  
//     //  const prdtdiv = document.createElement("div");
//     //  prdtdiv.className="card";
//     for(i in data)
//     {
//      document.getElementById("display").innerHTML=`
//      <img src="${data[i].image_link}" alt="img">
//      <p>${data[i].brand}</p>
//      <p>${data[i].name}</p>
//      <p>${data[i].price} ${data[0].price_sign}</p>
//      <p>${data[i].product_link}</p>
//      <p>${data[i].description}</p>`; 
//     }
//  }



let url="http://makeup-api.herokuapp.com/api/v1/products.json";
fetchdata(url);
async function fetchdata(url)
{
    try 
    {
        const response = await fetch(url);
        const datas = await response.json();
        datas.forEach(data =>show(data));
    }
    catch(err)
    {
        console.log(err);
    }
}
const displayfun=document.getElementById("display")
function show(data) {
    const displayDiv = document.createElement("div");
    displayDiv.className = "card";
    displayDiv.innerHTML = `
      <img src="${data.image_link}" alt="img" id="image">
         <h6>Brand: ${data.brand}</h6>
         <h6> Name: ${data.name}</h6>
         <h6>Price:${data.price}${data.price_sign}</h6>
         <h6> Product Link: <a href="${data.product_link}" target="_blank">${data.product_link}</a></h6>`;
    displayfun.appendChild(displayDiv);
  }

  

 

