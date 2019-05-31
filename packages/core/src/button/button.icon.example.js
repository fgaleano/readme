import React, { Fragment } from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Icon";

export let Example = () => {
  return (
    <Fragment>
      <h3>Icon</h3>
      <Button
        onClick={action("clicked")}
        icon="icon-airplane-arrive"
        ariaLabel="Airplane icon"
        tooltip="Airplane!"
        tooltipDirection={Button.TOOLTIP_DIRECTION.RIGHT}
      />
    </Fragment>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName