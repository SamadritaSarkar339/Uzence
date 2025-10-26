
import type { Meta, StoryObj } from "@storybook/react";
import { ComboboxMulti } from "../components/combobox/Combobox";
const meta: Meta<typeof ComboboxMulti> = { title: "Forms/ComboboxMulti", component: ComboboxMulti, args:{label:"Skills", options:["React","TypeScript","Tailwind CSS"], allowCreate:true}};
export default meta;
export const Default: StoryObj<typeof ComboboxMulti> = {};
