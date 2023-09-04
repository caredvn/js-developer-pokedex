const prevBtn = document.getElementById('btn1');
const nextBtn = document.getElementById('btn2');
const paginationLinks = document.querySelectorAll('.pagination__link');
var currentPage = 1;
const totalPages = 4;

for (let i = 0; i < paginationLinks.length; i++) {
  const link = paginationLinks[i];
  link.onclick = () => {
    let linkValue = limit * parseInt(link.value)
    let linkCurrent = linkValue / limit
    return (() => {
      offset = linkValue - limit;  // gets the offset 0 --start-- (without the limit --it would be offset = 15 without the reseting, cuz 15 * 1 = 15) to count from 0 to the linkValue (60)
      loadPage(offset, limit)
      activeLink(linkCurrent)
      updateNextButtonState(linkCurrent)
    })() 
  }
}

function activeLink(value) {
  paginationLinks.forEach(link => {
    if (link.getAttribute('value') === value.toString ()) {  // gets the value set on the html and compares to the value set as a parameter
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function scrollPage() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function updateNextButtonState(page) {
  if (page >= totalPages || page >= totalPages) {
    nextBtn.disabled = true; // deactivates the btn next if there are more pages
  } else {
    nextBtn.disabled = false; // activates the btn next if there aare more pages
  }
}

nextBtn.addEventListener('click', () => {
  if (offset <= 60) {
    offset = parseInt(currentPage) * limit;
    currentPage++;
    loadPage(offset, limit);
    activeLink(currentPage);
    updateNextButtonState(currentPage);
    scrollPage()
    } else if (offset === 0) {
    offset += limit;
    loadPage(offset, limit);
    currentPage++;
    activeLink(currentPage);
    updateNextButtonState(currentPage);
    scrollPage()
  }
})

prevBtn.addEventListener('click', () => {
  if (offset > 0) {
    offset -= limit;
    loadPage(offset, limit);
    currentPage--;
    activeLink(currentPage);
    updateNextButtonState(currentPage);
    scrollPage()
  }
})

