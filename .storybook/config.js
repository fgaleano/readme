import "./styles.css";
import React from "react";
import path from "path";
import {
  getStorybook,
  storiesOf,
  addDecorator,
  configure
} from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { addReadme, configureReadme } from "storybook-readme";
import { withA11y } from "@storybook/addon-a11y";

configureReadme({
  // Removes Storybook-Readme's default inline styles that center all stories' content.
  // This workaround can be removed when Storybook-Readme v5.0.2 is released.
  StoryPreview: ({ children }) => children
});

const ContentWrapper = ({ children }) => (
  <div className="container content__main">
    <div className="row">
      <div className="col-xs-12">
        <div className="panel">
          <div className="panel__content">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

const getComponentName = filePath =>
  path
    .dirname(filePath)
    .split(path.sep)
    .reverse()[0];

// Automatically import all examples
const req = require.context(
  "../packages",
  true,
  /^((?!node_modules).)*\.example\.js$/
);

const readMeReq = require.context(
  "../packages",
  true,
  /^((?!node_modules).)*\.README\.md$/
);

configure(() => {
  req.keys().forEach(pathToExample => {
    const { name, Example, useContentWrapper = true } = req(pathToExample);
    const componentName = getComponentName(pathToExample);

    const readmePath = readMeReq.keys().find(rm => rm.includes(componentName));
    const readme = readMeReq(readmePath);

    storiesOf(componentName, module)
      .addDecorator(withKnobs)
      .addDecorator(withA11y)
      .addDecorator(addReadme)
      .addParameters({
        options: {
          panelPosition: "right"
        },
        readme: {
          sidebar: readme
        }
      })
      .add(name, () => {
        return useContentWrapper ? (
          <ContentWrapper>
            <Example />
          </ContentWrapper>
        ) : (
          <Example />
        );
      });
  });
}, module);

export { getStorybook };
