let delay = (function() {
    let timer = 0;
    return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

(function( $ ) {
    $.fn.autocomplete = function() {
        return this.each(function() {
            let that = $(this);
            let refId = that.attr('id');
            let source = that.data('source');
            let name = that.data('name');
            let wrapperElt = $('<div>').addClass('autocomplete-wrapper');
            let clearElt = $('<i>').addClass('fas fa-times -js-clear hide');
            let searchElt = $('<input>')
                .addClass('form-control')
                .attr('type', 'text')
                .attr('data-ref', refId);
            let resultsElt = $('<div>').addClass('autocomplete-results hide');

            if (that.val()) {
                searchElt.val(name);
                clearElt.removeClass('hide');
            }

            clearElt.on('click', function() {
                that.val('').attr('data-name', '');
                searchElt.val('');
                resultsElt.empty();
                $(this).addClass('hide');
            });

            wrapperElt.append(
                searchElt
            ).append(
                clearElt
            ).append(
                resultsElt
            );
            that.after(wrapperElt);

            resultsElt.on('click', 'li', function() {
                searchElt.val($(this).text());
                that.val($(this).data('id')).attr('data-name', $(this).text());
                resultsElt.addClass('hide');
                clearElt.removeClass('hide');
            });

            searchElt.on('focus', function() {
                if (resultsElt.find('li').length > 0) {
                    resultsElt.removeClass('hide');
                }
            });

            searchElt.on('keyup', function () {
                delay(function(){
                    $.get({
                        url: source,
                        dataType: 'json',
                        data: {
                            'q': searchElt.val()
                        },
                        success: function(data, status, xhr) {
                            resultsElt.empty();

                            if (!resultsElt.hasClass('hide')) {
                                resultsElt.addClass('hide');
                            }

                            if (data.length === 0) {
                                resultsElt.append($('<p>').text(that.data('no-item-error')));
                                resultsElt.removeClass('hide');
                                return;
                            }

                            let ulElt = $('<ul>');

                            for (let i = 0; i < data.length; i++) {
                                ulElt.append(
                                    $('<li>').text(data[i].name).attr('data-id', data[i].id)
                                );
                            }

                            resultsElt.append(ulElt);
                            resultsElt.removeClass('hide');
                        }
                    });
                }, 250);
            });

            $(document).mouseup(function(e) {
                if (!wrapperElt.is(e.target) && wrapperElt.has(e.target).length === 0 && !resultsElt.hasClass('hide')) {
                    resultsElt.addClass('hide');
                }
            });
        });
    };
}( jQuery ));
