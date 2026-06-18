(function () {
  const ratingScale = [4.6, 4.7, 4.8, 4.9, 5.0];

  function ratingForCourse(courseName) {
    let hash = 0;
    for (let i = 0; i < courseName.length; i += 1) {
      hash = (hash * 31 + courseName.charCodeAt(i)) % 9973;
    }
    const rating = ratingScale[hash % ratingScale.length];
    return `${rating.toFixed(1)}★`;
  }

  const vendorLine = Array.from(document.querySelectorAll('li')).find((li) =>
    li.textContent.trim().startsWith('Vendor:')
  );
  if (!vendorLine) return;

  const vendor = vendorLine.textContent.replace('Vendor:', '').trim();
  const slug = vendor.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const logoMap = {
    'AWS': 'assets/logos/aws.svg',
    'Microsoft': 'assets/logos/microsoft.svg',
    'Oracle': 'assets/logos/oracle.svg',
    'Google Cloud': 'assets/logos/google-cloud.svg',
    'Cisco': 'assets/logos/cisco.svg',
    'Red Hat': 'assets/logos/redhat.svg',
    'CNCF': 'assets/logos/kubernetes.svg',
    'Kubernetes': 'assets/logos/kubernetes.svg'
  };

  const src = logoMap[vendor] || `assets/logos/vendors/${slug}.svg`;
  const img = document.createElement('img');
  img.className = 'course-title-logo';
  img.alt = `${vendor} logo`;
  img.src = `../${src}`;

  const title = document.querySelector('.page-hero h1');
  if (!title) return;
  const courseRating = ratingForCourse(title.textContent.trim());

  const row = document.createElement('div');
  row.className = 'course-title-row';
  const rating = document.createElement('span');
  rating.className = 'rating-badge course-page-rating';
  rating.textContent = courseRating;
  title.parentNode.insertBefore(row, title);
  row.appendChild(title);
  row.appendChild(rating);
  row.appendChild(img);
})();
