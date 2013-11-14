/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var nav = document.getElementById('site-navigation'), 
	header = document.getElementById('masthead'), 
	menu, search, language, submenus;
	var buttons = document.getElementById('toggle-buttons'), btn_menu, btn_search, btn_lang;
	if (!nav || !buttons)
		return;

	btn_menu = buttons.querySelectorAll('.menu')[0];
	btn_search = buttons.querySelectorAll('.search')[0];
	btn_lang = buttons.querySelectorAll('.language')[0];
	if (!btn_menu || !btn_search || !btn_lang)
		return;

	menu = nav.getElementsByTagName('ul')[0];
	search = document.getElementById('searchform');
	language = header.querySelectorAll('.lang-select')[0];

	// Hide button if menu is missing or empty.
	if ( ! menu || ! menu.childNodes.length ) {
		btn_menu.style.display = 'none';
		return;
	}

	// list of active buttons, used for buttons with the single attribute.
	var active_togglers = [];

	var toggle = function (btn, element, single) {
		var pair = {
			'btn': btn,
			'element': element
		};

		// hide other buttons in the single group
		if (single) {
			var n = active_togglers.length;
			while (n) {
				// don't toggle itself, this would cause double toggling.
				if (pair.btn != active_togglers[n-1].btn) {
					setTimeout(toggle, 2, active_togglers[n-1].btn, active_togglers[n-1].element);
				}
				n--;
			}
			// repopulate list
			active_togglers.length = 0;
			active_togglers.push(pair);
		}

		// the toggle functionality
		if ( -1 != btn.className.indexOf( 'toggled-on' ) ) {
			btn.className = btn.className.replace( ' toggled-on', '' );
			element.className = element.className.replace( ' toggled-on', '' );
			if (active_togglers.indexOf(pair) != -1) {
				active_togglers.splice(active_togglers.indexOf(pair), 1);
			}
		} else {
			btn.className += ' toggled-on';
			element.className += ' toggled-on';
		}

	}

	// add togglers
	submenus = menu.querySelectorAll('.sub-menu');
	var i = submenus.length;
	while (i) {
		var p = submenus[i-1].parentNode;
		var a = submenus[i-1].previousElementSibling;
		if (a.tagName == 'A') {
			if (a.className.indexOf('toggler') == -1) {
				var e = document.createElement('a');
				e.setAttribute('href', '#');
				e.setAttribute('class', 'toggler entypo-list');
				e.setAttribute('data-target', i-1);
				a.parentNode.insertBefore(e, submenus[i-1]);
				e.onclick = function() {
					var x = this.getAttribute('data-target');
					toggle(this, submenus[x]);
					return false;
				};
				// open/expand ancestors of the current page
				if (p.className.indexOf('current-page-ancestor') != -1) {
					toggle(e, submenus[i-1]);	
				}
			}
		}
		i--;
	}


	btn_menu.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';
		toggle(this, menu, true);
		return false;
	};

	btn_search.onclick = function() {
		toggle(this, search, true);
		return false;
	}

	btn_lang.onclick = function() {
		toggle(this, language, true);
		return false;
	}

	// var page_submenu = document.getElementById('submenu');
	// var btn_page_submenu = page_submenu.getElementsByClassName('toggler')[0];

	// btn_page_submenu.onclick = function() {
	// 	toggle(this, page_submenu);
	// 	return false;	
	// }




} )();