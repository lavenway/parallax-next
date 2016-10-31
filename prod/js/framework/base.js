   // IIFE - Immediately Invoked Function Expression
(function(yourcode) {
  
  // The global jQuery object is passed as a parameter
  'use strict';
  $ = $ || jQuery;

  yourcode(window.jQuery, window, document);

  }(function($, window, document) {
      'use strict';
      $ = $ || jQuery;

      // The $ is now locally scoped 
      $(function() {
          // The DOM is ready!

      });

      // The rest of your code goes here!
      /*var body = $('body'),
      html = $('html'),
      $doc = $(document);*/

      $(document).ready(function() {

        // VISIBLE SECTIONS
        $('#landing-page').addClass('current');

        var allSections = $('.section');

        //UPDATE SIDE NAV LINKS WHEN SECTION IS ACTIVE
        function updateSideNav() {
            $('.quick-nav a').removeClass('active');
            var sectionid = $('.section.current').attr('id');

            $('.quick-nav a').each(function() {
                if ($(this).attr('href').match(sectionid)) {
                    $(this).addClass('active');
                }
            });
        }

        //RELOAD THE PAGE WHEN BROWSER IS RE-SIZED
        // NEED TO DO THIS TO RE-CALCULATE PIN POSITIONS
        function calculateScrollPosition(href) {

            //var sideNavHref = href;

            var pin = $(href).prev();
            var prevPin = pin.prevAll('.superscrollorama-pin-spacer');
            var heights = [];
            var browserHeight = $(window).height();

            $.each(prevPin, function(index, value) {
                value = $(this).outerHeight();
                heights.push(value);
                //window.alert('value' + value);
            });

            heights = eval(heights.join('+'));

            $('html, body').animate({
                scrollTop: heights + browserHeight + 1000
            }, 1000);
        }

        $(window).scroll(function() {
            allSections.each(function(i, el) {
                var element = $(el);
                if (element.visible(true)) {
                    element.addClass('current');
                    updateSideNav();
                } else {
                    //el.removeClass('default-visible');
                    element.removeClass('current');
                }
            });
        });


        // PARALLAX
        var controller = $.superscrollorama({
            triggerAtCenter: false,
            playoutAnimations: false
        });

        var pinDur = 3000;

        // create animation timeline for pinned element
        var pinAnimations = new TimelineLite(); // LANDING PAGE //
        var pinAnimations1 = new TimelineLite(); // SERVICE ROLE //
        var pinAnimations2 = new TimelineLite(); // SERVICE ADVISOR //
        var pinAnimations3 = new TimelineLite(); // SERVICE MANAGER //
        var pinAnimations4 = new TimelineLite(); // SERVICE SUPERVISOR //
        var pinAnimations5 = new TimelineLite(); // CAREER PROGRESSION //
        var pinAnimations6 = new TimelineLite(); // BENEFITS //
        var pinAnimations7 = new TimelineLite(); // LOCATION //
        var pinAnimations8 = new TimelineLite(); // WHERE FIT IN //

        // LANDING PAGE //
        pinAnimations.addLabel('landingPage')
            .append(TweenMax.from($('#landing-page'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([
                TweenMax.to($('#landing-page .fade-icon'), 400, {
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('#landing-page .person'), 400, {
                    delay: 1200,
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('#landing-page .text-block'), 400, {
                    delay: 1200,
                    css: {
                        left: '-1000'
                    }
                }),
            ], 0.6)
            .append([TweenMax.to($('#landing-page .person'), 400, {
                css: {
                    display: 'none'
                }
            }), ], 0.6);

        // SERVICE ROLE //
        pinAnimations1.addLabel('serviceRole')
            .append(TweenMax.from($('#service-role'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([TweenMax.to($('.people-wrapper'), 3000, {
                css: {
                    bottom: '0'
                }
            }), ], 0.6)
            .append([TweenMax.to($('.people-wrapper .person'), 0, {
                css: {
                    bottom: '0'
                }
            }), ], 0.6)
            .append([TweenMax.to($('.people-wrapper .person .fade-icon'), 400, {
                delay: 400,
                css: {
                    opacity: 1
                }
            }), ], 0.6)
            .append([
                TweenMax.to($('.people-wrapper .person.three .fade-icon'), 1200, {
                    delay: 1400,
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('.people-wrapper .person.two .fade-icon'), 400, {
                    delay: 800,
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('.people-wrapper .person.three'), 1600, {
                    delay: 1200,
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.two'), 1600, {
                    delay: 1600,
                    css: {
                        bottom: '-1000'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#service-advisor .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // SERVICE ADVISOR //
        pinAnimations2.addLabel('serviceAdvisor')
            .append(TweenMax.from($('#service-advisor'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([TweenMax.to($('#service-advisor .text-block'), 1200, {
                css: {
                    right: 170
                }
            })], 0.6)
            .append([
                TweenMax.to($('#service-advisor .icon-1'), 400, {
                    delay: 200,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-advisor .icon-4'), 400, {
                    delay: 400,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-advisor .icon-5'), 400, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-advisor .icon-2'), 400, {
                    delay: 800,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-advisor .icon-3'), 400, {
                    delay: 1200,
                    css: {
                        opacity: 1
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#service-advisor .fade-icon'), 400, {
                delay: 1200,
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-advisor .text-block'), 1200, {
                css: {
                    right: -1000
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-manager .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // SERVICE MANAGER //
        pinAnimations3.addLabel('serviceManager')
            .append(TweenMax.from($('#service-manager'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([
                TweenMax.to($('.people-wrapper .person.one .fade-icon'), 1200, {
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('.people-wrapper .person.two'), 1600, {
                    delay: 600,
                    css: {
                        bottom: '0'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.one'), 1600, {
                    delay: 1400,
                    css: {
                        bottom: '-1000'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('.people-wrapper .person.two .fade-icon'), 1600, {
                css: {
                    opacity: 1
                }
            })], 0.6)
            .append([TweenMax.to($('#service-manager .text-block'), 1200, {
                css: {
                    left: 0
                }
            })], 0.6)
            .append([
                TweenMax.to($('#service-manager .icon-5'), 400, {
                    delay: 200,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-manager .icon-3'), 400, {
                    delay: 400,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-manager .icon-2'), 400, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-manager .icon-4'), 400, {
                    delay: 800,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-manager .icon-1'), 400, {
                    delay: 1200,
                    css: {
                        opacity: 1
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#service-manager .fade-icon'), 400, {
                delay: 2000,
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-manager .text-block'), 1200, {
                css: {
                    left: -1000
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-supervisor .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // SERVICE SUPERVISOR //
        pinAnimations4.addLabel('serviceSupervisor')
            .append(TweenMax.from($('#service-supervisor'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([
                TweenMax.to($('.people-wrapper .person.two .fade-icon'), 1200, {
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('.people-wrapper .person.three'), 1600, {
                    delay: 600,
                    css: {
                        bottom: '0'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.two'), 1600, {
                    delay: 1400,
                    css: {
                        bottom: '-1000'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('.people-wrapper .person.three .fade-icon'), 1600, {
                css: {
                    opacity: 1
                }
            })], 0.6)
            .append([TweenMax.to($('#service-supervisor .text-block'), 1200, {
                css: {
                    left: 210
                }
            })], 0.6)
            .append([
                TweenMax.to($('#service-supervisor .icon-2'), 400, {
                    delay: 200,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-supervisor .icon-4'), 400, {
                    delay: 400,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-supervisor .icon-1'), 400, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-supervisor .icon-5'), 400, {
                    delay: 800,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#service-supervisor .icon-3'), 400, {
                    delay: 1200,
                    css: {
                        opacity: 1
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#career-progression .ipad-1, #career-progression .ipad-2'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-supervisor .fade-icon'), 400, {
                delay: 2000,
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#service-supervisor .text-block'), 1200, {
                css: {
                    left: -1000
                }
            }), ], 0.5)
            .append([TweenMax.to($('#career-progression .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // CAREER PROGRESSION //
        pinAnimations5.addLabel('careerProgression')
            .append(TweenMax.from($('#career-progression'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([
                TweenMax.to($('.people-wrapper .person.three .fade-icon'), 400, {
                    delay: 800,
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('.people-wrapper .person.one'), 1, {
                    css: {
                        left: '340'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.one'), 1600, {
                    css: {
                        bottom: '0'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#career-progression .text-block'), 1200, {
                css: {
                    left: -120
                }
            })], 0.5)
            .append([
                TweenMax.to($('#career-progression .ipad-1, #career-progression .ipad-2'), 0, {
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#career-progression .ipad-1'), 1200, {
                    delay: 200,
                    css: {
                        bottom: '415'
                    }
                }),
                TweenMax.to($('#career-progression .ipad-2'), 1200, {
                    delay: 600,
                    css: {
                        bottom: '316'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#career-progression .text-block'), 1200, {
                delay: 1200,
                css: {
                    left: '-1000'
                }
            })], 0.6)
            .append([TweenMax.to($('#career-progression .ipad-2'), 1200, {
                delay: 1200,
                css: {
                    bottom: '108'
                }
            })], 0.6)
            .append([
                TweenMax.to($('#career-progression .icon-2'), 400, {
                    delay: 200,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#career-progression .icon-1'), 400, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
            ], 0.6)
            .append([
                TweenMax.to($('#career-progression .icon-1'), 1200, {
                    delay: 1200,
                    css: {
                        opacity: 0
                    }
                }),
                TweenMax.to($('#career-progression .icon-2'), 1200, {
                    delay: 1200,
                    css: {
                        opacity: 0
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#benefits .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // BENEFITS //
        pinAnimations6.addLabel('benefits')
            .append(TweenMax.from($('#benefits'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([
                TweenMax.to($('#career-progression .ipad-1'), 3400, {
                    css: {
                        bottom: '2000'
                    }
                }),
                TweenMax.to($('#career-progression .ipad-2'), 3400, {
                    css: {
                        bottom: '2000'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.three'), 1600, {
                    delay: 600,
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('.people-wrapper .person.one'), 1600, {
                    delay: 1200,
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('#benefits .ipad-1, #benefits .ipad-2, #benefits .ipad-3, #benefits .ipad-4'), 1, {
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .ipad-1'), 2000, {
                    delay: 200,
                    css: {
                        bottom: '394'
                    }
                }),
                TweenMax.to($('#benefits .ipad-2'), 2000, {
                    delay: 800,
                    css: {
                        bottom: '310'
                    }
                }),
                TweenMax.to($('#benefits .ipad-3'), 2000, {
                    delay: 400,
                    css: {
                        bottom: '64'
                    }
                }),
                TweenMax.to($('#benefits .ipad-4'), 2000, {
                    delay: 600,
                    css: {
                        bottom: '168'
                    }
                })
            ], 0.6)
            .append([
                TweenMax.to($('#benefits .text-block.left'), 1200, {
                    delay: 1200,
                    css: {
                        left: '10'
                    }
                }),
                TweenMax.to($('#benefits .text-block.left ul'), 1200, {
                    delay: 1200,
                    css: {
                        left: '350'
                    }
                }),
                TweenMax.to($('#benefits .text-block.right'), 1200, {
                    delay: 1200,
                    css: {
                        right: '0'
                    }
                })
            ], 0.6)
            .append([
                TweenMax.to($('#benefits .icon-6'), 1200, {
                    delay: 200,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .icon-1'), 1200, {
                    delay: 400,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .icon-3'), 1200, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .icon-5'), 1200, {
                    delay: 800,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .icon-2'), 1200, {
                    delay: 1000,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#benefits .icon-4'), 1200, {
                    delay: 1200,
                    css: {
                        opacity: 1
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#benefits .icon-1, #benefits .icon-2, #benefits .icon-3, #benefits .icon-4, #benefits .icon-5, #benefits .icon-6'), 0, {
                delay: 1800,
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([
                TweenMax.to($('#benefits .text-block.right'), 1200, {
                    delay: 1200,
                    css: {
                        right: '-1000'
                    }
                }),
                TweenMax.to($('#benefits .text-block.left'), 1200, {
                    delay: 1200,
                    css: {
                        left: '-1000'
                    }
                }),
                TweenMax.to($('#benefits .text-block.left ul'), 1200, {
                    delay: 1200,
                    css: {
                        left: '0'
                    }
                }),
                TweenMax.to($('#benefits .ipad-1, #benefits .ipad-2, #benefits .ipad-3, #benefits .ipad-4'), 2200, {
                    delay: 1800,
                    css: {
                        bottom: 2000
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#location .fade-icon'), 0, {
                css: {
                    opacity: 0
                }
            }), ], 0.5);

        // LOCATION //
        pinAnimations7.addLabel('location')
            .append(TweenMax.from($('#location'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([TweenMax.to($('#location .person'), 0, {
                css: {
                    opacity: '1'
                }
            }), ], 0.6)
            .append([TweenMax.to($('#location .person'), 1600, {
                css: {
                    bottom: '0'
                }
            }), ], 0.6)
            .append([TweenMax.to($('#location .main-bg'), 1600, {
                delay: 1600,
                css: {
                    bottom: '0'
                }
            }), ], 0.6)
            .append([TweenMax.to($('#location .text-block.left'), 1200, {
                delay: 1200,
                css: {
                    left: '0'
                }
            })], 0.6)
            .append([
                TweenMax.to($('#location .icon-4'), 1200, {
                    delay: 400,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#location .icon-3'), 1200, {
                    delay: 600,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#location .icon-5'), 1200, {
                    delay: 800,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#location .icon-2'), 1200, {
                    delay: 1000,
                    css: {
                        opacity: 1
                    }
                }),
                TweenMax.to($('#location .icon-1'), 1200, {
                    delay: 1200,
                    css: {
                        opacity: 1
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#location .fade-icon'), 400, {
                delay: 2400,
                css: {
                    opacity: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#location .text-block.left'), 1200, {
                css: {
                    left: -1000
                }
            }), ], 0.5)
            .append([
                TweenMax.to($('#location .person'), 1600, {
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('#location .person'), 1600, {
                    delay: 1200,
                    css: {
                        visibility: 'hidden'
                    }
                }),
                TweenMax.to($('#location .main-bg'), 1600, {
                    delay: 200,
                    css: {
                        bottom: '-1000'
                    }
                }),
                TweenMax.to($('#location .main-bg'), 1600, {
                    delay: 800,
                    css: {
                        height: '0'
                    }
                })
            ], 0.6)
            .append([TweenMax.to($('#where-fit-in .fade-icon'), 1600, {
                css: {
                    opacity: '0'
                }
            }), ], 0.5);


        // SO WHERE DO YOU FIT IN //
        pinAnimations8.addLabel('whereFitIn')
            .append(TweenMax.from($('#where-fit-in'), 0.5, {
                ease: Quad.easeInOut
            }))
            .append([TweenMax.to($('#where-fit-in .person'), 1600, {
                css: {
                    bottom: '0'
                }
            }), ], 0.5)
            .append([TweenMax.to($('#where-fit-in .text-block'), 1200, {
                css: {
                    left: 0
                }
            }), ], 0.5)
            .append([TweenMax.to($('#where-fit-in .fade-icon'), 1600, {
                css: {
                    opacity: '1'
                }
            }), ], 0.5)
            .append([TweenMax.to($('#where-fit-in .fade-icon'), 1600, {
                css: {
                    bottom: '270'
                }
            }), ], 0.5);


        // pin element, use onPin and onUnpin to adjust the height of the element
        controller.pin($('#landing-page'), pinDur, {
            // anim: pinAnimations
            anim: pinAnimations,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#landing-page').css('height', '100%');
            },
            onUnpin: function() {
                $('#landing-page').css('height', '0');
            }
        });

        controller.pin($('#service-role'), pinDur, {
            // anim: pinAnimations1
            anim: pinAnimations1,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#service-role').css('height', '100%');
            },
            onUnpin: function() {
                $('#service-role').css('height', '0');
            }
        });

        controller.pin($('#service-advisor'), pinDur, {
            // anim: pinAnimations2
            anim: pinAnimations2,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#service-advisor').css('height', '100%');
            },
            onUnpin: function() {
                $('#service-advisor').css('height', '0');
            }
        });

        controller.pin($('#service-manager'), pinDur, {
            // anim: pinAnimations3
            anim: pinAnimations3,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#service-manager').css('height', '100%');
            },
            onUnpin: function() {
                $('#service-manager').css('height', '0');
            }
        });

        controller.pin($('#service-supervisor'), pinDur, {
            // anim: pinAnimations4
            anim: pinAnimations4,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#service-supervisor').css('height', '100%');
            },
            onUnpin: function() {
                $('#service-supervisor').css('height', '0');
            }
        });

        controller.pin($('#career-progression'), pinDur, {
            // anim: pinAnimations5
            anim: pinAnimations5,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#career-progression').css('height', '100%');
            },
            onUnpin: function() {
                $('#career-progression').css('height', '0');
            }
        });

        controller.pin($('#benefits'), pinDur, {
            // anim: pinAnimations6
            anim: pinAnimations6,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#benefits').css('height', '100%');
            },
            onUnpin: function() {
                $('#benefits').css('height', '0');
            }
        });

        controller.pin($('#location'), pinDur, {
            // anim: pinAnimations7
            anim: pinAnimations7,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#location').css('height', '100%');
            },
            onUnpin: function() {
                $('#location').css('height', '0');
            }
        });

        controller.pin($('#where-fit-in'), pinDur, {
            // anim: pinAnimations8
            anim: pinAnimations8,
            pushFollowers: false,
            offset: 0,

            onPin: function() {
                $('#where-fit-in').css('height', '100%');
            },
            onUnpin: function() {
                $('#where-fit-in').css('height', '0');
            }
        });

        //SIDE NAVIGATION LINKS
        $('ul.quick-nav').find('a').click(function() {
            var sideNavHref = $(this).attr('href');
            calculateScrollPosition(sideNavHref);
            //window.alert('SELECTED X POSITION IS: ' + heights + ' BROWSER HEIGHT IS: ' + browserHeight);

            $('ul.quick-nav li a').removeClass('active');
            $(this).addClass('active');

        });

        //LANDING PAGE SECTION LINKS
        $('#landing-page .link').click(function() {
            var sideNavHref = $(this).attr('href');
            calculateScrollPosition(sideNavHref);
        });

        //POSITION ELEMENTS TO TOP OF SCREEN WHEN HEADER IS NOT VISIBLE
        $(function() {
            var my_div = $('#header');
            var div_top = my_div.offset().top;

            $(document).scroll(function() {
                if (div_top >= $(document).scrollTop()) {
                    $('.quick-nav').removeClass('dockTop');
                    $('#back-top').removeClass('dockTop');
                } else {
                    $('.quick-nav').addClass('dockTop');
                    $('#back-top').addClass('dockTop');
                }
            });
        });

        //SCROLLDOWN ANIMATION
        $(function() {
            var lastSection = $('#where-fit-in');
            $(window).scroll(function() {
                if ($(lastSection).hasClass('current')) {
                    $('#next-section').fadeOut();
                } else {
                    $('#next-section').fadeIn();
                }
            });
        });

        //BACK-TO-TOP LINK
        $('#back-top').hide();
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
            $('#back-top a').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        });

      });
    }
));