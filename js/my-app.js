// Initialize your app
var myApp = new Framework7({
    swipePanel: 'left',
    material:true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//fungsi laman food
myApp.onPageInit('gofood', function(page){
    //event tombol klik
    $$('#hitung').on('click', function(){
        var harga = $$('#harga').val();
        var qty = $$('#qty').val();

        var subtotal = harga * qty;

        console.log();
        $$('#subtotal').val(subtotal);

    $$('#hitung').on('click', function(page){
        var ongkir = $$('#ongkir').val();
        var subtotal = $$('#subtotal').val();

        var total = $$('#subtotal') + ongkir;

        console.log();
        $$('#total').val(parseInt(subtotal)+parseInt(ongkir));
    });
    });
});


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}