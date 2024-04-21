<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="index.css">
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="dynamic-input.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
</head>
<body>
    <div class="container">
        <div id="login-box" class="Login-box brder-lne flexbox">
            <div id="viddiv"></div>
            <i><h1>Sign-Up</h1></i>
            <form>
                <div></div>
                <input  class="inps bg-color text-style" type="email" id="inp1" placeholder="Email">
                <div></div>
                <input type="password" class="inps bg-color text-style" id="inp01" placeholder="New Password">
                <div></div>
                <input   type="password" class="inps bg-color text-style" id="inp2" placeholder="Confirm Password">
            </form>
            <div class="signuplink">
                <a href="file:///C:/Users/madhu/OneDrive/Desktop/homepageex/.vscode/Loginpage/Loginpage.html">Already have an account? Login!</a>
            </div>
            <div class="center">
                <div id="no"></div>
                <input type="submit" onclick="btn()"  id="btn" class="btn bg-brdr text-dec">
            </div>
        </div>
    </div>
</body>
</html>

// Function to prevent the context menu from appearing
/*function preventContextMenu(event) {
    event.preventDefault();
  }
  
  // Add an event listener to the document to listen for the contextmenu event
  document.addEventListener("contextmenu", preventContextMenu);*/
  


function enter() {
    if (event.keyCode === 13) {
        btn();
    }
}
document.addEventListener("keydown", enter);

function print(a) {
    
    console.log(a);
}
function ax(aler) {
    alert(aler)
}
 function btn() {
    document.removeEventListener("keydown", enter);
    let inp = document.getElementById('inp1').value;
    let inp2 = document.getElementById('inp2').value;
    let inp01 = document.getElementById('inp01').value;


    // Another method for event listeners
    let newi2 = document.getElementById('inp2');
    let newi3 = document.getElementById('inp01');

    
    if (inp === '' && inp2 === '' && inp01 === '') {
        let promise = new Promise((resolve, reject)=>{
                resolve();
                document.querySelector('.Login-box').style.display = 'none';
        })
        
        promise.then((result)=>{
            //c 1.9)
            let createnewdiv = document.createElement('div');
            let createnewH1 = document.createElement('h1');
            //dynamic style added for c 1.9
            createnewH1.style.color = 'blue';
            createnewH1.textContent = 'Sorry, you have put blank inputs, redirecting....';
            //div element
            createnewdiv.style.width = '1300vh';
            createnewdiv.style.height = '1em';
            //Appended
            createnewdiv.appendChild(createnewH1);
            document.body.appendChild(createnewdiv);
            setTimeout(()=>{
                location.reload();
            },3000)
        }); // else if 1 func basically named as func(2else(if))
    } else if (inp === '' && inp2 != '' && inp01 != '') {
        let promise2 = new Promise((resolve, reject)=>{
            resolve();
            document.querySelector('.Login-box').style.display = 'none';
    })
        promise2.then((result)=>{
//c 2.1)
    let createnewdiv2 = document.createElement('div');
    let createnewH12 = document.createElement('h1');
    //dynamic style added for c 2.1
    createnewH12.style.color = 'blue';
    createnewH12.textContent = 'Sorry, you have put 1 blank input, redirecting....';
    //div element
    createnewdiv2.style.width = '1300vh';
    createnewdiv2.style.height = '1em';
    //Appended
    createnewdiv2.appendChild(createnewH12);
    document.body.appendChild(createnewdiv2);
    setTimeout(()=>{
    location.reload();
    },3000)
        })
    } else if (inp != '' && inp2 === '' && inp01 === '') {
        let promise3 = new Promise((resolve, reject)=>{
            resolve();
            document.querySelector('.Login-box').style.display = 'none';
    })
        promise3.then((result)=>{
//c 2.1)
    let createnewdiv3 = document.createElement('div');
    let createnewH13 = document.createElement('h1');
    //dynamic style added for c 2.1
    createnewH13.style.color = 'blue';
    createnewH13.textContent = 'Sorry, you have put 2 blank input, redirecting....';
    //div element
    createnewdiv3.style.width = '1300vh';
    createnewdiv3.style.height = '1em';
    //Appended
    createnewdiv3.appendChild(createnewH13);
    document.body.appendChild(createnewdiv3);
    setTimeout(()=>{
    location.reload();
    },3000)
        })
    } else if (inp2 != inp01) {
        alert('The given Password dont match!')
    } else {
        document.title = 'More details'
        let promise = new Promise((resolve, reject)=>{
            document.querySelector('.btn').style.display = 'none';
            setTimeout(()=>{
                document.querySelector('.Login-box').style.display = 'none';
                resolve(23);
            }, 2000)
            
        })
        promise.then(()=>{
            /* code failure - 
            let check = false;
            if(!check) {
                code here
                check = true;
            } ---- basically not allowing 2 times formation of asking box but it failed*/

                    let container = document.createElement('div');

                        container.style.height = '40vh';
                        container.style.width = '110vh';
    
                            let asking_box = document.createElement('div');
    
                    asking_box.style.backdropFilter = 'blur(12px)'
                    asking_box.style.width = '56vh';
                    asking_box.style.height = '41vh';
                    asking_box.style.border = 'solid 2px red';
                    asking_box.style.borderRadius = '20px';
    
                            let inpinsideQBOX = document.createElement('input');
                            let h1 = document.createElement('h1');
                            h1.textContent = 'Fill the given details'
                            h1.style.fontSize = '30px';
                            let submitbtn = document.createElement('button');
                            let forms = document.createElement('form')
                            let inp1 = document.createElement('input')
                            let inp2p = document.createElement('input');
                            let inp3 = document.createElement('input');

                                                    forms.style.display = 'flex';
                                                    forms.style.gap = '30px';
                                                    forms.style.marginTop = '60px';
                                                    inp1.style.width = '18vw';
                                                    inp2p.style.width = '18vw';
                                                    inp3.style.width = '18vw';
                                                    

                inp1.style.height = '3vh';
                inp2p.style.height = '3vh';    
                inp3.style.height = '3vh';                                                   
                                                        inp1.classList.add('inputs');
                                                        inp2p.classList.add('inputs');
                                                        inp3.classList.add('inputs');
                                                        submitbtn.classList.add('btn-for-submssion')
                                                        inp1.setAttribute('id', 'First-Name');
                                                        inp2p.setAttribute('id', 'Last-Name');
                                                        inp3.setAttribute('id', 'Username');
                                                        inp1.setAttribute('type', 'text');
                                                        inp2p.setAttribute('type', 'text');
                                                        inp1.setAttribute('placeholder', 'First Name');
                                                        inp2p.setAttribute('placeholder', 'Last Name');
                                                        inp3.setAttribute('placeholder', 'Username');
                                                        submitbtn.textContent = 'Continue';
                                                        submitbtn.onclick = Continue;

                                                        inp1.style.textAlign = 'center';
                                                        inp2p.style.textAlign = 'center';
                                                        inp3.style.textAlign = 'center';

                                                        h1.appendChild(forms)
                                                        container.appendChild(asking_box)
                                                        document.body.appendChild(container);
                                                        asking_box.appendChild(h1);
                                                        forms.appendChild(inp1);
                                                        forms.appendChild(inp2p);
                                                        forms.appendChild(inp3);
                                                        forms.appendChild(submitbtn);
                                                     check = true;

                                                     function Continue() {
                                                        let newip10291 = document.getElementById('First-Name').value
                                                        let newip39203 = document.getElementById('Last-Name').value
                                                        let newip29302 = document.getElementById('Username').value

                                                        if (newip10291 === "" && newip29302 === "" && newip39203 === "") {
                                                            ax('fill')
                                                        }
                                                     }
            
        })
    }
}
