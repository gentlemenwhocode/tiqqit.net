tickets = [
  {
    title: 'Loggin form not working',
    project_cat: 'Tiqqit.net',
    prob_cat: 'frontend',
    priority: 1,
    desc: 'The login form needs to be stylized and work properly.',
    status: 'Open',
    due_date: '04/19/2020 12:00',
    image: 'n/a',
    comments: '',
    user_id: 1
  },
  {
    title: 'Logged in home page not displaying tickets',
    project_cat: 'Tiqqit.net',
    prob_cat: 'frontend',
    priority: 1,
    desc: 'When a user visits the home page after logging in, they should see a list of open tickets. Nothing is currently being displayed.',
    status: 'Open',
    due_date: '04/19/2020 12:00',
    image: 'n/a',
    comments: '',
    user_id: 1
  }
]

tickets.each do |attributes|
  Ticket.create attributes
end