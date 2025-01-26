document.addEventListener("DOMContentLoaded", function () {

home();
productson();
contact();
sticky();


});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});


/*------------------------------ HOME START ----------------------------------*/

function home() {

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
          value4.classList.add("land_p_div");
        setTimeout(() => {
            value2.style.opacity = "1";
              value2.style.transform = 'translateX(0%)';
              value4.style.opacity = "1";
              value4.style.transform = 'translateX(0%)';
        }, 600);

};

landVar(land, land2, landp, landp2);

const para = document.createElement("p");
para.innerText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
// para.style.opacity = "1";


let landimage = document.createElement("img");
landimage.className = "thumbnail";
landimage.src = "./Thumbs/land_thumb1.jpg";
landimage.setAttribute('alt', 'Beautiful_Ceramic');
landimage.setAttribute('data-large', './Vazak/75044642_2470026609719852_7237428096041746432_n.jpg');
// landimage.style.opacity = "1";


let landimage2 = document.createElement("img");
landimage2.className = "thumbnail";
landimage2.src = "./Thumbs/land_thumb2.jpg";
landimage2.setAttribute('alt', 'Beautiful_Ceramic');
landimage2.setAttribute('data-large', './Vazak/75456910_2470032499719263_1282600470082224128_n.jpg');
// landimage.style.opacity = "1";

const para2 = document.createElement("p");
para2.innerText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
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

const productimgdiv = document.createElement("div");
productimgdiv.classList.add("prodimgdiv");
const productpara = document.createElement("p");
productpara.innerText = "€1000";
productpara.classList.add("prodpara");

const productimgdiv2 = document.createElement("div");
productimgdiv2.classList.add("prodimgdiv");
const productpara2 = document.createElement("p");
productpara2.innerText = "€1000";
productpara2.classList.add("prodpara");

const productimgdiv3 = document.createElement("div");
productimgdiv3.classList.add("prodimgdiv");
const productpara3 = document.createElement("p");
productpara3.innerText = "€1000";
productpara3.classList.add("prodpara");

const productimgdiv4 = document.createElement("div");
productimgdiv4.classList.add("prodimgdiv");
const productpara4 = document.createElement("p");
productpara4.innerText = "€1000";
productpara4.classList.add("prodpara");

const productimgdiv5 = document.createElement("div");
productimgdiv5.classList.add("prodimgdiv");
const productpara5 = document.createElement("p");
productpara5.innerText = "€1000";
productpara5.classList.add("prodpara");

const productimgdiv6 = document.createElement("div");
productimgdiv6.classList.add("prodimgdiv");
const productpara6 = document.createElement("p");
productpara6.innerText = "€1000";
productpara6.classList.add("prodpara");

const productimgdiv7 = document.createElement("div");
productimgdiv7.classList.add("prodimgdiv");
const productpara7 = document.createElement("p");
productpara7.innerText = "€1000";
productpara7.classList.add("prodpara");



const productimg = document.createElement("img");
productimg.classList.add("prodimg");
productimg.src = "./Thumbs/prod_thumb1.jpg";
productimg.setAttribute('alt', 'Beautiful_Ceramic');
productimg.setAttribute('data-large', './Vazak/69982441_2470042189718294_8091450087646953472_n.jpg');

const productimg2 = document.createElement("img");
productimg2.classList.add("prodimg");
productimg2.src = "./Thumbs/prod_thumb2.jpg";
productimg2.setAttribute('alt', 'Beautiful_Ceramic');
productimg2.setAttribute('data-large', './Vazak/73319491_2470043316384848_8000823919764307968_n.jpg');

const productimg3 = document.createElement("img");
productimg3.classList.add("prodimg");
productimg3.src = "./Thumbs/prod_thumb3.jpg";
productimg3.setAttribute('alt', 'Beautiful_Ceramic');
productimg3.setAttribute('data-large', './Vazak/75419079_2470027213053125_7875414869040693248_n.jpg');

const productimg4 = document.createElement("img");
productimg4.classList.add("prodimg");
productimg4.src = "./Thumbs/prod_thumb4.jpg";
productimg4.setAttribute('alt', 'Beautiful_Ceramic');
productimg4.setAttribute('data-large', './Vazak/75407718_2470030663052780_8468640214435233792_n.jpg');

const productimg5 = document.createElement("img");
productimg5.classList.add("prodimg");
productimg5.src = "./Thumbs/prod_thumb5.jpg";
productimg5.setAttribute('alt', 'Beautiful_Ceramic');
productimg5.setAttribute('data-large', './Vazak/75289363_2470025453053301_1614525330947571712_n.jpg');

const productimg6 = document.createElement("img");
productimg6.classList.add("prodimg");
productimg6.src = "./Thumbs/prod_thumb6.jpg";
productimg6.setAttribute('alt', 'Beautiful_Ceramic');
productimg6.setAttribute('data-large', './Vazak/75242171_2470037129718800_6783575620518412288_n.jpg');

const productimg7 = document.createElement("img");
productimg7.classList.add("prodimg");
productimg7.src = "./Thumbs/prod_thumb7.jpg";
productimg7.setAttribute('alt', 'Beautiful_Ceramic');
productimg7.setAttribute('data-large', './Vazak/72628424_2470022883053558_8092578933901361152_n.jpg');

light(productimg);
light(productimg2);
light(productimg3);
light(productimg4);
light(productimg5);
light(productimg6);
light(productimg7);

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

productimgdiv.appendChild(productimg);
productimgdiv.appendChild(productpara);
productimgdiv2.appendChild(productimg2);
productimgdiv2.appendChild(productpara2);
productimgdiv3.appendChild(productimg3);
productimgdiv3.appendChild(productpara3);
productimgdiv4.appendChild(productimg4);
productimgdiv4.appendChild(productpara4);
productimgdiv5.appendChild(productimg5);
productimgdiv5.appendChild(productpara5);
productimgdiv6.appendChild(productimg6);
productimgdiv6.appendChild(productpara6);
productimgdiv7.appendChild(productimg7);
productimgdiv7.appendChild(productpara7);
productdiv.appendChild(productimgdiv);
productdiv.appendChild(productimgdiv2);
productdiv.appendChild(productimgdiv3);
productdiv.appendChild(productimgdiv4);
productdiv.appendChild(productimgdiv5);
productdiv.appendChild(productimgdiv6);
productdiv.appendChild(productimgdiv7);


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
  }, (index + 1) * 300);
});
    elem2.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = 'translateX(-100%)';
  setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = 'translateX(0%)';
  }, (index + 1) * 400);
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

const form = document.createElement("form");
form.id = "contactForm";
 form.setAttribute('method', 'POST');
 form.setAttribute('onsubmit', 'sendMail(); return false;');
 form.action = "https://formsubmit.co/c85aedc186ea5713e38833e7a514ed16";

const nameGroup = document.createElement("div");
nameGroup.classList.add("form-group");

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'Name:';
nameGroup.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.required = true;
nameGroup.appendChild(nameInput);

form.appendChild(nameGroup);

const emailGroup = document.createElement('div');
emailGroup.className = 'form-group';

const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email:';
emailGroup.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.required = true;
emailGroup.appendChild(emailInput);

form.appendChild(emailGroup);

const messageGroup = document.createElement('div');
messageGroup.className = 'form-group';

const messageLabel = document.createElement('label');
messageLabel.setAttribute('for', 'message');
messageLabel.textContent = 'Message:';
messageGroup.appendChild(messageLabel);

const messageTextarea = document.createElement('textarea');
messageTextarea.id = 'message';
messageTextarea.rows = 4;
messageTextarea.required = true;
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
        }, 1001);
    } else if(!productDivscont || !homecontact){

         setTimeout(() => {

                if(!contactcontainer.contains(contactdiv)){
        contactcontainer.appendChild(contactdiv);
            }

    const formval = document.querySelectorAll(".form-group");
     formanim(formval);
        }, 1);
    }

});

        // // Function to handle form submission
        // function handleFormSubmit(event) {
        //     event.preventDefault(); // Prevent default form submission
        //
        //     // Get form field values
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const message = document.getElementById('message').value;
        //
        //     // Construct the mailto URL
        //     const mailtoLink = `mailto:shuxhop3@proton.me?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        //
        //     // Open the mailto link
        //     window.location.href = mailtoLink;
        // }
        //
        // // Function to dynamically set the onsubmit attribute
        // function setOnSubmitAttribute() {
        //     const form = document.getElementById('contactForm');
        //     form.onsubmit = handleFormSubmit;
        // }
        //
        // // Ensure the onsubmit attribute is set after the DOM loads
        // window.onload = setOnSubmitAttribute;

};

/*--------------------------- CONTACT DONE ---------------------------------*/

   function sendMail() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var link = "mailto:shuxhop3@proton.me"
                     + "?subject=" + encodeURIComponent("Contact Form Submission from " + name)
                     + "&body=" + encodeURIComponent("Email: " + email + "\n\nMessage:\n" + message);
            window.location.href = link;
        }

function formanim(elem){
          elem.forEach((item, index) => {
              item.style.opacity = "0";
              setTimeout(() => {
            item.style.opacity = "1";
              }, (index + 1) * 500);
    });
};
