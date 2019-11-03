btnAdd.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptStateAdd.value
  let zipcode = inptZipcode.value
  
  let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')" 
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status == 200) {
      if (req1.responseText == 500) {
      NSB.MsgBox("The customer has been added.")
  
  //list
       let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { //transit worked.
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
  let message = ""
  for (i = 0; i <= allNames.length - 1; i++) {
    message = message + allNames[i][0] + "\n"
    }
    txtNames.value = message
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
      
      
    } else {
      NSB.MsgBox("Something wrong happened.")
    }
      

} else {
  NSB.MsgBox("Error: " + req1.status);
  }
  

  
}