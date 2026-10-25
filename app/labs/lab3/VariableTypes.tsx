export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let personalString = "goob";
  let personalNum = 233;
  let isString2 = typeof personalString;
  let isNum2 = typeof personalNum;

  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      personalString = {personalString}           <br />
      personalNum = {personalNum}                 <br />
      isString Personal = {isString2}             <br />
      isNum Personal = {isNum2}                   <br />

      sampleCount = {sampleCount} <br />
      typeof sampleCount = {isSampleCount} <br />
      sampleLabel = {sampleLabel} <br />
      typeof sampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}