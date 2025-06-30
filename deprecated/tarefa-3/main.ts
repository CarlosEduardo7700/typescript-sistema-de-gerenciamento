
abstract class FuncionarioDeprecated {
    nome: string;
    cargaHoraria: number;
    salario: number;

    constructor(nome: string, cargaHoraria: number, salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }

    abstract trabalha(): void;
    abstract calculaSalarioLiquido(): number;
    abstract calculaParticipacaoDeLucros(lucro: number): number;
}

class FuncionarioEfetivoDeprecated extends FuncionarioDeprecated {
    constructor(nome: string, cargaHoraria: number, salario: number) {
        super(nome, cargaHoraria, salario);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class FuncionarioVoluntarioDeprecated extends FuncionarioDeprecated {
    orientador: FuncionarioDeprecated;

    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: FuncionarioDeprecated) {
        super(nome, cargaHorariaExtensao, null as unknown as number);
        this.orientador = funciarioEfetivo;
    }

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }

    calculaParticipacaoDeLucros(lucro: number): number {
        throw new Error("Funcionário voluntário não tem participação de lucros");
    }

    calculaSalarioLiquido(): number {
        throw new Error("Funcionário voluntário não tem salário");
    }
}

const funcionarioEfetivoDeprecated: FuncionarioDeprecated = new FuncionarioEfetivoDeprecated("João", 40, 2400);
const funcionarioVoluntarioDeprecated: FuncionarioDeprecated = new FuncionarioVoluntarioDeprecated("Enzo", 20, funcionarioEfetivoDeprecated);

//Efetivo
console.log("nome:", funcionarioEfetivoDeprecated.nome);
console.log("salário bruto:", funcionarioEfetivoDeprecated.salario);
console.log("salário líquido:", funcionarioEfetivoDeprecated.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivoDeprecated.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntarioDeprecated.nome);
console.log("salário bruto:", funcionarioVoluntarioDeprecated.salario);
console.log("salário líquido:", funcionarioVoluntarioDeprecated.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioVoluntarioDeprecated.calculaParticipacaoDeLucros(2.5)); 