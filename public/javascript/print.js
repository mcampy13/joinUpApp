$(document).ready(function() {
    console.log('entered print.js');
    Parse.initialize("mg1qP8MFKOVjykmN3Aha6Q47L6XtuNQLIyVKFutU", "jbAhu3Txusmh2fpHCBjemv87emMIn99YtAu7fhq7");
    
       Users = Parse.Object.extend('User');
    var query2 = new Parse.Query(Users);
    console.log('print-query about to begin');
    query2.find({
      success: function(results2) {
        // cycle through the results
        console.log('success in entering print-query');
        for ( x in results2 ) {
            // print out the usernames and email addresses
            console.log( results2[x].attributes.username + ' ' + results2[x].attributes.email );
        }
      },
      error: function(error) {
        // Error occured
        console.log('error in entering print-query');
        console.log( error );
      }
    });
    
   

});