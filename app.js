/**
 * Created by jinliang on 7/12/16.
 */

// http://www.sitepoint.com/recreating-google-images-search-layout-css


$('document').ready(function () {

    // append cells to grid
    $('.image-grid').empty().html(cells(9));

    // bind click events
    var $cells = $('.image-cell');

    $cells.find('.image-basic').click(function () {
        var $thisCell = $(this).closest('.image-cell');

        if ($thisCell.hasClass('is-collapsed')) {
            //
            $thisCell.removeClass('is-collapsed').addClass('is-expanded');
            $cells.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
        } else {
            $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        }
    });

    $cells.find('.expand-close').click(function () {
        var $thisCell = $(this).closest('.image-cell');
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    });

});


// dynamically create loads of image cells
function cells(count) {
    if (typeof count !== 'number' || count > 99) return false;

    var html = '';
    var imageNum;

    for (var i = 0; i < count; i++) {
        imageNum = Math.floor(Math.random() * 9) + 1;
        html +=
            '<article class="image-cell is-collapsed">' +

            '<div class="image-basic">' +
            '<a href="#expand-jump-' + i + '">' +
            '<img id="expand-jump-' + i + '" class="basic-img" src="http://lorempixel.com/250/250/fashion/' + imageNum + '" alt="Fashion ' + imageNum + '" />' +
            '</a>' +

            '<div class="arrow-up"></div>' +
            '</div>' +


            '<div class="image-expand">' +

            '<a href="#close-jump-' + i + '" class="expand-close"></a>' +
            '<img class="image-large" src="http://lorempixel.com/400/400/fashion/' + imageNum + '" alt="Fashion ' + imageNum + '" />' +
            '</div>' +

            '</article>';
    }
    return html;
}