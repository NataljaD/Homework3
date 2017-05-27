db.people.aggregate({
    $unwind:"$scores"
},
{
    $match:{
        $and:[
            {'scores.type': "exam"},
            {'scores.score': {$gt: 90}}
        ]
    } 
}).pretty()