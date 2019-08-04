const hamburger = document.getElementById('hamburger')


// Menu Slide In and Out Function
hamburger.addEventListener('click', menu)
function menu(e) {
  document.body.classList.toggle('nav-toggle')
  e.target.classList.toggle('typcn-th-menu')
  e.target.classList.toggle('typcn-times')
}

// Fetch And Render Posts
const latest = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=599a7ed5c576465487287fd60285bde3',
sport = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=599a7ed5c576465487287fd60285bde3',
tech = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=599a7ed5c576465487287fd60285bde3',
ent = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=599a7ed5c576465487287fd60285bde3',
world = 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=599a7ed5c576465487287fd60285bde3'

function fetchNews(url, src) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let art = data.articles 
      art.slice(0, 6).forEach(post => {
        // console.log(post)
        let output = ''
        output = `<div class="news-card">
                    <div class="news-img" style="background: url(${post.urlToImage});background-size: cover;background-position: center;"></div>
                    <i class="typcn typcn-bookmark"></i>
                    <div class="news-text">
                      <h3>${post.title}</h3>
                      <p>${post.description}</p>
                      <p class="link"><a href="${post.url}" class="btn"><button type="button">Read More</button></a></p>
                    </div>
                  </div>`
        document.getElementById(src).innerHTML += output
      })
    })
    .catch(err => {
      console.log(err)
    })
}

fetchNews(latest, 'breakingNews')
fetchNews(sport, 'sportNews')
fetchNews(tech, 'techNews')
fetchNews(ent, 'entNews')
fetchNews(world, 'worldNews')