form= document.querySelector("form")
data= JSON.parse(localStorage.getItem("userdata")) || []
form.addEventListener("submit",function(event){
 event.preventDefault()
 let obj={
   email:form.email.value,
   password:form.password.value,
   phone:form.phone.value
 }
 data.push(obj)

 if(form.email.value=="" || 
   form.password.value=="" || form.phone.value==""){

     alert("Fill all details first")

   }
  else{

 localStorage.setItem("userdata",JSON.stringify(data))
  alert("You're now registered")
  window.open("sign-in-layout.html")
   }
 
   form.email.value=""
   form.password.value=""
   form.phone.value=""


})
