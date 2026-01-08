const employees = [
  {
    "id": "emp1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare monthly report",
        "description": "Compile the sales and marketing report for the month.",
        "date": "2026-01-05",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update client database",
        "description": "Ensure all client contact details are up-to-date.",
        "date": "2026-01-06",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team meeting preparation",
        "description": "Prepare slides and talking points for weekly team meeting.",
        "date": "2026-01-07",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code review",
        "description": "Review pull requests for the frontend module.",
        "date": "2026-01-04",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix login bug",
        "description": "Resolve issue causing login failures for some users.",
        "date": "2026-01-03",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare onboarding docs",
        "description": "Create documentation for new joiners.",
        "date": "2026-01-05",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design new dashboard UI",
        "description": "Create initial wireframes for the new dashboard.",
        "date": "2026-01-02",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Call clients to gather feedback on current dashboard.",
        "date": "2026-01-03",
        "category": "Client",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize dashboard performance",
        "description": "Improve loading speed for charts and tables.",
        "date": "2026-01-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write test cases",
        "description": "Create unit tests for API endpoints.",
        "date": "2026-01-01",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database backup",
        "description": "Perform weekly backup of client database.",
        "date": "2026-01-02",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix email notifications",
        "description": "Resolve the bug causing missing email alerts.",
        "date": "2026-01-05",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "emp5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare budget plan",
        "description": "Create budget allocation plan for next quarter.",
        "date": "2026-01-01",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update website content",
        "description": "Add new product info to website.",
        "date": "2026-01-03",
        "category": "Website",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team knowledge sharing",
        "description": "Conduct session on new frontend technologies.",
        "date": "2026-01-06",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": "admin1@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))    
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}