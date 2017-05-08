window.onload=function(){
	var li=document.querySelectorAll('.l-t a p');
	var z=document.querySelectorAll('.bbj');

 for(let i=0;i<li.length;i++){
     li[i].onmouseover=function(){
     	
         for(let j=0;j<z.length;j++){
             z[j].style.display="none";
         }
         z[i].style.display="block";
     }
 }
}