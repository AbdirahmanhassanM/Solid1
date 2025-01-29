await evaluator.ex0_setupProject();
await evaluator.ex1_getTickerAndSupply();
const ticker = await evaluator.readTicker();
const supply = await evaluator.readSupply();
console.log(`Ticker: ${ticker}, Supply: ${supply}`);

