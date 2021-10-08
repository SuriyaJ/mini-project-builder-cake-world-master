/*Fill your code */
var pricelist = document.querySelectorAll(".pl");

var items = {
    Chocolate: 300,
    Strawberry: 100,
    Butterscotch: 200,
    Vanilla: 250,
    Redvelvet: 350
};

var state = {
    Chocolate: false,
    Strawberry: false,
    Butterscotch: false,
    Vanilla: false,
    Redvelvet: false,
    Buy: false
};

function renderAll() {
    renderchocolate();
    renderstrawberry();
    renderbutterscotch();
    rendervanilla();
    renderredvelvet();
    renderPrice();
}

//chocolate
function renderchocolate() {
    let chocolate = document.querySelector("#layer1");
    if (state.Chocolate) {
        chocolate.style.display = "inherit";
        pricelist[0].innerHTML = "Chocolate----300";
    } else {
        chocolate.style.display = "none";
        pricelist[0].innerHTML = "";
    }
}


//Strawberry
function renderstrawberry() {
    let strawberry = document.querySelector("#layer2");

    if (state.Strawberry) {
        strawberry.style.display = "inherit";
        pricelist[1].innerHTML = "Strawberry----100";
    } else {
        strawberry.style.display = "none";
        pricelist[1].innerHTML = "";
    }
}

function renderbutterscotch() {
    let butterscotch = document.querySelector("#layer3");
    if (state.Butterscotch) {
        butterscotch.style.display = "inherit";
        pricelist[2].innerHTML = "Butterscotch----200";
    } else {
        butterscotch.style.display = "none";
        pricelist[2].innerHTML = "";
    }
}

function rendervanilla() {
    let vanilla = document.querySelector("#layer4");
    if (state.Vanilla) {
        vanilla.style.display = "inherit";
        pricelist[3].innerHTML = "vanilla----250";
    } else {
        vanilla.style.display = "none";
        pricelist[3].innerHTML = "";
    }
}

function renderredvelvet() {
    let redvelvet = document.querySelector("#layer5");
    if (state.Redvelvet) {
        redvelvet.style.display = "inherit";
        pricelist[4].innerHTML = "redvelvet----350";
    } else {
        redvelvet.style.display = "none";
        pricelist[4].innerHTML = "";
    }
}


let buy = document.querySelector("#cdl");

document.querySelector("#child1").onclick = function() {
    buy.style.display = "none"
    state.Chocolate = !state.Chocolate;
    renderAll();
};

document.querySelector("#child2").onclick = function() {
    buy.style.display = "none"
    state.Strawberry = !state.Strawberry;
    renderAll();
};
document.querySelector("#child3").onclick = function() {
    buy.style.display = "none"
    state.Butterscotch = !state.Butterscotch;
    renderAll();
};
document.querySelector("#child4").onclick = function() {
    buy.style.display = "none"
    state.Vanilla = !state.Vanilla;
    renderAll();
};
document.querySelector("#child5").onclick = function() {
    buy.style.display = "none"
    state.Redvelvet = !state.Redvelvet;
    renderAll();
};
document.querySelector("#child6").onclick = function() {

    buy.style.display = "inherit";
};

function renderPrice() {
    var price = 0;
    if (state.Chocolate) {
        price = price + items.Chocolate;
    }
    if (state.Strawberry) {
        price = price + items.Strawberry;
    }
    if (state.Butterscotch) {
        price = price + items.Butterscotch;
    }
    if (state.Vanilla) {
        price = price + items.Vanilla;
    }
    if (state.Redvelvet) {
        price = price + items.Redvelvet;
    }
    document.querySelector("#cost").innerHTML = "Total--------" + price;
}