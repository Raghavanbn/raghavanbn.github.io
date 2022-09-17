const kural = {
    sect_tamil :document.querySelector('.sect_tam'),
    chapgrp_tam : document.querySelector('.chapgrp_tam'),
    chap_tam : document.querySelector('.chap_tam'),
    kural_tamil_line : document.querySelector('.kural_tamil_line'),   
    sect_eng :document.querySelector('.sect_eng'), 
    chapgrp_eng : document.querySelector('.chapgrp_eng'), 
    chap_eng : document.querySelector('.chap_eng'), 
    kural_eng_line : document.querySelector('.kural_eng_line'), 
    kural_num : '', 

    getKuralNumber : function(event) {        
        if(event.keyCode == 13){
            this.kural_num = document.getElementById("kural_num").value; 
            this.getKural(this.kural_num);
        }                       
         else if(event.target.id == "random") {
            this.kural_num = Math.floor(Math.random() * 1330);
            this.getKural(this.kural_num);
         }
    },

    getKural : function(num) {
        fetch('https://api-thirukkural.vercel.app/api?num=' + num + ';')
        .then(response => response.json())
        .then(result => {        
            this.displayKural(result);
        })
    },

    displayKural : function(result) {
        this.sect_tamil.innerHTML = result.sect_tam;
        this.chapgrp_tam.innerHTML = result.chapgrp_tam;
        this.chap_tam.innerHTML = result.chap_tam;
        this.kural_tamil_line.innerHTML = result.line1 +'<br>' +result.line2;        
        this.sect_eng.innerHTML = result.sect_eng;
        this.chapgrp_eng.innerHTML = result.chapgrp_eng;
        this.chap_eng.innerHTML = result.chap_eng;
        this.kural_eng_line.innerHTML = result.eng;
    }
}