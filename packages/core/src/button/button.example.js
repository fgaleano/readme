import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Default";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} size={Button.SIZE.MEDIUM}>
      Default
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName