export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4, 5];

  // reduce combines array into a single value, one by one
  // (total, n) => total + n is the func, total is accumulator
  // n is each num in array, 0 is the intial value of total
  const sum = numbers.reduce((total, n) => total + n, 0);
  const joined = numbers.reduce((text, n) => text + n, "");
  const product = numbers.reduce((total, n) => total * n, 1);

  return (
    <div id="wd-reduce-function">
      <h4>Reduce Function</h4>
      sum = {sum} <br />
      joined = {joined} <br />
      product = {product}
      <hr />
    </div>
  );
}