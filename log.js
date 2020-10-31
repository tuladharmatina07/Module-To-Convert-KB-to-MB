//Module to convert kb to mb
//kbToMb is a key
var log = {
    kbToMb: function(kb){
        var mb = kb/ 1024;
        console.log(kb + 'Kb is equal to '+ mb + 'Mb.');
    }
}
//Export object to app.js
module.exports = log