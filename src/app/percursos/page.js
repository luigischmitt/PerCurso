"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import styles from './page.module.css';

const PercursosPage = () => {
  const [labIndex, setLabIndex] = useState(0);

  const labs = [
    {
      id: "tril",
      title: "TRILAB",
      description:
        'A proposta do TRILAB, ou apenas TRIL, está baseada em uma tríade conceitual que dá origem ao seu nome: SEIZE, SHAPE e SOLVE. Este modelo holístico “3S” tem como objetivo implementar um portfólio de soluções para setores estratégicos da nossa economia e sociedade, atuando em horizontes de pesquisa que perpassam tópicos interdisciplinares.',
      imgSrc: "/tril_logo.svg",
      link: "https://tril.ci.ufpb.br/en/",
    },
    {
      id: "lavid",
      title: "LAVID",
      description:
        "O LAVID surgiu da proposta de desenvolver projetos de pesquisa e desenvolvimento em hardware e software voltados para plataformas de sistemas e aplicações multimídia. Atualmente, o LAVID possui 18 pesquisadores docentes credenciados, mais de 150 alunos pesquisadores e 9 patentes registradas nas suas áreas de atuação.",
      imgSrc: "/lavid_logo.svg",
      link: "http://lavid.ufpb.br/",
    },
    {
      id: "aria",
      title: "ARIA",
      description:
        "O ARIA (ARtificial Intelligence Applications laboratory) acredita que as experiências definem a aprendizagem. Assim, o ARIA constrói experiências para máquinas e para pessoas, formando especialistas na área de inteligência artificial e ciência de dados, desenvolvendo aplicações e pesquisando seus métodos.",
      imgSrc: "/aria_logo.svg",
      link: "https://aria.ci.ufpb.br/",
    },
    {
      id: "laser",
      title: "LASER",
      description:
        "Criado em 2013, o Laboratório de Engenharia de Sistemas e Robótica - LASER surgiu da proposta de desenvolver projetos de pesquisa em hardware e software voltados às áreas de Robótica, Sistemas Embarcados e Inteligência Artificial. Hoje ele se destaca por projetos de excelência nas áreas, Robótica Móvel, Sistemas Embarcados e Projeto de Hardware, Otimização e Logística.",
      imgSrc: "/laser_logo.svg",
      link: "https://sites.google.com/view/laser-ufpb/",
    },
    {
      id: "lmi",
      title: "LMI",
      description:
        "O Laboratório de Medidas e Instrumentação (LMI) tem o intuito de desenvolver pesquisas na área de eletrônica, microeletrônica aplicadas no uso de sensores e atuadores. Fazem parte do escopo das pesquisas desenvolver novos sensores bem como aplicações ligadas aos conceitos: smart-home, tecnologia assistiva, reabilitação virtual e monitoramento remoto.",
      imgSrc: "/lmi_logo.svg",
      link: "https://lmi.ci.ufpb.br/",
    },
    {
      id: "lumo",
      title: "LUMO",
      description:
        "O Laboratório de Computação Ubíqua e Móvel (LUMO) tem por finalidade realizar pesquisas, desenvolvimento e extensão em computação ubíqua, móvel e áreas relacionadas, como interação humano-computador, cidades inteligentes, sistemas modulares, educação a distância, redes de sensores, redes veiculares, internet das coisas e evolução computacional.",
      imgSrc: "/lumo_logo.svg",
      link: "http://plone.ufpb.br/lumo",
    },
    {
      id: "lasid",
      title: "LASID",
      description:
        "O Laboratório de Sistemas Digitais (LASID) tem a proposta de realizar pesquisas em desenvolvimento de hardware, sistemas embarcados e processamento de sinais. Também está ligado ao Programa de Pós Graduação em Informática (PPGI) e já participou de diversos projetos, ganhando conhecimento, experiência e infra-estrutura.",
      imgSrc: "/lasid_logo.svg",
      link: "http://www.lasid.di.ufpb.br/",
    },
    {
      id: "liaa",
      title: "LIAA",
      description:
        "O Laboratório de Inteligência Artificial Aplicada (LIAA) tem o objetivo de investigar a aplicação de técnicas da Inteligência Artificial à solução de problemas em diferentes domínios do conhecimento, tais como, Informática em Saúde, Cidades Inteligentes, TV Digital Interativa, etc.",
      imgSrc: "/liaa_logo.svg",
      link: "https://www.facebook.com/liaalab/?locale=pt_BR",
    },
    {
      id: "lar",
      title: "LAR",
      description:
        "O Laboratório de Redes (LAR) está vinculado ao Departamento de Sistemas de Computação e tem como principal atuação a área de redes de comunicação, com destaque para as áreas de segurança em redes, redes sem fio e redes definidas por software (SDN).",
      imgSrc: "/lar_logo.svg",
      link: "http://www.ci.ufpb.br/ci/documentos/resolucoes/resolucao-no-01-2014-ci",
    },
  ];

  const handleLabPrev = () => {
    setLabIndex((prevIndex) =>
      prevIndex === 0 ? labs.length - 1 : prevIndex - 1
    );
  };

  const handleLabNext = () => {
    setLabIndex((prevIndex) =>
      prevIndex === labs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <div>
    <div className={styles.backgroundRectangle}>
      <div className={styles.lineMid}></div> 
      <div className={`${styles.container} ${styles.percursos}`}>
        <div className={styles.heroText}>
          <h2 className={styles.sectionTitle}>PERCURSOS</h2>
          <p className={styles.percursosDescription}>
            O sistema de percursos permite que você se especialize em uma <strong className={styles.accent}>área de interesse</strong>, ajudando a orientar suas escolhas de disciplinas optativas, ligas acadêmicas e laboratórios que mais se alinham ao tópico que deseja se especializar.
          </p>
          <p className={styles.percursosDescription}>
            Ao seguir um percurso, você se beneficia de uma <strong className={styles.accent}>orientação direcionada</strong>, aproveitando ao máximo o que o curso oferece e fazendo escolhas mais assertivas para atingir seus objetivos.
          </p>
        </div>
        <img src="/image2.svg" alt="Homem olhando para horizonte" className={styles.image}/>
      </div>
      <div className={styles.lineBottom}></div>
    </div>

    <div className={`${styles.container} ${styles.cardsContainer}`}>
    <Link href="/percursos/engenharia-de-software" className={styles.card}>
      <div>
        <img src="/eda_icon.svg" height="60px"></img>
        <h3 className={styles.cardTitle}>ENGENHARIA DE SOFTWARE</h3>
        <p className={styles.cardText}>
          Aplica princípios e práticas de engenharia para o desenvolvimento, manutenção e gerenciamento de softwares seguros, gerenciando qualidade de entrega em projetos.
        </p>
        <p className={styles.cardLink}>Clique para saber mais!</p>
      </div>
    </Link>

      <Link href="/percursos/ciencia-dados-ia" className={styles.card}>
        <div>
          <img src="/ia_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>CIÊNCIA DE DADOS & IA</h3>
          <p className={styles.cardText}>
          Une estatística, programação e aprendizado de máquina para extrair insights de dados, criando sistemas inteligentes aplicados a previsões, reconhecimento de padrões e automação.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>

      <Link href="/percursos/seguranca-da-informacao" className={styles.card}>
        <div>
          <img src="/sc_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>SEGURANÇA DA INFORMAÇÃO</h3>
          <p className={styles.cardText}>
            Protege dados e sistemas contra acessos não autorizados, garantindo confidencialidade e integridade. Envolve práticas como criptografia, controle de acessos e gestão de riscos.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>

      <Link href="/percursos/pesquisa-operacional" className={styles.card}>
        <div>
          <img src="/estatistica_icon.svg" height="60px"></img>
          <h3 className={styles.cardTitle}>PESQUISA OPERACIONAL</h3>
          <p className={styles.cardText}>
            Utiliza métodos matemáticos e computacionais para otimizar processos e tomar decisões estratégicas, sendo aplicada em áreas como logística, planejamento e alocação de recursos.
          </p>
          <p className={styles.cardLink}>Clique para saber mais!</p>
        </div>
      </Link>
    </div>


    <div className={styles.backgroundRectangle2}>
      <div className={styles.lineMid}></div>
      <div className={styles.laboratorios}>
        <h2 className={styles.sectionTitle2}>LABORATÓRIOS</h2>
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.carouselButton} ${styles.left}`}
            onClick={handleLabPrev}
          >
            &lt;
          </button>
          <div className={styles.labCard}>
            <a href={labs[labIndex].link} target="_blank" rel="noopener noreferrer" className={styles.labCardLink}>
              <div className={styles.labCardContent}>
                <img
                  src={labs[labIndex].imgSrc}
                  alt={`Logo ${labs[labIndex].title}`}
                  className={styles.cardImage}
                />
                <div className={styles.labCardText}>
                  <h3 className={styles.cardTitleLab}>{labs[labIndex].title}</h3>
                  <p className={styles.cardTextLab}>{labs[labIndex].description}</p>
                  <p className={styles.cardLink2}>Clique para saber mais!</p>
                </div>
              </div>
            </a>
          </div>
          <button
            className={`${styles.carouselButton} ${styles.right}`}
            onClick={handleLabNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.lineBottom}></div>
    </div>

    <div className={styles.backgroundWhite}>
      <div className={styles.grupos}>
        <div className={styles.groupsContainer}>
          <h3 className={styles.groupCategoryTitle}>Ligas Acadêmicas</h3>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://tail-tech.com/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/tail_logo.svg" alt="Logo TAIL" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>TAIL</h3>
                    <p className={styles.groupSubtitle}>Liga Acadêmica</p>
                    <p className={styles.groupDescription}>
                      Technology and Artificial Intelligence League, ou simplesmente TAIL, é a primeira liga acadêmica de IA da Paraíba, a TAIL busca incrementar a bagagem intelectual e social dos seus membros através do estudo e da aplicação de novas ideias no ramo da Inteligência Artificial.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/cortechx.ufpb/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/CortechX_logo.png" alt="Logo CortechX" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>CortechX</h3>
                    <p className={styles.groupSubtitle}>Liga Acadêmica</p>
                    <p className={styles.groupDescription}>
                    Liga acadêmica de tecnologia e Interação Humano-Computador que desenvolve projetos práticos nas fronteiras entre tecnologia, mente e sociedade, passando por inteligência artificial, neurociência, EEG e análise de comportamento. Busca unir conhecimento científico e aplicação prática, com foco em interdisciplinaridade, empreendedorismo e tecnologias centradas no ser humano.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/ufpbquantum/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/QUASAR_logo.png" alt="Logo QUASAR" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>QUASAR</h3>
                    <p className={styles.groupSubtitle}>Liga Acadêmica</p>
                    <p className={styles.groupDescription}>
                    Liga acadêmica de Computação Quântica da Universidade Federal da Paraíba.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <h3 className={styles.groupCategoryTitle}>Grupos Acadêmicos</h3>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://mcc.ci.ufpb.br/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/mcc_logo.png" alt="Logo MCCUFPB" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>MCCUFPB</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                      O Meninas na Ciência da Computação UFPB (MCCUFPB) é um grupo de professoras e alunas do CI que incentiva a presença feminina na computação, promovendo eventos e mentorias para aumentar a representatividade.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://www.petccufpb.com.br/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/pet_logo.svg" alt="Logo PET" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>PET</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                      O Programa de Educação Tutorial (PET) do curso de Ciência da Computação da UFPB promove integração acadêmica, com projetos de ensino, pesquisa e extensão, incentivando o crescimento pessoal e profissional dos alunos.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/log.ufpb/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/log_logo.svg" alt="Logo LOG" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>LOG</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    O Logistics and Optimization Group (LOG) faz parte do LASER e foi fundado com o intuito de reunir pessoas interessadas em trabalhar com a área de Otimização Combinatória e Logística. O LOG conta com uma extensa rede de colaboração no Brasil e no Exterior.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/capybots/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/capybots_logo.png" alt="Logo CapyBots" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>CapyBots</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    Grupo estudantil de robótica vinculado ao LASER que representa a UFPB na Flying Robots League, competição na qual já conquistou o título de bicampeão brasileiro.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/ramoieee.ufpb/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/IEEE_logo.png" alt="Logo IEEE" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>IEEE</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    Ramo estudantil do IEEE (Institute of Electrical and Electronics Engineers) no Centro de Informática da UFPB, organização profissional global voltada ao avanço da tecnologia. Reúne capítulos especializados como RAS, CS, PES e PELS/IAS, promovendo atividades educacionais, projetos técnicos e networking em engenharia elétrica, eletrônica e computação.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://sites.google.com/academico.ufpb.br/colabciufpb/home?pli=1&authuser=0" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/Colab_logo.png" alt="Logo Núcleo Colab" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>Núcleo Colab</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    Núcleo de Incubação e Inovação Colaborativa voltado aos alunos do Centro de Informática da UFPB, que apoia estudantes e fomenta a inovação tecnológica por meio de empreendedorismo, pesquisa e ensino. Atua de forma interdisciplinar em áreas como Ciência de Dados, Engenharia da Computação, Sistemas de Informação e Inteligência Artificial, aproximando a academia da indústria.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/pacodeufpb/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/Pacode_logo.png" alt="Logo PaCode" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>PaCode</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    Grupo de estudos voltado à programação competitiva da Universidade Federal da Paraíba.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://www.otrilha.com/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/Trilha_logo.png" alt="Logo Trilha" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>Trilha</h3>
                    <p className={styles.groupSubtitle}>Grupo Acadêmico</p>
                    <p className={styles.groupDescription}>
                    Organização estudantil do Centro de Informática formada por alunos veteranos que, a cada semestre, selecionam uma turma de calouros para acompanhar com aulas semanais, mentorias individuais, apoio técnico, eventos e palestras. O objetivo é oferecer aos estudantes uma base profissional voltada às demandas do mercado de trabalho.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <h3 className={styles.groupCategoryTitle}>Projetos de Extensão</h3>
          <div className={styles.row}>
            <div className={styles.groupItem}>
              <Link href="https://www.aquarioufpb.com/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/Aquario_logo.png" alt="Logo Aquário" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>Aquário</h3>
                    <p className={styles.groupSubtitle}>Projeto de Extensão</p>
                    <p className={styles.groupDescription}>
                    Projeto de extensão do Centro de Informática da UFPB que constrói uma plataforma online para conectar alunos e divulgar projetos, grupos e demais iniciativas, funcionando como um mural do Centro. Hoje já disponibiliza o mural de entidades e guias acadêmicos, com planos de trazer blog, vagas, login e expansão para outros centros.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.groupItem}>
              <Link href="https://www.instagram.com/cangaconoespaco/" target="_blank">
                <div className={styles.groupContent}>
                  <img src="/cangaconoespaco_logo.png" alt="Logo Cangaço no Espaço" className={styles.groupImage} />
                  <div className={styles.groupText}>
                    <h3 className={styles.groupTitle}>Cangaço no Espaço</h3>
                    <p className={styles.groupSubtitle}>Projeto de Extensão</p>
                    <p className={styles.groupDescription}>
                    Projeto de extensão da UFPB dedicado à área aeroespacial, com atividades de pesquisa, divulgação científica e capacitação dos seus integrantes nesse campo.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.lineBottom}></div>
      </div>
    </div>

    <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="https://github.com/luigischmitt/PerCurso/blob/main/C%C3%B3digo_de_conduta.md" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Código de Conduta</a>
    </footer>
  </div>
  );
};

export default PercursosPage;
