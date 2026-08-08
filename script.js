
document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('navMenu').classList.toggle('show');
});
document.querySelectorAll('#navMenu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('navMenu').classList.remove('show');
  });
});


document.getElementById('ball').addEventListener('click', function () {
  var ball = document.getElementById('ball');
  ball.style.transform = 'rotate(' + (Math.random() * 360 - 180) + 'deg)';
  setTimeout(function () { ball.style.transform = ''; }, 300);
});


var revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach(function (item) { revealObserver.observe(item); });
} else {
  // no IntersectionObserver support: just show everything
  revealItems.forEach(function (item) { item.classList.add('in'); });
}

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('#navMenu a');

function setActiveLink() {
  var scrollPos = window.scrollY + 120; // offset for sticky nav height
  var current = sections[0] ? sections[0].id : null;

  sections.forEach(function (section) {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach(function (link) {
    var match = link.getAttribute('href') === '#' + current;
    link.classList.toggle('active', match);
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
