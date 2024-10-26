const closeBtn = document.getElementById("closeBtn")
const searchBtn = document.getElementById("searchBtn")
const areaBtn = document.getElementById("areaBtn")
const ingredientBtn = document.getElementById("ingredientBtn")
const contactBtn = document.getElementById("contactBtn")


let dataCategory;
let mealCategory;
let currentCat;

$("#closeBtn").on("click",function(){
    $(".left-side-outer").animate({width:"toggle"},500 , function(){
 
     $("ul.links li").toggle(200)
    })
   closeBtn.classList.toggle("fa-x")
 })


 ingredientBtn.addEventListener("click",function(){
  window.location.assign("ingredient.html")
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

 //https://www.themealdb.com/api/json/v1/1/categories.php

 //https://www.themealdb.com/api/json/v1/1/list.php?c=list


  async function getDataByCategory(){

let data = await  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
let dataList = await data.json() 
dataCategory = dataList.categories

if (data.ok && data.status === 200) {
  $(".lds-facebook").fadeOut(500,function(){
    $(".loading").slideUp(500,function(){
$("body.category").css("overflow","auto")

    })
  })



}







displayData(dataCategory)


 }


 getDataByCategory()




 function displayData(meals){


    for (let i = 0; i < meals.length; i++) {
   
   
        document.getElementById("categoryContainer").innerHTML += `
    
        <div class="col-md-3 overflow-hidden">
               <div class="first-inner position-relative overflow-hidden rounded-3 main-inner cat-inner">
                 <img class="w-100" src="${meals[i].strCategoryThumb}" alt="">
                 <div class="over-lay w-100 h-100 overflow-hidden text-center p-5 ">
                      <h2 class="mb-3">${meals[i].strCategory}</h2>
                    <p class="text-black h6">${meals[i].strCategoryDescription}</p>

                 </div>
               </div>
             </div>
       
       
       
       `
    
    
    
    
    }





 }




// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


  async function getDataFilterByCategory(cat){

let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)

let dataList = await data.json()
 let mealsFiltered = dataList.meals
 

console.log(mealsFiltered)
displayMeals(mealsFiltered)

 }









  async function waitData(){

await  getDataByCategory()


let allInners = document.querySelectorAll(".cat-inner")
allInners.forEach((ele,index)=>{

ele.addEventListener("click",function(){

 currentCat = dataCategory[index].strCategory
 getDataFilterByCategory(currentCat)

})





})

  }



  waitData()





    function displayMeals(finalMeals){
        document.getElementById("categoryContainer").innerHTML = ""
        for (let i = 0; i < finalMeals.length; i++) {
           
            document.getElementById("categoryContainer").innerHTML += `
        
            <div class="col-md-3">
                   <div class="first-inner position-relative overflow-hidden rounded-3 main-inner">
                     <img class="w-100" src="${finalMeals[i].strMealThumb}" alt="">
                     <div class="over-lay w-100 h-100  d-flex justify-content-center align-items-center">
                          <h2 class="text-center h5">${finalMeals[i].strMeal}</h2>
                     </div>
                   </div>
                 </div>
           
           
           
           `
        
        
        
        
        }
        
        
        
        
        }


    
        
 