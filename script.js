document.addEventListener("DOMContentLoaded", function () {

home();
productson();
contact();
sticky();
// window.addEventListener('resize', switchElem);
// window.addEventListener('resize', hamburger);

  switchElem();
hamburger();

});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});


/*------------------------------ HOME START ----------------------------------*/

function home() {

// window.addEventListener('resize', switchElem);

const contain = document.querySelector(".container");


const landing = document.createElement("div");
landing.id = "landing";


const land = document.createElement("div");
const land2 = document.createElement("div");
const landp = document.createElement("div");
const landp2 = document.createElement("div");

function landVar(value1, value2, value3, value4){

    value3.classList.add("land_p_div");
    value1.classList.add("land");
        setTimeout(() => {
              value1.style.opacity = "1";
              value1.style.transform = 'translateX(0%)';
              value3.style.opacity = "1";
              value3.style.transform = 'translateX(0%)';
        }, 300);

          value2.classList.add("land");
           value2.id = "landsw";
          value4.classList.add("land_p_div");
           value4.id = "paragr2";
        setTimeout(() => {
            value2.style.opacity = "1";
              value2.style.transform = 'translateX(0%)';
              value4.style.opacity = "1";
              value4.style.transform = 'translateX(0%)';
        }, 600);

};

landVar(land, land2, landp, landp2);

const para = document.createElement("div");
// para.classList.add("land_p_div");
 para.id = "paragr";

para.innerHTML = "Discover the art and soul of clay with over <strong>40 years of professional experience</strong> in the craft. Our website is your gateway to exploring exquisite handmade pottery, where tradition meets innovation.";
// para.style.opacity = "1";


let landimage = document.createElement("img");
landimage.className = "thumbnail";
landimage.src = "./Thumbs/land_thumb1.jpg";
landimage.setAttribute('alt', 'Beautiful_Ceramic');
landimage.setAttribute('data-large', './Vazak/75044642_2470026609719852_7237428096041746432_n.jpg');
// landimage.style.opacity = "1";


let landimage2 = document.createElement("img");
landimage2.className = "thumbnail";
 landimage2.id = "landimg2";
landimage2.src = "./Thumbs/land_thumb2.jpg";
landimage2.setAttribute('alt', 'Beautiful_Ceramic');
landimage2.setAttribute('data-large', './Vazak/75456910_2470032499719263_1282600470082224128_n.jpg');
// landimage.style.opacity = "1";

const para2 = document.createElement("div");
 // para2.id = "paragr2";
// para2.classList.add("land_p_div");
para2.innerHTML = "Whether you're a seasoned artist, an aspiring potter, or simply a lover of beautiful ceramics, we invite you to delve into our collection, workshops, and stories. Let's shape beauty together!";
// para.style.opacity = "1";

landp.appendChild(para);
landp2.appendChild(para2);
land.appendChild(landp);
land.appendChild(landimage);
land2.appendChild(landimage2);
land2.appendChild(landp2);
landing.appendChild(land);
landing.appendChild(land2);
contain.appendChild(landing);


const homebutton = document.querySelector("#home");

const homeheadhome = document.querySelector("#homehead");

 homeheadhome.style.opacity = "0";
      homeheadhome.style.transform = 'translateX(+20%)';
  setTimeout(() => {
      homeheadhome.style.opacity = "1";
      homeheadhome.style.transform = 'translateX(0%)';
      }, 1000);

homebutton.addEventListener('click', function() {

           const contacthome = document.querySelector("#contact");

            if(contacthome){
     const homeformval = document.querySelectorAll(".form-group");
     // formanim(prodformval);


      homeformval.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 100);
      });

 setTimeout(() => {
        contacthome.remove();
 }, 1000);
}

     homeheadhome.style.opacity = "0";
      homeheadhome.style.transform = 'translateX(+20%)';
  setTimeout(() => {
      homeheadhome.style.opacity = "1";
      homeheadhome.style.transform = 'translateX(0%)';
          homeheadhome.innerHTML = "HOME";
  }, 1000);

     const productDivs = document.querySelector('#productdiv');

          const productimgdivs = document.querySelectorAll(".prodimgdiv");
         const paragraphdivs = document.querySelectorAll(".prodpara");

        productimgdivs.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 100);
            });

            setTimeout(() => {
            productDivs.remove();
            }, 1000);

    landp.appendChild(para);
landp2.appendChild(para2);
land.appendChild(landp);
land.appendChild(landimage);
land2.appendChild(landimage2);
land2.appendChild(landp2);
landing.appendChild(land);
landing.appendChild(land2);

if(contain.contains(productDivs) || contain.contains(contacthome)){
     setTimeout(() => {
contain.appendChild(landing);
    anim(land, landp);
    anim(land2, landp2);
 }, 1001);
} else if(!productDivs || !contacthome) {
 setTimeout(() => {
contain.appendChild(landing);
    anim(land, landp);
    anim(land2, landp2);
 }, 1);
}

});

light(landimage);
light(landimage2);

};

/*--------------------------- HOME DONE ---------------------------------*/

/*--------------------------- LIGHTBOX START ---------------------------------*/


function light(elem1){

        const lightbox = document.createElement("div");
const largeImage = document.createElement("img");
const closeButton = document.createElement("span");
const nav = document.querySelector("#nav-cont");

lightbox.id = 'lightbox';

closeButton.classList.add('close-button');
//closeButton.id = 'close';

largeImage.id = 'largeImage';


// Function to open lightbox

       elem1.addEventListener('click', function() {

           nav.style.opacity = 0;
            setTimeout(() => {
           nav.style.display = "none";
            }, 500);
        lightbox.appendChild(closeButton);
        lightbox.appendChild(largeImage);
        document.body.appendChild(lightbox);


         const largeImageUrl = this.getAttribute('data-large');
        largeImage.src = largeImageUrl;

        setTimeout(() => {
        lightbox.style.opacity = "1";
        largeImage.style.opacity = "1";
        largeImage.style.transform = "scale(1)";
        }, 1);

    });

       // Function to close lightbox
closeButton.addEventListener('click', function() {

               nav.style.display = "flex";

      setTimeout(() => {
               nav.style.opacity = 1;
                 }, 1);

                lightbox.style.opacity = "0";
                largeImage.style.opacity = "0";
                largeImage.style.transform = "scale(0.8)";


    // Hide after animation

     setTimeout(() => {
    largeImage.src = '';
    lightbox.remove();
       }, 501);
});

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox || event.target === largeImage) {
        closeButton.click();
    }
});

};


/*--------------------------- LIGHTBOX DONE ---------------------------------*/


/*--------------------------- ANIM START ---------------------------------*/

function anim(elem1, elem2){
         setTimeout(() => {
              elem1.style.opacity = "0";
              elem1.style.transform = 'translateX(+20%)';
              elem2.style.opacity = "0";
              elem2.style.transform = 'translateX(-20%)';
        }, 300);

 setTimeout(() => {
              elem1.style.opacity = "1";
              elem1.style.transform = 'translateX(0%)';
              elem2.style.opacity = "1";
              elem2.style.transform = 'translateX(0%)';
        }, 600);
};

/*--------------------------- ANIM DONE ---------------------------------*/



/*--------------------------- Productson START ---------------------------------*/



function productson() {

    const container = document.querySelector('.container');
    const landbutton = document.querySelector('#prod');
    const home =  document.querySelector('#landing');
 const home_anim = document.querySelectorAll('.land');


const productdiv = document.createElement("div");
productdiv.id = "productdiv";



let imageSources = {
    product1: {
        path: "./Thumbs/prod_thumb1.jpg",
        attribute: "./Vazak/69982441_2470042189718294_8091450087646953472_n.jpg" // Replace with your desired attribute
    },
    product2: {
        path: "./Thumbs/prod_thumb2.jpg",
        attribute: "./Vazak/73319491_2470043316384848_8000823919764307968_n.jpg" // Replace with your desired attribute
    },
    product3: {
        path: "./Thumbs/prod_thumb3.jpg",
        attribute: "./Vazak/75419079_2470027213053125_7875414869040693248_n.jpg" // Replace with your desired attribute
    },
    product4: {
        path: "./Thumbs/prod_thumb4.jpg",
        attribute: "./Vazak/75407718_2470030663052780_8468640214435233792_n.jpg" // Replace with your desired attribute
    },
    product5: {
        path: "./Thumbs/prod_thumb5.jpg",
        attribute: './Vazak/75289363_2470025453053301_1614525330947571712_n.jpg' // Replace with your desired attribute
    },
     product6: {
        path: "./Thumbs/prod_thumb6.jpg",
        attribute: './Vazak/75242171_2470037129718800_6783575620518412288_n.jpg' // Replace with your desired attribute
    },
    product7: {
        path: "./Thumbs/prod_thumb7.jpg",
        attribute: './Vazak/72628424_2470022883053558_8092578933901361152_n.jpg' // Replace with your desired attribute
    },
    product8: {
        path: "./Thumbs/prod_thumb8.jpg",
        attribute: './Vazak/74643571_2472046719517841_7151052227795222528_n.jpg' // Replace with your desired attribute
    },
    product9: {
        path: "./Thumbs/prod_thumb9.jpg",
        attribute: './Vazak/75429661_2470050739717439_1098579478138847232_n.jpg' // Replace with your desired attribute
    },
    product10: {
        path: "./Thumbs/prod_thumb10.jpg",
        attribute: './Vazak/75439241_2470014006387779_5756207486126260224_n.jpg' // Replace with your desired attribute
    },
     product11: {
        path: "./Thumbs/prod_thumb11.jpg",
        attribute: './Vazak/75543540_2470019159720597_1899437870632927232_n.jpg' // Replace with your desired attribute
    },
    product12: {
        path: "./Thumbs/prod_thumb12.jpg",
        attribute: './Vazak/75604002_2470000896389090_2352578395197407232_n.jpg' // Replace with your desired attribute
    },
    product13: {
        path: "./Thumbs/prod_thumb13.jpg",
        attribute: './Vazak/75604026_2470027713053075_5139983033243271168_n.jpg' // Replace with your desired attribute
    },
    product14: {
        path: "./Thumbs/prod_thumb14.jpg",
        attribute: './Vazak/75627314_2470024329720080_5977559268654579712_n.jpg' // Replace with your desired attribute
    },
    product15: {
        path: "./Thumbs/prod_thumb15.jpg",
        attribute: './Vazak/76608815_2470029976386182_101488848843833344_n.jpg' // Replace with your desired attribute
    },
     product16: {
        path: "./Thumbs/prod_thumb16.jpg",
        attribute: './Vazak/76651506_2470028606386319_6935890515342655488_n.jpg' // Replace with your desired attribute
    },
    product17: {
        path: "./Thumbs/prod_thumb17.jpg",
        attribute: './Vazak/76651685_2470022169720296_6045325271240802304_n.jpg' // Replace with your desired attribute
    },
    product18: {
        path: "./Thumbs/prod_thumb18.jpg",
        attribute: './Vazak/77259990_2470023776386802_2088527374957150208_n.jpg' // Replace with your desired attribute
    },
    product19: {
        path: "./Thumbs/prod_thumb19.jpg",
        attribute: './Vazak/77259990_2470023776386802_2088527374957150208_n.jpg' // Replace with your desired attribute
    },
    product20: {
        path: "./Thumbs/prod_thumb20.jpg",
        attribute: './Vazak/407414586_6771102072945596_7156845416241042825_n.jpg' // Replace with your desired attribute
    },
     product21: {
        path: "./Thumbs/prod_thumb21.jpg",
        attribute: './Vazak/407444910_6771102622945541_9053827518897049676_n.jpg' // Replace with your desired attribute
    },
    product22: {
        path: "./Thumbs/prod_thumb22.jpg",
        attribute: './Vazak/407448517_6771100409612429_2227164294258716005_n.jpg' // Replace with your desired attribute
    },
    product23: {
        path: "./Thumbs/prod_thumb23.jpg",
        attribute: './Vazak/408091391_6774960069226463_3343171123770404615_n.jpg' // Replace with your desired attribute
    },
    product24: {
        path: "./Thumbs/prod_thumb24.jpg",
        attribute: './Vazak/408096740_6771103732945430_2387316161454573749_n.jpg' // Replace with your desired attribute
    },
    product25: {
        path: "./Thumbs/prod_thumb25.jpg",
        attribute: './Vazak/408106677_6774957805893356_204718974494136813_n.jpg' // Replace with your desired attribute
    },
     product26: {
        path: "./Thumbs/prod_thumb26.jpg",
        attribute: './Vazak/408117389_6771104089612061_8342561336889961668_n.jpg' // Replace with your desired attribute
    },
    product27: {
        path: "./Thumbs/prod_thumb27.jpg",
        attribute: './Vazak/408117697_6774957445893392_1729951635286951020_n.jpg' // Replace with your desired attribute
    },
    product28: {
        path: "./Thumbs/prod_thumb28.jpg",
        attribute: './Vazak/408141950_6774958815893255_1810327010055413146_n.jpg' // Replace with your desired attribute
    },
    product29: {
        path: "./Thumbs/prod_thumb29.jpg",
        attribute: "./Vazak/408142515_6774959372559866_2240863643536709217_n.jpg" // Replace with your desired attribute
    },
    product30: {
        path: "./Thumbs/prod_thumb30.jpg",
        attribute: "./Vazak/408213827_6774962439226226_487462102593709141_n.jpg" // Replace with your desired attribute
    },
     product31: {
        path: "./Thumbs/prod_thumb31.jpg",
        attribute: "./Vazak/468430120_8670912129631238_8320740518165797159_n.jpg" // Replace with your desired attribute
    },
    product32: {
        path: "./Thumbs/prod_thumb32.jpg",
        attribute: "./Vazak/468605256_8670913792964405_840546391422331012_n.jpg" // Replace with your desired attribute
    },
    product33: {
        path: "./Thumbs/prod_thumb33.jpg",
        attribute: "./Vazak/468645855_8670912312964553_2489661589442480788_n.jpg" // Replace with your desired attribute
    },
    product34: {
        path: "./Thumbs/prod_thumb34.jpg",
        attribute: "./Vazak/468715808_8670913526297765_6159789881489812946_n.jpg" // Replace with your desired attribute
    },
    product35: {
        path: "./Thumbs/prod_thumb35.jpg",
        attribute: "./Vazak/468817581_8670912499631201_8021941058235712821_n.jpg" // Replace with your desired attribute
    },
     product36: {
        path: "./Thumbs/prod_thumb36.jpg",
        attribute: "./Vazak/468839216_8670911476297970_7939373538317558318_n.jpg" // Replace with your desired attribute
    },
    product37: {
        path: "./Thumbs/prod_thumb37.jpg",
        attribute: "./Vazak/468865304_8670913019631149_1013359844129367221_n.jpg" // Replace with your desired attribute
    },
    product38: {
        path: "./Thumbs/prod_thumb38.jpg",
        attribute: "./Vazak/468927806_8670912679631183_857849952658463978_n.jpg" // Replace with your desired attribute
    },
    product39: {
        path: "./Thumbs/prod_thumb39.jpg",
        attribute: "./Vazak/469364239_8670911909631260_996821385039782035_n.jpg" // Replace with your desired attribute
    },
    product40: {
        path: "./Thumbs/prod_thumb40.jpg",
        attribute: "./Vazak/470168894_8748523058536811_837112240336802217_n.jpg" // Replace with your desired attribute
    },
     product41: {
        path: "./Thumbs/prod_thumb41.jpg",
        attribute: "./Vazak/470186674_8748530721869378_5560372904907630682_n.jpg" // Replace with your desired attribute
    },
    product42: {
        path: "./Thumbs/prod_thumb42.jpg",
        attribute: "./Vazak/470198525_8748521668536950_761462347760227956_n.jpg" // Replace with your desired attribute
    },
    product43: {
        path: "./Thumbs/prod_thumb43.jpg",
        attribute: "./Vazak/470216408_8748519851870465_893400840550380334_n.jpg" // Replace with your desired attribute
    },
    product44: {
        path: "./Thumbs/prod_thumb44.jpg",
        attribute: "./Vazak/470221589_8748518745203909_8487904608796762297_n.jpg" // Replace with your desired attribute
    },
    product45: {
        path: "./Thumbs/prod_thumb45.jpg",
        attribute: "./Vazak/470224021_8748523688536748_415650800567888099_n.jpg" // Replace with your desired attribute
    },
     product46: {
        path: "./Thumbs/prod_thumb46.jpg",
        attribute: "./Vazak/470525982_8748520481870402_3413819646923363484_n.jpg" // Replace with your desired attribute
    },
    product47: {
        path: "./Thumbs/prod_thumb47.jpg",
        attribute: "./Vazak/470568902_8748521325203651_3892340485026375782_n.jpg" // Replace with your desired attribute
    },
    product48: {
        path: "./Thumbs/prod_thumb48.jpg",
        attribute: "./Vazak/471080312_8748524801869970_2435954816396736004_n.jpg" // Replace with your desired attribute
    }
};


const createProductElement = (price, imgSrc) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("prodimgdiv");

    const prodImg = document.createElement("img");
    prodImg.src = imgSrc.path;
    prodImg.classList.add("prodimg");
    prodImg.setAttribute("alt", "Beautiful Ceramic");
    prodImg.setAttribute("data-large", imgSrc.attribute);
    productDiv.appendChild(prodImg);

            light(prodImg);


    const productPara = document.createElement("p");
    productPara.innerText = price;
    productPara.classList.add("prodpara");

    productDiv.appendChild(productPara);
    return productDiv;
};

const cash = "€1000";

Object.entries(imageSources).forEach(([key, img]) => {
    const productElem = createProductElement(cash, img);
    productdiv.appendChild(productElem);
});


const homeheadprod = document.querySelector("#homehead");

   landbutton.addEventListener('click', function() {

       const contactprod = document.querySelector("#contact");

home_anim.forEach((item, index) => {
    setTimeout(() => {
            item.style.opacity = "0";
        }, index * 300); // Staggered effect
     setTimeout(() => {
                item.remove();
                 home.remove();
                }, 801);
});

     homeheadprod.style.opacity = "0";
      homeheadprod.style.transform = 'translateX(+20%)';
  setTimeout(() => {
      homeheadprod.style.opacity = "1";
      homeheadprod.style.transform = 'translateX(0%)';
        homeheadprod.innerHTML = "Our Products";
  }, 1000);

 if(contactprod){
     const prodformval = document.querySelectorAll(".form-group");
     // formanim(prodformval);


      prodformval.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 100);
      });

 setTimeout(() => {
        contactprod.remove();
 }, 801);
}

 const landingdiv = document.querySelector("#landing");

if(landingdiv || contactprod){
setTimeout(() => {

    //container.appendChild(productdiv);

if(!container.contains(productdiv)){
container.appendChild(productdiv);
};

 const product = document.querySelectorAll(".prodimgdiv");
const paragraph = document.querySelectorAll(".prodpara");

prodAnim(product, paragraph);

}, 802);

} else if(!landingdiv){
    setTimeout(() => {

//container.appendChild(productdiv);
if(!container.contains(productdiv)){
container.appendChild(productdiv);
};

 const product = document.querySelectorAll(".prodimgdiv");
const paragraph = document.querySelectorAll(".prodpara");

prodAnim(product, paragraph);

}, 1);
}

});
};

/*--------------------------- Productson DONE ---------------------------------*/


function prodAnim(elem1, elem2){
    elem1.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = 'translateX(+20%)';
  setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = 'translateX(0%)';
  }, (index + 1) * 200);
});
    elem2.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = 'translateX(-100%)';
  setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = 'translateX(0%)';
  }, (index + 1) * 200);
});
};

function sticky(){
    // script.js
window.onscroll = function() {
    const navbar = document.querySelector(".navbar");

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        navbar.style.padding = "10px";
    } else {
             navbar.style.padding = "40px";
    }
};

};

/*--------------------------- CONTACT START ---------------------------------*/

function contact() {

    const contactcontainer =  document.querySelector(".container");

const contactbut = document.querySelector("#cont");
const homeheadcontact = document.querySelector("#homehead");

const contactdiv = document.createElement("div");
contactdiv.id = "contact";

const facebk = document.createElement("h2");
facebk.id = "facebook";
facebk.classList.add("form-group");
facebk.textContent = 'Facebook';
contactdiv.appendChild(facebk);

const form = document.createElement("form");
form.id = "contactForm";
 form.setAttribute('method', 'POST');
 // form.setAttribute('onsubmit', 'sendMail(); return false;');
 form.action = "https://formsubmit.co/c85aedc186ea5713e38833e7a514ed16";

const nameGroup = document.createElement("div");
nameGroup.classList.add("form-group");

const nameLabel = document.createElement('label');
// nameLabel.setAttribute('name', 'name');
nameLabel.textContent = 'Name:';

if(window.innerWidth <= 710){
nameLabel.style.fontSize = "14px";
}

nameGroup.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
// nameLabel.setAttribute('name', 'name');
nameInput.name = "name";
nameInput.required = true;
nameInput.style.width = "400px";

if(window.innerWidth <= 1024){
nameInput.style.width = "300px";
}

if(window.innerWidth <= 710){
nameInput.style.width = "200px";
}


nameGroup.appendChild(nameInput);

form.appendChild(nameGroup);

const emailGroup = document.createElement('div');
emailGroup.className = 'form-group';

const emailLabel = document.createElement('label');
// emailLabel.setAttribute('name', 'email');
emailLabel.textContent = 'email:';

if(window.innerWidth <= 710){
emailLabel.style.fontSize = "14px";
}

emailGroup.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
// emailLabel.setAttribute('name', 'email');
emailInput.name = "email";
emailInput.required = true;
emailInput.style.width = "400px";

if(window.innerWidth <= 1024){
emailInput.style.width = "300px";
}


if(window.innerWidth <= 710){
emailInput.style.width = "200px";
}

emailGroup.appendChild(emailInput);

form.appendChild(emailGroup);

const messageGroup = document.createElement('div');
messageGroup.className = 'form-group';

const messageLabel = document.createElement('label');
// messageLabel.setAttribute('name', 'message');
messageLabel.textContent = 'Message:';

if(window.innerWidth <= 710){
messageLabel.style.fontSize = "14px";
}

messageGroup.appendChild(messageLabel);

const messageTextarea = document.createElement('textarea');
messageTextarea.id = 'message';
// messageLabel.setAttribute('name', 'message');
messageTextarea.name = "message";
messageTextarea.rows = 4;
messageTextarea.required = true;
messageTextarea.style.width = "400px";
messageTextarea.style.height = "200px";

if(window.innerWidth <= 1024){
messageTextarea.style.width = "300px";
}

if(window.innerWidth <= 710){
messageTextarea.style.width = "200px";
messageTextarea.style.fontSize = "14px";
}

messageGroup.appendChild(messageTextarea);

form.appendChild(messageGroup);

const submitButton = document.createElement('button');
submitButton.id = 'senbut';
submitButton.className = 'form-group';
submitButton.type = 'submit';
submitButton.textContent = 'Send Message';
form.appendChild(submitButton);

         contactdiv.appendChild(form);

    const homecontact =  document.querySelector('#landing');

 const home_animcontact = document.querySelectorAll('.land');

contactbut.addEventListener('click', () => {

     const productDivscont = document.querySelector('#productdiv');

          const productimgdivscont = document.querySelectorAll(".prodimgdiv");


        home_animcontact.forEach((item, index) => {
    setTimeout(() => {
            item.style.opacity = "0";
        }, index * 300); // Staggered effect
     setTimeout(() => {
                // item.remove();
                 homecontact.remove();
                }, 801);
});

             homeheadcontact.style.opacity = "0";
      homeheadcontact.style.transform = 'translateX(+20%)';
  setTimeout(() => {
      homeheadcontact.style.opacity = "1";
      homeheadcontact.style.transform = 'translateX(0%)';
              homeheadcontact.innerHTML = "Contact Us";
  }, 1000);


    if(contactcontainer.contains(productDivscont) || contactcontainer.contains(homecontact)){

         productimgdivscont.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 100);
              setTimeout(() => {
            productDivscont.remove();
        }, 1000);
    });

        setTimeout(() => {

            if(!contactcontainer.contains(contactdiv)){
        contactcontainer.appendChild(contactdiv);
            }

    const formval = document.querySelectorAll(".form-group");
     formanim(formval);

     const facebkid = document.getElementById("facebook");
const facebklink = document.createElement("a");
facebklink.id = "facebooklink";
facebklink.href = '';
facebklink.target = '_blank';
facebklink.textContent = facebkid.textContent;
facebkid.textContent = '';
     facebkid.appendChild(facebklink);

        }, 1001);


    } else if(!productDivscont || !homecontact){

         setTimeout(() => {

                if(!contactcontainer.contains(contactdiv)){
        contactcontainer.appendChild(contactdiv);
            }

    const formval = document.querySelectorAll(".form-group");
     formanim(formval);

     const facebkid = document.getElementById("facebook");
const facebklink = document.createElement("a");
facebklink.id = "facebooklink";
facebklink.href = '';
facebklink.target = '_blank';
facebklink.textContent = facebkid.textContent;
facebkid.textContent = '';
     facebkid.appendChild(facebklink);

        }, 1);
    }

});

};

/*--------------------------- CONTACT DONE ---------------------------------*/

function formanim(elem){
          elem.forEach((item, index) => {
              item.style.opacity = "0";
              setTimeout(() => {
            item.style.opacity = "1";
              }, (index + 1) * 500);
    });
};

function switchElem() {
    const landsw2 = document.querySelector("#landsw");
const landimg2 = document.querySelector("#landimg2");
const landparagr2 = document.querySelector("#paragr2");

    if (window.innerWidth <= 1024) {
        // Switch places of element1 and element2
        landsw2.insertBefore(landparagr2, landimg2);


    } else {
        // Revert back to original order if width is greater than 1024
        landsw2.insertBefore(landimg2, landparagr2);
    }
};

function hamburger() {

     if (window.innerWidth <= 1024) {



    const swnavbar = document.querySelector(".navbar");
    const swnavlinks = document.querySelector(".nav-links");
    const swnavlinkschild = swnavlinks.querySelectorAll("*");

     swnavlinkschild.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 300);
              setTimeout(() => {
                  swnavlinks.style.display = "none";
            }, index * 301);
     });

    const hamburg = document.createElement("div");
hamburg.id = "hamburg";
const bar1 = document.createElement("div");
bar1.classList.add("bar");
const bar2 = document.createElement("div");
bar2.classList.add("bar");
const bar3 = document.createElement("div");
bar3.classList.add("bar");
hamburg.appendChild(bar1);
hamburg.appendChild(bar2);
hamburg.appendChild(bar3);

const topbar = hamburg.children[0];
    const midbar = hamburg.children[1];
    const botbar = hamburg.children[2];

 if (!swnavbar.querySelector("#hamburg")) {
  swnavbar.insertBefore(hamburg, swnavlinks);
 }

hamburg.addEventListener('click', () => {

    if(swnavlinks.style.display === "none" || swnavlinks.style.display === ""){

           topbar.style.transform = 'rotate(45deg) translate(5px, 5px)';
    midbar.style.opacity = '0';
    botbar.style.transform = 'rotate(-45deg) translate(5px, -5px)';

swnavlinks.style.display = "flex";
swnavlinks.style.flexDirection = 'column';

setTimeout(() => {
 swnavlinks.style.maxHeight = "200px";
}, 1);

swnavlinkschild.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "1";
              }, index * 300);
});



    } else {

           topbar.style.transform = 'rotate(0deg) translate(0px, 0px)';
    midbar.style.opacity = '1';
    botbar.style.transform = 'rotate(0deg) translate(0px, 0px)';

         swnavlinks.style.maxHeight = "0";

        swnavlinkschild.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "0";
              }, index * 300);
        });

              setTimeout(() => {
        swnavlinks.style.display = "none";
              }, 901);
    }
});

  if (!swnavbar.querySelector("#hamburg")) {
swnavbar.appendChild(hamburg);
     }

     } else  if (window.innerWidth >= 1024) {

                 swnavlinks.style.display = "flex";
         swnavlinks.style.flexDirection = 'row';

            swnavlinkschild.forEach((item, index) => {
              setTimeout(() => {
            item.style.opacity = "1";
              }, index * 300);
 });
         swnavbar.removeChild(hamburg);
    }
};
