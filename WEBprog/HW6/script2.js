let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],
                         "Russia":["Moscow","Saint-Petersburg","Kazan"],
                         "England":["London","Manchester","Liverpool"],
                         "France":["Paris","Lyon","Marseille"]};

function main(event){
  var element = event.currentTarget;
  element.innerHTML = "";
  for(var i=0; i < countries.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = countries[i];
    element.options.add(opt);
  }
  selectCities();
  element.removeEventListener('click',main);

}

function selectCities(){
  var element = document.getElementById('countries');
  var element2 = document.getElementById('cities');
  var r = element.value;
  element2.innerHTML = "";
  var arr = cities_by_country[r];
  for (i=0; i < arr.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = arr[i];
    element2.options.add(opt);
  }
  element.removeEventListener('click',main);
}
document.querySelector('#countries').addEventListener('click',main);
document.querySelector('#countries').addEventListener('change', selectCities);
