// ZoneAds AI Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer for Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.rv');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          // If the element has bar chart inside, trigger bar animation
          if (entry.target.classList.contains('bars') || entry.target.querySelector('.bars')) {
            const bars = entry.target.classList.contains('bars') ? entry.target : entry.target.querySelector('.bars');
            if (bars) bars.classList.add('in');
          }
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('in'));
  }

  // 2. Mobile Menu Toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const mobMenu = document.getElementById('mobMenu');

  if (burgerBtn && mobMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobMenu.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    mobMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Modal Functionality (Request Access & Log in Preview)
  const modal = document.getElementById('accessModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const accessForm = document.getElementById('accessForm');
  const formSuccess = document.getElementById('formSuccess');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (accessForm) {
    accessForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = accessForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        accessForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }, 700);
    });
  }

  // 4. Interactive Bulk Ads Preset Simulator (Tabs)
  const stepBoxes = document.querySelectorAll('.step-box');
  const previewTerminal = document.getElementById('simulatorOutput');

  const stepOutputs = [
    `<span style="color: #c9a961;">[STEP 1: BULK CREATIVES]</span> Loaded 48 MP4 video creatives & 120 ad copy variants.\nTags mapped: Offer #108, Spark IDs verified, Aspect: 9:16 vertical.`,
    `<span style="color: #c9a961;">[STEP 2: PRESET MATRIX]</span> Budget rule: $50/ad group, ABO mode, US 25-54 Broad.\nGenerated 16 TikTok ad campaigns across 4 Ad Accounts (48 ad groups total).`,
    `<span style="color: #4ea96b;">[STEP 3: TIKTOK API LAUNCH]</span> Dispatching batch to TikTok Commercial API (OAuth 2.0)...\n✓ Account 01: 12 Ad Groups live (200 OK)\n✓ Account 02: 12 Ad Groups live (200 OK)\n✓ Account 03: 12 Ad Groups live (200 OK)\n✓ Account 04: 12 Ad Groups live (200 OK)`,
    `<span style="color: #dcc489;">[STEP 4: ROAS & AUTOKILL]</span> Postback sync active (RedTrack/Voluum/Custom S2S).\nReal-time ROAS: 2.14x across Top 8 creatives. Auto-kill rule armed at $35 spend / 0 conv.`
  ];

  stepBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      stepBoxes.forEach(b => b.style.borderColor = 'var(--rule-soft)');
      box.style.borderColor = 'var(--gold)';
      if (previewTerminal && stepOutputs[index]) {
        previewTerminal.innerHTML = stepOutputs[index];
      }
    });
  });

  // 5. Dynamic Live Chart randomizer on still hover for realistic tech feel
  const stillBox = document.querySelector('.still');
  if (stillBox) {
    const bars = stillBox.querySelectorAll('.bar-rev');
    stillBox.addEventListener('mouseenter', () => {
      bars.forEach(bar => {
        const currentH = parseFloat(bar.style.height) || 75;
        const delta = (Math.random() * 8 - 4).toFixed(1);
        const newH = Math.min(100, Math.max(30, currentH + parseFloat(delta)));
        bar.style.height = `${newH}%`;
      });
    });
  }
});
