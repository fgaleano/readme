import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Loading Indicator";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} loading>
      Loading
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName