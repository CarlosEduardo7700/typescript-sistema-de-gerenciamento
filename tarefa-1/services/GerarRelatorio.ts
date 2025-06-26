import Colaborador from "../Colaborador"
import CalcularSalario from "./CalcularSalario"

export default class GerarRelatorio {

    constructor(
        private _colaboradores: Colaborador[],
        private calcularSalario: CalcularSalario,
    ) {}

    gerarJSON() {
        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.calcularSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };

}