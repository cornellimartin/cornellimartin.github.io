var temples = document.getElementsByClassName("closure");

fetch("data/temples.json")
  .then((response) => response.json())
  .then((jsObject) => {
    const schedules = jsObject['temples'];
    console.log(jsObject);
    console.log(schedules);
    console.log(schedules[0]);

    for (var i = 0; i < schedules.length; i++){
        var list = document.createElement('ul');
        

       for (let j = 0; j < schedules[i].closure.length; j++){
            var line = document.createElement('li');
            line.textContent = schedules[i].closure[j];
            list.appendChild(line);
            var selector = document.querySelectorAll("td.closure");
            selector[i].appendChild(list);
        }       
    }

  })