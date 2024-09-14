<?php
$show = get_field('show_hero');
if (!is_admin() && !$show) return;

$hero_title = get_field('hero_title') ?? 'Title here...';
$hero_description = get_field('hero_description') ?? 'Description here...';
$hero_buttons = get_field('hero_buttons');
$first_cta = $hero_buttons['cta_lets_talk'] ?? '';
$second_cta = $hero_buttons['cta_portfolio'] ?? '';
$hero_image = get_field('hero_image')
?>

<section id="hero" class="hero">
    <div class="container">
        <div class="content">
            <div class="column-1">
                <?php if ($hero_title <> '') : ?>
                    <h1><?php echo $hero_title; ?></h1>
                <?php endif; ?>

                <?php if ($hero_description <> '') : ?>
                    <p class="description"><?php echo $hero_description; ?></p>
                <?php endif; ?>

                <?php if ($first_cta <> '') : ?>
                    <a href="<?php echo $first_cta['url']; ?>" class="btn-1" target="_blank" rel="noopener noreferrer">
                        <?php echo $first_cta['title']; ?>
                    </a>
                <?php endif; ?>

                <?php if ($second_cta <> '') : ?>
                    <a href="<?php echo $second_cta['url']; ?>" class="btn-2" target="_blank" rel="noopener noreferrer">
                        <?php echo $second_cta['title']; ?>
                    </a>
                <?php endif; ?>
            </div>

            <div class="column-2">
                <?php if ($hero_image <> '') : ?>
                    <img src="<?php echo $hero_image['url']; ?>" alt="<?php echo $hero_image['alt']; ?>">
                    <?php else :
                    if (is_admin()) : ?>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="grey" />
                        </svg>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
</section>