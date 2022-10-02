stored=JSON.parse(localStorage.getItem("userdata"))

form=document.querySelector("form")
form.addEventListener("submit",function(){
  event.preventDefault()

  

  stored.forEach(function(el){
    if(form.email.value==el.email && form.password.value==el.password){
      alert("Login Success")
      window.open("Tracktime-Navbar.html")
    }else if(form.email.value==el.email && form.password.value!==el.password){

      alert("Incorrect Password")
      
    }else if(form.email.value!==el.email){
     
      alert("You're not Registered \n Sign Up first")

      window.open("Signup-layout.html")

    }
      
  })
  
})
