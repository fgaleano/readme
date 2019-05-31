import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Secondary";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} secondary>
      Secondary
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName