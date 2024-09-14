<?php
// If this file is called directly, abort.
defined('ABSPATH') || exit;

add_action('enqueue_block_assets', function () {

	// folder name of your block
	$block = 'skills-block';

	// Enqueue script
	wp_enqueue_script(
		$block . '-script',
		get_template_directory_uri() . "/react-blocks/$block/build/index.js",
		// Dependencies array ( you can use only must-have dependencies )
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-block-editor', 'wp-components', 'wp-data'),
		filemtime(get_template_directory() . "/react-blocks/$block/build/index.js")
	);

	// Enqueue style
	wp_enqueue_style(
		$block . '-style',
		get_template_directory_uri() . "/react-blocks/$block/build/style.css",
		[],
		filemtime(get_template_directory() . "/react-blocks/$block/build/style.css")
	);
});
