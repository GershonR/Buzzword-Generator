var xhr = "";
function pullMaster() {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processPull;
	xhr.open("POST", "cgi-bin/pull-master.cgi");
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
	xhr.send('method=pull');
	var index = document.getElementById("response_target");
	index.innerText = "Success!";
}


function processPull()  {
  // only if req shows "loaded"
  if (xhr.readyState == 4) {

    if (xhr.status == 200 || xhr.status == 404 || xhr.status == 500) {
      var response = xhr.responseText;
	  console.log(response)
    }
  }
}

