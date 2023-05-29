var result

const display=(value)=> {
   if(document.getElementById("result").value==result)
      clearScreen()
    
    document.getElementById("result").value += value;
}
 
const  calculate=()=> {
    var p = document.getElementById("result").value;
    result= eval(p);
    document.getElementById("result").value = result;
    
}
const clearScreen=()=> {
    document.getElementById("result").value = "";
}
const DEL=()=>{
  var str= document.getElementById("result").value
  document.getElementById("result").value=str.slice(0,-1);
}
