import Layout from '../../components/layout/Layout'
import FeaturesComercio from '../../components/FeaturesComercio'
import Head from 'next/head'

export default function Comercio() {
    return (
        <>
            <Head>
                <title>Sistema para Comercios</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="grid md:grid-cols-2 p-3 text-white text-center md:text-left bg-mercado">
                    <div className="p-3 md:p-7">
                        <h1 className="text-2xl text-gray-100 mt-3 md:mt-14">Sistema de Comércios varegistas</h1>
                        <p className="text-gray-50">
                            Para quem deseja ter controle de vendas,Emissão de nfe,
                            Emissão de cupom fiscal, entrada mercadorias,estoque,
                            fluxo de caixa, vendedores, fornecedores,comissões,
                            relatorios, contas a pagar.
                    </p>
                    </div>
                    <div className="p-3 md:p-6">
                        <iframe src="https://www.youtube.com/embed/40UKP-1W810" 
                        frameborder="0" 
                        height="250"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen=""
                        className="w-full " >
                        </iframe>
                    </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Quem usa nosso sistema</h2>
                <h3 className="text-gray-700">Têm nosso compromisso em manter suporte e atualizações vitalícias.</h3>
                </div>
                <FeaturesComercio></FeaturesComercio>
            </Layout>
        </>
    )
}