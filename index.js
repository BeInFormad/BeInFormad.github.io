let num = 0;
let max = localStorage.getItem('MaxScore')
document.getElementById("Gyatt").onclick = function () {
    if (num<=max) {
        num+=1;
        document.getElementById('h1tag').textContent=num;
    } else {
        num+=1;
        localStorage.setItem('MaxScore', num);
        document.getElementById('h1tag').textContent=num;
        document.getElementById('p').textContent=num
    }
}
document.getElementById('p').textContent=localStorage.getItem('MaxScore')
