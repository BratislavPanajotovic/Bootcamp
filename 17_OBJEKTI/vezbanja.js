let dan1 = {
    datum: '2023/12/22',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 5, 6, 7, 6, 4, 7, 7],

    prosecnaTemp: function() {
        let suma = 0;
        this.temperature.forEach(el => {
            suma += el;
        });
        return suma / this.temperature.length;
    },

    maksimalnaTemp: function() {
        let max = this.temperature[0];
        this.temperature.forEach(el => {
            if (el > max) { 
                max = el;
            }
        });
        return max; 
    },

    brojacMaksimalnihTemp: function() {
        let max = this.maksimalnaTemp(); 
        let br = 0;
        this.temperature.forEach(el => {
            if (el === max) {
                br++;
            }
        });
        return br;
    },
    izmedjuDveVrednosti: function(t1,t2) {
        let brMerenja=0;
        let vecaTemp=0;
        let manjaTemp = t2
        
        if (t2>vecaTemp) {
            vecaTemp=t2;
        }
        if (t1<manjaTemp){
            manjaTemp=t1
        }
        this.temperature.forEach( el=>{
            if (t1<el && t2>el){
                brMerenja++;
            }
        }); return brMerenja;
    },
    iznadProseka: () => {
        let brojac1=0;
        let brojac2=0;

        let srednjaVrednost= this.prosecnaTemp();

        this.temperature.forEach(el => {
            if (el>srednjaVrednost) {
                brojac1++;
        } else {
                brojac2++;
        }

    });
        if (brojac1 > srednjaVrednost) {
            return true;
        } return false;
},
    tipDana: () => {
        let leden;
        this.temperature.forEach(el => {
         (el < 0) ? leden=true : leden=false; 
        });
    },
    nepovoljan: function() {
        for (let i=0;i<this.temperature.length;i++) {
            if(Math.abs(this.temperature[i] - this.temperature[i+1]) > 8){
                return true;
            }
        } return false;
    }

}