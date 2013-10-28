/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var nav = document.getElementById('site-navigation'), 
	header = document.getElementById('masthead'), menu, search, language;
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

	btn_menu.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';
		toggle(this, menu);
	};

	btn_search.onclick = function() {
		toggle(this, search);
	}

	btn_lang.onclick = function() {
		toggle(this, language);
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

} )();