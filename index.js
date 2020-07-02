

class xss {
    constructor() {
        this.payload;
        this.state = false;
        this.fs = require('fs');
    }
    async init() {
        const list = this.fs.readFileSync('./assets/list.txt', 'utf8').toString();
        this.payload = list.split('\n');
        this.state = true;
    }
    validate(input) {
        let XSS = [];
        //console.log(payload.length);
        if (this.state) {
            
            for(let i = 0; i < this.payload.length; i++) {
                if(this.payload[i] == input || this.payload[i].trim() == input.trim()) {
                    XSS.push(this.payload[i])
                }
                
            }
            
            if(XSS.length == 0) {
                return 0;
            }else return XSS;
            
        }else console.log('Please init the list by xss.init()')
        
    }
    
}

module.exports = xss;