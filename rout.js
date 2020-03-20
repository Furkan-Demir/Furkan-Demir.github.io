(function($) {
    var routes = {},
        defaultRoute = 'home';

    routes['home'] = {
        url: '#/',
        templateUrl: 'templates/home.html'
    };



    routes['kategorigencodasi'] = {
        url: '#/kategori/gencodasi',
        templateUrl: 'templates/kategoriler/gencodasi.html'
    };

    routes['kategoribanyolavabo'] = {
        url: '#/kategori/banyolavabo',
        templateUrl: 'templates/kategoriler/banyolavabo.html'
    };

    routes['kategoriraydolap'] = {
        url: '#/kategori/raydolap',
        templateUrl: 'templates/kategoriler/raydolap.html'
    };

    routes['kategoritvunitesi'] = {
        url: '#/kategori/tvunitesi',
        templateUrl: 'templates/kategoriler/tvunitesi.html'
    };

    routes['kategorivestiyer'] = {
        url: '#/kategori/vestiyer',
        templateUrl: 'templates/kategoriler/vestiyer.html'
    };

    routes['kategoriyatakodasi'] = {
        url: '#/kategori/yatakodasi',
        templateUrl: 'templates/kategoriler/yatakodasi.html'
    };

    routes['kategoridekorasyon'] = {
        url: '#/kategori/dekorasyon',
        templateUrl: 'templates/kategoriler/dekorasyon.html'
    };

  routes['referanslar'] = {
    url: '#/referanslar',
    templateUrl: 'templates/referanslar.html',
  };
  routes['iletisim'] = {
    url: '#/iletisim',
    templateUrl: 'templates/iletisim.html',
  };

    $.router
    .setData(routes)
    .setDefault(defaultRoute)
    .onRouteChanged(function(e, route, param) {
      route.viewModel(route, param);
    });

  $.when($.ready).then(function() {
    $.router.run('.my-view', 'home');
  });

}(jQuery));