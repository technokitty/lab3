
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  console.log("name is" + nameToShow);
  if(nameToShow){
    res.render('index', {
  	'name': nameToShow,
    });
  }else{
    res.render('index', {
         'name': 'World',
    });
  }
};
