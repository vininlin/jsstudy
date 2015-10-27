/**
 * Created by weining on 2015/10/25 0025.
 */


distinctDigits = function(phone){
    var number = phone.components.number + '',
        seen = [],
        result = [],
        i = number.length;
    while(i--){
        seen[+number[i]] = 1;
    }
    for(i = 0 ; i < 10; i++){
        if(seen[i]){
            result[result.length] = i;
        }
    }
    return result;
}

db.system.js.save({
    _id : 'distinctDigits',
    value: distinctDigits
});

//load('distinctDigits.js');
db.eval('distinctDigits(db.phones.findOne({"components.number" : 5551213}))');

//map
map = function(){
    var digits = distinctDigits(this);
    emit({digits : digits,country : this.components.country},{count : 1});
}
//reduce
reduce = function(key,values){
    var total = 0;
    for(var i = 0 ; i < values.length; i++){
        total += values[i].count;
    }
    return {count : total};
}

results = db.runCommand({
    mapReduce : 'phones',
    map : map,
    reduce : reduce,
    out : 'phones.report'
});

db.phones.report.find();
db.phones.report.find({'_id.country' : 8});