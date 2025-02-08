document.getElementById('opaForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Duty Time Calculation
    const week1 = parseInt(document.getElementById('week1').value);
    const week2 = parseInt(document.getElementById('week2').value);
    const week3 = parseInt(document.getElementById('week3').value);
    const week4 = parseInt(document.getElementById('week4').value);
    const avgDutyTime = (week1 + week2 + week3 + week4) / 4;
  
    let dutyTimePoints;
    if (avgDutyTime >= 901) dutyTimePoints = 5;
    else if (avgDutyTime >= 701) dutyTimePoints = 4;
    else if (avgDutyTime >= 401) dutyTimePoints = 3;
    else if (avgDutyTime >= 341) dutyTimePoints = 2;
    else dutyTimePoints = 1;
  
    // Incident Report Calculation
    const incidentReport = parseInt(document.getElementById('incidentReport').value);
    let incidentReportPoints;
    if (incidentReport >= 11) incidentReportPoints = 5;
    else if (incidentReport >= 7) incidentReportPoints = 4;
    else if (incidentReport >= 4) incidentReportPoints = 3;
    else if (incidentReport >= 2) incidentReportPoints = 2;
    else incidentReportPoints = 1;
  
    // Field Activity Report Calculation
    const fieldActivityWeek1 = parseInt(document.getElementById('fieldActivityWeek1').value);
    const fieldActivityWeek2 = parseInt(document.getElementById('fieldActivityWeek2').value);
    const fieldActivityWeek3 = parseInt(document.getElementById('fieldActivityWeek3').value);
    const fieldActivityWeek4 = parseInt(document.getElementById('fieldActivityWeek4').value);
    const avgFieldActivity = (fieldActivityWeek1 + fieldActivityWeek2 + fieldActivityWeek3 + fieldActivityWeek4) / 4;
  
    // Officer Activity Calculation
    const officerActivity = parseInt(document.getElementById('officerActivity').value);
    let officerActivityPoints;
    if (officerActivity >= 4) officerActivityPoints = 5;
    else if (officerActivity === 3) officerActivityPoints = 4;
    else if (officerActivity === 2) officerActivityPoints = 3;
    else if (officerActivity === 1) officerActivityPoints = 2;
    else if (officerActivity === 0) officerActivityPoints = 1;
    else officerActivityPoints = 1;
  
    // Ticket Record Calculation
    const ticketRecord = parseInt(document.getElementById('ticketRecord').value);
    let ticketRecordPoints;
    if (ticketRecord >= 15) ticketRecordPoints = 5;
    else if (ticketRecord >= 10) ticketRecordPoints = 4;
    else if (ticketRecord >= 7) ticketRecordPoints = 3;
    else if (ticketRecord >= 5) ticketRecordPoints = 2;
    else if (ticketRecord >= 3) ticketRecordPoints = 1;
    else ticketRecordPoints = 1;
  
    // Division Activity Calculation
    const divisionActivity = parseInt(document.getElementById('divisionActivity').value);
  
    // Officer Rank
    const officerRank = parseInt(document.getElementById('officerRank').value);
  
    // Total OPA Calculation
    const totalOPA = (
      dutyTimePoints +
      incidentReportPoints +
      avgFieldActivity +
      officerActivityPoints +
      ticketRecordPoints +
      divisionActivity
    );
  
    // Adjust Total OPA based on Officer Rank
    let finalOPA;
    if (officerRank === 2) { // Police Officer II+
      finalOPA = (totalOPA / 6).toFixed(2);
    } else { // Police Officer I
      finalOPA = (totalOPA / 5).toFixed(2);
    }
  
    // Display Result
    document.getElementById('result').innerHTML = `
      <p><strong>Total OPA Score: ${finalOPA}</strong></p>
    `;
  });
