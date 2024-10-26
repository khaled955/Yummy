/// <reference types="../@types/jquery"/>


//  index page logic 

const closeBtn = document.getElementById("closeBtn")
const searchBtn = document.getElementById("searchBtn")
const categoryBtn = document.getElementById("categoryBtn")
const areaBtn = document.getElementById("areaBtn")
const ingredientBtn = document.getElementById("ingredientBtn")
const contactBtn = document.getElementById("contactBtn")
let mealsList;
let searchListByName;
let searchListByLitters;


$("#closeBtn").on("click",function(){
   $(".left-side-outer").animate({width:"toggle"},500 , function(){

    $("ul.links li").toggle(200)
   })
  closeBtn.classList.toggle("fa-x")
})


categoryBtn.addEventListener("click",function(){
  window.location.assign("category.html")
})
contactBtn.addEventListener("click",function(){
  window.location.assign("contact.html")
})


searchBtn.addEventListener("click",function(){
    window.location.assign("search.html")
})



areaBtn.addEventListener("click",function(){

  window.location.assign("area.html")
  
  })



  ingredientBtn.addEventListener("click",function(){
    window.location.assign("ingredient.html")
   })
  


// get data from API 

//  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const mainApi = "https://www.themealdb.com/api/json/v1/1/search.php?s="


 async function getDataBySearchApi(api){

let data =  await fetch(api)

let dataList =  await data.json()
mealsList = dataList.meals

if (data.ok && data.status === 200) {
  $(".lds-facebook").fadeOut(500,function(){
    $(".loading").slideUp(500,function(){
$("body.index").css("overflow","auto")

    })
  })



}



displayMeals(mealsList)

}


getDataBySearchApi(mainApi)



// main ui display in index page

function displayMeals(meals){

for (let i = 0; i < meals.length; i++) {
   
   
    document.getElementById("mainRow").innerHTML += `

    <div class="col-md-3">
           <div class="first-inner position-relative overflow-hidden rounded-3 main-inner">
             <img class="w-100" src="${meals[i].strMealThumb}" alt="">
             <div class="over-lay w-100 h-100  d-flex justify-content-center align-items-center">
                  <h2>${meals[i].strMeal}</h2>
             </div>
           </div>
         </div>
   
   
   
   `




}




}



function displayMealDetails(mealsInfo,i){

    document.getElementById("mainRow").innerHTML = ""
    

   

        document.getElementById("mainRow").innerHTML = `
    
       
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







 async function waitData(){
await getDataBySearchApi(mainApi)

let inners = document.querySelectorAll(".main-inner")
inners.forEach((ele,index)=> {
  ele.addEventListener("click",function(){

    displayMealDetails(mealsList,index)
  })

})
}

waitData()







