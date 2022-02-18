function removeanimates() {
    $(".animate__animated").removeClass("animate__animated");
    $(".animate__backInDown").removeClass("animate__backInDown");
    $(".animate__backInUp").removeClass("animate__backInUp");
    $(".animate__backInLeft").removeClass("animate__backInLeft");
    $(".animate__backInRight").removeClass("animate__backInRight");
    $(".animate__backOutUp").removeClass("animate__backOutUp");
    $(".animate__backOutDown").removeClass("animate__backOutDown");
    $(".animate__backOutLeft").removeClass("animate__backOutLeft");
    $(".animate__backOutRight").removeClass("animate__backOutRight");
}

function reset_portfolio(){
    document.getElementById("portfolio").scrollIntoView({ 
        behavior: 'smooth' 
    });
    setTimeout(function (){
        document.getElementById("cinetica").classList.remove("d-block");
        document.getElementById("cinetica").classList.add("d-none");
        document.getElementById("decadencia").classList.remove("d-block");
        document.getElementById("decadencia").classList.add("d-none");
        document.getElementById("despojamento").classList.remove("d-block");
        document.getElementById("despojamento").classList.add("d-none");
        document.getElementById("in_materiae_veritas").classList.remove("d-block");
        document.getElementById("in_materiae_veritas").classList.add("d-none");
        document.getElementById("missao_cumprida").classList.remove("d-block");
        document.getElementById("missao_cumprida").classList.add("d-none");
        document.getElementById("recomeco").classList.remove("d-block");
        document.getElementById("recomeco").classList.add("d-none");
        document.getElementById("sopro_de_vida").classList.remove("d-block");
        document.getElementById("sopro_de_vida").classList.add("d-none");
        document.getElementById("tao_longe").classList.remove("d-block");
        document.getElementById("tao_longe").classList.add("d-none");
        document.getElementById("terra_feita_de_tempo").classList.remove("d-block");
        document.getElementById("terra_feita_de_tempo").classList.add("d-none");
        document.getElementById("identidade").classList.remove("d-block");
        document.getElementById("identidade").classList.add("d-none");
        document.getElementById("naturalis_optio").classList.remove("d-block");
        document.getElementById("naturalis_optio").classList.add("d-none");
        document.getElementById("regenerar").classList.remove("d-block");
        document.getElementById("regenerar").classList.add("d-none");
        document.getElementById("sufoco_1").classList.remove("d-block");
        document.getElementById("sufoco_1").classList.add("d-none");
        document.getElementById("sufoco_2").classList.remove("d-block");
        document.getElementById("sufoco_2").classList.add("d-none");
    }, 800);
}

function goto(whereto, from, mobile) {
    removeanimates();
    var contacts = document.getElementById("contacts");
    var portfolio = document.getElementById("portfolio");
    var aboutme = document.getElementById("aboutme");
    var horizontal = document.getElementById("scroll-horizontal");
    var home = document.getElementById("home");
    var documents = document.getElementById("documents");
    var footer = document.getElementById("footer");
    
    if (mobile) {
        var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
        var collapseList = collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl)
        })
    }

    switch (whereto) {
        case 'home':
            document.getElementById(from).classList.add("animate__animated", "animate__backOutDown");
            home.classList.add("animate__animated", "animate__backInDown");
            setTimeout(() => {  
                horizontal.classList.remove("d-flex");
                horizontal.classList.add("d-none");
                document.getElementById("scroller").style.display = "flex";
            }, 800);
            
            break;
        case 'aboutme':
            if (from == "home") {
                horizontal.classList.add("d-flex");
                horizontal.classList.remove("d-none");
                document.getElementById(from).classList.add("animate__animated", "animate__backOutUp");
                aboutme.classList.add("animate__animated", "animate__backInUp");
            }else{
                document.getElementById(from).classList.add("animate__animated", "animate__backOutRight");
                aboutme.classList.add("animate__animated", "animate__backInRight");
            }
            document.getElementById("scroller").style.display = "none";
            break;  
        case 'portfolio':
            if (from == "home") {
                horizontal.classList.add("d-flex");
                horizontal.classList.remove("d-none");
                document.getElementById(from).classList.add("animate__animated", "animate__backOutUp");
                portfolio.classList.add("animate__animated", "animate__backInUp");
            }else{
                document.getElementById(from).classList.add("animate__animated", "animate__backOutLeft");
                portfolio.classList.add("animate__animated", "animate__backInRight");
            }
            break;
        case 'contacts':
            if (from == "home") {
                horizontal.classList.add("d-flex");
                horizontal.classList.remove("d-none");
                document.getElementById(from).classList.add("animate__animated", "animate__backOutUp");
                contacts.classList.add("animate__animated", "animate__backInUp");
            }else{
                document.getElementById(from).classList.add("animate__animated", "animate__backOutRight");
                contacts.classList.add("animate__animated", "animate__backInRight");
            }
            break;
        case 'documents':
            if (from == "home") {
                horizontal.classList.add("d-flex");
                horizontal.classList.remove("d-none");
                document.getElementById(from).classList.add("animate__animated", "animate__backOutUp");
                documents.classList.add("animate__animated", "animate__backInUp");
            }else{
                document.getElementById(from).classList.add("animate__animated", "animate__backOutRight");
                documents.classList.add("animate__animated", "animate__backInRight");
            }
            break;
        case 'portfolio_reset':
            reset_portfolio();
            break;
        case 'cinetica':
            document.getElementById("cinetica").classList.remove("d-none");
            document.getElementById("cinetica").classList.add("d-block");
            document.getElementById("cinetica").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'decadencia':
            document.getElementById("decadencia").classList.remove("d-none");
            document.getElementById("decadencia").classList.add("d-block");
            document.getElementById("decadencia").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'despojamento':
            document.getElementById("despojamento").classList.remove("d-none");
            document.getElementById("despojamento").classList.add("d-block");
            document.getElementById("despojamento").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'in_materiae_veritas':
            document.getElementById("in_materiae_veritas").classList.remove("d-none");
            document.getElementById("in_materiae_veritas").classList.add("d-block");
            document.getElementById("in_materiae_veritas").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'missao_cumprida':
            document.getElementById("missao_cumprida").classList.remove("d-none");
            document.getElementById("missao_cumprida").classList.add("d-block");
            document.getElementById("missao_cumprida").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'recomeco':
            document.getElementById("recomeco").classList.remove("d-none");
            document.getElementById("recomeco").classList.add("d-block");
            document.getElementById("recomeco").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'sopro_de_vida':
            document.getElementById("sopro_de_vida").classList.remove("d-none");
            document.getElementById("sopro_de_vida").classList.add("d-block");
            document.getElementById("sopro_de_vida").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'tao_longe':
            document.getElementById("tao_longe").classList.remove("d-none");
            document.getElementById("tao_longe").classList.add("d-block");
            document.getElementById("tao_longe").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'terra_feita_de_tempo':
            document.getElementById("terra_feita_de_tempo").classList.remove("d-none");
            document.getElementById("terra_feita_de_tempo").classList.add("d-block");
            document.getElementById("terra_feita_de_tempo").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'identidade':
            document.getElementById("identidade").classList.remove("d-none");
            document.getElementById("identidade").classList.add("d-block");
            document.getElementById("identidade").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'naturalis_optio':
            document.getElementById("naturalis_optio").classList.remove("d-none");
            document.getElementById("naturalis_optio").classList.add("d-block");
            document.getElementById("naturalis_optio").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'regenerar':
            document.getElementById("regenerar").classList.remove("d-none");
            document.getElementById("regenerar").classList.add("d-block");
            document.getElementById("regenerar").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'sufoco_1':
            document.getElementById("sufoco_1").classList.remove("d-none");
            document.getElementById("sufoco_1").classList.add("d-block");
            document.getElementById("sufoco_1").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        case 'sufoco_2':
            document.getElementById("sufoco_2").classList.remove("d-none");
            document.getElementById("sufoco_2").classList.add("d-block");
            document.getElementById("sufoco_2").scrollIntoView({ 
                behavior: 'smooth' 
            });
            break;
        default:
            break;
    }
    removeanimates();
}