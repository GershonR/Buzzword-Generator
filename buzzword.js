var xhr = "";
function pullMaster() {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processPull;
	xhr.open("POST", "cgi-bin/pull-master.cgi");
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
	xhr.send('method=pull');
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

//Can we change this to jQuery?
function getContributers() {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processContributers;
	xhr.open("POST", "cgi-bin/get-contributers.cgi");
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
	xhr.send(null);
}

function genWebsite() {
  xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processContributers;
	xhr.open("POST", "cgi-bin/gen-website.cgi");
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
	xhr.send(null);
}

function processContributers()  {
  // only if req shows "loaded"
  if (xhr.readyState == 4) {

    if (xhr.status == 200 || xhr.status == 404 || xhr.status == 500) {
      var response = xhr.responseText;
	  console.log(response)
    }
  }
}



