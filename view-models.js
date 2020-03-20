var vm = {};
(function() {
  var categories = ['k'];

  var subCategories = [
    ['urunler'],
  ];
  var products = [
    [
      [
        {
          name: 'Honor 10',
          price: '$1000',
          rating: 3.5
        },


        {
          name: 'Samsung Note 10',
          price: '$2000',
          rating: 3.8
        },


        {
          name: 'deneme',
          price: '$2000',
          rating: 3.8
        }, 





      ],

    ],



  ];

  vm.storeVM = function(route, param) {
    $('#categories').empty();
    categories.forEach(function(item, index) {
      var href = $.router.href("categoryDetail", {
        categoryId: index
      });
      $('#categories').append(
        "<li><a href='" + href + "'>" + item + '</a></li>'
      );
    });
  };

  vm.categoryVM = function(route, param) {
    console.log(param);
    $('#categoryName').text(categories[param.categoryId]);

    $('#sub-categories').empty();
    subCategories[param.categoryId].forEach(function(item, index) {
      var href = $.router.href("subCategoryDetail", {
        categoryId: param.categoryId,
        subCategoryId: index
      });
      $('#sub-categories').append(
        "<li><a href='" + href + "'>" + item + '</a></li>'
      );
    });
  };

  vm.productVM = function(route, param) {
    console.log(param);
    $('#categoryName').text(categories[param.categoryId]);
    $('#subCategoryName').text(
      subCategories[param.categoryId][param.subCategoryId]
    );
    $('#btnBack').attr('href', '#/categories/' + param.categoryId);

    $('#products').empty();
    products[param.categoryId][param.subCategoryId].forEach(function(
      item,
      index
    ) {
      var href = $.router.href("productDetail", {
        categoryId: param.categoryId,
        subCategoryId: param.subCategoryId,
        productId: index
      });

      $('#products').append(
        "<li><a href='" + href + "'>" + item.name + '</a></li>'
      );
    });
  };

  vm.productDetailVM = function(route, param) {
    console.log(param);
    $('#categoryName').text(categories[param.categoryId]);
    $('#subCategoryName').text(
      subCategories[param.categoryId][param.subCategoryId]
    );
    $('#btnBack').attr(
      'href',
      '#/categories/' +
      param.categoryId +
      '/sub-categories/' +
      param.subCategoryId
    );

    var product =
      products[param.categoryId][param.subCategoryId][param.productId];

    $('#productName').text(product.name);
    $('#price').text(product.price);
    $('#rating').text(product.rating);
  };
})();