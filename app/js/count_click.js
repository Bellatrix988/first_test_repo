let btn = document.getElementById('btn')
                  .addEventListener("click", btnOnClick)

let count = 0;

function btnOnClick(){
  if(count < 3)
    alert("Count click = " + ++count);
  else
    btn.removeEventListener("click", btnOnClick);
}
