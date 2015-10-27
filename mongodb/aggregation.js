/**
 * Created by weining on 2015/10/25 0025.
 */


db.phones.count({'components.number':{$gt : 5599999}});

populatePhones(855,5550000,5650000);

db.phones.distinct('components.number', {'components.number': {$lt : 5550005}});

db.phones.group({
    initial : {count : 0},
    reduce : function(phone,output){output.count++;},
    cond: {'components.number' : {$gt : 5599999}},
    key : {'components.area' : true}
});