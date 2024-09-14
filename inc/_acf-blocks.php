<?php

add_action('acf/init', 'register_blocks');

function register_blocks()
{
    if (function_exists('acf_register_block_type')) {
        acf_register_block_type(array(
            'name' => 'hero',
            'title' => __('Hero Block'),
            'description' => __('Hero block'),
            'render_template' => 'acf-blocks/hero-block/hero-block.php',
            'category' => 'theme',
            'icon' => 'superhero-alt',
            'enqueue_style' => get_template_directory_uri() . '/acf-blocks/hero-block/hero-block.css',
            'keywords' => array('hero', 'hero block'),
        ));
    }
}
