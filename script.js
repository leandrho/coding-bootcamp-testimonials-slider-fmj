const texts = [
    {
        name: "Tanya Sinclair",
        prof: "UX Engineer",
        text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        image: "./images/image-tanya.jpg"
    },
    {
        name: "John Tarkpor",
        prof: "Junior Front-end Developer",
        text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        image: "./images/image-john.jpg"
    },
];
let current = 1;

const doNext = () => {
    current = current?0:1;
    const obj = texts[current];

    const nameElem = document.querySelector('.slider-name');
    const textElem = document.querySelector('.slider-text');
    const picElem = document.querySelector('.slider-pic');
    const imgElem = document.querySelector('#slider-img');

    nameElem.classList.add('fade-out');
    textElem.classList.add('fade-out');
    picElem.classList.add('fade-out');
    imgElem.classList.add('fade-out');

    setTimeout(() => {
        nameElem.classList.remove('fade-out');
        textElem.classList.remove('fade-out');
        picElem.classList.remove('fade-out');
        imgElem.classList.remove('fade-out');

        imgElem.src = obj.image;
        nameElem.innerHTML=obj.name+" <span>"+obj.prof+"</span>"
        textElem.innerHTML = obj.text;
        
        nameElem.classList.add('fade-in');
        textElem.classList.add('fade-in');
        picElem.classList.add('fade-in');
        
        setTimeout(() => {
            nameElem.classList.remove('fade-in');
            textElem.classList.remove('fade-in');
            picElem.classList.remove('fade-in');
            picElem.classList.remove('fade-in');
        }, 1500);
    }, 500);

}

const next = document.getElementById("next");
next.addEventListener('click',(e)=>{
    e.preventDefault();
    doNext();
});
const prev = document.getElementById("prev");
prev.addEventListener('click',(e)=>{
    e.preventDefault();
    doNext();
});

doNext();