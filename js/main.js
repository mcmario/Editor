function getE(id){
return document.getElementById(id);
}
//getE('edit').addEventListener('onmouseover',f1);



getE('edit').onmouseover=function(){
    getE('edit').style.background="#37C3D6";
}
getE('edit').onmouseout=function(){
    getE('edit').style.background="#F8BD7F";
}

getE('b').onmouseover=function(){
    getE('b').style.background="#37C3D6";
}
getE('b').onmouseout=function(){
    getE('b').style.background="#F8BD7F";
}

getE('i').onmouseover=function(){
    getE('i').style.background="#37C3D6";
}
getE('i').onmouseout=function(){
    getE('i').style.background="#F8BD7F";
}

getE('u').onmouseover=function(){
    getE('u').style.background="#37C3D6";
}
getE('u').onmouseout=function(){
    getE('u').style.background="#F8BD7F";
}

getE('color').onmouseover=function(){
    getE('color').style.background="#37C3D6";
}
getE('color').onmouseout=function(){
    getE('color').style.background="#F8BD7F";
}

getE('background1').onmouseover=function(){
    getE('background1').style.background="#37C3D6";
}
getE('background1').onmouseout=function(){
    getE('background1').style.background="#F8BD7F";
}

//жирний шрифт
var ch1=0;
getE('b').onclick=function(){
    if(ch1==0){
    getE('main').style.fontWeight="bold";
        ch1=1;
    }else{
         getE('main').style.fontWeight="normal";
        ch1=0;
    }
}

//курсив
var ch2=0;
getE('i').onclick=function(){
    if(ch2==0){
    getE('main').style.fontStyle="italic";
        ch2=1;
    }else{
         getE('main').style.fontStyle="normal";
        ch2=0;
    }
}
//підкреслений
var ch3=0;
getE('u').onclick=function(){
    if(ch3==0){
    getE('main').style.textDecoration="underline";
        ch3=1;
    }else{
         getE('main').style.textDecoration="none";
        ch3=0;
    }
}
//розмір шрифта
getE('fontsize').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
            getE('main').style.fontSize=this.children[i].innerHTML;
        }
    }
}
//стиль шрифта
getE('fontfamily').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
            getE('main').style.fontFamily=this.children[i].innerHTML;
        }
    }
}

//зміна кольору тексту

getE('color').onclick=function(){
    getE('colorblock').style.display="block";
}

for(var i=0;i<9;i++){
document.querySelectorAll('.some4')[i].onclick=function(){
    getE('main').style.color =this.style.backgroundColor;
   
}
}

//розташування тексту

var ch=document.querySelector('#form1');
ch.onclick=function(){
    for(i=0;i<3;i++){     
        if(document.getElementsByName('textalign')[i].checked){
         //  var size=ch.children[i].children[1].innerHTML;
           getE('main').style.textAlign=ch.children[i].children[1].innerHTML;
           
        }
    }
}

//зміна кольору фону

getE('background1').onclick=function(){
    getE('colorbg').style.display="block";
}

for(var i=0;i<9;i++){
document.querySelectorAll('.some5')[i].onclick=function(){
    getE('main').style.background =this.style.backgroundColor;
   
}
}



//зміна фонового малюнку

getE('bgimage').onclick=function(){
    getE('bgi2').style.display="block";
     getE('colorbg').style.display="none";
}

for(var i=0;i<9;i++){
document.querySelectorAll('.some6')[i].onclick=function(){
    getE('main').style.background=this.style.backgroundImage+"no-repeat";
}
}

getE('main').onclick=function(){
    getE('bgi2').style.display="none";
    getE('colorblock').style.display="none";
    getE('colorbg').style.display="none";
}

function previewFile() {
  var preview = getE('main');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.style.background = "url("+reader.result+")";
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}


//кнопка едіт

getE('edit').onclick=function(){
getE('main').style.display="none";
    getE('main2').style.display="block";
    getE('edit').style.display="none";
    getE('b').style.display="none";
    getE('i').style.display="none";
    getE('u').style.display="none";
    getE('color').style.display="none";
   getE('background1').style.display="none";
    getE('fontsize').style.display="none";
    getE('fontfamily').style.display="none";
    getE('form1').style.display="none";
 getE('save').style.display="inline";
    getE('createtable').style.display="inline";
    getE('createlist').style.display="inline";
getE('area').innerHTML=getE('main').innerHTML;


}


//кнопка save

getE('save').onclick=function(){
getE('main').style.display="block";
    getE('main2').style.display="none";
    getE('edit').style.display="inline";
    getE('b').style.display="inline";
    getE('i').style.display="inline";
    getE('u').style.display="inline";
    getE('color').style.display="inline";
   getE('background1').style.display="inline";
    getE('fontsize').style.display="inline";
    getE('fontfamily').style.display="inline";
    getE('form1').style.display="block";
 getE('save').style.display="none";
    getE('createtable').style.display="none";
    getE('createlist').style.display="none";
     getE('table').style.display="none";
    getE('list').style.display="none";
getE('main').innerHTML=getE('area').value;


}
//створення таблиці

getE('createtable').onclick=function(){
    getE('table').style.display="block";
     getE('list').style.display="none";
}


//очистка таблиці
getE('cleartable').onclick=function(){
    getE('row').value="";
    getE('col').value="";
    getE('schuruna').value="";
    getE('vusota').value="";
    getE('cellspacing').value="";
    getE('tov').value="";
    getE('colortable').value="";
}

getE('createtablebut').onclick=function(){
    var row=getE('row').value;
    var col=getE('col').value;
     var colorline=getE('colortable').value;
    var tov=getE('tov').value;
    var width=getE('schuruna').value;
    var heigth=getE('vusota').value;
    var cel=getE('cellspacing').value;
    
    
    var tb=document.createElement('table'); 
    tb.style.width=width+"px";
    tb.style.height=heigth+"px";
       tb.style.border=tov+"px";
    tb.style.borderColor=colorline;
   tb.style.borderStyle="solid";
  //  tb.style.cellspacing=cel;
for(i=0;i<row;i++){
    var tr= document.createElement('tr');
    
    for(j=0;j<col; j++){
     var td=  document.createElement('td');
        td.innerHTML="text";
//        td.style.height=hei+"px";
//        td.style.width=widh+"px";
         td.style.borderSpacing=cel+"px";
      td.style.borderCollapse="collapse";
       td.style.border=tov+"px";
    td.style.borderColor=colorline;
   td.style.borderStyle="solid";
        
        tr.appendChild(td);
        
}
    tb.appendChild(tr);
}


    
main.appendChild(tb);
 
  getE('area').innerHTML=getE('main').innerHTML;
    getE('table').style.display="none";
}




//створення списку
getE('createlist').onclick=function(){
     getE('table').style.display="none";
    getE('list').style.display="block";
}

//очистка списку
getE('clearlist').onclick=function(){
    getE('typemark').value="default";
    getE('killist').value="";  
}
var mark;

getE('typemark').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
        mark=this.children[i].value;
            
        }
    }
}

getE('creatlist1').onclick=function(){
     var kil=getE('killist').value;
     var listul=document.createElement('OL');
    listul.style.marginLeft="20px";
    listul.style.listStyleType=mark;
    for(var i=0;i<kil;i++){
        var li=document.createElement('LI');
        li.innerHTML="some text";
        listul.appendChild(li);
    }
    

  main.appendChild(listul);
  getE('area').innerHTML=getE('main').innerHTML;
    
   getE('list').style.display="none";
}















