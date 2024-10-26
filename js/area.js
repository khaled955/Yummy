const closeBtn = document.getElementById("closeBtn")
const searchBtn = document.getElementById("searchBtn")
const ingredientBtn = document.getElementById("ingredientBtn")


let mealCountry;
let dataFinal;
let lastMealDetails;
let currentCountry;
let allContainer ;

$("#closeBtn").on("click",function(){
    $(".left-side-outer").animate({width:"toggle"},500 , function(){
 
     $("ul.links li").toggle(200)
    })
   closeBtn.classList.toggle("fa-x")
 })

 

 searchBtn.addEventListener("click",function(){
    window.location.assign("search.html")
 })


 ingredientBtn.addEventListener("click",function(){
  window.location.assign("ingredient.html")
 })


 // https://www.themealdb.com/api/json/v1/1/list.php?a=list;



  async function getDataByArea(){

let data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
let dataList = await data.json()
 mealCountry = dataList.meals


 if (data.ok && data.status === 200) {
  $(".lds-facebook").fadeOut(500,function(){
    $(".loading").slideUp(500,function(){
$("body.area").css("overflow","auto")

    })
  })



}









displayCountry(mealCountry)



 }



//  getDataByArea()




// filter by area 
//https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian


 async function getDataFilterByCountry(current){


let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${current}`)

let dataList = await data.json()
 dataFinal = dataList.meals










displayMealsForSpecialCountry(dataFinal)



}









   async function getmealsDetails(meal){

let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
let dataList = await data.json()
 lastMealDetails = dataList.meals




  }


















function displayMealsForSpecialCountry(meals){
    document.getElementById("areaContainer").innerHTML = ""
    for (let i = 0; i < meals.length; i++) {
       
        document.getElementById("areaContainer").innerHTML += `
    
        <div class="col-md-3">
               <div class="first-inner position-relative overflow-hidden rounded-3 main-inner">
                 <img class="w-100" src="${meals[i].strMealThumb}" alt="">
                 <div class="over-lay w-100 h-100  d-flex justify-content-center align-items-center">
                      <h2 class="text-center h3">${meals[i].strMeal}</h2>
                 </div>
               </div>
             </div>
       
       
       
       `
    
    
    
    
    }
    
    
    
    
    }





















  function displayCountry(array){

 document.getElementById("areaContainer").innerHTML = ""

 for (let i = 0; i < array.length; i++) {
    

 document.getElementById("areaContainer").innerHTML += `

  <div class="col-md-3">
 <div class="inner text-white fs-2 p-3 text-center area-box">
    <i class="fa-solid fa-house"></i>
     <h2 class="tex-center h3">${array[i].strArea}</h2>
   </div>
 </div> 






 `




 }



  }





   async function waitData(){

await getDataByArea()
let allBox = document.querySelectorAll(".area-box")
allBox.forEach((ele,index)=>{

ele.addEventListener("click",function(e){
    e.stopImmediatePropagation()
     currentCountry = mealCountry[index].strArea

    getDataFilterByCountry(currentCountry)
 
  





})

})




  }



  waitData()






  







function displayMealDetails(mealsInfo,i){

    document.getElementById("areaContainer").innerHTML = ""

        document.getElementById("areaContainer").innerHTML = `
    
       
   <div class="col-md-4">
    <div class="inner">
      <img class="w-100 rounded-4 mb-3" src="${mealsInfo[i].strMealThumb}" alt="">
    <h2>${mealsInfo[i].strMeal}</h2>
    </div>
   </div>

   <div class="col-md-8">
    <div class="inner">
   <h2 class="mb-2">Instructions</h2>
   <p class="mb-2 lh-lg">${mealsInfo[i].strInstructions}</p>
   <p class="mb-2 fs-2">Area : <span>${mealsInfo[i].strArea}</span></p>
   <p class="mb-2 fs-2"> Category: <span>${mealsInfo[i].strCategory}</span></p>
   <p class="mb-3 fs-2">Recipes:</p>
   <ul class="d-flex gap-2 flex-wrap mb-3 list-unstyled fw-bold">
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure1}</li>
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure2}</li>
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure3}</li>
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure4}</li>
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure5}</li>
    <li class="rounded-3 bg-white text-black p-3"> ${mealsInfo[i].strMeasure6}</li>
   </ul>
   <p class="mb-3">Tags:</p>
   <a href="${mealsInfo[i].strSource}" class=" btn btn-primary" target="_blank"> Source</a> <a href="${mealsInfo[i].strYoutube}" class="btn btn-warning" target="_blank"> Youtube</a>

   
   
    </div>
   </div>
       
       
       
       `
    
    
    
    
    
    
    


  


}




