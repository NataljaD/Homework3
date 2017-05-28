db.students.find({
	scores: { 
		"$elemMatch": { 
			score: { 
				$gt: 87, 
				$lt: 93 
			} 
		} 
	} 
}).pretty()