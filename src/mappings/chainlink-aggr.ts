import {
	NUM,
	Token,
	DECIMALS,
} from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';
import { updateGasPrice } from '../setters/gasPrice';
import { updateTokenPrice } from '../setters/tokenPrice';
// The aggregator contract is the same for all price feeds; thus, it can be reused for mappings
import { AnswerUpdated } from '../../generated/chainlink_aggr_usdc_usd/chainlink_aggr';


export function handleUsdcPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdc);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleUsdtPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdt);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleDaiPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.dai);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleEthPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.eth);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleBtcPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.btc);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleMaticPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.matic);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleAdaPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.ada);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleCrvPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.crv);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleAvaxPriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.avax);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

export function handleDogePriceFeed(ev: AnswerUpdated): void {
	updateTokenPrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.doge);
	updateGasPrice(tokenToDecimal(ev.transaction.gasPrice, 9, DECIMALS));
}

// const initPriceLastUpdate = (): PriceLastUpdate => {
// 	let priceTS = PriceLastUpdate.load(ADDR.ZERO)
// 	if (!priceTS) {
// 		priceTS = new PriceLastUpdate(ADDR.ZERO);
// 		priceTS.usdc_ts = NUM.ZERO;
// 		priceTS.usdt_ts = NUM.ZERO;
// 		priceTS.dai_ts = NUM.ZERO;
// 		priceTS.save();
// 	}
// 	return priceTS;
// }


/*

export function handleUsdcPriceFeed(ev: AnswerUpdatedUsdc): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdc);
}

export function handleUsdtPriceFeed(ev: AnswerUpdatedUsdt): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdt);
}

export function handleDaiPriceFeed(ev: AnswerUpdatedDai): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.dai);
}

export function handleEthPriceFeed(ev: AnswerUpdatedEth): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.eth);
}

export function handleBtcPriceFeed(ev: AnswerUpdatedBtc): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.btc);
}

export function handleMaticPriceFeed(ev: AnswerUpdatedMatic): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.matic);
}

export function handleAdaPriceFeed(ev: AnswerUpdatedAda): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.ada);
}
*/