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
            if (t1<el && el<t2){
                brMerenja++;
            }
        }); return brMerenja;
    }

};