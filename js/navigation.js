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

	btn_menu = buttons.getElementsByClassName('menu')[0];
	btn_search = buttons.getElementsByClassName('search')[0];
	btn_lang = buttons.getElementsByClassName('language')[0];
	if (!btn_menu || !btn_search || !btn_lang)
		return;

	menu = nav.getElementsByTagName('ul')[0];
	search = document.getElementById('searchform');
	language = header.getElementsByClassName('lang-select')[0];

	// Hide button if menu is missing or empty.
	if ( ! menu || ! menu.childNodes.length ) {
		btn_menu.style.display = 'none';
		return;
	}


	var toggle = function (btn, element) {
		if ( -1 != btn.className.indexOf( 'toggled-on' ) ) {
			btn.className = btn.className.replace( ' toggled-on', '' );
			element.className = element.className.replace( ' toggled-on', '' );
		} else {
			btn.className += ' toggled-on';
			element.className += ' toggled-on';
		}		
	}

	// add togglers
	submenus = menu.getElementsByClassName('sub-menu');
	var togglers = [];
	var i = submenus.length;
	while (i) {
		var p = submenus[i-1].parentNode;
		var a = submenus[i-1].previousElementSibling;
		if (a.tagName == 'A') {
			if (a.className.indexOf('toggler') == -1) {
				// a.className += ' entypo-submenu-list';
				var e = document.createElement('a');
				e.setAttribute('href', '#');
				// e.setAttribute('class', 'toggler entypo-down-open-big');
				e.setAttribute('class', 'toggler entypo-list');
				e.setAttribute('data-target', i-1);
				// e.innerText = '---';
				a.parentNode.insertBefore(e, submenus[i-1]);
				e.onclick = function() {
					var x = this.getAttribute('data-target');
					toggle(this, submenus[x]);
					return false;
				};
				if (p.className.indexOf('current-page-ancestor') != -1) {
					//var x = e.getAttribute('data-target');
					toggle(e, submenus[i-1]);	
				}
			}
		}
		i--;
	}


	btn_menu.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';
		toggle(this, menu);
		return false;
	};

	btn_search.onclick = function() {
		toggle(this, search);
		return false;
	}

	btn_lang.onclick = function() {
		toggle(this, language);
		return false;
	}

	// var page_submenu = document.getElementById('submenu');
	// var btn_page_submenu = page_submenu.getElementsByClassName('toggler')[0];

	// btn_page_submenu.onclick = function() {
	// 	toggle(this, page_submenu);
	// 	return false;	
	// }




} )();