

 var config = {
   apiKey: "AIzaSyAa4C7JSyNmOxvYQon-T9jMOnJF2HofXM0",
   authDomain: "employeedb-20556.firebaseapp.com",
   databaseURL: "https://employeedb-20556.firebaseio.com",
   projectId: "employeedb-20556",
   storageBucket: "employeedb-20556.appspot.com",
   messagingSenderId: "589087777921"
 };
 firebase.initializeApp(config);


var fMonthsWorked = 0;
var fTotalBilling = 0;
var d = new Date();


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
    var worked = parseInt(d) - parseInt(fStartDate);
    console.log("Worked "+ worked);
    var $div=$("<div>");
    $div.append(fEmployeeName + " ");
    $div.append(fRole + " ");
    $div.append(fStartDate + " ");
    $div.append(fMonthsWorked + " ");
    $div.append(fMonthlyRate + " ");
    $div.append(fTotalBilling);
    
   
   
    $("#employee-database").append($div);
//Update database value
database.ref('/employee').set({
    employeeName: fEmployeeName,
    role: fRole,
    startDate: fStartDate,
    monthsWorked: fMonthsWorked,
    monthlyRate: fMonthlyRate,
    totalBilling: fTotalBilling,
  });

  
});