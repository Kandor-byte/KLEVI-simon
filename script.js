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




const productimgdiv1 = document.createElement("div");
productimgdiv1.classList.add("prodimgdiv");
const productpara1 = document.createElement("p");
productpara1.innerText = "€1000";
productpara1.classList.add("prodpara");

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

const productimgdiv8 = document.createElement("div");
productimgdiv8.classList.add("prodimgdiv");
const productpara8 = document.createElement("p");
productpara8.innerText = "€1000";
productpara8.classList.add("prodpara");

const productimgdiv9 = document.createElement("div");
productimgdiv9.classList.add("prodimgdiv");
const productpara9 = document.createElement("p");
productpara9.innerText = "€1000";
productpara9.classList.add("prodpara");

const productimgdiv10 = document.createElement("div");
productimgdiv10.classList.add("prodimgdiv");
const productpara10 = document.createElement("p");
productpara10.innerText = "€1000";
productpara10.classList.add("prodpara");

const productimgdiv11 = document.createElement("div");
productimgdiv11.classList.add("prodimgdiv");
const productpara11 = document.createElement("p");
productpara11.innerText = "€1000";
productpara11.classList.add("prodpara");

const productimgdiv12 = document.createElement("div");
productimgdiv12.classList.add("prodimgdiv");
const productpara12 = document.createElement("p");
productpara12.innerText = "€1000";
productpara12.classList.add("prodpara");

const productimgdiv13 = document.createElement("div");
productimgdiv13.classList.add("prodimgdiv");
const productpara13 = document.createElement("p");
productpara13.innerText = "€1000";
productpara13.classList.add("prodpara");

const productimgdiv14 = document.createElement("div");
productimgdiv14.classList.add("prodimgdiv");
const productpara14 = document.createElement("p");
productpara14.innerText = "€1000";
productpara14.classList.add("prodpara");

const productimgdiv15 = document.createElement("div");
productimgdiv15.classList.add("prodimgdiv");
const productpara15 = document.createElement("p");
productpara15.innerText = "€1000";
productpara15.classList.add("prodpara");

const productimgdiv16 = document.createElement("div");
productimgdiv16.classList.add("prodimgdiv");
const productpara16 = document.createElement("p");
productpara16.innerText = "€1000";
productpara16.classList.add("prodpara");

const productimgdiv17 = document.createElement("div");
productimgdiv17.classList.add("prodimgdiv");
const productpara17 = document.createElement("p");
productpara17.innerText = "€1000";
productpara17.classList.add("prodpara");

const productimgdiv18 = document.createElement("div");
productimgdiv18.classList.add("prodimgdiv");
const productpara18 = document.createElement("p");
productpara18.innerText = "€1000";
productpara18.classList.add("prodpara");

const productimgdiv19 = document.createElement("div");
productimgdiv19.classList.add("prodimgdiv");
const productpara19 = document.createElement("p");
productpara19.innerText = "€1000";
productpara19.classList.add("prodpara");

const productimgdiv20 = document.createElement("div");
productimgdiv20.classList.add("prodimgdiv");
const productpara20 = document.createElement("p");
productpara20.innerText = "€1000";
productpara20.classList.add("prodpara");

const productimgdiv21 = document.createElement("div");
productimgdiv21.classList.add("prodimgdiv");
const productpara21 = document.createElement("p");
productpara21.innerText = "€1000";
productpara21.classList.add("prodpara");

const productimgdiv22 = document.createElement("div");
productimgdiv22.classList.add("prodimgdiv");
const productpara22 = document.createElement("p");
productpara22.innerText = "€1000";
productpara22.classList.add("prodpara");

const productimgdiv23 = document.createElement("div");
productimgdiv23.classList.add("prodimgdiv");
const productpara23 = document.createElement("p");
productpara23.innerText = "€1000";
productpara23.classList.add("prodpara");

const productimgdiv24 = document.createElement("div");
productimgdiv24.classList.add("prodimgdiv");
const productpara24 = document.createElement("p");
productpara24.innerText = "€1000";
productpara24.classList.add("prodpara");

const productimgdiv25 = document.createElement("div");
productimgdiv25.classList.add("prodimgdiv");
const productpara25 = document.createElement("p");
productpara25.innerText = "€1000";
productpara25.classList.add("prodpara");

const productimgdiv26 = document.createElement("div");
productimgdiv26.classList.add("prodimgdiv");
const productpara26 = document.createElement("p");
productpara26.innerText = "€1000";
productpara26.classList.add("prodpara");

const productimgdiv27 = document.createElement("div");
productimgdiv27.classList.add("prodimgdiv");
const productpara27 = document.createElement("p");
productpara27.innerText = "€1000";
productpara27.classList.add("prodpara");

const productimgdiv28 = document.createElement("div");
productimgdiv28.classList.add("prodimgdiv");
const productpara28 = document.createElement("p");
productpara28.innerText = "€1000";
productpara28.classList.add("prodpara");

const productimgdiv29 = document.createElement("div");
productimgdiv29.classList.add("prodimgdiv");
const productpara29 = document.createElement("p");
productpara29.innerText = "€1000";
productpara29.classList.add("prodpara");

const productimgdiv30 = document.createElement("div");
productimgdiv30.classList.add("prodimgdiv");
const productpara30 = document.createElement("p");
productpara30.innerText = "€1000";
productpara30.classList.add("prodpara");

const productimgdiv31 = document.createElement("div");
productimgdiv31.classList.add("prodimgdiv");
const productpara31 = document.createElement("p");
productpara31.innerText = "€1000";
productpara31.classList.add("prodpara");

const productimgdiv32 = document.createElement("div");
productimgdiv32.classList.add("prodimgdiv");
const productpara32 = document.createElement("p");
productpara32.innerText = "€1000";
productpara32.classList.add("prodpara");

const productimgdiv33 = document.createElement("div");
productimgdiv33.classList.add("prodimgdiv");
const productpara33 = document.createElement("p");
productpara33.innerText = "€1000";
productpara33.classList.add("prodpara");

const productimgdiv34 = document.createElement("div");
productimgdiv34.classList.add("prodimgdiv");
const productpara34 = document.createElement("p");
productpara34.innerText = "€1000";
productpara34.classList.add("prodpara");

const productimgdiv35 = document.createElement("div");
productimgdiv35.classList.add("prodimgdiv");
const productpara35 = document.createElement("p");
productpara35.innerText = "€1000";
productpara35.classList.add("prodpara");


const productimgdiv36 = document.createElement("div");
productimgdiv36.classList.add("prodimgdiv");
const productpara36 = document.createElement("p");
productpara36.innerText = "€1000";
productpara36.classList.add("prodpara");

const productimgdiv37 = document.createElement("div");
productimgdiv37.classList.add("prodimgdiv");
const productpara37 = document.createElement("p");
productpara37.innerText = "€1000";
productpara37.classList.add("prodpara");


const productimgdiv38 = document.createElement("div");
productimgdiv38.classList.add("prodimgdiv");
const productpara38 = document.createElement("p");
productpara38.innerText = "€1000";
productpara38.classList.add("prodpara");

const productimgdiv39 = document.createElement("div");
productimgdiv39.classList.add("prodimgdiv");
const productpara39 = document.createElement("p");
productpara39.innerText = "€1000";
productpara39.classList.add("prodpara");

const productimgdiv40 = document.createElement("div");
productimgdiv40.classList.add("prodimgdiv");
const productpara40 = document.createElement("p");
productpara40.innerText = "€1000";
productpara40.classList.add("prodpara");

const productimgdiv41 = document.createElement("div");
productimgdiv41.classList.add("prodimgdiv");
const productpara41 = document.createElement("p");
productpara41.innerText = "€1000";
productpara41.classList.add("prodpara");

const productimgdiv42 = document.createElement("div");
productimgdiv42.classList.add("prodimgdiv");
const productpara42 = document.createElement("p");
productpara42.innerText = "€1000";
productpara42.classList.add("prodpara");

const productimgdiv43 = document.createElement("div");
productimgdiv43.classList.add("prodimgdiv");
const productpara43 = document.createElement("p");
productpara43.innerText = "€1000";
productpara43.classList.add("prodpara");

const productimgdiv44 = document.createElement("div");
productimgdiv44.classList.add("prodimgdiv");
const productpara44 = document.createElement("p");
productpara44.innerText = "€1000";
productpara44.classList.add("prodpara");

const productimgdiv45 = document.createElement("div");
productimgdiv45.classList.add("prodimgdiv");
const productpara45 = document.createElement("p");
productpara45.innerText = "€1000";
productpara45.classList.add("prodpara");

const productimgdiv46 = document.createElement("div");
productimgdiv46.classList.add("prodimgdiv");
const productpara46 = document.createElement("p");
productpara46.innerText = "€1000";
productpara46.classList.add("prodpara");

const productimgdiv47 = document.createElement("div");
productimgdiv47.classList.add("prodimgdiv");
const productpara47 = document.createElement("p");
productpara47.innerText = "€1000";
productpara47.classList.add("prodpara");

const productimgdiv48 = document.createElement("div");
productimgdiv48.classList.add("prodimgdiv");
const productpara48 = document.createElement("p");
productpara48.innerText = "€1000";
productpara48.classList.add("prodpara");

const productimgdiv49 = document.createElement("div");
productimgdiv49.classList.add("prodimgdiv");
const productpara49 = document.createElement("p");
productpara49.innerText = "€1000";
productpara49.classList.add("prodpara");

const productimgdiv50 = document.createElement("div");
productimgdiv50.classList.add("prodimgdiv");
const productpara50 = document.createElement("p");
productpara50.innerText = "€1000";
productpara50.classList.add("prodpara");



const productimg1 = document.createElement("img");
productimg1.classList.add("prodimg");
productimg1.src = "./Thumbs/prod_thumb1.jpg";
productimg1.setAttribute('alt', 'Beautiful_Ceramic');
productimg1.setAttribute('data-large', './Vazak/69982441_2470042189718294_8091450087646953472_n.jpg');

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

const productimg8 = document.createElement("img");
productimg8.classList.add("prodimg");
productimg8.src = "./Thumbs/prod_thumb8.jpg";
productimg8.setAttribute('alt', 'Beautiful_Ceramic');
productimg8.setAttribute('data-large', './Vazak/74643571_2472046719517841_7151052227795222528_n.jpg');

const productimg9 = document.createElement("img");
productimg9.classList.add("prodimg");
productimg9.src = "./Thumbs/prod_thumb9.jpg";
productimg9.setAttribute('alt', 'Beautiful_Ceramic');
productimg9.setAttribute('data-large', './Vazak/75429661_2470050739717439_1098579478138847232_n.jpg');

const productimg10 = document.createElement("img");
productimg10.classList.add("prodimg");
productimg10.src = "./Thumbs/prod_thumb10.jpg";
productimg10.setAttribute('alt', 'Beautiful_Ceramic');
productimg10.setAttribute('data-large', './Vazak/75439241_2470014006387779_5756207486126260224_n.jpg');

const productimg11 = document.createElement("img");
productimg11.classList.add("prodimg");
productimg11.src = "./Thumbs/prod_thumb11.jpg";
productimg11.setAttribute('alt', 'Beautiful_Ceramic');
productimg11.setAttribute('data-large', './Vazak/75543540_2470019159720597_1899437870632927232_n.jpg');

const productimg12 = document.createElement("img");
productimg12.classList.add("prodimg");
productimg12.src = "./Thumbs/prod_thumb12.jpg";
productimg12.setAttribute('alt', 'Beautiful_Ceramic');
productimg12.setAttribute('data-large', './Vazak/75604002_2470000896389090_2352578395197407232_n.jpg');

const productimg13 = document.createElement("img");
productimg13.classList.add("prodimg");
productimg13.src = "./Thumbs/prod_thumb13.jpg";
productimg13.setAttribute('alt', 'Beautiful_Ceramic');
productimg13.setAttribute('data-large', './Vazak/75604026_2470027713053075_5139983033243271168_n.jpg');

const productimg14 = document.createElement("img");
productimg14.classList.add("prodimg");
productimg14.src = "./Thumbs/prod_thumb14.jpg";
productimg14.setAttribute('alt', 'Beautiful_Ceramic');
productimg14.setAttribute('data-large', './Vazak/75627314_2470024329720080_5977559268654579712_n.jpg');

const productimg15 = document.createElement("img");
productimg15.classList.add("prodimg");
productimg15.src = "./Thumbs/prod_thumb15.jpg";
productimg15.setAttribute('alt', 'Beautiful_Ceramic');
productimg15.setAttribute('data-large', './Vazak/76608815_2470029976386182_101488848843833344_n.jpg');

const productimg16 = document.createElement("img");
productimg16.classList.add("prodimg");
productimg16.src = "./Thumbs/prod_thumb16.jpg";
productimg16.setAttribute('alt', 'Beautiful_Ceramic');
productimg16.setAttribute('data-large', './Vazak/76651506_2470028606386319_6935890515342655488_n.jpg');

const productimg17 = document.createElement("img");
productimg17.classList.add("prodimg");
productimg17.src = "./Thumbs/prod_thumb17.jpg";
productimg17.setAttribute('alt', 'Beautiful_Ceramic');
productimg17.setAttribute('data-large', './Vazak/76651685_2470022169720296_6045325271240802304_n.jpg');

const productimg18 = document.createElement("img");
productimg18.classList.add("prodimg");
productimg18.src = "./Thumbs/prod_thumb18.jpg";
productimg18.setAttribute('alt', 'Beautiful_Ceramic');
productimg18.setAttribute('data-large', './Vazak/77103146_2470024846386695_2221387871816777728_n.jpg');

const productimg19 = document.createElement("img");
productimg19.classList.add("prodimg");
productimg19.src = "./Thumbs/prod_thumb19.jpg";
productimg19.setAttribute('alt', 'Beautiful_Ceramic');
productimg19.setAttribute('data-large', './Vazak/77259990_2470023776386802_2088527374957150208_n.jpg');

const productimg20 = document.createElement("img");
productimg20.classList.add("prodimg");
productimg20.src = "./Thumbs/prod_thumb20.jpg";
productimg20.setAttribute('alt', 'Beautiful_Ceramic');
productimg20.setAttribute('data-large', './Vazak/407414586_6771102072945596_7156845416241042825_n.jpg');

const productimg21 = document.createElement("img");
productimg21.classList.add("prodimg");
productimg21.src = "./Thumbs/prod_thumb21.jpg";
productimg21.setAttribute('alt', 'Beautiful_Ceramic');
productimg21.setAttribute('data-large', './Vazak/407444910_6771102622945541_9053827518897049676_n.jpg');

const productimg22 = document.createElement("img");
productimg22.classList.add("prodimg");
productimg22.src = "./Thumbs/prod_thumb22.jpg";
productimg22.setAttribute('alt', 'Beautiful_Ceramic');
productimg22.setAttribute('data-large', './Vazak/407448517_6771100409612429_2227164294258716005_n.jpg');

const productimg23 = document.createElement("img");
productimg23.classList.add("prodimg");
productimg23.src = "./Thumbs/prod_thumb23.jpg";
productimg23.setAttribute('alt', 'Beautiful_Ceramic');
productimg23.setAttribute('data-large', './Vazak/408091391_6774960069226463_3343171123770404615_n.jpg');

const productimg24 = document.createElement("img");
productimg24.classList.add("prodimg");
productimg24.src = "./Thumbs/prod_thumb24.jpg";
productimg24.setAttribute('alt', 'Beautiful_Ceramic');
productimg24.setAttribute('data-large', './Vazak/408096740_6771103732945430_2387316161454573749_n.jpg');

const productimg25 = document.createElement("img");
productimg25.classList.add("prodimg");
productimg25.src = "./Thumbs/prod_thumb25.jpg";
productimg25.setAttribute('alt', 'Beautiful_Ceramic');
productimg25.setAttribute('data-large', './Vazak/408106677_6774957805893356_204718974494136813_n.jpg');

const productimg26 = document.createElement("img");
productimg26.classList.add("prodimg");
productimg26.src = "./Thumbs/prod_thumb26.jpg";
productimg26.setAttribute('alt', 'Beautiful_Ceramic');
productimg26.setAttribute('data-large', './Vazak/408117389_6771104089612061_8342561336889961668_n.jpg');

const productimg27 = document.createElement("img");
productimg27.classList.add("prodimg");
productimg27.src = "./Thumbs/prod_thumb27.jpg";
productimg27.setAttribute('alt', 'Beautiful_Ceramic');
productimg27.setAttribute('data-large', './Vazak/408117697_6774957445893392_1729951635286951020_n.jpg');

const productimg28 = document.createElement("img");
productimg28.classList.add("prodimg");
productimg28.src = "./Thumbs/prod_thumb28.jpg";
productimg28.setAttribute('alt', 'Beautiful_Ceramic');
productimg28.setAttribute('data-large', './Vazak/408141950_6774958815893255_1810327010055413146_n.jpg');

const productimg29 = document.createElement("img");
productimg29.classList.add("prodimg");
productimg29.src = "./Thumbs/prod_thumb29.jpg";
productimg29.setAttribute("alt", "Beautiful_Ceramic");
productimg29.setAttribute("data-large", "./Vazak/408142515_6774959372559866_2240863643536709217_n.jpg");

const productimg30 = document.createElement("img");
productimg30.classList.add("prodimg");
productimg30.src = "./Thumbs/prod_thumb30.jpg";
productimg30.setAttribute("alt", "Beautiful_Ceramic");
productimg30.setAttribute("data-large", "./Vazak/408213827_6774962439226226_487462102593709141_n.jpg");

const productimg31 = document.createElement("img");
productimg31.classList.add("prodimg");
productimg31.src = "./Thumbs/prod_thumb31.jpg";
productimg31.setAttribute("alt", "Beautiful_Ceramic");
productimg31.setAttribute("data-large", "./Vazak/468430120_8670912129631238_8320740518165797159_n.jpg");

const productimg32 = document.createElement("img");
productimg32.classList.add("prodimg");
productimg32.src = "./Thumbs/prod_thumb32.jpg";
productimg32.setAttribute("alt", "Beautiful_Ceramic");
productimg32.setAttribute("data-large", "./Vazak/468605256_8670913792964405_840546391422331012_n.jpg");

const productimg33 = document.createElement("img");
productimg33.classList.add("prodimg");
productimg33.src = "./Thumbs/prod_thumb33.jpg";
productimg33.setAttribute("alt", "Beautiful_Ceramic");
productimg33.setAttribute("data-large", "./Vazak/468645855_8670912312964553_2489661589442480788_n.jpg");

const productimg34 = document.createElement("img");
productimg34.classList.add("prodimg");
productimg34.src = "./Thumbs/prod_thumb34.jpg";
productimg34.setAttribute("alt", "Beautiful_Ceramic");
productimg34.setAttribute("data-large", "./Vazak/468715808_8670913526297765_6159789881489812946_n.jpg");

const productimg35 = document.createElement("img");
productimg35.classList.add("prodimg");
productimg35.src = "./Thumbs/prod_thumb35.jpg";
productimg35.setAttribute("alt", "Beautiful_Ceramic");
productimg35.setAttribute("data-large", "./Vazak/468817581_8670912499631201_8021941058235712821_n.jpg");

const productimg36 = document.createElement("img");
productimg36.classList.add("prodimg");
productimg36.src = "./Thumbs/prod_thumb36.jpg";
productimg36.setAttribute("alt", "Beautiful_Ceramic");
productimg36.setAttribute("data-large", "./Vazak/468839216_8670911476297970_7939373538317558318_n.jpg");

const productimg37 = document.createElement("img");
productimg37.classList.add("prodimg");
productimg37.src = "./Thumbs/prod_thumb37.jpg";
productimg37.setAttribute("alt", "Beautiful_Ceramic");
productimg37.setAttribute("data-large", "./Vazak/468865304_8670913019631149_1013359844129367221_n.jpg");

 const productimg38 = document.createElement("img");
productimg38.classList.add("prodimg");
productimg38.src = "./Thumbs/prod_thumb38.jpg";
productimg38.setAttribute("alt", "Beautiful_Ceramic");
productimg38.setAttribute("data-large", "./Vazak/468927806_8670912679631183_857849952658463978_n.jpg");

const productimg39 = document.createElement("img");
productimg39.classList.add("prodimg");
productimg39.src = "./Thumbs/prod_thumb39.jpg";
productimg39.setAttribute("alt", "Beautiful_Ceramic");
productimg39.setAttribute("data-large", "./Vazak/469364239_8670911909631260_996821385039782035_n.jpg");


const productimg40 = document.createElement("img");
productimg40.classList.add("prodimg");
productimg40.src = "./Thumbs/prod_thumb40.jpg";
productimg40.setAttribute("alt", "Beautiful_Ceramic");
productimg40.setAttribute("data-large", "./Vazak/470168894_8748523058536811_837112240336802217_n.jpg");


 const productimg41 = document.createElement("img");
productimg41.classList.add("prodimg");
productimg41.src = "./Thumbs/prod_thumb41.jpg";
productimg41.setAttribute("alt", "Beautiful_Ceramic");
productimg41.setAttribute("data-large", "./Vazak/470186674_8748530721869378_5560372904907630682_n.jpg");

const productimg42 = document.createElement("img");
productimg42.classList.add("prodimg");
productimg42.src = "./Thumbs/prod_thumb42.jpg";
productimg42.setAttribute("alt", "Beautiful_Ceramic");
productimg42.setAttribute("data-large", "./Vazak/470198525_8748521668536950_761462347760227956_n.jpg");

const productimg43 = document.createElement("img");
productimg43.classList.add("prodimg");
productimg43.src = "./Thumbs/prod_thumb43.jpg";
productimg43.setAttribute("alt", "Beautiful_Ceramic");
productimg43.setAttribute("data-large", "./Vazak/470216408_8748519851870465_893400840550380334_n.jpg");

const productimg44 = document.createElement("img");
productimg44.classList.add("prodimg");
productimg44.src = "./Thumbs/prod_thumb44.jpg";
productimg44.setAttribute("alt", "Beautiful_Ceramic");
productimg44.setAttribute("data-large", "./Vazak/470221589_8748518745203909_8487904608796762297_n.jpg");

const productimg45 = document.createElement("img");
productimg45.classList.add("prodimg");
productimg45.src = "./Thumbs/prod_thumb45.jpg";
productimg45.setAttribute("alt", "Beautiful_Ceramic");
productimg45.setAttribute("data-large", "./Vazak/470224021_8748523688536748_415650800567888099_n.jpg");


const productimg46 = document.createElement("img");
productimg46.classList.add("prodimg");
productimg46.src = "./Thumbs/prod_thumb46.jpg";
productimg46.setAttribute("alt", "Beautiful Ceramic");
productimg46.setAttribute("data-large", "./Vazak/470525982_8748520481870402_3413819646923363484_n.jpg");

const productimg47 = document.createElement("img");
productimg47.classList.add("prodimg");
productimg47.src = "./Thumbs/prod_thumb47.jpg";
productimg47.setAttribute("alt", "Beautiful Ceramic");
productimg47.setAttribute("data-large", "./Vazak/470568902_8748521325203651_3892340485026375782_n.jpg");

const productimg48 = document.createElement("img");
productimg48.classList.add("prodimg");
productimg48.src = "./Thumbs/prod_thumb48.jpg";
productimg48.setAttribute("alt", "Beautiful Ceramic");
productimg48.setAttribute("data-large", "./Vazak/471080312_8748524801869970_2435954816396736004_n.jpg");



light(productimg1);
light(productimg2);
light(productimg3);
light(productimg4);
light(productimg5);
light(productimg6);
light(productimg7);
light(productimg8);
light(productimg9);
light(productimg10);
light(productimg11);
light(productimg12);
light(productimg13);
light(productimg14);
light(productimg15);
light(productimg16);
light(productimg17);
light(productimg18);
light(productimg19);
light(productimg20);
light(productimg21);
light(productimg22);
light(productimg23);
light(productimg24);
light(productimg25);
light(productimg26);
light(productimg27);
light(productimg28);
light(productimg29);
light(productimg30);
light(productimg31);
light(productimg32);
light(productimg33);
light(productimg34);
light(productimg35);
light(productimg36);
light(productimg37);
light(productimg38);
light(productimg39);
light(productimg40);
light(productimg41);
light(productimg42);
light(productimg43);
light(productimg44);
light(productimg45);
light(productimg46);
light(productimg47);
light(productimg48);



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

//   for (let i = 1; i <= 48; i++) {
//     `productimgdiv${i}`.appendChild(`productimg${i}`);
//     `productimgdiv${i}`.appendChild(`productpara${i}`);
//     productdiv.appendChild(`productimgdiv${i}`);
// }




productimgdiv1.appendChild(productimg1);
productimgdiv1.appendChild(productpara1);
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
productimgdiv8.appendChild(productimg8);
productimgdiv8.appendChild(productpara8);
productimgdiv9.appendChild(productimg9);
productimgdiv9.appendChild(productpara9);
productimgdiv10.appendChild(productimg10);
productimgdiv10.appendChild(productpara10);
productimgdiv11.appendChild(productimg11);
productimgdiv11.appendChild(productpara11);
productimgdiv12.appendChild(productimg12);
productimgdiv12.appendChild(productpara12);
productimgdiv13.appendChild(productimg13);
productimgdiv13.appendChild(productpara13);
productimgdiv14.appendChild(productimg14);
productimgdiv14.appendChild(productpara14);
productimgdiv15.appendChild(productimg15);
productimgdiv15.appendChild(productpara15);
productimgdiv16.appendChild(productimg16);
productimgdiv16.appendChild(productpara16);
productimgdiv17.appendChild(productimg17);
productimgdiv17.appendChild(productpara17);
productimgdiv18.appendChild(productimg18);
productimgdiv18.appendChild(productpara18);
productimgdiv19.appendChild(productimg19);
productimgdiv19.appendChild(productpara19);
productimgdiv20.appendChild(productimg20);
productimgdiv20.appendChild(productpara20);
productimgdiv21.appendChild(productimg21);
productimgdiv21.appendChild(productpara21);
productimgdiv22.appendChild(productimg22);
productimgdiv22.appendChild(productpara22);
productimgdiv23.appendChild(productimg23);
productimgdiv23.appendChild(productpara23);
productimgdiv24.appendChild(productimg24);
productimgdiv24.appendChild(productpara24);
productimgdiv25.appendChild(productimg25);
productimgdiv25.appendChild(productpara25);
productimgdiv26.appendChild(productimg26);
productimgdiv26.appendChild(productpara26);
productimgdiv27.appendChild(productimg27);
productimgdiv27.appendChild(productpara27);
productimgdiv28.appendChild(productimg28);
productimgdiv28.appendChild(productpara28);
productimgdiv29.appendChild(productimg29);
productimgdiv29.appendChild(productpara29);
productimgdiv30.appendChild(productimg30);
productimgdiv30.appendChild(productpara30);
productimgdiv31.appendChild(productimg31);
productimgdiv31.appendChild(productpara31);
productimgdiv32.appendChild(productimg32);
productimgdiv32.appendChild(productpara32);
productimgdiv33.appendChild(productimg33);
productimgdiv33.appendChild(productpara33);
productimgdiv34.appendChild(productimg34);
productimgdiv34.appendChild(productpara34);
productimgdiv35.appendChild(productimg35);
productimgdiv35.appendChild(productpara35);
productimgdiv36.appendChild(productimg36);
productimgdiv36.appendChild(productpara36);
productimgdiv37.appendChild(productimg37);
productimgdiv37.appendChild(productpara37);
productimgdiv38.appendChild(productimg38);
productimgdiv38.appendChild(productpara38);
productimgdiv39.appendChild(productimg39);
productimgdiv39.appendChild(productpara39);
productimgdiv40.appendChild(productimg40);
productimgdiv40.appendChild(productpara40);
productimgdiv41.appendChild(productimg41);
productimgdiv41.appendChild(productpara41);
productimgdiv42.appendChild(productimg42);
productimgdiv42.appendChild(productpara42);
productimgdiv43.appendChild(productimg43);
productimgdiv43.appendChild(productpara43);
productimgdiv44.appendChild(productimg44);
productimgdiv44.appendChild(productpara44);
productimgdiv45.appendChild(productimg45);
productimgdiv45.appendChild(productpara45);
productimgdiv46.appendChild(productimg46);
productimgdiv46.appendChild(productpara46);
productimgdiv47.appendChild(productimg47);
productimgdiv47.appendChild(productpara47);
productimgdiv47.appendChild(productimg48);
productimgdiv47.appendChild(productpara48);
productdiv.appendChild(productimgdiv1);
productdiv.appendChild(productimgdiv2);
productdiv.appendChild(productimgdiv3);
productdiv.appendChild(productimgdiv4);
productdiv.appendChild(productimgdiv5);
productdiv.appendChild(productimgdiv6);
productdiv.appendChild(productimgdiv7);
productdiv.appendChild(productimgdiv8);
productdiv.appendChild(productimgdiv9);
productdiv.appendChild(productimgdiv10);
productdiv.appendChild(productimgdiv11);
productdiv.appendChild(productimgdiv12);
productdiv.appendChild(productimgdiv13);
productdiv.appendChild(productimgdiv14);
productdiv.appendChild(productimgdiv15);
productdiv.appendChild(productimgdiv16);
productdiv.appendChild(productimgdiv17);
productdiv.appendChild(productimgdiv18);
productdiv.appendChild(productimgdiv19);
productdiv.appendChild(productimgdiv20);
productdiv.appendChild(productimgdiv21);
productdiv.appendChild(productimgdiv22);
productdiv.appendChild(productimgdiv23);
productdiv.appendChild(productimgdiv24);
productdiv.appendChild(productimgdiv25);
productdiv.appendChild(productimgdiv26);
productdiv.appendChild(productimgdiv27);
productdiv.appendChild(productimgdiv28);
productdiv.appendChild(productimgdiv29);
productdiv.appendChild(productimgdiv30);
productdiv.appendChild(productimgdiv31);
productdiv.appendChild(productimgdiv32);
productdiv.appendChild(productimgdiv33);
productdiv.appendChild(productimgdiv34);
productdiv.appendChild(productimgdiv35);
productdiv.appendChild(productimgdiv36);
productdiv.appendChild(productimgdiv37);
productdiv.appendChild(productimgdiv38);
productdiv.appendChild(productimgdiv39);
productdiv.appendChild(productimgdiv40);
productdiv.appendChild(productimgdiv41);
productdiv.appendChild(productimgdiv42);
productdiv.appendChild(productimgdiv43);
productdiv.appendChild(productimgdiv44);
productdiv.appendChild(productimgdiv45);
productdiv.appendChild(productimgdiv46);
productdiv.appendChild(productimgdiv47);
productdiv.appendChild(productimgdiv48);



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
facebklink.href = 'https://www.facebook.com/kopaczlevente';
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
facebklink.href = 'https://www.facebook.com/kopaczlevente';
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
