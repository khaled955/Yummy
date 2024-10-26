const closeBtn = document.getElementById("closeBtn")
const searchBtn = document.getElementById("searchBtn")
const contactBtn = document.getElementById("contactBtn")
let dataFinal ;
let finalMeals;
let currentMeal;
let currentMealInfo;

$("#closeBtn").on("click",function(){
    $(".left-side-outer").animate({width:"toggle"},500 , function(){
 
     $("ul.links li").toggle(200)
    })
   closeBtn.classList.toggle("fa-x")
 })

 

 searchBtn.addEventListener("click",function(){
    window.location.assign("search.html")
 })

 contactBtn.addEventListener("click",function(){
    window.location.assign("contact.html")
 })


 searchBtn.addEventListener("click",function(){
  window.location.assign("search.html")
})
categoryBtn.addEventListener("click",function(){
  window.location.assign("category.html")
})
areaBtn.addEventListener("click",function(){
  window.location.assign("area.html")
})










 // main ingredient api
 //https://www.themealdb.com/api/json/v1/1/list.php?i=list

//   first get main ingredient

 async function getMainIngredient(){
let data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
let dataList =  await data.json()
 dataFinal = dataList.meals



 if (data.ok && data.status === 200) {
  $(".lds-facebook").fadeOut(500,function(){
    $(".loading").slideUp(500,function(){
$("body.ingredient").css("overflow","auto")

    })
  })



}






displayMainIngredient(dataFinal)

}

// getMainIngredient()


// display main ingredient

function displayMainIngredient(meals){

    document.getElementById("ingredRow").innerHTML = ""
for (let i = 0; i < 20; i++) {
document.getElementById("ingredRow").innerHTML += `


  <div class="col-md-3">
    <div class="inner text-center overflow-hidden ingredient-box">
      <i class="fa-solid fa-drumstick-bite mb-2 fs-2 fw-bold"></i>
      <h2 class="h1 fw-bold">${meals[i].strIngredient}</h2>
      <p class="lead ingre-p">${meals[i].strDescription}</p>
    </div>
   </div>







`


}


}



// https://www.themealdb.com/api/json/v1/1/filter.php?i=

// get meals for each ingredient


 async function getMealsForEachIngredient(currentMeal){
let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${currentMeal}`)
let dataList = await data.json()
currentMeal = dataList.meals

displayMealsAfterFilterByIngredient(currentMeal)
}




function displayMealsAfterFilterByIngredient(mealList){

    document.getElementById("ingredRow").innerHTML = ""
    for (let i = 0; i < mealList.length; i++) {
       
        document.getElementById("ingredRow").innerHTML += `
    
        <div class="col-md-3">
               <div class="first-inner position-relative overflow-hidden rounded-3 main-inner-row">
                 <img class="w-100" src="${mealList[i].strMealThumb}" alt="">
                 <div class="over-lay w-100 h-100  d-flex justify-content-center align-items-center">
                      <h2 class="text-center h3">${mealList[i].strMeal}</h2>
                 </div>
               </div>
             </div>
       
       
       
       `
    
    
    
    
    }





}




 async function getMealsAfterClick(){

await getMainIngredient()

let allBoxs = document.querySelectorAll(".ingredient-box")
allBoxs.forEach((ele,index)=>{

    ele.addEventListener("click",function(){
        currentMealInfo = dataFinal[index].strIngredient
        getMealsForEachIngredient(currentMealInfo)


    })
})


}


getMealsAfterClick()




