const hamburgerButton = document.getElementById('js_hamburgerButton');
const header = document.querySelector('.header');
let hamburgerTL = gsap.timeline();

hamburgerButton.addEventListener('click', () => {
  if (header.classList.contains('is_open')) {
    hamburgerTL.to('.hamburger-menu__link span', {
      y: 30,
      stagger: {
        each: .2,
        from: "end",
      }
    })
      .to('.curtain', {
        scaleY: 0,
        ease: 'power2.in',
        duration: .6
      })
      .add(() => {
        header.classList.remove('is_open');
      });
  } else {
    hamburgerTL.add(() => {
      header.classList.add('is_open');
    })
      .to('.curtain', {
        scaleY: 1,
        ease: 'power2.in',
        duration: .6
      })
      .to('.hamburger-menu__link span', {
        y: 0,
        stagger: .2,
      });
  }
});

window.addEventListener('resize', () => {
  if (header.classList.contains('is_open')) {
    hamburgerTL.to('.hamburger-menu__link span', {
      y: 30,
      stagger: {
        each: .2,
        from: "end",
      }
    })
      .to('.curtain', {
        scaleY: 0,
        ease: 'power2.in',
        duration: .6
      })
      .add(() => {
        header.classList.remove('is_open');
      });
  }
});

//文字数制限
function truncateTitles(maxLength) {
  const titleAllay = document.querySelectorAll('.snipet__title');
  titleAllay.forEach(title => {
    const text = title.textContent.trim();
    if (text.length > maxLength) {
      title.textContent = text.substring(0, maxLength) + "...";
    }
  });
}

truncateTitles(22);

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true, // ルー
  slidesPerView: 1,
  speed: 6000, // ループの時間
  allowTouchMove: false,
  autoplay: {
    delay: 2000, // 途切れなくループ
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


const swiperHeight = document.querySelector('.swiper').offsetHeight;
window.addEventListener('scroll', () => {
  var scrollY = window.scrollY;

  header.classList.toggle('is_appear', scrollY > swiperHeight);
})

// about用アニメーション
gsap.registerPlugin(SplitText, ScrollTrigger);

const split = SplitText.create(".about__text", {
  type: "lines",
  mask: "lines",
});

gsap.from(split.lines, {
  opacity: 0,
  y: 20,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".about__text",
    start: "top 80%", // ビューポートに入ったタイミング
    once: true, // 1回だけ
  }
});

// 実績 アニメーション
const workImage = document.querySelectorAll('.work__image');

window.addEventListener('scroll', () => {
  var scrollY = window.scrollY;
  
  workImage.forEach(image => {
    if (scrollY > image.offsetTop - window.innerHeight * 2 / 3) {
      image.classList.add('is_show');
    }
  })
})