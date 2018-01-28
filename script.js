



  
// Input: b=budget
//        n = number of days
//        p=purchase price 
// Output: "no" when x is between 0-50%; "maybe" when x is between 51%-74%; "Yes" when x is between 75%-100%

function id(idstring){
  return document.getElementById(idstring);
}

  //let b = id('budget');
  //let n = id('days');
  //let p = id('price');

function budget_account(b, d, p) {
  //document.getElementById();
  var text = "";
  
  var x = (p)/(b/d);
  
  if (x > 1) {
    text = "No, with an estimated risk value of 100%"+ "<br />";
    
  }
  else if (0.51 <= x && x <= 1) {
    text = "No, with an estimated risk value of "+ x * 100 + "%" + "<br />";
    
    }
	else if (0.50 >= x && x >= 0.26) {
    text = "Maybe, with an estimated risk value of "+ (x * 100) + "%" +"<br />";

    }
	else {
    text = "Yes, with an estimated risk value of " + (x * 100) + "% <br />";
    }
  
  localStorage.setItem("results", text);
}

  //else if (((x * 100))<1) {document.write("Yes, with an estimated risk value of 0 %" + "<br />")}
  //else {document.write("Yes, with an estimated risk value of " + (x * 100)+ "%" + "<br />")}}
             