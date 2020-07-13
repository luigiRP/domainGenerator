let pronoun=['the','our','her','his'];
let end=['bird','penguin','tiger','lion','parrot'];
let mid=['great','big','small','medium'];
let extension=['.com','.net','.org','.co'];



for (i=0;i<pronoun.length;i++) {
    for (j=0;j<mid.length;j++) {
        for (k=0;k<end.length;k++) {
            for (l=0;l<extension.length;l++) {
                console.log(pronoun[i]+mid[j]+end[k]+extension[l]);
            }
        }
    }
    
}



