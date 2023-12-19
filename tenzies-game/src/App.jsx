import NumberArray from "./NumberArray";

export default function App(){
  return(
    <div className="outline">
        <h1>Tenzies</h1>
        <div>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</div>
        <NumberArray/>
    </div>
  );
}