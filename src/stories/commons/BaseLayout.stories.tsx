import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import BaseLayout from "components/Commons/Layout/BaseLayout";

// Define the decorator
addDecorator((story) => <BaseLayout>{story()}</BaseLayout>);

// Define the story
storiesOf("Commons/Layout/BaseLayout", module).add("default", () => (
  <div>This is the contents in BaseLayout</div>
));
