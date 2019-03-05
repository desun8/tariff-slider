import "owl.carousel";
import $ from "jquery";

$(document).ready(() => {
  if (window.matchMedia("(min-width: 48em)").matches) {
    const owl = $(".owl-carousel");
    const owlNext = $(".owl-next");
    const owlPrev = $(".owl-prev");

    owl.owlCarousel({
      items: 3,
      mouseDrag: false,
      dots: false,
      smartSpeed: 600
    });

    owl.on("changed.owl.carousel", event => {
      // Скрываем кнопки вперед\назад
      // при достижении последнего\первого элемента слайда
      const itemsSize = event.item.count;
      const currentItem = event.item.index;
      const itemsOnPage = event.page.size;

      const cssHide = { visibility: "hidden", opacity: 0 };
      const cssShow = { visibility: "visible", opacity: 1 };

      if (currentItem === 0) {
        owlPrev.css(cssHide);
      } else {
        owlPrev.css(cssShow);
      }

      if (currentItem === itemsSize - itemsOnPage) {
        owlNext.css(cssHide);
      } else {
        owlNext.css(cssShow);
      }
    });

    owlNext.click(() => {
      owl.trigger("next.owl.carousel");
    });

    owlPrev.click(() => {
      owl.trigger("prev.owl.carousel");
    });
  }

  // Показ краткого описания тарифа
  if ($('.tariff_btn-info').length > 0) {
    $('.tariff').click(function(e) {
      if ($(e.target).hasClass('tariff_btn-info')) {
        $(e.target).hide();
        $(this).find('.tariff_describe').addClass('tariff_describe--active');
        $(this).find('.tariff_btn-close').show();
      }

      if ($(e.target).hasClass('tariff_btn-close')) {
        $(e.target).hide();
        $(this).find('.tariff_describe').removeClass('tariff_describe--active');
        $(this).find('.tariff_btn-info').show();
      }
    })
  }
});
