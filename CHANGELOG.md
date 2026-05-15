# Personal Website — Matthew Bachelder

## Changelog

### 11/11/25

- First version of website published with custom domain bachelder.me.
- Original pages:
    - Homepage
    - Experience
    - Projects*
    - About
    - Contact
    - 404 (page for invalid URLs)
- Components used:
    - Navbar - All pages
        - ThemeSwitch - Navbar element
    - Footer - All pages
    - Providers - All pages
    - Hero/MiniHero
        - Hero for Homepage
        - MiniHero for Experience, Projects, About, Contact pages
    - Resume - Homepage and Contact pages
    - Skills - Experience page
    - ContactForm - Contact page

*Projects page was not implemented, a partial page giving some information was given.

### 11/12/25

- Starting changelog
- Removing all unnecessary square brackets ([]) from all tailwind-css classNames
    - Fixed some tailwind-css color issues from this change
- Added color transitions to hover for: ThemeSwitch, Navbar, Resume, Skills, 404
- Formatted 404 page properly

### 12/06/25

- Updated Next.js and React to patch vulnerability labeled as CVE-2025-55182
- Updated my resume to match updates
- Updated some CSS for the contact form

### 01/14/26

- Updated my resume to match updates
- Updated package-lock for version changes

### 01/15/26

- Updated LICENSE to 2026
- Updated Github prompts
- Updated experience to reflect my GPA for the Fall 2025 semester

### 01/21/26
- Moving all favicons/images into their own folders
- Updating favicon/image references in other files to reflect

### 01/22/26
- More image improvements
- Implementing projects page
- Updating project links
- Strikethrough project page improvement item

### 01/25/26
- Getting rid of .vscode and its settings.json
- Getting rid of old nextjs.yml
- Updating deploy.yml
- Implementing lint.yml to run linting before publishing
- Implementing dependabot.yml to prevent security issues
- Merging Dependabot PRs

### 01/26/26
- Updating hero content, refactor code
- Updating M62 project description
- Refactor Navbar into NavbarDesktop and NavbarMobile, improving mobile UX
- Refactor _app to reflect navbar changes

### 01/27/26
- Fixing hero background display
- Fixing hero mobile menu being different sizes on different pages
- Refactor footer into FooterDesktop and FooterMobile, improving mobile UX
- Moving finished task to bottom of list on dashboard
- Refactor _app to reflect footer changes
- Refactor index to improve mobile UX
- Improve text color on light mode
- Refactor home page to improve mobile UX
- Update resume

### 01/28/26
- Adding image for J.A. Routh project
- Refactor projects page filter buttons, improving mobile UX

### 01/30/26
- Update ContactForm component and contact page to improve mobile UX
- Add break line on about page to separate footer
- Refactor experience page and Skills component, improving mobile UX (all pages/components now work well on mobile!)
- Strikethrough mobile UX improvement item

### 05/15/26
- Update tsconfig to remove baseUrl and update relative paths
- Update index, projects, and experience pages for what I did through my final semester
- Update projects component for new projects
- Refactor skills component to include a different set of skills for what I am focused on
- Add a coinflip animation to the hero image circle when theme is changed