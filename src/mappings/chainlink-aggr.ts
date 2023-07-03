import {
	NUM,
	Token,
} from '../utils/constants';
import { updatePrice } from '../setters/chainlink-aggr';
import { AnswerUpdated as AnswerUpdatedUsdc } from "../../generated/chainlink_aggr_usdc_usd/chainlink_aggr";
import { AnswerUpdated as AnswerUpdatedUsdt } from "../../generated/chainlink_aggr_usdt_usd/chainlink_aggr";
import { AnswerUpdated as AnswerUpdatedDai } from "../../generated/chainlink_aggr_dai_usd/chainlink_aggr";


export function handleUsdcPriceFeed(ev: AnswerUpdatedUsdc): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdc);
}

export function handleUsdtPriceFeed(ev: AnswerUpdatedUsdt): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.usdt);
}

export function handleDaiPriceFeed(ev: AnswerUpdatedDai): void {
	updatePrice(ev.params.current.toBigDecimal().div(NUM.EIGHT_DECIMAL), Token.dai);
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
