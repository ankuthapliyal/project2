// ==========================================
// HOME PAGE DATA
// ==========================================


// Hero Section

const homeHero = {

    title:"🙏 Jai Mata Di",

    heading:"🏗️ Shree Kuldevi Mandir Nirmanadhin Hai",

    description:
    "Mandir ka nirman samast bhakton ke sahyog se kiya ja raha hai. Aap bhi is pavitra karya me apna yogdan dein."
};



function loadHero(){

let box=document.getElementById("heroContent");


if(box){

box.innerHTML=`

<h1>
${homeHero.title}
</h1>

<h2>
${homeHero.heading}
</h2>

<p>
${homeHero.description}
</p>

<button class="btn btn-danger">
💰 Donate Now
</button>

<button class="btn btn-warning">
📸 View Gallery
</button>

`;

}

}




// Latest Announcement


const announcements=[

"Mandir Nirman 62% Complete",

"Navratri Mahotsav ki taiyari shuru",

"Bhakton se sahyog ka aagrah"

];



function loadAnnouncement(){


let box=document.getElementById("announcement");


if(box){


let html="";


announcements.forEach(item=>{


html+=`

<li>
📢 ${item}
</li>

`;

});


box.innerHTML=html;


}

}





// Recent Updates


const updates=[

{
date:"12 July 2026",
text:"Naye marble ka karya shuru hua"
},

{
date:"8 July 2026",
text:"Boundary wall ka karya pura hua"
},

{
date:"1 July 2026",
text:"Bhakton dwara daan prapt hua"
}

];



function loadUpdates(){


let box=document.getElementById("updates");


if(box){


let html="";


updates.forEach(data=>{


html+=`

<div class="card p-3 mb-3">


<h5>
📅 ${data.date}
</h5>


<p>
${data.text}
</p>


</div>

`;

});


box.innerHTML=html;


}

}





// Committee Message


const committeeMessage=

"Mandir ka nirman keval ek bhavan nahi balki hamari aastha aur sanskriti ka pratik hai. Aap sabhi ka sahyog is pavitra karya ko safal banayega.";



function loadMessage(){


let box=document.getElementById("committeeMessage");


if(box){


box.innerHTML=`

<p>
🙏 ${committeeMessage}
</p>


<h5>
- Shree Kuldevi Mandir Nirman Samiti
</h5>

`;

}


}





// Gallery Preview


function loadGalleryPreview(){


let box=document.getElementById("galleryPreview");


if(box){


let html="";


galleryData.slice(0,4).forEach(img=>{


html+=`

<div class="col-md-3">

<img src="${img}"
class="img-fluid rounded shadow">

</div>

`;

});


box.innerHTML=html;


}


}





// Home Page Loader Update

document.addEventListener("DOMContentLoaded",()=>{


loadHero();

loadAnnouncement();

loadUpdates();

loadMessage();

loadGalleryPreview();


});