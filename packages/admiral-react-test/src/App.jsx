import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Toggle, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';

import AccordionTest from './components/accordionTest.jsx';
import AccordionTestFormRadio from './components/Forms/AccordionFormTest.jsx';
import AvatarGroupTest from './components/AvatarGroupTest.jsx';
import AvatarTest from './components/AvatarTest.jsx';
import BadgeTest from './components/badgeTest.jsx';
import BreadcrumbsTest from './components/Breadcrumbs.jsx';
import ButtonTest from './components/buttonTest.jsx';
import CalendarTest from './components/CalendarTest.jsx';
import CheckBoxFieldTestHookForm from './components/Forms/CheckBoxFieldTestForms.jsx';
import CheckboxCompositeGroupTest from './components/CheckboxCompositeGroupTest.jsx';
import CheckboxFieldTest from './components/CheckBoxFieldTest.jsx';
import ChipsTest from './components/ChipsTest.jsx';
import ContentSwitcherTest from './components/ContentSwitcherTest.jsx';
import DateFieldTest from './components/DateFieldTest.jsx';
import DateFieldTestHookForm from './components/Forms/DateFieldTestForms.jsx';
import DateInputTest from './components/DateInputTest.jsx';
import DateInputTestHookForm from './components/Forms/DateInputTestForms.jsx';
import EditModeFieldTest from './components/EditModeFieldTest.jsx';
import EditModeFieldsForms from './components/Forms/EditModeFieldTestForms.jsx';
import Example from './components/exampleTest.jsx';
import Example2 from './components/exampleTest2.jsx';
import FieldSetRadioTest from './components/FieldSetRadioTest.jsx';
import FieldSetTest from './components/FieldSetTest.jsx';
import FileInputTest from './components/FileInputTest.jsx';
import HintTest from './components/hintTest.jsx';
import IconButtonTest from './components/iconButtonTest.jsx';
import IconsTest from './icons/IconsTest.jsx';
import InputFieldTest from './components/InputFieldTest.jsx';
import LinkTest from './components/LinkTest.jsx';
import MenuButtonTest, { items } from './components/MenuButtonTest.jsx';
import ModalTest from './components/ModalTest.jsx';
import MultiButtonTest from './components/MultiButtonTest.jsx';
import MultiSelectTest from './components/MultiSelectTest.jsx';
import NotificationTest from './components/NotificationTest.jsx';
import NumberInputFieldTest from './components/NumberInputFieldTest.jsx';
import NumberInputTest from './components/NumberInputTest.jsx';
import OverflowMenuTest from './components/OverflowMenuTest.jsx';
import PaginationOneTest from './components/PaginationOneTest.jsx';
import PaginationSimpleTest from './components/PaginationSimpleTest.jsx';
import PaginationTwoTest from './components/PaginationTwoTest.jsx';
import PhoneInputFieldTest from './components/PhoneInputFieldTest.jsx';
import PhoneNumberInputTest from './components/PhoneNumberInputTest.jsx';
import ProgressHeaderTest from './components/ProgressHeaderTest.jsx';
import ProgressPageTest from './components/ProgressPageTest.jsx';
import ProgressStepperTest from './components/ProgressStepperTest.jsx';
import RadioButtonTest from './components/RadioButtonTest.jsx';
import SearchSelectFieldTest from './components/SearchSelectFieldTest.jsx';
import SelectFieldTest from './components/SelectFieldTest.jsx';
import SelectTest from './components/SelectTest.jsx';
import SelectTreeTest from './components/SelectTreeTest/SelectTreeTest.jsx';
import SliderInputFieldTest from './components/SliderInputFieldTest.jsx';
import SliderInputTest from './components/SliderInputTest.jsx';
import SliderRangeFieldTest from './components/SliderRangeFieldTest.jsx';
import SliderRangeTest from './components/SliderRangeTest.jsx';
import SliderTest from './components/SliderTest.jsx';
import SpinnerTest from './components/SpinnerTest.jsx';
import StatusIndicatorTest from './components/StatusIndicatorTest.jsx';
import StepperTest from './components/StepperTest.jsx';
import SuggestFieldTest from './components/SuggestFieldTest.jsx';
import SuggestInputTest from './components/SuggestInputTest.jsx';
import TTest from './components/TypographyTest.jsx';
import TabMenuTest from './components/TabMenuTest.jsx';
import TableColumnOrientationTest from './components/TablesTest/TableColumnOrientationTest.jsx';
import TableTest from './components/TablesTest/TableTest.jsx';
import TableWidthColumnTest from './components/TablesTest/TableWidthColumnTest.jsx';
import TableWithCheckboxTest from './components/TablesTest/TableWithCheckBoxTest.jsx';
import TagsTest from './components/TagsTest.jsx';
import TextAreaTest from './components/TextAreaTest.jsx';
import TextButtonTest from './components/TextButtonTest.jsx';
import TextFieldTest from './components/TextFieldTest.jsx';
import TextInputTest from './components/TextInputTest.jsx';
import TimeFieldTest from './components/TimeFieldTest.jsx';
import TimeInputTest from './components/TimeInputTest.jsx';
import ToastTest from './components/ToastTest.jsx';
import TogglesTest from './components/ToggleTest.jsx';
import TooltipTest from './components/TooltipTest.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import { MyChips } from './components/MyComponentsTest/MyChips/index.jsx';
import TreeTest from './components/Tree/TreeTest.jsx';
import InputExTest from './components/InputExTest.jsx';
import DropMenuTest from './components/DropMenuTest.jsx';
import TagMenuTest from './components/TagMenuTest.jsx';


function App() {
  const [selectedTheme, setSelectedTheme] = useState(LIGHT_THEME);
  const [checked, setChecked] = useState(false);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
    font-family: 'VTB Group UI';
  }
`;
  const ToggleStyled = styled(Toggle)`
    margin: 10px 0 30px 10px;
  `;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <ToggleStyled
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          HandleThemeChange(checked ? LIGHT_THEME : DARK_THEME);
        }}
      >
        Dark_mode
      </ToggleStyled>
      <div>
        <HashRouter>
          <Routes>
            <Route path="" element={<Welcome />} />
            <Route path="accordion" element={<AccordionTest />} />
            <Route path="accordion_forms_radio" element={<AccordionTestFormRadio />} />
            <Route path="avatar" element={<AvatarTest />} />
            <Route path="avatar_group" element={<AvatarGroupTest />} />
            <Route path="badge" element={<BadgeTest />} />
            <Route path="breadcrumbs" element={<BreadcrumbsTest />} />
            <Route path="button" element={<ButtonTest />} />
            <Route path="calendar" element={<CalendarTest />} />
            <Route path="checkbox_composite_group" element={<CheckboxCompositeGroupTest />} />
            <Route path="checkbox_field" element={<CheckboxFieldTest />} />
            <Route path="checkbox_forms" element={<CheckBoxFieldTestHookForm />} />
            <Route path="chips" element={<ChipsTest />} />
            <Route path="contentSwitcher" element={<ContentSwitcherTest />} />
            <Route path="date_field" element={<DateFieldTest />} />
            <Route path="date_fields_forms" element={<DateFieldTestHookForm />} />
            <Route path="date_input" element={<DateInputTest />} />
            <Route path="date_input_forms" element={<DateInputTestHookForm />} />
            <Route path="edit_mode_field" element={<EditModeFieldTest />} />
            <Route path="edit_mode_field_forms" element={<EditModeFieldsForms />} />
            <Route path="example" element={<Example />} />
            <Route path="example2" element={<Example2 />} />
            <Route path="field_set" element={<FieldSetTest />} />
            <Route path="field_set_radio" element={<FieldSetRadioTest />} />
            <Route path="file_input" element={<FileInputTest />} />
            <Route path="hint" element={<HintTest />} />
            <Route path="icon_button" element={<IconButtonTest />} />
            <Route path="icons" element={<IconsTest />} />
            <Route path="input_field" element={<InputFieldTest />} />
            <Route path="link" element={<LinkTest />} />
            <Route path="menu_button" element={<MenuButtonTest items={items} />} />
            <Route path="modal" element={<ModalTest />} />
            <Route path="multibutton" element={<MultiButtonTest />} />
            <Route path="multiselect" element={<MultiSelectTest />} />
            <Route path="my_chips" element={<MyChips />} />
            <Route path="notifications" element={<NotificationTest />} />
            <Route path="number_input" element={<NumberInputTest />} />
            <Route path="number_input_field" element={<NumberInputFieldTest />} />
            <Route path="ovetflowmenu" element={<OverflowMenuTest />} />
            <Route path="pagination_one" element={<PaginationOneTest />} />
            <Route path="pagination_simple" element={<PaginationSimpleTest />} />
            <Route path="pagination_two" element={<PaginationTwoTest />} />
            <Route path="phone_input_field" element={<PhoneInputFieldTest />} />
            <Route path="phone_number_input" element={<PhoneNumberInputTest />} />
            <Route path="progress_header" element={<ProgressHeaderTest />} />
            <Route path="progress_page" element={<ProgressPageTest />} />
            <Route path="progress_stepper" element={<ProgressStepperTest />} />
            <Route path="radio_button" element={<RadioButtonTest />} />
            <Route path="search_select_field" element={<SearchSelectFieldTest />} />
            <Route path="select" element={<SelectTest />} />
            <Route path="select_field" element={<SelectFieldTest />} />
            <Route path="select_tree" element={<SelectTreeTest />} />
            <Route path="slider" element={<SliderTest />} />
            <Route path="slider_input" element={<SliderInputTest />} />
            <Route path="slider_input_field" element={<SliderInputFieldTest />} />
            <Route path="slider_range" element={<SliderRangeTest />} />
            <Route path="slider_range_field" element={<SliderRangeFieldTest />} />
            <Route path="spinner" element={<SpinnerTest />} />
            <Route path="status_indicator" element={<StatusIndicatorTest />} />
            <Route path="stepper" element={<StepperTest />} />
            <Route path="suggest_field" element={<SuggestFieldTest />} />
            <Route path="suggest_input" element={<SuggestInputTest />} />
            <Route path="table" element={<TableTest />} />
            <Route path="table_column_orientation" element={<TableColumnOrientationTest />} />
            <Route path="table_width" element={<TableWidthColumnTest />} />
            <Route path="table_with_checkbox" element={<TableWithCheckboxTest />} />
            <Route path="tabmenu" element={<TabMenuTest />} />
            <Route path="tags" element={<TagsTest />} />
            <Route path="text_area" element={<TextAreaTest />} />
            <Route path="text_button" element={<TextButtonTest />} />
            <Route path="text_field" element={<TextFieldTest />} />
            <Route path="text_input" element={<TextInputTest />} />
            <Route path="time_field" element={<TimeFieldTest />} />
            <Route path="time_input" element={<TimeInputTest />} />
            <Route path="toast" element={<ToastTest />} />
            <Route path="toggle" element={<TogglesTest />} />
            <Route path="tooltip" element={<TooltipTest />} />
            <Route path="typography" element={<TTest />} />
            <Route path="tree" element={<TreeTest />} />
            <Route path="input_ex" element={<InputExTest />} />
            <Route path="drop_menu" element={<DropMenuTest />} />
            <Route path="tag_menu" element={<TagMenuTest />} />
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
