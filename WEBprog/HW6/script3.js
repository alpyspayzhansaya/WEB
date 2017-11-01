let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
let arr2 = {Toyota:0,BMW:1,Daewoo:2};
const car = document.querySelector('#cars');
for(var i=0;i<cars.length;i++){
	var div = document.createElement('div');
	div.className = "card";

	var img = document.createElement('img');
	img.id = cars[i].brand;
	img.src = cars[i].image_url;
	img.style = "width:300px;height:200px;";

  var p = document.createElement('p');
  p.innerHTML = cars[i].brand+" "+cars[i].model;
  p.style = "font-weight:bold;";

	var basket = document.createElement('img');
	basket.className = 'basket';
	basket.style = "width:30px;height:30px;";
	basket.src = "http://www.fwolaw.com/wp-content/uploads/2017/05/shopping-cart-of-checkered-design_318-50865.jpg";
	basket.addEventListener('click',main);

	var check = document.createElement('span');
	check.innerHTML = 'false';
	check.style = "display:none;";
	check.className = 'check';

	var price = document.createElement('span');
	price.innerHTML = cars[i].price;
	price.style = "display:none";
	price.className = 'price';

	div.appendChild(check);
	div.appendChild(img);
	div.appendChild(p);
	div.appendChild(basket);
	div.appendChild(price);
	car.appendChild(div);
}

function main(event){
	var s1 = document.querySelector('#items');
	var s2 = document.querySelector('#sum');
	var q = event.currentTarget.parentNode;
	var check = q.childNodes[0];
	var pr = parseInt(q.childNodes[4].innerHTML);
	var image = q.childNodes[3];

	console.log(image);
  if(check.innerHTML === 'false'){
    s2.innerHTML = parseInt(s2.innerHTML) + pr;
		s1.innerHTML = parseInt(s1.innerHTML) + 1;
		check.innerHTML = 'true';
		image.src = "https://image.freepik.com/free-icon/dollar-symbol_318-27603.jpg";
  }

	else {
		s2.innerHTML = parseInt(s2.innerHTML) - pr;
		s1.innerHTML = parseInt(s1.innerHTML) - 1;
		check.innerHTML = 'false';
		image.src = "http://www.fwolaw.com/wp-content/uploads/2017/05/shopping-cart-of-checkered-design_318-50865.jpg";
  }
}
