db.people.find({
    'scores.score' :{
        $gt:87,
        $lt:93
    }
}).pretty()