/**
 * Alec Armstrong 2017
 * https://www.github.com/itsalbow
 * Revize Software
 */

(function ($) {
	$.fn.inView = function(props){
		var options = {
			type: props.type || 'top',
			hasFlyout: props.hasFlyout || false,
			margin: props.margin || 0
		}
		var win = $(window);
		var ul = $(this).first(); // Pass nav when calling fn. eg $('#nav').inView();

		// Measurement vars
		var ulHeight = ul.height();
		var ulWidth = ul.width();
		var flyout = options.hasFlyout && ul.find('ul'); // flyouts equal element or false
		var flyWidth = flyout && flyout.width();
		var flyoutPos = {};

		// viewport
		var view = {
			top: win.scrollTop(),
			right: win.scrollLeft() + win.width() - ulWidth - margin,
			bottom: win.scrollTop() + win.height() - ulHeight - margin,
			left: win.scrollLeft()
		};

		// nav menu position
		var position = ul.offset();
		position.bottom = position.top + ul.outerHeight();
		position.right = position.left + ul.outerWidth();

		// flyout position
		flyoutPos = flyout && flyout.offset();
		if(options.flyout){
			flyoutPos.right = flyoutPost.left + flyout.outerWidth();
		}

		var diff, old;

		// Check which type of nav
		if(options.type === 'top'){ // Top Nav
			if(view.bottom < position.top || view.top > position.bottom) {// if ul is off view vertically
				diff = view.bottom - position.top - margin;
				old = eval(ul.css('top').replace('px',''));
				ul.css('top', (old + diff) + 'px');
			}// end inner if
		} else if (options.type === 'side') { // Side Nav
			if(view.right < position.left || view.left > position.right) {// if ul is off view horizontally
				dif = view.right - position.left - margin;
				old = eval(ul.css('left').replace('px',''));
				ul.css('left', (old + diff) + 'px');
			}// end inner if
		}// end if

		// Check if has a flyout
		if(options.flyout){
			if(view.right < flyoutPos.left || view.left > flyoutPos.right){ // if flyout is off screen horizontally
				flyout.css('left','-100%');
				flyout.find('li').css({
					'display':'block',
					'clear':'both'
				});
			}// end inner if
		}// end flyout if
	}// end fn
}(jQuery));
