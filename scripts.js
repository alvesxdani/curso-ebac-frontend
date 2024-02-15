const api = 'https://api.github.com/users/alvesxdani'

const xhr = new XMLHttpRequest()
xhr.open('GET', api)
xhr.send()

xhr.onload = () => {
  if (xhr.status === 200) {
    let user = JSON.parse(xhr.responseText)
    console.log(user)
    document.querySelector('.profile-name').innerHTML = user.name
    document.querySelector('.profile-avatar').src = user.avatar_url
    document.querySelector('.profile-link').href = user.html_url
    document.querySelector('.profile-username').innerHTML = `@${user.login}`
    document.querySelector('.profile-followers > span').innerHTML = user.followers
    document.querySelector('.profile-following > span').innerHTML = user.following
    document.querySelector('.profile-repo > span').innerHTML = user.public_repos
  } else {
    console.log(`Erro ${xhr.status}: ${xhr.statusText}`)
  }
}
