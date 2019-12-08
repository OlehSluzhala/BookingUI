
		$(function() {
              $('input[name="datetime"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                startDate: moment().startOf('hour'),
                maxYear: moment().startOf('hour'),
                locale: {
                  format: 'DD/MMMM/YYYY'
                }
              });
            });
  
        $(function() {
          $('input[name="datetimes"]').daterangepicker({
            minDate: moment().startOf('day'),
            startDate: moment().startOf('day'),
            endDate: moment().startOf('day').add(3, 'day'),
            locale: {
              format: 'DD/M/YY'
            }
          });
        });    
 