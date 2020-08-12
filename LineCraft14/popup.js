window.onload = () => {
const pid5 = document.getElementById("numero"); 
const ekey= "ekey"
chrome.storage.local.get(ekey, (data) =>  { 
  if (data[ekey]) {
           pid5.value = data[ekey]
  function repeat(funct, times) {
    funct();
    --times && repeat(funct, times);
}
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("mostused").appendChild(cln);
  }, pid5.value -1);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab1").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab2").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab3").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab4").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab5").appendChild(cln);
  }, pid5.value);
        } else {  function repeat(funct, times) {
    funct();
    --times && repeat(funct, times);
}
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("mostused").appendChild(cln);
  }, pid5.value -1);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab1").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab2").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab3").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab4").appendChild(cln);
  }, pid5.value);
repeat(function myFunction() {
    var itm = document.getElementById("elmt");
    var cln = itm.cloneNode(true);
    document.getElementById("tab5").appendChild(cln);
  }, pid5.value);}});       




const pid6 = document.getElementById("numero"); 
const pid = document.querySelectorAll("input[type='text']");
const pid2 = document.getElementsByClassName("button9");
const pid3 = document.getElementsByName("button");
const pid4 = document.getElementsByName("color");
const headtext = document.getElementsByClassName("header");
const ttp = document.getElementsByClassName("tooltiptext");
    for (i = 0; i < 200; i++) {
	const m = i
	const key = "key" + i
	const bkey = "bkey" + i
    const ckey = "ckey" + i
    const dkey = "dkey" + i
    const ekey = "ekey"
        chrome.storage.local.get(key, (data) =>  { 
	if (data["key"+m]) {
            pid3[m].value = data["key"+m]; 
            ttp[m].innerHTML = pid3[m].value
        }});
        chrome.storage.local.get(bkey, (data) =>  { 
	if (data["bkey"+m]) {
            pid2[m].innerHTML = data["bkey"+m]; 
            headtext[m].innerHTML = pid2[m].innerHTML    
        }});
        chrome.storage.local.get(ckey, (data) =>  { 
	if (data["ckey"+m]) {
            pid3[m].className = data["ckey"+m]; 
        }});
        chrome.storage.local.get(dkey, (data) =>  { 
	if (data["dkey"+m]) {
            pid4[m].value = data["dkey"+m]; 
        }});  
}
}

document.addEventListener('DOMContentLoaded', function() {
  document.activeElement.addEventListener("click", f1);
});
function f1() {
  var x = document.getElementById("locktext");
  var copyText = document.activeElement;
  if (x.checked == false) {
  copyText.select();
  document.execCommand("copy");
}
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("locktext").addEventListener("click", toggleRO);
});
function toggleRO() {
var boxes = document.querySelectorAll("input[type='text']");
var x = document.getElementById("locktext");
var y = document.getElementsByName("color");
var z = document.getElementById("lines");
for (i = 0; i < boxes.length; i++) { 
if (x.checked == false) {
    boxes[i].setAttribute("readonly", "readonly");
    document.getElementById("warning").style.display = "none";
    y[i].style.display = "none";
    z.style.display = "none";

} else {
	boxes[i].removeAttribute("readonly"); 
    document.getElementById("warning").style.display = "block";
    y[i].style.display = "block";
    z.style.display = "block";
}
}
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("locktext").addEventListener("click", toggleCE);
});
function toggleCE() {
var buttons = document.getElementsByClassName("button9");
var x = document.getElementById("locktext");
for (i = 1; i < 6; i++) { 
if (x.checked == true) {
    buttons[i].setAttribute("contenteditable", true);   
} else {
	buttons[i].setAttribute("contenteditable", false); 
}
}
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("info1").addEventListener("click", moreinfo);
});
function moreinfo() {
    alert("This extension is intended to be a shorcut for policy lines and under no circumstance should be used as a substitute for the real policy. MIND THAT POLICY LINES MIGHT BE UPDATED!! Please refer to akirohector@google.com for feedback/issues, THANKS!!")
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("instr1").addEventListener("click", instructions);
});
function instructions() {
    alert('Instructions:\n-Click on the desired box. The text displayed in the box will be automatically copied to your clipboard.\n-To modify text in your lines, check the "EDIT" checkbox and insert the desired text. After finishing, uncheck the "EDIT" checkbox (Text will not be copied if the checkbox is checked).\n-To save all your text, click on "SAVE" button. Your text will be displayed again after reinitializing the extension. A confirmation popup will appear if the operation is successful.\n-To delete all your stored data, make sure the "EDIT" checkbox is unlocked, then press "CLEAR". THIS WILL ERASE ALL THE TEXT THAT HAS BEEN SAVED IN THE EXTENSION.\n-To open the application in a new window, click on "WINDOW MODE".')
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("1").addEventListener("click", most);
});
function most() {
    var x = document.getElementById("mostused");
    var y = document.getElementById("tab1");
    var z = document.getElementById("tab2");
    var a = document.getElementById("tab3");
    var b = document.getElementById("tab4");
    var c = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    } 
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("2").addEventListener("click", tab1);
});
function tab1() {
    var x = document.getElementById("tab1");
    var y = document.getElementById("mostused");
    var z = document.getElementById("tab2");
    var a = document.getElementById("tab3");
    var b = document.getElementById("tab4");
    var c = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("3").addEventListener("click", tab2);
});
function tab2() {
    var x = document.getElementById("tab2");
    var y = document.getElementById("tab1");
    var z = document.getElementById("mostused");
    var a = document.getElementById("tab3");
    var b = document.getElementById("tab4");
    var c = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    } 
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("4").addEventListener("click", tab3);
});
function tab3() {
    var x = document.getElementById("tab3");
    var y = document.getElementById("tab1");
    var z = document.getElementById("mostused");
    var a = document.getElementById("tab2");
    var b = document.getElementById("tab4");
    var c = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("5").addEventListener("click", tab4);
});
function tab4() {
    var x = document.getElementById("tab4");
    var y = document.getElementById("tab1");
    var z = document.getElementById("mostused");
    var a = document.getElementById("tab3");
    var b = document.getElementById("tab2");
    var c = document.getElementById("tab5");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("6").addEventListener("click", tab5);
});
function tab5() {
    var x = document.getElementById("tab5");
    var y = document.getElementById("tab1");
    var z = document.getElementById("mostused");
    var a = document.getElementById("tab3");
    var b = document.getElementById("tab4");
    var c = document.getElementById("tab2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("7").addEventListener("click", save);
});
function save() {
  var id = document.getElementsByName("button");
  for (i = 0; i < id.length; i++) {
  var inputValue = id[i].value;
  var key = "key"+i;
  chrome.storage.local.set({[key]: inputValue});
  }
  alert("Saved")
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("7").addEventListener("click", save2);
});
function save2() {
  var id1 = document.getElementsByClassName("button9");
  for (i = 0; i < id1.length; i++) {
  var buttonValue = id1[i].innerHTML;
  var bkey = "bkey"+i;
  chrome.storage.local.set({[bkey]: buttonValue});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("7").addEventListener("click", save3);
});
function save3() {
  var id2 = document.getElementsByName("button");
  for (i = 0; i < id2.length; i++) {
  var colorValue = id2[i].className;
  var ckey = "ckey"+i;
  chrome.storage.local.set({[ckey]: colorValue});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("7").addEventListener("click", save4);
});
function save4() {
  var id3 = document.getElementsByName("color");
  for (i = 0; i < id3.length; i++) {
  var colorValue1 = id3[i].value;
  var dkey = "dkey"+i;
  chrome.storage.local.set({[dkey]: colorValue1});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("7").addEventListener("click", save5);
});
function save5() {
  var id5 = document.getElementById("numero");
  var numberValue = id5.value;
  var ekey = "ekey";
  chrome.storage.local.set({[ekey]: numberValue});
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("8").addEventListener("click", url);
});
function url() {
    window.open("popup.html", "_blank", menubar="no");
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("9").addEventListener("click", clear);
});
function clear() {
var x = document.getElementById("locktext")
  if (x.checked == true) {
chrome.storage.local.clear();
alert("Cache cleared")
}
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("10").addEventListener("click", report);
});
function report() {
    window.open("https://chrome.google.com/webstore/a/google.com/detail/linecraft/pbefegldjcbdndbfpepaoflihpnhinib?hl=en-US&gl=PT", "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
document.activeElement.addEventListener("click", go);
});
function go() {
const box = document.getElementsByName("button");
const option = document.getElementsByName("color");
    for (i = 0; i < box.length; i++) {
    if (option[i].value != "") {
    box[i].className = option[i].value    
    }
    }
}
