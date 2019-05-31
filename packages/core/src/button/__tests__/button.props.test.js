import React from "react";
import { render, fireEvent } from "react-testing-library";

import { Button } from "../index";

const onClickSpy = jest.fn();
const buttonText = "Test Button";

describe("Button component", () => {
  let defaultButton;
  const { getByText } = render(
    <Button onClick={onClickSpy} testId="test-button">
      {buttonText}
    </Button>
  );
  test("should render button with correct text", () => {
    defaultButton = getByText(buttonText);
  });

  test("should call 'onClik' prop when button is clicked", () => {
    fireEvent.click(defaultButton);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
