
function lmtoggle(){
   let theme = document.body;
   theme.classList.toggle("light-mode")
   let btn = document.getElementById("btn");
   if (btn.innerHTML === "Lightmode"){
      btn.innerHTML = "Darkmode";
   } else {
      btn.innerHTML = "Lightmode"
   };

   var text = document.getElementById("main_page");
   text.classList.toggle("text");

   var project_text = document.getElementById("projects");
   project_text.classList.toggle("text")

   var project_title = document.getElementById("changeTitleCol");
   project_title.classList.toggle("text")

   var contact_page = document.getElementById("contact_me");
   contact_page.classList.toggle("contact_toggle");

   
}

