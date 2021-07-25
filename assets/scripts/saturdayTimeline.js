let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    //console.log(data[0]);

    let i;
    for (i = 0; i < data.length; i++) {
      let event = data[i]["gsx$event"]["$t"];
      let time = data[i]["gsx$time"]["$t"];
      document.getElementById("saturdayTable").innerHTML +=
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

xmlhttp2.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1F8fujORpy8IH938CdO06Zqd5QtmdRmEPjc6M8FNpxFw/3/public/full?alt=json",
  true
);
xmlhttp2.send();