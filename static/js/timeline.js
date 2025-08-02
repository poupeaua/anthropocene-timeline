$(() => {
	let scrollTarget = false

	let timeline = $('.timeline__nav'),
		items = $('li', timeline),
		milestones = $('.timeline__section .milestone')

	// This scroll handler is for highlighting the active year
	$(window).scroll(function () {
    let viewLine = $(window).scrollTop() + $(window).height() / 3,
      active = -1

    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false
        }
        active++
      })
    } else {
      active = scrollTarget
    }

    items.filter('.active').removeClass('active')
    let activeItem = items.eq(active != -1 ? active : 0)
    activeItem.addClass('active')

    // Scroll the timeline nav
    if (activeItem.length) {
      let nav = timeline
      let itemTop = activeItem.position().top
      let itemHeight = activeItem.outerHeight()
      let navHeight = nav.height()
      let navScrollTop = nav.scrollTop()

      if (itemTop < 0) {
        nav.scrollTop(navScrollTop + itemTop)
      } else if (itemTop + itemHeight > navHeight) {
        nav.scrollTop(navScrollTop + itemTop - navHeight + itemHeight)
      }
    }
	}).trigger('scroll')


	// This handler is for clicking on a year to scroll to it
	items.find('span').click(function () {
		let li = $(this).parent(),
			index = li.index(),
			milestone = milestones.eq(index)

		if (! li.hasClass('active') && milestone.length) {
			scrollTarget = index

			let scrollTargetTop = milestone.offset().top - 80

			$('html, body').animate({ scrollTop: scrollTargetTop }, {
				duration: 400,
				complete: function complete() {
					scrollTarget = false
				}
			})
		}
	})
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("scroll-timeline");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
