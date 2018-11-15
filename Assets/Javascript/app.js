var fMonthsWorked = 0;
var fTotalBilling = 0;



$("#submit-route").on("click", function(event) {
    event.preventDefault();
    var fEmployeeName = $("#employee-name").val().trim();
    var fRole = $("#role").val().trim();
    var fStartDate = $("#start-date").val().trim();
    var fMonthlyRate = $("#monthly-rate").val().trim();
    $("#employee-name").val("");
    $("#role").val("");
    $("#start-date").val("");
    $("#monthly-rate").val("");
    console.log("Employee Name "+fEmployeeName);
    console.log("Role "+fRole);
    console.log("Start Date "+fStartDate);
    console.log("Monthly Rate "+fMonthlyRate);
    var $div=$("<div>");
    $div.append(fEmployeeName + " ");
    $div.append(fRole + " ");
    $div.append(fStartDate + " ");
    $div.append(fMonthsWorked + " ");
    $div.append(fMonthlyRate + " ");
    $div.append(fTotalBilling);
    
   
   
    $("#employee-database").append($div);

});