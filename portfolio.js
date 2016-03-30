$(document).ready(function() {
	$("body").css("display", "none");
    $("body").fadeIn(2000);

    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        console.log(this.href);
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});