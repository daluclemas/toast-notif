const btn=document.querySelector('.btn');
const conatiner=document.querySelector('.container');

btn.addEventListener('click',()=>{
    createNotif();
});

const createNotif=()=>{
    const notif=document.createElement('div');
    notif.classList.add('toast');

    notif.innerText='THIS IS A WEIRD CHALLENGE';
    conatiner.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    },3000);

};