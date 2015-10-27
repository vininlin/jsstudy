/**
 * Created by weining on 2015/10/22 0022.
 */


use study

db.towns.insert({
    name: 'New York',
    population: 22200000,
    last_census: ISODate('2009-07-31'),
    famous_for:['statue of liberty','food'],
    mayer:{
        name:'Michael Bloomberg',
        party:'I'
    }
});
db.towns.insert({
    name: 'ShangHai',
    population: 6200000,
    last_census: ISODate('2008-08-31'),
    famous_for:['Phill the groundhog'],
    mayer:{
        name:'xiaozhang',
    }
});
db.towns.insert({
    name: 'GuangZhou',
    population: 20000000,
    last_census: ISODate('2007-01-27'),
    famous_for:['flower','food'],
    mayer:{
        name:'Zhu',
        party: 'D'
    }
});

show collections;

db.towns.find();

db.towns.find({_id:ObjectId("5628f590b528ffd50919819f")})
//1����ֻ����name���ԣ�0��������name,������������
db.towns.find({_id:ObjectId("5628f590b528ffd50919819f")},{name:1})
//
db.towns.find({name:/^N/,population: {$gt:10000,$lt:22300000}},{_id: 0});

db.countries.insert({
    _id: 'us',
    name: 'United States',
    exports:{
        foods:[
            { name: 'bacon',tasty: true},
            {name: 'burgers'}
        ]
    }
});

db.countries.insert({
    _id: 'ca',
    name: 'Canada',
    exports:{
        foods:[
            { name: 'bacon',tasty: false},
            {name: 'syrup',tasty:true}
        ]
    }
});

db.countries.insert({
    _id: 'mx',
    name: 'Mexico',
    exports:{
        foods:[
            { name: 'salsa',tasty: true,condiment: true}
        ]
    }
});

print (db.countries.count())

//�ҳ����������ζ������Ĺ���,ʧ��
db.countries.find(
    {'exports.foods.name':'bacon','exports.foods.tasty':true},
    {_id: 0, name: 1}
);
//��ȷ���£�
db.countries.find(
    {'exports.foods': {$elemMatch:{name: 'bacon',tasty: true}}},
    {_id: 0, name: 1}
);
//ζ�������Ҵ��ڵ�ζƷ
db.countries.find(
    {'exports.foods': {$elemMatch:{tasty: true,condiment: {$exists: true}}}},
    {_id: 0, name: 1}
);

//����������
db.countries.find(
    {$or : [{_id: 'mx'},{name: /^U/}]},
    {_id: 0,name: 1}
);

//����
db.towns.update(
    {_id: ObjectId("5628f590b528ffd50919819f")},
    {$set: {"state": "OR"}}
);
db.towns.findOne(
    {_id: ObjectId("5628f590b528ffd50919819f")}
);

//����
db.towns.update(
    {_id: ObjectId("5628f590b528ffd50919819f")},
    {$set: {country: {$ref : 'countries',$id: ObjectId("5628f590b528ffd50919819f")}}}
);

//ɾ��
//ִ��remove֮ǰ����find���
var bad_bacon = {
    'exports.foods':{
        $elemMatch: {
            name: 'bacon',
            tasty: false
        }
    }
};
db.countries.find(bad_bacon);
db.countries.remove(bad_bacon);

//�ô�������ȡ
db.towns.find(function(){
    return this.population > 1000 && this.population < 20000000;
});

db.towns.find(
    {$where : "this.population > 1000 && this.population < 20000000"}
);