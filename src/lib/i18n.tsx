import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.about": "Sobre",
  "nav.skills": "Skills",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",
  "nav.admin": "Admin",

  "hero.welcome": "Bem-vindo ao meu portfólio",
  "hero.name": "Gabriel Dev",
  "hero.role": "Desenvolvedor Backend & Automação",
  "hero.cta": "Conhecer meu trabalho",
  "hero.scroll": "Role para explorar",

  "building.label": "Building Now",
  "building.title": "Vellio",
  "building.text":
    "Atualmente desenvolvendo o Vellio, uma plataforma que combina automação, inteligência artificial e integração de serviços para simplificar processos, conectar ferramentas e aumentar produtividade através de fluxos inteligentes.",
  "building.tag": "Em desenvolvimento",

  "about.label": "Sobre Mim",
  "about.title": "Construindo produtos que escalam",
  "about.p1":
    "Desenvolvedor focado em Backend, Automação e Inteligência Artificial. Meu trabalho consiste em projetar e desenvolver sistemas capazes de automatizar processos, integrar serviços e transformar ideias em produtos digitais escaláveis.",
  "about.p2":
    "Atualmente estou construindo soluções que combinam APIs, automação de workflows, agentes inteligentes e arquiteturas modernas para criar experiências eficientes e preparadas para crescimento.",
  "about.p3":
    "Tenho interesse especial por sistemas SaaS, integrações inteligentes e ferramentas que aumentam produtividade através da tecnologia.",
  "about.p4":
    "Mais do que escrever código, meu foco está em construir soluções que gerem impacto real e possam evoluir de forma sustentável ao longo do tempo.",

  "skills.label": "Skills",
  "skills.title": "Stack & capacidades",
  "skills.backend": "Backend",
  "skills.automation": "Automação",
  "skills.ai": "Inteligência Artificial",

  "projects.label": "Projetos",
  "projects.title": "Trabalhos selecionados",
  "projects.empty": "Nenhum projeto publicado ainda.",
  "projects.view": "Ver detalhes",
  "projects.tech": "Tecnologias",
  "projects.objectives": "Objetivos",
  "projects.gallery": "Galeria",
  "projects.github": "GitHub",
  "projects.demo": "Demo",
  "projects.close": "Fechar",

  "contact.label": "Contato",
  "contact.title": "Vamos construir algo",
  "contact.subtitle":
    "Aberto a projetos, colaborações e oportunidades. Envie uma mensagem.",
  "contact.name": "Nome",
  "contact.email": "Email",
  "contact.message": "Mensagem",
  "contact.send": "Enviar mensagem",
  "contact.sending": "Enviando...",
  "contact.success": "Mensagem enviada. Retornarei em breve.",
  "contact.error": "Não foi possível enviar. Tente novamente.",

  "footer.role": "Desenvolvedor Backend & Automação",
  "footer.rights": "Todos os direitos reservados.",

  "admin.title": "Painel administrativo",
  "admin.login": "Entrar",
  "admin.logout": "Sair",
  "admin.email": "Email",
  "admin.password": "Senha",
  "admin.signin": "Entrar no painel",
  "admin.signingin": "Entrando...",
  "admin.newProject": "Novo projeto",
  "admin.editProject": "Editar projeto",
  "admin.create": "Criar projeto",
  "admin.save": "Salvar alterações",
  "admin.cancel": "Cancelar",
  "admin.delete": "Excluir",
  "admin.published": "Publicado",
  "admin.draft": "Rascunho",
  "admin.publish": "Publicar",
  "admin.unpublish": "Despublicar",
  "admin.images": "Imagens",
  "admin.uploadImages": "Enviar imagens",
  "admin.uploading": "Enviando...",
  "admin.name": "Nome",
  "admin.category": "Categoria",
  "admin.short": "Descrição curta",
  "admin.full": "Descrição completa",
  "admin.objectives": "Objetivos",
  "admin.technologies": "Tecnologias (separadas por vírgula)",
  "admin.github": "Link do GitHub",
  "admin.demo": "Link da Demo",
  "admin.noAccess": "Acesso restrito a administradores.",
  "admin.confirmDelete": "Excluir este projeto permanentemente?",
  "admin.backToSite": "Voltar ao site",
  "admin.dashboard": "Projetos",
};

const en: Dict = {
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.admin": "Admin",

  "hero.welcome": "Welcome to my portfolio",
  "hero.name": "Gabriel Dev",
  "hero.role": "Backend & Automation Developer",
  "hero.cta": "Explore my work",
  "hero.scroll": "Scroll to explore",

  "building.label": "Building Now",
  "building.title": "Vellio",
  "building.text":
    "Currently building Vellio, a platform that combines automation, artificial intelligence and service integration to simplify processes, connect tools and increase productivity through intelligent workflows.",
  "building.tag": "In development",

  "about.label": "About Me",
  "about.title": "Building products that scale",
  "about.p1":
    "Developer focused on Backend, Automation and Artificial Intelligence. My work consists of designing and developing systems capable of automating processes, integrating services and turning ideas into scalable digital products.",
  "about.p2":
    "I'm currently building solutions that combine APIs, workflow automation, intelligent agents and modern architectures to create efficient experiences ready for growth.",
  "about.p3":
    "I have a particular interest in SaaS systems, intelligent integrations and tools that increase productivity through technology.",
  "about.p4":
    "More than writing code, my focus is building solutions that generate real impact and can evolve sustainably over time.",

  "skills.label": "Skills",
  "skills.title": "Stack & capabilities",
  "skills.backend": "Backend",
  "skills.automation": "Automation",
  "skills.ai": "Artificial Intelligence",

  "projects.label": "Projects",
  "projects.title": "Selected work",
  "projects.empty": "No published projects yet.",
  "projects.view": "View details",
  "projects.tech": "Technologies",
  "projects.objectives": "Objectives",
  "projects.gallery": "Gallery",
  "projects.github": "GitHub",
  "projects.demo": "Demo",
  "projects.close": "Close",

  "contact.label": "Contact",
  "contact.title": "Let's build something",
  "contact.subtitle":
    "Open to projects, collaborations and opportunities. Send a message.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Send message",
  "contact.sending": "Sending...",
  "contact.success": "Message sent. I'll get back to you soon.",
  "contact.error": "Could not send. Please try again.",

  "footer.role": "Backend & Automation Developer",
  "footer.rights": "All rights reserved.",

  "admin.title": "Admin panel",
  "admin.login": "Sign in",
  "admin.logout": "Sign out",
  "admin.email": "Email",
  "admin.password": "Password",
  "admin.signin": "Sign in to panel",
  "admin.signingin": "Signing in...",
  "admin.newProject": "New project",
  "admin.editProject": "Edit project",
  "admin.create": "Create project",
  "admin.save": "Save changes",
  "admin.cancel": "Cancel",
  "admin.delete": "Delete",
  "admin.published": "Published",
  "admin.draft": "Draft",
  "admin.publish": "Publish",
  "admin.unpublish": "Unpublish",
  "admin.images": "Images",
  "admin.uploadImages": "Upload images",
  "admin.uploading": "Uploading...",
  "admin.name": "Name",
  "admin.category": "Category",
  "admin.short": "Short description",
  "admin.full": "Full description",
  "admin.objectives": "Objectives",
  "admin.technologies": "Technologies (comma separated)",
  "admin.github": "GitHub link",
  "admin.demo": "Demo link",
  "admin.noAccess": "Access restricted to administrators.",
  "admin.confirmDelete": "Permanently delete this project?",
  "admin.backToSite": "Back to site",
  "admin.dashboard": "Projects",
};

const dicts: Record<Lang, Dict> = { pt, en };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nCtx | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("gd-lang") as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
    else if (navigator.language.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gd-lang", l);
  };

  const t = (key: string) => dicts[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
