$(document).ready(function() {
    $('#mega-menu ul li:has(.sub-menu)').addClass('has-children');
    $('#mega-menu ul li:has(.sub-menu)').find('.sub-menu').before('<i class="fa fa-angle-down ml-2" aria-hidden="true"></i>');
    $('#mega-menu ul li').click(function() {
        if (!$(this).hasClass('open')) {
            $('li').removeClass('open');
            $('#mega-menu ul li').find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('#mega-menu ul li').find('.sub-menu').slideUp();
            $(this).addClass('open');
            $(this).find('.sub-menu').slideDown();
            $('body').addClass('menu-active');
            $(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $(this).removeClass('open');
            $(this).find('.sub-menu').slideUp();
            $(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('body').removeClass('menu-active');
        }
    });
    $('#mega-menu ul li, .sub-menu, .dropdown-menu').click(function(e) {
        e.stopPropagation();
    })
    $('body').click(function(e) {
        $('#mega-menu ul li').removeClass('open');
        $('body').removeClass('menu-active');
        $('#mega-menu ul li').find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
    })
    $('.menu-icon').click(function() {
        $(this).toggleClass('active');
        $('#mega-menu').slideToggle();
    });
    $('.app-widget_footer').each(function() {
        $(this).click(function() {
            $('div.arrow').hide();
            $('div.app-info').hide();
            $('div.app-widget').css('height', 'auto');
            $('div.app-widget').removeClass('active');
            var e = $(this).parents('.app-widget');
            var eAppInfo = e.find('.app-info');
            var eArrow = e.find('.arrow');
            e.addClass('active');
            eAppInfo.toggle();
            eArrow.toggle();
            var a = e.height(),
                n = e.find('.app-info').height();
            e.css('height', a + n + 110)
            if (e.find('.app-info').css('display') == 'none') {
                e.find('.app-info').hide(), e.find('.arrow').hide(), e.removeClass('active'), e.css('height', 'auto')
            }
        })
    }), $('.close-btn').each(function() {
        $(this).click(function(e) {
            $('div.arrow').hide();
            $('div.app-info').hide();
            $('div.app-widget').css('height', 'auto');
            $('div.app-widget').removeClass('active');
            e.stopPropagation(), $(this).parents('.app-info').hide(), $(this).parents('.app-widget').removeClass('active'), $(this).parents('.app-widget').css('height', 'auto')
        })
    })
    $('.mar_v3').each(function() {
        $(this).click(function() {
            $(this).css('height', 'auto');
            $(this).removeClass('active');
            var e = $(this);
            var eAppInfo = e.find('.app-info');
            var eArrow = e.find('.arrow');
            e.addClass('active');
            eAppInfo.toggle();
            eArrow.toggle();
            var a = e.height(),
                n = e.find('.app-info').height();
            e.css('height', a + n + 110)
            if (e.find('.app-info').css('display') == 'none') {
                e.find('.app-info').hide(), e.find('.arrow').hide(), e.removeClass('active'), e.css('height', 'auto')
            }
        })
    }), $('.close-btn').each(function() {
        $(this).click(function(e) {
            $('div.arrow').hide();
            $('div.app-info').hide();
            $('div.mar_v3').css('height', 'auto');
            $('div.mar_v3').removeClass('active');
            e.stopPropagation(), $(this).parents('.app-info').hide(), $(this).parents('.mar_v3').removeClass('active'), $(this).parents('.mar_v3').css('height', 'auto')
        })
    })
    $('#mega-menu ul li:has(ul)').addClass('has-children');
    $('#mega-menu ul li:has(ul)').find('ul').before('<span class="fa fa-plus"></span>');
    $('#mega-menu ul li.has-children span').click(function() {
        if (!$(this).hasClass('open')) {
            var currentLevel = $(this).closest('ul');
            $('li ul', currentLevel).slideUp();
            $('li span', currentLevel).removeClass('open fa-minus');
            $(this).next('ul').slideDown();
            $(this).removeClass('').addClass('open fa-minus');
        } else {
            $(this).removeClass('open fa-minus').addClass('fa-plus');
            $(this).next('ul').slideUp();
        }
    });
    $('.dropdown').each(function() {
        var dropdownToggle = $(this).find('.dropdown-toggle'),
            dropdownMenu = $(this).find('.dropdown-menu');
        dropdownToggle.click(function() {
            dropdownMenu.slideToggle();
        });
    })
    $('body').click(function() {
        $('.dropdown-menu').slideUp();
        $('#mega-menu ul li').find('.sub-menu').slideUp();
    })
    $('.partners-logo').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        autoplay: false,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="slick-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    if ($('#hero-benner_js').length >= 1) {
        particlesJS('hero-benner_js', {
            'particles': {
                'number': {
                    'value': 100,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#41ad49'
                },
                'shape': {
                    'type': 'circle',
                },
                'opacity': {
                    'value': 0.8,
                    'random': false,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 6,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 2000,
                        'size_min': 0.1,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#41ad49',
                    'opacity': 1,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    if ($('#about_agora_js').length >= 1) {
        particlesJS('about_agora_js', {
            'particles': {
                'number': {
                    'value': 100,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#1da1dc'
                },
                'shape': {
                    'type': 'circle',
                },
                'opacity': {
                    'value': 0.25,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 7,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 2000,
                        'size_min': 3,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#1da1dc',
                    'opacity': 0.2,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    if ($('#marketplace_js').length >= 1) {
        particlesJS('marketplace_js', {
            'particles': {
                'number': {
                    'value': 100,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#41ad49'
                },
                'shape': {
                    'type': 'circle',
                },
                'opacity': {
                    'value': 0.3,
                    'random': false,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 8,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 2000,
                        'size_min': 0.3,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#41ad49',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    if ($('#contact_js').length >= 1) {
        particlesJS('contact_js', {
            'particles': {
                'number': {
                    'value': 100,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#fff'
                },
                'shape': {
                    'type': 'circle',
                },
                'opacity': {
                    'value': 0.6,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.5,
                        'sync': false
                    }
                },
                'size': {
                    'value': 7,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 2000,
                        'size_min': 0.3,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#fff',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    if ($('#whitedots').length >= 1) {
        particlesJS('whitedots', {
            'particles': {
                'number': {
                    'value': 100,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#fff'
                },
                'shape': {
                    'type': 'circle',
                },
                'opacity': {
                    'value': 0.4,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.2,
                        'sync': false
                    }
                },
                'size': {
                    'value': 7,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 2000,
                        'size_min': 0.3,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#fff',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    $('.banner-image img').load(function() {
        $('#hero-benner_js').length >= 1 && particlesJS('hero-benner_js', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: '#41ad49'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: .8,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 6,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 2e3,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: '#41ad49',
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: 'none',
                    random: !1,
                    straight: !1,
                    out_mode: 'out',
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: !0,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: !0,
                        mode: 'push'
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        });
    });
})

console.log("UPDATED");
