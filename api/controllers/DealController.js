/**
 * DealController
 *
 * @description :: Server-side logic for managing Deals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
	    if (req.method == "POST") {
	        Deal.create(req.body.Deal).exec( function(err, model) {
	            return res.send("Successfully Created!");
	        });
	    } else {
	        return res.view('deal/create');
	    }
	},

	json: function(req, res) {
	    Deal.find().exec( function(err, deals) {
	        return res.json(deals);
	    });
	},

	index: function(req, res) {
	    Deal.find().exec( function(err, deals) {
	        return res.view('deal/index', {'deals': deals});
	    });
	},

	delete: function(req, res) {
	   Deal.findOne(req.params.id).exec( function(err, model) {
	        if (model != null) {
	            model.destroy();
	            return res.send("Deal Deleted");
	        } else {
	            return res.send("Deal not found");
	        }
	    });
	},

	update: function(req, res) {
	    if (req.method == "GET") {
	        Deal.findOne(req.params.id).exec( function(err, model) {
	            if (model == null)
	                return res.send("No such deal!");
	            else
	                return res.view('deal/update', {'deal': model});
	        });
	    } else {
	        Deal.findOne(req.params.id).exec( function(err, model) {
	            model.region = req.body.Deal.region;
	            model.city = req.body.Deal.city;
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



	    Deal.find()
	        .where({region: {contains: region}})
	        .where({city: {contains: city}})
	        .sort('name')
	        .exec( function (err, deals) {
	            return res.view('deal/index', {'deals': deals});
	        })
	},

	paginate: function (req, res) {
	    Deal.find().paginate({page: req.query.page, limit: 2})
	        .exec( function(err, deals) {
	            Deal.count().exec( function(err, value) {
	                var pages = Math.ceil(value / 2 );
	                return res.view( 'deal/paginate', {'deals': deals, 'count':pages});
	            });
	        });
	},

	homepage: function (req, res) {
			Deal.find().paginate({page: req.query.page, limit: 2})
					.exec( function(err, deals) {
							Deal.count().exec( function(err, value) {
									var pages = Math.ceil(value / 2 );
									return res.view( 'homepage', {'deals': deals, 'count':pages});
							});
					});
	},

	admin: function (req, res) {
    		Deal.find().exec( function(err, deals) {
	        return res.view('deal/admin', {'deals': deals});
			});
	},

	purchase: function(req, res) {
	    if (req.method == "POST") {
	        Deal.create(req.body.Deal).exec( function(err, model) {
	            return res.send("Successfully Created!");
	        });
	    } else {
	        return res.view('deal/purchase');
	    }
	},

};
