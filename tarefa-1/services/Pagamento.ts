import Colaborador from "../Colaborador";
import CalcularSalario from "./CalcularSalario";

export default class Pagamento {

    constructor(private calcularSalario: CalcularSalario) {}

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.calcularSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}