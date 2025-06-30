interface PagamentoDeprecated {
    valor: number;
    pagarDinheiro(): void;
    pagarTransferencia(): void;
    pagarCheque(): void;
}



class PagamentoChequeDeprecated implements PagamentoDeprecated {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagarCheque(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }

    pagarDinheiro(): void {
        throw new Error("Pagamento em cheque não pode ser pago por dinheiro.");
    }

    pagarTransferencia(): void {
        throw new Error("Pagamento em cheque não pode ser pago por transferência.");
    }
}


class PagamentoDinheiroDeprecated implements PagamentoDeprecated {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagarDinheiro(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }

    pagarTransferencia(): void {
        throw new Error("Pagamento em dinheiro não pode ser pago por transferência.");
    }
    pagarCheque(): void {
        throw new Error("Pagamento em dinheiro não pode ser pago por cheque.");
    }
}

class PagamentoPorTransferenciaDeprecated implements PagamentoDeprecated {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagarTransferencia(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência.`);
    }
    pagarDinheiro(): void {
        throw new Error("Pagamento por transferência não pode ser recebido em dinheiro.");
    }

    pagarCheque(): void {
        throw new Error("Pagamento por transferência não pode ser pago em cheque.");
    }
}

const pagamentoChequeDeprecated = new PagamentoChequeDeprecated(100);
pagamentoChequeDeprecated.pagarCheque();

const pagamentoDinheiroDeprecated = new PagamentoDinheiroDeprecated(200);
pagamentoDinheiroDeprecated.pagarDinheiro();

const pagamentoTransferenciaDeprecated = new PagamentoPorTransferenciaDeprecated(300);
pagamentoTransferenciaDeprecated.pagarTransferencia();

pagamentoDinheiroDeprecated.pagarTransferencia(); //🤔🤔🤔