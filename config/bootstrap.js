/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


//for debug, place at URL: deal/search?region=&city=

//for images, type "/assets/images/imagename.jpg" to load the images.

//deals dummy data.

  var deals = [
    {
      "region": "East Asia",
      "city": "Osaka",
      "class": "Business",
      "price": "1000",
      "validdate": "12/31/2017",
      "image": "/images/osaka.jpg",
      "quota": "100",
      "dates": "01/01/2017 - 12/31/2018",
      "createdAt": "2017-11-21T07:00:01.734Z",
      "updatedAt": "2017-11-21T07:00:01.734Z",
      "id": 1
    }
  ];

  Deal.create(deals[0]).exec( function (err, model) {

    model.save();
  });

  deals = [
    {
      "region": "East Asia",
      "city": "Seoul",
      "class": "Business",
      "price": "1000",
      "validdate": "12/31/2019",
      "image": "/images/seoul.jpg",
      "quota": "100",
      "dates": "01/01/2017 - 12/31/2018",
      "createdAt": "2017-12-02T07:52:50.487Z",
      "updatedAt": "2017-12-02T07:52:50.487Z",
      "id": 2
    }
  ];

  Deal.create(deals[0]).exec( function (err, model) {

    model.save();
  });

  deals = [
    {
      "region": "South-east Asia",
      "city": "Cebu",
      "class": "Business",
      "price": "1000",
      "validdate": "12/31/2019",
      "image": "/images/cebu.jpg",
      "quota": "100",
      "dates": "01/01/2017 - 12/31/2018",
      "createdAt": "2017-12-02T07:52:50.487Z",
      "updatedAt": "2017-12-02T07:52:50.487Z",
      "id": 3
    }
  ];

  Deal.create(deals[0]).exec( function (err, model) {

    model.save();
  });

  deals = [
    {
      "region": "South-east Asia",
      "city": "Singapore",
      "class": "Business",
      "price": "1000",
      "validdate": "12/31/2019",
      "image": "/images/singapore.jpg",
      "quota": "100",
      "dates": "01/01/2017 - 12/31/2018",
      "createdAt": "2017-12-02T07:52:50.487Z",
      "updatedAt": "2017-12-02T07:52:50.487Z",
      "id": 4
    }
  ];

  Deal.create(deals[0]).exec( function (err, model) {

    model.save();
  });

    deals = [
      {
        "region": "America",
        "city": "Los Angeles",
        "class": "Business",
        "price": "1000",
        "validdate": "12/31/2019",
        "image": "/images/losangeles.jpg",
        "quota": "100",
        "dates": "01/01/2017 - 12/31/2018",
        "createdAt": "2017-12-02T07:52:50.487Z",
        "updatedAt": "2017-12-02T07:52:50.487Z",
        "id": 5
      }
    ];

    Deal.create(deals[0]).exec( function (err, model) {

      model.save();
    });

    deals = [
      {
        "region": "America",
        "city": "Boston",
        "class": "Business",
        "price": "1000",
        "validdate": "12/31/2019",
        "image": "/images/boston.jpg",
        "quota": "100",
        "dates": "01/01/2017 - 12/31/2018",
        "createdAt": "2017-12-02T07:52:50.487Z",
        "updatedAt": "2017-12-02T07:52:50.487Z",
        "id": 6
      }
    ];

    Deal.create(deals[0]).exec( function (err, model) {

      model.save();
    });

//user dummy data.

var user = {"username": "admin", "password":"123456", "id":1}

User.create(user).exec( function (err, model)  {

    model.supervises.add(2); // the id for sally
    model.save();

});

user = {"username": "client", "password":"123456", "id":2}

User.create(user).exec( function (err, model)  {

    model.supervises.add(1); // the id for martin
    model.supervises.add(2); // the id for sally
    model.save();

});


//person dummy data.

    var person = [
      {
        "name": "Martin Choy",
        "age":"23", "id":1
      }
    ];

    Person.create(person).exec( function(err, model) {});

    person = [
    {
      "name": "Sally Yeung",
       "age":"22", "id":2
      }
    ];

    Person.create(person).exec( function(err, model) {});


//client dummy data.

var purchases = [
  {
    "firstname": "Eri",
    "surname": "Heckler",
    "age": "17",
    "sex": "Female",
    "email": "heckleri@goodmail.com",
    "image": "/images/clientimage3.jpg",
    "region": "East Asia",
    "city": "Osaka",
    "class": "Economy",
    "price": "5000",
    "amount": "1",
    "purchasedate": "12/20/2017",
    "tourdates": "01/01/2017 - 12/31/2017",
    "createdAt": "2017-12-02T10:58:23.003Z",
    "updatedAt": "2017-12-02T10:58:23.003Z",
    "id": 1
  }
];

Purchase.create(purchases[0]).exec( function (err, model) {

  model.save();
});

purchases = [
  {
    "firstname": "Ai",
    "surname": "Seidel",
    "age": "35",
    "sex": "Female",
    "email": "aiponisacutegirl@coldmail.com",
    "image": "/images/clientimage4.jpg",
    "region": "East Asia",
    "city": "Seoul",
    "class": "Business",
    "price": "4000",
    "amount": "2",
    "purchasedate": "12/12/2016",
    "tourdates": "01/01/2017 - 12/31/2017",
    "createdAt": "2017-12-02T11:00:32.713Z",
    "updatedAt": "2017-12-02T11:00:32.713Z",
    "id": 2
  }

];

Purchase.create(purchases[0]).exec( function (err, model) {

    model.save();
  });

purchases = [
  {
    "firstname": "Reanu",
    "surname": "Keeves",
    "age": "35",
    "sex": "Male",
    "email": "reanukeeves@email.com",
    "image": "/images/clientimage1.jpg",
    "region": "Americas",
    "city": "Los Angeles",
    "class": "Business",
    "price": "7000",
    "amount": "1",
    "purchasedate": "12/03/2016",
    "tourdates": "01/01/2017 - 12/31/2017",
    "createdAt": "2017-12-02T10:54:27.779Z",
    "updatedAt": "2017-12-02T10:54:27.779Z",
    "id": 3
  }
];

Purchase.create(purchases[0]).exec( function (err, model) {

    model.save();
  });

purchases = [
  {
    "firstname": "John",
    "surname": "Smith",
    "age": "25",
    "sex": "Male",
    "email": "aglitchinthematrix@haxxormail.com",
    "image": "/images/clientimage2.jpg",
    "region": "South-east Asia",
    "city": "Singapore",
    "class": "Business",
    "price": "10000",
    "amount": "3",
    "purchasedate": "11/11/2016",
    "tourdates": "01/01/2017 - 12/31/2017",
    "createdAt": "2017-12-02T10:56:09.775Z",
    "updatedAt": "2017-12-02T10:56:09.775Z",
    "id": 4
  }
];

Purchase.create(purchases[0]).exec( function (err, model) {

  model.save();
});

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
