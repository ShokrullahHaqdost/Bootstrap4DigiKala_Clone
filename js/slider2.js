/*/emarsys.min.js]*/
Emarsys={formatCurrency:function(e,t,r){e=e.toString().replace(/\$|\,/g,""),isNaN(e)&&(e="0"),sign=e==(e=Math.abs(e)),e=Math.floor(100*e+.50000000001),e=Math.floor(e/(t?1e3:100)).toString();for(var a=0;a<Math.floor((e.length-(1+a))/3);a++)e=e.substring(0,e.length-(4*a+3))+","+e.substring(e.length-(4*a+3));return(sign?"":"-")+e+" "+r},convertToFaDigit:function(e){for(var t=e,r=48;r<=57;r++){var a=String.fromCharCode(r),n=String.fromCharCode(r+1728);t=t.replace(new RegExp(a.toString(),"g"),n.toString())}return t},isUnicode:function(e){for(var t=[],r=0;r<=e.length;r++)if(t[r]=e.substring(r-1,r),255<t[r].charCodeAt())return!0;return!1},loadEmarsysSlider:function(e){window.ScarabQueue=window.ScarabQueue||[],window.ScarabQueue.push(["recommend",{logic:"HOME_"+e,limit:20,containerId:"emarsys-items-"+e.toString(),templateId:"emarsys-template",success:function(e,t){var r=$("#"+this.containerId);if(e.topicLocalized)if(e.page.products.length){e.title=e.topicLocalized.replace(/Root Catalog>/g,""),e.title=e.title.substring(e.title.lastIndexOf(">")+1),r.parent().find(".o-headline").find("span").html(e.title),t(e);new Swiper("#"+this.containerId+" .js-swiper-emarsys",{slidesPerView:parseFloat(r.data("count-xxl"))||6,slidesPerGroup:(parseInt(r.data("count-xxl"))||6)-1,navigation:{nextEl:".js-swiper-button-next",prevEl:".js-swiper-button-prev"},lazy:{enabled:!0},breakpoints:{1367:{slidesPerView:parseFloat(r.data("count-lg"))||4,slidesPerGroup:(parseInt(r.data("count-lg"))||4)-1,spaceBetweenSlides:1},1679:{slidesPerView:parseFloat(r.data("count-xl"))||5,slidesPerGroup:(parseInt(r.data("count-xl"))||5)-1,spaceBetweenSlides:1}}})}else r.closest(".c-swiper").remove();else r.closest(".c-swiper").remove()}}])}};




IndexAction = {

    init: function () {
        var functions = [
            // this.initIncredableOffer,
            this.initEmarsysRecommendations,
            this.initHomeSinglePromoBox,
            this.initHeadSlider,
            this.initDiscountBox
        ];
        var self = this;
        $(functions).map(function (index, item) {
            item = item.bind(self);
            try {
                item();
            } catch (e) {
                console.log("Error: ", e);
            }
        });
    },
    initEmarsysRecommendations: function () {
        for (var i = 1; i <= 5; i++) {
            Emarsys.loadEmarsysSlider(i);
        }
    },

    initDiscountBox: function () {
        var $item = $('.js-discount-item'),
            $container = $('.js-discount-container'),
            sliderInterval = null;

        $('.js-counter-incredible').each(function () {
            var that = $(this), seconds = $(this).data('countdownseconds'), now;

            if (!!that.attr('data-countdownseconds') && !!seconds) {
                now = new Date();
                now.setSeconds(now.getSeconds() + seconds);
            } else {
                now = ('' + $(this).data('countdown')).replace(/-/g, '/');
            }

            if (!now) return;

            that.countdown({
                hoursOnly: true,
                rtlTemplate: '<span>%h</span>:<span>%i</span>:<span>%s</span>',
                template: '<span>%h</span>:<span>%i</span>:<span>%s</span>',
                leadingZero: true,
                date: now,
                onComplete: function () {
                    var product = that.closest('.js-discount-product');
                    if (!product.hasClass('c-discount__product--invisible'))
                        product.addClass('c-discount__product--finished-incredible');
                }
            });
        });

        if ($item.length <= 1) return;

        $container.off();
        $item.off();

        $container.hover(function () {
            sliderInterval.pause();
        }, function () {
            sliderInterval.resume();
        });

        var changeActive = function ($this, id) {
            $item.removeClass('is-active');
            $this.addClass('is-active');

            setTimeout(function () {
                $container.removeClass('is-active');
                $container.filter('[data-id="' + id + '"]')
                    .addClass('is-active')
                    .animateCss('fadeIn');
                dispatchEvent(new Event('scroll'));
            }, 100);
            if (!!discountSlider) {
                discountSlider.slideTo(id - 3);
            }
        };

        var pausingInterval = function (callback, delay) {
            if (!callback || typeof callback !== typeof function () {
            })
                throw TypeError("Callback should be a Function");
            if (!delay || typeof delay !== typeof 1)
                throw TypeError("Delay should be a Number");

            this.callback = callback;
            this.delay = delay;
            this.startDate = new Date();
            this.remaining = this.delay;
            this.currentInterval = null;
            this.currentTimeout = null;

            this.resume = function () {
                this.clear();
                this.currentTimeout = setTimeout((function () {
                    this.startDate = new Date();
                    this.callback();
                    this.remaining = this.delay;
                    this.currentInterval = setInterval((function () {
                        this.startDate = new Date();
                        this.callback();
                    }).bind(this), this.delay);
                }).bind(this), this.remaining);
                this.startDate = new Date();
                return this;
            };

            this.pause = function () {
                this.clear();
                this.remaining = (this.remaining > 0 ? this.remaining : this.delay) - (new Date() - this.startDate);
                this.remaining = this.remaining > 0 && this.remaining <= this.delay ? this.remaining : this.delay;
                return this;
            };

            this.clear = function () {
                if (this.currentInterval) clearInterval(this.currentInterval);
                if (this.currentTimeout) clearTimeout(this.currentTimeout);
                return this;
            };

            this.callCallback = function () {
                this.clear();
                this.callback();
                return this.resume();
            };

            this.reset = function () {
                this.remaining = this.delay;
                return this;
            };

            return this.resume();
        };

        var createInterval = function () {
            if (sliderInterval) sliderInterval.clear();
            sliderInterval = new pausingInterval(function () {
                var $activeItem = $item.filter('.is-active'),
                    activeId = Number($activeItem.attr('data-id')) + 1;

                if (activeId > $item.length) {
                    activeId = 1;
                }

                var $nextItem = $item.filter('[data-id="' + activeId + '"]');

                changeActive($nextItem, activeId);
            }, 7000);

        };

        createInterval();

        $item.on('click', function (e) {
            var $this = $(this),
                id = $this.attr('data-id');

            sliderInterval.clear();
            changeActive($this, id);
            createInterval();

            e.preventDefault();
        });

        var $user = new UserClass();
        if (!$user.isLogged()) {
            $('.btn-light--sign-up').click(function () {
                $user.showLoginForm();
            });
        }

        var discountSlider;

        enquire.register("screen and (max-width:1365px)", {
            match: function () {
                discountSlider = new Swiper('.js-discount-slider', {
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                    slideClass: 'c-discount__aside-li',
                    slideActiveClass: 'c-discount__aside-ul--active',
                    wrapperClass: 'c-discount__aside-ul',
                    // navigation: {
                    //     nextEl: '.js-discount-slider-next',
                    //     prevEl: '.js-discount-slider-prev'
                    // }
                });
                $('.js-discount-slider-next').on('click', function () {
                    if (sliderInterval) sliderInterval.callCallback();
                });
                $('.js-discount-slider-prev').on('click', function () {
                    var $activeItem = $item.filter('.is-active'),
                        activeId = Number($activeItem.attr('data-id')) - 1;

                    if (activeId > $item.length) {
                        activeId = 1;
                    } else if (activeId <= 0) {
                        activeId = $item.length
                    }

                    var $nextItem = $item.filter('[data-id="' + activeId + '"]');

                    changeActive($nextItem, activeId);
                })
            },
            unmatch: function () {
                if (!!discountSlider)
                    discountSlider.destroy();
            }
        });
    },

    initHomeSinglePromoBox: function () {
        var self = this;
        ScarabQueue.push(['recommend', {
            logic: 'PERSONAL',
            limit: 20,
            containerId: 'promo-single',
            templateId: 'emarsys-template',
            success: function (SC, render) {
                var data = SC.page.products;
                if (data.length) {
                    self.seedSinglePromoBoxSwiper(data);
                }
            }
        }]);
    },

    seedSinglePromoBoxSwiper: function (data) {

        var template =
            '<a class="swiper-slide" href="/product/dkp-{id}/" title="{title}">' +
            '<span class="c-promo-single__img"> ' +
            '<img data-src-swiper="{image}" class="swiper-lazy">' +
            '</span>' +
            '<span class="c-promo-single__desc">' +
            '<span class="c-promo-single__title">{title}</span>' +
            '<span class="c-promo-single__prince-container">' +
            '<del class="c-promo-single__discount">{discount}</del>' +
            '<span class="c-promo-single__price">{price} تومان</span>' +
            '</span>' +
            '</span>' +
            '</a>';
        var items = '';

        $.each(data, $.proxy(function (index, item) {
            items += this.createTemplate(template, {
                title: item.title.slice(0, 50) + (item.title.length > 50 ? '...' : ''),
                image: item.image.replace('/120/', '/220/'),
                price: Emarsys.convertToFaDigit(Emarsys.formatCurrency(String(item.price), false, '')),
                id: item.id,
                discount: item.msrp > 0 && item.msrp != item.price ? Emarsys.convertToFaDigit(Emarsys.formatCurrency(String(item.msrp), false, '')) : ''
            });
        }, this));

        $('.js-promo-single-loader').fadeOut(500, $.proxy(function () {
            $('.js-promo-single-wrapper').html(items);
            this.initSinglePromoBoxSwiper();
        }, this));

    },

    createTemplate: function (s, d) {
        for (var p in d)
            s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
        return s;
    },

    initSinglePromoBoxSwiper: function () {
        window.swipers = [];
        $('.js-promo-single').each(function (i) {
            var $this = $(this),
                $promoBar = $this.find('.js-promo-single-bar'),
                $promoBox = $this.find('.js-promo-single-box');

            swipers[i] = new Swiper($promoBox.get(0), {
                slidesPerView: 1,
                speed: 500,
                allowTouchMove: false,
                autoplay: {
                    delay: 7000
                },
                lazy: true,
                loop: true,
                on: {
                    init: function () {
                        $promoBar.addClass('is-active');
                    },
                    slideChangeTransitionEnd: function () {
                        $promoBar.addClass('is-active');
                    },
                    slideChange: function () {
                        $promoBar.removeClass('is-active');
                    },
                    resize: function () {
                        setTimeout($.proxy(function () {
                            this.detachEvents();
                            this.attachEvents();
                            this.update();
                            this.autoplay.run();
                        }, this), 500);
                    }
                }
            });


            var $box = $('.js-promo-single-box');
            $box.on('mouseenter', function (e) {
                swipers[i].pauseTime = new Date().getTime();
                swipers[i].autoplay.stop();
                $promoBar.addClass('is-paused');
                console.log(swipers[i].autoplay.stop());
            });
            $box.on('mouseleave', function (e) {
                swipers[i].autoplay.start();
                swipers[i].pauseTime = 0;
                $promoBar.removeClass('is-paused');
            });

        });
    },
    initHeadSlider: function () {
        var $w = $(window),
            $slider = $('.js-main-page-slider'),
            top = $slider.offset().top,
            height = $slider.height(),
            bottom = top + height,
            sentBanners = [];

        var self = this;
        self.slidersImpressionsData = [];
        new Swiper('.js-main-page-slider', {
            autoplay: {
                delay: 5000
            },
            effect: 'fade',
            cubeEffect: {
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets'
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    var currentTop = $w.scrollTop();
                    var id = $(this.slides[this.activeIndex]).data('id');
                    if (sentBanners.indexOf(id) < 0 && ((top >= currentTop && top <= currentTop + height) || (bottom >= currentTop && bottom <= currentTop + height))) {
                        snt('dkBannerViewed', {bannerId: id});
                        sentBanners.push(id);
                    }
                }
            }
        });
    }

};

$(function () {
    IndexAction.init();
});