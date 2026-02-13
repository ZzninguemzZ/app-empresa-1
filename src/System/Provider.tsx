import Context from "./Constext";
import { useEffect, useState, type ReactNode } from "react";

import {
  Banknote,
  Building2,
  Users,
  Store,
  TrendingUp,
  Warehouse,
  UserCog,
  Sparkles,
  Files,
  Calculator,
  BookText,
  SquareKanban,
  ClipboardCheck,
  Settings,
  LayoutDashboard,
  LayoutTemplate,
  CalendarClock,
  Scale,
  FileText,
  Briefcase,
  DollarSign,
  BookKey,
  Contact,
  History,
  SquareUserRound,
  Landmark,
  WalletCards,
  LoaderCircle,
  CloudBackup,
  Bitcoin,
  FileChartColumnIncreasing,
  NotebookTabs,
  RefreshCcw,
  Layers,
  StickyNote,
  CirclePile,
  Package,
  Component,
  Cog,
  IdCard,
  IdCardLanyard,
  Inbox,
  Server,
  Building,
  Axe,
  InspectionPanel,
  NotebookPen,
  Images,
  FilePlay,
  HardHat,
  Calendar,
  Kanban,
  Bell,
  List,
  Box,
  Cloud,
} from "lucide-react";

function Provider({ children }: { children: ReactNode }) {
  const [TextNavbar, setTextNavbar] = useState(false);

  const navigationSidebar = [
    { icon: LayoutDashboard, description: "Dashboard", id: "dashboard" },
    { icon: Banknote, description: "Financeiro", id: "finance" },
    { icon: Store, description: "Fornecedores", id: "providers" },
    { icon: Users, description: "Identidades", id: "identities" },
    { icon: TrendingUp, description: "Investimentos", id: "investments" },
    { icon: UserCog, description: "RH", id: "rh" },
    { icon: Warehouse, description: "Estoque", id: "warehouse" },
    { icon: Calculator, description: "Orçamentos", id: "budgets" },
    { icon: BookText, description: "Diário de Obra", id: "diary" },
    { icon: SquareKanban, description: "Ger. de Projetos", id: "projects" },
    { icon: ClipboardCheck, description: "Ger. de Tarefas", id: "tasks" },
    { icon: Sparkles, description: "Assistente IA", id: "ai" },
    { icon: Files, description: "Armazenamento", id: "storage" },
    { icon: CloudBackup, description: "APIs", id: "apis" },
    { icon: Settings, description: "Configurações", id: "settings" },
  ];

  const [ModulesName, setModulesName] = useState("dashboard");

  const navfinance = [
    { icon: LayoutTemplate, description: "Dashboard", id: "finance-dashboard" },
    {
      icon: CalendarClock,
      description: "Dashboard Mensal",
      id: "finance-dashboard-mensal",
    },
    { icon: Scale, description: "Fluxo de caixa", id: "finance-cashflow" },
    { icon: FileText, description: "Transações", id: "finance-transactions" },
    { icon: Briefcase, description: "Contas", id: "finance-accounts" },
    { icon: DollarSign, description: "Projetos", id: "finance-projects" },
    {
      icon: BookKey,
      description: "Plano de Contas",
      id: "finance-plano-contas",
    },
  ];

  const navproviders = [
    {icon: Contact, description: "Lista de Fornecedores", id: "providers-list"},
    {icon: TrendingUp, description: "Comparativo de Preços", id: "providers-compare-prices"},
    {icon: History, description: "Historico de Preços", id: "providers-history-prices"},
  ]

  const navidentities = [
    { icon: SquareUserRound, description: "Pessoas Físicas", id: "identities-people" },
    { icon: Building2, description: "Empresas", id: "identities-companies" },
    { icon: Landmark, description: "Governo", id: "identities-government" },
  ]

  const navinvestments = [
    { icon: LoaderCircle, description: "Resumo", id: "investments-summary" },
    { icon: WalletCards, description: "Corretoras", id: "investments-brokers" },
    { icon: Bitcoin, description: "Ativos", id: "investments-assets" },
    { icon: FileChartColumnIncreasing, description: "Análises", id: "investments-analytics" },
    { icon: NotebookTabs, description: "Extrato", id: "investments-extract" },
    { icon: RefreshCcw, description: "Conecções", id: "investments-extract" },
  ]

  const navrh = [
    { icon: Layers, description: "Folha de Pagamento", id: "rh-payroll" },
    { icon: StickyNote, description: "Cargos e Funções", id: "rh-positions" },
    { icon: IdCardLanyard, description: "Funcionários", id: "rh-employees" },
    { icon: IdCard, description: "Acionistas", id: "rh-shareholders" },
  ]

  const navwarehouse = [
    { icon: CirclePile, description: "Estoque Geral", id: "warehouse-summary" },
    { icon: Package, description: "Tipos de Produto", id: "warehouse-typesproduct" },
    { icon: Warehouse, description: "Armazens", id: "warehouse-warehouses" },
    { icon: Scale, description: "Compra e Venda", id: "warehouse-buyandsell" },
  ]

  const navbudgets = [
    { icon: Calculator, description: "Orçamentos", id: "budgets-budgets" },
    { icon: Inbox, description: "Composições", id: "budgets-compositions" },
    { icon: Component, description: "Insumos", id: "budgets-ingredients" },
    { icon: Cog, description: "Gerenciar Composições", id: "budgets-shareholders" },
    { icon: Server, description: "Bancos de Dados", id: "budgets-shareholders" },
  ]

  const navdiary = [
    { icon: Building, description: "Obras", id: "diary-buildings" },
    { icon: Axe, description: "Equipamentos", id: "diary-equipments" },
    { icon: InspectionPanel, description: "Materiais", id: "diary-materials" },
    { icon: NotebookPen, description: "Relatórios", id: "diary-reports" },
    { icon: Images, description: "Fotos", id: "diary-galery" },
    { icon: FilePlay, description: "Vídeos", id: "diary-video" },
    { icon: HardHat, description: "Mão de Obra", id: "diary-builders" },
  ]

  const navprojects = [
    { icon: Building, description: "Obras", id: "projects-buildings" },
    { icon: FileText, description: "Projetos", id: "projects-documents" },
    { icon: FileText, description: "Laudos", id: "projects-reports" },
    { icon: FileText, description: "Aprovações", id: "projects-approvals" },
    { icon: Users, description: "Cliente", id: "projects-clients" },
  ]

  const navtasks = [
    { icon: Calendar, description: "Calendário", id: "tasks-calendar" },
    { icon: Kanban, description: "Kanban", id: "tasks-kanban" },
    { icon: List, description: "Tarefas", id: "tasks-tasks" },
    { icon: Bell, description: "Avisos", id: "tasks-reminders" },
    { icon: Users, description: "Equipes", id: "tasks-teams" },
  ]

  const navstorage = [
    { icon: Box, description: "Armazenamento", id: "storage-storage" },
    { icon: Cloud, description: "Nuvens", id: "storage-cloud" },
  ]

  const [navTop, setnavTop] = useState("");

  const navMap = {
    navfinance,
    navproviders,
    navidentities,
    navinvestments,
    navrh,
    navwarehouse,
    navbudgets,
    navdiary,
    navprojects,
    navtasks,
    navstorage,
  };

  useEffect(() => {
    const widthNavbar = TextNavbar ? "80px" : "260px";

    document.documentElement.style.setProperty("--width-navbar", widthNavbar);
  }, [TextNavbar]);

  const [language, setLanguage] = useState("pt-BR");

  return (
    <Context.Provider
      value={{
        navigationSidebar,
        ModulesName,
        setModulesName,
        TextNavbar,
        setTextNavbar,
        navfinance,
        navproviders,
        navidentities,
        navinvestments,
        navbudgets,
        navdiary,
        navrh,
        navMap,
        navTop,
        setnavTop,
        navwarehouse,
        navprojects,
        navtasks,
        navstorage,
        language,
        setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
