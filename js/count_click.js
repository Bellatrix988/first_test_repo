let btn = document.getElementById('btn')
                  .addEventListener('click', btnOncklick);
var count = 0;

function btnOncklick(){
  count++;
  if(count <= 3)
    alert("Count click = "+ count);
}

