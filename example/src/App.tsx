import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "./App.css";

// @ts-ignore
import {
  //import default style
  formStyles,

  //import layout helpers
  Section,
  Row,
 
  //import element helpers
  TextInput,
  TextInputNoLabel,
  SectionHeader,
  CurrencyInput,
  DateInput,
  SelectInput,
  TextareaInput,
  RichTextareaInput,
  CheckboxInput,
  RadioInput,

} from "pdfmake-form-elements";

const testHTML = `<h3>Value in H3 Html Tag</h3><p>first paragraph with <i>Italics</i> <b>Bold<b> and more</p><p>second paragraph</p><p>third paragraph</p>`;

formStyles.SUB_HEADER_FILL_COLOR = "red";
formStyles.SUB_HEADER_COLOR = "balck"; 

const pdfStyle = {  
  // use the default form element style
  ...formStyles,

  // add your own style or override the existing one here
};

function App() {
  const [count, setCount] = useState(0);

  var exampleDocumentDefination: any = {
    content: [
      {
        text: "pdfMake : HTML FORM EXAMPLE",
        style: "header",
      },
      Section([
        SectionHeader("Mix Column Layout, multiple rows"),
        Row([
          TextInput("Input type text", "This is the value of the text input"),
          CurrencyInput("Currency type example", "1,000,000"),
          CurrencyInput("Currency", "1,000,000.00"),
        ]),
        Row([
          TextInput("Input type text", "This is the value of the text input"),
          CurrencyInput("Currency type example", "1,000,000"),
        ]),
      ]),

      // new section
      Section([
        SectionHeader("Three Column Layout"),
        Row([
          DateInput("Input type date example", new Date()),
          SelectInput(
            "Select input type style",
            "This is the value of the input"
          ),
          TextInputNoLabel("This is example of input with no Label"),
        ]),
      ]),

      //more section
      Section([
        SectionHeader("Single Column Layout/ Textarea Example"),
        Row([
          TextareaInput(
            "Some Label (Textarea Example)",
            "This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)"
          ),
        ]),
      ]),

      //more section
      Section([
        SectionHeader("Rich Text Editor Example (Support HTML Tags)"),
        Row([RichTextareaInput("Rich Text Editor Label", testHTML)]),
      ]),

      //Checkbox and Radio buttons section
      Section([
        SectionHeader("Checkbox and Radio Styles"),
        Row([CheckboxInput("Checkbox labe with checked checbox", true)]),
        Row([CheckboxInput("Unchecked Checkbox with plain text label", false)]),
        Row([
          CheckboxInput(
            "Checkbox with html content <br/>" + testHTML,
            true,
            "html"
          ),
        ]),
        Row([
          CheckboxInput(
            "Checkbox with very long text. This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)"
          ),
        ]),
        Row([
          RadioInput("Radio Example, Horizontal Layout (Default)", [
            {
              itemLabel: "Option 1",
              selected: false,
              width: "auto",
            },
            {
              itemLabel: "Option 2",
              selected: true,
              width: "auto",
            },
            {
              itemLabel: "Option 3",
              selected: false,
              width: "auto",
            },
          ]), 
        ]),
        Row([
          RadioInput(
            "Radio Example, Vertical Layout",
            [
              {
                itemLabel: "Option 1",
                selected: true,
                width: "auto",
              },
              {
                itemLabel: "Option 2",
                selected: false,
                width: "auto",
              },
              {
                itemLabel:
                  "Option 3,  Very long text, Checkbox with very long text. This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)",
                selected: false,
                width: "auto",
              },
            ],
            "vertical"
          ),
        ]),
      ]),
    ],
    styles: pdfStyle,
  };

  const inputElement = TextInput("Hello", "test");
  console.log(inputElement);

  const handlePdfMake = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let docDef: any = { ...exampleDocumentDefination };
    docDef.pageOrientation = true ? "landscape" : "portrait";
    (docDef.info = {
      title: "makePdf Example",
      author: "Pradeep Raj Thapaliya",
      subject: "Form type stype",
      keywords: "makepdf, export pdf",
    }),
      pdfMake.createPdf(docDef).open();
  };

  return (
    <div className="App">
      <button onClick={handlePdfMake}>Download</button>
    </div>
  );
}

export default App;
