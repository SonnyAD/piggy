var db = new PouchDB('piggy');

db.allDocs({
	startkey: 'group-',
	include_docs: true
}).then(function (response) {
  console.log('Groups loaded');
  
  for (var i = 0; i < response.total_rows; i++) {
	var grid = u("#grid");
	var name = response.rows[i].doc.name;
	grid.append(`<div><h4>${name}</h4><div class="group" uk-sortable="group: sortable-group"></div></div>`);
  }
  
}).catch(function (err) {
  console.log('Something is wrong the database');
});

function increase(id, increment=1.0) {
	var target = u('#card-' + id + ' .uk-card-badge');
	var oldValue = parseFloat(target.text());
	target.text(oldValue + increment);
}
