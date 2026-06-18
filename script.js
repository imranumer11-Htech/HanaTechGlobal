const brochureByVendor = {
  'AWS': 'brochures/aws-saa-exam-guide-latest.pdf',
  'Microsoft': 'brochures/microsoft-certification-poster-latest.pdf',
  'Oracle': 'brochures/oracle-oci-foundations-study-guide-latest.pdf',
  'Autodesk': 'brochures/microsoft-certification-poster-latest.pdf',
  'Android': 'brochures/microsoft-certification-poster-latest.pdf',
  'OpenAI': 'brochures/microsoft-certification-poster-latest.pdf',
  'PeopleCert': 'brochures/itil-and-service-management-brochure.pdf',
  'PMI': 'brochures/pmi-pmp-handbook-latest.pdf',
  'PMI-CAPM': 'brochures/pmi-capm-handbook-latest.pdf',
  'Default': 'brochures/microsoft-certification-poster-latest.pdf'
};

const courseCatalog = [
  { name: 'AWS Cloud Practitioner', category: 'cloud', vendor: 'AWS', description: 'Foundational cloud concepts, billing, architecture basics, and AWS core services for new cloud professionals.' },
  { name: 'AWS Solutions Architect Associate', category: 'cloud', vendor: 'AWS', description: 'Design secure, resilient, and cost-efficient architectures using AWS compute, storage, and networking services.' },
  { name: 'AWS SysOps Administrator', category: 'cloud', vendor: 'AWS', description: 'Operate and monitor AWS workloads with a focus on reliability, automation, governance, and incident response.' },
  { name: 'AWS DevOps Engineer Professional', category: 'cloud', vendor: 'AWS', description: 'Build CI/CD pipelines, automate infrastructure, and manage observability and deployment at scale.' },
  { name: 'Microsoft Azure Fundamentals (AZ-900)', category: 'cloud', vendor: 'Microsoft', description: 'Entry-level Azure concepts covering cloud models, core services, governance, security, and pricing.' },
  { name: 'Microsoft Azure Administrator (AZ-104)', category: 'cloud', vendor: 'Microsoft', description: 'Manage Azure identities, compute, networking, storage, and backup in real enterprise scenarios.' },
  { name: 'Microsoft Azure Solutions Architect (AZ-305)', category: 'cloud', vendor: 'Microsoft', description: 'Design architecture solutions for identity, infrastructure, data platforms, and business continuity on Azure.' },
  { name: 'Microsoft Azure DevOps Engineer (AZ-400)', category: 'cloud', vendor: 'Microsoft', description: 'Implement DevOps practices across source control, pipelines, testing, release management, and monitoring.' },
  { name: 'Google Cloud Associate Cloud Engineer', category: 'cloud', vendor: 'Google Cloud', description: 'Deploy and operate cloud solutions on GCP including IAM, compute, networking, and logging.' },
  { name: 'Google Cloud Professional Cloud Architect', category: 'cloud', vendor: 'Google Cloud', description: 'Architect enterprise-grade GCP solutions with emphasis on security, operations, and business alignment.' },
  { name: 'Oracle Cloud Infrastructure Foundations', category: 'cloud', vendor: 'Oracle', description: 'Understand OCI services, cloud economics, governance, and basic architecture best practices.' },
  { name: 'Oracle Database Administration', category: 'cloud', vendor: 'Oracle', description: 'Manage Oracle database installation, backup, performance tuning, and day-to-day administration.' },
  { name: 'Red Hat System Administration (RHCSA)', category: 'devops', vendor: 'Red Hat', description: 'Hands-on Linux administration including users, storage, services, security controls, and automation basics.' },
  { name: 'Red Hat Engineer (RHCE)', category: 'devops', vendor: 'Red Hat', description: 'Advanced Linux automation and configuration management with Ansible for production environments.' },
  { name: 'Linux Administration', category: 'devops', vendor: 'Linux', description: 'Core Linux skills for operations teams including shell, services, permissions, and package management.' },
  { name: 'Certified Kubernetes Administrator (CKA)', category: 'devops', vendor: 'CNCF', description: 'Administer Kubernetes clusters with focus on networking, scheduling, security, and troubleshooting.' },
  { name: 'Certified Kubernetes Application Developer (CKAD)', category: 'devops', vendor: 'CNCF', description: 'Build and deploy cloud-native applications on Kubernetes using best practices and container workflows.' },
  { name: 'Docker and Containerization', category: 'devops', vendor: 'Docker', description: 'Containerize applications, optimize images, and run local-to-cloud deployment workflows.' },
  { name: 'HashiCorp Terraform Associate', category: 'devops', vendor: 'HashiCorp', description: 'Automate infrastructure provisioning with Terraform modules, state, and multi-environment workflows.' },
  { name: 'Ansible Automation', category: 'devops', vendor: 'Red Hat', description: 'Use Ansible playbooks for server configuration, orchestration, and operational automation.' },
  { name: 'Cisco CCNA', category: 'networking', vendor: 'Cisco', description: 'Networking fundamentals including routing, switching, IP services, security basics, and automation.' },
  { name: 'Cisco CCNP Enterprise', category: 'networking', vendor: 'Cisco', description: 'Advanced enterprise networking architecture, troubleshooting, and secure infrastructure operations.' },
  { name: 'Palo Alto Network Security Administrator', category: 'networking', vendor: 'Palo Alto', description: 'Configure and manage Palo Alto firewalls, security policies, and network threat prevention.' },
  { name: 'Fortinet NSE 4', category: 'networking', vendor: 'Fortinet', description: 'Operate FortiGate environments with practical security controls, VPN, and policy management.' },
  { name: 'CompTIA A+', category: 'networking', vendor: 'CompTIA', description: 'Entry-level IT support and troubleshooting for hardware, operating systems, and endpoint security.' },
  { name: 'CompTIA Network+', category: 'networking', vendor: 'CompTIA', description: 'Build practical networking skills including topology, protocols, operations, and troubleshooting.' },
  { name: 'CompTIA Security+', category: 'security', vendor: 'CompTIA', description: 'Baseline cybersecurity skills covering threats, controls, risk, cryptography, and operations.' },
  { name: 'Certified Ethical Hacker (CEH)', category: 'security', vendor: 'EC-Council', description: 'Ethical hacking techniques, vulnerability analysis, and penetration testing workflows.' },
  { name: 'Computer Hacking Forensic Investigator (CHFI)', category: 'security', vendor: 'EC-Council', description: 'Digital forensics processes for evidence collection, analysis, incident reconstruction, and reporting.' },
  { name: 'Certified Information Systems Security Professional (CISSP)', category: 'security', vendor: 'ISC2', description: 'Advanced security leadership curriculum across governance, risk, architecture, and security operations.' },
  { name: 'Certified Information Security Manager (CISM)', category: 'security', vendor: 'ISACA', description: 'Information security management aligned to risk, governance, program development, and incident handling.' },
  { name: 'ISO 27001 Lead Implementer', category: 'security', vendor: 'PECB', description: 'Implement and manage ISMS controls and audit-ready processes aligned with ISO 27001 standards.' },
  { name: 'SOC Analyst Program', category: 'security', vendor: 'SOC', description: 'Blue-team monitoring and alert investigation using SOC processes, SIEM, and response playbooks.' },
  { name: 'Penetration Testing with Kali Linux', category: 'security', vendor: 'OffSec', description: 'Hands-on penetration testing labs for reconnaissance, exploitation, privilege escalation, and reporting.' },
  { name: 'ITIL 4 Foundation', category: 'enterprise', vendor: 'PeopleCert', description: 'IT service management framework for value delivery, service lifecycle, and continual improvement.' },
  { name: 'ITIL 4 Foundation Plus Latest-Version Readiness', category: 'enterprise', vendor: 'PeopleCert', description: 'ITIL 4 Foundation concepts, exam preparation, and a practical briefing on latest ITIL framework updates requested by service teams.' },
  { name: 'ITIL 4 Create, Deliver and Support', category: 'enterprise', vendor: 'PeopleCert', description: 'Specialist service-management training for value streams, support practices, live service delivery, and continual improvement.' },
  { name: 'ITIL 4 Drive Stakeholder Value', category: 'enterprise', vendor: 'PeopleCert', description: 'Customer journeys, stakeholder relationships, service interactions, onboarding, communication, and value co-creation.' },
  { name: 'ITIL 4 Direct, Plan and Improve', category: 'enterprise', vendor: 'PeopleCert', description: 'Governance, planning, measurement, change enablement, and continual improvement for IT service teams.' },
  { name: 'ITIL 4 Digital and IT Strategy', category: 'enterprise', vendor: 'PeopleCert', description: 'Strategic service management for digital organizations, risk, operating models, innovation, and transformation planning.' },
  { name: 'Project Management Professional (PMP)', category: 'project', vendor: 'PMI', description: 'Comprehensive project leadership across predictive, agile, and hybrid delivery models.' },
  { name: 'Certified Associate in Project Management (CAPM)', category: 'project', vendor: 'PMI-CAPM', description: 'Core project management principles, terminology, and execution practices for emerging PM professionals.' },
  { name: 'Certified Project Management for AI (CPMAI+E)', category: 'project', vendor: 'USAII', description: 'Plan and manage AI projects with governance, model lifecycle, and business-value alignment.' },
  { name: 'PRINCE2 Foundation', category: 'project', vendor: 'PeopleCert', description: 'Structured project methodology for controlled delivery, roles, governance, and quality management.' },
  { name: 'Certified ScrumMaster (CSM)', category: 'project', vendor: 'Scrum Alliance', description: 'Scrum ceremonies, team facilitation, agile mindset, and practical sprint execution techniques.' },
  { name: 'Certified Scrum Product Owner (CSPO)', category: 'project', vendor: 'Scrum Alliance', description: 'Product ownership practices including backlog strategy, stakeholder value, and release planning.' },
  { name: 'AgilePM Foundation', category: 'project', vendor: 'APMG', description: 'Agile project governance with iterative delivery, collaboration, and adaptive planning.' },
  { name: 'Microsoft Power BI Data Analyst (PL-300)', category: 'dataai', vendor: 'Microsoft', description: 'Model, transform, and visualize business data using Power BI for actionable decision-making.' },
  { name: 'Data Science with Python', category: 'dataai', vendor: 'Python', description: 'Data analysis, visualization, statistics, and machine learning workflows using Python libraries.' },
  { name: 'Machine Learning Engineering on AWS', category: 'dataai', vendor: 'AWS', description: 'End-to-end ML lifecycle on AWS including training, deployment, monitoring, and MLOps.' },
  { name: 'Generative AI with Azure OpenAI', category: 'dataai', vendor: 'Microsoft', description: 'Build enterprise GenAI solutions with Azure OpenAI, prompt design, and responsible AI controls.' },
  { name: 'Generative AI for Business Leaders', category: 'dataai', vendor: 'AI Strategy', description: 'Business-focused GenAI adoption, governance, use-case prioritization, and transformation strategy.' },
  { name: 'ChatGPT and Prompt Engineering for Professionals', category: 'dataai', vendor: 'OpenAI', description: 'Master practical prompting patterns, workflow automation, and responsible AI usage with ChatGPT for daily work.' },
  { name: 'Prompt Engineering for Enterprise Productivity', category: 'dataai', vendor: 'OpenAI', description: 'Design reusable prompt frameworks and team-ready AI workflows for business analysis, documentation, and communication.' },
  { name: 'Salesforce Administrator', category: 'enterprise', vendor: 'Salesforce', description: 'Configure and manage Salesforce orgs, security model, reports, and business process automation.' },
  { name: 'ServiceNow System Administrator', category: 'enterprise', vendor: 'ServiceNow', description: 'Administer ServiceNow platform features including workflows, catalog, security, and operations.' },
  { name: 'Full Stack Web Development (MERN)', category: 'enterprise', vendor: 'MERN', description: 'Build modern web applications using MongoDB, Express, React, and Node with deployment best practices.' },
  { name: 'Autodesk AutoCAD Professional', category: 'enterprise', vendor: 'Autodesk', description: 'Create precise 2D drawings and foundational 3D models for engineering, architecture, and drafting workflows.' },
  { name: 'BIM with Autodesk Revit', category: 'enterprise', vendor: 'Autodesk', description: 'Develop BIM-ready building models, project documentation, and coordinated design deliverables in Autodesk Revit.' },
  { name: 'BIM Coordination with Navisworks', category: 'enterprise', vendor: 'Autodesk', description: 'Perform model aggregation, clash detection, and coordination review for multi-discipline BIM projects.' },
  { name: 'Android App Development with Kotlin', category: 'enterprise', vendor: 'Android', description: 'Build modern Android apps using Kotlin, activities, fragments, APIs, and production-ready development practices.' },
  { name: 'Advanced Android Architecture and Jetpack', category: 'enterprise', vendor: 'Android', description: 'Implement scalable Android app architecture using Jetpack components, clean patterns, and performance optimization.' }
];

function brochureForCourse(course) {
  return brochureByVendor[course.vendor] || brochureByVendor.Default;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function coursePageFor(course) {
  return `courses/${slugify(course.name)}.html`;
}

const coursesContainer = document.getElementById('coursesContainer');
const categoryButtons = document.querySelectorAll('.category-btn');
const courseSearch = document.getElementById('courseSearch');
const modal = document.getElementById('courseModal');
const modalClose = document.getElementById('modalClose');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalVendor = document.getElementById('modalVendor');
const modalBrochure = document.getElementById('modalBrochure');
const modalCoursePage = document.getElementById('modalCoursePage');

function openModal(course) {
  if (!modal) return;
  modalCategory.textContent = course.category;
  modalTitle.textContent = course.name;
  modalVendor.textContent = `Vendor: ${course.vendor}`;
  modalDescription.textContent = `${course.description} Total training duration: 32-40 hours.`;
  modalBrochure.href = brochureForCourse(course);
  modalBrochure.setAttribute('download', `${course.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-brochure.pdf`);
  if (modalCoursePage) modalCoursePage.href = coursePageFor(course);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

let activeCategory = 'all';
let searchQuery = '';

function renderCourses(filter = activeCategory) {
  if (!coursesContainer) return;

  activeCategory = filter;
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const byCategory = filter === 'all'
    ? courseCatalog
    : courseCatalog.filter((course) => course.category === filter);
  const filtered = byCategory.filter((course) => {
    if (!normalizedQuery) return true;
    return (
      course.name.toLowerCase().includes(normalizedQuery) ||
      course.vendor.toLowerCase().includes(normalizedQuery) ||
      course.category.toLowerCase().includes(normalizedQuery)
    );
  });

  coursesContainer.innerHTML = filtered
    .map((course) => `
      <article class="course-item">
        <div>
          <h3>${course.name}</h3>
          <p class="course-meta">${course.vendor} | ${course.category.toUpperCase()}</p>
        </div>
        <div class="course-item-actions">
          <button class="view-btn" data-course-name="${course.name.replace(/"/g, '&quot;')}">View Details</button>
          <a class="view-btn" href="${coursePageFor(course)}">Course Page</a>
        </div>
      </article>
    `)
    .join('');

  const detailButtons = coursesContainer.querySelectorAll('[data-course-name]');
  detailButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = courseCatalog.find((course) => course.name === button.dataset.courseName);
      if (selected) openModal(selected);
    });
  });
}

if (coursesContainer) {
  renderCourses('all');
}

if (categoryButtons.length) {
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      categoryButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderCourses(selected);
    });
  });
}

if (courseSearch) {
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get('q');
  if (qParam) {
    courseSearch.value = qParam;
    searchQuery = qParam;
    renderCourses(activeCategory);
  }

  courseSearch.addEventListener('input', () => {
    searchQuery = courseSearch.value;
    renderCourses(activeCategory);
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

const forms = document.querySelectorAll('[data-enroll-form], [data-custom-course-form]');
forms.forEach((form) => {
  const message = form.querySelector('[data-form-message]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    if (message) message.textContent = `Thank you ${name}. We received your request and will contact you shortly.`;
    form.reset();
  });
});

