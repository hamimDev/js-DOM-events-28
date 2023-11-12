// <!-- option-1 -->
//     <button onclick="document.body.style.backgroundColor='yellow'">
//         BG yellow
//     </button>


// option-2-JS
function bgRed(){
    document.body.style.backgroundColor='red';
    // document.body.style.backgroundColor='red';
}

// option-3-JS
const eid = document.getElementById('ibgBlue');
        eid.onclick = blueBg;
        function blueBg(){
            document.body.style.backgroundColor='blue';
        }
   
  // option-3-other-JS
const jid = document.getElementById('ibgPurple');
        jid.onclick = function blueBg(){
            document.body.style.backgroundColor='purple';
        };
        
// option-4-JS

const pid = document.getElementById('idgPink');
pid.addEventListener('click', pinkBg);
function pinkBg(){
    document.body.style.backgroundColor='pink';
}

// option-4-other-JS
const gid = document.getElementById('idgGreen');
gid.addEventListener('click', 
function greenBg(){
    document.body.style.backgroundColor='green';
}
);


// option-4-final-JS

document.getElementById('idgBlack').addEventListener('click', function(){
    document.body.style.backgroundColor='black';})
