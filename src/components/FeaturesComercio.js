import { FaCoins, FaEye ,FaTicketAlt, FaPlus, FaBox, FaUser, FaStickyNote, FaDog, FaDollarSign, FaFileInvoiceDollar, FaClipboard, FaListAlt } from 'react-icons/fa'
import Elem from './ElemFeature'

export default function FeaturesComercio() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-3 md:p-10 text-center">
            <Elem 
            icons={<FaBox className="icone"></FaBox>} 
            title="Gerencia de Estoque" 
            desc="Adicionar/Alterar/Deletar produtos."
            ></Elem>
            <Elem 
            icons={<FaUser className="icone"></FaUser>} 
            title="Gerenciar Conta Clientes/Fiado" 
            desc="Adicionar/Alterar/Deletar Clientes."
            ></Elem>
            <Elem 
            icons={<FaStickyNote className="icone"></FaStickyNote>} 
            title="Entrada de nota" 
            desc="Aceita nota em formato XML"
            ></Elem>
            <Elem 
            icons={<FaDog className="icone"></FaDog>} 
            title="Agenda Pet" 
            desc="Cadastro de Agendamento para petshops"
            ></Elem>
            <Elem 
            icons={<FaDollarSign className="icone"></FaDollarSign>} 
            title="Contas a Receber" 
            desc="visualizar pagamentos pendentes do seus clientes"
            ></Elem>
            <Elem 
            icons={<FaFileInvoiceDollar className="icone"></FaFileInvoiceDollar>} 
            title="Administração Financeira" 
            desc="Registra contas á pagar, despesas fixas e boletos de fornecedores."
            ></Elem>
            <Elem 
            icons={<FaClipboard className="icone"></FaClipboard>} 
            title="Relatórios" 
            desc="Emição de relatórios"
            ></Elem>
            <Elem 
            icons={<FaListAlt className="icone"></FaListAlt>} 
            title="Orçamento" 
            desc="Emição de Orçamentos"
            ></Elem>
            <Elem 
            icons={<FaPlus className="icone"></FaPlus>} 
            title="Pedidos" 
            desc="Emição de Pedidos / Balcão"
            ></Elem>
            <Elem 
            icons={<FaTicketAlt className="icone"></FaTicketAlt>} 
            title="Pagamento parcial" 
            desc=" de mesas ou comandas"
            ></Elem>
            <Elem 
            icons={<FaEye className="icone"></FaEye>} 
            title="Consulta no Caixa" 
            desc="Visualize informações/históricos"
            ></Elem>
            <Elem 
            icons={<FaCoins className="icone"></FaCoins>} 
            title="Contas a Pagar" 
            desc="Relatório de gastos"
            ></Elem>

        </div>
    )
}