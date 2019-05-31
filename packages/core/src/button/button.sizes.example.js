import React, { Fragment } from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Sizes";

export let Example = () => {
  return (
    <Fragment>
      <div className="col-lg-8 mar-b-2">
        <h3>Extra Small</h3>
        <Button onClick={action("clicked")} size={Button.SIZE.EXTRA_SMALL}>
          Extra Small
        </Button>
      </div>

      <div className="col-lg-8 mar-b-2">
        <h3>Small</h3>
        <Button onClick={action("clicked")} size={Button.SIZE.SMALL}>
          Small
        </Button>
      </div>

      <div className="col-lg-8 mar-b-2">
        <h3>Medium (default size)</h3>
        <Button onClick={action("clicked")}>Medium</Button>
      </div>

      <div className="col-lg-8 mar-b-2">
        <h3>Large</h3>
        <Button onClick={action("clicked")} size={Button.SIZE.LARGE}>
          Large
        </Button>
      </div>
    </Fragment>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName