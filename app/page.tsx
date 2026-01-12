"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.querySelector('.spotlight-effect') as HTMLElement;
      if (spotlight) {
        const x = e.clientX;
        const y = e.clientY;
        spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    vi: {
      title: "Full-Stack Web Developer",
      subtitle: "Chuyên xây dựng ứng dụng web hiện đại với React, Next.js và Node.js. Tập trung vào trải nghiệm người dùng và hiệu suất tối ưu.",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      aboutP1: "Tôi là một Web Developer với niềm đam mê xây dựng các ứng dụng web hiện đại, responsive và thân thiện với người dùng. Với kinh nghiệm làm việc với React, Next.js, TypeScript và các công nghệ web mới nhất, tôi tập trung vào việc tạo ra những sản phẩm không chỉ đẹp mắt mà còn được tối ưu hóa về mặt hiệu suất và trải nghiệm người dùng.",
      aboutP2: "Tôi có khả năng làm việc độc lập cũng như làm việc nhóm hiệu quả, luôn sẵn sàng học hỏi công nghệ mới và áp dụng best practices vào dự án. Điểm mạnh của tôi là khả năng chuyển đổi design thành code chất lượng cao, đảm bảo tính nhất quán trên mọi thiết bị và trình duyệt.",
      aboutP3: "Hiện tại, tôi đang tìm kiếm cơ hội làm việc tại các công ty công nghệ hoặc startup, nơi tôi có thể đóng góp kỹ năng của mình và phát triển cùng đội ngũ. Tôi đặc biệt quan tâm đến các dự án liên quan đến React/Next.js, UI/UX implementation, và performance optimization.",
      aboutP4: "Ngoài coding, tôi thường xuyên cập nhật kiến thức qua các khóa học online, đọc technical blogs, và tham gia cộng đồng developer để học hỏi và chia sẻ kinh nghiệm.",
      frontendTitle: "Frontend Development",
      backendTitle: "Backend & Database",
      toolsTitle: "Tools & Others",
      project1Title: "E-Commerce Platform",
      project1Desc: "Xây dựng website thương mại điện tử hoàn chỉnh với tính năng giỏ hàng, thanh toán, quản lý sản phẩm. Sử dụng Next.js cho SSR, MongoDB cho database, và Stripe cho payment gateway.",
      project2Title: "Task Management App",
      project2Desc: "Ứng dụng quản lý công việc với tính năng drag & drop, real-time updates, và team collaboration. Tích hợp authentication và responsive design cho mobile.",
      project3Title: "Portfolio Website",
      project3Desc: "Website portfolio cá nhân với animations mượt mà, dark mode, và SEO optimization. Thiết kế hiện đại với gradient backgrounds và interactive elements.",
      footer: "Dự án được phát triển bằng"
    },
    en: {
      title: "Full-Stack Web Developer",
      subtitle: "Specialized in building modern web applications with React, Next.js and Node.js. Focused on user experience and optimal performance.",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      aboutP1: "I'm a Web Developer passionate about building modern, responsive, and user-friendly web applications. With experience working with React, Next.js, TypeScript and the latest web technologies, I focus on creating products that are not only beautiful but also optimized for performance and user experience.",
      aboutP2: "I have the ability to work independently as well as effectively in teams, always ready to learn new technologies and apply best practices to projects. My strength is the ability to convert designs into high-quality code, ensuring consistency across all devices and browsers.",
      aboutP3: "Currently, I am looking for opportunities to work at technology companies or startups, where I can contribute my skills and grow with the team. I am particularly interested in projects related to React/Next.js, UI/UX implementation, and performance optimization.",
      aboutP4: "Besides coding, I regularly update my knowledge through online courses, read technical blogs, and participate in developer communities to learn and share experiences.",
      frontendTitle: "Frontend Development",
      backendTitle: "Backend & Database",
      toolsTitle: "Tools & Others",
      project1Title: "E-Commerce Platform",
      project1Desc: "Built a complete e-commerce website with shopping cart, payment, and product management features. Using Next.js for SSR, MongoDB for database, and Stripe for payment gateway.",
      project2Title: "Task Management App",
      project2Desc: "Task management application with drag & drop, real-time updates, and team collaboration features. Integrated authentication and responsive design for mobile.",
      project3Title: "Portfolio Website",
      project3Desc: "Personal portfolio website with smooth animations, dark mode, and SEO optimization. Modern design with gradient backgrounds and interactive elements.",
      footer: "Built with"
    }
  };

  const t = content[language];

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      {/* Language Toggle Button */}
      <button
        onClick={() => setLanguage(prev => prev === 'vi' ? 'en' : 'vi')}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full bg-slate-800/90 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur hover:bg-slate-700/90 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
        </svg>
        <span>{language === 'vi' ? 'EN' : 'VI'}</span>
      </button>

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Hao Lacoste</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            {t.subtitle}
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a className="group flex items-center py-3 active" href="#about">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{t.about}</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{t.skills}</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{t.projects}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 shrink-0 text-xs">
            <a className="block hover:text-slate-200" href="https://github.com/haonl321" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 shrink-0 text-xs">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 shrink-0 text-xs">
            <a className="block hover:text-slate-200" href="https://www.facebook.com/nguyen.hao.484843" target="_blank" rel="noreferrer noopener" aria-label="Facebook (opens in a new tab)" title="Facebook">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.817.092-1.592 1.588-1.592h2.412v-5h-3.97c-4.72 0-5.032 3.268-5.032 4.908v2.092z"/>
              </svg>
            </a>
          </li>
        </ul>
      </header>
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.about}</h2>
          </div>
          <div>
            <p className="mb-4">{t.aboutP1.split('React, Next.js, TypeScript')[0]}<span className="font-medium text-slate-200">React, Next.js, TypeScript</span>{t.aboutP1.split('React, Next.js, TypeScript')[1]}</p>
            <p className="mb-4">{t.aboutP2}</p>
            <p className="mb-4">{t.aboutP3.split(language === 'vi' ? 'tìm kiếm cơ hội làm việc' : 'looking for opportunities')[0]}<span className="font-medium text-slate-200">{language === 'vi' ? 'tìm kiếm cơ hội làm việc' : 'looking for opportunities'}</span>{t.aboutP3.split(language === 'vi' ? 'tìm kiếm cơ hội làm việc' : 'looking for opportunities')[1]}</p>
            <p>{t.aboutP4}</p>
          </div>
        </section>
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.skills}</h2>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">{t.frontendTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML5 & CSS3</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SCSS/SASS</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Responsive Design</div></li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">{t.backendTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express.js</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MongoDB</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PostgreSQL</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">REST API</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">GraphQL</div></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">{t.toolsTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Git & GitHub</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">VS Code</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Figma</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Vercel</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">npm/yarn</div></li>
                <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Webpack</div></li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.projects}</h2>
          </div>
          <div>
            <ul className="group/list">
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-base">{t.project1Title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{t.project1Desc}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MongoDB</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Stripe</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-base">{t.project2Title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{t.project2Desc}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Socket.io</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PostgreSQL</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JWT</div></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-base">{t.project3Title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{t.project3Desc}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div></li>
                      <li><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Framer Motion</div></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>{t.footer} <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer noopener">Next.js</a> {language === 'vi' ? 'và' : 'and'} <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>. {language === 'vi' ? 'toàn bộ mã nguồn được công khai trên' : 'Source code available on'} <a href="https://github.com/haonl321" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer noopener">GitHub</a>.</p>
        </footer>
      </main>
    </div>
  );
}
