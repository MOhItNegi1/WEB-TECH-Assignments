// let container = document.createElement("div");
// container.classList.add("container");
// document.body.appendChild(container);

// fetch("https://fakestoreapi.com/products/category/electronics")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(product => {
//             let card = document.createElement("div");
//             card.classList.add("card");

//             card.innerHTML = `
//                 <img src="${product.image}" alt="">
//                 <h4>${product.title}</h4>
//                 <p>$${product.price}</p>
//             `;

//             container.appendChild(card);
//         });
//     })
//     .catch(err => console.log(err));


// async function fethData(){
//     let data=await fetch("https://fakestoreapiserver.reactbd.org/api/products")
//     let newData=await data.json();
//     console.log(newData);

//     newData.data.forEach((element)=>{
//         let div=document.createElement("div");
//         let img=document.createElement("img");
//         let h2=document.createElement("h2");
//         .appendChild(div);
//         .src=element.image;
//         div.appendChild=element.title;
//         h2.textContent=element.title;
//         div.appendChild(h2);
        
//     })
// }

async function fetchData() {
    let data = await fetch("https://fakestoreapiserver.reactbd.org/api/products");
    let newData = await data.json();

    console.log(newData);

    newData.data.forEach((element) => {

        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");

        // set image source
        img.src = element.image;

        // set title
        h2.textContent = element.title;

        // append elements
        div.appendChild(img);
        div.appendChild(h2);

        // append to body (or any container)
        document.body.appendChild(div);
    });
}

fetchData();
