// // adding 100 para

// const time1=performance.now();

// for(let i=1;i<=100;i++){
//    let newElemnt=document.createElement('p');
//    newElemnt.textContent="this is para"+i;
//    document.body.appendChild(newElemnt);
// }
// const time2=performance.now();
// console.log('this is time take'+ (time2-time1)  +'ms');


// //optimize way
// const t1=performance.now();
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let element=document.createElement("p");
//     element.textContent="this is para"+i;
//      myDiv.appendChild(element);
    
// }
// document.body.appendChild(myDiv);
// const t2=performance.now();
// console.log("this take time"+(t2-t1)+ " ms");

// document fragement
let fragement=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let newpara=document.createElement('p');
    newpara.textContent='this is para'+i;
    fragement.appendChild(newpara);
}
document.body.appendChild(fragement);

