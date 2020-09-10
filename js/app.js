// Loader Animation
const preLoader = () => {
  setTimeout(function load() {
    document.body.classList.toggle('loader-animation')
  }, 1000)
  setTimeout(function load2() {
    document.getElementById('loader').style.display = 'none'
  }, 2000)
}

// Back To Top Function
const btt = document.getElementById('btt')
window.onscroll = function() {
  scrollFunc()
}
function scrollFunc() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btt.parentElement.style.display = 'block'
  } else {
    btt.parentElement.style.display = 'none'
  }
}
btt.addEventListener('click', backToTop)
function backToTop() {
  window.scrollTo(0, 0)
}

// Menu Slide In and Out Function
const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', menu)
function menu(e) {
  document.body.classList.toggle('nav-toggle')
  e.target.classList.toggle('typcn-th-menu')
  e.target.classList.toggle('typcn-times')
}

// Search Slide In and Out FUnction
const search = document.getElementById('search')
search.addEventListener('click', searchArt)
function searchArt(e) {
  document.body.classList.toggle('search-toggle')
  e.target.classList.toggle('typcn-zoom')
  e.target.classList.toggle('typcn-times')
}

// Fetch And Render Posts
const latest = 'https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=4d20ffa98f524a59b78898e64de3393f'
  sport = 'https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=4d20ffa98f524a59b78898e64de3393f',
  tech = 'https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=4d20ffa98f524a59b78898e64de3393f',
  ent = 'https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=4d20ffa98f524a59b78898e64de3393f',
  world = 'https://newsapi.org/v2/top-headlines?language=en&category=general&apiKey=4d20ffa98f524a59b78898e64de3393f'

const fetchNews = (url, src) => {
  fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      // console.log(data)
      let art = data.articles
      art.slice(0, 6).forEach(post => {
        // console.log(post)
        let output = ''
        output = `<div class="news-card">
                    <div class="news-img" style="background: url(${post.urlToImage});background-size: cover;background-position: center;"></div>
                    <!-- <i class="typcn typcn-bookmark"></i> -->
                    <div class="news-text">
                      <h3>${post.title}</h3>
                      <p>${post.description}</p>
                      <p class="link"><a href="${post.url}" class="btn"><button type="button">Read More</button></a></p>
                    </div>
                  </div>`
        document.getElementById(src).innerHTML += output
      })
      if (data.status === 'ok') {
        preLoader()
      }
    })
    .catch(err => {
      console.log(err)
    })
}

fetchNews(latest, 'breakingNews')
fetchNews(tech, 'techNews')
fetchNews(ent, 'entNews')
fetchNews(world, 'worldNews')
fetchNews(sport, 'sportNews')