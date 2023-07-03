import {
    Bytes,
    BigDecimal,
} from '@graphprotocol/graph-ts';


export class Addr {
    public ZERO: Bytes;
}

export class Num {
    public ZERO: BigDecimal;
    public ONE: BigDecimal;
    public MINUS_ONE: BigDecimal;
    public THIRTY_PERCENT: BigDecimal;
    public SIX_DECIMAL: BigDecimal;
    public EIGHT_DECIMAL: BigDecimal;
}

// @dev: should be aligned with enum <Token> in entities
export class Token {
    public UNKNOWN: string;
	public PWRD: string;
	public GVT: string;
	public GRO: string;
	public DAI: string;
	public USDC: string;
	public USDT: string;
    public THREE_CRV: string;
}

// @dev: should be aligned with enum <TxType> in entities
export class TxType {
    public DEPOSIT: string;
	public WITHDRAWAL: string;
	public APPROVAL: string;
}

export class Contracts {
    public network: string;
    public chainlink_usdc_usd_address: string;
    public chainlink_usdc_usd_start_block: number;
}
