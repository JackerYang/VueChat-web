/**
 * 按需引入view-design组件
 */

import {
  Affix,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Col,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  InputNumber,
  Menu,
  MenuItem,
  Message,
  Modal,
  Notice,
  Page,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Step,
  Steps,
  Tag,
  Timeline,
  TimelineItem,
  Tooltip,
  Tabs,
  TabPane
} from "view-design";

const viewDesign = {
  install: Vue => {
    Vue.component("Carousel", Carousel);
    Vue.component("CarouselItem", CarouselItem);
    Vue.component("Tooltip", Tooltip);
    Vue.component("Dropdown", Dropdown);
    Vue.component("DropdownMenu", DropdownMenu);
    Vue.component("DropdownItem", DropdownItem);
    Vue.component("Affix", Affix);
    Vue.component("Input", Input);
    Vue.component("Modal", Modal);
    Vue.prototype.$Modal = Modal;
    Vue.component("Button", Button);
    Vue.component("Form", Form);
    Vue.component("FormItem", FormItem);
    Vue.component("Icon", Icon);
    Vue.prototype.$Message = Message;
    Vue.component("Breadcrumb", Breadcrumb);
    Vue.component("BreadcrumbItem", BreadcrumbItem);
    Vue.component("Timeline", Timeline);
    Vue.component("TimelineItem", TimelineItem);
    Vue.component("Page", Page);
    Vue.component("BackTop", BackTop);
    Vue.component("Menu", Menu);
    Vue.component("MenuItem", MenuItem);
    Vue.component("InputNumber", InputNumber);
    Vue.component("Tag", Tag);
    Vue.component("Divider", Divider);
    Vue.component("Checkbox", Checkbox);
    Vue.component("CheckboxGroup", CheckboxGroup);
    Vue.component("Badge", Badge);
    Vue.component("Steps", Steps);
    Vue.component("Step", Step);
    Vue.component("Row", Row);
    Vue.component("Col", Col);
    Vue.component("Cascader", Cascader);
    Vue.component("RadioGroup", RadioGroup);
    Vue.component("Radio", Radio);
    Vue.prototype.$Notice = Notice;
    Vue.component("Progress", Progress);
    Vue.component("Tabs", Tabs);
    Vue.component("TabPane", TabPane);
  }
};

export default viewDesign;
