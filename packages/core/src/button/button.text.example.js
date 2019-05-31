import React from "react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";

export let name = "Text Only";

export let Example = () => {
  return (
    <Button onClick={action("clicked")} text>
      Text Only
    </Button>
  );
};

Example.propTypes = Button.propTypes
Example.displayName = Button.displayName