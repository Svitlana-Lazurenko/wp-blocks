import { registerBlockType, createBlock } from "@wordpress/blocks";
import {
  RichText,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import "./style.scss"; // Styles

// Block name
const BLOCK_NAME = "skills-block";

// Template of skill
const skillTemplate = [
  [
    "core/image",
    {
      className: `${BLOCK_NAME}__skill-image`,
    },
  ],
  [
    "core/heading",
    {
      className: `${BLOCK_NAME}__skill-title`,
      placeholder: __("Skill name", "text-domain"),
      level: 5,
    },
  ],
  [
    "core/paragraph",
    {
      className: `${BLOCK_NAME}__skill-description`,
      placeholder: __("Skill description", "text-domain"),
    },
  ],
];

// Template of image
const getImageTemplate = (setAttributes) => (
  <MediaUploadCheck>
    <MediaUpload
      onSelect={(media) => {
        setAttributes({ imageUrl: media.url, imageAlt: media.alt });
      }}
      allowedTypes={["image"]}
      render={({ open }) => (
        <Button onClick={open} variant="primary">
          {__("Upload Image", "text-domain")}
        </Button>
      )}
    />
  </MediaUploadCheck>
);

// Custom Appender
const CustomAppender = ({ clientId }) => {
  const parentClientId = useSelect(
    (select) => select("core/block-editor").getBlock(clientId).clientId,
    [clientId]
  );
  const { insertBlocks } = useDispatch("core/block-editor");

  const addTemplateBlocks = () => {
    const groupBlock = createBlock(
      "core/group",
      {
        className: `${BLOCK_NAME}__skill`,
      },
      skillTemplate.map(([blockName, blockAttributes]) =>
        createBlock(blockName, blockAttributes)
      )
    );
    insertBlocks([groupBlock], undefined, parentClientId);
  };

  return (
    <Button variant="secondary" onClick={addTemplateBlocks}>
      {__("Add skill", "text-domain")}
    </Button>
  );
};

// Register block
registerBlockType(`my-theme/${BLOCK_NAME}`, {
  title: __("Skills Block", "text-domain"),
  category: "theme",
  icon: "admin-tools",
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    imageAlt: {
      type: "string",
      default: "",
    },
    heading: {
      type: "string",
      source: "html",
      selector: "h3",
    },
    description: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },

  // Edit function
  edit: ({ clientId, attributes, setAttributes }) => {
    const { imageUrl, imageAlt, heading, description } = attributes;

    return (
      <div className={BLOCK_NAME}>
        <div>
          <p className={`${BLOCK_NAME}__help`}>
            {__("Provide image for skills.", "text-domain")}
          </p>
          {imageUrl ? (
            <img src={imageUrl} alt={imageAlt} />
          ) : (
            getImageTemplate(setAttributes)
          )}
        </div>
        <div>
          <p className={`${BLOCK_NAME}__help`}>
            {__("Enter title for skills.", "text-domain")}
          </p>
          <RichText
            tagName="h3"
            placeholder={__("Your text here...", "text-domain")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            className={`${BLOCK_NAME}__title`}
          />
        </div>
        <div>
          <p className={`${BLOCK_NAME}__help`}>
            {__("Enter description for skills.", "text-domain")}
          </p>
          <RichText
            tagName="p"
            placeholder={__("Your text here...", "text-domain")}
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            className={`${BLOCK_NAME}__description`}
          />
        </div>
        <div className={`${BLOCK_NAME}__skills`}>
          <p className={`${BLOCK_NAME}__help`}>
            {__(
              "Enter information for every skill. Image of skill must be format 1:1.",
              "text-domain"
            )}
          </p>
          <InnerBlocks
            templateLock={false}
            renderAppender={() => <CustomAppender clientId={clientId} />}
          />
        </div>
      </div>
    );
  },

  // Save function
  save: ({ attributes }) => {
    const { imageUrl, imageAlt, heading, description } = attributes;

    return (
      <section className={`${BLOCK_NAME}__block`}>
        <div className={"container"}>
          {imageUrl && <img src={imageUrl} alt={imageAlt} />}
          <RichText.Content
            tagName="h3"
            value={heading}
            className={`${BLOCK_NAME}__title`}
          />
          <RichText.Content
            tagName="p"
            value={description}
            className={`${BLOCK_NAME}__description`}
          />
          <div className={`${BLOCK_NAME}__skills`}>
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    );
  },
});
