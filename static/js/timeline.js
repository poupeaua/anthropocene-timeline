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
    items.eq(active != -1 ? active : 0).addClass('active')
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