document.addEventListener('DOMContentLoaded', function () {
  function scrollIntoViewWithOffset(el, offset) {
    window.scrollTo({
      behavior: 'smooth',
      top:
        el.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }

  var tds = Array.from(document.querySelectorAll('tbody td:first-child'))
    .map(function (el) {
      return { letter: el.innerHTML[0], el }
    })
    .filter(function (value, index, self) {
      return (
        self.findIndex(function (o) {
          return o.letter === value.letter
        }) === index
      )
    })
  var navEl = document.getElementById('nav')

  tds.map(function (td) {
    var li = document.createElement('li')
    li.innerText = td.letter

    td.el.setAttribute('data-letter', td.letter)

    navEl.appendChild(li)

    li.addEventListener('click', () => {
      // td.el.scrollIntoView({ behavior: 'smooth' })
      scrollIntoViewWithOffset(td.el, 20)
    })
  })

  var toTop = document.getElementById('top')

  toTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
})
