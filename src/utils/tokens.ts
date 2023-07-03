import {
    log,
    BigInt,
    Address,
    BigDecimal,
} from '@graphprotocol/graph-ts';


/// @notice Converts a BigInt to BigDecimal
/// @param amount the amount to be converted
/// @param factor the base conversion factor (1eN)
/// @param decimals the decimal precision (normally 7)
/// @return the converted BigDecimal
export function tokenToDecimal(
    amount: BigInt,
    factor: i32,
    decimals: i32,
): BigDecimal {
    const scale = BigInt.fromI32(10)
        .pow(factor as u8)
        .toBigDecimal();
    return amount.toBigDecimal()
        .div(scale)
        .truncate(decimals);
}
