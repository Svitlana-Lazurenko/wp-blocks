# ACF-block and React-block (examples)

This blocks are custom Gutenberg-blocks. To install these blocks, you need WordPress with the Gutenberg editor installed.

- Note: the styling of the blocks is minimal, since the blocks are just samples.

## ACF-block

"Hero Block". English-language.

- Note: The fields to fill in the editor are located in the sidebar.

### For correct operation:

- Install and activate the ACF plugin. This can be done through Admin Menu -> Plugins -> Add New Plugin. You can also download the plugin from the official website of this plugin.
- Go to Admin Menu -> ACF -> Tools -> Import, select the "acf.json" file from the "plugins-settings" folder and install settings of ACF by clicking the "Import JSON" button.
- When changing block settings, this setting should not be changed: Admin Menu -> ACF -> Field Groups -> Name of Your Block -> Edit -> Settings -> Location Rules -> Rules -> Show this field group if Block is equal to Name of Your Block.

## React-block

"Skills Block". English-language with the ability to translate.

### Commands:

- npm install - installs npm-dependencies into the block. After this, the node_modules directory and the package-lock.json file will appear in the block root.

- npm run watch - launches Webpack in the development mode with the process of watching. At the same time, the folder "build" will appear in the block root.

- npm run build - launches Webpack in the production mode. At the same time, the folder "build" will appear in the block root.
