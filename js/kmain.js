const f_btns=document.querySelectorAll('.full_btn');
f_btns.forEach(function(f_btn){
    f_btn.addEventListener('mouseenter',function(e){
        e.currentTarget.classList.add('chBg');
    })
    f_btn.addEventListener('mouseleave',function(e){
        e.currentTarget.classList.remove('chBg');
    })
    
})

const r_btn=document.querySelector('.res_btn');
r_btn.addEventListener('mouseenter',function(){
    this.classList.add('hvr');
})
r_btn.addEventListener('mouseleave',function(){
    this.classList.remove('hvr');
})

// const slider=document.querySelector('.slide_contents');
// const slideImages=slider.querySelectorAll('img');
// const numSlides=slideImages.length;
// const slideWidth=25;
// let currentIndex=0;
// function nextSlide(){
//     currentIndex=(currentIndex + 1) % numSlides;
//     updateSlide();
// }
// function updateSlide(){
//     slider.style.transform=`translateX(-${currentIndex * slideWidth}%)`;
//     slideImages.forEach((img,i)=>{
//         if(i==(currentIndex + 2) % numSlides){
//             img.style.width=`538px`;
//             img.style.height=`716px`;
//         }else{
//             img.style.width=`307px`;
//             img.style.height=`359px`;
//         }
//     });
// }
// setInterval(nextSlide,3000);



const viewBtns=document.querySelectorAll('.view_btn');
const r_arr=document.querySelector('.view_btn>img');
const btn_txt=document.querySelector('i');
viewBtns.forEach(function(viewBtn){
    viewBtn.addEventListener('mouseenter',function(){
        this.classList.add('bgHvr');
        btn_txt.style.color='#000';
        // r_arr.style.display='inline-block';
        // r_arr.style.opacity=1;
    })
    viewBtn.addEventListener('mouseleave',function(e){
        this.classList.remove('bgHvr');
        btn_txt.style.color='#555';
        // btn_txt.classList.remove('mvbtn');
        // r_arr.classList.remove('arrCh');
        // r_arr.style.display='none';
    });
});

let week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let today=new Date();
let day1=today.getDay();
let days=document.querySelectorAll('.day');
days.forEach(function(day,i){
    if(i==0){
        day.innerHTML='TODAY';
    }else{
        day.innerHTML=week[day1+i]
    }
})

let dates=document.querySelectorAll('.dates');
dates.forEach(function(date,i){
    console.log(i);
    let year=today.getFullYear().toString();
    date.innerHTML=`${year.substring(2,4)}/${modiNum(today.getMonth()+1)}/${modiNum(today.getDate()+i)}`;
})

function modiNum(n){
    if(n<10){
        return '0' + n;
    }else{
        return n;
    }
}


let nav=document.querySelector('nav');
let logo=document.querySelector('nav>h1');
let gnb=document.querySelector('.gnb');
let fixBtn=document.querySelector('.fixBtn');
let ham=document.querySelector('.ham');
window.addEventListener('scroll',function(){
    if(window.scrollY){

        nav.classList.add('active');
        logo.classList.add('active');
        gnb.classList.add('active');
        fixBtn.classList.add('active');
        ham.classList.add('active');
    }else{
        nav.classList.remove('active');
        logo.classList.remove('active');
        gnb.classList.remove('active');
        fixBtn.classList.remove('active');
        ham.classList.remove('active');
    }
})
// window.addEventListener('resize',function(){
//     document.querySelector('body').innerHTML=window.innerWidth;
//     if(window.innerWidth<=375){

//     }else if(window.innerWidth<=1024){

//     }else{

//     }

// })
const courseLists=document.querySelectorAll('.course_wrap>li>div');
const covers=document.querySelectorAll('.cover');
const courseNames=document.querySelectorAll('.course_wrap>li>p');
covers.forEach(function(cover){
    cover.addEventListener('mouseenter',function(){
        cover.classList.add('bgBlk')
    })
    cover.addEventListener('mouseleave',function(){
        cover.classList.remove('bgBlk');
    })
})

// let facilitySwiper=document.querySelector('.facilitySwiper>.swiper-wrapper');
// let f_slides=document.querySelectorAll('.facilitySwiper .swiper-slide');
// function makeClone(){
//     let cloneSlide_first=f_slides[0]
//     // let cloneSlide_last=f_slides.lastElementChild.cloneNode(true);
//     facilitySwiper.appendChild(cloneSlide_first);
//     // facilitySwiper.insertBefore(cloneSlide_last,f_slides[0]);
// }
// makeClone();

let sec8=document.querySelector('.sec8');
const map_box=document.querySelector('#map>div:last-child');
const map=document.querySelector('#map>div:first-child img');
let sec7=document.querySelector('.sec7');
let sec7Top=sec7.offsetTop;
let sec8Top=sec8.offsetTop;
let sec8boxTop=map_box.offsetTop;
window.addEventListener('scroll',function(){
    if(sec8Top -100 <= window.scrollY){
        map.classList.add('dark');
        map_box.classList.add('scr_bg');
    }else{
        map.classList.remove('dark');
        map_box.classList.remove('scr_bg');
    }
})
// sec8.className='w100'; 
const mapimg=document.querySelector('#map');
if(window.innerWidth<=375){
    sec8.className.add='w100';
}
// console.log(sec8Top);
// console.log(window.scrollY);
// window.addEventListener('resize',function(){
//     if(window.innerWidth<=1024){
//         window.addEventListener('scroll',function(){
//             if(sec7Top <= window.scrollY){
//                 map.classList.add('dark');
//                 map_box.classList.add('scr_bg');
//             }else{
//                 map.classList.remove('dark');
//                 map_box.classList.remove('scr_bg');
//             }
//         })
//     }else{
//         window.addEventListener('scroll',function(){
//             if(sec8Top -300<= window.scrollY){
//                 map.classList.add('dark');
//                 map_box.classList.add('scr_bg');
//             }else{
//                 map.classList.remove('dark');
//                 map_box.classList.remove('scr_bg');
//             }
//         })
//     }
// })
