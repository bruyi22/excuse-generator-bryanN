import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const excuseElement = document.querySelector('#excuse');
    const button = document.querySelector('#generate-btn');

    // 2. Define components
    const who = ['The dog', 'My grandma', 'A ghost', 'A turtle', 'My boss'];
    const action = ['ate', 'destroyed', 'lost', 'stole', 'hid'];
    const what = ['my project', 'the keys', 'my motivation', 'my phone'];
    const when = ['this morning', 'just now', 'last night', 'during lunch'];

    // 3. Generating Function
    const generateExcuse = () => {
        let rdmWho = who[Math.floor(Math.random() * who.length)];
        let rdmAction = action[Math.floor(Math.random() * action.length)];
        let rdmWhat = what[Math.floor(Math.random() * what.length)];
        let rdmWhen = when[Math.floor(Math.random() * when.length)];

        return `${rdmWho} ${rdmAction} ${rdmWhat} ${rdmWhen}.`;
    };

    // 4. Show first excuse at onload
    excuseElement.innerHTML = generateExcuse();

    // 5. Generate excuse
    if(button) {
        button.addEventListener('click', () => {
            excuseElement.innerHTML = generateExcuse();
        });
    }

};
