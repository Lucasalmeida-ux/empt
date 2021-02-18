import { FaPlus, FaBox, FaUser, FaStickyNote, FaDollarSign, FaListAlt } from 'react-icons/fa'
import Elem from './ElemFeature'

export default function FeaturesAtacado() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-3 md:p-10 text-center">
            <Elem 
            icons={<FaBox className="icone"></FaBox>} 
            title="Gerencia de Estoque" 
            desc="Adicionar/Alterar/Deletar produtos."
            ></Elem>
            <Elem 
            icons={<FaUser className="icone"></FaUser>} 
            title="Gerenciar Conta Clientes" 
            desc="Adicionar/Alterar/Deletar Clientes."
            ></Elem>
            <Elem 
            icons={<FaListAlt className="icone"></FaListAlt>} 
            title="Orçamento" 
            desc="Emição de Orçamentos"
            ></Elem>
            <Elem 
            icons={<FaPlus className="icone"></FaPlus>} 
            title="Pedidos/Vendas" 
            desc="Emição de Pedidos / Vendas"
            ></Elem>
            <Elem 
            icons={<FaStickyNote className="icone"></FaStickyNote>} 
            title="Emissão de NF-e" 
            desc="Integração CNAB para todos os bancos"
            ></Elem>
            <Elem 
            icons={<FaDollarSign className="icone"></FaDollarSign>} 
            title="Contas a Receber" 
            desc="visualizar pagamentos pendentes do seus clientes"
            ></Elem>

        </div>
    )
}