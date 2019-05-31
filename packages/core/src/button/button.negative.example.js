import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Negative";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} size={Button.SIZE.SMALL} negative>
      Negative
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName