
/// <reference types="../@types/jquery"/>





const closeBtn = document.getElementById("closeBtn")
const searchBtn = document.getElementById("searchBtn")
const categoryBtn = document.getElementById("categoryBtn")
const areaBtn = document.getElementById("areaBtn")
const ingredientBtn = document.getElementById("ingredientBtn")
const inputName = document.getElementById("inputName")
const inputMail = document.getElementById("inputMail")
const inputPhone = document.getElementById("inputPhone")
const inputAge = document.getElementById("inputAge")
const inputPassword = document.getElementById("inputPassword")
const inputPasswordConfirm = document.getElementById("inputPasswordConfirm")
const submitBtn = document.getElementById("submitBtn")
const allInput = document.querySelectorAll(".input-data")
let erroP = document.querySelector(".erro-p")
const form = document.getElementById("form")

const allInputs = document.querySelectorAll(".form-control")







let nameRegex = /^[a-zA-Z]{3,}$/
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let phoneRegex = /^01[0125]\d{8}$/
let validAge = 18
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

let allRegex = [nameRegex , emailRegex , phoneRegex ,passwordRegex]
form.addEventListener("submit",function(e){

e.preventDefault()

})

// submitBtn.disabled = true


$("#closeBtn").on("click",function(){
    $(".left-side-outer").animate({width:"toggle"},500 , function(){
 
     $("ul.links li").toggle(200)
    })
   closeBtn.classList.toggle("fa-x")
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
 ingredientBtn.addEventListener("click",function(){
    window.location.assign("ingredient.html")
 })


allInput.forEach((input,index)=>{

input.addEventListener("input",function(){

    validatData(input,allRegex[index]) 


})


})













 function validatData(ele,regex){

if (regex.test(ele.value)) {
    
    ele.nextElementSibling.classList.replace("d-block","d-none")
    ele.classList.add("is-valid")
    ele.classList.remove("is-invalid")
 return true
}else{

ele.nextElementSibling.classList.replace("d-none","d-block")
ele.classList.remove("is-valid")
    ele.classList.add("is-invalid")

}






 }


 inputPasswordConfirm.addEventListener("input",function(){

checkpasswwordRepeat()


 })

function checkpasswwordRepeat(){
if (inputPasswordConfirm.value ===  inputPassword.value) {
    inputPasswordConfirm.nextElementSibling.classList.replace("d-block","d-none")
    inputPasswordConfirm.classList.add("is-valid")

    return true
}else{
inputPasswordConfirm.nextElementSibling.classList.replace("d-none","d-block")


}




}



allInputs.forEach(ele=>{
    ele.addEventListener("blur",function(){

ele.nextElementSibling.classList.replace("d-block","d-none")
ele.classList.remove("is-invalid")

    })
})





inputAge.addEventListener("input",function(){

    checkAgeValue()

})

function checkAgeValue(){

if (inputAge.value >= validAge) {
    inputAge.nextElementSibling.classList.remove("d-block")
    inputAge.nextElementSibling.classList.add("d-none")
    inputAge.classList.add("is-valid")
inputAge.classList.remove("is-invalid")
return true
}else{

    inputAge.nextElementSibling.classList.add("d-block")
    inputAge.nextElementSibling.classList.remove("d-none")
    inputAge.classList.remove("is-valid")
inputAge.classList.add("is-invalid")

}




}

submitBtn.disabled = true

allInputs.forEach(ele=>{
    ele.addEventListener("input",function(){

        if (Array.from(allInputs).every(ele=>ele.classList.contains("is-valid"))) {
            submitBtn.disabled = false
        }else{
            submitBtn.disabled = true


        }






    })
})




submitBtn.addEventListener("click",function(){

    formatInput()

})

function formatInput(){
Array.from(allInputs,ele=>{
ele.value = ""
ele.classList.remove("is-valid")

})


submitBtn.disabled = true



}