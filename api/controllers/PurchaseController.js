/**
 * PurchaseController
 *
 * @description :: Server-side logic for managing Purchases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

 	create: function(req, res) {
 	    if (req.method == "POST") {
 	        Purchase.create(req.body.Purchase).exec( function(err, model) {
 	            return res.send("Successfully Created!");
 	        });
 	    } else {
 	        return res.view('purchase/create');
 	    }
 	},

 	json: function(req, res) {
 	    Purchase.find().exec( function(err, purchases) {
 	        return res.json(purchases);
 	    });
 	},

 	index: function(req, res) {
 	    Purchase.find().exec( function(err, purchases) {
 	        return res.view('purchase/index', {'purchases': purchases});
 	    });
 	},

 	delete: function(req, res) {
 	   Purchase.findOne(req.params.id).exec( function(err, model) {
 	        if (model != null) {
 	            model.destroy();
 	            return res.send("Purchase Deleted");
 	        } else {
 	            return res.send("Purchase not found");
 	        }
 	    });
 	},

 	update: function(req, res) {
 	    if (req.method == "GET") {
 	        Purchase.findOne(req.params.id).exec( function(err, model) {
 	            if (model == null)
 	                return res.send("No such deal!");
 	            else
 	                return res.view('purchase/update', {'purchase': model});
 	        });
 	    } else {
 	        Purchase.findOne(req.params.id).exec( function(err, model) {
 	            model.region = req.body.Purchase.region;
 	            model.city = req.body.Purchase.city;
 	            model.save();
 	            return res.send("Record updated");
 	        });
 	    }
 	},

 	search: function (req, res) {

 		var region;
 		var city;

 		if (typeof (req.query.region) === "undefined")
 			region = "";
 			else region = req.query.region;

 			if (typeof (req.query.city) === "undefined")
 				city = "";
 				else region = req.query.city;



 	    Purchase.find()
 	        .where({region: {contains: region}})
 	        .where({city: {contains: city}})
 	        .sort('name')
 	        .exec( function (err, purchases) {
 	            return res.view('purchase/index', {'purchases': purchases});
 	        })
 	},

 	paginate: function (req, res) {
 	    Purchase.find().paginate({page: req.query.page, limit: 2})
 	        .exec( function(err, purchases) {
 	            Purchase.count().exec( function(err, value) {
 	                var pages = Math.ceil(value / 2 );
 	                return res.view( 'purchase/paginate', {'purchases': purchases, 'count':pages});
 	            });
 	        });
 	},

 	homepage: function (req, res) {
 			Purchase.find().paginate({page: req.query.page, limit: 2})
 					.exec( function(err, deals) {
 							Purchase.count().exec( function(err, value) {
 									var pages = Math.ceil(value / 2 );
 									return res.view( 'homepage', {'purchases': purchases, 'count':pages});
 							});
 					});
 	},

 	admin: function (req, res) {
     		Purchase.find().exec( function(err, purchases) {
 	        return res.view('purchase/admin', {'purchases': purchases});
 			});
 	},

 };
