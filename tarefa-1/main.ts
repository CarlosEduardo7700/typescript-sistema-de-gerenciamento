import Colaborador from "./Colaborador";
import GerenciadorDeColaboradores from "./GerenciadorDeColaboradores";
import { Cargos } from "./enum/cargos";
import CalcularSalario from "./services/CalcularSalario";
import GerarRelatorio from "./services/GerarRelatorio";
import Pagamento from "./services/Pagamento";

const gerenciadorDeColaboradores = new GerenciadorDeColaboradores();
const calcularSalario = new CalcularSalario();
const gerarRelatorio = new GerarRelatorio(gerenciadorDeColaboradores.colaboradores, calcularSalario);
const pagamento = new Pagamento(calcularSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

gerenciadorDeColaboradores.contratarColaborador(colaborador1);
gerenciadorDeColaboradores.contratarColaborador(colaborador2);
gerenciadorDeColaboradores.contratarColaborador(colaborador3);

console.log(gerarRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);