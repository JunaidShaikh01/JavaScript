let paragraph = document.querySelector('.paragraph');
let para = document.querySelector('.para');
let closeBtn = document.querySelector('.close-btn');

// closeBtn.addEventListener('click' , function(e){
//     const target = e.target;
//     if (target === closeBtn) {
//         para.style.diplay = 'none'
//     }
// })

for (const close_btn of closeBtn) {
    close_btn.onclick = ()=>{
        para.style.display = 'none'
    }
}
