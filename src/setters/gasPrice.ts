import {
	NUM,
	ADDR,
} from '../utils/constants';
import { BigDecimal } from '@graphprotocol/graph-ts';
import { GasPrice } from '../../generated/schema';


const initGasPrice = (): GasPrice => {
	let gasPrice = GasPrice.load(ADDR.ZERO)
	if (!gasPrice) {
		gasPrice = new GasPrice(ADDR.ZERO);
		gasPrice.price_gwei = NUM.ZERO;
		gasPrice.save();
	}
	return gasPrice;
}

export const updateGasPrice = (value: BigDecimal): void => {
	let gasPrice = initGasPrice();
    gasPrice.price_gwei = value;
	gasPrice.save();
}
