var a = document.querySelector("button");
var b = document.querySelector("ul");
var c = document.querySelector("input");


//console.log(d[0].innerText);
//var node = document.createElement("li");
//var textnode = document.createTextNode(document.querySelector("input"));

function addItem(){
		var d = document.querySelectorAll("li");
		//set the option to change class when clicked
		//fontChangeLi();
		var i = 0;
		d.forEach(function(item){
			if (item.innerText.split(' ')[0].toLowerCase()==c.value.toLowerCase()){
				i += 1;
			}
			console.log(item.innerText.split(' ')[0].toLowerCase());
			console.log(c.value);
		})
		if (i==0){
			var node = document.createElement("li");
			var textnode = document.createTextNode(c.value);
			node.appendChild(textnode);
			node.innerHTML += ' <button class = "delete"> X </button>'
			b.appendChild(node);
			//repeat the task of setting class on click for newest node
			fontChangeLi();
			c.value = "";
		} else {
			window.alert("Item is already in the list!!");
		}
	}

function buttonClickListener()
{
	if (c.value.length >= 0) {
		addItem();
	}	
}

function inputEnterListener(event){
	if (c.value.length >= 0 && event.keyCode == 13) {
		addItem();
	}
}

function fontChangeLi(){
	var lineitems = document.querySelectorAll("li");

	lineitems.forEach(function(i){
		i.addEventListener('mouseover', addClass, false);
		i.addEventListener('mouseout', addClass, false);
	});

	var delButtons = document.getElementsByClassName("delete");

	for (j=0 ; j<delButtons.length; j++){
		delButtons[j].addEventListener('click', deleteItem, false);
	}
}

function addClass(e){
	//e.target.classList.add("change");
	e.target.classList.toggle("change");
}

function deleteItem(e){
	console.log	('i am here');
	e.target.parentNode.remove();
}
/*
Alternate way of adding class to line items under UL
function fontChangeLi(){
	document.getElementById("parent").addEventListener("click",function(e) {
        // e.target is our targetted element.
                    // try doing console.log(e.target.nodeName), it will result LI
        if(e.target && e.target.nodeName == "LI") {
            console.log(e.target.innerText + " was clicked");
            e.target.classList.add("change");
        }
    });
}*/

a.addEventListener("click", buttonClickListener);
c.addEventListener("keypress", inputEnterListener);
//del.addEventListener("click", deleteItem);

//initialize font change for current list on event
fontChangeLi();

//c.addEventListener("onkeypress", addItem());	
		//console.log("CLICK!!");
	//document.querySelectorAll("li").forEach(function(i){i.classList.add("change")});
