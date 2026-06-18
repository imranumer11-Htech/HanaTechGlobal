(function () {
  const strip = document.querySelector('.strip-wrap');
  if (strip && !strip.querySelector('.top-whatsapp-btn')) {
    const link = document.createElement('a');
    link.href = 'https://wa.me/917006658080?text=Hi%20HanaTech%20Global%2C%20I%20would%20like%20course%20details.';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'top-whatsapp-btn';
    link.setAttribute('aria-label', 'Chat on WhatsApp');
    link.textContent = 'WhatsApp';
    strip.appendChild(link);
  }

  const footer = document.querySelector('.site-footer');
  if (!footer || footer.querySelector('.footer-extended')) return;

  const inCoursePage = window.location.pathname.includes('/courses/');
  const base = inCoursePage ? '../' : '';
  const row = document.createElement('div');
  row.className = 'footer-extended';
  row.innerHTML = `
    <div class="container footer-extended-wrap footer-theme">
      <div class="footer-grid-primary">
        <div>
          <h4>Company</h4>
          <a href="${base}resources.html#about-us">About Us</a>
          <a href="${base}contact.html">Contact Us</a>
          <a href="${base}testimonials.html">Testimonials</a>
          <a href="${base}programs.html">All Courses</a>
        </div>
        <div>
          <h4>Learning Options</h4>
          <a href="${base}programs.html">Explore Learning Options</a>
          <a href="${base}schedule.html">Live Online Training</a>
          <a href="${base}programs.html">Classroom Training</a>
          <a href="${base}programs.html">On Premises Training</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="${base}resources.html#technical-qa">Technical Q&A</a>
          <a href="${base}resources.html#blog">Blog</a>
          <a href="${base}programs.html">Sitemap</a>
          <a href="${base}contact.html">Brochure Support</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="${base}resources.html#privacy-policy">Privacy Policy</a>
          <a href="${base}resources.html#terms-of-service">Terms of Service</a>
          <a href="${base}contact.html">Payment Methods</a>
          <a href="${base}contact.html">Career</a>
        </div>
      </div>

      <div class="footer-grid-secondary">
        <div>
          <h4>Top Technologies</h4>
          <p>Cloud Computing</p>
          <p>Artificial Intelligence</p>
          <p>Security</p>
        </div>
        <div>
          <h4>Top Partners</h4>
          <p>Microsoft</p>
          <p>AWS</p>
          <p>Cisco</p>
          <p>Oracle</p>
        </div>
        <div>
          <h4>Top Courses</h4>
          <p>AZ-104, AZ-305, AWS SAA, PMP, CEH</p>
          <p>Data Science with Python, Power BI PL-300</p>
          <p>Locations: Gurgaon | Dubai</p>
        </div>
      </div>
    </div>
  `;
  footer.appendChild(row);
})();
