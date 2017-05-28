db.students.update({
	'name':'Dusti Lemmond'
}, {
	$set: {
	'accepted': true
	}
},{
	multi: true
})