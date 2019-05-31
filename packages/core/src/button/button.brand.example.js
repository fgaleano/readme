import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Brand";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} brand>
      Brand
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName