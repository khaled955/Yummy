const closeBtn = document.getElementById("closeBtn")
const inputName = document.getElementById("inputName")
const inputLetters = document.getElementById("inputLetters")
const categoryBtn = document.getElementById("categoryBtn")
const areaBtn = document.getElementById("areaBtn")
const ingredientBtn = document.getElementById("ingredientBtn")

ingredientBtn.addEventListener("click",function(){
  window.location.assign("ingredient.html")
 })


areaBtn.addEventListener("click",function(){

  window.location.assign("area.html")
  
  })





$("#closeBtn").on("click",function(){
    $(".left-side-outer").animate({width:"toggle"},500 , function(){
 
     $("ul.links li").toggle(200)
    })
   closeBtn.classList.toggle("fa-x")
 })

 
categoryBtn.addEventListener("click",function(){
  window.location.assign("category.html")
})

// get data by meal name


// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

 async function getDataByName (mealName){

let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
let dataList =  await data.json()
let mealsList = dataList.meals

displayMeals(mealsList)

}







inputName.addEventListener("input",function(){

if (inputName.Value !== "") {
    getDataByName(inputName.value)
}else{

 document.getElementById("serchContainer").innerHTML = ""


}
   


})






function displayMeals(meals){
    document.getElementById("serchContainer").innerHTML = ""
    for (let i = 0; i < meals.length; i++) {
       
       
        document.getElementById("serchContainer").innerHTML += `
    
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
    




    // getting data by first litters

// www.themealdb.com/api/json/v1/1/search.php?f=a


    async function getDataByLetters (letter){

        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let dataList =  await data.json()
        let mealsList = dataList.meals
        
        displayMeals(mealsList)
        
        }
        
        
        
        
        
        
        
        inputLetters.addEventListener("input",function(){
        
        if (inputLetters.Value !== "") {
            getDataByLetters(inputLetters.value)
        }else{
        
         document.getElementById("serchContainer").innerHTML = ""
        
        
        }
           
        
        
        })
        
        
        
        
        
        
        function displayMeals(meals){
            document.getElementById("serchContainer").innerHTML = ""
            for (let i = 0; i < meals.length; i++) {
               
               
                document.getElementById("serchContainer").innerHTML += `
            
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
            
