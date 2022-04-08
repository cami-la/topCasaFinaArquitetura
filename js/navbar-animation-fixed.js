$('#collapse-navbar').on('show.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%')
})

$('#collapse-navbar').on('hide.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%')
})