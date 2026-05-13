
function lmtoggle(){
   let theme = document.body;
   theme.classList.toggle("light-mode")
   let btn = document.getElementById("btn");
   if (btn.innerHTML === "Lightmode"){
      btn.innerHTML = "Darkmode";
   } else {
      btn.innerHTML = "Lightmode"
   };

   var text = document.getElementById("hero_toggle");
   text.classList.toggle("text");

   var project_text = document.getElementById("project");
   project_text.classList.toggle("text")
}

