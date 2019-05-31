import React, { Fragment } from "react";
import classNames from "classnames";
import { bool, string, func, oneOf } from "prop-types";

export function Button({
  children,
  size,
  onClick,
  secondary,
  brand,
  negative,
  loading,
  text,
  icon,
  tooltip,
  tooltipDirection,
  className,
  testId,
  ariaLabel,
  ...rest
}) {
  const buttonClasses = classNames(
    { "edl-btn": !icon },
    { [`edl-btn--${size}`]: !icon && !brand && !text },
    { "edl-btn--secondary": secondary },
    { "edl-btn--brand": brand },
    { "edl-btn--text": text },
    { "edl-btn--lg": brand },
    { "edl-btn--negative": negative },
    { "edl-progress": loading },
    { "edl-btn--icon edl-icon edl-tooltip": icon },
    { [icon]: icon },
    className
  );

  const progress = loading && <span>Loading...</span>

  const renderIcon = () => {
    // To-DO: Replace this inline tooltip with Tooltip component when it's available
    const iconTooltip = (
      <span
        className={`edl-tooltip__content--${tooltipDirection}`}
        role="tooltip"
      >
        {tooltip}
      </span>
    );

    return <Fragment>{iconTooltip}</Fragment>;
  };

  const conditionalAttributes = {};
  if (icon) {
    conditionalAttributes["aria-label"] = ariaLabel;
  }

  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={buttonClasses}
      {...conditionalAttributes}
      {...rest}
    >
      {progress}
      {!icon && children}
      {icon && renderIcon()}
    </button>
  );
}

Button.SIZE = {
  EXTRA_SMALL: "xs",
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg"
};

Button.TOOLTIP_DIRECTION = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
};

Button.defaultProps = {
  type: "button",
  size: Button.SIZE.MEDIUM,
  ariaLabel: "",
  testId: ""
};

Button.propTypes = {
  /** HTML `type` attribute */
  type: oneOf(["submit", "reset", "button"]),
  /** Function triggered by onClick */
  onClick: func.isRequired,
  /** Determines size at which Button will be render. One of: `xs`, `sm`, `md`, `lg`. Not required when using "brand" or "icon".*/
  size: function(props, propName, componentName) {
    if (
      !props["icon"] &&
      !props["brand"] &&
      !Object.values(Button.SIZE).includes(props[propName])
    ) {
      console.warn(
        `${
          props[propName]
        } is not a valid value of prop "size" in ${componentName}`
      );
      return new Error('Please provide a "size" prop!');
    }
  },
  /** Render Button in disabled state */
  disabled: bool,
  /** Use a brand button for large banners and marketing contexts. Defaults size to "lg". */
  brand: bool,
  /** Use a text only button for secondary or tertiary actions that do not require the prominence of a button treatment. Ignores all "size" values. */
  text: bool,
  /** Use a secondary button for non-primary actions. */
  secondary: bool,
  /** Buttons with a negative or critical action should use the negative button style. */
  negative: bool,
  /** Display progress indicator inside the button. */
  loading: bool,
  /** Renders icon instead of text inside the Button. Must be edl-supported icon name. */
  icon: string,
  /** When "icon" is set, a tooltip is required to describe the icon and action for the Button. */
  tooltip: function(props, propName, componentName) {
    if (props["icon"] && props[propName] === undefined) {
      return new Error(
        `You must use the "tooltip" prop when using "icon" in ${componentName}`
      );
    }
  },
  /** Determines direction in which icon tooltip will render. */
  tooltipDirection: function(props, propName) {
    if (
      props["tooltip"] &&
      (props[propName] === undefined ||
        !Object.values(Button.TOOLTIP_DIRECTION).includes(props[propName]))
    ) {
      return new Error("Please provide a tooltipDirection prop!");
    }
  },
  /** Test ID used for identifying component instance in automated tests. */
  testId: string,
  /** Value of "aria-label" HTML attribute. Required to improve accessibility when using Icon Button. */
  ariaLabel: function(props) {
    if (props.icon && !props["ariaLabel"]) {
      return new Error(
        "Failed prop type: The prop `ariaLabel` is required when using the `icon` prop in `Button`."
      );
    }
  },
  /** Any extra CSS classes for the component */
  className: string,
  /** React children for the component. Not required when using "icon" */
  children: function(props, propName) {
    if (!props["icon" && props[propName]] === undefined) {
      return new Error(
        "Failed prop type: The prop `children` is marked as required in `Button`, but its value is `undefined`"
      );
    }
  }
};

Button.displayName = "Button"
