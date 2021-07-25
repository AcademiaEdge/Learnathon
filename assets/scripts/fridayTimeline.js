let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    //console.log(data[0]);

    let i;
    for (i = 0; i < data.length; i++) {
      let event = data[i]["gsx$event"]["$t"];
      let time = data[i]["gsx$time"]["$t"];
      document.getElementById("fridayTable").innerHTML +=
       "<tr>" +
       "<td>" +
       event + 
       "</td>" +
       "<td>" +
       time +
       "</td>" +
       "</tr>"
    }
  }
}

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1F8fujORpy8IH938CdO06Zqd5QtmdRmEPjc6M8FNpxFw/2/public/full?alt=json",
  true
);
xmlhttp.send();