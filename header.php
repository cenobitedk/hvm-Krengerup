<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
<link rel="Shortcut Icon" href="http://hvm-krengerup.dk/wp-content/uploads/2015/04/knude.ico">
<link rel="icon" href="http://hvm-krengerup.dk/wp-content/uploads/2015/04/knude.ico" type="image/x-icon">
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="header-wrapper clear">
	<header id="masthead" class="site-header" role="banner">
		<hgroup>
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php echo (strlen(get_bloginfo( 'name', 'display' )) ? get_bloginfo( 'name', 'display' ) : "Hørvævsmuseet<span class=\"sub\">Krengerup</span>" ) ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup>

		<div id="toggle-buttons" class="toggle-buttons">
			<ul>
				<li><a href="#" class="language entypo-globe"><?php _e('Language', 'twentytwelve'); ?></a></li>
				<li><a href="#" class="menu entypo-menu"><?php _e('Menu', 'twentytwelve'); ?></a></li>
				<li><a href="#" class="search entypo-search"><?php _e('Search', 'twentytwelve'); ?></a></li>
			</ul>
		</div>

		<?php twentytwelve_languages_list(); ?>

		<?php get_search_form( TRUE ); ?>

		<?php $header_image = get_header_image();
		if ( ! empty( $header_image ) ) : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
		<?php endif; ?>
	</header><!-- #masthead -->
</div>

<div class="menu-wrapper">
	<nav id="site-navigation" class="main-navigation" role="navigation">
		<!-- <h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3> -->
		<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
		<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
	</nav><!-- #site-navigation -->
</div>

<div id="page" class="hfeed site">
	<div id="main" class="wrapper">

		<? if (!is_front_page()) : ?>
		<div id="submenu" class="">
			<a href="#" class="toggler entypo-list"></a>
		<?php
		wp_nav_menu( array(
	  		'theme_location' => 'primary',
	  		'sub_menu' => true,
	  		'menu_class' => 'submenu'
		));
		?>
		</div>
		<?php endif; ?>
