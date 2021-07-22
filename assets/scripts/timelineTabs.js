let days = ['Friday', 'Saturday', 'Sunday'];
let activeTab = 0;

let tabs = document.getElementsByClassName('tab');
let tables = document.getElementsByClassName('schedule');

for (let i = 0; i< tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        // console.log(tabs[i].classList)
        if (!tabs[i].classList.contains("activeTab")){
            tabs[activeTab].classList.remove("activeTab");
            tabs[i].classList.add("activeTab");

            tables[activeTab].classList.remove('shownTable');
            tables[activeTab].classList.add('hiddenTable');

            tables[i].classList.remove('shownTable');
            tables[i].classList.add('shownTable');

            activeTab = i;
        }
        // console.log(days.indexOf(tabs[i].innerHTML))
    })
}