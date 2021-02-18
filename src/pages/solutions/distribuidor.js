import Layout from '../../components/layout/Layout'
import FeaturesAtacado from '../../components/FeatureAtacado'
import Head from 'next/head'

export default function Distribuidor() {
    return (
        <>
            <Head>
                <title>Sistema para Distribuidoras</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="grid grid-cols-6 p-10 text-white text-center bg-atacado">
                    <div className="col-start-2 col-span-4 p-3 md:p-5">
                        <h1 className="text-2xl text-gray-100 mt-3 md:mt-10">Sistema para Gestão de Distribuidoras</h1>
                        <p className="text-gray-50">
                        Para quem deseja ter controle de vendas, Emissão de nfe, 
                        Emissão de cupom fiscal, entrada mercadorias,estoque, 
                        fluxo de caixa, vendedores, fornecedores,comissões, 
                        relatorios, contas a pagar.
                    </p>
                    </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Quem usa nosso sistema</h2>
                <h3 className="text-gray-700">Têm nosso compromisso em manter suporte e atualizações vitalícias.</h3>
                </div>
                <FeaturesAtacado></FeaturesAtacado>
            </Layout>
        </>
    )
}