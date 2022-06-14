 // This is my first js command
 //document.getElementById("count-el").innerText = 5
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 let count = 0
 function increment()
{
    count += 1
    countEl.textContent = count
}
function decrement()
{
    count -= 1
    if(count >= 0)
    {
       countEl.textContent = count
    }
    else
    {
      count = 0;
    }
}
function save()
{
    let countstr = count + "-"
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}
