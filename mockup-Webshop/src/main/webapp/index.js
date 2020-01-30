/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// category items
for (i = 0; i < 20; i++) {
    $("#asideList").append(
            '<a href="#" class="list-group-item list-group-item-action list-group-item-light" style="font-size:vw;"> Category Item ' + (i + 1) + '</a>'
            );
}

var img1 = "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg";
var img2 = "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg";
var img3 = "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg";
var img4 = "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg";
var img5 = "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg";

var images = [img1, img2, img3, img4, img5];
var titles = ["Denim shirt", "Sweatshirt", "Grey blouse", "Black jacket", "Grey blouse"];
var prices = ["120$", "100$", "80$", "45$", "80$"];

var $clonedContent1 = $('#cardElement').clone();

var newfirstid = 0 + "---" + images[0] + "---" + titles[0] + "---" + prices[0];
$('#cardElement').find("#addToCartb").append('<a href="#" id="' + newfirstid + '" class="btn btn-primary" style="margin:auto;display:block" onclick="addToCart(this)">Add to the Shopping cart</a>');

// products
for (i = 0; i < 19; i++) {
    var $clonedContent = $clonedContent1.clone();
    var ri = Math.floor(Math.random() * images.length);
    var cc = $clonedContent.find("#addToCartb");
    var newid = ri + "---" + images[ri] + "---" + titles[ri] + "---" + prices[ri];

    $clonedContent.find("#cbody").attr("data-imgLink", images[ri]);


    cc.append('<a href="#" id="' + newid + '" class="btn btn-primary" style="margin:auto;display:block" onclick="addToCart(this)">Add to the Shopping cart</a>');
    //console.log($clonedContent.find("#addToCartb"));


    $clonedContent.find("img").attr("src", images[ri]);
    $clonedContent.find("#itemSort").text(titles[ri]);
    $clonedContent.find("#price").text(prices[ri]);
    $clonedContent.find("#addToCartButton").id = ri;
    //'<a href="#" id="addToCartButton" class="btn btn-primary" style="margin:auto;display:block" onclick="addToCart(this)" data-toggle="modal" data-target="#exampleModalLong">Add to the Shopping cart</a>');

    /*
     
     //setting data attributes
     $clonedContent.attr("data-index-number",ri);
     $clonedContent.attr("data-imgLink",images[ri]);
     $clonedContent.attr("data-itemSortName",titles[ri]);
     $clonedContent.attr("data-itemPrice",prices[ri]);
     
     
     
     //const product = "product" + i;
     //$clonedContent.classList.add(product);
     
     
     $clonedContent.find("#addToCartb").attr("data-index-number",i);
     $clonedContent.find("#addToCartb").attr("data-imgLink",images[ri]);
     $clonedContent.find("#addToCartb").attr("data-itemSortName",titles[ri]);
     $clonedContent.find("#addToCartb").attr("data-itemPrice",prices[ri]);
     
     $clonedContent.find("img").attr("src", images[ri]);
     $clonedContent.find("#itemSort").text(titles[ri]);
     $clonedContent.find("#price").text(prices[ri]);
     $clonedContent.find("#addToCartButton").id = ri;
     */

    //$clonedContent.id = ri;
    //console.log($clonedContent.id);

    //if(ri % 2 === 0) {$clonedContent.find("span").text("NEW");} 
    $("#cardList").append($clonedContent);



    // <a href="#" id="addToCartButton" class="btn btn-primary" style="margin:auto;display:block" onclick="addToCart(this)" data-toggle="modal" data-target="#exampleModalLong">Add to the Shopping cart</a>
}

function addToCart(elem) {
    animateCSS('#shoppingCartb', 'heartBeat');
    addItemToCart(elem);
}

var i = 0;
var priceSum = 0;

function addItemToCart(elem) {
    var eid = elem.id.split("---");
    var eri = eid[0];
    var eimg = eid[1];
    var etitle = eid[2];
    var eprice = eid[3];
    console.log(etitle);
    if (i === 0) {
        $('#scItem').find("img").attr("src", eimg);
        $('#scItem').find("h5").text(etitle);
        $('#scItem').find("p").text(eprice);
        i = i + 1;
        priceSum = priceSum + parseInt(eprice);
        $('#cartPrice').text(priceSum + '$');
    } else {

        var $clonedContent = $('#scItem').clone();
        $clonedContent.find("img").attr("src", eimg);
        $clonedContent.find("h5").text(etitle);
        $clonedContent.find("p").text(eprice);
        $("#scItems").append($clonedContent);
        priceSum = priceSum + parseInt(eprice);
        $('#cartPrice').text(priceSum + '$');
    }

}

function showItemSpec(elem) {
    //console.log(elem);

    var elems = elem.children;

    /*
     console.log(elem.getAttribute("data-imgLink"));
     console.log(elem);
     console.log(elems);
     console.log(elems[0]);
     
     console.log(elems[1]);
     console.log(elems[1].textContent);
     console.log(elems[2].textContent);
     */

    var eimg = elem.getAttribute("data-imgLink");
    var etitle = elems[1].textContent;
    var eprice = elems[2].textContent;

    //var etitle = elem[0].find('');


    $('#exampleModalLong').find("img").attr("src", eimg);
    $('#exampleModalLong').find(".etitle").text(etitle);
    $('#exampleModalLong').find(".eprice").text(eprice);


}


function animateCSS(element, animationName) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
}


function filtersearch() {
    var cList = document.querySelector('#cardList');
    $("div:contains('100$')").css("text-decoration", "underline");
}




/*
 console.log($("#cardList").children()[0]);
 console.log($clonedContent.attr("data-index-number"));
 console.log($clonedContent.attr("data-imgLink"));
 console.log($clonedContent.attr("data-itemSortName"));
 console.log($clonedContent.attr("data-itemPrice"));
 console.log("------------------------------------------");
 console.log($clonedContent.find("#addToCartButton").attr("data-index-number"));
 
 */

