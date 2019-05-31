import React from "react";
import { render } from "jest-puppeteer-react";

import { Button } from "../index";

describe("Button - Visual Regression", () => {
  const onClickSpy = jest.fn();
  const puppeteerOptions = {
    viewport: { width: 200, height: 150 }
  };

  test("should render branded button", async () => {
    await render(
      <Button brand onClick={onClickSpy}>
        Button
      </Button>,
      puppeteerOptions
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-branded"
    });
  });

  test("should render text only button", async () => {
    await render(
      <Button text onClick={onClickSpy}>
        Text Only
      </Button>,
      puppeteerOptions
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-text-only"
    });
  });

  test("should render secondary button", async () => {
    await render(
      <Button secondary onClick={onClickSpy}>
        Button
      </Button>,
      puppeteerOptions
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-secondary"
    });
  });

  test("should render negative/critical action button", async () => {
    await render(
      <Button negative onClick={onClickSpy}>
        Cancel
      </Button>,
      puppeteerOptions
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-negative-action"
    });
  });

  test("should render button with specified icon", async () => {
    await render(
      <Button
        icon="icon-check"
        tooltip="Accept"
        tooltipDirection={Button.TOOLTIP_DIRECTION.BOTTOM}
        onClick={onClickSpy}
      >
        Accept
      </Button>,
      puppeteerOptions
    );

    await page.hover(".btn--icon");

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-with-icon"
    });
  });

  test("should render progress indicator", async () => {
    await render(
      <Button loading onClick={onClickSpy}>
        Saving...
      </Button>,
      puppeteerOptions
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: "button-progress-indicator",
      failureThreshold: "0.1",
      failureThresholdType: "percent"
    });
  });
});
