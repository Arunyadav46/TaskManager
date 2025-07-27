const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "emp@1.com",
    password: "123",
    taskSummary: {
      activeTasks: 1,
      newTasks: 2,
      completedTasks: 1,
      failedTasks: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with user login failing on invalid input.",
        taskDate: "2025-07-24",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        title: "Design homepage",
        description: "Create a responsive homepage layout for the new project.",
        taskDate: "2025-07-20",
        category: "Design"
      }
    ]
  },
  {
    id: 2,
    firstname: "Ravi",
    email: "emp@2.com",
    password: "123",
    taskSummary: {
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API testing",
        description: "Test the user registration and login API endpoints.",
        taskDate: "2025-07-23",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database cleanup",
        description: "Remove unused user records from staging database.",
        taskDate: "2025-07-21",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment gateway integration",
        description: "Integrate Stripe for project XYZ. Deadline missed.",
        taskDate: "2025-07-19",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstname: "Suresh",
    email: "emp@3.com",
    password: "123",
    taskSummary: {
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 0,
      failedTasks: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write blog post",
        description: "Write a blog on REST API vs GraphQL for internal docs.",
        taskDate: "2025-07-24",
        category: "Content"
      }
    ]
  },
  {
    id: 4,
    firstname: "Neha",
    email: "emp@4.com",
    password: "123",
    taskSummary: {
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "UI improvement",
        description: "Improve the UI/UX of the login page.",
        taskDate: "2025-07-20",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client meeting prep",
        description: "Prepare presentation slides for client meeting.",
        taskDate: "2025-07-25",
        category: "Management"
      }
    ]
  },
  {
    id: 5,
    firstname: "Priya",
    email: "emp@5.com",
    password: "123",
    taskSummary: {
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create project report",
        description: "Summarize last sprint’s outcomes and issues.",
        taskDate: "2025-07-24",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Frontend bug fix",
        description: "Fix header alignment issue in mobile view.",
        taskDate: "2025-07-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize images",
        description: "Compress and optimize all images for better performance.",
        taskDate: "2025-07-21",
        category: "Optimization"
      }
    ]
  }
];



const admin = [
   {
  "id": 101,
  "email": "admin@me.com",
  "password": "123"
  }
]

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees  = JSON.parse(localStorage.getItem('employees'))
  const admin  = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees);
  // console.log(admin);

  return {employees,admin}
}

