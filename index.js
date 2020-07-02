let payload;
(async function getPayload(){
    const res = await fetch('/assets/list.txt');
    const list = await res.text();
    payload = list.split('\n');
    //console.log(payload);
    

})();

function validateLength(input, n) {
    if(input.length >= n)return true;
    else return false;
}

function validateXSS(input) {
    let XSS = [];
    //console.log(payload.length);

    for(let i = 0; i < payload.length; i++) {
        if(payload[i] == input || payload[i].trim() == input.trim()) {
            XSS.push(payload[i])
        }
        
    }

    if(XSS.length == 0) {
        return 0;
    }else return XSS;

}

module.exports.validateXSS = validateXSS;