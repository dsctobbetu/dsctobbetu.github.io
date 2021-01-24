//Click scroll actions
$(document).ready(function() {

    checkDark();

    $('#dark-light-toggle').click(function() {
        toggleDark();
        checkDark();
    })


    // Scroll Clicks
    $("#down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#our-work-scroll").offset().top
        }, 900);
    })

    // Icons Expanders
    $('#board-expander').click(function() {
        if (!$('#board').hasClass('icons-expanded')) {
            $('#board').addClass('icons-expanded');
            $('#board-expander').children().children().text('Show Less');
        } else {
            $('#board').removeClass('icons-expanded');
            $('#board-expander').children().children().text('Show All');
        }
        $('html, body').animate({
            scrollTop: $("#board").offset().top - 200
        }, 200);
    })

    $('#github-repo-expander').click(function() {
        if (!$('#github-repos').hasClass('icons-expanded')) {
            $('#github-repos').addClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show Less');
        } else {
            $('#github-repos').removeClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show All');
        }
        // $('html, body').animate({
        //     scrollTop: $("#github-repo").offset().top - 300
        // }, 300);
    })

    // Close Menu
    $('#menu-close').click(function() {
        $('.main-menu').fadeOut(100);
    })

    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 0) {
            if (!$('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').addClass('navbar-scrolled');
            }
        } else {
            if ($('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').removeClass('navbar-scrolled');
            }
        }
    });
})

var toggleDark = function() {
    if (!$('body').hasClass('dark')) {
        localStorage.setItem('dark', true);
    } else {
        localStorage.setItem('dark', false);
    }
}

var checkDark = function() {

    var dark = localStorage.getItem('dark');

    if (dark === 'true') {
        $('body').addClass('dark');
        // $('body').addClass('dark');
        $('.logo-light').hide();
        $('.logo').show();
        $('.logo-nav-light').hide();
        $('.logo-nav').show();
        $('.dark-light-toggle').children().text('I want light mode');
    } else {
        $('body').removeClass('dark');
        $('.logo-light').show();
        $('.logo').hide();
        $('.logo-nav-light').show();
        $('.logo-nav').hide();
        $('.dark-light-toggle').children().text('I want dark mode');
    }

}

function checkCertificate() {
    var certString = document.getElementById('cert_id').value;
    certString = certString.split("12021");
    var cerInt = parseInt(certString[1]);
    if (internshipPanel[cerInt] != null) {
        document.getElementById('cert_out').innerHTML = ("This certificate was issued to " + internshipPanel[cerInt - 1].Names + " for attending Internship Panel 2021, organized by Google DSC TOBB ETU.")
    } else {
        document.getElementById('cert_out').innerHTML = "Invalid Certificate Number!"
    }
}


var internshipPanel = [{
        "Names": "Pinar Ozkan",
        "CertificateNumber": "120210001"
    },
    {
        "Names": "Baturalp Usta",
        "CertificateNumber": "120210002"
    },
    {
        "Names": "Muhammet Batuhan Abusoğlu",
        "CertificateNumber": "120210003"
    },
    {
        "Names": "Samil Akpinar",
        "CertificateNumber": "120210004"
    },
    {
        "Names": "Sude Topal",
        "CertificateNumber": "120210005"
    },
    {
        "Names": "Hanefi Balci",
        "CertificateNumber": "120210006"
    },
    {
        "Names": "Cihat Cemre TAS",
        "CertificateNumber": "120210007"
    },
    {
        "Names": "Ayse Berfin Goctu",
        "CertificateNumber": "120210008"
    },
    {
        "Names": "Melis Seyda Ergul",
        "CertificateNumber": "120210009"
    },
    {
        "Names": "Hayrettin Kaan Ozsoy",
        "CertificateNumber": "120210010"
    },
    {
        "Names": "Nevzat Umut Demirseren",
        "CertificateNumber": "120210011"
    },
    {
        "Names": "Yağiz Efe Temizel",
        "CertificateNumber": "120210012"
    },
    {
        "Names": "Berfin Yaliniz",
        "CertificateNumber": "120210013"
    },
    {
        "Names": "HUSNA TEKELIOGLU",
        "CertificateNumber": "120210014"
    },
    {
        "Names": "Ennur Irem Bilgic",
        "CertificateNumber": "120210015"
    },
    {
        "Names": "CAN TOKATLI",
        "CertificateNumber": "120210016"
    },
    {
        "Names": "Osman GULDALI",
        "CertificateNumber": "120210017"
    },
    {
        "Names": "Pelin Koyun",
        "CertificateNumber": "120210018"
    },
    {
        "Names": "Alp Bora Kirte",
        "CertificateNumber": "120210019"
    },
    {
        "Names": "Numan Avci",
        "CertificateNumber": "120210020"
    },
    {
        "Names": "Ibrahim Gulbahar",
        "CertificateNumber": "120210021"
    },
    {
        "Names": "Belgin Aydin ",
        "CertificateNumber": "120210022"
    },
    {
        "Names": "Ayfer Ceren Unal",
        "CertificateNumber": "120210023"
    },
    {
        "Names": "Serhan Aydin",
        "CertificateNumber": "120210024"
    },
    {
        "Names": "Bilgesu Eski",
        "CertificateNumber": "120210025"
    },
    {
        "Names": "Hasan Erdem AK",
        "CertificateNumber": "120210026"
    },
    {
        "Names": "Onur Onay",
        "CertificateNumber": "120210027"
    },
    {
        "Names": "Nehir Idil Yuksel",
        "CertificateNumber": "120210028"
    },
    {
        "Names": "Kerem Gungor",
        "CertificateNumber": "120210029"
    },
    {
        "Names": "Fatmanur Gebesoğlu",
        "CertificateNumber": "120210030"
    },
    {
        "Names": "Alp Eren Ermumcu",
        "CertificateNumber": "120210031"
    },
    {
        "Names": "Beste Kulekci",
        "CertificateNumber": "120210032"
    },
    {
        "Names": "Eren Meydanli",
        "CertificateNumber": "120210033"
    },
    {
        "Names": "Beste Kulekci",
        "CertificateNumber": "120210034"
    },
    {
        "Names": "Aslihan Asiyan",
        "CertificateNumber": "120210035"
    },
    {
        "Names": "Ezgi Cinkilic",
        "CertificateNumber": "120210036"
    },
    {
        "Names": "Cansel Ağrali",
        "CertificateNumber": "120210037"
    },
    {
        "Names": "Dilara Yikar",
        "CertificateNumber": "120210038"
    },
    {
        "Names": "ENES BUHAN",
        "CertificateNumber": "120210039"
    },
    {
        "Names": "ABDULLAH DOL",
        "CertificateNumber": "120210040"
    },
    {
        "Names": "Ravza Nur Ceran",
        "CertificateNumber": "120210041"
    },
    {
        "Names": "Can Kocyiğitoğlu",
        "CertificateNumber": "120210042"
    },
    {
        "Names": "Mert KAYA",
        "CertificateNumber": "120210043"
    },
    {
        "Names": "Arda Doğan",
        "CertificateNumber": "120210044"
    },
    {
        "Names": "Hira Cansu Değirmenbasi",
        "CertificateNumber": "120210045"
    },
    {
        "Names": "Mukaddes Kubra Arslan",
        "CertificateNumber": "120210046"
    },
    {
        "Names": "Bilge Aktas",
        "CertificateNumber": "120210047"
    },
    {
        "Names": "Anil Cem ALMASULU",
        "CertificateNumber": "120210048"
    },
    {
        "Names": "Beyza Yildirim",
        "CertificateNumber": "120210049"
    },
    {
        "Names": "Gizem Durmusoğlu",
        "CertificateNumber": "120210050"
    },
    {
        "Names": "Elifnur Yukselen",
        "CertificateNumber": "120210051"
    },
    {
        "Names": "Baris Akan",
        "CertificateNumber": "120210052"
    },
    {
        "Names": "Osman Yiğit",
        "CertificateNumber": "120210053"
    },
    {
        "Names": "Ataberk Ali Avci",
        "CertificateNumber": "120210054"
    },
    {
        "Names": "Eftal Kale",
        "CertificateNumber": "120210055"
    },
    {
        "Names": "Omer Ali Yoldas",
        "CertificateNumber": "120210056"
    },
    {
        "Names": "Mehmet Demir",
        "CertificateNumber": "120210057"
    },
    {
        "Names": "Ravza Nur Ceran",
        "CertificateNumber": "120210058"
    },
    {
        "Names": "Batuhan Orhan",
        "CertificateNumber": "120210059"
    },
    {
        "Names": "Burak Cakmak",
        "CertificateNumber": "120210060"
    },
    {
        "Names": "Neslihan Ince",
        "CertificateNumber": "120210061"
    },
    {
        "Names": "Hayriye Karakullukcu",
        "CertificateNumber": "120210062"
    },
    {
        "Names": "Ennur Irem Bilgic",
        "CertificateNumber": "120210063"
    },
    {
        "Names": "Pinar Ozkan",
        "CertificateNumber": "120210064"
    },
    {
        "Names": "CAN TOKATLI",
        "CertificateNumber": "120210065"
    },
    {
        "Names": "Serhan Aydin",
        "CertificateNumber": "120210066"
    },
    {
        "Names": "Gizem DURMUSOGLU",
        "CertificateNumber": "120210067"
    },
    {
        "Names": "Nevzat Umut Demirseren",
        "CertificateNumber": "120210068"
    },
    {
        "Names": "Sude Topal",
        "CertificateNumber": "120210069"
    },
    {
        "Names": "Berkay KAHRAMAN",
        "CertificateNumber": "120210070"
    },
    {
        "Names": "Eda Irem Sezer",
        "CertificateNumber": "120210071"
    },
    {
        "Names": "Melis Seyda Ergul",
        "CertificateNumber": "120210072"
    },
    {
        "Names": "Mert KAYA",
        "CertificateNumber": "120210073"
    },
    {
        "Names": "ENES BUHAN",
        "CertificateNumber": "120210074"
    },
    {
        "Names": "Ayse Berfin Goctu",
        "CertificateNumber": "120210075"
    },
    {
        "Names": "Alp Eren Ermumcu",
        "CertificateNumber": "120210076"
    },
    {
        "Names": "Pelin Koyun",
        "CertificateNumber": "120210077"
    },
    {
        "Names": "Elifnur Yukselen ",
        "CertificateNumber": "120210078"
    },
    {
        "Names": "Alp Bora Kirte ",
        "CertificateNumber": "120210079"
    },
    {
        "Names": "Dilara yikar",
        "CertificateNumber": "120210080"
    },
    {
        "Names": "Eren Meydanli",
        "CertificateNumber": "120210081"
    },
    {
        "Names": "Fatmanur Gebesoğlu",
        "CertificateNumber": "120210082"
    },
    {
        "Names": "Ravza Nur Ceran",
        "CertificateNumber": "120210083"
    },
    {
        "Names": "Belgin Aydin",
        "CertificateNumber": "120210084"
    },
    {
        "Names": "Berfin Yaliniz",
        "CertificateNumber": "120210085"
    },
    {
        "Names": "Samil Akpinar",
        "CertificateNumber": "120210086"
    },
    {
        "Names": "Ozge KOCABAS",
        "CertificateNumber": "120210087"
    },
    {
        "Names": "Ceren Yucel",
        "CertificateNumber": "120210088"
    },
    {
        "Names": "HUSNA TEKELIOGLU",
        "CertificateNumber": "120210089"
    },
    {
        "Names": "Ayfer Ceren Unal",
        "CertificateNumber": "120210090"
    },
    {
        "Names": "Suleyman Alperen Guler",
        "CertificateNumber": "120210091"
    },
    {
        "Names": "HUSNA TEKELIOGLU",
        "CertificateNumber": "120210092"
    },
    {
        "Names": "HUSNA TEKELIOGLU",
        "CertificateNumber": "120210093"
    },
    {
        "Names": "Cansel Ağrali",
        "CertificateNumber": "120210094"
    },
    {
        "Names": "Eftal Kale",
        "CertificateNumber": "120210095"
    },
    {
        "Names": "Kerem Gungor",
        "CertificateNumber": "120210096"
    },
    {
        "Names": "Mehmet Demir",
        "CertificateNumber": "120210097"
    },
    {
        "Names": "Burak Kaya",
        "CertificateNumber": "120210098"
    },
    {
        "Names": "Batuhan Orhan",
        "CertificateNumber": "120210099"
    }
]