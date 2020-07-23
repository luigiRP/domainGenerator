window.onload = () => {


let pronoun=['the','our','her','his'];
let mid=['great','big','small','medium'];
let end=['bird','penguin','tiger','lion','parrot','sonicorg'];
let extension=['com','net','org','co'];
let varr=[];
var list = document.getElementsByTagName("UL");

for (i=0;i<pronoun.length;i++) {
    for (j=0;j<mid.length;j++) {
        for (k=0;k<end.length;k++) {
            for (l=0;l<extension.length;l++) {
               if (end[k].endsWith(extension[l])) {
                   let finalEnding=[];
                   let nending=end[k];
                   let nextension=extension[l];
                   
                   for (let index=0;index<nending.length-nextension.length;index++) {
                        finalEnding.push(nending[index])
                   }
                   finalEnding=finalEnding.toString()
                   finalEnding=finalEnding.replace(/,/g, "");
                   varr.push(pronoun[i].concat(mid[j],finalEnding,'.',extension[l]))
               }
               else {
                    varr.push(pronoun[i].concat(mid[j],end[k],'.',extension[l]));
               }
                
            }
        }
    }
    
}

for (let i =0; i <= varr.length-1; i++) {
  let divElem = document.getElementById("list");
let myNewHOne = document.createElement("li");
let t = document.createTextNode(varr[i]);
myNewHOne.appendChild(t);  
divElem.appendChild(myNewHOne);
}
}




