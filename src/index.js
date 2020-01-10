const Pageres = require('pageres');



(async () => {

  const pageres = new Pageres()
  const restaurants = [
    { url: 'https://www.zomato.com/cs/widgets/daily_menu.php?entity_id=18057566' },
    { url: 'https://www.restauracesalanda.cz/cs/salanda/karlin/#daily-meals', crop: true },
    { url: 'http://restauraceglobus.cz/poledni-menu/', cssSelector: '#main-content', crop: true }
  ]

  const runs = restaurants.map((restaurant) => {
    console.log('setting run ', restaurant.url)
    return pageres.src(restaurant.url, ['1366x768'], {
      scale: 1,
      delay: 0,
      crop: restaurant.crop,
      selector: restaurant.cssSelector,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Safari/605.1.15'
    })
  })

  console.log('Runs set')
  await pageres.dest(__dirname)
    .run()
  pageres.successMessage();
})();



