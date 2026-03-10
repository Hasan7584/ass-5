
//   // Example: dynamically updating counts and status colors
//   const openStatus = document.getElementById('open-status');
//   const closeStatus = document.getElementById('close-status');
//   const issueCount = document.getElementById('issue-count');

//   // Sample data (you could fetch this from an API)
//   const issues = [
//     { id: 1, status: 'open' },
//     { id: 2, status: 'closed' },
//     { id: 3, status: 'open' },
//     { id: 4, status: 'closed' },
//   ];

//   function updateStatus() {
//     const openIssues = issues.filter(issue => issue.status === 'open').length;
//     const closedIssues = issues.filter(issue => issue.status === 'closed').length;

//     // Update count
//     issueCount.innerText = `${issues.length} Issues`;

//     // Update color dynamically (optional)
//     openStatus.style.color = openIssues > 0 ? 'rgb(44, 214, 20)' : 'gray';
//     closeStatus.style.color = closedIssues > 0 ? '#A855F7' : 'gray';
//   }

//   updateStatus();
