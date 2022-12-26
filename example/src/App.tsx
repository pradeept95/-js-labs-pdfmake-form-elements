import { useState } from 'react' 
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import './App.css'

import  { 
  formStyles, 
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

  Section,
  Row
 }  from "pdfmake-form-elements";

const testHTML = `<h3>Value in H3 Html Tag</h3><p>first paragraph with <i>Italics</i> <b>Bold<b> and more</p><p>second paragraph</p><p>third paragraph</p>`;


function App() {
  const [count, setCount] = useState(0)

  var exampleDocumentDefination: any = {
    content: [
      {
        text: "pdfMake : HTML FORM EXAMPLE",
        style: "header",
      },
      Section([
        SectionHeader("Two Column Layout"),
        Row([
          TextInput(
            "Input type text",
            "This is the value of the text input"
          ),
          CurrencyInput(
            "Currency type example",
            "1,000,000" 
          ),
          CurrencyInput(
            "Currency",
            "1,000,000.00" 
          )
        ]),
        Row([
          TextInput(
            "Input type text",
            "This is the value of the text input"
          ),
          CurrencyInput(
            "Currency type example",
            "1,000,000" 
          ), 
        ])
      ]) , 
     
      {
        ...SectionHeader("Three Column Layout"),
      },
      {
        columnGap: 10,
        columns: [
          {
            ...DateInput(
              "Input type date example",
              new Date()
            ),
          },
          {
            ...SelectInput(
              "Select input type style",
              "This is the value of the input"
            ),
          },
          {
            ...TextInputNoLabel(
              "This is example of input with no Label" 
            ),
          },
        ],
      },
      {
        ...SectionHeader("Single Column Layout/ Textarea Example"),
      },
      {
        columnGap: 10,
        columns: [
          {
            ...TextareaInput(
              "Some Label (Textarea Example)",
              "This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)"
            ),
          },
        ],
      },
      {
        ...SectionHeader("Rich Text Editor Example (Support HTML Tags)"),
      },
      {
        columnGap: 10,
        columns: [
          {
            ...RichTextareaInput("Rich Text Editor Label", testHTML),
          },
        ],
      },
      {
        ...SectionHeader("Checkbox and Radio Styles"),
      },
      {
        columnGap: 10,
        columns: [
          {
            ...CheckboxInput("Checkbox labe with checked checbox", true),
          },
        ],
      },
      {
          columnGap: 10,
          columns: [
            {
              ...CheckboxInput("Unchecked Checkbox with plain text label", false),
            },
          ],
        },
      {
          columnGap: 10,
          columns: [
            {
              ...CheckboxInput("Checkbox with html content <br/>" + testHTML, true, "html"),
            },
          ],
        },
        {
          columnGap: 10,
          columns: [
            {
              ...CheckboxInput( 
                "Checkbox with very long text. This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)"
              ),
            },
          ],
        },
  
        //radio button example 
        
        {
          columnGap: 10,
          columns: [
            {
              ...RadioInput("Radio Example, Horizontal Layout (Default)", [
                  {
                      itemLabel : "Option 1",
                      selected : false,
                      width : "auto"
                  },
                  {
                      itemLabel : "Option 2",
                      selected : true,
                      width : "auto"
                  },
                  {
                      itemLabel : "Option 3",
                      selected : false,
                      width : "auto"
                  }
              ]),
            },
          ],
        },
  
        {
          columnGap: 10,
          columns: [
            {
              ...RadioInput("Radio Example, Vertical Layout", [
                  {
                      itemLabel : "Option 1",
                      selected : true,
                      width : "auto"
                  },
                  {
                      itemLabel : "Option 2",
                      selected : false,
                      width : "auto"
                  },
                  {
                      itemLabel : "Option 3,  Very long text, Checkbox with very long text. This is the value of the input First Label (Input Example) First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)First Label (Input Example)",
                      selected : false,
                      width : "auto"
                  }
              ], "vertical"),
            },
          ],
        },
    ],
    styles: formStyles,
  };
  

  const inputElement = TextInput("Hello", "test");
  console.log(inputElement)

  const handlePdfMake = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let docDef : any = {...exampleDocumentDefination};
    docDef.pageOrientation = true ? 'landscape' : 'portrait';
    docDef.info = {
    title: 'makePdf Example',
    author: 'Pradeep Raj Thapaliya',
    subject: 'Form type stype',
    keywords: 'makepdf, export pdf',
    },
   
    pdfMake.createPdf(docDef).open();
  }

  return (
    <div className="App">
      <button onClick={handlePdfMake}>Download</button>
    </div>
  )
}

export default App
