/**
 * Created by weining on 2015/10/24 0024.
 */


populatePhones = function(area,start,stop){
    for(var i = start;i < stop; i++){
        var country = 1 + (Math.random() * 8) << 0;
        var num = (country * 1e10) + (area * 1e7) + i;
        db.phones.insert({
            _id: num,
            components:{
                country: country,
                area: area,
                prefix: (i*1e-4) << 0,
                number: i
            },
            display: "+" + country + " " + area + "-" + i

        });
    }
};
populatePhones(800,5550000,5650000);
db.phones.find().limit(2);

//查看索引
db.system.indexes.find();

//display字段查询
db.phones.find({display: '+8 800-5550001'}).explain();

//创建索引
db.phones.ensureIndex(
    {display: 1},
    {unique: true, dropDups: true}
);