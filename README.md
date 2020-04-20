# Tiqqit.net

Tiqqit is a minimalistic open source bug tracking tool, allowing its users to create, edit, delete tickets, and upload images. Built on React on Rails, it features Devise as its account authorization and authentication along with Giphy API for some fun easter eggs.

It was designed and developed by [Rudy Becker](https://github.com/RudyBecker), [Tsz Li](https://github.com/bli013), [Danny Romero](https://github.com/fdromero32) and [Andee Isaacs](https://github.com/alyxender) as their [LEARN Academy](https://www.learnacademy.org/) 2020 capstone project. 

## Why did you make this? 

Our goal when creating this full stack rails application was to create a tool we could use throughout our career as a personal bug tracking tool. We also wanted to have a project we could always reference to that would tell a story of its own progression through the tickets it had in its live demo. We found this to be an invaluable aspect that would always be relatable to anyone we show it to in the tech community or in our interviews. 


## Features

- Login/Logout/New account creation.
- View a list of any existing tickets currently in the model. 
- View a list of any tickets you have created for yourself.
- Drill down into an individual ticket to see additional details (Comments and Images)
- Create a new ticket and add it to the index of existing tickets.
- Edit an existing ticket to change certain details.
- Delete an existing ticket.

## Do you have any plans for future features?

We're all pretty busy now adays, but every so often we will come back and add a new feature in. Some future features we want to include are:

- Assignment to specific users.
- Easy drag and drop sorting of tickets.
- Sorting the tickets by specific columns.
- Breaking up the tickets and grouping by specific projects. 

## What technologies does it utilize?

- Ruby
- Ruby on Rails
- Javascript
- React
- React on Rails
- SQL
- Devise (Secure login)
- AWS (Image upload)
- Hamsters to keep the servers happy and running

## Sounds cool! Where can I see a live demo? 

Aww, thanks. We're pretty proud of our work too. 
If you want to see a live demo, simply visit [TIQQIT.net](localhost:3000)


## Installation?

Great!  We're going to assume you've installed Ruby, Rails and Yarn to your computer.

As your first step, you'll need to create a folder on your computer and `git clone` the repo to that folder.

Once you've done that, you'll need to run some basic commands to make sure everything is running well. You'll need to be within the cloned folder `cd tiqqit.net` and run the following commands

```bash
yarn 
bundle install
```
This will install the necessary yarn and bundle packages to the folder.

Following those commands. You'll want to drop, recreate and migrate the database files. 

``bash
rails db:drop
``
``bash
rails db:create
``
``bash
rails db:migrate
``
From here you should be all set to run your rails server and see the magic!
Note: Once you run the server, you'll need to make a new account, login and then you can create some tickets via the New Ticket form found in the navigation in order to see how the application works.

``bash
rails s
``
Open your browser and navigate to `localhost:3000`


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
