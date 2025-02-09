import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Meus Projetos
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src="/template-imobiliario.png"
            title="Landing Page - Imobiliario"
            description="Landing Page de alta conversão de capturar novos clientes para uma empresa do nicho imobiliário."
            />
            <ProjectCard
            src="/template-mkt.png"
            title="Landing Page - Marketing Digital"
            description="Landing Page de alta conversão de capturar novos clientes para uma empresa do nicho de vendas de cursos no Marketing Digital."

            />
            <ProjectCard
            src="/template-loja.png"
            title="E-commerce"
            description="E-commerce criado para venda de produtos IOT de segurança domiciliar"          
            />
        </div>   
    </div>
  )
}

export default Projects
