<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
</div><!-- #page -->

<div class="footer-wrapper">
	<footer id="colophon" role="contentinfo">
<!-- 	<?php
		// query for the footer page 
		$bottom_page_query = new WP_Query( 'pagename=footer-page' );

		// loop through the query (even though it's just one page)
		while ( $bottom_page_query->have_posts() ) : $bottom_page_query->the_post();
		    the_content();
		endwhile;

		// reset post data (important, don't leave out!)
		wp_reset_postdata();
	?> -->

	<?php
    /* footer sidebar */
    if ( ! is_404() ) : ?>
        <div id="footer-widgets" class="widget-area clear three">
            <?php if ( is_active_sidebar( 'sidebar-4' ) ) : ?>
                <?php dynamic_sidebar( 'sidebar-4' ); ?>
            <?php endif; ?>
 
            <?php if ( is_active_sidebar( 'sidebar-5' ) ) : ?>
                <?php dynamic_sidebar( 'sidebar-5' ); ?>
            <?php endif; ?>
 
            <?php if ( is_active_sidebar( 'sidebar-6' ) ) : ?>
                <?php dynamic_sidebar( 'sidebar-6' ); ?>
            <?php endif; ?>
        </div><!-- #footer-widgets -->
	<?php endif; ?>

	</footer><!-- #colophon -->
</div>

<?php wp_footer(); ?>
</body>
</html>