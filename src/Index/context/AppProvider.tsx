import AppContext from "./AppContext";
import { useEffect, useState, type ReactNode } from "react";
import {
  Wallet,
  ClipboardList,
  Boxes,
  Calculator,
  Users,
  Receipt,
  CheckSquare,
  BarChart3,
  Check,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  X,
} from "lucide-react";

import { SiGoogle } from "react-icons/si";

import { IoLogoMicrosoft } from "react-icons/io5";

function AppProvider({ children }: { children: ReactNode }) {
  const value = {};

  const features = [
    {
      icon: Wallet,
      title: "Controle Financeiro",
      description:
        "Acompanhe todos os custos e receitas da sua obra, mantenha o controle de despesas e receitas, e tenha um relatório detalhado de todas as movimentações financeiras.",
    },
    {
      icon: ClipboardList,
      title: "Diário de Obras",
      description:
        "Registre todas as atividades diárias, clima, funcionários presentes e evolução da obra de forma organizada.",
    },
    {
      icon: Boxes,
      title: "Controle de Estoque",
      description:
        "Gestão completa de materiais, entrada e saída de produtos, níveis mínimos e relatórios de consumo.",
    },
    {
      icon: Calculator,
      title: "Orçamentos",
      description:
        "Crie orçamentos profissionais com composições de custos, BDI e cronograma físico-financeiro automatizado.",
    },
    {
      icon: Users,
      title: "Gestão de Funcionários",
      description:
        "Controle completo de funcionários, cargos, presença, horas trabalhadas e documentação digital.",
    },
    {
      icon: Receipt,
      title: "Folha de Pagamento",
      description:
        "Calcule automaticamente salários, descontos, benefícios e gere relatórios para contabilidade.",
    },
    {
      icon: CheckSquare,
      title: "Controle de Tarefas",
      description:
        "Organize e distribua tarefas para equipes, acompanhe prazos e o progresso de cada atividade na obra.",
    },
    {
      icon: BarChart3,
      title: "Relatórios e Análises",
      description:
        "Dashboards personalizados com indicadores financeiros, físicos e de desempenho da obra em tempo real.",
    },
  ];

  const app_prices = [
    {
      title_id: "basic",
      title: "Básico",
      sub_title: "Ideal para pequenas construtoras",
      itemList: [
        { icon: Check, description: "1 empresa ativa" },
        { icon: Check, description: "Até 2 funcionários simultaneos" },
        { icon: Check, description: "Controle financeiro básico" },
        { icon: Check, description: "Diário de obra" },
        { icon: Check, description: "Controle de estoque" },
        { icon: Check, description: "Orçamentos sintético" },
        { icon: Check, description: "Suporte por e-mail" },
      ],
    },
    {
      title_id: "professional",
      title: "Profissional",
      sub_title: "Para construtoras em crescimento",
      itemList: [
        { icon: Check, description: "Até 3 empresas simultâneas" },
        { icon: Check, description: "Até 5 funcionários simultaneos" },
        { icon: Check, description: "Controle financeiro completo" },
        { icon: Check, description: "Diário de obra avançado" },
        { icon: Check, description: "Gestão completa de estoque" },
        { icon: Check, description: "Orçamentos analítico" },
        { icon: Check, description: "Folha de pagamento" },
        { icon: Check, description: "Controle de tarefas" },
        { icon: Check, description: "Relatórios personalizados" },
        { icon: Check, description: "Suporte prioritário 24/7" },
      ],
      decoy: "Mais popular",
    },
    {
      title_id: "enterprise",
      title: "Enterprise",
      sub_title: "Para grandes construtoras",
      itemList: [
        { icon: Check, description: "Obras ilimitadas" },
        { icon: Check, description: "Funcionários ilimitados" },
        { icon: Check, description: "Todos os recursos inclusos" },
        { icon: Check, description: "Múltiplas filiais" },
        { icon: Check, description: "API completa" },
        { icon: Check, description: "Integração com ERP" },
        { icon: Check, description: "Treinamento presencial" },
        { icon: Check, description: "Gerente de conta dedicado" },
        { icon: Check, description: "SLA garantido" },
        { icon: Check, description: "Customizações sob demanda" },
      ],
    },
  ];

  const History = [
    {
      icon: CheckCircle,
      description:
        "Reduza custos e desperdícios com controle preciso de estoque",
    },
    {
      icon: CheckCircle,
      description: "Tome decisões baseadas em dados reais da obra",
    },
    {
      icon: CheckCircle,
      description: "Automatize processos e economize tempo da equipe",
    },
    {
      icon: CheckCircle,
      description:
        "Tenha visibilidade completa de todas as obras simultaneamente",
    },
  ];

  const FooterIcons = [
    { icon: Instagram, description: "Instagram" },
    { icon: Facebook, description: "Facebook" },
    { icon: Twitter, description: "Twitter" },
    { icon: Linkedin, description: "Linkedin" },
  ];

  const FooterLinks = [
    {
      title: "Produto",
      links: [
        { icon: Facebook, description: "Recursos" },
        { icon: Facebook, description: "Preços" },
        { icon: Facebook, description: "Integrações" },
        { icon: Facebook, description: "API" },
        { icon: Facebook, description: "Changelog" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { icon: Facebook, description: "Sobre Nós" },
        { icon: Facebook, description: "Blog" },
        { icon: Facebook, description: "Carreiras" },
        { icon: Facebook, description: "Imprensa" },
        { icon: Facebook, description: "Contato" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { icon: Facebook, description: "Central de Ajuda" },
        { icon: Facebook, description: "Documentação" },
        { icon: Facebook, description: "Status do Sistema" },
        { icon: Facebook, description: "Termos de Uso" },
        { icon: Facebook, description: "Privacidade" },
      ],
    },
  ];
  
  const ListIcon = [
    { icon: Facebook, description: "Facebook" },
    { icon: Instagram, description: "Instagram" },
    { icon: Twitter, description: "Twitter" },
    { icon: X, description: "Close" },
    { icon: Check, description: "Check" },
    { icon: SiGoogle, description: "Google" },
    { icon: IoLogoMicrosoft, description: "Windows" },
  ];

  const [ModalNavBar, setModalNavBar] = useState(false);

/*   useEffect(() => {
    console.log("sidebar", ModalNavBar);
  }, [ModalNavBar]); */

  const [ModalLogin, setModalLogin] = useState(false);

/*   useEffect(() => {
    console.log("sidebar", ModalLogin);
  }, [ModalLogin]); */

  return (
    <AppContext.Provider
      value={{
        value,
        features,
        app_prices,
        History,
        FooterIcons,
        FooterLinks,
        ModalNavBar,
        setModalNavBar,
        ModalLogin,
        setModalLogin,
        ListIcon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
