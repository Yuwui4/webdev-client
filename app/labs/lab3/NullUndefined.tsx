export default function NullUndefined() {
  const nullValue = null;
  const undefinedValue = undefined;

  // ?? is to set a default value for undefined or null
  // ?. is to access a var that could be null without crashing
  return (
    <div id="wd-null-undefined">
      <h4>Null vs Undefined</h4>
      nullValue = {String(nullValue)}           <br />
      undefinedValue = {String(undefinedValue)} <br />
      typeof nullValue = {typeof nullValue}     <br />
      typeof undefinedValue = {typeof undefinedValue} <br />
      String(null) = {String(null)}             <br />
      String(undefined) = {String(undefined)}   <br />
      nullValue ?? "default" = {nullValue ?? "default"} <br />
      null == undefined = {String(null == undefined)} <br />
      null === undefined = {String(null === undefined)}
      <hr />
    </div>
  );
}